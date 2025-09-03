import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  LinearProgress,
  Avatar
} from '@mui/material';
import {
  TrendingUp,
  Warning,
  CheckCircle,
  Error,
  Assessment,
  Security,
  Gavel,
  Description
} from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { mockDashboard, mockRisks, mockCompliance, mockAudits } from '../data/mockData';

const Dashboard = () => {
  const theme = useTheme();

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];

  const riskStatusData = Object.entries(mockDashboard.riskSummary.byStatus).map(([status, count]) => ({
    name: status.replace('_', ' ').toUpperCase(),
    value: count
  }));

  const riskSeverityData = Object.entries(mockDashboard.riskSummary.bySeverity).map(([severity, count]) => ({
    name: severity.toUpperCase(),
    value: count
  }));

  const complianceData = [
    { name: 'Compliant', value: mockDashboard.complianceSummary.compliant, color: '#4caf50' },
    { name: 'Non-Compliant', value: mockDashboard.complianceSummary.nonCompliant, color: '#f44336' },
    { name: 'In Progress', value: mockDashboard.complianceSummary.inProgress, color: '#ff9800' }
  ];

  const monthlyTrends = [
    { month: 'Jan', risks: 12, compliance: 85, audits: 5 },
    { month: 'Feb', risks: 15, compliance: 88, audits: 3 },
    { month: 'Mar', risks: 10, compliance: 92, audits: 7 },
    { month: 'Apr', risks: 8, compliance: 94, audits: 4 },
    { month: 'May', risks: 11, compliance: 91, audits: 6 },
    { month: 'Jun', risks: 9, compliance: 96, audits: 2 },
  ];

  const StatCard = ({ title, value, subtitle, icon, color, trend }: any) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>
            {icon}
          </Avatar>
          {trend && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: trend > 0 ? 'success.main' : 'error.main' }}>
              <TrendingUp sx={{ fontSize: 20, mr: 0.5 }} />
              <Typography variant="body2">{Math.abs(trend)}%</Typography>
            </Box>
          )}
        </Box>
        <Typography variant="h4" component="div" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  const recentRisks = mockRisks.slice(0, 5).map(risk => ({
    ...risk,
    severityColor: 
      risk.severity === 'critical' ? '#f44336' :
      risk.severity === 'high' ? '#ff9800' :
      risk.severity === 'medium' ? '#ffeb3b' : '#4caf50'
  }));

  const upcomingCompliance = mockCompliance.filter(req => 
    new Date(req.nextReviewDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        GRC Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Risks"
            value={mockDashboard.riskSummary.total}
            subtitle="Active risk items"
            icon={<Warning />}
            color={theme.palette.warning.main}
            trend={-5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Compliance Rate"
            value={`${Math.round((mockDashboard.complianceSummary.compliant / mockDashboard.complianceSummary.total) * 100)}%`}
            subtitle="Overall compliance"
            icon={<Security />}
            color={theme.palette.success.main}
            trend={3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Audits"
            value={mockDashboard.auditSummary.active}
            subtitle="Ongoing audits"
            icon={<Gavel />}
            color={theme.palette.info.main}
            trend={0}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Policies"
            value={mockDashboard.policySummary.active}
            subtitle="Current policies"
            icon={<Description />}
            color={theme.palette.primary.main}
            trend={2}
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Risk Distribution by Status</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskStatusData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Compliance Status</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={(entry: any) => entry.color} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Monthly Trends */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Monthly Trends</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="risks" stroke="#ff7c7c" name="Risks" />
                <Line type="monotone" dataKey="compliance" stroke="#82ca9d" name="Compliance %" />
                <Line type="monotone" dataKey="audits" stroke="#8884d8" name="Audits" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activities and Upcoming Tasks */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Recent High-Priority Risks</Typography>
            <List>
              {recentRisks.map((risk) => (
                <ListItem key={risk.id} sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle2">{risk.title}</Typography>
                        <Chip 
                          label={risk.severity} 
                          size="small" 
                          sx={{ bgcolor: risk.severityColor, color: 'white' }}
                        />
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {risk.description}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Owner: {risk.owner}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>Upcoming Compliance Reviews</Typography>
            <List>
              {upcomingCompliance.map((item) => (
                <ListItem key={item.id} sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle2">{item.title}</Typography>
                        <Chip 
                          label={item.priority} 
                          size="small" 
                          color={item.priority === 'critical' ? 'error' : item.priority === 'high' ? 'warning' : 'default'}
                        />
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {item.framework} • Due: {new Date(item.nextReviewDate).toLocaleDateString()}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Progress based on status
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={
                              item.status === 'completed' ? 100 :
                              item.status === 'in_progress' ? 60 :
                              item.status === 'not_started' ? 0 : 30
                            }
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
