import { OrderItem } from './types';

export const employeeData: OrderItem[] = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { text: "In Progress", color: "#8B5CF6", dot: "bg-purple-500" },
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { text: "Complete", color: "#10B981", dot: "bg-green-500" },
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { text: "Pending", color: "#3B82F6", dot: "bg-blue-500" },
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { text: "Approved", color: "#F59E0B", dot: "bg-yellow-500" },
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { text: "Rejected", color: "#6B7280", dot: "bg-gray-500" },
  },
];
