import React from "react";
import * as d3 from "d3";
import { donutData } from "../../data";
import { formatCurrency } from "../../lib/utils";

type DonutDataPoint = {
  name: string;
  value: number;
  color: string;
};

interface DonutChartProps {
  data: DonutDataPoint[];
}

// Card components to match TotalSalesChart structure
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

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;

  // Outer arc with large corner radius (outward curves)
  const outerArcGen = d3.arc<d3.PieArcDatum<DonutDataPoint>>()
    .innerRadius(45)
    .outerRadius(68)
    .cornerRadius(20)  // Large outward corner radius
    .padAngle(0.02);

  // Inner arc with small corner radius (inward curves)
  const innerArcGen = d3.arc<d3.PieArcDatum<DonutDataPoint>>()
    .innerRadius(45)
    .outerRadius(68)
    .cornerRadius(-1)   // Small inward corner radius
    .padAngle(0.02);

  const pieGen = d3.pie<DonutDataPoint>()
    .value((d) => d.value)
    .sort(null);

  const arcs = pieGen(data);
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          const percentage = ((arc.data.value / total) * 100).toFixed(1);
          return (
            <g key={i}>
              {/* Outer arc with large outward corner radius */}
              <path
                d={outerArcGen(arc) ?? undefined}
                fill={arc.data.color}
                stroke="#fff"
                strokeWidth={2}
                style={{ cursor: 'pointer' }}
                // title={`${arc.data.name}: ${formatCurrency(arc.data.value)} (${percentage}%)`}
              />
              {/* Inner arc with small inward corner radius - creates the void effect */}
              <path
                d={innerArcGen(arc) ?? undefined}
                fill="transparent"
                stroke="#fff"
                strokeWidth={1}
                style={{ opacity: 0.3 }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

// Main component that matches TotalSalesChart structure
export const TotalSalesChart = () => {
  return (
    <Card className="md:col-span-4" style={{ backgroundColor: 'var(--color-brand-main)' }}>
      <CardHeader title="Total Sales" />
      <div>
        <div className="h-40 relative flex items-center justify-center">
          <DonutChart data={donutData} />
        </div>

        <div className="">
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

export default DonutChart;