import { create } from 'zustand'

interface Notification {
  id: string
  type: 'bug' | 'user' | 'subscription' | 'system'
  title: string
  message: string
  timestamp: string
  isRead: boolean
}

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [
    {
      id: '1',
      type: 'bug',
      title: 'You have a bug that needs...',
      message: 'Critical bug detected in payment system',
      timestamp: 'Just now',
      isRead: false,
    },
    {
      id: '2',
      type: 'user',
      title: 'New user registered',
      message: 'John Doe has joined the platform',
      timestamp: '59 minutes ago',
      isRead: false,
    },
    {
      id: '3',
      type: 'bug',
      title: 'You have a bug that needs...',
      message: 'UI rendering issue in dashboard',
      timestamp: '12 hours ago',
      isRead: true,
    },
    {
      id: '4',
      type: 'subscription',
      title: 'Andi Lane subscribed to you',
      message: 'New subscriber notification',
      timestamp: 'Today, 11:59 AM',
      isRead: true,
    },
  ],
  unreadCount: 0,
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ),
    unreadCount: state.notifications.filter(n => n.id !== id && !n.isRead).length
  })),
  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, isRead: true })),
    unreadCount: 0
  })),
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, { ...notification, id: Date.now().toString() }],
    unreadCount: state.unreadCount + 1
  })),
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id),
    unreadCount: state.notifications.filter(n => n.id !== id && !n.isRead).length
  })),
}))