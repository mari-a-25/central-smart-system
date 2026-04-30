import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import IaChat from '../../modules/ia-chat/components/IaChat'

export default function DashboardLayout({ children, title = 'Dashboard', subtitle = 'visión general' }) {
  const { perfil, empresa, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSignOut = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif", background: '#f0f4f8', color: '#0f172a', display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @media (max-width: 768px) {
          .sidebar-overlay { display: block !important; }
          .sidebar-main {
            transform: ${sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'} !important;
          }
          .main-content { margin-left: 0 !important; }
          .header-top { padding: 0 16px !important; }
          .page-content { padding: 16px !important; }
          .mobile-menu-btn { display: flex !important; }
          .desktop-ia-btn { display: none !important; }
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
        }
        .ia-btn:hover {
          background: rgba(20,184,166,0.18) !important;
          transform: scale(1.02);
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Overlay móvil */}
      <div
        className="sidebar-overlay"
        style={{
          display: 'none',
          position: 'fixed', inset: 0, zIndex: 90,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)'
        }}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <aside
        className="sidebar-main"
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
        {/* Marca */}
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
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="#14b8a6" />
              <rect x="13" y="3" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.55" />
              <rect x="3" y="13" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.55" />
              <rect x="13" y="13" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.28" />
            </svg>
          </div>
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.2px' }}>Central</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#5eead4' }}>Smart System</div>
            <div style={{ fontSize: '10px', color: '#8899b0', fontFamily: "'Courier New', monospace", marginTop: '1px' }}>ERP Empresarial</div>
          </div>
        </div>

        {/* Empresa activa */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ fontSize: '10px', color: '#7a92b0', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>Empresa activa</div>
          <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#e8f0fa' }}>{empresa?.nombre || 'Dist. La Nueva Esperanza'}</div>
        </div>

        {/* Nav — sin scroll visible */}
        <nav style={{ flex: 1, overflow: 'hidden', paddingBottom: '10px', paddingTop: '8px' }}>
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

        {/* Usuario / Salir */}
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
            <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#e8f0fa', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {perfil?.nombre || 'Administrador'}
            </div>
            <div style={{ fontSize: '11.5px', color: '#7a92b0', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1px' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Cerrar sesión
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="main-content" style={{ marginLeft: '230px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

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

          <div>
            <span style={{ fontSize: '21px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' }}>{title}</span>
            <span style={{ fontSize: '14px', color: '#4a5f75', marginLeft: '8px', fontWeight: '400' }}>· {subtitle}</span>
          </div>

          <div style={{ flex: 1 }} />

          <button className="ia-btn desktop-ia-btn" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(20,184,166,0.10)', border: '1.5px solid rgba(20,184,166,0.30)',
            borderRadius: '22px', padding: '8px 18px',
            fontSize: '13.5px', fontWeight: '600', color: '#0d9488',
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Outfit', sans-serif",
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14b8a6', boxShadow: '0 0 8px rgba(20,184,166,0.7)', display: 'block', flexShrink: 0 }} />
            Asistente IA
          </button>

          <div className="header-icon-btn" style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: '#f0f4f8', border: '1px solid rgba(15,30,53,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#3d5169', transition: 'all 0.18s', position: 'relative',
          }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span style={{
              position: 'absolute', top: '-4px', right: '-4px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#ef4444', color: 'white', fontSize: '10px', fontWeight: '700',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid white',
            }}>5</span>
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