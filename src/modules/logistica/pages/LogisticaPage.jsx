import { useState, useEffect } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// 📊 Iconos personalizados
function IconTruck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconTrendingUp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconMap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  )
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    </svg>
  )
}

function IconPlus() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  )
}

export default function LogisticaPage() {
  const [searchOrder, setSearchOrder] = useState('')
  const [filterRoute, setFilterRoute] = useState('')
  const [eficiencia, setEficiencia] = useState(93.7)

  // Simular eficiencia en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() * 1.4 - 0.7)
      const newVal = Math.min(99.9, Math.max(85, eficiencia + fluctuation))
      setEficiencia(parseFloat(newVal.toFixed(1)))
    }, 8000)
    return () => clearInterval(interval)
  }, [eficiencia])

  const rutasData = [
    { id: 'RUT-A', conductor: 'Juan García', iniciales: 'JG', color: '#14b8a6', zona: 'Santiago Norte', vehiculo: 'Toyota Hilux B-221', completadas: 7, total: 9, eta: '16:30', estado: 'activa' },
    { id: 'RUT-B', conductor: 'Pedro Vásquez', iniciales: 'PV', color: '#3b82f6', zona: 'Puerto Plata', vehiculo: 'Nissan NV200 C-440', completadas: 9, total: 10, eta: '17:00', estado: 'activa' },
    { id: 'RUT-C', conductor: 'Jorge Díaz', iniciales: 'JD', color: '#ef4444', zona: 'Santo Domingo Sur', vehiculo: 'Ford Transit D-115', completadas: 5, total: 8, eta: '18:45 (+45m)', estado: 'retraso' },
    { id: 'RUT-D', conductor: 'Antonio Mirafuentes', iniciales: 'AM', color: '#8b5cf6', zona: 'La Vega', vehiculo: 'Mercedes Benz E-782', completadas: 10, total: 10, eta: '15:50 ✓', estado: 'completada' },
    { id: 'RUT-E', conductor: 'Nawuel Espinal', iniciales: 'NE', color: '#f59e0b', zona: 'Barahona', vehiculo: 'Toyota Hiace F-309', completadas: 4, total: 6, eta: '17:30', estado: 'activa' },
    { id: 'RUT-F', conductor: 'Carlos Rodríguez', iniciales: 'CR', color: '#06b6d4', zona: 'San Cristóbal', vehiculo: 'Hyundai H1 G-556', completadas: 0, total: 7, eta: '19:00', estado: 'pendiente' },
  ]

  const conductoresData = [
    { nombre: 'Juan García', iniciales: 'JG', color: '#14b8a6', zona: 'Santiago Norte', entregas: 147, pct: 96, activo: true },
    { nombre: 'Pedro Vásquez', iniciales: 'PV', color: '#3b82f6', zona: 'Puerto Plata', entregas: 132, pct: 94, activo: true },
    { nombre: 'Antonio Mirafuentes', iniciales: 'AM', color: '#8b5cf6', zona: 'La Vega', entregas: 118, pct: 72, activo: false },
    { nombre: 'Jorge Díaz', iniciales: 'JD', color: '#ef4444', zona: 'Sto. Domingo Sur', entregas: 98, pct: 61, activo: true, alerta: true },
    { nombre: 'Nawuel Espinal', iniciales: 'NE', color: '#f59e0b', zona: 'Barahona', entregas: 89, pct: 88, activo: true },
  ]

  const filteredRutas = rutasData.filter(r =>
    r.id.toLowerCase().includes(filterRoute.toLowerCase()) ||
    r.conductor.toLowerCase().includes(filterRoute.toLowerCase()) ||
    r.zona.toLowerCase().includes(filterRoute.toLowerCase())
  )

  const pedidosDB = {
    '#1042': { cliente: 'Supermercado Rey', monto: 'RD$18,400', conductor: 'Juan García', ruta: 'RUT-A', estado: 'en_ruta', parada: 7 },
    '#1048': { cliente: 'Colmado El Pitirre', monto: 'RD$4,800', conductor: 'Pedro Vásquez', ruta: 'RUT-B', estado: 'entregado', hora: '14:32' },
    '#1038': { cliente: 'Distribuidora Norte', monto: 'RD$31,200', conductor: 'Jorge Díaz', ruta: 'RUT-C', estado: 'retraso', eta: '17:30' },
    '#1029': { cliente: 'Farmacia Central', monto: 'RD$7,650', conductor: '—', ruta: '—', estado: 'procesando', eta: 'Mañana' },
  }

  const estadoBadge = (est) => {
    const classes = {
      activa: 'badge-ok', retraso: 'badge-bad', completada: 'badge-pending', pendiente: 'badge-pending'
    }
    const texts = {
      activa: 'En ruta', retraso: 'Retraso', completada: 'Completada', pendiente: 'Pendiente'
    }
    return <span className={classes[est]}>{texts[est]}</span>
  }

  const pedidoEncontrado = searchOrder ? pedidosDB[searchOrder] || pedidosDB['#' + searchOrder.replace('#', '')] : null

  // Datos para gráfica semanal
  const weeklyData = [
    { dia: 'Lun', ok: 32, bad: 2 }, { dia: 'Mar', ok: 28, bad: 3 },
    { dia: 'Mié', ok: 35, bad: 1 }, { dia: 'Jue', ok: 30, bad: 4 },
    { dia: 'Vie', ok: 38, bad: 2 }, { dia: 'Sáb', ok: 20, bad: 1 },
    { dia: 'Hoy', ok: 75, bad: 5 },
  ]
  const maxV = Math.max(...weeklyData.map(d => d.ok + d.bad)) * 1.1

  return (
    <DashboardLayout title="Logística" subtitle="gestión de rutas y entregas">
      <style>{`
        :root {
          --navy: #0f1e35;
          --navy-deep: #0a1428;
          --teal: #14b8a6;
          --teal-light: #5eead4;
          --c-log: #f97316;
          --c-clientes: #34d399;
          --bg: #f0f4f8;
          --card: #ffffff;
          --border: rgba(15,30,53,.08);
          --text: #0f172a;
          --text-2: #475569;
          --text-3: #94a3b8;
          --radius: 16px;
          --radius-sm: 10px;
          --shadow: 0 2px 16px rgba(15,30,53,.08);
          --shadow-md: 0 8px 32px rgba(15,30,53,.12);
        }

        .kpi-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 22px; }
        @media (max-width: 1024px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 800px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
          .page-content-wrap { padding: 16px 12px !important; }
          .mid-grid, .bottom-grid { grid-template-columns: 1fr !important; }
          .ia-suggestion { padding: 14px !important; }
        }
        .kpi-card {
          background: var(--card); border-radius: var(--radius); padding: 20px 22px;
          border: 1px solid var(--border); box-shadow: var(--shadow);
          position: relative; overflow: hidden; transition: transform .2s, box-shadow .2s;
        }
        .kpi-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
        .kpi-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: var(--radius) var(--radius) 0 0;
        }
        .kpi-card.rutas::before { background: var(--c-log); }
        .kpi-card.completadas::before { background: var(--c-clientes); }
        .kpi-card.retraso::before { background: #ef4444; }
        .kpi-card.eficiencia::before { background: var(--teal); }
        .kpi-icon-bg { position: absolute; right: 16px; top: 16px; width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .kpi-label { font-size: 10px; letter-spacing: .8px; text-transform: uppercase; color: var(--text-3); margin-bottom: 10px; font-weight: 600; }
        .kpi-value { font-size: 30px; font-weight: 700; color: var(--text); letter-spacing: -.5px; line-height: 1; }
        .kpi-sub { font-size: 12px; color: var(--text-3); margin-top: 6px; display: flex; align-items: center; gap: 4px; }
        .kpi-sub.up { color: #16a34a; }
        .kpi-sub.warn { color: #f59e0b; }
        .kpi-sub.bad { color: #ef4444; }

        .card { background: var(--card); border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); overflow: hidden; margin-bottom: 22px; }
        .card-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px 0; margin-bottom: 16px; }
        .card-title { font-size: 15px; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 8px; }
        .card-title-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .card-link { font-size: 12px; color: var(--teal); text-decoration: none; font-weight: 600; transition: opacity .15s; cursor: pointer; }
        .card-link:hover { opacity: .75; }
        .card-body { padding: 0 22px 22px; }

        .ia-suggestion {
          display: flex; align-items: flex-start; gap: 14px;
          background: linear-gradient(135deg, rgba(249,115,22,.07), rgba(249,115,22,.03));
          border: 1.5px solid rgba(249,115,22,.25); border-radius: var(--radius-sm);
          padding: 14px 18px; margin-bottom: 22px;
        }
        .ia-suggestion-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: rgba(249,115,22,.12); color: var(--c-log);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ia-suggestion-body { flex: 1; }
        .ia-suggestion-title { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 3px; }
        .ia-suggestion-text { font-size: 12.5px; color: var(--text-2); line-height: 1.55; }
        .ia-suggestion-actions { display: flex; gap: 8px; margin-top: 10px; }
        .btn-sug-primary {
          background: var(--c-log); border: none; border-radius: 8px;
          padding: 7px 14px; font-size: 12px; font-weight: 600; color: white;
          cursor: pointer; font-family: 'Outfit', sans-serif; transition: all .18s;
        }
        .btn-sug-primary:hover { background: #ea6c0a; }
        .btn-sug-ghost {
          background: transparent; border: 1.5px solid var(--c-log); border-radius: 8px;
          padding: 6px 14px; font-size: 12px; font-weight: 600; color: var(--c-log);
          cursor: pointer; transition: all .18s;
        }
        .btn-sug-ghost:hover { background: rgba(249,115,22,.08); }

        .table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        thead tr { background: #f8fafc; }
        th { padding: 10px 16px; font-size: 11px; font-weight: 700; color: var(--text-2); text-align: left; letter-spacing: .4px; text-transform: uppercase; border-bottom: 1px solid var(--border); white-space: nowrap; }
        td { padding: 13px 16px; font-size: 13.5px; color: var(--text); border-bottom: 1px solid var(--border); vertical-align: middle; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #f8fafc; }
        tr.ruta-retraso td { background: rgba(239,68,68,.03); }

        .estado-badge {
          display: inline-flex; align-items: center; gap: 5px;
          border-radius: 20px; padding: 4px 11px; font-size: 11px; font-weight: 700;
          white-space: nowrap;
        }
        .estado-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .badge-ok { background: rgba(20,184,166,.12); color: #0f766e; }
        .badge-ok::before { background: var(--teal); }
        .badge-warn { background: rgba(245,158,11,.12); color: #92400e; }
        .badge-warn::before { background: #f59e0b; }
        .badge-bad { background: rgba(239,68,68,.12); color: #991b1b; }
        .badge-bad::before { background: #ef4444; }
        .badge-pending { background: rgba(148,163,184,.12); color: #475569; }
        .badge-pending::before { background: #94a3b8; }

        .paradas-wrap { display: flex; align-items: center; gap: 8px; }
        .paradas-bar-bg { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; min-width: 60px; }
        .paradas-bar-fill { height: 100%; border-radius: 3px; transition: width .4s; }
        .paradas-txt { font-size: 12px; font-weight: 600; color: var(--text); white-space: nowrap; }

        .conductor-cell { display: flex; align-items: center; gap: 9px; }
        .conductor-avatar { width: 30px; height: 30px; border-radius: 50%; font-size: 11px; font-weight: 700; color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        .btn-table { background: transparent; border: 1.5px solid var(--border); border-radius: 8px; padding: 5px 11px; font-size: 11.5px; font-weight: 600; color: var(--text-2); cursor: pointer; font-family: 'Outfit', sans-serif; transition: all .18s; margin-right: 4px; }
        .btn-table:hover { border-color: var(--c-log); color: var(--c-log); }
        .btn-table.primary { background: var(--c-log); border-color: var(--c-log); color: white; }
        .btn-table.primary:hover { background: #ea6c0a; }

        .mid-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; margin-bottom: 22px; }
        .bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 22px; }

        .conductor-row {
          display: flex; align-items: center; gap: 12px; padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .conductor-row:last-child { border-bottom: none; }
        .conductor-perf-avatar { width: 40px; height: 40px; border-radius: 50%; font-size: 14px; font-weight: 700; color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .conductor-info { flex: 1; min-width: 0; }
        .conductor-name { font-size: 13.5px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .conductor-meta { font-size: 11.5px; color: var(--text-3); margin-top: 1px; }
        .conductor-bar-wrap { width: 110px; }
        .conductor-bar-bg { height: 6px; background: #f1f5f9; border-radius: 3px; }
        .conductor-bar-fill { height: 100%; border-radius: 3px; transition: width .5s; }
        .conductor-pct { font-size: 12px; font-weight: 700; margin-top: 3px; text-align: right; }
        .conductor-status-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .warn-note {
          display: flex; align-items: flex-start; gap: 8px;
          background: rgba(239,68,68,.05); border: 1px solid rgba(239,68,68,.18);
          border-radius: 8px; padding: 10px 12px; margin-top: 10px;
          font-size: 11.5px; color: #991b1b; line-height: 1.45;
        }

        .mapa-wrap {
          background: linear-gradient(145deg, #e8f4fd, #dff0f8);
          border-radius: var(--radius-sm); overflow: hidden;
          position: relative; height: 280px;
        }
        .mapa-wrap svg { width: 100%; height: 100%; }

        .tracker-search-wrap { display: flex; gap: 10px; margin-bottom: 16px; }
        .tracker-input {
          flex: 1; background: #f8fafc; border: 2px solid var(--border); border-radius: var(--radius-sm);
          padding: 11px 16px; font-size: 14px; font-family: 'Outfit', sans-serif; color: var(--text);
          outline: none; transition: border-color .22s, box-shadow .22s;
        }
        .tracker-input:focus { border-color: var(--c-log); box-shadow: 0 0 0 4px rgba(249,115,22,.12); }
        .btn-track {
          background: var(--c-log); border: none; border-radius: var(--radius-sm);
          padding: 11px 20px; font-size: 14px; font-weight: 600; color: white;
          cursor: pointer; transition: all .2s; white-space: nowrap;
        }
        .btn-track:hover { background: #ea6c0a; }

        .tracker-result {
          background: #f8fafc; border: 1.5px solid var(--border); border-radius: var(--radius-sm);
          padding: 16px 18px; animation: fadeUp .3s both;
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .tracker-order-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .tracker-order-id { font-size: 16px; font-weight: 700; color: var(--text); }
        .tracker-timeline { display: flex; flex-direction: column; gap: 0; }
        .timeline-step { display: flex; align-items: flex-start; gap: 14px; padding-bottom: 16px; position: relative; }
        .timeline-step:last-child { padding-bottom: 0; }
        .timeline-dot {
          width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 3px solid var(--border); background: var(--card);
          position: relative; z-index: 1;
        }
        .timeline-dot.done { background: var(--teal); border-color: var(--teal); }
        .timeline-dot.active { background: var(--c-log); border-color: var(--c-log); box-shadow: 0 0 0 4px rgba(249,115,22,.2); }
        .timeline-dot.pending { background: #f1f5f9; border-color: var(--border); }
        .timeline-title { font-size: 13.5px; font-weight: 600; color: var(--text); }
        .timeline-sub { font-size: 12px; color: var(--text-3); margin-top: 2px; }

        .bar-chart-wrap { height: 140px; display: flex; align-items: flex-end; gap: 6px; padding: 0 4px; }
        .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .bar-fill { width: 100%; border-radius: 6px 6px 0 0; transition: opacity .2s; cursor: pointer; min-height: 4px; }
        .bar-fill:hover { opacity: .8; }
        .bar-col-label { font-size: 10px; color: var(--text-3); }

        .donut-wrap { display: flex; align-items: center; gap: 24px; }
        .donut-legend { display: flex; flex-direction: column; gap: 8px; }
        .donut-legend-item { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--text-2); }
        .donut-legend-dot { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
        .donut-legend-val { font-weight: 700; color: var(--text); margin-left: auto; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .kpi-card { animation: fadeUp .4s both; }
      `}</style>

      <div className="page-content-wrap" style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card rutas">
            <div className="kpi-icon-bg" style={{ background: 'rgba(249,115,22,.10)' }}><IconTruck /></div>
            <div className="kpi-label">Rutas Activas Hoy</div>
            <div className="kpi-value">8</div>
            <div className="kpi-sub up">2 más que ayer</div>
          </div>
          <div className="kpi-card completadas">
            <div className="kpi-icon-bg" style={{ background: 'rgba(52,211,153,.10)' }}><IconCheck /></div>
            <div className="kpi-label">Entregas Completadas</div>
            <div className="kpi-value" style={{ color: 'var(--c-clientes)' }}>75</div>
            <div className="kpi-sub up">de 80 planificadas</div>
          </div>
          <div className="kpi-card retraso">
            <div className="kpi-icon-bg" style={{ background: 'rgba(239,68,68,.10)' }}><IconClock /></div>
            <div className="kpi-label">Entregas con Retraso</div>
            <div className="kpi-value" style={{ color: '#ef4444' }}>2</div>
            <div className="kpi-sub bad">Atención requerida</div>
          </div>
          <div className="kpi-card eficiencia">
            <div className="kpi-icon-bg" style={{ background: 'rgba(20,184,166,.10)' }}><IconTrendingUp /></div>
            <div className="kpi-label">Eficiencia del Día</div>
            <div className="kpi-value" style={{ color: 'var(--teal)' }}>{eficiencia}%</div>
            <div className="kpi-sub up">Sobre meta (90%)</div>
          </div>
        </div>

        {/* Sugerencia IA */}
        <div className="ia-suggestion">
          <div className="ia-suggestion-icon"><IconShield /></div>
          <div className="ia-suggestion-body">
            <div className="ia-suggestion-title">🤖 Sugerencia del Agente IA — Ruta C con retraso detectada</div>
            <div className="ia-suggestion-text">La Ruta C (J. Díaz) lleva +45 min de retraso con 3 paradas pendientes. El análisis indica que la Ruta A (García) tiene capacidad para absorber 2 de esas paradas sin afectar su hora de cierre. Se recomienda reasignar las paradas #8 y #9 de Ruta C a Ruta A.</div>
            <div className="ia-suggestion-actions">
              <button className="btn-sug-primary" onClick={() => alert('✅ Reasignación aplicada.\nParadas #8 y #9 de Ruta C trasladadas a Ruta A (García).')}>✓ Aplicar reasignación</button>
              <button className="btn-sug-ghost" onClick={() => alert('Vista detallada de reasignación:\n\n• Ruta C (J. Díaz): 3 paradas pendientes\n• Ruta A (García): capacidad +2 paradas sin retraso')}>Ver detalle</button>
            </div>
          </div>
        </div>

        {/* Tabla de Rutas */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <div className="card-title-icon" style={{ background: 'rgba(249,115,22,.12)' }}><IconTruck /></div>
              Rutas Activas
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f8fafc', border: '1px solid var(--border)', borderRadius: '8px', padding: '6px 12px' }}>
                <IconSearch />
                <input type="text" placeholder="Filtrar ruta…" value={filterRoute} onChange={(e) => setFilterRoute(e.target.value)} style={{ background: 'none', border: 'none', outline: 'none', fontSize: '12px', width: '90px' }} />
              </div>
              <a className="card-link">Ver historial →</a>
            </div>
          </div>
          <div className="card-body">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Ruta</th><th>Conductor</th><th>Zona</th><th>Vehículo</th><th>Paradas</th><th>ETA cierre</th><th>Estado</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {filteredRutas.map(r => {
                    const pct = Math.round((r.completadas / r.total) * 100)
                    const barColor = r.estado === 'retraso' ? '#ef4444' : r.estado === 'completada' ? '#94a3b8' : r.color
                    return (
                      <tr key={r.id} className={r.estado === 'retraso' ? 'ruta-retraso' : ''}>
                        <td><strong style={{ fontSize: '14px', color: r.color }}>{r.id}</strong></td>
                        <td><div className="conductor-cell"><div className="conductor-avatar" style={{ background: r.color }}>{r.iniciales}</div><span>{r.conductor}</span></div></td>
                        <td>{r.zona}</td>
                        <td style={{ fontSize: '12.5px', color: 'var(--text-2)' }}>{r.vehiculo}</td>
                        <td><div className="paradas-wrap"><div className="paradas-bar-bg"><div className="paradas-bar-fill" style={{ width: `${pct}%`, background: barColor }}></div></div><span className="paradas-txt">{r.completadas}/{r.total}</span></div></td>
                        <td style={{ fontWeight: r.estado === 'retraso' ? '700' : '500', color: r.estado === 'retraso' ? '#ef4444' : 'var(--text)' }}>{r.eta}</td>
                        <td>{estadoBadge(r.estado)}</td>
                        <td><button className="btn-table" onClick={() => alert(`Vista detallada de ${r.id}`)}>Ver</button>
                          {r.estado !== 'completada' && <button className="btn-table primary" onClick={() => alert(r.estado === 'retraso' ? `Iniciando reasignación de paradas de ${r.id}…` : `Editando ${r.id}…`)}>{r.estado === 'retraso' ? 'Reasignar' : r.estado === 'pendiente' ? 'Activar' : 'Editar'}</button>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mid Grid */}
        <div className="mid-grid">
          {/* Conductores */}
          <div className="card">
            <div className="card-header">
              <div className="card-title"><div className="card-title-icon" style={{ background: 'rgba(6,182,212,.12)' }}><IconUser /></div>Desempeño de Conductores</div>
              <a className="card-link">gestionar →</a>
            </div>
            <div className="card-body">
              {conductoresData.map(c => {
                const pctColor = c.pct >= 90 ? '#16a34a' : c.pct >= 75 ? '#f59e0b' : '#ef4444'
                const barColor = c.pct >= 90 ? '#34d399' : c.pct >= 75 ? '#f59e0b' : '#ef4444'
                return (
                  <div key={c.nombre} className="conductor-row">
                    <div className="conductor-perf-avatar" style={{ background: c.color }}>{c.iniciales}</div>
                    <div className="conductor-info"><div className="conductor-name">{c.nombre}</div><div className="conductor-meta">{c.zona} · {c.entregas} entregas</div></div>
                    <div className="conductor-bar-wrap"><div className="conductor-bar-bg"><div className="conductor-bar-fill" style={{ width: `${c.pct}%`, background: barColor }}></div></div><div className="conductor-pct" style={{ color: pctColor }}>{c.pct}%</div></div>
                    <div className="conductor-status-dot" style={{ background: c.activo ? '#34d399' : '#94a3b8' }}></div>
                  </div>
                )
              })}
              <div className="warn-note"><span><strong>Jorge Díaz</strong> mantiene eficiencia de 61% (mínimo 75%). Nota enviada al módulo de RRHH para revisión.</span></div>
            </div>
          </div>

          {/* Mapa */}
          <div className="card">
            <div className="card-header">
              <div className="card-title"><div className="card-title-icon" style={{ background: 'rgba(249,115,22,.12)' }}><IconMap /></div>Mapa de Rutas</div>
              <span style={{ fontSize: '11px', background: 'rgba(20,184,166,.10)', color: 'var(--teal)', borderRadius: '6px', padding: '3px 9px', fontWeight: '600' }}>EN VIVO</span>
            </div>
            <div className="card-body">
              <div className="mapa-wrap">
                <svg viewBox="0 0 400 280">
                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dff0f8" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#c8e6f5" stopOpacity="1"/>
                    </linearGradient>
                    <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.15)"/></filter>
                  </defs>
                  <rect width="400" height="280" fill="url(#mapGrad)"/>
                  <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeWidth="3" opacity=".7"/>
                  <line x1="0" y1="160" x2="400" y2="160" stroke="white" strokeWidth="3" opacity=".7"/>
                  <line x1="80" y1="0" x2="80" y2="280" stroke="white" strokeWidth="3" opacity=".7"/>
                  <line x1="200" y1="0" x2="200" y2="280" stroke="white" strokeWidth="3" opacity=".7"/>
                  <polyline points="30,40 80,80 80,160 200,160 200,80 320,80" fill="none" stroke="var(--teal)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity=".9" strokeDasharray="6 3"/>
                  <polyline points="30,160 80,160 200,220 320,220 370,220" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".8" strokeDasharray="6 3"/>
                  <polyline points="80,40 200,40 200,80 320,80 320,160 370,160" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".85" strokeDasharray="4 3"/>
                  <circle cx="80" cy="80" r="7" fill="var(--teal)" filter="url(#shadow)"/><circle cx="80" cy="80" r="4" fill="white"/>
                  <circle cx="320" cy="80" r="9" fill="var(--teal)" stroke="white" strokeWidth="2" filter="url(#shadow)"/><text x="320" y="84" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">A</text>
                  <circle cx="200" cy="220" r="7" fill="#3b82f6" filter="url(#shadow)"/><circle cx="200" cy="220" r="4" fill="white"/>
                  <circle cx="370" cy="220" r="9" fill="#3b82f6" stroke="white" strokeWidth="2" filter="url(#shadow)"/><text x="370" y="224" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">B</text>
                  <circle cx="320" cy="160" r="9" fill="#ef4444" stroke="white" strokeWidth="2" filter="url(#shadow)">
                    <animate attributeName="r" values="9;12;9" dur="1.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x="320" y="164" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">C</text>
                  <rect x="15" y="28" width="26" height="22" rx="4" fill="#0f1e35" filter="url(#shadow)"/>
                  <text x="28" y="43" fontSize="9" fontWeight="700" fill="var(--teal-light)" textAnchor="middle">ALM</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="bottom-grid">
          {/* Tracker */}
          <div className="card">
            <div className="card-header"><div className="card-title"><div className="card-title-icon" style={{ background: 'rgba(59,130,246,.12)' }}><IconSearch /></div>Seguimiento de Pedidos</div></div>
            <div className="card-body">
              <div className="tracker-search-wrap">
                <input className="tracker-input" type="text" placeholder="Número de pedido o cliente… ej: #1048" value={searchOrder} onChange={(e) => setSearchOrder(e.target.value)} />
                <button className="btn-track" onClick={() => {}}>Rastrear →</button>
              </div>
              {pedidoEncontrado && (
                <div className="tracker-result">
                  <div className="tracker-order-header"><div><div className="tracker-order-id">Pedido {searchOrder}</div><div style={{ fontSize: '12px', color: 'var(--text-3)' }}>{pedidoEncontrado.cliente} · {pedidoEncontrado.monto}</div></div></div>
                  <div className="tracker-timeline">
                    <div className="timeline-step"><div className="timeline-dot done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div><div className="timeline-content"><div className="timeline-title">Pedido recibido</div><div className="timeline-sub">Confirmado · {pedidoEncontrado.monto}</div></div></div>
                    <div className="timeline-step"><div className="timeline-dot done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div><div className="timeline-content"><div className="timeline-title">Despachado</div><div className="timeline-sub">Salió del almacén · 09:14</div></div></div>
                    <div className="timeline-step"><div className="timeline-dot active"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><circle cx="12" cy="12" r="3" fill="white"/></svg></div><div className="timeline-content"><div className="timeline-title">En ruta</div><div className="timeline-sub">{pedidoEncontrado.conductor} · {pedidoEncontrado.ruta} · Parada {pedidoEncontrado.parada || '—'}</div></div></div>
                    <div className="timeline-step"><div className="timeline-dot pending"></div><div className="timeline-content"><div className="timeline-title">Entregado</div><div className="timeline-sub">Pendiente</div></div></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Gráfica */}
          <div className="card">
            <div className="card-header"><div className="card-title"><div className="card-title-icon" style={{ background: 'rgba(249,115,22,.12)' }}><IconTrendingUp /></div>Entregas esta semana</div><a className="card-link">historial →</a></div>
            <div className="card-body">
              <div className="bar-chart-wrap">
                {weeklyData.map(d => {
                  const hOk = Math.round((d.ok / maxV) * 120)
                  const hBad = Math.round((d.bad / maxV) * 120)
                  return (
                    <div key={d.dia} className="bar-col">
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', flex: 1 }}>
                        <div className="bar-fill" style={{ height: `${hOk}px`, background: 'var(--c-clientes)', opacity: d.dia === 'Hoy' ? 1 : 0.65, flex: 1 }} title={`${d.ok} a tiempo`}></div>
                        <div className="bar-fill" style={{ height: `${hBad}px`, background: '#ef4444', opacity: d.dia === 'Hoy' ? 1 : 0.5, flex: 1 }} title={`${d.bad} retrasadas`}></div>
                      </div>
                      <div className="bar-col-label">{d.dia}</div>
                    </div>
                  )
                })}
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', marginBottom: '12px' }}>Distribución de estados hoy</div>
                <div className="donut-wrap">
                  <svg width="90" height="90" viewBox="0 0 90 90">
                    <circle cx="45" cy="45" r="35" fill="none" stroke="#f1f5f9" strokeWidth="14"/>
                    <circle cx="45" cy="45" r="35" fill="none" stroke="var(--c-clientes)" strokeWidth="14" strokeDasharray="120.43 219.91" strokeDashoffset="-54.98" strokeLinecap="round"/>
                    <circle cx="45" cy="45" r="35" fill="none" stroke="var(--c-log)" strokeWidth="14" strokeDasharray="54.98 219.91" strokeDashoffset="65.45" strokeLinecap="round"/>
                    <circle cx="45" cy="45" r="35" fill="none" stroke="#3b82f6" strokeWidth="14" strokeDasharray="32.99 219.91" strokeDashoffset="120.43" strokeLinecap="round"/>
                    <circle cx="45" cy="45" r="35" fill="none" stroke="#ef4444" strokeWidth="14" strokeDasharray="10.996 219.91" strokeDashoffset="153.42" strokeLinecap="round"/>
                    <text x="45" y="41" fontSize="13" fontWeight="700" fill="var(--text)" textAnchor="middle">80</text>
                    <text x="45" y="54" fontSize="9" fill="var(--text-3)" textAnchor="middle">total</text>
                  </svg>
                  <div className="donut-legend">
                    <div className="donut-legend-item"><div className="donut-legend-dot" style={{ background: 'var(--c-clientes)' }}></div>Completadas<span className="donut-legend-val">55%</span></div>
                    <div className="donut-legend-item"><div className="donut-legend-dot" style={{ background: 'var(--c-log)' }}></div>En camino<span className="donut-legend-val">25%</span></div>
                    <div className="donut-legend-item"><div className="donut-legend-dot" style={{ background: '#3b82f6' }}></div>Procesando<span className="donut-legend-val">15%</span></div>
                    <div className="donut-legend-item"><div className="donut-legend-dot" style={{ background: '#ef4444' }}></div>Retrasadas<span className="donut-legend-val">5%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
