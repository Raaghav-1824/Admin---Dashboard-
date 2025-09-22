import {
  LayoutDashboard,
  ShoppingCart,
  FolderOpen,
  BookOpen,
  User,
  Users,
  PieChart,
  FileText,
  MessageCircle,
} from "lucide-react";
import { NavigationSection } from './types';

export const navigationItems: NavigationSection[] = [
  {
    title: "Favorites",
    items: [
      { name: "Overview", icon: LayoutDashboard, href: "/" },
      { name: "Projects", icon: FolderOpen, href: "/projects" },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { name: "Default", icon: PieChart, href: "/", active: true },
      { name: "eCommerce", icon: ShoppingCart, href: "/ecommerce" },
      { name: "Projects", icon: FolderOpen, href: "/projects" },
      { name: "Online Courses", icon: BookOpen, href: "/courses" },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        name: "User Profile",
        icon: User,
        href: "/profile",
        hasSubItems: true,
        subItems: [
          { name: "Overview", href: "/profile/overview" },
          { name: "Projects", href: "/profile/projects" },
          { name: "Campaigns", href: "/profile/campaigns" },
          { name: "Documents", href: "/profile/documents" },
          { name: "Followers", href: "/profile/followers" },
        ],
      },
      { name: "Account", icon: User, href: "/account" },
      { name: "Corporate", icon: Users, href: "/corporate" },
      { name: "Blog", icon: FileText, href: "/blog" },
      { name: "Social", icon: MessageCircle, href: "/social" },
    ],
  },
];
