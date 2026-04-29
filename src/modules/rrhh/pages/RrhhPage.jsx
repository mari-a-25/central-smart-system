import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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

function IconDollarSign() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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

function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
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

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
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

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function IconFileText() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
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

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function RrhhPage() {
  const [activeTab, setActiveTab] = useState('empleados')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [showPayrollModal, setShowPayrollModal] = useState(false)

  // Datos de empleados
  const [empleados, setEmpleados] = useState([
    { 
      id: 1,
      iniciales: 'MP',
      nombre: 'María Peña',
      area: 'Administración',
      puesto: 'Administradora General',
      salarioBase: 65000,
      estado: 'activo',
      fechaContratacion: '2022-03-15',
      email: 'maria.pena@central.com',
      telefono: '809-555-0101',
      direccion: 'Calle Principal #123, Santiago',
      cedula: '001-1234567-8',
      documentos: ['contrato.pdf', 'cedula.pdf'],
      asistencia: {
        '2024-01': { presente: 22, ausente: 1, tardanza: 1 },
        '2024-02': { presente: 20, ausente: 0, tardanza: 0 },
        '2024-03': { presente: 21, ausente: 0, tardanza: 2 }
      }
    },
    { 
      id: 2,
      iniciales: 'JC',
      nombre: 'Juan Carlos Pérez',
      area: 'Logística',
      puesto: 'Jefe de Logística',
      salarioBase: 48000,
      estado: 'activo',
      fechaContratacion: '2022-06-20',
      email: 'juan.perez@central.com',
      telefono: '809-555-0102',
      direccion: 'Av. Libertad #456, Santiago',
      cedula: '001-2345678-9',
      documentos: ['contrato.pdf', 'cedula.pdf', 'certificado.pdf'],
      asistencia: {
        '2024-01': { presente: 20, ausente: 2, tardanza: 1 },
        '2024-02': { presente: 19, ausente: 1, tardanza: 0 },
        '2024-03': { presente: 18, ausente: 3, tardanza: 1 }
      }
    },
    { 
      id: 3,
      iniciales: 'AR',
      nombre: 'Ana Rodríguez',
      area: 'Ventas',
      puesto: 'Ejecutiva de Ventas',
      salarioBase: 35000,
      estado: 'activo',
      fechaContratacion: '2023-01-10',
      email: 'ana.rodriguez@central.com',
      telefono: '809-555-0103',
      direccion: 'Calle Sol #789, Santiago',
      cedula: '001-3456789-0',
      documentos: ['contrato.pdf', 'cedula.pdf'],
      asistencia: {
        '2024-01': { presente: 23, ausente: 0, tardanza: 0 },
        '2024-02': { presente: 20, ausente: 0, tardanza: 0 },
        '2024-03': { presente: 22, ausente: 1, tardanza: 0 }
      }
    },
    { 
      id: 4,
      iniciales: 'CS',
      nombre: 'Carlos Santos',
      area: 'Producción',
      puesto: 'Operario',
      salarioBase: 28000,
      estado: 'activo',
      fechaContratacion: '2023-03-05',
      email: 'carlos.santos@central.com',
      telefono: '809-555-0104',
      direccion: 'Residencial Paraíso #12, Santiago',
      cedula: '001-4567890-1',
      documentos: ['contrato.pdf', 'cedula.pdf'],
      asistencia: {
        '2024-01': { presente: 21, ausente: 1, tardanza: 2 },
        '2024-02': { presente: 18, ausente: 2, tardanza: 1 },
        '2024-03': { presente: 20, ausente: 2, tardanza: 1 }
      }
    },
    { 
      id: 5,
      iniciales: 'LR',
      nombre: 'Laura Reyes',
      area: 'Compras',
      puesto: 'Analista de Compras',
      salarioBase: 32000,
      estado: 'activo',
      fechaContratacion: '2023-06-12',
      email: 'laura.reyes@central.com',
      telefono: '809-555-0105',
      direccion: 'Urbanización Real #45, Santiago',
      cedula: '001-5678901-2',
      documentos: ['contrato.pdf', 'cedula.pdf'],
      asistencia: {
        '2024-01': { presente: 22, ausente: 0, tardanza: 1 },
        '2024-02': { presente: 20, ausente: 0, tardanza: 0 },
        '2024-03': { presente: 23, ausente: 0, tardanza: 0 }
      }
    }
  ])

  // Datos de asistencia diaria
  const [asistenciaDiaria, setAsistenciaDiaria] = useState([
    { id: 1, empleadoId: 1, nombre: 'María Peña', fecha: '2024-01-15', estado: 'presente' },
    { id: 2, empleadoId: 2, nombre: 'Juan Carlos Pérez', fecha: '2024-01-15', estado: 'presente' },
    { id: 3, empleadoId: 3, nombre: 'Ana Rodríguez', fecha: '2024-01-15', estado: 'tardanza' },
    { id: 4, empleadoId: 4, nombre: 'Carlos Santos', fecha: '2024-01-15', estado: 'ausente' },
    { id: 5, empleadoId: 5, nombre: 'Laura Reyes', fecha: '2024-01-15', estado: 'presente' }
  ])

  // Nóminas generadas
  const [nominas, setNominas] = useState([
    { id: 1, periodo: 'Enero 2024', totalEmpleados: 5, totalBruto: 208000, totalNeto: 183040, fechaGeneracion: '2024-02-01', estado: 'aprobada' },
    { id: 2, periodo: 'Febrero 2024', totalEmpleados: 5, totalBruto: 208000, totalNeto: 181920, fechaGeneracion: '2024-03-01', estado: 'aprobada' }
  ])

  // Alertas del sistema
  const [alertas] = useState([
    { id: 1, mensaje: 'Nómina de Marzo 2024 lista para revisión', tipo: 'info', fecha: '2024-03-01' },
    { id: 2, mensaje: 'Juan Carlos Pérez tiene 3 ausencias sin justificar este mes', tipo: 'warning', fecha: '2024-03-15' }
  ])

  const getEstadoColor = (estado) => {
    const colors = {
      activo: { bg: '#10b981', light: 'rgba(16,185,129,.12)', text: '#10b981' },
      inactivo: { bg: '#ef4444', light: 'rgba(239,68,68,.12)', text: '#ef4444' },
      vacaciones: { bg: '#f59e0b', light: 'rgba(245,158,11,.12)', text: '#f59e0b' }
    }
    return colors[estado] || colors.activo
  }

  const getAsistenciaEstado = (estado) => {
    const estados = {
      presente: { label: 'Presente', color: '#10b981', bg: 'rgba(16,185,129,.12)' },
      ausente: { label: 'Ausente', color: '#ef4444', bg: 'rgba(239,68,68,.12)' },
      tardanza: { label: 'Tardanza', color: '#f59e0b', bg: 'rgba(245,158,11,.12)' }
    }
    return estados[estado] || estados.presente
  }

  const handleCalculatePayroll = () => {
    // Simular cálculo automático de nómina con n8n
    const mesActual = new Date().toLocaleString('es-ES', { month: 'long', year: 'numeric' })
    const totalBruto = empleados.reduce((sum, emp) => sum + emp.salarioBase, 0)
    const deducciones = totalBruto * 0.12 // 12% de deducciones aproximadas
    const totalNeto = totalBruto - deducciones
    
    alert(`🤖 n8n Workflow - Cálculo de Nómina Automatizado\n\nPeríodo: ${mesActual}\n\nResumen:\n• Total empleados: ${empleados.length}\n• Salario bruto: RD$${totalBruto.toLocaleString()}\n• Deducciones (ISR, AFP, ARS): RD$${deducciones.toLocaleString()}\n• Salario neto: RD$${totalNeto.toLocaleString()}\n\n✅ Movimiento contable generado\n✅ Alerta enviada al administrador\n✅ Registro guardado en tabla contabilidad`)
    
    setShowPayrollModal(false)
  }

  const handleUpdateAttendance = (empleadoId, nuevoEstado) => {
    setAsistenciaDiaria(prev => prev.map(a => 
      a.empleadoId === empleadoId ? { ...a, estado: nuevoEstado } : a
    ))
    alert(`✅ Asistencia actualizada\n\nEmpleado actualizado correctamente.\nEl sistema registrará este cambio para el cálculo de nómina.`)
  }

  const filteredEmpleados = empleados.filter(emp =>
    emp.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.puesto.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const areas = ['Todos', ...new Set(empleados.map(e => e.area))]

  return (
    <DashboardLayout title="Recursos Humanos" subtitle="gestión de empleados, asistencia y nóminas">
      <style>{`
        :root {
          --c-rrhh: #06b6d4;
          --c-rrhh-light: #22d3ee;
          --c-rrhh-dark: #0891b2;
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
          background: var(--c-rrhh);
          color: white;
          box-shadow: 0 2px 8px rgba(6,182,212,.25);
        }
        .tab-btn:hover:not(.active) {
          background: rgba(6,182,212,.08);
          color: var(--c-rrhh);
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
          background: var(--c-rrhh);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(6,182,212,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-rrhh);
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

        .empleados-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .empleado-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          padding: 20px;
          transition: all 0.2s;
          cursor: pointer;
        }
        .empleado-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .empleado-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .empleado-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--c-rrhh), var(--c-rrhh-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .empleado-info {
          flex: 1;
        }
        .empleado-nombre {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .empleado-area {
          font-size: 12px;
          color: var(--text-3);
        }
        .empleado-details {
          border-top: 1px solid var(--border);
          padding-top: 12px;
          margin-top: 8px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 13px;
        }
        .detail-label {
          color: var(--text-3);
        }
        .detail-value {
          font-weight: 600;
          color: var(--text);
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

        .estado-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
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

        .btn-primary {
          background: var(--c-rrhh);
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
          background: var(--c-rrhh-dark);
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
          border-color: var(--c-rrhh);
          color: var(--c-rrhh);
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
        }
        .btn-success:hover {
          background: #059669;
        }
        .btn-warning {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
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
        }
        .form-select:focus, .form-input:focus {
          border-color: var(--c-rrhh);
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon"><IconUsers /></div>
            <div className="kpi-label">Total Empleados</div>
            <div className="kpi-value">{empleados.length}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconDollarSign /></div>
            <div className="kpi-label">Masa Salarial</div>
            <div className="kpi-value">RD$208K</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconClock /></div>
            <div className="kpi-label">Ausencias Mes</div>
            <div className="kpi-value">6</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconTrendingUp /></div>
            <div className="kpi-label">Tardanzas Mes</div>
            <div className="kpi-value">4</div>
          </div>
        </div>

        {/* Alertas */}
        {alertas.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            {alertas.map(alerta => (
              <div key={alerta.id} style={{ 
                background: alerta.tipo === 'info' ? 'rgba(6,182,212,.1)' : 'rgba(245,158,11,.1)',
                border: `1px solid ${alerta.tipo === 'info' ? 'rgba(6,182,212,.3)' : 'rgba(245,158,11,.3)'}`,
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                {alerta.tipo === 'info' ? <IconCheckCircle /> : <IconAlertCircle />}
                <span style={{ flex: 1, fontSize: '13px' }}>{alerta.mensaje}</span>
                <button className="btn-secondary" style={{ padding: '4px 12px' }}>Ver</button>
              </div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'empleados' ? 'active' : ''}`} onClick={() => setActiveTab('empleados')}>
            <IconUsers /> Empleados
          </button>
          <button className={`tab-btn ${activeTab === 'asistencia' ? 'active' : ''}`} onClick={() => setActiveTab('asistencia')}>
            <IconCalendar /> Asistencia
          </button>
          <button className={`tab-btn ${activeTab === 'nomina' ? 'active' : ''}`} onClick={() => setActiveTab('nomina')}>
            <IconDollarSign /> Nómina
          </button>
        </div>

        {/* Tab: Empleados */}
        {activeTab === 'empleados' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar empleado por nombre, área o puesto..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-primary"><IconPlus /> Nuevo Empleado</button>
            </div>

            <div className="empleados-grid">
              {filteredEmpleados.map(empleado => {
                const estadoColor = getEstadoColor(empleado.estado)
                return (
                  <div key={empleado.id} className="empleado-card" onClick={() => setSelectedEmployee(empleado)}>
                    <div className="empleado-header">
                      <div className="empleado-avatar">{empleado.iniciales}</div>
                      <div className="empleado-info">
                        <div className="empleado-nombre">{empleado.nombre}</div>
                        <div className="empleado-area">{empleado.area} · {empleado.puesto}</div>
                      </div>
                    </div>
                    <div className="empleado-details">
                      <div className="detail-row">
                        <span className="detail-label">Salario Base</span>
                        <span className="detail-value">RD${empleado.salarioBase.toLocaleString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Fecha Contratación</span>
                        <span className="detail-value">{empleado.fechaContratacion}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Estado</span>
                        <span className="estado-badge" style={{ background: estadoColor.light, color: estadoColor.text }}>
                          {empleado.estado.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Tab: Asistencia */}
        {activeTab === 'asistencia' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <select className="form-select" style={{ width: 'auto', display: 'inline-block', marginRight: '8px' }} value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                  <option value={0}>Enero</option>
                  <option value={1}>Febrero</option>
                  <option value={2}>Marzo</option>
                  <option value={3}>Abril</option>
                  <option value={4}>Mayo</option>
                  <option value={5}>Junio</option>
                  <option value={6}>Julio</option>
                  <option value={7}>Agosto</option>
                  <option value={8}>Septiembre</option>
                  <option value={9}>Octubre</option>
                  <option value={10}>Noviembre</option>
                  <option value={11}>Diciembre</option>
                </select>
                <select className="form-select" style={{ width: 'auto' }} value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                </select>
              </div>
              <button className="btn-secondary"><IconDownload /> Exportar Reporte</button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th>Empleado</th><th>Área</th><th>Fecha</th><th>Estado</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {asistenciaDiaria.map(registro => {
                    const empleado = empleados.find(e => e.id === registro.empleadoId)
                    const estadoInfo = getAsistenciaEstado(registro.estado)
                    return (
                      <tr key={registro.id}>
                        <td><strong>{registro.nombre}</strong></td>
                        <td>{empleado?.area}</td>
                        <td>{registro.fecha}</td>
                        <td>
                          <span className="estado-badge" style={{ background: estadoInfo.bg, color: estadoInfo.color }}>
                            {estadoInfo.label}
                          </span>
                        </td>
                        <td>
                          <select 
                            className="form-select" 
                            style={{ width: 'auto', padding: '4px 8px', fontSize: '12px' }}
                            value={registro.estado}
                            onChange={(e) => handleUpdateAttendance(registro.empleadoId, e.target.value)}
                          >
                            <option value="presente">Presente</option>
                            <option value="tardanza">Tardanza</option>
                            <option value="ausente">Ausente</option>
                          </select>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '24px', background: '#f8fafc', padding: '16px', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>📊 Resumen de Asistencia - {new Date(selectedYear, selectedMonth).toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#10b981' }}>
                    {empleados.reduce((sum, emp) => sum + (emp.asistencia[`${selectedYear}-${String(selectedMonth+1).padStart(2,'0')}`]?.presente || 0), 0)}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Presentes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#ef4444' }}>
                    {empleados.reduce((sum, emp) => sum + (emp.asistencia[`${selectedYear}-${String(selectedMonth+1).padStart(2,'0')}`]?.ausente || 0), 0)}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Ausentes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#f59e0b' }}>
                    {empleados.reduce((sum, emp) => sum + (emp.asistencia[`${selectedYear}-${String(selectedMonth+1).padStart(2,'0')}`]?.tardanza || 0), 0)}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Tardanzas</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Tab: Nómina */}
        {activeTab === 'nomina' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
              <button className="btn-primary" onClick={() => setShowPayrollModal(true)}>
                <IconDollarSign /> Calcular Nómina (n8n)
              </button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th>Período</th><th>Empleados</th><th>Total Bruto</th><th>Deducciones</th><th>Total Neto</th><th>Fecha Generación</th><th>Estado</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {nominas.map(nomina => (
                    <tr key={nomina.id}>
                      <td><strong>{nomina.periodo}</strong></td>
                      <td>{nomina.totalEmpleados}</td>
                      <td>RD${nomina.totalBruto.toLocaleString()}</td>
                      <td>RD${(nomina.totalBruto - nomina.totalNeto).toLocaleString()}</td>
                      <td><strong>RD${nomina.totalNeto.toLocaleString()}</strong></td>
                      <td>{nomina.fechaGeneracion}</td>
                      <td>
                        <span className="estado-badge" style={{ background: 'rgba(16,185,129,.12)', color: '#10b981' }}>
                          <IconCheckCircle /> {nomina.estado}
                        </span>
                      </td>
                      <td>
                        <button className="btn-secondary" style={{ padding: '4px 12px' }}><IconEye /> Detalle</button>
                        <button className="btn-secondary" style={{ padding: '4px 12px' }}><IconDownload /> PDF</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Modal Detalle Empleado */}
        {selectedEmployee && (
          <div className="modal-overlay" onClick={() => setSelectedEmployee(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconUsers /> {selectedEmployee.nombre}</h2>
                <button onClick={() => setSelectedEmployee(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label">Información Personal</label>
                <div><strong>Puesto:</strong> {selectedEmployee.puesto}</div>
                <div><strong>Área:</strong> {selectedEmployee.area}</div>
                <div><strong>Salario Base:</strong> RD${selectedEmployee.salarioBase.toLocaleString()}</div>
                <div><strong>Fecha Contratación:</strong> {selectedEmployee.fechaContratacion}</div>
                <div><strong>Cédula:</strong> {selectedEmployee.cedula}</div>
              </div>
              <div className="form-group"><label className="form-label">Contacto</label>
                <div><strong>Email:</strong> {selectedEmployee.email}</div>
                <div><strong>Teléfono:</strong> {selectedEmployee.telefono}</div>
                <div><strong>Dirección:</strong> {selectedEmployee.direccion}</div>
              </div>
              <div className="form-group"><label className="form-label">Documentos (Supabase Storage)</label>
                {selectedEmployee.documentos.map(doc => (
                  <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <IconFileText />
                    <span style={{ fontSize: '13px' }}>{doc}</span>
                    <button className="btn-secondary" style={{ padding: '2px 8px', marginLeft: 'auto' }}>Descargar</button>
                  </div>
                ))}
              </div>
              <div className="form-group"><label className="form-label">Historial de Asistencia</label>
                <div className="table-wrapper" style={{ marginTop: '8px' }}>
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Mes</th><th>Presente</th><th>Ausente</th><th>Tardanza</th></tr></thead>
                    <tbody>
                      {Object.entries(selectedEmployee.asistencia).map(([mes, datos]) => (
                        <tr key={mes}><td>{mes.replace('-', ' ')}</td><td>{datos.presente}</td><td>{datos.ausente}</td><td>{datos.tardanza}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => setSelectedEmployee(null)}>Cerrar</button>
            </div>
          </div>
        )}

        {/* Modal Cálculo Nómina */}
        {showPayrollModal && (
          <div className="modal-overlay" onClick={() => setShowPayrollModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconDollarSign /> Calcular Nómina</h2>
                <button onClick={() => setShowPayrollModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Período</label>
                <select className="form-select">
                  <option>Marzo 2024</option>
                  <option>Abril 2024</option>
                  <option>Mayo 2024</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Empleados a incluir</label>
                <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px' }}>
                  {empleados.map(emp => (
                    <div key={emp.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <input type="checkbox" defaultChecked /> {emp.nombre} - RD${emp.salarioBase.toLocaleString()}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
                <IconCheckCircle /> El cálculo se realizará automáticamente con n8n workflow
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setShowPayrollModal(false)}>Cancelar</button>
                <button className="btn-primary" style={{ flex: 1 }} onClick={handleCalculatePayroll}>Calcular Nómina →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}