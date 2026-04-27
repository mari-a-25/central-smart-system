import { useState, useEffect } from 'react'
import { useAuthStore } from '../../../store/authStore'
import DashboardLayout from '../../../components/layout/DashboardLayout'

export default function DashboardPage() {
  const { perfil } = useAuthStore()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  return (
    <DashboardLayout title="Dashboard" subtitle="visión general">
      {/* Saludo */}
      <div style={styles.greetingBar}>
        <div style={styles.greetingAvatar}>
          {perfil?.nombre?.substring(0, 2).toUpperCase() || 'MP'}
        </div>
        <div style={styles.greetingText}>
          <div style={styles.greetingWelcome}>Bienvenida, {perfil?.nombre?.split(' ')[0] || 'María'} 👋</div>
          <div style={styles.greetingSub}>Aquí tienes el resumen general de hoy. Todo marcha bien.</div>
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

      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KPICard 
          type="ventas" 
          label="Ventas Hoy" 
          value="RD$84,320" 
          sub="12% vs ayer" 
          up 
          icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>}
        />
        <KPICard 
          type="entregas" 
          label="Entregas Activas" 
          value="38" 
          sub="5 pendientes" 
          up 
          icon={<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
        />
        <KPICard 
          type="alertas" 
          label="Alertas Inventario" 
          value="7" 
          sub="Stock crítico" 
          warn 
          color="#f59e0b"
          icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>}
        />
        <KPICard 
          type="balance" 
          label="Balance Caja" 
          value="RD$612K" 
          sub="disponible" 
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

        <Card title="Alertas IA" badge="3 activas" iconColor="#f59e0b" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="16"/></>}>
          <AlertItem type="error" title="Jugo Naranja bajo stock" sub="12 unidades · mínimo 50" />
          <AlertItem type="warn" title="Ruta C con retraso" sub="+45 min · J. Díaz" />
          <AlertItem type="ok" title="Pedido #1042 entregado" sub="hace 20 min" />
          <AlertItem type="warn" title="3 Facturas vencidas" sub="Total RD$12,078.67" />
        </Card>
      </div>

      {/* Módulos */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Módulos del Sistema</div>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>8 módulos activos</span>
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

      {/* Mini Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '24px' }}>
        <MiniStat color="#3b82f6" value="142" label="Clientes activos" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>} />
        <MiniStat color="#f59e0b" value="1,340" label="SKUs en inventario" icon={<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>} />
        <MiniStat color="#06b6d4" value="28" label="Empleados activos" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />
        <MiniStat color="#ef4444" value="7" label="Alertas pendientes" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>} />
      </div>
    </DashboardLayout>
  )
}

function KPICard({ type, label, value, sub, up, warn, icon, color }) {
  const barColor = type === 'ventas' ? '#3b82f6' : type === 'entregas' ? '#14b8a6' : type === 'alertas' ? '#f59e0b' : '#34d399';
  return (
    <div style={{ ...styles.kpiCard, borderTop: `3px solid ${barColor}` }}>
      <div style={{ ...styles.kpiIconBg, background: barColor, opacity: 0.15 }}></div>
      <div style={{ ...styles.kpiIconBg, background: 'transparent', opacity: 1, top: 16 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={barColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div style={styles.kpiLabel}>{label}</div>
      <div style={{ ...styles.kpiValue, ...(color ? { color } : {}) }}>{value}</div>
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

function Card({ title, children, icon, iconColor, badge }) {
  return (
    <div style={styles.card}>
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
          <a href="#" style={styles.cardLink}>ver más →</a>
        )}
      </div>
      <div style={styles.cardBody}>
        {children}
      </div>
    </div>
  )
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#94a3b8' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: color }}></div>{label}
    </div>
  )
}

function AlertItem({ type, title, sub }) {
  const colors = {
    error: { border: 'rgba(239,68,68,0.2)', bg: 'rgba(239,68,68,0.04)', icon: '#ef4444' },
    warn: { border: 'rgba(245,158,11,0.2)', bg: 'rgba(245,158,11,0.04)', icon: '#f59e0b' },
    ok: { border: 'rgba(20,184,166,0.2)', bg: 'rgba(20,184,166,0.04)', icon: '#14b8a6' },
  }
  const config = colors[type]
  return (
    <div style={{ ...styles.alertItem, borderColor: config.border, background: config.bg }}>
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

function ModuloCard({ mod, color, name, desc, progress, status }) {
  return (
    <div style={{ ...styles.moduloCard, borderBottom: `3px solid ${color}` }}>
      <div style={{ ...styles.moduloIconWrap, background: `${color}1f` }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mod === 'ventas' && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>}
          {mod === 'inv' && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>}
          {mod === 'compras' && <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>}
          {mod === 'prod' && <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>}
          {mod === 'log' && <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
          {mod === 'rrhh' && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
          {mod === 'cont' && <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
          {mod === 'clientes' && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
        </svg>
      </div>
      <div style={styles.moduloName}>{name}</div>
      <div style={styles.moduloDesc}>{desc}</div>
      <div style={styles.moduloBarBg}><div style={{ ...styles.moduloBarFill, width: `${progress}%`, background: color }}></div></div>
      <div style={styles.moduloStatus}>
        <span style={{ ...styles.moduloStatusTxt, color }}>{status} · {progress}%</span>
        <a href="#" style={styles.moduloLink}>Ir →</a>
      </div>
    </div>
  )
}

function MiniStat({ color, value, label, icon }) {
  return (
    <div style={styles.miniStat}>
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
  greetingSub: { fontSize: '13px', color: '#94a3b8', marginTop: '2px' },
  greetingSpacer: { flex: 1 },
  greetingDate: {
    fontSize: '12px', color: '#64748b', fontFamily: "'Courier New', monospace",
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
    position: 'relative', overflow: 'hidden', cursor: 'default',
  },
  kpiIconBg: { position: 'absolute', right: '16px', top: '16px', width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  kpiLabel: { fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '10px', fontWeight: '600' },
  kpiValue: { fontSize: '28px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.5px', lineHeight: 1 },
  kpiSub: { fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' },

  midGrid: { display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '16px', marginBottom: '22px' },
  card: { background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(15,30,53,0.08)', boxShadow: '0 2px 16px rgba(15,30,53,0.08)', overflow: 'hidden' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 0', marginBottom: '16px' },
  cardTitle: { fontSize: '15px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' },
  cardLink: { fontSize: '12px', color: '#14b8a6', textDecoration: 'none', fontWeight: '600' },
  cardBody: { padding: '0 20px 20px' },

  chartWrap: { height: '130px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '0 4px' },
  barGroup: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' },
  bar: { width: '100%', borderRadius: '6px 6px 0 0', cursor: 'pointer' },
  barLabel: { fontSize: '10px', color: '#94a3b8' },

  alertItem: { display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', borderRadius: '10px', marginBottom: '8px', border: '1px solid transparent' },
  alertDot: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' },
  alertTitle: { fontSize: '13.5px', fontWeight: '600', color: '#0f172a' },
  alertSub: { fontSize: '11.5px', color: '#94a3b8', marginTop: '2px' },

  modulosGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '22px' },
  moduloCard: { background: '#ffffff', borderRadius: '16px', padding: '18px 16px', border: '1px solid rgba(15,30,53,0.08)', boxShadow: '0 2px 16px rgba(15,30,53,0.08)', cursor: 'pointer', position: 'relative', overflow: 'hidden' },
  moduloIconWrap: { width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', flexShrink: 0 },
  moduloName: { fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '2px' },
  moduloDesc: { fontSize: '11px', color: '#94a3b8', marginBottom: '10px', lineHeight: 1.4 },
  moduloBarBg: { height: '4px', borderRadius: '2px', background: '#f1f5f9' },
  moduloBarFill: { height: '100%', borderRadius: '2px' },
  moduloStatus: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' },
  moduloStatusTxt: { fontSize: '10.5px', fontWeight: '600' },
  moduloLink: { fontSize: '10px', color: '#94a3b8', textDecoration: 'none' },

  miniStat: { display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#ffffff', border: '1px solid rgba(15,30,53,0.08)', borderRadius: '10px', boxShadow: '0 2px 16px rgba(15,30,53,0.08)' },
  miniStatIcon: { width: '36px', height: '36px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  miniStatVal: { fontSize: '18px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' },
  miniStatLbl: { fontSize: '11px', color: '#94a3b8' },
}
