import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { useState } from 'react';

import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import Dashboard from './pages/Dashboard';
import RiskManagement from './pages/RiskManagement';
import Compliance from './pages/Compliance';
import AuditManagement from './pages/AuditManagement';
import PolicyManagement from './pages/PolicyManagement';
import Reports from './pages/Reports';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar open={sidebarOpen} onToggle={handleSidebarToggle} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <TopBar onMenuClick={handleSidebarToggle} />
            <Box 
              component="main" 
              sx={{ 
                flexGrow: 1, 
                p: { xs: 2, sm: 3 },
                mt: { xs: 7, sm: 8 },
                ml: { md: sidebarOpen ? '240px' : '72px' },
                transition: theme.transitions.create(['margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/risks" element={<RiskManagement />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/audits" element={<AuditManagement />} />
                <Route path="/policies" element={<PolicyManagement />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
