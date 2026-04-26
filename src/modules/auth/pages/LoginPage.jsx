import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'

// ── Iconos SVG inline ──────────────────────────────────────────
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="12" height="9" rx="1.5"/>
      <path d="M2 5.5l6 4.5 6-4.5"/>
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="10" height="7" rx="1.5"/>
      <path d="M5 7V5a3 3 0 016 0v2"/>
      <circle cx="8" cy="10.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconEye({ show, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', display: 'flex', padding: '4px' }}>
      {show ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z"/>
          <circle cx="8" cy="8" r="1.5"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 2l12 12M6.5 6.6A2 2 0 0010 10M4.5 4.6C3.1 5.5 2 8 2 8s2.5 4 6 4c1.1 0 2.1-.3 3-.8"/>
          <path d="M9.9 4.2C12.2 5 14 8 14 8s-.7 1.1-1.8 2.1"/>
        </svg>
      )}
    </button>
  )
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="8" height="8" rx="2" fill="#2563eb"/>
      <rect x="12" y="2" width="8" height="8" rx="2" fill="#2563eb" opacity="0.5"/>
      <rect x="2" y="12" width="8" height="8" rx="2" fill="#2563eb" opacity="0.5"/>
      <rect x="12" y="12" width="8" height="8" rx="2" fill="#2563eb" opacity="0.25"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2L3 4.5v4c0 2.8 2.2 5 5 5s5-2.2 5-5v-4L8 2z"/>
      <path d="M6 8l1.5 1.5L10 6"/>
    </svg>
  )
}

function IconCpu() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round">
      <rect x="4" y="4" width="8" height="8" rx="1"/>
      <path d="M6 2v2M10 2v2M6 12v2M10 12v2M2 6h2M2 10h2M12 6h2M12 10h2"/>
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2L2 5l6 3 6-3-6-3z"/>
      <path d="M2 9l6 3 6-3"/>
      <path d="M2 12l6 3 6-3"/>
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

  return (
    <div style={styles.root}>
      {/* Fondo */}
      <div style={styles.bgWrap}>
        <div style={styles.bgBlob1}/>
        <div style={styles.bgBlob2}/>
        <div style={styles.bgGrid}/>
        <div style={styles.bgLineLeft}/>
        <div style={styles.bgLineRight}/>
      </div>

      {/* Shell */}
      <div style={styles.shell}>

        {/* Panel izquierdo */}
        <div style={styles.leftPanel}>
          <div style={styles.leftTop}>
            {/* Logo */}
            <div style={styles.brand}>
              <div style={styles.brandMark}><IconGrid/></div>
              <div>
                <div style={styles.brandName}>Central Smart System</div>
                <div style={styles.brandTagline}>Sistema Operativo Empresarial</div>
              </div>
            </div>

            {/* Headline */}
            <div style={styles.headline}>
              La plataforma que<br/>
              <span style={styles.headlineAccent}>unifica</span> tu empresa<br/>
              con inteligencia.
            </div>
            <div style={styles.headlineSub}>
              Conecta ventas, inventario, logística, RRHH y más en un solo sistema con IA integrada.
            </div>

            {/* Features */}
            <div style={styles.featureList}>
              {[
                { icon: <IconShield/>, label: 'Acceso seguro por roles — cada área ve solo lo suyo' },
                { icon: <IconCpu/>,    label: 'Agente IA integrado — alertas y decisiones automáticas' },
                { icon: <IconLayers/>, label: '8 módulos conectados — datos en tiempo real' },
              ].map((f, i) => (
                <div key={i} style={styles.featureItem}>
                  <div style={styles.featureIcon}>{f.icon}</div>
                  <div style={styles.featureText}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer izq */}
          <div style={styles.leftFooter}>
            <div style={styles.versionBadge}>
              <span style={styles.versionDot}/>
              v1.0 · SISTEMA ACTIVO
            </div>
            <div style={styles.schoolBadge}>
              Instituto Tecnológico México · 2026
            </div>
          </div>
        </div>

        {/* Panel derecho — formulario */}
        <div style={styles.rightPanel}>
          <div style={styles.formWrap}>
            <div style={styles.formHeader}>
              <div style={styles.formTitle}>Iniciar sesión</div>
              <div style={styles.formSub}>
                Ingresa con tus credenciales para acceder a tu área de trabajo
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Email */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Correo electrónico</label>
                <div style={{
                  ...styles.inputWrap,
                  ...(focusEmail ? styles.inputWrapFocus : {}),
                }}>
                  <span style={styles.inputIcon}><IconMail/></span>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    placeholder="tu@empresa.com"
                    style={styles.input}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div style={styles.fieldGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label style={styles.label}>Contraseña</label>
                  <a href="#" style={styles.forgotLink}>¿Olvidaste tu contraseña?</a>
                </div>
                <div style={{
                  ...styles.inputWrap,
                  ...(focusPass ? styles.inputWrapFocus : {}),
                }}>
                  <span style={styles.inputIcon}><IconLock/></span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusPass(true)}
                    onBlur={() => setFocusPass(false)}
                    placeholder="••••••••"
                    style={{ ...styles.input, paddingRight: '44px' }}
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
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#f87171" strokeWidth="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3M8 11h.01"/></svg>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !email || !password}
                style={{
                  ...styles.btnPrimary,
                  ...(loading || !email || !password ? styles.btnDisabled : {}),
                }}
              >
                {loading ? (
                  <>
                    <span style={styles.spinner}/>
                    Verificando...
                  </>
                ) : (
                  <>
                    Ingresar al sistema
                    <IconArrow/>
                  </>
                )}
              </button>
            </form>

            {/* Separador */}
            <div style={styles.divider}>
              <div style={styles.dividerLine}/>
              <span style={styles.dividerText}>acceso de demostración</span>
              <div style={styles.dividerLine}/>
            </div>

            {/* Demo info */}
            <div style={styles.demoBox}>
              <div style={styles.demoBoxTitle}>Credenciales de demo</div>
              <div style={styles.demoBoxRow}>
                <span style={styles.demoBoxLabel}>Correo</span>
                <span style={styles.demoBoxValue}>admin@demo.com</span>
              </div>
              <div style={styles.demoBoxRow}>
                <span style={styles.demoBoxLabel}>Contraseña</span>
                <span style={styles.demoBoxValue}>demo1234</span>
              </div>
              <button
                type="button"
                style={styles.btnDemo}
                onClick={() => {
                  setEmail('admin@demo.com')
                  setPassword('demo1234')
                }}
              >
                Usar credenciales demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Estilos ────────────────────────────────────────────────────
const styles = {
  root: {
    minHeight: '100vh',
    background: '#060c18',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Outfit', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  },
  bgWrap: { position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' },
  bgBlob1: {
    position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)',
    top: '-150px', left: '-100px', filter: 'blur(60px)',
  },
  bgBlob2: {
    position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
    bottom: '-100px', right: '-80px', filter: 'blur(60px)',
  },
  bgGrid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
    backgroundSize: '44px 44px',
  },
  bgLineLeft: {
    position: 'absolute', width: '1px', height: '130%',
    background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.15), transparent)',
    left: '38%', top: '-15%', transform: 'rotate(8deg)',
  },
  bgLineRight: {
    position: 'absolute', width: '1px', height: '130%',
    background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.1), transparent)',
    right: '25%', top: '-15%', transform: 'rotate(-6deg)',
  },

  shell: {
    position: 'relative', zIndex: 2,
    display: 'grid', gridTemplateColumns: '1fr 400px',
    width: '900px', maxWidth: '100%',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '20px', overflow: 'hidden',
    boxShadow: '0 50px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.08)',
  },

  leftPanel: {
    background: 'linear-gradient(150deg, #0a1628 0%, #0d1d35 50%, #091526 100%)',
    padding: '48px 44px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    position: 'relative',
  },
  leftTop: {},
  brand: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '44px' },
  brandMark: {
    width: '44px', height: '44px',
    background: 'rgba(37,99,235,0.15)',
    border: '1px solid rgba(59,130,246,0.2)',
    borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  brandName: { fontSize: '15px', fontWeight: '600', color: '#e2e8f0', letterSpacing: '-0.3px' },
  brandTagline: { fontSize: '11px', color: '#334155', fontFamily: 'monospace', letterSpacing: '0.3px', marginTop: '2px' },

  headline: {
    fontFamily: "'Crimson Pro', serif",
    fontWeight: '300', fontSize: '34px', lineHeight: '1.25',
    color: '#e2e8f0', marginBottom: '14px', letterSpacing: '-0.5px',
  },
  headlineAccent: { color: '#3b82f6', fontStyle: 'italic' },
  headlineSub: { fontSize: '13px', color: '#475569', lineHeight: '1.65', maxWidth: '280px', marginBottom: '36px' },

  featureList: { display: 'flex', flexDirection: 'column', gap: '10px' },
  featureItem: {
    display: 'flex', alignItems: 'center', gap: '12px',
    padding: '11px 14px',
    background: 'rgba(37,99,235,0.05)',
    border: '1px solid rgba(59,130,246,0.1)',
    borderRadius: '10px',
  },
  featureIcon: { flexShrink: 0 },
  featureText: { fontSize: '12px', color: '#64748b', lineHeight: '1.4' },

  leftFooter: { display: 'flex', flexDirection: 'column', gap: '8px' },
  versionBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '7px',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px', padding: '5px 12px',
    fontSize: '10px', fontFamily: 'monospace', color: '#334155', letterSpacing: '0.5px',
    width: 'fit-content',
  },
  versionDot: {
    display: 'inline-block', width: '5px', height: '5px',
    background: '#3b82f6', borderRadius: '50%',
  },
  schoolBadge: { fontSize: '11px', color: '#1e293b', fontFamily: 'monospace' },

  rightPanel: {
    background: '#0f172a',
    padding: '48px 40px',
    display: 'flex', alignItems: 'center',
  },
  formWrap: { width: '100%' },
  formHeader: { marginBottom: '28px' },
  formTitle: { fontSize: '22px', fontWeight: '600', color: '#f1f5f9', letterSpacing: '-0.4px', marginBottom: '6px' },
  formSub: { fontSize: '13px', color: '#475569', lineHeight: '1.5' },

  fieldGroup: { display: 'flex', flexDirection: 'column' },
  label: {
    fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.6px',
    textTransform: 'uppercase', color: '#334155', marginBottom: '6px',
  },
  inputWrap: {
    position: 'relative',
    background: '#1e293b',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  inputWrapFocus: {
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37,99,235,0.12)',
  },
  inputIcon: {
    position: 'absolute', left: '13px',
    color: '#334155', pointerEvents: 'none',
    display: 'flex', alignItems: 'center',
  },
  inputIconRight: {
    position: 'absolute', right: '10px',
    display: 'flex', alignItems: 'center',
  },
  input: {
    width: '100%', background: 'transparent', border: 'none', outline: 'none',
    padding: '12px 14px 12px 40px',
    color: '#e2e8f0', fontSize: '14px', fontFamily: "'Outfit', sans-serif",
  },
  forgotLink: { fontSize: '11px', color: '#334155', textDecoration: 'none' },

  errorBox: {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)',
    borderRadius: '8px', padding: '10px 13px',
    fontSize: '13px', color: '#f87171',
  },

  btnPrimary: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    background: '#2563eb', border: 'none', borderRadius: '10px',
    padding: '13px 20px', color: '#fff',
    fontSize: '14px', fontWeight: '600', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', letterSpacing: '0.1px',
    boxShadow: '0 4px 24px rgba(37,99,235,0.35)',
    transition: 'opacity 0.15s, box-shadow 0.2s',
    marginTop: '4px',
  },
  btnDisabled: {
    opacity: 0.5, cursor: 'not-allowed',
    boxShadow: 'none',
  },
  spinner: {
    display: 'inline-block',
    width: '14px', height: '14px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#fff', borderRadius: '50%',
    animation: 'spin 0.7s linear infinite',
  },

  divider: {
    display: 'flex', alignItems: 'center', gap: '10px',
    margin: '24px 0 18px',
  },
  dividerLine: { flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' },
  dividerText: { fontSize: '10px', fontFamily: 'monospace', color: '#1e293b', whiteSpace: 'nowrap', letterSpacing: '0.5px' },

  demoBox: {
    background: '#1e293b',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px', padding: '16px',
  },
  demoBoxTitle: { fontSize: '11px', fontFamily: 'monospace', color: '#334155', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '10px' },
  demoBoxRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' },
  demoBoxLabel: { fontSize: '12px', color: '#334155' },
  demoBoxValue: { fontSize: '12px', fontFamily: 'monospace', color: '#3b82f6' },
  btnDemo: {
    width: '100%', background: 'transparent',
    border: '1px solid rgba(59,130,246,0.2)',
    borderRadius: '8px', padding: '9px',
    color: '#3b82f6', fontSize: '12px', fontFamily: "'Outfit', sans-serif",
    cursor: 'pointer', marginTop: '12px',
    transition: 'background 0.15s',
  },
}