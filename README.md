# Admin Dashboard

A modern, responsive admin dashboard built with React and TypeScript featuring advanced theming, data visualization, and order management capabilities.

## Features

### Core Functionality
- **Interactive Dashboard** - Revenue analytics, sales projections, and performance metrics
- **Order Management** - Complete order listing with search, filtering, and pagination
- **Data Visualization** - Multiple chart types including line charts, bar charts, pie charts, and interactive maps
- **Notification System** - Activity feed and contact management
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Advanced Features
- **Dark/Light Theme** - Dynamic theme switching with persistent user preferences
- **Real-time Search** - Instant filtering across order data
- **Interactive Charts** - Hover tooltips and responsive chart components
- **Collapsible Navigation** - Expandable sidebar with hierarchical menu structure
- **Bulk Operations** - Multi-select functionality for order management

## Technology Stack

### Frontend
- **React 19.1** - Modern React with latest features
- **TypeScript** - Type-safe development and better code maintainability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **CSS Custom Properties** - Dynamic theming system

### Data & State
- **Zustand** - Lightweight state management for UI and theme state
- **Recharts** - Responsive charting library for data visualization
- **React Router DOM** - Client-side routing and navigation

### UI Components
- **Lucide React** - Modern icon library
- **Class Variance Authority** - Type-safe component variants
- **React Leaflet** - Interactive map components

## Project Structure

```
src/
├── components/
│   ├── charts/                 # Data visualization components
│   │   ├── RevenueChart.tsx
│   │   ├── ProjectionsChart.tsx
│   │   ├── TotalSalesChart.tsx
│   │   └── TopSellingProductsTable.tsx
│   └── dashboard-components/   # UI components
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       ├── OrderList.tsx
│       └── NotificationSidebar.tsx
├── data/                       # Centralized mock data
│   ├── dashboard.ts
│   ├── orders.ts
│   ├── employees.ts
│   └── types.ts
├── store/                      # State management
│   ├── theme.ts
│   ├── ui.ts
│   └── notifications.ts
├── hooks/                      # Custom React hooks
├── layout/                     # Layout components
└── pages/                      # Page components
```

## Key Technical Decisions

### Theme System
Implemented using CSS custom properties with data-theme attributes for instant theme switching without component re-renders.

### State Management
Chose Zustand over Redux for its simplicity and minimal boilerplate while maintaining powerful state management capabilities.

### Component Architecture
Modular design with reusable components and clear separation of concerns for maintainability and scalability.

### Data Visualization
Recharts integration for responsive, interactive charts that adapt to theme changes and screen sizes.

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd admin-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production
```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- React.useMemo for optimized filtering operations
- React.useTransition for smooth UI updates
- Lazy loading and code splitting
- Optimized bundle size with tree shaking

## Future Enhancements

- API integration for real-time data
- Advanced filtering and sorting capabilities
- User authentication and role management
- Export functionality for reports
- Mobile application using React Native

## Contributing

This project follows standard React development practices with TypeScript for type safety and Tailwind CSS for styling. All components are modular and reusable.