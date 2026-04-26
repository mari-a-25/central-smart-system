import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  perfil: null,
  empresa: null,
  loading: true,

  setUser: (user) => set({ user }),
  setPerfil: (perfil) => set({ perfil }),
  setEmpresa: (empresa) => set({ empresa }),
  setLoading: (loading) => set({ loading }),

  logout: () => set({ user: null, perfil: null, empresa: null, loading: false }),
}))