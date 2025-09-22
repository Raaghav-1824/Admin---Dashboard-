import React from 'react';
import { Bug, User, Wifi } from 'lucide-react';
import { NotificationItem, ActivityItem, Contact } from './types';

export const notifications: NotificationItem[] = [
  {
    id: "1",
    type: "bug",
    title: "You have a bug that needs...",
    message: "Critical bug detected in payment system",
    timestamp: "Just now",
    icon: React.createElement(Bug, { className: "w-4 h-4" }),
    isRead: false,
  },
  {
    id: "2",
    type: "user",
    title: "New user registered",
    message: "John Doe has joined the platform",
    timestamp: "59 minutes ago",
    icon: React.createElement(User, { className: "w-4 h-4" }),
    isRead: false,
  },
  {
    id: "3",
    type: "bug",
    title: "You have a bug that needs...",
    message: "UI rendering issue in dashboard",
    timestamp: "12 hours ago",
    icon: React.createElement(Bug, { className: "w-4 h-4" }),
    isRead: true,
  },
  {
    id: "4",
    type: "subscription",
    title: "Andi Lane subscribed to you",
    message: "New subscriber notification",
    timestamp: "Today, 11:59 AM",
    icon: React.createElement(Wifi, { className: "w-4 h-4" }),
    isRead: true,
  },
];

export const activities: ActivityItem[] = [
  {
    id: "1",
    type: "invite",
    user: {
      name: "You",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    action: "have a bug that needs to be fixed",
    timestamp: "Just now",
    isOnline: true,
    status: "active",
  },
  {
    id: "2",
    type: "subscription",
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    action: "released a new version",
    timestamp: "59 minutes ago",
    isOnline: false,
  },
  {
    id: "3",
    type: "upload",
    user: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    },
    action: "submitted a bug",
    timestamp: "12 hours ago",
    isOnline: true,
    status: "busy",
  },
  {
    id: "4",
    type: "subscription",
    user: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    action: "published a new project",
    timestamp: "Today, 11:59 AM",
    isOnline: true,
    status: "away",
  },
];

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Natali Craig",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    isOnline: true,
    status: "active",
  },
  {
    id: "2",
    name: "Drew Cano",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    isOnline: false,
  },
  {
    id: "3",
    name: "Orlando Diggs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    isOnline: true,
    status: "busy",
  },
  {
    id: "4",
    name: "Andi Lane",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
    isOnline: true,
    status: "away",
  },
];
