import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import LandingPage from '../modules/landing/pages/LandingPage'
import LoginPage from '../modules/auth/pages/LoginPage'
import DashboardPage from '../modules/dashboard/pages/DashboardPage'
import VentasPage from '../modules/ventas/pages/VentasPage'
import InventarioPage from '../modules/inventario/pages/InventarioPage'
import ComprasPage from '../modules/compras/pages/ComprasPage'
import ProduccionPage from '../modules/produccion/pages/ProduccionPage'
import LogisticaPage from '../modules/logistica/pages/LogisticaPage'
import RrhhPage from '../modules/rrhh/pages/RrhhPage'
import ContabilidadPage from '../modules/contabilidad/pages/ContabilidadPage'
import ClientesPage from '../modules/clientes/pages/ClientesPage'
import ConfiguracionPage from '../modules/configuracion/pages/ConfiguracionPage'

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
        {/* Ruta raíz — landing page pública */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={
          <PublicRoute><LoginPage/></PublicRoute>
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute><DashboardPage/></ProtectedRoute>
        }/>
        {/* Agregamos las rutas para los módulos */}
        <Route path="/ventas" element={<ProtectedRoute><VentasPage/></ProtectedRoute>}/>
        <Route path="/inventario" element={<ProtectedRoute><InventarioPage/></ProtectedRoute>}/>
        <Route path="/compras" element={<ProtectedRoute><ComprasPage/></ProtectedRoute>}/>
        <Route path="/produccion" element={<ProtectedRoute><ProduccionPage/></ProtectedRoute>}/>
        <Route path="/logistica" element={<ProtectedRoute><LogisticaPage/></ProtectedRoute>}/>
        <Route path="/rrhh" element={<ProtectedRoute><RrhhPage/></ProtectedRoute>}/>
        <Route path="/contabilidad" element={<ProtectedRoute><ContabilidadPage/></ProtectedRoute>}/>
        <Route path="/clientes" element={<ProtectedRoute><ClientesPage/></ProtectedRoute>}/>
        <Route path="/configuracion" element={<ProtectedRoute><ConfiguracionPage/></ProtectedRoute>}/>
        
        <Route path="*" element={<Navigate to="/login" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
