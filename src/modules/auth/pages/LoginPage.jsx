import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'

// ── Iconos SVG del nuevo estilo (Teal) ───────────────────────────────────
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2"/>
      <path d="M8 11V7a4 4 0 018 0v4"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconEye({ show, onClick }) {
  return (
    <button type="button" onClick={onClick} style={styles.btnEye} title={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
      {show ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )}
    </button>
  )
}

function IconArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#14b8a6"/>
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.5"/>
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.5"/>
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#14b8a6" fillOpacity="0.25"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  )
}

function IconCpu() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"/>
      <polyline points="2 15.5 12 22 22 15.5"/>
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
        <div style={styles.bgBlob1}/>
        <div style={styles.bgBlob2}/>
        <div style={styles.bgGrid}/>
        <div style={styles.bgLine1}/>
        <div style={styles.bgLine2}/>
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
              La plataforma que<br/>
              <em style={styles.headlineEm}>unifica</em> tu empresa<br/>
              con inteligencia.
            </div>
            <p style={styles.headlineSub}>
              Conecta ventas, inventario, logística, RRHH y más en un solo sistema con IA integrada.
            </p>

            {/* Features */}
            <div style={styles.features}>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconShield/></span>
                <span style={styles.featureText}>Acceso seguro por roles — cada área ve solo lo suyo</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconCpu/></span>
                <span style={styles.featureText}>Agente IA integrado — alertas y decisiones automáticas</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}><IconLayers/></span>
                <span style={styles.featureText}>8 módulos conectados — datos en tiempo real</span>
              </div>
            </div>
          </div>

          {/* Footer izquierdo */}
          <div style={styles.leftFooter}>
            <div style={styles.versionBadge}>
              <span style={styles.versionDot}/>
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
                    ...(focusEmail ? { color: '#14b8a6' } : {})
                  }}>
                    <IconMail/>
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
                    ...(focusPass ? { color: '#14b8a6' } : {})
                  }}>
                    <IconLock/>
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusPass(true)}
                    onBlur={() => setFocusPass(false)}
                    placeholder="Escribe tu contraseña"
                    style={{ ...styles.inputField, paddingRight: '52px' }}
                    autoComplete="current-password"
                    required
                  />
                  <span style={styles.inputIconRight}>
                    <IconEye show={showPass} onClick={() => setShowPass(!showPass)}/>
                  </span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={styles.errorBox}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
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
                    <span style={styles.spinner}/>
                    Verificando...
                  </>
                ) : (
                  <>
                    Iniciar Sesión
                    <IconArrowRight/>
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

// ── Estilos (Copiados del HTML de referencia con ajustes para React) ──
const styles = {
  root: {
    minHeight: '100vh',
    background: '#0a1428',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: "'Outfit', system-ui, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  bgDeco: { position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' },
  bgBlob1: {
    position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(20,184,166,0.18), transparent 70%)',
    top: '-160px', left: '-120px', filter: 'blur(80px)',
  },
  bgBlob2: {
    position: 'absolute', width: '480px', height: '480px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(94,234,212,0.12), transparent 70%)',
    bottom: '-100px', right: '-100px', filter: 'blur(80px)',
  },
  bgGrid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
  },
  bgLine1: {
    position: 'absolute', width: '1px', height: '130%', top: '-15%', left: '38%',
    background: 'linear-gradient(to bottom, transparent, rgba(94,234,212,0.10), transparent)',
    transform: 'rotate(8deg)',
  },
  bgLine2: {
    position: 'absolute', width: '1px', height: '130%', top: '-15%', right: '25%',
    background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,0.07), transparent)',
    transform: 'rotate(-6deg)',
  },

  shell: {
    position: 'relative', zIndex: 2,
    display: 'grid', gridTemplateColumns: '1fr 440px',
    width: '980px', maxWidth: '100%', minHeight: '660px',
    borderRadius: '24px', overflow: 'hidden',
    boxShadow: '0 36px 90px rgba(0,0,0,0.35), 0 0 0 1px rgba(20,184,166,0.12)',
  },

  leftPanel: {
    background: 'linear-gradient(155deg, #0f172a 0%, #1a2840 50%, #0a1428 100%)',
    padding: '50px 44px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    color: '#f1f5f9',
  },

  brand: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '52px' },
  brandLogo: {
    width: '62px', height: '62px', background: '#ffffff', border: '3px solid #14b8a6', borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    boxShadow: '0 8px 24px rgba(20,184,166,0.30)', overflow: 'hidden',
  },
  brandInfoName: { fontSize: '17px', fontWeight: '600', color: '#f1f5f9', letterSpacing: '-0.3px' },
  brandInfoTag: { fontSize: '11px', color: '#94a3b8', fontFamily: "'Courier New', monospace", marginTop: '2px' },

  headline: {
    fontFamily: "'Crimson Pro', Georgia, serif", fontWeight: '300', fontSize: '38px', lineHeight: '1.18',
    color: '#f1f5f9', marginBottom: '16px', letterSpacing: '-0.5px',
  },
  headlineEm: { fontStyle: 'italic', fontWeight: '400', color: '#ffffff' },
  headlineSub: { fontSize: '14px', color: '#cbd5e1', lineHeight: '1.65', maxWidth: '300px', marginBottom: '40px' },

  features: { display: 'flex', flexDirection: 'column', gap: '10px' },
  featureItem: {
    display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
    background: 'rgba(20,184,166,0.06)', border: '1px solid rgba(94,234,212,0.12)', borderRadius: '12px',
  },
  featureIcon: { flexShrink: 0, color: '#5eead4', display: 'flex' },
  featureText: { fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5' },

  leftFooter: { display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '40px' },
  versionBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '6px 14px',
    fontSize: '10px', fontFamily: "'Courier New', monospace", color: '#94a3b8', letterSpacing: '0.5px', width: 'fit-content',
  },
  versionDot: {
    width: '6px', height: '6px', background: '#5eead4', borderRadius: '50%',
    boxShadow: '0 0 10px rgba(94,234,212,0.5)', flexShrink: 0,
  },
  schoolBadge: { fontSize: '11px', color: '#64748b', fontFamily: "'Courier New', monospace" },

  rightPanel: { background: '#ffffff', padding: '50px 48px', display: 'flex', alignItems: 'center' },
  formWrap: { width: '100%' },
  formHeader: { marginBottom: '36px' },
  formTitle: { fontSize: '30px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.4px', marginBottom: '8px' },
  formSub: { fontSize: '15px', color: '#64748b', lineHeight: '1.5' },

  fieldGroup: { marginBottom: '20px' },
  fieldLabel: { display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '9px', letterSpacing: '0.2px' },
  passwordHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '9px' },
  forgotLink: { fontSize: '13px', color: '#14b8a6', textDecoration: 'none', fontWeight: '500' },

  inputWrapper: {
    position: 'relative', display: 'flex', alignItems: 'center', background: '#f8fafc',
    border: '2px solid #e2e8f0', borderRadius: '18px', transition: 'border-color 0.22s, box-shadow 0.22s, background 0.22s',
    overflow: 'hidden',
  },
  inputWrapperFocus: { borderColor: '#14b8a6', boxShadow: '0 0 0 5px rgba(20,184,166,0.20)', background: '#ffffff' },
  inputIconLeft: { position: 'absolute', left: '17px', color: '#94a3b8', pointerEvents: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' },
  inputIconRight: { position: 'absolute', right: '10px', display: 'flex', alignItems: 'center' },
  inputField: {
    width: '100%', background: 'transparent', border: 'none', outline: 'none',
    padding: '16px 18px 16px 52px', color: '#0f172a', fontSize: '15.5px', fontFamily: "'Outfit', sans-serif",
  },
  btnEye: { background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', padding: '7px', borderRadius: '8px', transition: 'color 0.2s' },

  errorBox: {
    display: 'flex', alignItems: 'center', gap: '10px', padding: '13px 16px',
    background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px',
    color: '#dc2626', fontSize: '14px', marginBottom: '16px',
  },

  btnSubmit: {
    width: '100%', background: '#14b8a6', color: '#ffffff', border: 'none', borderRadius: '18px',
    padding: '16px 24px', fontSize: '16.5px', fontWeight: '600', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    boxShadow: '0 8px 28px rgba(20,184,166,0.32)', transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
    marginTop: '8px', letterSpacing: '0.2px',
  },
  btnSubmitDisabled: { opacity: 0.55, cursor: 'not-allowed', boxShadow: 'none' },
  spinner: {
    width: '20px', height: '20px', border: '2.5px solid rgba(255,255,255,0.3)',
    borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0,
  },

  divider: { display: 'flex', alignItems: 'center', gap: '14px', margin: '28px 0 22px' },
  dividerLine: { flex: 1, height: '1px', background: '#e2e8f0' },
  dividerText: { fontSize: '10px', fontFamily: "'Courier New', monospace", color: '#94a3b8', letterSpacing: '0.8px', textTransform: 'uppercase', whiteSpace: 'nowrap' },

  demoBox: { background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '18px', padding: '20px 22px' },
  demoBoxTitle: { fontSize: '10.5px', fontFamily: "'Courier New', monospace", color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '14px' },
  demoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '9px' },
  demoLabel: { fontSize: '13.5px', color: '#64748b' },
  demoValue: { fontSize: '13px', fontFamily: "'Courier New', monospace", color: '#14b8a6', background: '#f0fdfa', padding: '5px 12px', borderRadius: '7px' },
  btnDemo: {
    width: '100%', background: 'transparent', border: '2px solid #14b8a6', borderRadius: '12px',
    padding: '11px', color: '#14b8a6', fontSize: '13.5px', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', fontWeight: '500', marginTop: '14px', transition: 'background 0.2s, color 0.2s, border-color 0.2s', letterSpacing: '0.2px',
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