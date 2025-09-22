import React from "react";
import { Button } from "../../ui/button";
import { Star, Sun } from "lucide-react";
import { useUIStore } from "../../store/ui";
import { Drawer, SearchIcon, TimerIcon, NotificationIcon } from "./Icons";
import { useThemeStore } from "../../store/theme";


const Header = () => {
  const { toggleNotification, notificationOpen } = useUIStore();
  const handleToggleSidebar = useUIStore((state) => state.toggleSidebar);
  const { toggleTheme } = useThemeStore();

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 h-16 border-b" style={{ backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border-primary)' }}>
      <div className="flex items-center gap-3" style={{ color: 'var(--color-text-secondary)' }}>
        <Button variant="ghost" size="icon" className="h-8 w-8"  onClick={handleToggleSidebar}>
          <Drawer className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Star className="h-4 w-4" style={{ color: 'var(--color-text-primary)' }} />
        </Button>
        <nav className="hidden sm:flex items-center text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>Dashboards</span>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--color-text-primary)' }}>Default</span>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden md:block relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search"
            className="w-64 h-9 pl-9 pr-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              borderColor: 'var(--color-border-primary)', 
              backgroundColor: 'var(--color-bg-secondary)', 
              color: 'var(--color-text-primary)'
            }}
          />
        </div>

        <Button variant="ghost" size="icon" className="h-9 w-9"  onClick={toggleTheme}>
          <Sun className="h-5 w-5" style={{ color: 'var(--color-text-primary)' }} />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <TimerIcon className="h-5 w-5" style={{ color: 'var(--color-text-primary)' }} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 relative"
          onClick={toggleNotification}
        >
          <NotificationIcon className="h-5 w-5" style={{ color: 'var(--color-text-primary)' }} />
          {!notificationOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-status-error)' }}>
              2
            </span>
          )}
        </Button>

        <Button onClick={toggleNotification}>
          <Drawer className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
