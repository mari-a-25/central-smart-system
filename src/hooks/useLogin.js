import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuthStore } from '../store/authStore'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function login(email, password) {
    setLoading(true)
    setError(null)

    try {
      // MODO DEMO: Bypass si es el usuario de demo
      if (email.trim().toLowerCase() === 'admin@demo.com' && password === 'demo1234') {
        console.log('Ingresando en modo DEMO (sin backend)')
        const demoUser = { id: 'demo-user-id', email: 'admin@demo.com' }
        const demoData = {
          user: demoUser,
          session: { access_token: 'demo-token' }
        }
        
        // Sincronizamos el store manualmente para el bypass
        const store = useAuthStore.getState()
        store.setUser(demoUser)
        store.setPerfil({
          id: 'demo-user-id',
          nombre: 'Administrador Demo',
          empresa_id: 'demo-empresa-id',
          rol: 'admin',
          empresas: { id: 'demo-empresa-id', nombre: 'Empresa Demo' }
        })
        store.setEmpresa({ id: 'demo-empresa-id', nombre: 'Empresa Demo' })
        
        return demoData
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (error) {
        if (error.message === 'Invalid login credentials') {
          throw new Error('Correo o contraseña incorrectos')
        }
        if (error.message === 'Email not confirmed') {
          throw new Error('Debes confirmar tu correo antes de ingresar')
        }
        throw new Error(error.message)
      }

      return data
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}