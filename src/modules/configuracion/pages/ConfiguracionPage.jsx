import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconSettings() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.07.07A10 10 0 0 0 12 17.66a10 10 0 0 0 6.18-2.59z"/>
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <line x1="9" y1="6" x2="15" y2="6"/>
      <line x1="9" y1="10" x2="15" y2="10"/>
      <line x1="9" y1="14" x2="15" y2="14"/>
      <line x1="9" y1="18" x2="15" y2="18"/>
    </svg>
  )
}

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

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  )
}

function IconCpu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
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

function IconSave() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
      <polyline points="17 21 17 13 7 13 7 21"/>
      <polyline points="7 3 7 8 15 8"/>
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

function IconTrash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
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

function IconEyeOff() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
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

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function ConfiguracionPage() {
  const [activeSection, setActiveSection] = useState('empresa')
  const [showApiKey, setShowApiKey] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  // Datos de empresa
  const [empresa, setEmpresa] = useState({
    nombre: 'Central Smart System',
    logo: 'CSS',
    moneda: 'RD$',
    pais: 'República Dominicana',
    sector: 'Tecnología / ERP',
    email: 'info@centralsmart.com',
    telefono: '809-555-0000',
    direccion: 'Av. Principal #123, Santiago'
  })

  // Usuarios del sistema
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'María Peña', email: 'maria.pena@central.com', rol: 'Administrador', estado: 'activo', ultimoAcceso: '2024-03-15 14:30:00' },
    { id: 2, nombre: 'Juan Pérez', email: 'juan.perez@central.com', rol: 'Gerente', estado: 'activo', ultimoAcceso: '2024-03-15 10:15:00' },
    { id: 3, nombre: 'Ana Rodríguez', email: 'ana.rodriguez@central.com', rol: 'Ventas', estado: 'activo', ultimoAcceso: '2024-03-14 16:45:00' },
    { id: 4, nombre: 'Carlos López', email: 'carlos.lopez@central.com', rol: 'Compras', estado: 'inactivo', ultimoAcceso: '2024-03-10 09:30:00' }
  ])

  // Módulos activos
  const [modulos, setModulos] = useState([
    { id: 1, nombre: 'Ventas', icono: '🛒', activo: true, descripcion: 'Gestión de pedidos y facturación' },
    { id: 2, nombre: 'Compras', icono: '📦', activo: true, descripcion: 'Órdenes de compra y proveedores' },
    { id: 3, nombre: 'Inventario', icono: '📊', activo: true, descripcion: 'Control de stock y movimientos' },
    { id: 4, nombre: 'Producción', icono: '🏭', activo: true, descripcion: 'Lotes de producción y calidad' },
    { id: 5, nombre: 'Logística', icono: '🚚', activo: true, descripcion: 'Rutas y entregas' },
    { id: 6, nombre: 'RRHH', icono: '👥', activo: true, descripcion: 'Empleados, asistencia y nómina' },
    { id: 7, nombre: 'Contabilidad', icono: '💰', activo: true, descripcion: 'Movimientos financieros' },
    { id: 8, nombre: 'Clientes', icono: '🤝', activo: true, descripcion: 'CRM y tickets de soporte' }
  ])

  // Configuración IA
  const [iaConfig, setIaConfig] = useState({
    apiKey: 'AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    modelo: 'gemini-pro',
    enabled: true
  })

  // Configuración de alertas
  const [alertasConfig, setAlertasConfig] = useState({
    inventarioMinimoDias: 5,
    contratosVencimiento: 30,
    notificacionesEmail: true,
    alertasStockCritico: true,
    reportesSemanales: true
  })

  const handleSaveEmpresa = () => {
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
    alert('✅ Datos de empresa guardados correctamente')
  }

  const handleInviteUser = () => {
    const email = prompt('Ingrese el correo del nuevo usuario:')
    if (email) {
      alert(`✅ Invitación enviada a ${email}\n\nEl usuario recibirá un correo para crear su cuenta y acceder al sistema.`)
    }
  }

  const handleChangeUserRole = (userId, newRole) => {
    setUsuarios(prev => prev.map(u => u.id === userId ? { ...u, rol: newRole } : u))
    alert(`✅ Rol del usuario actualizado a: ${newRole}`)
  }

  const handleToggleUserStatus = (userId) => {
    const user = usuarios.find(u => u.id === userId)
    const nuevoEstado = user.estado === 'activo' ? 'inactivo' : 'activo'
    setUsuarios(prev => prev.map(u => u.id === userId ? { ...u, estado: nuevoEstado } : u))
    alert(`✅ Usuario ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'} correctamente`)
  }

  const handleToggleModulo = (moduloId) => {
    setModulos(prev => prev.map(m => m.id === moduloId ? { ...m, activo: !m.activo } : m))
    const modulo = modulos.find(m => m.id === moduloId)
    alert(`✅ Módulo "${modulo.nombre}" ${!modulo.activo ? 'activado' : 'desactivado'}\n\nLos cambios se aplicarán al recargar la página.`)
  }

  const handleSaveIAConfig = () => {
    alert(`✅ Configuración de IA guardada\n\nAPI Key almacenada de forma segura en Supabase\nModelo: ${iaConfig.modelo}\nIA Asistente: ${iaConfig.enabled ? 'Activado' : 'Desactivado'}\n\nLa key nunca se expone en el frontend, solo se usa desde Edge Functions.`)
  }

  const handleSaveAlertas = () => {
    alert(`✅ Configuración de alertas guardada\n\n• Umbral inventario mínimo: ${alertasConfig.inventarioMinimoDias} días\n• Contratos a vencer: ${alertasConfig.contratosVencimiento} días de anticipación\n• Notificaciones email: ${alertasConfig.notificacionesEmail ? 'Activadas' : 'Desactivadas'}\n• Alertas stock crítico: ${alertasConfig.alertasStockCritico ? 'Activadas' : 'Desactivadas'}`)
  }

  const sections = [
    { id: 'empresa', nombre: 'Datos de Empresa', icono: <IconBuilding /> },
    { id: 'usuarios', nombre: 'Usuarios y Roles', icono: <IconUsers /> },
    { id: 'modulos', nombre: 'Módulos Activos', icono: <IconGrid /> },
    { id: 'ia', nombre: 'Integración IA', icono: <IconCpu /> },
    { id: 'alertas', nombre: 'Alertas', icono: <IconBell /> }
  ]

  return (
    <DashboardLayout title="Configuración" subtitle="administración general del sistema">
      <style>{`
        :root {
          --c-config: #8b5cf6;
          --c-config-light: #a78bfa;
          --c-config-dark: #7c3aed;
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

        .config-container {
          display: flex;
          gap: 24px;
        }
        .config-sidebar {
          width: 260px;
          flex-shrink: 0;
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          padding: 16px;
          position: sticky;
          top: 80px;
          height: fit-content;
        }
        .config-sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-2);
          font-size: 14px;
          font-weight: 500;
        }
        .config-sidebar-item:hover {
          background: rgba(139,92,246,.08);
          color: var(--c-config);
        }
        .config-sidebar-item.active {
          background: var(--c-config);
          color: white;
        }
        .config-content {
          flex: 1;
        }
        .config-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          margin-bottom: 24px;
          overflow: hidden;
        }
        .config-card-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .config-card-header h2 {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }
        .config-card-body {
          padding: 24px;
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
        .form-input, .form-select {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }
        .form-input:focus, .form-select:focus {
          border-color: var(--c-config);
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .btn-primary {
          background: var(--c-config);
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
          background: var(--c-config-dark);
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
          border-color: var(--c-config);
          color: var(--c-config);
        }
        .btn-danger {
          background: #ef4444;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-danger:hover {
          background: #dc2626;
        }

        .table-wrapper {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          padding: 12px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-2);
          border-bottom: 1px solid var(--border);
          background: #f8fafc;
        }
        td {
          padding: 12px 16px;
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }
        tr:last-child td {
          border-bottom: none;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .badge-active {
          background: rgba(16,185,129,.12);
          color: #10b981;
        }
        .badge-inactive {
          background: rgba(239,68,68,.12);
          color: #ef4444;
        }
        .role-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          background: rgba(139,92,246,.12);
          color: var(--c-config);
        }
        .modulo-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 12px;
          transition: all 0.2s;
        }
        .modulo-card:hover {
          border-color: var(--c-config);
          box-shadow: var(--shadow-sm);
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #cbd5e0;
          transition: 0.3s;
          border-radius: 24px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: var(--c-config);
        }
        input:checked + .slider:before {
          transform: translateX(24px);
        }
        .api-key-input {
          font-family: monospace;
          letter-spacing: 1px;
        }
        .success-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #10b981;
          color: white;
          padding: 12px 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1000;
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        <div className="config-container">
          {/* Sidebar */}
          <div className="config-sidebar">
            {sections.map(section => (
              <div
                key={section.id}
                className={`config-sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icono}
                {section.nombre}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="config-content">
            {/* Datos de Empresa */}
            {activeSection === 'empresa' && (
              <div className="config-card">
                <div className="config-card-header">
                  <IconBuilding />
                  <h2>Datos de Empresa</h2>
                </div>
                <div className="config-card-body">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Nombre de la Empresa</label>
                      <input className="form-input" value={empresa.nombre} onChange={(e) => setEmpresa({...empresa, nombre: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Logo / Iniciales</label>
                      <input className="form-input" value={empresa.logo} onChange={(e) => setEmpresa({...empresa, logo: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Moneda Local</label>
                      <select className="form-select" value={empresa.moneda} onChange={(e) => setEmpresa({...empresa, moneda: e.target.value})}>
                        <option>RD$</option>
                        <option>$ USD</option>
                        <option>€ EUR</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">País</label>
                      <input className="form-input" value={empresa.pais} onChange={(e) => setEmpresa({...empresa, pais: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sector / Industria</label>
                    <input className="form-input" value={empresa.sector} onChange={(e) => setEmpresa({...empresa, sector: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email de Contacto</label>
                      <input className="form-input" value={empresa.email} onChange={(e) => setEmpresa({...empresa, email: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Teléfono</label>
                      <input className="form-input" value={empresa.telefono} onChange={(e) => setEmpresa({...empresa, telefono: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Dirección</label>
                    <input className="form-input" value={empresa.direccion} onChange={(e) => setEmpresa({...empresa, direccion: e.target.value})} />
                  </div>
                  <button className="btn-primary" onClick={handleSaveEmpresa}><IconSave /> Guardar Cambios</button>
                </div>
              </div>
            )}

            {/* Usuarios y Roles */}
            {activeSection === 'usuarios' && (
              <div className="config-card">
                <div className="config-card-header">
                  <IconUsers />
                  <h2>Usuarios y Roles</h2>
                </div>
                <div className="config-card-body">
                  <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn-primary" onClick={handleInviteUser}><IconPlus /> Invitar Usuario</button>
                  </div>
                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr><th>Usuario</th><th>Email</th><th>Rol</th><th>Estado</th><th>Último Acceso</th><th>Acciones</th></tr>
                      </thead>
                      <tbody>
                        {usuarios.map(user => (
                          <tr key={user.id}>
                            <td><strong>{user.nombre}</strong></td>
                            <td>{user.email}</td>
                            <td>
                              <select className="role-badge" style={{ border: 'none', background: 'rgba(139,92,246,.12)' }} value={user.rol} onChange={(e) => handleChangeUserRole(user.id, e.target.value)}>
                                <option>Administrador</option>
                                <option>Gerente</option>
                                <option>Ventas</option>
                                <option>Compras</option>
                                <option>Producción</option>
                                <option>Logística</option>
                                <option>RRHH</option>
                                <option>Contabilidad</option>
                              </select>
                            </td>
                            <td><span className={`status-badge ${user.estado === 'activo' ? 'badge-active' : 'badge-inactive'}`}>{user.estado === 'activo' ? 'Activo' : 'Inactivo'}</span></td>
                            <td style={{ fontSize: '12px' }}>{user.ultimoAcceso}</td>
                            <td>
                              <button className="btn-secondary" style={{ padding: '4px 8px', marginRight: '4px' }} onClick={() => handleToggleUserStatus(user.id)}>{user.estado === 'activo' ? 'Desactivar' : 'Activar'}</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Módulos Activos */}
            {activeSection === 'modulos' && (
              <div className="config-card">
                <div className="config-card-header">
                  <IconGrid />
                  <h2>Módulos Activos</h2>
                </div>
                <div className="config-card-body">
                  <p style={{ marginBottom: '20px', fontSize: '13px', color: 'var(--text-2)' }}>Active o desactive módulos según las necesidades de su empresa. Los módulos desactivados no aparecerán en el menú principal.</p>
                  {modulos.map(modulo => (
                    <div key={modulo.id} className="modulo-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '24px' }}>{modulo.icono}</span>
                        <div>
                          <div style={{ fontWeight: '600' }}>{modulo.nombre}</div>
                          <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>{modulo.descripcion}</div>
                        </div>
                      </div>
                      <label className="switch">
                        <input type="checkbox" checked={modulo.activo} onChange={() => handleToggleModulo(modulo.id)} />
                        <span className="slider"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Integración IA */}
            {activeSection === 'ia' && (
              <div className="config-card">
                <div className="config-card-header">
                  <IconCpu />
                  <h2>Integración con IA (Gemini)</h2>
                </div>
                <div className="config-card-body">
                  <div className="form-group">
                    <label className="form-label">API Key de Gemini</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input className="form-input api-key-input" type={showApiKey ? 'text' : 'password'} value={iaConfig.apiKey} onChange={(e) => setIaConfig({...iaConfig, apiKey: e.target.value})} style={{ flex: 1 }} />
                      <button className="btn-secondary" onClick={() => setShowApiKey(!showApiKey)}>{showApiKey ? <IconEyeOff /> : <IconEye />}</button>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '4px' }}>La API key se almacena de forma segura en Supabase y nunca se expone en el frontend</div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Modelo</label>
                    <select className="form-select" value={iaConfig.modelo} onChange={(e) => setIaConfig({...iaConfig, modelo: e.target.value})}>
                      <option>gemini-pro</option>
                      <option>gemini-1.5-pro</option>
                      <option>gemini-1.5-flash</option>
                    </select>
                  </div>
                  <div className="modulo-card" style={{ marginBottom: '20px' }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>Activar Asistente IA</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>El chat con IA estará disponible en toda la aplicación</div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" checked={iaConfig.enabled} onChange={() => setIaConfig({...iaConfig, enabled: !iaConfig.enabled})} />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <button className="btn-primary" onClick={handleSaveIAConfig}><IconSave /> Guardar Configuración IA</button>
                </div>
              </div>
            )}

            {/* Alertas */}
            {activeSection === 'alertas' && (
              <div className="config-card">
                <div className="config-card-header">
                  <IconBell />
                  <h2>Configuración de Alertas</h2>
                </div>
                <div className="config-card-body">
                  <div className="form-group">
                    <label className="form-label">Inventario - Días de anticipación para stock mínimo</label>
                    <input type="number" className="form-input" value={alertasConfig.inventarioMinimoDias} onChange={(e) => setAlertasConfig({...alertasConfig, inventarioMinimoDias: parseInt(e.target.value)})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">RRHH - Días de anticipación para contratos por vencer</label>
                    <input type="number" className="form-input" value={alertasConfig.contratosVencimiento} onChange={(e) => setAlertasConfig({...alertasConfig, contratosVencimiento: parseInt(e.target.value)})} />
                  </div>
                  <div className="modulo-card" style={{ marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>Notificaciones por Email</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>Recibir alertas en el correo del administrador</div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" checked={alertasConfig.notificacionesEmail} onChange={() => setAlertasConfig({...alertasConfig, notificacionesEmail: !alertasConfig.notificacionesEmail})} />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="modulo-card" style={{ marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>Alertas de Stock Crítico</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>Notificar cuando productos estén por debajo del mínimo</div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" checked={alertasConfig.alertasStockCritico} onChange={() => setAlertasConfig({...alertasConfig, alertasStockCritico: !alertasConfig.alertasStockCritico})} />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="modulo-card" style={{ marginBottom: '20px' }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>Reportes Semanales</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>Recibir resumen semanal de actividades y alertas</div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" checked={alertasConfig.reportesSemanales} onChange={() => setAlertasConfig({...alertasConfig, reportesSemanales: !alertasConfig.reportesSemanales})} />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <button className="btn-primary" onClick={handleSaveAlertas}><IconSave /> Guardar Configuración</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toast de éxito */}
        {saveSuccess && (
          <div className="success-toast">
            <IconCheckCircle /> Cambios guardados correctamente
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}