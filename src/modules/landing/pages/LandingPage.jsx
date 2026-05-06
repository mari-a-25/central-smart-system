import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import './LandingPage.css'

// ── Scroll Reveal ────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ── Iconos SVG ───────────────────────────────────────
function IcoArrow() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function IcoBarChart() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
}
function IcoBox() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
}
function IcoCart() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
}
function IcoTruck() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IcoUsers() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}
function IcoDollar() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
}
function IcoUser() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
}
function IcoCog() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
}
function IcoCpu() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>
}

// ── QR Code Real ─────────────────────────────────────
function QrCode({ url = 'https://central-smart-system.vercel.app' }) {
  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '16px', 
      padding: '16px', 
      width: '160px', 
      height: '160px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      margin: '0 auto',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
    }}>
      <QRCodeSVG 
        value={url} 
        size={128}
        level="M"
        includeMargin={false}
        imageSettings={{
          src: "/favicon.ico",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
    </div>
  )
}

// ── Datos ────────────────────────────────────────────
const MODULOS = [
  { ico: <IcoBarChart />, name: 'Dashboard',    desc: 'KPIs en tiempo real. Alertas IA y feed de actividad.',           color: '#14b8a6', tag: 'Tiempo real' },
  { ico: <IcoBarChart />, name: 'Ventas',       desc: 'Pedidos, clientes, facturas PDF y reportes comerciales.',         color: '#3b82f6', tag: 'Core' },
  { ico: <IcoBox />,      name: 'Inventario',   desc: 'Control de stock visual y alertas de reorden automáticas.',       color: '#f59e0b', tag: 'Core' },
  { ico: <IcoCart />,     name: 'Compras',      desc: 'Proveedores, órdenes y recomendaciones IA de abastecimiento.',   color: '#8b5cf6', tag: 'IA' },
  { ico: <IcoCpu />,      name: 'Producción',   desc: 'Lotes, calidad y planificación semanal inteligente con IA.',     color: '#ec4899', tag: 'IA' },
  { ico: <IcoTruck />,    name: 'Logística',    desc: 'Rutas, conductores, seguimiento de entregas y eficiencia.',       color: '#f97316', tag: 'Mapas' },
  { ico: <IcoUsers />,    name: 'RRHH',         desc: 'Empleados, asistencia y cálculo de nómina automático.',          color: '#06b6d4', tag: 'Auto' },
  { ico: <IcoDollar />,   name: 'Contabilidad', desc: 'Movimientos automáticos desde todos los módulos. Balance.',      color: '#a78bfa', tag: 'Auto' },
  { ico: <IcoUser />,     name: 'Clientes',     desc: 'CRM básico, tickets y clasificación automática de clientes.',    color: '#34d399', tag: 'CRM' },
  { ico: <IcoCog />,      name: 'Configuración',desc: 'Usuarios, roles, módulos activos y parámetros del sistema.',    color: '#94a3b8', tag: 'Admin' },
]

const STATS = [
  { value: '10', label: 'Módulos activos'      },
  { value: '21', label: 'Tablas en BD'         },
  { value: 'IA', label: 'Agente integrado'     },
  { value: '∞',  label: 'Multi-empresa'        },
]

const CHAT_MSGS = [
  { who: 'hu', text: '¿Cuánto vendimos esta semana?' },
  { who: 'ai', text: <>Esta semana registraste <span className="lp-chat-hi">RD$142,830</span> — un <span className="lp-chat-hi">+18%</span> vs la semana anterior. Producto top: <span className="lp-chat-hi">Jugo Naranja 500ml</span>.</> },
  { who: 'hu', text: '¿Qué productos están bajos de stock?' },
  { who: 'ai', text: <><span className="lp-chat-hi">3 productos críticos:</span> Snack Maíz (12u), Jugo Guayaba (8u) y Agua 1L (5u). ¿Creo las órdenes de compra ahora?</> },
]

// ── Componente ───────────────────────────────────────
export default function LandingPage() {
  const navigate = useNavigate()
  useScrollReveal()

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-nav-logo">
            <div className="lp-nav-logo-box">
              <img src="/Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
            </div>
            <div>
              <div className="lp-nav-name">Central Smart System</div>
              <div className="lp-nav-sub">ERP Empresarial</div>
            </div>
          </div>
          <div className="lp-nav-links">
            <a href="#modulos"  className="lp-nav-link">Módulos</a>
            <a href="#ia"       className="lp-nav-link">IA</a>
            <a href="#demo"     className="lp-nav-link">Demo</a>
          </div>
          <button className="lp-btn-primary sm" onClick={() => navigate('/login')}>
            Iniciar Sesión <IcoArrow />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-grid" />
        <div className="lp-hero-glow" />
        <div className="lp-hero-orb-1" />
        <div className="lp-hero-orb-2" />

        <div className="lp-hero-badge">
          <span className="lp-hero-badge-dot" />
          Sistema Activo · Feria de Proyectos 2025
        </div>

        <h1 className="lp-hero-title">
          Gestión empresarial<br />
          potenciada con <span className="accent">inteligencia artificial</span>
        </h1>

        <p className="lp-hero-sub">
          Centraliza ventas, inventario, producción, logística, RRHH y contabilidad en una sola plataforma con un agente IA que responde en español, en tiempo real.
        </p>

        <div className="lp-hero-actions">
          <button className="lp-btn-primary" onClick={() => navigate('/login')}>
            Probar el sistema en vivo <IcoArrow />
          </button>
          <a className="lp-btn-ghost" href="#modulos">Ver módulos</a>
        </div>

        <div className="lp-hero-stats">
          {STATS.map((st, i) => (
            <>
              {i > 0 && <div key={`d${i}`} className="lp-hero-divider" />}
              <div key={st.label} style={{ textAlign: 'center' }}>
                <div className="lp-hero-stat-num">{st.value}</div>
                <div className="lp-hero-stat-label">{st.label}</div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <div className="lp-section-alt">
        <div className="lp-section-alt-inner" id="problema">
          <div className="lp-section-header reveal">
            <span className="lp-eyebrow">El problema</span>
            <h2 className="lp-section-title">Antes de tener este sistema</h2>
            <p className="lp-section-sub">8 departamentos operando con cuadernos, hojas de cálculo y llamadas de WhatsApp.</p>
          </div>
          <div className="lp-problem-grid reveal reveal-delay-1">
            <div className="lp-problem-card">
              <div className="lp-problem-stat red">8h</div>
              <h3>Pérdida de tiempo diaria</h3>
              <p>Conciliar inventario manual, buscar pedidos en listas físicas y recalcular nómina consumía el día entero del equipo administrativo.</p>
            </div>
            <div className="lp-problem-card">
              <div className="lp-problem-stat amber">34%</div>
              <h3>Errores en pedidos</h3>
              <p>Sin sistema centralizado, un pedido podía duplicarse, perderse o despacharse con productos incorrectos. No había trazabilidad.</p>
            </div>
            <div className="lp-problem-card">
              <div className="lp-problem-stat blue">0</div>
              <h3>Sistemas digitales</h3>
              <p>Cero automatizaciones. Cero alertas proactivas. Cero visibilidad del negocio en tiempo real. Todo dependía de la memoria humana.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MÓDULOS ── */}
      <div className="lp-section-light" id="modulos">
        <div className="lp-section-header reveal">
          <span className="lp-eyebrow">La solución</span>
          <h2 className="lp-section-title">Todo el negocio en una sola pantalla</h2>
          <p className="lp-section-sub">10 módulos interconectados. Cada acción en uno actualiza automáticamente a los demás.</p>
        </div>
        <div className="lp-modulos-carousel-wrapper">
          <div className="lp-modulos-track">
            {[...MODULOS, ...MODULOS].map((mod, i) => (
              <div key={`${mod.name}-${i}`} className="lp-modulo-card">
                <div className="lp-modulo-icon" style={{ background: `${mod.color}20`, color: mod.color }}>
                  {mod.ico}
                </div>
                <div className="lp-modulo-name">{mod.name}</div>
                <div className="lp-modulo-desc">{mod.desc}</div>
                <span className="lp-modulo-tag">{mod.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IA ── */}
      <div className="lp-section-alt">
        <div className="lp-section-alt-inner" id="ia">
          <div className="lp-ai-inner">
            <div className="lp-ai-content reveal">
              <span className="lp-eyebrow">Agente inteligente</span>
              <h2>Pregunta. El sistema<br /><span>responde con datos reales.</span></h2>
              <p>Integrado con Gemini API, el agente IA analiza tu base de datos en tiempo real y responde preguntas en español natural.</p>
              <div className="lp-ai-features">
                {[
                  'Consulta ventas, stock e indicadores con lenguaje natural',
                  'Genera recomendaciones de compra basadas en historial',
                  'Detecta anomalías y genera alertas automáticas',
                  'Planifica producción según la demanda real',
                ].map(f => (
                  <div key={f} className="lp-ai-feature">
                    <div className="lp-ai-feature-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-chat reveal reveal-delay-2">
              <div className="lp-chat-header">
                <div className="lp-chat-dot r" /><div className="lp-chat-dot a" /><div className="lp-chat-dot g" />
                <span className="lp-chat-title">Central Smart System · Agente IA</span>
              </div>
              <div className="lp-chat-messages">
                {CHAT_MSGS.map((m, i) => (
                  <div key={i} className={`lp-chat-msg${m.who === 'hu' ? ' user' : ''}`}>
                    <div className={`lp-chat-avatar ${m.who}`}>{m.who === 'ai' ? 'IA' : 'TÚ'}</div>
                    <div className="lp-chat-bubble">{m.text}</div>
                  </div>
                ))}
              </div>
              <div className="lp-chat-input">
                <input type="text" placeholder="Escribe tu pregunta en español..." readOnly />
                <button className="lp-chat-send">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DEMO ── */}
      <div className="lp-section" id="demo" style={{ textAlign: 'center' }}>
        <div className="lp-section-header reveal">
          <span className="lp-eyebrow">Demo en vivo</span>
          <h2 className="lp-section-title">Pruébalo en cualquier dispositivo</h2>
          <p className="lp-section-sub">Escanea el QR desde tu celular o accede directamente. No necesitas cuenta propia.</p>
        </div>

        <div className="lp-demo-box reveal reveal-delay-1">
          {/* Layout: QR | Credenciales */}
          <div className="lp-demo-inner">

            {/* QR */}
            <div className="lp-demo-qr-col">
              <div className="lp-demo-qr-label">Escanea con tu celular</div>
              <QrCode />
              <div className="lp-demo-qr-url">
                central-smart-system.vercel.app
              </div>
              <div className="lp-demo-qr-note">
                Actualiza la URL cuando hagas deploy
              </div>
            </div>

            {/* Separador */}
            <div className="lp-demo-sep" />

            {/* Credenciales */}
            <div className="lp-demo-creds-col">
              <div className="lp-demo-active-badge">
                <span className="lp-demo-dot" />
                Sistema activo ahora
              </div>
              <p className="lp-demo-creds-title">Credenciales de acceso</p>
              <div className="lp-demo-creds">
                <div className="lp-demo-cred-row">
                  <span className="lp-demo-cred-label">Correo</span>
                  <span className="lp-demo-cred-value">admin@demo.com</span>
                </div>
                <div className="lp-demo-cred-row">
                  <span className="lp-demo-cred-label">Contraseña</span>
                  <span className="lp-demo-cred-value">demo1234</span>
                </div>
              </div>
              <button className="lp-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/login')}>
                Acceder al sistema <IcoArrow />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <span className="lp-footer-copy">Central Smart System · Instituto Tecnológico México · 2025</span>
        <span className="lp-footer-version">v1.0 — ERP Empresarial</span>
      </footer>

    </div>
  )
}
