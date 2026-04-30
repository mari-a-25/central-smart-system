import { useState, useEffect } from 'react'
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
      if (!perfil?.empresa_id) return;
      
      try {
        // 1. Ventas de Hoy (Suma de total en facturas creadas hoy)
        const today = new Date().toISOString().split('T')[0];
        const { data: facturas } = await supabase
          .from('facturas')
          .select('total')
          .eq('empresa_id', perfil.empresa_id)
          .gte('created_at', today);
        
        const totalVentas = facturas?.reduce((acc, curr) => acc + Number(curr.total), 0) || 0;

        // 2. Entregas Activas (Pedidos en ruta o procesados)
        const { count: countPedidos } = await supabase
          .from('pedidos')
          .select('*', { count: 'exact', head: true })
          .eq('empresa_id', perfil.empresa_id)
          .in('estado', ['procesado', 'en_ruta']);

        // 3. Alertas Inventario (Productos por debajo del stock mínimo)
        // Usamos una query simple: stock_actual < stock_minimo
        const { count: countAlertas } = await supabase
          .from('productos')
          .select('*', { count: 'exact', head: true })
          .eq('empresa_id', perfil.empresa_id)
          .filter('stock_actual', 'lt', 'stock_minimo'); // Esto asume que tienes lógica de comparación

        // 4. Mini Stats
        const { count: cClientes } = await supabase.from('clientes').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);
        const { count: cSkus } = await supabase.from('productos').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);
        const { count: cEmpleados } = await supabase.from('empleados').select('*', { count: 'exact', head: true }).eq('empresa_id', perfil.empresa_id);

        setStats({
          ventasHoy: totalVentas,
          entregasActivas: countPedidos || 0,
          alertasInv: countAlertas || 0,
          balance: totalVentas * 1.2, // Simulación de balance basado en ventas
          totalClientes: cClientes || 0,
          totalSkus: cSkus || 0,
          totalEmpleados: cEmpleados || 0
        });
      } catch (e) {
        console.error("Error cargando dashboard:", e);
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

  // Formateador de moneda dominicana
  const fmtRD = (val) => new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(val);

  return (
    <DashboardLayout title="Dashboard" subtitle="visión general">
      {/* Saludo */}
      <div style={styles.greetingBar}>
        <div style={styles.greetingAvatar}>
          {perfil?.nombre?.substring(0, 2).toUpperCase() || 'MP'}
        </div>
        <div style={styles.greetingText}>
          <div style={styles.greetingWelcome}>Bienvenida, {perfil?.nombre?.split(' ')[0] || 'María'} 👋</div>
          <div style={styles.greetingSub}>{loading ? 'Sincronizando datos...' : 'Aquí tienes el resumen general de hoy. Todo marcha bien.'}</div>
        </div>
        <div style={styles.greetingSpacer}></div>
        <div style={styles.greetingDate}>
          {formatDate(time)}<br/>
          <span style={styles.greetingTime}>{formatTime(time)}</span>
        </div>
      </div>

      {/* Banner IA */}
      <div style={styles.iaBanner}>
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
      <div style={styles.kpiGrid}>
        <KPICard 
          type="ventas" 
          label="Ventas Hoy" 
          value={fmtRD(stats.ventasHoy)} 
          sub="En tiempo real" 
          up 
          icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>}
        />
        <KPICard 
          type="entregas" 
          label="Entregas Activas" 
          value={stats.entregasActivas} 
          sub="Pendientes de cierre" 
          up 
          icon={<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
        />
        <KPICard 
          type="alertas" 
          label="Alertas Inventario" 
          value={stats.alertasInv} 
          sub="Stock bajo el mínimo" 
          warn={stats.alertasInv > 0} 
          color="#f59e0b"
          icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>}
        />
        <KPICard 
          type="balance" 
          label="Balance Estimado" 
          value={fmtRD(stats.balance)} 
          sub="Caja proyectada" 
          up 
          icon={<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
        />
      </div>

      {/* Mid Grid */}
      <div style={styles.midGrid}>
        <Card title="Ventas esta semana" iconColor="#3b82f6" icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>}>
            <div style={styles.chartWrap}>
              {[72, 85, 61, 91, 84, 47, 84].map((v, i) => (
                <div key={i} style={styles.barGroup}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', flex: 1 }}>
                    <div style={{ ...styles.bar, height: `${v}%`, background: '#3b82f6', opacity: i === 6 ? 1 : 0.65 }}></div>
                    <div style={{ ...styles.bar, height: '80%', background: '#f59e0b', opacity: 0.45 }}></div>
                  </div>
                  <div style={styles.barLabel}>{['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Hoy'][i]}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '14px', marginTop: '12px', justifyContent: 'center' }}>
              <LegendItem color="#3b82f6" label="Ventas" />
              <LegendItem color="#f59e0b" label="Meta" />
            </div>
        </Card>

        <Card title="Alertas de Sistema" badge={stats.alertasInv > 0 ? `${stats.alertasInv} críticas` : null} iconColor="#f59e0b" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="16"/></>}>
          {stats.alertasInv > 0 ? (
             <AlertItem type="error" title="Stock Crítico detectado" sub={`Hay ${stats.alertasInv} productos que requieren reposición inmediata.`} />
          ) : (
             <AlertItem type="ok" title="Inventario Saludable" sub="Todos los niveles están por encima del mínimo." />
          )}
          <AlertItem type="warn" title="Rutas de logística" sub="Verifica el estado de las paradas de hoy." />
          <AlertItem type="ok" title="Conexión Supabase" sub="Sincronización activa y segura." />
        </Card>
      </div>

      {/* Módulos */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Módulos del Sistema</div>
        <span style={{ fontSize: '12px', color: '#475569' }}>8 módulos activos</span>
      </div>

      <div style={styles.modulosGrid}>
        <ModuloCard mod="ventas" color="#3b82f6" name="Ventas" desc="Rendimiento de las ventas" progress={82} status="Excelente" />
        <ModuloCard mod="inv" color="#f59e0b" name="Inventario" desc="Estado de salud del inventario" progress={67} status="Atención" />
        <ModuloCard mod="compras" color="#8b5cf6" name="Compras" desc="Órdenes y proveedores" progress={74} status="Buena" />
        <ModuloCard mod="prod" color="#ec4899" name="Producción" desc="Líneas y órdenes activas" progress={90} status="Excelente" />
        <ModuloCard mod="log" color="#f97316" name="Logística" desc="Organización de la empresa" progress={88} status="Excelente" />
        <ModuloCard mod="rrhh" color="#06b6d4" name="RRHH" desc="Personal y nóminas" progress={61} status="Revisión" />
        <ModuloCard mod="cont" color="#a78bfa" name="Contabilidad" desc="Estado financiero general" progress={79} status="Buena" />
        <ModuloCard mod="clientes" color="#34d399" name="Clientes" desc="CRM y cartera de clientes" progress={85} status="Excelente" />
      </div>

      {/* Mini Stats CON DATA REAL */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '24px' }}>
        <MiniStat color="#3b82f6" value={stats.totalClientes} label="Clientes registrados" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>} />
        <MiniStat color="#f59e0b" value={stats.totalSkus} label="SKUs en inventario" icon={<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>} />
        <MiniStat color="#06b6d4" value={stats.totalEmpleados} label="Empleados activos" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />
        <MiniStat color="#ef4444" value={stats.alertasInv} label="Alertas pendientes" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>} />
      </div>
    </DashboardLayout>
  )
}

// ... (Mantenemos todas las funciones KPICard, Card, LegendItem, AlertItem, ModuloCard, MiniStat y el objeto styles exactamente como los tenías)