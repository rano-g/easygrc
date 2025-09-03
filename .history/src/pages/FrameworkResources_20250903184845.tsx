import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Divider,
  Paper,
  Stack,
  Badge
} from '@mui/material';
import {
  Search as SearchIcon,
  Download as DownloadIcon,
  OpenInNew as OpenInNewIcon,
  PlayArrow as PlayArrowIcon,
  Description as DocumentIcon,
  VideoLibrary as VideoIcon,
  Headset as PodcastIcon,
  ChecklistRtl as ChecklistIcon,
  FileCopy as TemplateIcon,
  MenuBook as GuideIcon,
  Security as SecurityIcon,
  PrivacyTip as PrivacyIcon,
  AccountBalance as BankingIcon,
  Gavel as GovernanceIcon,
  Warning as RiskIcon,
  Computer as TechIcon,
  Star as PopularIcon
} from '@mui/icons-material';
import { useState, useMemo } from 'react';
import { mockFrameworks } from '../data/frameworksData';
import { ChecklistGenerator } from '../services/checklistGenerator';
import type { Framework, FrameworkResource } from '../types/frameworks';

const FrameworkResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  // Filter frameworks based on search and filters
  const filteredFrameworks = useMemo(() => {
    return mockFrameworks.filter(framework => {
      const matchesSearch = framework.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           framework.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || framework.category === selectedCategory;
      const matchesRegion = selectedRegion === 'all' || framework.region === selectedRegion;
      
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchQuery, selectedCategory, selectedRegion]);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document': return <DocumentIcon />;
      case 'video': return <VideoIcon />;
      case 'podcast': return <PodcastIcon />;
      case 'checklist': return <ChecklistIcon />;
      case 'template': return <TemplateIcon />;
      case 'guide': return <GuideIcon />;
      default: return <DocumentIcon />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <SecurityIcon />;
      case 'privacy': return <PrivacyIcon />;
      case 'financial': return <BankingIcon />;
      case 'governance': return <GovernanceIcon />;
      case 'risk': return <RiskIcon />;
      case 'technology': return <TechIcon />;
      default: return <SecurityIcon />;
    }
  };

  const getRegionFlag = (region: string) => {
    const flags = {
      'global': '🌍',
      'us': '🇺🇸',
      'eu': '🇪🇺',
      'uk': '🇬🇧',
      'india': '🇮🇳',
      'asia': '🌏',
      'other': '🏳️'
    };
    return flags[region as keyof typeof flags] || '🏳️';
  };

  const handleResourceDownload = (resource: FrameworkResource) => {
    if (resource.downloadUrl) {
      // Open download link in new tab/window
      window.open(resource.downloadUrl, '_blank');
      console.log(`Downloading: ${resource.title} from ${resource.downloadUrl}`);
    } else if (resource.externalUrl) {
      window.open(resource.externalUrl, '_blank');
      console.log(`Opening external resource: ${resource.title} at ${resource.externalUrl}`);
    }
  };

  const renderFrameworkCard = (framework: Framework) => (
    <Card 
      key={framework.id} 
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 }
      }}
      onClick={() => setSelectedFramework(framework)}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            {getCategoryIcon(framework.category)}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h3" noWrap>
              {framework.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">{getRegionFlag(framework.region)}</Typography>
              <Chip 
                label={framework.category} 
                size="small" 
                color="primary" 
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {framework.description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={`${framework.resources.length} resources`}
            size="small"
            color="secondary"
          />
          <Typography variant="caption" color="text.secondary">
            Updated: {framework.lastUpdated.toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions>
        <Button size="small" onClick={(e) => { e.stopPropagation(); setSelectedFramework(framework); }}>
          View Resources
        </Button>
        {framework.officialUrl && (
          <Button 
            size="small" 
            endIcon={<OpenInNewIcon />}
            onClick={(e) => { e.stopPropagation(); window.open(framework.officialUrl, '_blank'); }}
          >
            Official Site
          </Button>
        )}
      </CardActions>
    </Card>
  );

  const renderResourcesList = (resources: FrameworkResource[]) => (
    <List>
      {resources.map((resource) => (
        <ListItem key={resource.id} divider>
          <ListItemIcon>
            {getResourceIcon(resource.type)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1">{resource.title}</Typography>
                <Badge badgeContent={resource.popularity} color="primary" max={100}>
                  <PopularIcon fontSize="small" color="action" />
                </Badge>
              </Box>
            }
            secondary={
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Chip label={resource.type} size="small" />
                  <Chip label={resource.format.toUpperCase()} size="small" variant="outlined" />
                  {resource.size && <Chip label={resource.size} size="small" variant="outlined" />}
                  {resource.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            }
          />
          <ListItemSecondaryAction>
            <IconButton 
              edge="end" 
              onClick={() => handleResourceDownload(resource)}
              color="primary"
            >
              {resource.type === 'video' ? <PlayArrowIcon /> : <DownloadIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Framework Resources Library
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Access comprehensive resources for major compliance, governance, and risk frameworks including 
        official documents, implementation guides, checklists, templates, training videos, and more.
      </Typography>

      {/* Search and Filters */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            fullWidth
            placeholder="Search frameworks, regulations, or standards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              label="Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="security">Security</MenuItem>
              <MenuItem value="privacy">Privacy</MenuItem>
              <MenuItem value="financial">Financial</MenuItem>
              <MenuItem value="governance">Governance</MenuItem>
              <MenuItem value="risk">Risk</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Region</InputLabel>
            <Select
              value={selectedRegion}
              label="Region"
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <MenuItem value="all">All Regions</MenuItem>
              <MenuItem value="global">🌍 Global</MenuItem>
              <MenuItem value="us">🇺🇸 United States</MenuItem>
              <MenuItem value="eu">🇪🇺 European Union</MenuItem>
              <MenuItem value="uk">🇬🇧 United Kingdom</MenuItem>
              <MenuItem value="india">🇮🇳 India</MenuItem>
              <MenuItem value="asia">🌏 Asia</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {selectedFramework ? (
        // Framework Detail View
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Button 
              onClick={() => setSelectedFramework(null)}
              sx={{ mr: 2 }}
            >
              ← Back to Library
            </Button>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
              {getCategoryIcon(selectedFramework.category)}
            </Avatar>
            <Box>
              <Typography variant="h5" component="h2">
                {selectedFramework.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Chip label={selectedFramework.category} color="primary" size="small" />
                <Chip label={`${getRegionFlag(selectedFramework.region)} ${selectedFramework.region}`} size="small" />
                <Chip label={selectedFramework.status} color="success" size="small" />
              </Box>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {selectedFramework.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Available Resources ({selectedFramework.resources.length})
          </Typography>

          {selectedFramework.resources.length > 0 ? (
            renderResourcesList(selectedFramework.resources)
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                Resources for this framework are being prepared. Please check back soon or visit the official website.
              </Typography>
              {selectedFramework.officialUrl && (
                <Button 
                  variant="outlined" 
                  sx={{ mt: 2 }}
                  endIcon={<OpenInNewIcon />}
                  onClick={() => window.open(selectedFramework.officialUrl, '_blank')}
                >
                  Visit Official Website
                </Button>
              )}
            </Box>
          )}
        </Paper>
      ) : (
        // Framework Library Grid View
        <>
          <Typography variant="h6" gutterBottom>
            Available Frameworks ({filteredFrameworks.length})
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3
          }}>
            {filteredFrameworks.map((framework) => (
              <Box key={framework.id}>
                {renderFrameworkCard(framework)}
              </Box>
            ))}
          </Box>

          {filteredFrameworks.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No frameworks found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search criteria or filters
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default FrameworkResources;
