import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'

// ── Iconos SVG ───────────────────────────────────
function IconMail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconEye({ show, onClick }) {
  return (
    <button type="button" onClick={onClick} style={styles.btnEye} title={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
      {show ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  )
}

function IconArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#0055CC" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#0055CC" fillOpacity="0.5" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#0055CC" fillOpacity="0.5" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#0055CC" fillOpacity="0.25" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconCpu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
      <polyline points="2 15.5 12 22 22 15.5" />
    </svg>
  )
}

// ── Componente principal ───────────────────────────────────────
export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error } = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [focusEmail, setFocusEmail] = useState(false)
  const [focusPass, setFocusPass] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return

    const result = await login(email, password)
    if (result) {
      navigate('/dashboard')
    }
  }

  const handleDemo = () => {
    setEmail('admin@demo.com')
    setPassword('demo1234')
  }

  return (
    <div style={styles.root}>
      {/* Fondo decorativo */}
      <div style={styles.bgDeco}>
        <div style={styles.bgBlob1} />
        <div style={styles.bgBlob2} />
        <div style={styles.bgGrid} />
        <div style={styles.bgLine1} />
        <div style={styles.bgLine2} />
      </div>

      {/* Shell principal */}
      <div style={styles.shell}>

        {/* PANEL IZQUIERDO */}
        <div style={styles.leftPanel}>
          <div>
            {/* Marca */}
            <div style={styles.brand}>
              <div style={styles.brandLogo}>
                <IconGrid />
              </div>
              <div>
                <div style={styles.brandInfoName}>Central Smart System</div>
                <div style={styles.brandInfoTag}>Sistema Operativo Empresarial</div>
              </div>
            </div>

            {/* Headline */}
            <div style={styles.headline}>
              La plataforma que<br />
              <em style={styles.headlineEm}>unifica</em> tu empresa<br />
              con inteligencia.
            </div>
            <p style={styles.headlineSub}>
              Conecta ventas, inventario, logística, RRHH y más en un solo sistema con IA integrada.
            </p>

            {/* Features */}
            <div style={styles.features}>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconShield /></span>
                <span style={styles.featureText}>Acceso seguro por roles — cada área ve solo lo suyo</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconCpu /></span>
                <span style={styles.featureText}>Agente IA integrado — alertas y decisiones automáticas</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconLayers /></span>
                <span style={styles.featureText}>8 módulos conectados — datos en tiempo real</span>
              </div>
            </div>
          </div>

          {/* Footer izquierdo */}
          <div style={styles.leftFooter}>
            <div style={styles.versionBadge}>
              <span style={styles.versionDot} />
              v1.0 · SISTEMA ACTIVO
            </div>
            <div style={styles.schoolBadge}>Instituto Tecnológico México · 2026</div>
          </div>
        </div>

        {/* PANEL DERECHO – FORMULARIO */}
        <div style={styles.rightPanel}>
          <div style={styles.formWrap}>

            <div style={styles.formHeader}>
              <h1 style={styles.formTitle}>¡Bienvenido(a)!</h1>
              <p style={styles.formSub}>Inicia sesión para continuar en tu área de trabajo</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Correo */}
              <div style={styles.fieldGroup}>
                <label style={styles.fieldLabel}>Correo electrónico</label>
                <div style={{
                  ...styles.inputWrapper,
                  ...(focusEmail ? styles.inputWrapperFocus : {})
                }}>
                  <span style={{
                    ...styles.inputIconLeft,
                    ...(focusEmail ? { color: '#0055CC' } : {})
                  }}>
                    <IconMail />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    placeholder="Escribe tu correo"
                    style={styles.inputField}
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div style={styles.fieldGroup}>
                <div style={styles.passwordHeader}>
                  <label style={{ ...styles.fieldLabel, marginBottom: 0 }}>Contraseña</label>
                  <a href="#" style={styles.forgotLink}>¿Olvidaste tu contraseña?</a>
                </div>
                <div style={{
                  ...styles.inputWrapper,
                  ...(focusPass ? styles.inputWrapperFocus : {})
                }}>
                  <span style={{
                    ...styles.inputIconLeft,
                    ...(focusPass ? { color: '#0055CC' } : {})
                  }}>
                    <IconLock />
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusPass(true)}
                    onBlur={() => setFocusPass(false)}
                    placeholder="Escribe tu contraseña"
                    style={{ ...styles.inputField, paddingRight: '60px' }}
                    autoComplete="current-password"
                    required
                  />
                  <span style={styles.inputIconRight}>
                    <IconEye show={showPass} onClick={() => setShowPass(!showPass)} />
                  </span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={styles.errorBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !email || !password}
                style={{
                  ...styles.btnSubmit,
                  ...(loading || !email || !password ? styles.btnSubmitDisabled : {})
                }}
              >
                {loading ? (
                  <>
                    <span style={styles.spinner} />
                    Verificando...
                  </>
                ) : (
                  <>
                    Iniciar Sesión
                    <IconArrowRight />
                  </>
                )}
              </button>
            </form>

            {/* Separador */}
            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>Acceso de demostración</span>
              <div style={styles.dividerLine}></div>
            </div>

            {/* Demo box */}
            <div style={styles.demoBox}>
              <div style={styles.demoBoxTitle}>Credenciales de demo</div>
              <div style={styles.demoRow}>
                <span style={styles.demoLabel}>Correo</span>
                <code style={styles.demoValue}>admin@demo.com</code>
              </div>
              <div style={styles.demoRow}>
                <span style={styles.demoLabel}>Contraseña</span>
                <code style={styles.demoValue}>demo1234</code>
              </div>
              <button type="button" style={styles.btnDemo} onClick={handleDemo}>
                Usar credenciales demo
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

// ── ESTILOS CON TEXTOS 100% OSCUROS Y VISIBLES ──
const styles = {
  root: {
    minHeight: '100vh',
    background: '#0a0e27',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
    fontFamily: "'Outfit', system-ui, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  bgDeco: { position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' },
  bgBlob1: {
    position: 'absolute', width: '700px', height: '700px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,85,204,0.12), transparent 70%)',
    top: '-160px', left: '-120px', filter: 'blur(80px)',
  },
  bgBlob2: {
    position: 'absolute', width: '550px', height: '550px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,119,204,0.08), transparent 70%)',
    bottom: '-100px', right: '-100px', filter: 'blur(80px)',
  },
  bgGrid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
  },
  bgLine1: {
    position: 'absolute', width: '1px', height: '130%', top: '-15%', left: '38%',
    background: 'linear-gradient(to bottom, transparent, rgba(0,119,204,0.12), transparent)',
    transform: 'rotate(8deg)',
  },
  bgLine2: {
    position: 'absolute', width: '1px', height: '130%', top: '-15%', right: '25%',
    background: 'linear-gradient(to bottom, transparent, rgba(0,85,204,0.08), transparent)',
    transform: 'rotate(-6deg)',
  },

  shell: {
    position: 'relative', zIndex: 2,
    display: 'grid', gridTemplateColumns: '1fr 520px',
    width: '1200px',
    maxWidth: '100%', minHeight: '740px',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: '0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,85,204,0.15)',
  },

  leftPanel: {
    background: 'linear-gradient(155deg, #0f1222 0%, #161c34 50%, #0a0e20 100%)',
    padding: '60px 48px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    borderRight: '1px solid rgba(255,255,255,0.08)',
    color: '#ffffff',
  },

  brand: { display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '64px' },
  brandLogo: {
    width: '76px', height: '76px', background: '#ffffff', border: '3px solid #0055CC', borderRadius: '20px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    boxShadow: '0 12px 28px rgba(0,85,204,0.35)', overflow: 'hidden',
  },
  brandInfoName: { fontSize: '20px', fontWeight: '600', color: '#ffffff', letterSpacing: '-0.3px' },
  brandInfoTag: { fontSize: '12px', color: '#a0aec0', fontFamily: "'Courier New', monospace", marginTop: '4px' },

  headline: {
    fontFamily: "'Crimson Pro', Georgia, serif", fontWeight: '300', fontSize: '46px',
    lineHeight: '1.2',
    color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.5px',
  },
  headlineEm: { fontStyle: 'italic', fontWeight: '500', color: '#ffffff' },
  headlineSub: { fontSize: '16px', color: '#cbd5e6', lineHeight: '1.65', maxWidth: '320px', marginBottom: '48px' },

  features: { display: 'flex', flexDirection: 'column', gap: '14px' },
  featureItem: {
    display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px',
    background: 'rgba(0,85,204,0.08)', border: '1px solid rgba(0,119,204,0.15)', borderRadius: '14px',
  },
  featureIcon: { flexShrink: 0, color: '#4da8ff', display: 'flex' },
  featureText: { fontSize: '15px', color: '#e2e8f0', lineHeight: '1.5', fontWeight: '500' },

  leftFooter: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '48px' },
  versionBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)', borderRadius: '24px', padding: '8px 16px',
    fontSize: '11px', fontFamily: "'Courier New', monospace", color: '#a0aec0', letterSpacing: '0.5px', width: 'fit-content',
  },
  versionDot: {
    width: '8px', height: '8px', background: '#4da8ff', borderRadius: '50%',
    boxShadow: '0 0 12px rgba(77,168,255,0.6)', flexShrink: 0,
  },
  schoolBadge: { fontSize: '12px', color: '#8a9bb5', fontFamily: "'Courier New', monospace" },

  // PANEL DERECHO - TODOS LOS TEXTOS AHORA EN NEGRO U OSCURO
  rightPanel: { background: '#ffffff', padding: '60px 52px', display: 'flex', alignItems: 'center' },
  formWrap: { width: '100%' },
  formHeader: { marginBottom: '44px' },
  formTitle: { fontSize: '38px', fontWeight: '700', color: '#000000', letterSpacing: '-0.4px', marginBottom: '12px' }, // NEGRO
  formSub: { fontSize: '18px', color: '#1a202c', lineHeight: '1.5', fontWeight: '500' }, // GRIS OSCURO

  fieldGroup: { marginBottom: '24px' },
  fieldLabel: { display: 'block', fontSize: '16px', fontWeight: '700', color: '#000000', marginBottom: '10px', letterSpacing: '0.2px' }, // NEGRO
  passwordHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
  forgotLink: { fontSize: '15px', color: '#0055CC', textDecoration: 'none', fontWeight: '600' },

  inputWrapper: {
    position: 'relative', display: 'flex', alignItems: 'center', background: '#f7fafc',
    border: '2px solid #cbd5e0', borderRadius: '20px', transition: 'border-color 0.22s, box-shadow 0.22s, background 0.22s',
    overflow: 'hidden',
  },
  inputWrapperFocus: { borderColor: '#0055CC', boxShadow: '0 0 0 6px rgba(0,85,204,0.15)', background: '#ffffff' },
  inputIconLeft: { position: 'absolute', left: '18px', color: '#4a5568', pointerEvents: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' },
  inputIconRight: { position: 'absolute', right: '12px', display: 'flex', alignItems: 'center' },
  inputField: {
    width: '100%', background: 'transparent', border: 'none', outline: 'none',
    padding: '18px 20px 18px 58px', color: '#000000', fontSize: '17px', fontFamily: "'Outfit', sans-serif", fontWeight: '500', // NEGRO
  },
  btnEye: { background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568', display: 'flex', padding: '8px', borderRadius: '10px', transition: 'color 0.2s' },

  errorBox: {
    display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 18px',
    background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '14px',
    color: '#c53030', fontSize: '15px', fontWeight: '600', marginBottom: '20px',
  },

  btnSubmit: {
    width: '100%', background: '#0055CC', color: '#ffffff', border: 'none', borderRadius: '20px',
    padding: '18px 28px', fontSize: '18px', fontWeight: '700', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
    boxShadow: '0 10px 32px rgba(0,85,204,0.35)', transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
    marginTop: '12px', letterSpacing: '0.3px',
  },
  btnSubmitDisabled: { opacity: 0.55, cursor: 'not-allowed', boxShadow: 'none' },
  spinner: {
    width: '22px', height: '22px', border: '2.5px solid rgba(255,255,255,0.3)',
    borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0,
  },

  divider: { display: 'flex', alignItems: 'center', gap: '16px', margin: '32px 0 26px' },
  dividerLine: { flex: 1, height: '1px', background: '#cbd5e0' },
  dividerText: { fontSize: '13px', fontFamily: "'Courier New', monospace", color: '#2d3748', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: '700' }, // GRIS OSCURO

  demoBox: { background: '#f7fafc', border: '2px solid #cbd5e0', borderRadius: '20px', padding: '24px 26px' },
  demoBoxTitle: { fontSize: '13px', fontFamily: "'Courier New', monospace", color: '#000000', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '800', marginBottom: '16px' }, // NEGRO
  demoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  demoLabel: { fontSize: '16px', color: '#000000', fontWeight: '600' }, // NEGRO
  demoValue: { fontSize: '15px', fontFamily: "'Courier New', monospace", color: '#0055CC', background: '#e6f0ff', padding: '6px 14px', borderRadius: '8px', fontWeight: '600' },
  btnDemo: {
    width: '100%', background: 'transparent', border: '2px solid #0055CC', borderRadius: '14px',
    padding: '14px', color: '#0055CC', fontSize: '16px', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', fontWeight: '700', marginTop: '18px', transition: 'background 0.2s, color 0.2s, border-color 0.2s', letterSpacing: '0.2px',
  },
}

// ── Inyección de animaciones necesarias ──
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = `
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `
  document.head.appendChild(styleSheet)
}