import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 1. Verificación para que el equipo no se vuelva loco si olvida el .env
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '⚠️ Faltan las variables de entorno de Supabase en NovaOS.',
    '\n   VITE_SUPABASE_URL:', supabaseUrl ? '✓' : '✗ VACÍA',
    '\n   VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '✗ VACÍA',
    '\n   Verifica tu archivo .env en la raíz del proyecto.'
  )
}

// 2. Creación del cliente con configuración de sesión para el Login
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true, // Esto mantiene la sesión abierta al recargar
      autoRefreshToken: true, // Renueva el token automáticamente (JWT)
      detectSessionInUrl: true,
    },
  }
)

// 3. Export útil para mostrar alertas en el diseño si la conexión falla
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)