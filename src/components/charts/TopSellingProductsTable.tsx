import React from "react";
import { formatCurrency, formatNumber } from "../../lib/utils";
import { products } from "../../data";

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

export const TopSellingProductsTable = () => {
  return (
    <Card className="md:col-span-8" style={{ backgroundColor: 'var(--color-brand-main)' }}>
      <CardHeader title="Top Selling Products" />

      <div className="overflow-x-auto pt-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left" style={{ color: 'var(--color-text-muted)' }}>
              <th className="py-3 font-medium">Name</th>
              <th className="py-3 font-medium">Price</th>
              <th className="py-3 font-medium">Quantity</th>
              <th className="py-3 font-medium">Amount</th>
            </tr>
          </thead>

          <tbody className="border-t border-1">
            {products.map((p, idx) => (
              <tr
                key={p.name}
                className={
                  idx !== products.length - 1
                    ? "border-b"
                    : ""
                }
                style={{
                  borderColor: idx !== products.length - 1 ? 'var(--color-border-muted)' : 'transparent'
                }}
              >
                <td className="py-3 font-normal" style={{ color: 'var(--color-text-primary)' }}>
                  {p.name}
                </td>
                <td className="py-3 font-normal" style={{ color: 'var(--color-text-primary)' }}>
                  {formatCurrency(p.price)}
                </td>
                <td className="py-3 font-normal" style={{ color: 'var(--color-text-primary)' }}>
                  {formatNumber(p.qty)}
                </td>
                <td className="py-3 font-normal" style={{ color: 'var(--color-text-primary)' }}>
                  {formatCurrency(p.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
