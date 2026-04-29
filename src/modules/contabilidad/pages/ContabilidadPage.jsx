import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconTrendingUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconTrendingDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  )
}

function IconDollarSign() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )
}

function IconReceipt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
      <line x1="16" y1="8" x2="8" y2="8"/>
      <line x1="16" y1="12" x2="8" y2="12"/>
      <line x1="10" y1="16" x2="8" y2="16"/>
    </svg>
  )
}

function IconAlertCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconFilter() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  )
}

function IconShoppingCart() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

function IconUsers() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )
}

export default function ContabilidadPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('marzo')
  const [showReportModal, setShowReportModal] = useState(false)

  // Movimientos contables generados automáticamente por otros módulos
  const [movimientos] = useState([
    { 
      id: 1, 
      fecha: '2024-03-15', 
      concepto: 'Venta #1048 - Supermercado Rey', 
      tipo: 'ingreso', 
      monto: 4800, 
      modulo: 'Ventas',
      referencia: 'Pedido #1048',
      estado: 'pagado'
    },
    { 
      id: 2, 
      fecha: '2024-03-15', 
      concepto: 'Venta #1047 - Colmado Peña', 
      tipo: 'ingreso', 
      monto: 2100, 
      modulo: 'Ventas',
      referencia: 'Pedido #1047',
      estado: 'pagado'
    },
    { 
      id: 3, 
      fecha: '2024-03-14', 
      concepto: 'Compra a Snacks Central - OC-2024-002', 
      tipo: 'egreso', 
      monto: 21000, 
      modulo: 'Compras',
      referencia: 'OC-2024-002',
      estado: 'pagado'
    },
    { 
      id: 4, 
      fecha: '2024-03-14', 
      concepto: 'Producción - Lote LTE-002 (Jugo Naranja)', 
      tipo: 'ingreso', 
      monto: 76000, 
      modulo: 'Producción',
      referencia: 'LTE-002',
      estado: 'completado'
    },
    { 
      id: 5, 
      fecha: '2024-03-13', 
      concepto: 'Venta #1044 - Pulpería San Juan', 
      tipo: 'ingreso', 
      monto: 3400, 
      modulo: 'Ventas',
      referencia: 'Pedido #1044',
      estado: 'pendiente'
    },
    { 
      id: 6, 
      fecha: '2024-03-13', 
      concepto: 'Venta #1045 - Distribuidora Central', 
      tipo: 'ingreso', 
      monto: 2500, 
      modulo: 'Ventas',
      referencia: 'Pedido #1045',
      estado: 'pagado'
    },
    { 
      id: 7, 
      fecha: '2024-03-12', 
      concepto: 'Compra a Frutas del Valle - OC-2024-001', 
      tipo: 'egreso', 
      monto: 18500, 
      modulo: 'Compras',
      referencia: 'OC-2024-001',
      estado: 'pagado'
    },
    { 
      id: 8, 
      fecha: '2024-03-10', 
      concepto: 'Nómina Febrero 2024', 
      tipo: 'egreso', 
      monto: 183040, 
      modulo: 'RRHH',
      referencia: 'Nómina Febrero',
      estado: 'pagado'
    },
    { 
      id: 9, 
      fecha: '2024-03-08', 
      concepto: 'Venta #1042 - Farmacia Carol', 
      tipo: 'ingreso', 
      monto: 2250, 
      modulo: 'Ventas',
      referencia: 'Pedido #1042',
      estado: 'pagado'
    },
    { 
      id: 10, 
      fecha: '2024-03-05', 
      concepto: 'Compra a Bebidas Nacionales - OC-2024-003', 
      tipo: 'egreso', 
      monto: 24000, 
      modulo: 'Compras',
      referencia: 'OC-2024-003',
      estado: 'pendiente'
    }
  ])

  // Cuentas por cobrar (pedidos entregados pero no pagados)
  const [cuentasPorCobrar] = useState([
    { id: 1, cliente: 'Pulpería San Juan', monto: 3400, pedido: '#1044', fecha: '2024-03-13', diasVencido: 2 },
    { id: 2, cliente: 'Distribuidora Norte', monto: 5200, pedido: '#1049', fecha: '2024-03-14', diasVencido: 1 }
  ])

  // Alertas IA - Anomalías detectadas por Gemini
  const [alertasIA] = useState([
    {
      id: 1,
      tipo: 'anomaly',
      mensaje: 'Gastos en compras este mes: RD$63,500 vs promedio histórico RD$45,000. Diferencia del +41%. ¿Fue una compra extraordinaria planificada?',
      severidad: 'media',
      fecha: '2024-03-15'
    },
    {
      id: 2,
      tipo: 'warning',
      mensaje: 'Cuentas por cobrar aumentaron 35% esta semana. Pedidos #1044 y #1049 pendientes de pago por más de 24 horas.',
      severidad: 'alta',
      fecha: '2024-03-15'
    }
  ])

  // Calcular KPIs
  const ingresos = movimientos.filter(m => m.tipo === 'ingreso').reduce((sum, m) => sum + m.monto, 0)
  const egresos = movimientos.filter(m => m.tipo === 'egreso').reduce((sum, m) => sum + m.monto, 0)
  const utilidad = ingresos - egresos
  const totalCuentasPorCobrar = cuentasPorCobrar.reduce((sum, c) => sum + c.monto, 0)

  // Filtrar movimientos por período
  const getFilteredMovements = () => {
    if (selectedPeriod === 'marzo') return movimientos
    if (selectedPeriod === 'febrero') {
      return movimientos.filter(m => m.fecha.startsWith('2024-02'))
    }
    return movimientos
  }

  const handleGeneratePDF = () => {
    setShowReportModal(true)
    // Simular generación de PDF
    setTimeout(() => {
      alert(`📄 REPORTE FINANCIERO GENERADO\n\nPeríodo: Marzo 2024\n\nRESUMEN:\n• Ingresos: RD$${ingresos.toLocaleString()}\n• Egresos: RD$${egresos.toLocaleString()}\n• Utilidad Neta: RD$${utilidad.toLocaleString()}\n• Cuentas por Cobrar: RD$${totalCuentasPorCobrar.toLocaleString()}\n\n✅ PDF listo para descargar\n✅ Incluye balance, tabla de movimientos y gráficas de flujo de caja`)
      setShowReportModal(false)
    }, 1500)
  }

  // Datos para gráfica de flujo de caja
  const semanaData = [
    { dia: 'Lun', ingresos: 12500, egresos: 8400 },
    { dia: 'Mar', ingresos: 8900, egresos: 21000 },
    { dia: 'Mié', ingresos: 15200, egresos: 4500 },
    { dia: 'Jue', ingresos: 6800, egresos: 18500 },
    { dia: 'Vie', ingresos: 23400, egresos: 5600 },
    { dia: 'Sáb', ingresos: 4300, egresos: 2400 },
    { dia: 'Dom', ingresos: 0, egresos: 0 }
  ]

  const maxValue = Math.max(...semanaData.flatMap(d => [d.ingresos, d.egresos]))

  return (
    <DashboardLayout title="Contabilidad" subtitle="gestión financiera y movimientos contables">
      <style>{`
        :root {
          --c-contabilidad: #8b5cf6;
          --c-contabilidad-light: #a78bfa;
          --c-contabilidad-dark: #7c3aed;
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

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .kpi-card {
          background: var(--card);
          border-radius: var(--radius);
          padding: 20px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
          transition: all 0.2s;
        }
        .kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .kpi-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--c-contabilidad);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .kpi-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--text);
        }
        .kpi-label {
          font-size: 12px;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .kpi-trend {
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
        }
        .trend-up { color: #10b981; }
        .trend-down { color: #ef4444; }

        .ia-card {
          background: linear-gradient(135deg, rgba(139,92,246,.05), rgba(139,92,246,.02));
          border: 1.5px solid rgba(139,92,246,.2);
          border-radius: var(--radius);
          padding: 20px;
          margin-bottom: 24px;
        }
        .ia-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ia-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(139,92,246,.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-contabilidad);
        }
        .ia-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
        }
        .ia-subtitle {
          font-size: 12px;
          color: var(--text-3);
        }
        .alert-card {
          background: var(--card);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border-left: 4px solid;
          transition: all 0.2s;
        }
        .alert-card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }

        .table-wrapper {
          overflow-x: auto;
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          padding: 14px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-2);
          border-bottom: 1px solid var(--border);
          background: #f8fafc;
        }
        td {
          padding: 14px 16px;
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }
        tr:last-child td {
          border-bottom: none;
        }
        tr:hover td {
          background: #f8fafc;
        }

        .movement-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .badge-ingreso {
          background: rgba(16,185,129,.12);
          color: #10b981;
        }
        .badge-egreso {
          background: rgba(239,68,68,.12);
          color: #ef4444;
        }

        .chart-container {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 200px;
          padding: 20px 0;
        }
        .chart-bar {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .bar-ingreso {
          width: 100%;
          background: #10b981;
          border-radius: 8px 8px 0 0;
          transition: height 0.3s;
        }
        .bar-egreso {
          width: 100%;
          background: #ef4444;
          border-radius: 8px 8px 0 0;
          transition: height 0.3s;
        }

        .filter-select {
          padding: 8px 16px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-size: 13px;
          background: white;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--c-contabilidad);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .btn-primary:hover {
          background: var(--c-contabilidad-dark);
          transform: translateY(-1px);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          border-radius: var(--radius);
          padding: 28px;
          text-align: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border);
          border-top-color: var(--c-contabilidad);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(16,185,129,.1)', color: '#10b981' }}><IconTrendingUp /></div>
            <div className="kpi-label">Ingresos del Mes</div>
            <div className="kpi-value" style={{ color: '#10b981' }}>RD${ingresos.toLocaleString()}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +15% vs mes anterior</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(239,68,68,.1)', color: '#ef4444' }}><IconTrendingDown /></div>
            <div className="kpi-label">Gastos del Mes</div>
            <div className="kpi-value" style={{ color: '#ef4444' }}>RD${egresos.toLocaleString()}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +8% vs mes anterior</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(139,92,246,.1)', color: '#8b5cf6' }}><IconDollarSign /></div>
            <div className="kpi-label">Utilidad Neta</div>
            <div className="kpi-value" style={{ color: utilidad >= 0 ? '#10b981' : '#ef4444' }}>RD${utilidad.toLocaleString()}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> Excelente rentabilidad</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(245,158,11,.1)', color: '#f59e0b' }}><IconReceipt /></div>
            <div className="kpi-label">Cuentas por Cobrar</div>
            <div className="kpi-value" style={{ color: '#f59e0b' }}>RD${totalCuentasPorCobrar.toLocaleString()}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +35% esta semana</div>
          </div>
        </div>

        {/* Alertas IA - Gemini */}
        <div className="ia-card">
          <div className="ia-header">
            <div className="ia-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <div className="ia-title">🤖 Gemini - Análisis Financiero IA</div>
              <div className="ia-subtitle">Detección de anomalías y recomendaciones automáticas</div>
            </div>
          </div>
          {alertasIA.map(alerta => (
            <div key={alerta.id} className="alert-card" style={{ borderLeftColor: alerta.severidad === 'alta' ? '#ef4444' : '#f59e0b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <IconAlertCircle style={{ color: alerta.severidad === 'alta' ? '#ef4444' : '#f59e0b' }} />
                <span style={{ fontSize: '12px', fontWeight: '600', color: alerta.severidad === 'alta' ? '#ef4444' : '#f59e0b' }}>
                  {alerta.severidad === 'alta' ? 'Alerta' : 'Anomalía Detectada'}
                </span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-3)' }}>{alerta.fecha}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '12px' }}>{alerta.mensaje}</div>
              <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px' }}>Investigar →</button>
            </div>
          ))}
        </div>

        {/* Gráfica de Flujo de Caja */}
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}><IconBarChart /> Flujo de Caja - Esta semana</h3>
            <select className="filter-select">
              <option>Esta semana</option>
              <option>Este mes</option>
              <option>Este trimestre</option>
            </select>
          </div>
          <div className="chart-container">
            {semanaData.map(dia => (
              <div key={dia.dia} className="chart-bar">
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div className="bar-ingreso" style={{ height: `${(dia.ingresos / maxValue) * 140}px` }} title={`Ingresos: RD$${dia.ingresos}`}></div>
                  <div className="bar-egreso" style={{ height: `${(dia.egresos / maxValue) * 140}px` }} title={`Egresos: RD$${dia.egresos}`}></div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{dia.dia}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '11px' }}>Ingresos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '3px' }}></div>
              <span style={{ fontSize: '11px' }}>Egresos</span>
            </div>
          </div>
        </div>

        {/* Filtros y tabla de movimientos */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconCalendar />
            <select className="filter-select" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
              <option value="marzo">Marzo 2024</option>
              <option value="febrero">Febrero 2024</option>
              <option value="enero">Enero 2024</option>
            </select>
            <IconFilter />
          </div>
          <button className="btn-primary" onClick={handleGeneratePDF}>
            <IconDownload /> Exportar Reporte PDF
          </button>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Módulo Origen</th>
                <th>Referencia</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredMovements().map(mov => (
                <tr key={mov.id}>
                  <td style={{ fontSize: '12px' }}>{mov.fecha}</td>
                  <td><strong>{mov.concepto}</strong></td>
                  <td>
                    <span className={`movement-badge badge-${mov.tipo}`}>
                      {mov.tipo === 'ingreso' ? <IconTrendingUp /> : <IconTrendingDown />}
                      {mov.tipo === 'ingreso' ? 'Ingreso' : 'Egreso'}
                    </span>
                  </td>
                  <td style={{ fontWeight: '600', color: mov.tipo === 'ingreso' ? '#10b981' : '#ef4444' }}>
                    {mov.tipo === 'ingreso' ? '+' : '-'} RD${mov.monto.toLocaleString()}
                  </td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', background: '#f8fafc', borderRadius: '6px', fontSize: '11px' }}>
                      {mov.modulo === 'Ventas' && <IconShoppingCart />}
                      {mov.modulo === 'Compras' && <IconTruck />}
                      {mov.modulo === 'Producción' && <IconBarChart />}
                      {mov.modulo === 'RRHH' && <IconUsers />}
                      {mov.modulo}
                    </span>
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-2)' }}>{mov.referencia}</td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: mov.estado === 'pagado' ? '#10b981' : mov.estado === 'pendiente' ? '#f59e0b' : '#6b7280' }}>
                      {mov.estado === 'pagado' && <IconCheckCircle />}
                      {mov.estado === 'pendiente' && <IconAlertCircle />}
                      {mov.estado === 'pagado' ? 'Pagado' : mov.estado === 'pendiente' ? 'Pendiente' : 'Completado'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot style={{ background: '#f8fafc', fontWeight: '600' }}>
              <tr>
                <td colSpan="3"><strong>Totales</strong></td>
                <td><strong>RD${getFilteredMovements().reduce((sum, m) => m.tipo === 'ingreso' ? sum + m.monto : sum, 0).toLocaleString()}</strong></td>
                <td colSpan="3"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Modal generación PDF */}
        {showReportModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3 style={{ marginBottom: '16px' }}>Generando Reporte PDF</h3>
              <div className="spinner"></div>
              <p style={{ fontSize: '13px', color: 'var(--text-2)', marginTop: '16px' }}>Por favor espere...</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
