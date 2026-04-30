import { createContext, useEffect, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { useAuthStore } from '../store/authStore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const { setUser, setPerfil, setEmpresa, setLoading, logout } = useAuthStore()

  const cargarPerfil = useCallback(async (userId) => {
    // MODO DEMO: Perfil ficticio
    if (userId === 'demo-user-id') {
      setPerfil({
        id: 'demo-user-id',
        nombre: 'Administrador Demo',
        empresa_id: 'demo-empresa-id',
        rol: 'admin',
        empresas: { id: 'demo-empresa-id', nombre: 'Empresa Demo' }
      })
      setEmpresa({ id: 'demo-empresa-id', nombre: 'Empresa Demo' })
      setLoading(false)
      return
    }

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
  }, [setPerfil, setEmpresa, setLoading])

  useEffect(() => {
    // Timeout de seguridad para evitar carga infinita
    const safetyTimeout = setTimeout(() => {
      setLoading(false)
    }, 5000)

    // Si Supabase no está configurado, simplemente dejar de cargar
    if (!isSupabaseConfigured) {
      console.warn('Supabase no configurado — el sistema funcionará en modo visual sin backend.')
      setLoading(false)
      clearTimeout(safetyTimeout)
      return
    }

    // Verificar sesión activa al cargar
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        clearTimeout(safetyTimeout)
        if (session?.user) {
          setUser(session.user)
          cargarPerfil(session.user.id)
        } else {
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error('Error obteniendo sesión:', err)
        clearTimeout(safetyTimeout)
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

    return () => {
      subscription?.unsubscribe()
      clearTimeout(safetyTimeout)
    }
  }, [setUser, setPerfil, setEmpresa, setLoading, logout, cargarPerfil])

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}