import { createContext, useContext, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { useAuthStore } from '../store/authStore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const { setUser, setPerfil, setEmpresa, setLoading, logout } = useAuthStore()

  useEffect(() => {
    // Si Supabase no está configurado, simplemente dejar de cargar
    if (!isSupabaseConfigured) {
      console.warn('Supabase no configurado — el sistema funcionará en modo visual sin backend.')
      setLoading(false)
      return
    }

    // Verificar sesión activa al cargar
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user)
          cargarPerfil(session.user.id)
        } else {
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error('Error obteniendo sesión:', err)
        setLoading(false)
      })

    // Escuchar cambios de sesión en tiempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user)
          await cargarPerfil(session.user.id)
        }
        if (event === 'SIGNED_OUT') {
          logout()
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [setUser, setPerfil, setEmpresa, setLoading, logout])

  async function cargarPerfil(userId) {
    try {
      const { data: perfil, error } = await supabase
        .from('usuarios')
        .select('*, empresas(*)')
        .eq('id', userId)
        .single()

      if (error) throw error

      setPerfil(perfil)
      setEmpresa(perfil.empresas)
    } catch (err) {
      console.error('Error cargando perfil:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)