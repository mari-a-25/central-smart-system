import { AuthProvider } from './context/AuthContext'
import AppRouter from './routes/AppRouter'
import { Suspense } from 'react'

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={
        <div style={{ 
          minHeight: '100vh', 
          background: '#060c18', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#e2e8f0'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>Cargando sistema...</div>
          </div>
        </div>
      }>
        <AppRouter/>
      </Suspense>
    </AuthProvider>
  )
}