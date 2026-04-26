import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import LoginPage from '../modules/auth/pages/LoginPage'

// Placeholder temporal del dashboard hasta que lo construyamos
function DashboardTemp() {
  const { perfil, empresa } = useAuthStore()
  return (
    <div style={{ padding: '40px', fontFamily: 'Outfit, sans-serif', color: '#e2e8f0', background: '#0f172a', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Dashboard — Central Smart System</h1>
      <p style={{ color: '#475569' }}>Login exitoso ✓</p>
      <pre style={{ marginTop: '20px', background: '#1e293b', padding: '16px', borderRadius: '10px', fontSize: '13px', color: '#3b82f6' }}>
        {JSON.stringify({ perfil: perfil?.nombre, rol: perfil?.rol, empresa: empresa?.nombre }, null, 2)}
      </pre>
    </div>
  )
}

// Ruta protegida — si no hay sesión redirige al login
function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore()

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#060c18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '2px solid #1e293b', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }}/>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" replace/>
}

// Ruta pública — si ya hay sesión redirige al dashboard
function PublicRoute({ children }) {
  const { user, loading } = useAuthStore()
  if (loading) return null
  return user ? <Navigate to="/dashboard" replace/> : children
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute><LoginPage/></PublicRoute>
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute><DashboardTemp/></ProtectedRoute>
        }/>
        <Route path="*" element={<Navigate to="/login" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}