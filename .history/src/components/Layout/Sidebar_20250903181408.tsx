import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Collapse
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Security as SecurityIcon,
  Gavel as AuditIcon,
  Description as PolicyIcon,
  BarChart as ReportsIcon,
  ExpandLess,
  ExpandMore,
  Warning as RiskIcon,
  MenuBook as FrameworkIcon
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    id: 'risks',
    label: 'Risk Management',
    path: '/risks',
    icon: <RiskIcon />
  },
  {
    id: 'compliance',
    label: 'Compliance',
    path: '/compliance',
    icon: <SecurityIcon />
  },
  {
    id: 'audits',
    label: 'Audit Management',
    path: '/audits',
    icon: <AuditIcon />
  },
  {
    id: 'policies',
    label: 'Policy Management',
    path: '/policies',
    icon: <PolicyIcon />
  },
  {
    id: 'frameworks',
    label: 'Framework Resources',
    path: '/frameworks',
    icon: <FrameworkIcon />
  },
  {
    id: 'reports',
    label: 'Reports & Analytics',
    path: '/reports',
    icon: <ReportsIcon />
  }
];

const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const drawerWidth = 240;
  const collapsedWidth = 72;

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onToggle();
    }
  };

  const handleExpandClick = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path || 
           (path === '/dashboard' && location.pathname === '/');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            display: isMobile || open ? 'block' : 'none'
          }}
        >
          EasyGRC
        </Typography>
        {!isMobile && !open && (
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main
            }}
          >
            GRC
          </Typography>
        )}
      </Box>
      
      <Divider />
      
      <List sx={{ flexGrow: 1, px: 1 }}>
        {navigationItems.map((item) => (
          <Box key={item.id}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => item.children ? handleExpandClick(item.id) : handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  backgroundColor: isActiveRoute(item.path) ? theme.palette.primary.light : 'transparent',
                  color: isActiveRoute(item.path) ? 'white' : 'inherit',
                  '&:hover': {
                    backgroundColor: isActiveRoute(item.path) 
                      ? theme.palette.primary.main 
                      : theme.palette.action.hover,
                  },
                  justifyContent: isMobile || open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isMobile || open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: isActiveRoute(item.path) ? 'white' : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  sx={{ display: isMobile || open ? 'block' : 'none' }}
                />
                {item.children && (isMobile || open) && (
                  expandedItems.includes(item.id) ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            
            {item.children && (
              <Collapse in={expandedItems.includes(item.id)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.id} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        onClick={() => handleNavigation(child.path)}
                        sx={{
                          borderRadius: 2,
                          backgroundColor: isActiveRoute(child.path) ? theme.palette.primary.light : 'transparent',
                          color: isActiveRoute(child.path) ? 'white' : 'inherit',
                          '&:hover': {
                            backgroundColor: isActiveRoute(child.path) 
                              ? theme.palette.primary.main 
                              : theme.palette.action.hover,
                          },
                          pl: 4,
                          ml: 2,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            justifyContent: 'center',
                            color: isActiveRoute(child.path) ? 'white' : 'inherit',
                          }}
                        >
                          {child.icon}
                        </ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>

      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography 
          variant="caption" 
          color="text.secondary"
          sx={{ display: isMobile || open ? 'block' : 'none' }}
        >
          Version 1.0.0
        </Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ height: theme.mixins.toolbar.minHeight }} />
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
