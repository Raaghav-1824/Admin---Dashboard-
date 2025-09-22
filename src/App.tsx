import { useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import { OrderList } from './components/dashboard-components/OrderList'
import { useTheme } from './hooks/useTheme'
import { useThemeStore } from './store/theme'

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  useTheme()

  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/ecommerce" element={<Dashboard />} />
          <Route path="/projects" element={<Dashboard />} />
          <Route path="/courses" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/campaigns" element={<Dashboard />} />
          <Route path="/documents" element={<Dashboard />} />
          <Route path="/followers" element={<Dashboard />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App