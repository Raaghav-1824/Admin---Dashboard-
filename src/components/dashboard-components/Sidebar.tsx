import { useState } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useUIStore } from "../../store/ui";
import ProfileLogo from "../../assets/profile.png";
import { navigationItems, NavigationSubItem } from "../../data";

export function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Favorites: true,
    Dashboards: true,
    Pages: true,
  });

  const [expandedSubItems, setExpandedSubItems] = useState<
    Record<string, boolean>
  >({
    "User Profile": true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSubItems = (itemName: string) => {
    setExpandedSubItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const handleToggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <div
      className={cn(
        "border-r transition-all duration-300 h-full flex flex-col",
        sidebarOpen ? "w-16" : "w-64"
      )}
      style={{ backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border-primary)' }}
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6  rounded-full flex items-center justify-center">
                <img
                  src={ProfileLogo}
                  alt="User Profile"
                  className="h-6 w-6 rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                ByeWind
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto scrollbar-hide">
        {navigationItems.map((section) => (
          <div key={section.title} className="space-y-3">
            {/* Section Header */}
            {!sidebarOpen && (
              <div className="flex items-center justify-between">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                    {section.title}
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedSections[section.title] ? "rotate-90" : ""
                    )}
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </button>
              </div>
            )}

            {/* Section Items */}
            {expandedSections[section.title] && (
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.name}>
                    {/* Main Item */}
                    <a
                      href={item.href}
                      className={cn(
                        "relative flex items-center px-3 py-2 text-sm rounded-lg transition-colors duration-200",
                        item.active
                          ? ""
                          : ""
                      )}
                      style={{
                        backgroundColor: item.active ? 'var(--color-brand-main)' : 'transparent',
                        color: item.active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.backgroundColor = 'var(--color-brand-main)';
                          e.currentTarget.style.color = 'var(--color-text-primary)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'var(--color-text-secondary)';
                        }
                      }}
                    >
                      {/* Indicator for selected item */}
                      {item.active && (
                        <div
                          className="absolute left-0 top-2 w-1 h-4 rounded opacity-100"
                          style={{ backgroundColor: 'var(--color-text-primary)', transform: "rotate(0deg)" }}
                        />
                      )}
                      <item.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                      {!sidebarOpen && (
                        <div className="flex items-center justify-between w-full">
                          <span className="notification-sidebar-text">
                            {item.name}
                          </span>
                          {item.hasSubItems && (
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                expandedSubItems[item.name] ? "rotate-180" : ""
                              )}
                              style={{ color: 'var(--color-text-muted)' }}
                            />
                          )}
                        </div>
                      )}
                    </a>

                    {/* Sub Items */}
                    {item.hasSubItems &&
                      expandedSubItems[item.name] &&
                      !sidebarOpen && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.subItems?.map((subItem: NavigationSubItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center px-3 py-1.5 text-sm rounded transition-colors duration-200"
                              style={{ color: 'var(--color-text-muted)' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-text-primary)';
                                e.currentTarget.style.backgroundColor = 'var(--color-brand-main)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-text-muted)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: 'var(--color-border-secondary)' }} />
                              <span className="notification-sidebar-text">
                                {subItem.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
