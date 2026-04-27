import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import LoginPage from '../modules/auth/pages/LoginPage'
import DashboardPage from '../modules/dashboard/pages/DashboardPage'

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
          <ProtectedRoute><DashboardPage/></ProtectedRoute>
        }/>
        {/* Agregamos redirecciones temporales para los otros módulos */}
        <Route path="/ia-chat" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/ventas" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/inventario" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/compras" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/produccion" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/logistica" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/rrhh" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/contabilidad" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/clientes" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/configuracion" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        
        <Route path="*" element={<Navigate to="/login" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}