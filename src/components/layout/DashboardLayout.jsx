import { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import IaChat from '../../modules/ia-chat/components/IaChat'

export default function DashboardLayout({ children, title = 'Dashboard', subtitle = 'visión general' }) {
  const { perfil, empresa, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 900 : false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Nueva venta registrada', message: 'Pedido #1048 por RD$4,800', time: 'Hace 5 minutos', read: false, type: 'success' },
    { id: 2, title: 'Stock crítico detectado', message: 'Jugo Mango tiene solo 45 unidades (mínimo 100)', time: 'Hace 15 minutos', read: false, type: 'warning' },
    { id: 3, title: 'Nómina procesada', message: 'Nómina de marzo generada exitosamente', time: 'Hace 1 hora', read: false, type: 'info' },
    { id: 4, title: 'Orden de compra creada', message: 'OC-2024-005 por RD$24,000', time: 'Hace 2 horas', read: true, type: 'success' },
    { id: 5, title: 'Recordatorio: Reunión equipo', message: 'Reunión de planificación a las 3:00 PM', time: 'Hace 3 horas', read: true, type: 'info' },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const handleClearNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const handleSignOut = async () => {
    await logout()
    navigate('/login')
  }

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'success':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        )
      case 'warning':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        )
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        )
    }
  }

  return (
    <div style={{ 
      fontFamily: "'Outfit', system-ui, sans-serif", 
      background: '#f0f4f8', 
      color: '#0f172a', 
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        /* SCROLL ESTILIZADO - SIN BARRA FEA PERO CON FUNCIONALIDAD */
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 10px;
          padding-top: 8px;
          scrollbar-width: thin;
          scrollbar-color: rgba(20,184,166,0.3) transparent;
        }
        .sidebar-nav::-webkit-scrollbar {
          width: 4px;
          background: transparent;
        }
        .sidebar-nav::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(20,184,166,0.3);
          border-radius: 4px;
          transition: background 0.2s;
        }
        .sidebar-nav::-webkit-scrollbar-thumb:hover {
          background: rgba(20,184,166,0.6);
        }

        /* Firefox scrollbar (transparente pero funcional) */
        .sidebar-nav {
          scrollbar-width: thin;
          scrollbar-color: rgba(20,184,166,0.3) transparent;
        }

        @media (max-width: 768px) {
          .sidebar-overlay { display: ${sidebarOpen ? 'block' : 'none'} !important; }
          .sidebar-main {
            transform: ${sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'} !important;
            box-shadow: ${sidebarOpen ? '20px 0 50px rgba(0,0,0,0.5)' : 'none'} !important;
          }
          .main-content { margin-left: 0 !important; }
          .header-top { padding: 0 12px !important; gap: 8px !important; height: 60px !important; }
          .header-title-container { flex: 1; min-width: 0; }
          .header-title-text { font-size: 16px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .header-subtitle-text { font-size: 12px !important; display: none; }
          .page-content { padding: 12px !important; }
          .mobile-menu-btn { display: flex !important; }
          .desktop-ia-btn { display: none !important; }
          .notifications-dropdown {
            position: fixed !important;
            top: 60px !important;
            right: 12px !important;
            left: 12px !important;
            width: auto !important;
            max-width: none !important;
          }
        }

        @media (min-width: 769px) {
          .sidebar-main { transform: translateX(0) !important; }
          .sidebar-overlay { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 20px;
          cursor: pointer;
          transition: all 0.18s ease;
          text-decoration: none;
          color: #c8d8f0;
          font-size: 14.5px;
          font-weight: 500;
          border-left: 3px solid transparent;
          position: relative;
        }
        .nav-link:hover {
          background: rgba(255,255,255,0.06);
          color: #e8f0fa;
        }
        .nav-link.active {
          background: rgba(20,184,166,0.12);
          color: #5eead4;
          border-left-color: #14b8a6;
          font-weight: 600;
        }
        .nav-link .nav-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .nav-badge {
          margin-left: auto;
          min-width: 22px;
          height: 22px;
          border-radius: 11px;
          padding: 0 7px;
          font-size: 11px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sidebar-user:hover {
          background: rgba(255,255,255,0.05);
        }
        .header-icon-btn:hover {
          background: #e8edf4 !important;
          color: #0f172a !important;
          transform: scale(1.05);
        }
        .ia-btn:hover {
          background: rgba(20,184,166,0.18) !important;
          transform: scale(1.02);
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .notification-item {
          animation: slideInRight 0.3s ease;
        }
        .notification-item:hover {
          transform: translateX(4px);
        }
        .pulse-dot {
          animation: pulse 2s infinite;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .sidebar-main {
            transform: translateX(-100%);
            box-shadow: 10px 0 30px rgba(0,0,0,0.25);
          }
          .sidebar-main.open {
            transform: translateX(0);
          }
          .main-content {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100vw !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .sidebar-overlay.open {
            display: block !important;
            pointer-events: auto !important;
          }
          .desktop-ia-btn {
            display: none !important;
          }
          .header-top {
            padding: 0 16px !important;
            height: 60px !important;
            width: 100% !important;
          }
          .header-title-text {
            font-size: 17px !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 150px;
          }
          .header-subtitle-text {
            display: none;
          }
          .page-content {
            padding: 16px 12px !important;
            width: 100% !important;
            overflow-x: hidden !important;
          }
          .header-title-container {
            min-width: 0 !important;
            flex: 1 !important;
          }
        }
      `}</style>

      {/* Overlay móvil */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        style={{
          display: 'none',
          position: 'fixed', inset: 0, zIndex: 90,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)',
          pointerEvents: 'none'
        }}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <aside
        className={`sidebar-main ${sidebarOpen ? 'open' : ''}`}
        style={{
          width: '230px', minHeight: '100vh',
          background: 'linear-gradient(175deg, #0f1e35 0%, #0a1428 100%)',
          display: 'flex', flexDirection: 'column',
          position: 'fixed', top: 0, left: 0, bottom: 0,
          zIndex: 100,
          borderRight: '1px solid rgba(255,255,255,0.06)',
          transition: 'transform 0.28s cubic-bezier(.4,0,.2,1)',
          overflow: 'hidden',
        }}
      >
        {/* Marca - fija arriba */}
        <div style={{
          padding: '24px 20px 20px',
          display: 'flex', alignItems: 'center', gap: '13px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          flexShrink: 0,
        }}>
          <div style={{
            width: '44px', height: '44px', background: 'white',
            border: '2px solid #14b8a6', borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            boxShadow: '0 4px 16px rgba(20,184,166,0.3)',
          }}>
            <img src="/Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />
          </div>
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.2px' }}>Central</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#5eead4' }}>Smart System</div>
            <div style={{ fontSize: '10px', color: '#8899b0', fontFamily: "'Courier New', monospace", marginTop: '1px' }}>ERP Empresarial</div>
          </div>
        </div>

        {/* Empresa activa - fija */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ fontSize: '10px', color: '#7a92b0', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>Empresa activa</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>{empresa?.nombre || 'Dist. La Nueva Esperanza'}</div>
        </div>

        {/* Nav - CON SCROLL PERO SIN BARRA FEA */}
        <nav className="sidebar-nav" style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: '10px',
          paddingTop: '8px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(20,184,166,0.3) transparent',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#5a7a9a', padding: '10px 20px 6px' }}>Principal</div>

          <NavItem to="/dashboard" active={location.pathname === '/dashboard'} onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </NavItem>

          <div style={{ fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#5a7a9a', padding: '10px 20px 6px', marginTop: '4px' }}>Módulos</div>

          <NavItem to="/ventas" color="#3b82f6" badge="8" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Ventas
          </NavItem>

          <NavItem to="/inventario" color="#f59e0b" badge="3" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            Inventario
          </NavItem>

          <NavItem to="/compras" color="#8b5cf6" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Compras
          </NavItem>

          <NavItem to="/produccion" color="#ec4899" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
            Producción
          </NavItem>

          <NavItem to="/logistica" color="#f97316" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            Logística
          </NavItem>

          <NavItem to="/rrhh" color="#06b6d4" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            RRHH
          </NavItem>

          <NavItem to="/contabilidad" color="#a78bfa" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Contabilidad
          </NavItem>

          <NavItem to="/clientes" color="#34d399" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Clientes
          </NavItem>

          <div style={{ fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#5a7a9a', padding: '10px 20px 6px', marginTop: '4px' }}>Sistema</div>

          <NavItem to="/configuracion" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
            Configuración
          </NavItem>
        </nav>

        {/* Usuario / Salir - fijo abajo */}
        <div
          className="sidebar-user"
          style={{
            padding: '14px 18px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', gap: '12px',
            cursor: 'pointer', transition: 'background 0.18s',
            flexShrink: 0,
          }}
          onClick={handleSignOut}
        >
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: '700', color: 'white',
            border: '2px solid rgba(20,184,166,0.4)',
          }}>
            {perfil?.nombre?.substring(0, 2).toUpperCase() || 'AD'}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {perfil?.nombre || 'Administrador'}
            </div>
            <div style={{ fontSize: '12px', color: '#7a92b0', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1px' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Cerrar sesión
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div 
        className="main-content" 
        style={{ 
          marginLeft: isMobile ? '0' : '230px',
          width: isMobile ? '100%' : 'calc(100% - 230px)',
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease',
          display: 'block'
        }}
      >

        {/* Header */}
        <header className="header-top" style={{
          height: '66px',
          background: '#ffffff',
          borderBottom: '1px solid rgba(15,30,53,0.08)',
          display: 'flex', alignItems: 'center',
          padding: '0 28px', gap: '16px',
          position: 'sticky', top: 0, zIndex: 50,
          boxShadow: '0 1px 10px rgba(15,30,53,0.07)',
        }}>
          {/* Hamburger (móvil) */}
          <button
            className="mobile-menu-btn"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', color: '#0f172a', padding: '6px',
              borderRadius: '8px', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <div className="header-title-container">
            <span className="header-title-text" style={{ fontSize: '22px', fontWeight: '700', color: '#0a1428', letterSpacing: '-0.3px' }}>{title}</span>
            <span className="header-subtitle-text" style={{ fontSize: '14.5px', color: '#1e293b', marginLeft: '8px', fontWeight: '400' }}>· {subtitle}</span>
          </div>

          <div style={{ flex: 1 }} />

          <button className="ia-btn desktop-ia-btn" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(20,184,166,0.10)', border: '1.5px solid rgba(20,184,166,0.30)',
            borderRadius: '22px', padding: '8px 18px',
            fontSize: '13.5px', fontWeight: '600', color: '#0d9488',
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Outfit', sans-serif",
          }}>
            <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14b8a6', boxShadow: '0 0 8px rgba(20,184,166,0.7)', display: 'block', flexShrink: 0 }} />
            Asistente IA
          </button>

          {/* Notificaciones */}
          <div style={{ position: 'relative' }}>
            <div 
              className="header-icon-btn" onClick={() => setNotificationsOpen(!notificationsOpen)}
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: '#f0f4f8', border: '1px solid rgba(15,30,53,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#3d5169', transition: 'all 0.18s', position: 'relative',
              }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              {unreadCount > 0 && (
                <span className="pulse-dot" style={{
                  position: 'absolute', top: '-4px', right: '-4px',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: '#ef4444', color: 'white', fontSize: '10px', fontWeight: '700',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid white',
                }}>{unreadCount}</span>
              )}
            </div>

            {/* Dropdown notificaciones */}
            {notificationsOpen && (
              <div className="notifications-dropdown" style={{
                position: 'absolute', top: '48px', right: '0',
                width: '360px', background: 'white', borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)', zIndex: 200,
                overflow: 'hidden', animation: 'slideInRight 0.3s ease',
              }}>
                <div style={{
                  padding: '16px', borderBottom: '1px solid rgba(15,30,53,0.08)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#0a1428' }}>Notificaciones</span>
                  <button 
                    onClick={handleMarkAllAsRead}
                    style={{
                      background: 'none', border: 'none', fontSize: '12px', color: '#14b8a6', cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Marcar todas como leídas
                  </button>
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {notifications.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      </svg>
                      <p style={{ marginTop: '12px', fontSize: '14px' }}>No hay notificaciones</p>
                    </div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className="notification-item" style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(15,30,53,0.06)',
                        background: notif.read ? 'white' : '#f0fdfa',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }} onClick={() => handleMarkAsRead(notif.id)}>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <div style={{
                            width: '32px', height: '32px', borderRadius: '8px',
                            background: notif.type === 'success' ? 'rgba(16,185,129,0.1)' : notif.type === 'warning' ? 'rgba(239,68,68,0.1)' : 'rgba(59,130,246,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: notif.type === 'success' ? '#10b981' : notif.type === 'warning' ? '#ef4444' : '#3b82f6',
                          }}>
                            {getNotificationIcon(notif.type)}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                              <span style={{ fontSize: '13px', fontWeight: '600', color: '#0a1428' }}>{notif.title}</span>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleClearNotification(notif.id)
                                }}
                                style={{
                                  background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8',
                                  padding: '2px', display: 'flex', alignItems: 'center'
                                }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                              </button>
                            </div>
                            <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>{notif.message}</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>{notif.time}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="page-content" style={{ padding: '24px 28px', flex: 1, animation: 'fadeIn 0.25s ease' }}>
          {children}
        </main>
      </div>

      <IaChat />
    </div>
  )
}

function NavItem({ to, children, active, color, badge, onClick }) {
  const location = useLocation()
  const isActive = active !== undefined ? active : location.pathname === to

  return (
    <Link
      to={to}
      className={`nav-link${isActive ? ' active' : ''}`}
      onClick={onClick}
    >
      <span className="nav-icon" style={{ color: isActive ? '#14b8a6' : (color || '#7a92b0') }}>
        {children[0]}
      </span>
      {children.slice(1)}
      {badge && (
        <span className="nav-badge" style={{ background: color || '#14b8a6' }}>
          {badge}
        </span>
      )}
    </Link>
  )
}