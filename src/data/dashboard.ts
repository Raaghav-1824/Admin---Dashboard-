import { StatItem, ChartDataPoint, LocationDataPoint, Product, DonutDataPoint } from './types';

export const stats: StatItem[] = [
  {
    title: "Customers",
    value: "3,781",
    delta: "+11.01%",
    variant: "lightBlue",
  },
  {
    title: "Orders",
    value: "1,219",
    delta: "-0.03%",
    variant: "main",
  },
  {
    title: "Revenue",
    value: "$695",
    delta: "+15.03%",
    variant: "grayBlue",
  },
  {
    title: "Growth",
    value: "30.1%",
    delta: "+6.08%",
    variant: "main",
  },
];

// Bar chart data for projections vs actuals
export const barData: ChartDataPoint[] = [
  { name: "Jan", actuals: 16, projections: 20 },
  { name: "Feb", actuals: 20, projections: 25 },
  { name: "Mar", actuals: 17, projections: 21 },
  { name: "Apr", actuals: 22, projections: 27 },
  { name: "May", actuals: 14, projections: 18 },
  { name: "Jun", actuals: 20, projections: 25 },
];

// Line chart data for revenue
export const lineData: ChartDataPoint[] = [
  { name: "Jan", current: 12, previous: 7 },
  { name: "Feb", current: 9, previous: 16 },
  { name: "Mar", current: 10, previous: 14 },
  { name: "Apr", current: 14, previous: 12 },
  { name: "May", current: 18, previous: 16 },
  { name: "Jun", current: 16, previous: 22 },
];

// Location-based revenue data
export const locationData: LocationDataPoint[] = [
  { name: "New York", value: 72 },
  { name: "San Francisco", value: 39 },
  { name: "Sydney", value: 25 },
  { name: "Singapore", value: 61 },
];

// Top selling products
export const products: Product[] = [
  { name: "ASOS Ridley High Waist", price: 79.49, qty: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.5, qty: 37, amount: 4754.5 },
  { name: "Half Sleeve  Shirt", price: 33.99, qty: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, qty: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, qty: 64, amount: 1965.81 },
];

// Donut chart data for total sales
export const donutData: DonutDataPoint[] = [
  { name: "Direct", value: 300.56, color: "var(--color-data-direct)" },
  { name: "Affiliate", value: 135.18, color: "var(--color-data-affiliate)" },
  { name: "Sponsored", value: 154.02, color: "var(--color-data-sponsored)" },
  { name: "E-mail", value: 48.96, color: "var(--color-data-email)" },
];
