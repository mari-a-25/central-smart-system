import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import IaChat from '../../modules/ia-chat/components/IaChat'

export default function DashboardLayout({ children, title = 'Dashboard', subtitle = 'visión general' }) {
  const { perfil, empresa, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div style={styles.body}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        {/* Marca */}
        <div style={styles.sidebarBrand}>
          <div style={styles.sidebarLogo}>
            <div style={styles.logoPh}>LOGO</div>
          </div>
          <div style={styles.sidebarBrandText}>
            <div style={styles.sidebarBrandName}>Central</div>
            <div style={{ ...styles.sidebarBrandName, color: '#5eead4', fontSize: '12px' }}>Smart System</div>
            <div style={styles.sidebarBrandSub}>ERP Empresarial</div>
          </div>
        </div>

        {/* Empresa activa */}
        <div style={styles.sidebarEmpresa}>
          <div style={styles.sidebarEmpresaLabel}>Empresa activa</div>
          <div style={styles.sidebarEmpresaName}>{empresa?.nombre || 'Dist. La Nueva Esperanza'}</div>
        </div>

        {/* Búsqueda */}
        <div style={styles.sidebarSearch}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span style={{ fontSize: '12px', color: '#475569' }}>Buscar...</span>
          <kbd style={styles.kbd}>⌘K</kbd>
        </div>

        {/* Nav */}
        <nav style={styles.sidebarNav}>
          <div style={styles.sidebarSectionLabel}>Principal</div>
          
          <NavItem to="/dashboard" active={location.pathname === '/dashboard'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </NavItem>

          <div style={{ ...styles.sidebarSectionLabel, marginTop: '6px' }}>Módulos</div>

          <NavItem to="/ventas" color="#3b82f6" badge="8">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Ventas
          </NavItem>

          <NavItem to="/inventario" color="#f59e0b" badge="1">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            Inventario
          </NavItem>

          <NavItem to="/compras" color="#8b5cf6">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Compras
          </NavItem>

          <NavItem to="/produccion" color="#ec4899">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
            Producción
          </NavItem>

          <NavItem to="/logistica" color="#f97316">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            Logística
          </NavItem>

          <NavItem to="/rrhh" color="#06b6d4">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            RRHH
          </NavItem>

          <NavItem to="/contabilidad" color="#a78bfa">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Contabilidad
          </NavItem>

          <NavItem to="/clientes" color="#34d399">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Clientes
          </NavItem>

          <div style={{ ...styles.sidebarSectionLabel, marginTop: '6px' }}>Sistema</div>
          <NavItem to="/configuracion">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
            Configuración
          </NavItem>
        </nav>

        {/* User */}
        <div style={styles.sidebarUser} onClick={handleSignOut}>
          <div style={styles.userAvatar}>
            {perfil?.nombre?.substring(0, 2).toUpperCase() || 'MP'}
          </div>
          <div>
            <div style={styles.userName}>{perfil?.nombre || 'María Peña'}</div>
            <div style={styles.userRole}>Salir →</div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <div>
            <span style={styles.headerTitle}>{title}</span>
            <span style={styles.headerSubtitle}>· {subtitle}</span>
          </div>
          <div style={styles.headerSpacer}></div>
          <button style={styles.headerIaBtn}>
            <span style={styles.iaDot}></span>
            Preguntarle a IA
          </button>
          <div style={styles.headerIconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span style={styles.notifBadge}>5</span>
          </div>
          <div style={styles.headerIconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            </svg>
          </div>
        </header>

        {/* Content */}
        <main style={styles.content}>
          {children}
        </main>
      </div>

      {/* IA Chat Component */}
      <IaChat />
    </div>
  )
}

function NavItem({ to, children, active, color, badge }) {
  return (
    <Link 
      to={to} 
      style={{
        ...styles.navItem,
        ...(active ? styles.navItemActive : {})
      }}
    >
      <span style={{ 
        ...styles.navIcon, 
        ...(color && !active ? { color } : {}),
        ...(active ? { color: '#14b8a6' } : {})
      }}>
        {children[0]}
      </span>
      {children.slice(1)}
      {badge && (
        <span style={{ ...styles.navBadge, background: color || '#14b8a6' }}>
          {badge}
        </span>
      )}
    </Link>
  )
}

const styles = {
  body: {
    fontFamily: "'Outfit', system-ui, sans-serif",
    background: '#f0f4f8',
    color: '#0f172a',
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  sidebar: {
    width: '210px',
    minHeight: '100vh',
    background: 'linear-gradient(175deg, #0f1e35 0%, #0a1428 100%)',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0, left: 0, bottom: 0,
    zIndex: 100,
    borderRight: '1px solid rgba(255,255,255,0.05)',
  },
  sidebarBrand: {
    padding: '22px 18px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '11px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  sidebarLogo: {
    width: '40px', height: '40px',
    background: 'white',
    border: '2px solid #14b8a6',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    overflow: 'hidden',
    boxShadow: '0 4px 14px rgba(20,184,166,0.28)',
  },
  logoPh: {
    fontSize: '8px', color: '#14b8a6', fontFamily: "'Courier New', monospace",
    textAlign: 'center', lineHeight: '1.2', padding: '2px',
  },
  sidebarBrandText: { lineHeight: '1.2' },
  sidebarBrandName: {
    fontSize: '14px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.2px',
  },
  sidebarBrandSub: {
    fontSize: '9.5px', color: '#94a3b8', fontFamily: "'Courier New', monospace", marginTop: '1px',
  },
  sidebarEmpresa: {
    padding: '14px 18px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  sidebarEmpresaLabel: {
    fontSize: '9px', color: '#475569', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px',
  },
  sidebarEmpresaName: {
    fontSize: '12.5px', fontWeight: '600', color: '#e2e8f0',
  },
  sidebarSearch: {
    margin: '12px 14px',
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'text',
  },
  kbd: {
    marginLeft: 'auto', fontSize: '9px', color: '#334155',
    background: 'rgba(255,255,255,0.08)', borderRadius: '4px', padding: '2px 5px',
  },
  sidebarSectionLabel: {
    fontSize: '9px', letterSpacing: '0.8px', textTransform: 'uppercase',
    color: '#334155', padding: '10px 18px 6px', marginTop: '4px',
  },
  sidebarNav: { flex: 1, overflowY: 'auto', paddingBottom: '10px' },
  navItem: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '10px 18px',
    cursor: 'pointer',
    transition: 'background 0.18s',
    textDecoration: 'none',
    color: '#cbd5e1',
    fontSize: '13.5px', fontWeight: '500',
  },
  navItemActive: {
    background: 'rgba(20,184,166,0.12)',
    color: '#5eead4',
    borderLeft: '3px solid #14b8a6',
  },
  navIcon: { width: '18px', height: '18px', flexShrink: 0, display: 'flex', alignItems: 'center' },
  navBadge: {
    marginLeft: 'auto',
    minWidth: '20px', height: '20px',
    borderRadius: '10px', padding: '0 6px',
    fontSize: '10px', fontWeight: '700', color: 'white',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  sidebarUser: {
    padding: '14px 16px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', gap: '10px',
    cursor: 'pointer',
    transition: 'background 0.18s',
  },
  userAvatar: {
    width: '34px', height: '34px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: '700', color: 'white', flexShrink: 0,
    border: '2px solid rgba(20,184,166,0.3)',
  },
  userName: { fontSize: '12.5px', fontWeight: '600', color: '#e2e8f0' },
  userRole: { fontSize: '10px', color: '#94a3b8' },

  main: {
    marginLeft: '210px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    height: '62px',
    background: '#ffffff',
    borderBottom: '1px solid rgba(15,30,53,0.08)',
    display: 'flex', alignItems: 'center',
    padding: '0 28px',
    gap: '16px',
    position: 'sticky', top: 0, zIndex: 50,
    boxShadow: '0 1px 8px rgba(15,30,53,0.06)',
  },
  headerTitle: { fontSize: '20px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.3px' },
  headerSubtitle: { fontSize: '13px', color: '#475569', marginLeft: '8px', fontWeight: '400' },
  headerSpacer: { flex: 1 },
  headerIaBtn: {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'rgba(20,184,166,0.10)',
    border: '1.5px solid rgba(20,184,166,0.30)',
    borderRadius: '22px',
    padding: '7px 16px',
    fontSize: '13px', fontWeight: '600', color: '#14b8a6',
    cursor: 'pointer', transition: 'all 0.2s',
    fontFamily: "'Outfit', sans-serif",
  },
  iaDot: {
    width: '7px', height: '7px', borderRadius: '50%', background: '#14b8a6',
    boxShadow: '0 0 8px rgba(20,184,166,0.6)',
  },
  headerIconBtn: {
    width: '38px', height: '38px', borderRadius: '10px',
    background: '#f0f4f8', border: '1px solid rgba(15,30,53,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: '#475569',
    transition: 'all 0.18s', position: 'relative',
  },
  notifBadge: {
    position: 'absolute', top: '-4px', right: '-4px',
    width: '16px', height: '16px', borderRadius: '50%',
    background: '#ef4444', color: 'white', fontSize: '9px', fontWeight: '700',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid #ffffff',
  },
  content: { padding: '24px 28px', flex: 1 },
}
