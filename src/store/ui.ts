// src/store/ui.ts
import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  notificationOpen: boolean
  toggleSidebar: () => void
  toggleNotification: () => void
  setSidebarOpen: (open: boolean) => void
  setNotificationOpen: (open: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  notificationOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleNotification: () => set((state) => ({ notificationOpen: !state.notificationOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setNotificationOpen: (open) => set({ notificationOpen: open }),
}))