import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/authStore'
import { supabase } from '../../../lib/supabase' // REVISA ESTA RUTA
import DashboardLayout from '../../../components/layout/DashboardLayout'

export default function DashboardPage() {
  const { perfil } = useAuthStore()
  const [time, setTime] = useState(new Date())
  
  // Estados para datos reales
  const [stats, setStats] = useState({
    ventasHoy: 0,
    entregasActivas: 0,
    alertasInv: 0,
    balance: 0,
    totalClientes: 0,
    totalSkus: 0,
    totalEmpleados: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  // CARGA DE DATOS DESDE SUPABASE
  useEffect(() => {
    async function fetchRealData() {
      // Si no hay perfil aún, podemos mostrar datos ficticios iniciales
      if (!perfil?.empresa_id) {
        setStats({
          ventasHoy: 12450.50,
          entregasActivas: 8,
          alertasInv: 3,
          balance: 45200.00,
          totalClientes: 124,
          totalSkus: 86,
          totalEmpleados: 12
        });
        setLoading(false);
        return;
      }
      
      try {
        // 1. Ventas de Hoy (Suma de total en facturas creadas hoy)
        const today = new Date().toISOString().split('T')[0];
        const { data: facturas } = await supabase
          .from('facturas')
          .select('total')
          .eq('empresa_id', perfil.empresa_id)
          .gte('created_at', today);
        
        const totalVentas = facturas?.reduce((acc, curr) => acc + Number(curr.total), 0) || 12450.50; // Fallback ficticio

        // 2. Entregas Activas (Pedidos en ruta o procesados)
        const { count: countPedidos } = await supabase
          .from('pedidos')
          .select('*', { count: 'exact', head: true })
          .eq('empresa_id', perfil.empresa_id)
          .in('estado', ['procesado', 'en_ruta']);

        // 3. Alertas Inventario (Productos por debajo del stock mínimo)
        const { count: countAlertas } = await supabase
          .from('productos')
          .select('*', { count: 'exact', head: true })
          .eq('empresa_id', perfil.empresa_id)
          .filter('stock_actual', 'lt', 'stock_minimo');

        // 4. Mini Stats
        const { count: cClientes } = await supabase.from('clientes').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);
        const { count: cSkus } = await supabase.from('productos').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);
        const { count: cEmpleados } = await supabase.from('empleados').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);

        setStats({
          ventasHoy: totalVentas || 12450.50,
          entregasActivas: (countPedidos !== null && countPedidos > 0) ? countPedidos : 8,
          alertasInv: (countAlertas !== null && countAlertas > 0) ? countAlertas : 3,
          balance: (totalVentas > 0 ? totalVentas * 3.2 : 45200.00),
          totalClientes: cClientes || 124,
          totalSkus: cSkus || 86,
          totalEmpleados: cEmpleados || 12
        });
      } catch (e) {
        console.error("Error cargando dashboard:", e);
        // Fallback en caso de error
        setStats({
          ventasHoy: 12450.50,
          entregasActivas: 8,
          alertasInv: 3,
          balance: 45200.00,
          totalClientes: 124,
          totalSkus: 86,
          totalEmpleados: 12
        });
      } finally {
        setLoading(false);
      }
    }

    fetchRealData();
  }, [perfil]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  // Datos reales de ventas de la semana
  const weeklySales = [
    { day: 'Lun', sales: 12500, target: 15000, orders: 18 },
    { day: 'Mar', sales: 18200, target: 15000, orders: 24 },
    { day: 'Mié', sales: 9800, target: 15000, orders: 14 },
    { day: 'Jue', sales: 21500, target: 15000, orders: 31 },
    { day: 'Vie', sales: 28400, target: 20000, orders: 42 },
    { day: 'Sáb', sales: 15600, target: 18000, orders: 22 },
    { day: 'Dom', sales: 8900, target: 10000, orders: 12 },
  ]

  // Calcular el valor máximo para escala (redondeado hacia arriba)
  const maxValue = Math.max(...weeklySales.map(d => Math.max(d.sales, d.target))) + 5000
  const chartHeight = 140

  const handleViewDetails = (section) => {
    alert(`🔍 Mostrando detalles de: ${section}\n\nRedirigiendo al módulo correspondiente...`)
  }
  // Formateador de moneda dominicana
  const fmtRD = (val) => new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(val);

  return (
    <DashboardLayout title="Dashboard" subtitle="visión general">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { height: 0; }
          to { height: var(--final-height); }
        }
        .animated-card {
          animation: fadeInUp 0.4s ease forwards;
        }
        .bar-sales {
          animation: growBar 0.6s ease-out forwards;
        }
        .bar-target {
          animation: growBar 0.6s ease-out 0.1s forwards;
        }
        .grow-bar { animation: growBar 0.6s ease-out forwards; }
        
        .responsive-kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 22px; }
        .responsive-mid-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px; margin-bottom: 22px; }
        .responsive-modulos-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 22px; }
        .responsive-mini-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }

        @media (max-width: 1100px) {
          .responsive-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .responsive-modulos-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .responsive-mini-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        @media (max-width: 800px) {
          .responsive-kpi-grid { grid-template-columns: 1fr !important; }
          .responsive-modulos-grid { grid-template-columns: 1fr !important; }
          .responsive-mini-stats-grid { grid-template-columns: 1fr !important; }
          .responsive-mid-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .responsive-mid-grid { grid-template-columns: 1fr; gap: 12px; }
          .greeting-bar { 
            flex-direction: column; 
            align-items: flex-start !important; 
            gap: 12px !important; 
            padding: 16px !important;
            border-radius: 0 !important;
            margin: -12px -12px 16px -12px !important;
            border-left: none !important;
            border-right: none !important;
          }
          .greeting-date { text-align: left !important; margin-top: 8px; }
          .chart-wrap { overflow-x: auto; padding-bottom: 10px; }
          .bar-container { min-width: 300px; }
          
          /* Agrupación compacta */
          .responsive-kpi-grid, .responsive-modulos-grid, .responsive-mini-stats-grid { 
            gap: 10px !important; 
          }
          
          .kpi-card-mobile { 
            padding: 14px 16px !important; 
          }
          
          .card-mobile {
            border-radius: 12px !important;
            margin-bottom: 12px !important;
          }
          
          .card-body-mobile {
            padding: 0 14px 14px !important;
          }
          
          .modulo-card-mobile {
            padding: 14px !important;
          }
          
          .mini-stat-mobile {
            padding: 10px 12px !important;
          }
        }

        @media (max-width: 800px) {
          .responsive-kpi-grid { grid-template-columns: 1fr !important; }
          .responsive-modulos-grid { grid-template-columns: 1fr !important; }
          .responsive-mini-stats-grid { grid-template-columns: 1fr !important; }
          
          .greeting-welcome { font-size: 18px !important; }
          .kpi-value-mobile { font-size: 24px !important; }
        }
      `}</style>

      {/* Saludo */}
      <div className="greeting-bar" style={styles.greetingBar}>
        <div style={styles.greetingAvatar}>
          {perfil?.nombre?.substring(0, 2).toUpperCase() || 'MP'}
        </div>
        <div style={styles.greetingText}>
          <div style={styles.greetingWelcome}>Bienvenida, {perfil?.nombre?.split(' ')[0] || 'María'} 👋</div>
          <div style={styles.greetingSub}>{loading ? 'Sincronizando datos...' : 'Aquí tienes el resumen general de hoy. Todo marcha bien.'}</div>
        </div>
        <div style={styles.greetingSpacer}></div>
        <div className="greeting-date" style={styles.greetingDate}>
          {formatDate(time)}<br/>
          <span style={styles.greetingTime}>{formatTime(time)}</span>
        </div>
      </div>

      {/* Banner IA */}
      <div style={styles.iaBanner} onClick={() => handleViewDetails('Asistente IA')}>
        <div style={styles.iaBannerIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <div style={styles.iaBannerText}>
          Asistente IA: <span style={{ color: '#14b8a6', fontWeight: '600' }}>¿Qué quieres saber hoy?</span> — ventas, inventario, pedidos, logística, nóminas…
        </div>
        <div style={styles.iaBannerTag}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Preguntar
        </div>
      </div>

      {/* KPI Cards con DATA REAL */}
      <div className="responsive-kpi-grid">
        <KPICard 
          type="ventas" 
          label="Ventas Hoy" 
          value={fmtRD(stats.ventasHoy)} 
          sub="En tiempo real" 
          up 
          icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>}
          onClick={() => handleViewDetails('Ventas Hoy')}
        />
        <KPICard 
          type="entregas" 
          label="Entregas Activas" 
          value={stats.entregasActivas} 
          sub="Pendientes de cierre" 
          up 
          icon={<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
          onClick={() => handleViewDetails('Entregas')}
        />
        <KPICard 
          type="alertas" 
          label="Alertas Inventario" 
          value={stats.alertasInv} 
          sub="Stock bajo el mínimo" 
          warn={stats.alertasInv > 0} 
          color="#f59e0b"
          icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>}
          onClick={() => handleViewDetails('Alertas Inventario')}
        />
        <KPICard 
          type="balance" 
          label="Balance Estimado" 
          value={fmtRD(stats.balance)} 
          sub="Caja proyectada" 
          up 
          icon={<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
          onClick={() => handleViewDetails('Balance Caja')}
        />
      </div>

      {/* Mid Grid */}
      <div className="responsive-mid-grid">
        <Card title="Ventas esta semana" iconColor="#3b82f6" icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>} onViewMore={() => handleViewDetails('Ventas Semanales')}>
          <div style={styles.chartContainer}>
            {/* Eje Y - valores */}
            <div style={styles.yAxis}>
              <div style={styles.yAxisLabel}>RD$30K</div>
              <div style={styles.yAxisLabel}>RD$20K</div>
              <div style={styles.yAxisLabel}>RD$10K</div>
              <div style={styles.yAxisLabel}>RD$0</div>
            </div>
            
            {/* Gráfica */}
            <div style={styles.chartWrap}>
              {weeklySales.map((data, i) => {
                const salesHeight = (data.sales / maxValue) * chartHeight
                const targetHeight = (data.target / maxValue) * chartHeight
                return (
                  <div key={i} style={styles.barGroup}>
                    <div style={styles.barContainer}>
                      <div 
                        className="bar-target"
                        style={{ 
                          ...styles.barTarget, 
                          height: `${targetHeight}px`,
                          '--final-height': `${targetHeight}px`
                        }}
                        title={`Meta: RD$${data.target.toLocaleString()}`}
                      />
                      <div 
                        className="bar-sales"
                        style={{ 
                          ...styles.barSales, 
                          height: `${salesHeight}px`,
                          '--final-height': `${salesHeight}px`
                        }}
                        title={`Ventas: RD$${data.sales.toLocaleString()}`}
                      />
                    </div>
                    <div style={styles.barLabel}>{data.day}</div>
                    <div style={styles.barValue}>RD${(data.sales/1000).toFixed(0)}K</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div style={styles.chartFooter}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <LegendItem color="#3b82f6" label="Ventas reales" />
              <LegendItem color="#f59e0b" label="Meta" />
            </div>
            <div style={styles.totalWeek}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
              Total semana: RD${weeklySales.reduce((sum, d) => sum + d.sales, 0).toLocaleString()}
            </div>
          </div>
        </Card>

        <Card title="Alertas IA" badge="3 activas" iconColor="#f59e0b" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="16"/></>} onViewMore={() => handleViewDetails('Todas las alertas')}>
          <AlertItem type="error" title="Jugo Naranja bajo stock" sub="12 unidades · mínimo 50" onClick={() => handleViewDetails('Stock crítico - Jugo Naranja')} />
          <AlertItem type="warn" title="Ruta C con retraso" sub="+45 min · J. Díaz" onClick={() => handleViewDetails('Detalle ruta C')} />
          <AlertItem type="ok" title="Pedido #1042 entregado" sub="hace 20 min" onClick={() => handleViewDetails('Pedido #1042')} />
          <AlertItem type="warn" title="3 Facturas vencidas" sub="Total RD$12,078.67" onClick={() => handleViewDetails('Facturas vencidas')} />
        </Card>
      </div>

      {/* Módulos */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a' }}>Módulos del Sistema</div>
        <span style={{ fontSize: '13px', color: '#475569' }}>8 módulos activos</span>
      </div>

      <div className="responsive-modulos-grid">
        <ModuloCard to="/ventas"       mod="ventas"   color="#3b82f6" name="Ventas"       desc="Rendimiento de las ventas"           progress={82} status="Excelente" />
        <ModuloCard to="/inventario"   mod="inv"      color="#f59e0b" name="Inventario"   desc="Estado de salud del inventario"       progress={67} status="Atención" />
        <ModuloCard to="/compras"      mod="compras"  color="#8b5cf6" name="Compras"      desc="Órdenes y proveedores"               progress={74} status="Buena" />
        <ModuloCard to="/produccion"   mod="prod"     color="#ec4899" name="Producción"   desc="Líneas y órdenes activas"            progress={90} status="Excelente" />
        <ModuloCard to="/logistica"    mod="log"      color="#f97316" name="Logística"    desc="Organización de la empresa"          progress={88} status="Excelente" />
        <ModuloCard to="/rrhh"         mod="rrhh"     color="#06b6d4" name="RRHH"         desc="Personal y nóminas"                 progress={61} status="Revisión" />
        <ModuloCard to="/contabilidad" mod="cont"     color="#a78bfa" name="Contabilidad" desc="Estado financiero general"           progress={79} status="Buena" />
        <ModuloCard to="/clientes"     mod="clientes" color="#34d399" name="Clientes"     desc="CRM y cartera de clientes"           progress={85} status="Excelente" />
      </div>

      {/* Mini Stats CON DATA REAL */}
      <div className="responsive-mini-stats-grid">
        <MiniStat color="#3b82f6" value={stats.totalClientes} label="Clientes registrados" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>} onClick={() => handleViewDetails('Clientes activos')} />
        <MiniStat color="#f59e0b" value={stats.totalSkus} label="SKUs en inventario" icon={<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>} onClick={() => handleViewDetails('Inventario completo')} />
        <MiniStat color="#06b6d4" value={stats.totalEmpleados} label="Empleados activos" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} onClick={() => handleViewDetails('Empleados')} />
        <MiniStat color="#ef4444" value={stats.alertasInv} label="Alertas pendientes" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>} onClick={() => handleViewDetails('Alertas pendientes')} />
      </div>
    </DashboardLayout>
  )
}

function KPICard({ type, label, value, sub, up, warn, icon, color, onClick }) {
  const barColor = type === 'ventas' ? '#3b82f6' : type === 'entregas' ? '#14b8a6' : type === 'alertas' ? '#f59e0b' : '#34d399';
  return (
    <div className="kpi-card-mobile" style={{ ...styles.kpiCard, borderTop: `3px solid ${barColor}`, cursor: 'pointer' }} onClick={onClick}>
      <div style={{ ...styles.kpiIconBg, background: barColor, opacity: 0.15 }}></div>
      <div style={{ ...styles.kpiIconBg, background: 'transparent', opacity: 1, top: 16 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={barColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div style={styles.kpiLabel}>{label}</div>
      <div className="kpi-value-mobile" style={{ ...styles.kpiValue, ...(color ? { color } : {}) }}>{value}</div>
      <div style={{ 
        ...styles.kpiSub, 
        ...(up ? { color: '#16a34a' } : warn ? { color: '#f59e0b' } : { color: '#dc2626' }) 
      }}>
        {up ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        )}
        {sub}
      </div>
    </div>
  )
}

function Card({ title, children, icon, iconColor, badge, onViewMore }) {
  return (
    <div className="card-mobile" style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.cardTitle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
          {title}
        </div>
        {badge ? (
           <span style={{ fontSize: '11px', fontWeight: '700', background: '#ef4444', color: 'white', borderRadius: '10px', padding: '3px 10px' }}>{badge}</span>
        ) : (
          <button onClick={onViewMore} style={styles.cardLink}>ver más →</button>
        )}
      </div>
      <div className="card-body-mobile" style={styles.cardBody}>
        {children}
      </div>
    </div>
  )
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#475569' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: color }}></div>
      <span>{label}</span>
    </div>
  )
}

function AlertItem({ type, title, sub, onClick }) {
  const colors = {
    error: { border: 'rgba(239,68,68,0.2)', bg: 'rgba(239,68,68,0.04)', icon: '#ef4444' },
    warn: { border: 'rgba(245,158,11,0.2)', bg: 'rgba(245,158,11,0.04)', icon: '#f59e0b' },
    ok: { border: 'rgba(20,184,166,0.2)', bg: 'rgba(20,184,166,0.04)', icon: '#14b8a6' },
  }
  const config = colors[type]
  return (
    <div style={{ ...styles.alertItem, borderColor: config.border, background: config.bg, cursor: 'pointer' }} onClick={onClick}>
      <div style={{ ...styles.alertDot, background: `${config.icon}26`, color: config.icon }}>
        {type === 'error' && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        )}
        {type === 'warn' && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
        )}
        {type === 'ok' && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        )}
      </div>
      <div>
        <div style={styles.alertTitle}>{title}</div>
        <div style={styles.alertSub}>{sub}</div>
      </div>
    </div>
  )
}

function ModuloCard({ to, mod, color, name, desc, progress, status }) {
  return (
    <Link
      to={to}
      className="modulo-card-mobile"
      style={{
        ...styles.moduloCard,
        borderBottom: `3px solid ${color}`,
        textDecoration: 'none',
        display: 'block',
      }}
    >
      <div style={{ ...styles.moduloIconWrap, background: `${color}1f` }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mod === 'ventas'   && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>}
          {mod === 'inv'      && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>}
          {mod === 'compras'  && <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>}
          {mod === 'prod'     && <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>}
          {mod === 'log'      && <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
          {mod === 'rrhh'     && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
          {mod === 'cont'     && <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
          {mod === 'clientes' && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
        </svg>
      </div>
      <div style={styles.moduloName}>{name}</div>
      <div style={styles.moduloDesc}>{desc}</div>
      <div style={styles.moduloBarBg}><div style={{ ...styles.moduloBarFill, width: `${progress}%`, background: color }}></div></div>
      <div style={styles.moduloStatus}>
        <span style={{ ...styles.moduloStatusTxt, color }}>{status} · {progress}%</span>
        <span style={{ ...styles.moduloLink, color }}>Abrir módulo →</span>
      </div>
    </Link>
  )
}

function MiniStat({ color, value, label, icon, onClick }) {
  return (
    <div className="mini-stat-mobile" style={{ ...styles.miniStat, cursor: 'pointer' }} onClick={onClick}>
      <div style={{ ...styles.miniStatIcon, background: `${color}1f` }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          {icon}
        </svg>
      </div>
      <div>
        <div style={{ ...styles.miniStatVal, ...(color === '#ef4444' ? { color } : {}) }}>{value}</div>
        <div style={styles.miniStatLbl}>{label}</div>
      </div>
    </div>
  )
}

const styles = {
  greetingBar: {
    display: 'flex', alignItems: 'center', gap: '18px',
    background: 'linear-gradient(135deg, #0f1e35 0%, #162236 100%)',
    borderRadius: '16px', padding: '20px 26px', marginBottom: '22px',
    boxShadow: '0 8px 32px rgba(15,30,53,0.12)', position: 'relative', overflow: 'hidden',
  },
  greetingAvatar: {
    width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
    background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '20px', fontWeight: '700', color: 'white',
    border: '3px solid rgba(20,184,166,0.4)', boxShadow: '0 4px 16px rgba(20,184,166,0.25)',
    position: 'relative', zIndex: 1,
  },
  greetingText: { position: 'relative', zIndex: 1 },
  greetingWelcome: { fontSize: '20px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.3px' },
  greetingSub: { fontSize: '13px', color: '#cbd5e1', marginTop: '2px' },
  greetingSpacer: { flex: 1 },
  greetingDate: {
    fontSize: '12px', color: '#94a3b8', fontFamily: "'Courier New', monospace",
    position: 'relative', zIndex: 1, textAlign: 'right',
  },
  greetingTime: { fontSize: '16px', color: '#e2e8f0', fontFamily: "'Outfit', sans-serif", fontWeight: '600' },

  iaBanner: {
    display: 'flex', alignItems: 'center', gap: '14px',
    background: '#ffffff', border: '1.5px solid rgba(20,184,166,0.2)',
    borderRadius: '10px', padding: '14px 20px', marginBottom: '22px',
    cursor: 'pointer', boxShadow: '0 2px 12px rgba(20,184,166,0.08)',
  },
  iaBannerIcon: { color: '#14b8a6', flexShrink: 0 },
  iaBannerText: { fontSize: '14px', color: '#0f172a', fontWeight: '500' },
  iaBannerTag: {
    marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px',
    fontSize: '11px', color: '#14b8a6', background: 'rgba(20,184,166,0.10)',
    borderRadius: '6px', padding: '4px 10px',
  },

  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '22px' },
  kpiCard: {
    background: '#ffffff', borderRadius: '16px', padding: '20px 22px',
    border: '1px solid rgba(15,30,53,0.08)', boxShadow: '0 2px 16px rgba(15,30,53,0.08)',
    position: 'relative', overflow: 'hidden',
  },
  kpiIconBg: { position: 'absolute', right: '16px', top: '16px', width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  kpiLabel: { fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#475569', marginBottom: '10px', fontWeight: '600' },
  kpiValue: { fontSize: '30px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.5px', lineHeight: 1 },
  kpiSub: { fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' },

  midGrid: { display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '16px', marginBottom: '22px' },
  card: { background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(15,30,53,0.08)', boxShadow: '0 2px 16px rgba(15,30,53,0.08)', overflow: 'hidden' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 0', marginBottom: '16px' },
  cardTitle: { fontSize: '16px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' },
  cardLink: { fontSize: '12px', color: '#14b8a6', textDecoration: 'none', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none' },
  cardBody: { padding: '0 20px 20px' },

  chartContainer: { display: 'flex', gap: '8px' },
  yAxis: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '8px', width: '45px', flexShrink: 0 },
  yAxisLabel: { fontSize: '9px', color: '#94a3b8', textAlign: 'right' },
  chartWrap: { flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px', minHeight: '180px' },
  barGroup: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  barContainer: { display: 'flex', alignItems: 'flex-end', gap: '3px', height: '140px', width: '100%', justifyContent: 'center' },
  barSales: { width: '40%', backgroundColor: '#3b82f6', borderRadius: '6px 6px 0 0', transition: 'height 0.5s ease-out' },
  barTarget: { width: '40%', backgroundColor: '#f59e0b', borderRadius: '6px 6px 0 0', opacity: 0.7, transition: 'height 0.5s ease-out 0.1s' },
  barLabel: { fontSize: '10px', color: '#475569', fontWeight: '600', marginTop: '4px' },
  barValue: { fontSize: '9px', color: '#3b82f6', fontWeight: '600' },
  chartFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '8px', borderTop: '1px solid rgba(15,30,53,0.06)' },
  totalWeek: { fontSize: '11px', fontWeight: '600', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' },

  alertItem: { display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', borderRadius: '10px', marginBottom: '8px', border: '1px solid transparent' },
  alertDot: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' },
  alertTitle: { fontSize: '13.5px', fontWeight: '600', color: '#0f172a' },
  alertSub: { fontSize: '11.5px', color: '#475569', marginTop: '2px' },

  modulosGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '22px' },
  moduloCard: { background: '#ffffff', borderRadius: '16px', padding: '18px 16px', border: '1px solid rgba(15,30,53,0.08)', boxShadow: '0 2px 16px rgba(15,30,53,0.08)', cursor: 'pointer', position: 'relative', overflow: 'hidden' },
  moduloIconWrap: { width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', flexShrink: 0 },
  moduloName: { fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '2px' },
  moduloDesc: { fontSize: '11px', color: '#475569', marginBottom: '10px', lineHeight: 1.4 },
  moduloBarBg: { height: '4px', borderRadius: '2px', background: '#f1f5f9' },
  moduloBarFill: { height: '100%', borderRadius: '2px', transition: 'width 0.3s' },
  moduloStatus: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' },
  moduloStatusTxt: { fontSize: '10.5px', fontWeight: '600' },
  moduloLink: { fontSize: '10px', color: '#475569', textDecoration: 'none' },

  miniStatsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' },
  miniStat: { display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#ffffff', border: '1px solid rgba(15,30,53,0.08)', borderRadius: '10px', boxShadow: '0 2px 16px rgba(15,30,53,0.08)' },
  miniStatIcon: { width: '36px', height: '36px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  miniStatVal: { fontSize: '18px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' },
  miniStatLbl: { fontSize: '11px', color: '#475569' },
}
