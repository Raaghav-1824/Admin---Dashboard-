import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "../../lib/utils";
import { donutData } from "../../data";

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

export const TotalSalesChart = () => {
  return (
    <Card className="md:col-span-4" style={{ backgroundColor: 'var(--color-brand-main)' }}>
      <CardHeader title="Total Sales" />
      <div>
        <div className="h-40 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={68}
                cornerRadius={30}
              >
                {donutData.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [
                  `(${(
                    (Number(value) /
                      donutData.reduce(
                        (sum, item) => sum + item.value,
                        0
                      )) *
                    100
                  ).toFixed(1)}%)`,
                ]}
                contentStyle={{
                  backgroundColor: "var(--color-primary-overlay)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "4px 8px",
                }}
                itemStyle={{
                  color: "var(--color-text-white)",
                  fontSize: "14px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
                labelStyle={{ display: "none" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="py-6 px-5">
          {donutData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-normal" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                {formatCurrency(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
