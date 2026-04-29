import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconFactory() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
      <path d="M9 9h1"/>
      <path d="M9 13h1"/>
      <path d="M9 17h1"/>
    </svg>
  )
}

function IconPackage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.29 7 12 12 20.71 7"/>
      <line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function IconAlertCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

function IconTrendingUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconTrendingDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  )
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function IconEdit() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3l4 4-7 7H10v-4L17 3z"/>
      <path d="M4 20h16"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IconThumbsUp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  )
}

function IconThumbsDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>
    </svg>
  )
}

function IconRefresh() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6"/>
      <path d="M1 20v-6h6"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/>
      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>
    </svg>
  )
}

export default function ProduccionPage() {
  const [activeTab, setActiveTab] = useState('lotes')
  const [showNewBatchModal, setShowNewBatchModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBatch, setSelectedBatch] = useState(null)
  const [qualityFilter, setQualityFilter] = useState('todos')

  // Datos de lotes de producción
  const [lotes, setLotes] = useState([
    { 
      id: 'LTE-001', 
      producto: 'Jugo Naranja', 
      cantidadPlanificada: 500, 
      cantidadProducida: 380, 
      estado: 'en_proceso',
      calidad: 'pendiente',
      fechaInicio: '2024-01-13',
      fechaFinEstimada: '2024-01-15',
      operador: 'Juan Pérez',
      porcentaje: 76
    },
    { 
      id: 'LTE-002', 
      producto: 'Jugo Mango', 
      cantidadPlanificada: 300, 
      cantidadProducida: 300, 
      estado: 'terminado',
      calidad: 'aprobado',
      fechaInicio: '2024-01-12',
      fechaFin: '2024-01-14',
      operador: 'María Rodríguez',
      porcentaje: 100
    },
    { 
      id: 'LTE-003', 
      producto: 'Snack Maíz', 
      cantidadPlanificada: 800, 
      cantidadProducida: 450, 
      estado: 'en_proceso',
      calidad: 'pendiente',
      fechaInicio: '2024-01-14',
      fechaFinEstimada: '2024-01-16',
      operador: 'Carlos Santos',
      porcentaje: 56
    },
    { 
      id: 'LTE-004', 
      producto: 'Mixto', 
      cantidadPlanificada: 200, 
      cantidadProducida: 120, 
      estado: 'rechazado',
      calidad: 'rechazado',
      motivoRechazo: 'Problemas de empaque - sellado defectuoso',
      fechaInicio: '2024-01-11',
      fechaFin: '2024-01-13',
      operador: 'Ana Martínez',
      porcentaje: 60
    },
    { 
      id: 'LTE-005', 
      producto: 'Agua', 
      cantidadPlanificada: 1000, 
      cantidadProducida: 0, 
      estado: 'planificado',
      calidad: 'pendiente',
      fechaInicio: '2024-01-15',
      fechaFinEstimada: '2024-01-17',
      operador: 'Pendiente',
      porcentaje: 0
    }
  ])

  // Sugerencias IA para planificación
  const [sugerenciasIA] = useState([
    {
      id: 1,
      producto: 'Jugo Naranja',
      cantidad: 450,
      diaRecomendado: 'Miércoles',
      razon: 'Mayor demanda histórica los miércoles (promedio 420 unidades)',
      tendencia: 'up',
      ventasUltimaSemana: 380,
      ventasHistorico: 1650,
      estacionalidad: 'Alta demanda en inicio de mes'
    },
    {
      id: 2,
      producto: 'Jugo Mango',
      cantidad: 250,
      diaRecomendado: 'Viernes',
      razon: 'Picos de venta los viernes por fin de semana (promedio 230 unidades)',
      tendencia: 'up',
      ventasUltimaSemana: 210,
      ventasHistorico: 890,
      estacionalidad: 'Demanda estable'
    },
    {
      id: 3,
      producto: 'Snack Maíz',
      cantidad: 600,
      diaRecomendado: 'Jueves',
      razon: 'Demanda constante, stock actual bajo (120 unidades restantes)',
      tendencia: 'down',
      ventasUltimaSemana: 550,
      ventasHistorico: 2200,
      estacionalidad: 'Alta demanda en fin de semana'
    }
  ])

  // Historial de calidad
  const [historialCalidad] = useState([
    { id: 1, loteId: 'LTE-004', producto: 'Mixto', resultado: 'rechazado', motivo: 'Problemas de empaque - sellado defectuoso', fecha: '2024-01-13', inspector: 'Control Calidad' },
    { id: 2, loteId: 'LTE-002', producto: 'Jugo Mango', resultado: 'aprobado', motivo: 'Cumple especificaciones', fecha: '2024-01-14', inspector: 'Control Calidad' },
    { id: 3, loteId: 'LTE-001', producto: 'Jugo Naranja', resultado: 'en_revision', motivo: 'En proceso de revisión', fecha: '2024-01-14', inspector: 'Control Calidad' }
  ])

  const getEstadoInfo = (estado) => {
    const estadosMap = {
      planificado: { label: 'Planificado', color: '#94a3b8', bg: 'rgba(148,163,184,.12)', icon: <IconCalendar /> },
      en_proceso: { label: 'En Proceso', color: '#3b82f6', bg: 'rgba(59,130,246,.12)', icon: <IconFactory /> },
      terminado: { label: 'Terminado', color: '#10b981', bg: 'rgba(16,185,129,.12)', icon: <IconCheckCircle /> },
      rechazado: { label: 'Rechazado', color: '#ef4444', bg: 'rgba(239,68,68,.12)', icon: <IconAlertCircle /> }
    }
    return estadosMap[estado] || { label: estado, color: '#6b7280', bg: 'rgba(107,114,128,.12)', icon: null }
  }

  const handleQualityApprove = (lote) => {
    alert(`✅ Lote ${lote.id} APROBADO por control de calidad\n\n• ${lote.cantidadProducida} unidades añadidas al inventario\n• Stock actualizado automáticamente\n• Movimiento registrado en historial`)
    
    setLotes(prev => prev.map(l => 
      l.id === lote.id ? { ...l, calidad: 'aprobado', estado: 'terminado' } : l
    ))
  }

  const handleQualityReject = (lote, motivo) => {
    const motivoRechazo = prompt('Motivo del rechazo:', 'Problemas de calidad detectados')
    if (motivoRechazo) {
      alert(`❌ Lote ${lote.id} RECHAZADO\n\nMotivo: ${motivoRechazo}\n\n• No se añaden unidades al inventario\n• Notificación enviada a producción`)
      
      setLotes(prev => prev.map(l => 
        l.id === lote.id ? { ...l, calidad: 'rechazado', estado: 'rechazado', motivoRechazo } : l
      ))
    }
  }

  const handleUpdateProduction = (lote, cantidad) => {
    const nuevaCantidad = Math.min(lote.cantidadPlanificada, lote.cantidadProducida + cantidad)
    const nuevoPorcentaje = Math.round((nuevaCantidad / lote.cantidadPlanificada) * 100)
    
    setLotes(prev => prev.map(l => 
      l.id === lote.id ? { 
        ...l, 
        cantidadProducida: nuevaCantidad, 
        porcentaje: nuevoPorcentaje,
        estado: nuevaCantidad === l.cantidadPlanificada ? 'terminado' : 'en_proceso'
      } : l
    ))
  }

  const filteredLotes = lotes.filter(lote =>
    lote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lote.producto.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(lote => qualityFilter === 'todos' ? true : lote.calidad === qualityFilter)

  return (
    <DashboardLayout title="Producción" subtitle="control de lotes y procesos">
      <style>{`
        :root {
          --c-produccion: #f59e0b;
          --c-produccion-light: #fbbf24;
          --c-produccion-dark: #d97706;
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

        .tabs-container {
          display: flex;
          gap: 8px;
          background: var(--card);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          padding: 6px;
          margin-bottom: 24px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-2);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .tab-btn.active {
          background: var(--c-produccion);
          color: white;
          box-shadow: 0 2px 8px rgba(245,158,11,.25);
        }
        .tab-btn:hover:not(.active) {
          background: rgba(245,158,11,.08);
          color: var(--c-produccion);
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
          background: var(--c-produccion);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(245,158,11,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-produccion);
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
          background: linear-gradient(135deg, rgba(245,158,11,.05), rgba(245,158,11,.02));
          border: 1.5px solid rgba(245,158,11,.2);
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
          background: rgba(245,158,11,.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-produccion);
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
        .recommendation-card {
          background: var(--card);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .recommendation-card:hover {
          transform: translateX(4px);
          border-color: var(--c-produccion);
        }

        .progress-bar-container {
          background: #e2e8f0;
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
          margin: 8px 0;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s;
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
          font-size: 13.5px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }
        tr:last-child td {
          border-bottom: none;
        }
        tr:hover td {
          background: #f8fafc;
        }

        .estado-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .btn-primary {
          background: var(--c-produccion);
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
          background: var(--c-produccion-dark);
          transform: translateY(-1px);
        }
        .btn-secondary {
          background: transparent;
          border: 1.5px solid var(--border);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-secondary:hover {
          border-color: var(--c-produccion);
          color: var(--c-produccion);
        }
        .btn-outline {
          background: transparent;
          border: 1.5px solid var(--c-produccion);
          color: var(--c-produccion);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .btn-outline:hover {
          background: var(--c-produccion);
          color: white;
        }
        .btn-success {
          background: #10b981;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .btn-success:hover {
          background: #059669;
        }
        .btn-danger {
          background: #ef4444;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .btn-danger:hover {
          background: #dc2626;
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
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          padding: 28px;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .modal-title {
          font-size: 20px;
          font-weight: 700;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }
        .form-select, .form-input {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }
        .form-select:focus, .form-input:focus {
          border-color: var(--c-produccion);
        }

        .search-box {
          display: flex;
          gap: 12px;
          align-items: center;
          background: white;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 16px;
        }
        .search-box input {
          border: none;
          outline: none;
          font-size: 14px;
          width: 250px;
          background: transparent;
        }
        .action-buttons {
          display: flex;
          gap: 6px;
        }
        .filter-buttons {
          display: flex;
          gap: 8px;
        }
        .filter-btn {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: 1.5px solid var(--border);
          color: var(--text-2);
        }
        .filter-btn.active {
          background: var(--c-produccion);
          border-color: var(--c-produccion);
          color: white;
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon"><IconFactory /></div>
            <div className="kpi-label">Lotes Activos</div>
            <div className="kpi-value">3</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +1 vs ayer</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconPackage /></div>
            <div className="kpi-label">Unidades Producidas</div>
            <div className="kpi-value">1,130</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +15% esta semana</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconCheckCircle /></div>
            <div className="kpi-label">Eficiencia General</div>
            <div className="kpi-value">87%</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +5% vs meta</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconAlertCircle /></div>
            <div className="kpi-label">Tasa de Rechazo</div>
            <div className="kpi-value">4.2%</div>
            <div className="kpi-trend trend-down"><IconTrendingDown /> -1% vs mes anterior</div>
          </div>
        </div>

        {/* IA Planning Recommendations */}
        <div className="ia-card">
          <div className="ia-header">
            <div className="ia-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <div className="ia-title">🤖 Agente IA - Planificación de Producción</div>
              <div className="ia-subtitle">Recomendaciones basadas en historial de ventas y tendencias</div>
            </div>
          </div>
          {sugerenciasIA.map(sug => (
            <div key={sug.id} className="recommendation-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconPackage /> {sug.producto}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--c-produccion)', marginTop: '4px' }}>
                    → Producir {sug.cantidad} unidades para {sug.diaRecomendado}
                  </div>
                </div>
                <span style={{ display: 'flex', gap: '4px', color: sug.tendencia === 'up' ? '#10b981' : '#ef4444' }}>
                  {sug.tendencia === 'up' ? <IconTrendingUp /> : <IconTrendingDown />}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-2)', marginBottom: '12px' }}>{sug.razon}</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="info-badge" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
                  <IconCalendar /> Ventas última semana: {sug.ventasUltimaSemana} und
                </div>
                <div className="info-badge" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
                  <IconTrendingUp /> Promedio histórico: {Math.round(sug.ventasHistorico / 4)} und/semana
                </div>
                <button className="btn-outline" style={{ marginLeft: 'auto' }}>Crear lote de producción →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'lotes' ? 'active' : ''}`} onClick={() => setActiveTab('lotes')}>
            <IconFactory /> Lotes de Producción
          </button>
          <button className={`tab-btn ${activeTab === 'calidad' ? 'active' : ''}`} onClick={() => setActiveTab('calidad')}>
            <IconCheckCircle /> Control de Calidad
          </button>
        </div>

        {/* Tab: Lotes de Producción */}
        {activeTab === 'lotes' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar lote o producto..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconFilter />
              </div>
              <button className="btn-primary" onClick={() => setShowNewBatchModal(true)}><IconPlus /> Nuevo Lote</button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Lote</th>
                    <th>Producto</th>
                    <th>Planificado</th>
                    <th>Producido</th>
                    <th>Progreso</th>
                    <th>Estado</th>
                    <th>Fechas</th>
                    <th>Operador</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLotes.map(lote => {
                    const estadoInfo = getEstadoInfo(lote.estado)
                    return (
                      <tr key={lote.id}>
                        <td><strong>{lote.id}</strong></td>
                        <td>{lote.producto}</td>
                        <td>{lote.cantidadPlanificada.toLocaleString()} und</td>
                        <td>{lote.cantidadProducida.toLocaleString()} und</td>
                        <td style={{ minWidth: '120px' }}>
                          <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${lote.porcentaje}%`, background: lote.estado === 'rechazado' ? '#ef4444' : 'var(--c-produccion)' }}></div>
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: '600' }}>{lote.porcentaje}%</span>
                        </td>
                        <td>
                          <span className="estado-badge" style={{ background: estadoInfo.bg, color: estadoInfo.color }}>
                            {estadoInfo.icon} {estadoInfo.label}
                          </span>
                        </td>
                        <td style={{ fontSize: '12px' }}>
                          <IconCalendar /> Inicio: {lote.fechaInicio}<br/>
                          {lote.fechaFinEstimada && <span style={{ color: 'var(--text-3)' }}>Fin estimado: {lote.fechaFinEstimada}</span>}
                        </td>
                        <td style={{ fontSize: '12px' }}>{lote.operador}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-outline" onClick={() => setSelectedBatch(lote)}><IconEye /> Ver</button>
                            {lote.estado === 'en_proceso' && lote.porcentaje < 100 && (
                              <button className="btn-outline" onClick={() => {
                                const cantidad = prompt('Cantidad producida adicional:', '100')
                                if (cantidad) handleUpdateProduction(lote, parseInt(cantidad))
                              }}><IconEdit /> Registrar</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Tab: Control de Calidad */}
        {activeTab === 'calidad' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="filter-buttons">
                <button className={`filter-btn ${qualityFilter === 'todos' ? 'active' : ''}`} onClick={() => setQualityFilter('todos')}>Todos</button>
                <button className={`filter-btn ${qualityFilter === 'pendiente' ? 'active' : ''}`} onClick={() => setQualityFilter('pendiente')}>Pendientes</button>
                <button className={`filter-btn ${qualityFilter === 'aprobado' ? 'active' : ''}`} onClick={() => setQualityFilter('aprobado')}>Aprobados</button>
                <button className={`filter-btn ${qualityFilter === 'rechazado' ? 'active' : ''}`} onClick={() => setQualityFilter('rechazado')}>Rechazados</button>
              </div>
              <div className="search-box">
                <IconSearch />
                <input type="text" placeholder="Buscar lote..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th>Lote</th><th>Producto</th><th>Cantidad</th><th>Fecha Producción</th><th>Inspector</th><th>Estado Calidad</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {lotes.filter(l => l.calidad === qualityFilter || qualityFilter === 'todos').map(lote => (
                    <tr key={`qc-${lote.id}`} className={lote.calidad === 'rechazado' ? 'rechazado-row' : ''}>
                      <td><strong>{lote.id}</strong></td>
                      <td>{lote.producto}</td>
                      <td>{lote.cantidadProducida} und</td>
                      <td>{lote.fechaFin || lote.fechaInicio}</td>
                      <td>Control Calidad</td>
                      <td>
                        <span className="estado-badge" style={{ 
                          background: lote.calidad === 'aprobado' ? 'rgba(16,185,129,.12)' : lote.calidad === 'rechazado' ? 'rgba(239,68,68,.12)' : 'rgba(245,158,11,.12)',
                          color: lote.calidad === 'aprobado' ? '#10b981' : lote.calidad === 'rechazado' ? '#ef4444' : '#f59e0b'
                        }}>
                          {lote.calidad === 'aprobado' && <IconCheckCircle />}
                          {lote.calidad === 'rechazado' && <IconAlertCircle />}
                          {lote.calidad === 'pendiente' && <IconClock />}
                          {lote.calidad === 'aprobado' ? 'Aprobado' : lote.calidad === 'rechazado' ? 'Rechazado' : 'Pendiente'}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          {lote.estado === 'terminado' && lote.calidad === 'pendiente' && (
                            <>
                              <button className="btn-success" onClick={() => handleQualityApprove(lote)}><IconThumbsUp /> Aprobar</button>
                              <button className="btn-danger" onClick={() => handleQualityReject(lote)}><IconThumbsDown /> Rechazar</button>
                            </>
                          )}
                          <button className="btn-outline" onClick={() => setSelectedBatch(lote)}><IconEye /> Ver</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Historial de Calidad */}
            <div style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><IconCheckCircle /> Historial de Calidad</h3>
              <div className="table-wrapper">
                <table style={{ fontSize: '12px' }}>
                  <thead>
                    <tr><th>Fecha</th><th>Lote</th><th>Producto</th><th>Resultado</th><th>Motivo</th><th>Inspector</th></tr>
                  </thead>
                  <tbody>
                    {historialCalidad.map(record => (
                      <tr key={record.id}>
                        <td>{record.fecha}</td>
                        <td>{record.loteId}</td>
                        <td>{record.producto}</td>
                        <td>
                          <span className="estado-badge" style={{ 
                            background: record.resultado === 'aprobado' ? 'rgba(16,185,129,.12)' : 'rgba(239,68,68,.12)',
                            color: record.resultado === 'aprobado' ? '#10b981' : '#ef4444'
                          }}>
                            {record.resultado === 'aprobado' ? <IconCheckCircle /> : <IconAlertCircle />}
                            {record.resultado === 'aprobado' ? 'Aprobado' : 'Rechazado'}
                          </span>
                        </td>
                        <td style={{ maxWidth: '300px' }}>{record.motivo}</td>
                        <td>{record.inspector}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Modal Nuevo Lote */}
        {showNewBatchModal && (
          <div className="modal-overlay" onClick={() => setShowNewBatchModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconFactory /> Nuevo Lote de Producción</h2>
                <button onClick={() => setShowNewBatchModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Producto</label>
                <select className="form-select">
                  <option value="">-- Seleccione un producto --</option>
                  <option>Jugo Naranja</option>
                  <option>Jugo Mango</option>
                  <option>Snack Maíz</option>
                  <option>Mixto</option>
                  <option>Agua</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Cantidad Planificada</label>
                <input type="number" className="form-input" placeholder="Ej: 500" />
              </div>
              <div className="form-group">
                <label className="form-label">Operador Asignado</label>
                <select className="form-select">
                  <option value="">-- Seleccione un operador --</option>
                  <option>Juan Pérez</option>
                  <option>María Rodríguez</option>
                  <option>Carlos Santos</option>
                  <option>Ana Martínez</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Fecha Inicio Estimada</label>
                <input type="date" className="form-input" />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setShowNewBatchModal(false)}>Cancelar</button>
                <button className="btn-primary" style={{ flex: 1 }} onClick={() => { setShowNewBatchModal(false); alert('✅ Lote de producción creado exitosamente'); }}>Crear Lote →</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Detalle Lote */}
        {selectedBatch && (
          <div className="modal-overlay" onClick={() => setSelectedBatch(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconFactory /> Lote {selectedBatch.id}</h2>
                <button onClick={() => setSelectedBatch(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label">Producto</label><div><strong>{selectedBatch.producto}</strong></div></div>
              <div className="form-group"><label className="form-label">Cantidad Planificada</label><div>{selectedBatch.cantidadPlanificada} unidades</div></div>
              <div className="form-group"><label className="form-label">Cantidad Producida</label><div>{selectedBatch.cantidadProducida} unidades ({selectedBatch.porcentaje}%)</div></div>
              <div className="progress-bar-container" style={{ marginBottom: '16px' }}>
                <div className="progress-bar-fill" style={{ width: `${selectedBatch.porcentaje}%`, background: 'var(--c-produccion)' }}></div>
              </div>
              <div className="form-group"><label className="form-label">Estado</label><div><span className="estado-badge" style={{ background: getEstadoInfo(selectedBatch.estado).bg, color: getEstadoInfo(selectedBatch.estado).color }}>{getEstadoInfo(selectedBatch.estado).label}</span></div></div>
              <div className="form-group"><label className="form-label">Fechas</label><div>Inicio: {selectedBatch.fechaInicio}<br/>{selectedBatch.fechaFinEstimada && `Fin estimado: ${selectedBatch.fechaFinEstimada}`}</div></div>
              <div className="form-group"><label className="form-label">Operador</label><div>{selectedBatch.operador}</div></div>
              {selectedBatch.motivoRechazo && (
                <div className="form-group"><label className="form-label">Motivo Rechazo</label><div style={{ color: '#ef4444' }}>{selectedBatch.motivoRechazo}</div></div>
              )}
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {selectedBatch.estado === 'en_proceso' && selectedBatch.porcentaje < 100 && (
                  <button className="btn-primary" style={{ flex: 1 }} onClick={() => {
                    const cantidad = prompt('Cantidad producida adicional:', '100')
                    if (cantidad) handleUpdateProduction(selectedBatch, parseInt(cantidad))
                    setSelectedBatch(null)
                  }}>Registrar Producción</button>
                )}
                {selectedBatch.estado === 'terminado' && selectedBatch.calidad === 'pendiente' && (
                  <>
                    <button className="btn-success" style={{ flex: 1 }} onClick={() => { handleQualityApprove(selectedBatch); setSelectedBatch(null); }}>Aprobar Calidad</button>
                    <button className="btn-danger" style={{ flex: 1 }} onClick={() => { handleQualityReject(selectedBatch); setSelectedBatch(null); }}>Rechazar</button>
                  </>
                )}
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setSelectedBatch(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}