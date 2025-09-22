import React from "react";
import Header from "../components/dashboard-components/Header";
import { Sidebar } from "../components/dashboard-components/Sidebar";
import { NotificationSidebar } from "../components/dashboard-components/NotificationSidebar";
import { useUIStore } from "../store/ui";

interface DashboardLayoutProps {
  children: React.ReactNode;
}



const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  
  const notificationOpen = useUIStore((state) =>  state.notificationOpen);
  return (
    <div className="flex h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto scrollbar-hide">{children}</main>
      </div>
      {notificationOpen && (
        <div className="w-80 border-l bg-white" style={{ borderColor: 'var(--color-border-primary)', backgroundColor: 'var(--color-bg-primary)' }}>
          <NotificationSidebar />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
