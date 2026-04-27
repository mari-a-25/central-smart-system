import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '⚠️ Faltan las variables de entorno de Supabase.',
    '\n   VITE_SUPABASE_URL:', supabaseUrl ? '✓' : '✗ VACÍA',
    '\n   VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '✗ VACÍA',
    '\n   Verifica tu archivo .env en la raíz del proyecto.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)