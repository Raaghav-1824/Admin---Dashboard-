import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "../../lib/utils";
import { lineData } from "../../data";

const Card: React.FC<React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>> = ({
  className,
  children,
  style
}) => (
  <div className={`card rounded-2xl px-6 ${className ?? ""}`} style={style}>
    {children}
  </div>
);

const CardHeader: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string }>> = ({ 
  title, 
  subtitle, 
  children 
}) => (
  <div className="py-4">
    {title && <div className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{title}</div>}
    {subtitle && <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</div>}
    {children}
  </div>
);

export const RevenueChart = () => {
  return (
    <Card className="md:col-span-8" style={{ backgroundColor: 'var(--color-brand-main)' }}>
      <div className="flex items-center">
        <CardHeader title="Revenue" />
        <div className="h-5 w-px mx-4" style={{ backgroundColor: 'var(--color-border-primary)' }} />
        <div
          className="flex items-center gap-4"
          style={{
            fontFamily: "Inter",
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "0%",
            fontWeight: 400,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full w-1.5 h-1.5" style={{ backgroundColor: 'var(--color-text-primary)' }} />
            <span style={{ color: "var(--color-text-secondary)" }}>Current Week</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              {formatCurrency(58211)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full w-1.5 h-1.5" style={{ backgroundColor: 'var(--color-chart-line-secondary)' }} />
            <span style={{ color: "var(--color-text-secondary)" }}>Previous Week</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              {formatCurrency(68768)}
            </span>
          </div>
        </div>
      </div>

      <div className="h-80 px-2 sm:px-4 flex items-center justify-center pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData} margin={{ left: -20, right: 10 }}>
            <XAxis
              dataKey="name"
              stroke="var(--color-chart-axis)"
              tickLine={false}
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
            <Tooltip />
            <Line
              type="monotone"
              dataKey="current"
              stroke="var(--color-chart-line-primary)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="var(--color-chart-line-secondary)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
