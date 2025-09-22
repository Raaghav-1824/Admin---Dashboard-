import React from "react";
import MapChart from "../dashboard-components/Map";
import { locationData } from "../../data";

const Card: React.FC<React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>> = ({
  className,
  children,
  style
}) => (
  <div className={`card rounded-2xl p-6 space-y-4 ${className ?? ""}`} style={style}>
    {children}
  </div>
);

const CardHeader: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string }>> = ({ 
  title, 
  subtitle, 
  children 
}) => (
  <div className="">
    {title && <div className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{title}</div>}
    {subtitle && <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</div>}
    {children}
  </div>
);

export const RevenueByLocationMap = () => {
  return (
    <Card className="md:col-span-4" style={{ backgroundColor: 'var(--color-brand-main)' }}>
      <CardHeader title="Revenue by Location" />

      <div className="">
        <div className="h-40 w-full">
          <MapChart
            backgroundColor="var(--color-map-background)"
            landColor="var(--color-map-land)"
            borderColor="var(--color-map-border)"
          />
        </div>
      </div>

      <div className="space-y-4">
        {locationData.map((l) => (
          <div key={l.name} className="flex flex-col items-center gap-1">
            <div className="flex w-full items-center justify-between">
              <div className="flex-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>{l.name}</div>
              <div className="text-right text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {l.value}K
              </div>
            </div>

            <div className="w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-hover)' }}>
              <div
                className="h-full"
                style={{ backgroundColor: 'var(--color-chart-fill-primary)', width: `${Math.min(100, l.value)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
