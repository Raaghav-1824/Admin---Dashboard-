import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { barData } from "../../data";

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

export const ProjectionsChart = () => {
  return (
    <div className="md:col-span-6">
      <Card className="min-h-[280px]" style={{ backgroundColor: 'var(--color-brand-main)' }}>
        <CardHeader title="Projections vs Actuals" />
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-chart-grid)" />
              <XAxis
                tickLine={false}
                dataKey="name"
                stroke="var(--color-chart-axis)"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke="var(--color-chart-axis)"
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}M`}
                tick={{ fontSize: 12 }}
                tickMargin={10}
              />
              <Tooltip cursor={false} />
              <Bar
                barSize={20}
                dataKey="actuals"
                stackId="a"
                fill="var(--color-chart-fill-primary)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="projections"
                stackId="a"
                fill="var(--color-chart-fill-secondary)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
