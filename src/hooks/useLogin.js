import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function login(email, password) {
    setLoading(true)
    setError(null)

    try {
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