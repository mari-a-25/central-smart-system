import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'

// ── Iconos SVG ──────────────────────────────────────
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconEyeToggle({ show, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      color: '#64748b', display: 'flex', padding: '8px', borderRadius: '8px',
    }}>
      {show ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  )
}

function IconArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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

function IconAlertCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

// ── Componente principal ─────────────────────────────
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
    if (result) navigate('/dashboard')
  }

  const handleDemo = async () => {
    const demoEmail = 'admin@demo.com'
    const demoPass = 'demo1234'
    setEmail(demoEmail)
    setPassword(demoPass)
    const result = await login(demoEmail, demoPass)
    if (result) navigate('/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0e27',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: "'Outfit', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Botón volver a la landing */}
      <button
        onClick={() => navigate('/')}
        className="btn-back-landing"
        style={{
          position: 'fixed', top: '20px', left: '24px', zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '7px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '10px', padding: '9px 16px',
          color: '#94a3b8', fontSize: '14px', fontWeight: '600',
          fontFamily: "'Outfit', sans-serif",
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.11)'; e.currentTarget.style.color = '#e2e8f0' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        <span>Volver al inicio</span>
      </button>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-dot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.6; transform:scale(1.3); } }

        .login-shell {
          display: grid;
          grid-template-columns: 1fr 500px;
          width: 1100px;
          max-width: 100%;
          min-height: 680px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,85,204,0.15);
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .login-shell {
            grid-template-columns: 1fr !important;
            border-radius: 20px;
            min-height: unset;
          }
          .left-panel { display: none !important; }
          .right-panel {
            padding: 36px 24px !important;
          }
        }

        .btn-back-landing { transition: all 0.2s; }
        @media (max-width: 600px) {
          .btn-back-landing { top: 12px !important; left: 12px !important; padding: 6px 12px !important; font-size: 12px !important; }
          .btn-back-landing span { display: none; }
        }

        .btn-submit { transition: background 0.2s, transform 0.15s, box-shadow 0.2s; }
        .btn-submit:hover:not(:disabled) {
          background: #0b7a70 !important;
          transform: translateY(-1px);
          box-shadow: 0 14px 40px rgba(0,85,204,0.45) !important;
        }
        .btn-demo:hover { background: rgba(0,85,204,0.08) !important; }
        .input-wrapper { transition: border-color 0.22s, box-shadow 0.22s, background 0.22s; }
      `}</style>

      {/* Fondo decorativo */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,204,0.14), transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,119,204,0.09), transparent 70%)', bottom: '-100px', right: '-100px', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="login-shell">

        {/* PANEL IZQUIERDO */}
        <div className="left-panel" style={{
          background: 'linear-gradient(155deg, #0f1222 0%, #161c34 50%, #0a0e20 100%)',
          padding: '52px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          color: '#ffffff',
        }}>
          <div>
            {/* Marca */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '56px' }}>
              <div style={{
                width: '72px', height: '72px', background: '#ffffff',
                border: '3px solid #0d9488', borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 12px 32px rgba(0,85,204,0.35)',
              }}>
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="2" fill="#0d9488" />
                  <rect x="13" y="3" width="8" height="8" rx="2" fill="#0d9488" fillOpacity="0.5" />
                  <rect x="3" y="13" width="8" height="8" rx="2" fill="#0d9488" fillOpacity="0.5" />
                  <rect x="13" y="13" width="8" height="8" rx="2" fill="#0d9488" fillOpacity="0.25" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '21px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.3px' }}>Central Smart System</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: "'Courier New', monospace", marginTop: '4px', letterSpacing: '0.5px' }}>SISTEMA OPERATIVO EMPRESARIAL</div>
              </div>
            </div>

            {/* Headline */}
            <div style={{ fontSize: '42px', fontWeight: '300', lineHeight: 1.2, color: '#ffffff', marginBottom: '18px', letterSpacing: '-0.5px' }}>
              La plataforma que<br />
              <em style={{ fontStyle: 'italic', fontWeight: '600', color: '#60a5fa' }}>unifica</em> tu empresa<br />
              con inteligencia.
            </div>
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '340px', marginBottom: '44px' }}>
              Conecta ventas, inventario, logística, RRHH y más en un solo sistema con IA integrada.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: <IconShield />, text: 'Acceso seguro por roles — cada área ve solo lo suyo' },
                { icon: <IconCpu />, text: 'Agente IA integrado — alertas y decisiones automáticas' },
                { icon: <IconLayers />, text: '8 módulos conectados — datos en tiempo real' },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 18px',
                  background: 'rgba(0,85,204,0.09)',
                  border: '1px solid rgba(0,119,204,0.16)',
                  borderRadius: '14px',
                }}>
                  <span style={{ flexShrink: 0, color: '#60a5fa', display: 'flex' }}>{f.icon}</span>
                  <span style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: 1.5, fontWeight: '500' }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer izquierdo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px', padding: '8px 16px',
              fontSize: '12px', fontFamily: "'Courier New', monospace", color: '#94a3b8', letterSpacing: '0.5px', width: 'fit-content',
            }}>
              <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 12px rgba(74,222,128,0.6)', animation: 'pulse-dot 2s ease infinite', display: 'block' }} />
              v1.0 · SISTEMA ACTIVO
            </div>
            <div style={{ fontSize: '12px', color: '#4a5568', fontFamily: "'Courier New', monospace" }}>
              Instituto Tecnológico México · 2026
            </div>
          </div>
        </div>

        {/* PANEL DERECHO – FORMULARIO */}
        <div className="right-panel" style={{ background: '#ffffff', padding: '52px 48px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%' }}>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '34px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '10px' }}>
                Bienvenido(a)
              </h1>
              <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.55, fontWeight: '400' }}>
                Inicia sesión para continuar en tu área de trabajo
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Correo */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                  Correo electrónico
                </label>
                <div className="input-wrapper" style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  background: focusEmail ? '#ffffff' : '#f8fafc',
                  border: `2px solid ${focusEmail ? '#0d9488' : '#e2e8f0'}`,
                  borderRadius: '14px', overflow: 'hidden',
                  boxShadow: focusEmail ? '0 0 0 5px rgba(0,85,204,0.12)' : 'none',
                }}>
                  <span style={{ position: 'absolute', left: '16px', color: focusEmail ? '#0d9488' : '#94a3b8', display: 'flex', pointerEvents: 'none' }}>
                    <IconMail />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    placeholder="correo@empresa.com"
                    style={{
                      width: '100%', background: 'transparent', border: 'none', outline: 'none',
                      padding: '16px 18px 16px 52px',
                      color: '#0f172a', fontSize: '16px',
                      fontFamily: "'Outfit', sans-serif", fontWeight: '500',
                    }}
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Contraseña</label>
                  <a href="#" style={{ fontSize: '14px', color: '#0d9488', textDecoration: 'none', fontWeight: '600' }}>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="input-wrapper" style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  background: focusPass ? '#ffffff' : '#f8fafc',
                  border: `2px solid ${focusPass ? '#0d9488' : '#e2e8f0'}`,
                  borderRadius: '14px', overflow: 'hidden',
                  boxShadow: focusPass ? '0 0 0 5px rgba(0,85,204,0.12)' : 'none',
                }}>
                  <span style={{ position: 'absolute', left: '16px', color: focusPass ? '#0d9488' : '#94a3b8', display: 'flex', pointerEvents: 'none' }}>
                    <IconLock />
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusPass(true)}
                    onBlur={() => setFocusPass(false)}
                    placeholder="Tu contraseña segura"
                    style={{
                      width: '100%', background: 'transparent', border: 'none', outline: 'none',
                      padding: '16px 52px 16px 52px',
                      color: '#0f172a', fontSize: '16px',
                      fontFamily: "'Outfit', sans-serif", fontWeight: '500',
                    }}
                    autoComplete="current-password"
                    required
                  />
                  <span style={{ position: 'absolute', right: '8px' }}>
                    <IconEyeToggle show={showPass} onClick={() => setShowPass(!showPass)} />
                  </span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 16px', background: '#fef2f2',
                  border: '1.5px solid #fecaca', borderRadius: '12px',
                  color: '#dc2626', fontSize: '15px', fontWeight: '600', marginBottom: '20px',
                }}>
                  <IconAlertCircle />
                  <span>{error}</span>
                </div>
              )}

              {/* Botón principal */}
              <button
                type="submit"
                disabled={loading || !email || !password}
                className="btn-submit"
                style={{
                  width: '100%', background: '#0d9488', color: '#ffffff', border: 'none',
                  borderRadius: '14px', padding: '17px 28px',
                  fontSize: '17px', fontWeight: '700', fontFamily: "'Outfit', sans-serif",
                  cursor: loading || !email || !password ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                  boxShadow: '0 10px 32px rgba(0,85,204,0.35)',
                  opacity: loading || !email || !password ? 0.55 : 1,
                  marginTop: '8px',
                }}
              >
                {loading ? (
                  <>
                    <span style={{ width: '20px', height: '20px', border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0 }} />
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '28px 0 22px' }}>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
              <span style={{ fontSize: '12px', fontFamily: "'Courier New', monospace", color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: '700' }}>
                Acceso de demostración
              </span>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            </div>

            {/* Demo box */}
            <div style={{ background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '22px 24px' }}>
              <div style={{ fontSize: '12px', fontFamily: "'Courier New', monospace", color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '14px' }}>
                Credenciales de demostración
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '15px', color: '#0f172a', fontWeight: '600' }}>Correo</span>
                <code style={{ fontSize: '14px', fontFamily: "'Courier New', monospace", color: '#0d9488', background: '#eff6ff', padding: '5px 12px', borderRadius: '8px', fontWeight: '600' }}>
                  admin@demo.com
                </code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '15px', color: '#0f172a', fontWeight: '600' }}>Contraseña</span>
                <code style={{ fontSize: '14px', fontFamily: "'Courier New', monospace", color: '#0d9488', background: '#eff6ff', padding: '5px 12px', borderRadius: '8px', fontWeight: '600' }}>
                  demo1234
                </code>
              </div>
              <button
                type="button"
                className="btn-demo"
                disabled={loading}
                onClick={handleDemo}
                style={{
                  width: '100%', background: 'transparent',
                  border: '2px solid #0d9488', borderRadius: '12px',
                  padding: '14px', color: '#0d9488',
                  fontSize: '15px', fontFamily: "'Outfit', sans-serif",
                  cursor: loading ? 'not-allowed' : 'pointer', fontWeight: '700',
                  transition: 'background 0.2s', letterSpacing: '0.2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  opacity: loading ? 0.6 : 1,
                }}
              >
                {loading ? (
                  <span style={{ width: '18px', height: '18px', border: '2px solid rgba(0,85,204,0.3)', borderTopColor: '#0d9488', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'block' }} />
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Entrar con cuenta demo
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
