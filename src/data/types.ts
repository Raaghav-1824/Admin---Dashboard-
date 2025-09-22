// Shared TypeScript interfaces for mock data

export interface User {
  name: string;
  avatar: string;
}

export interface Status {
  text: string;
  color: string;
  dot: string;
}

export interface OrderItem {
  id: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: Status;
}

export interface StatItem {
  title: string;
  value: string;
  delta: string;
  variant: "lightBlue" | "main" | "grayBlue";
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface LocationDataPoint {
  name: string;
  value: number;
}

export interface Product {
  name: string;
  price: number;
  qty: number;
  amount: number;
}

export interface DonutDataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number; // Add index signature for Recharts compatibility
}

export interface NotificationItem {
  id: string;
  type: "bug" | "user" | "subscription";
  title: string;
  message: string;
  timestamp: string;
  icon: React.ReactNode;
  isRead: boolean;
}

export interface ActivityItem {
  id: string;
  type: "invite" | "subscription" | "upload";
  user: { name: string; avatar: string };
  action: string;
  timestamp: string;
  isOnline?: boolean;
  status?: "active" | "away" | "busy";
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
  status?: "active" | "away" | "busy";
}

export interface NavigationSubItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  icon: any;
  href: string;
  active?: boolean;
  hasSubItems?: boolean;
  subItems?: NavigationSubItem[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}
