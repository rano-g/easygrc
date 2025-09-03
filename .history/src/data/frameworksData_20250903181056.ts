import type { Framework, FrameworkResource, FrameworkCategory } from '../types/frameworks';

// Mock Framework Resources Data
export const mockFrameworkResources: FrameworkResource[] = [
  // NIST Resources
  {
    id: 'nist-csf-guide',
    frameworkId: 'nist-csf',
    type: 'document',
    title: 'NIST Cybersecurity Framework v1.1 Official Guide',
    description: 'Complete guide to implementing the NIST Cybersecurity Framework',
    format: 'pdf',
    size: '2.5 MB',
    downloadUrl: '/resources/nist-csf-guide.pdf',
    tags: ['cybersecurity', 'implementation', 'guide'],
    createdAt: new Date('2024-01-15'),
    popularity: 95
  },
  {
    id: 'nist-csf-checklist',
    frameworkId: 'nist-csf',
    type: 'checklist',
    title: 'NIST CSF Implementation Checklist',
    description: 'Step-by-step checklist for NIST CSF implementation',
    format: 'xlsx',
    size: '450 KB',
    downloadUrl: '/resources/nist-csf-checklist.xlsx',
    tags: ['checklist', 'implementation'],
    createdAt: new Date('2024-02-01'),
    popularity: 88
  },
  {
    id: 'nist-csf-video',
    frameworkId: 'nist-csf',
    type: 'video',
    title: 'NIST CSF Overview and Implementation',
    description: 'Comprehensive video series on NIST Cybersecurity Framework',
    format: 'mp4',
    size: '1.2 GB',
    externalUrl: 'https://youtube.com/watch?v=nist-csf-overview',
    tags: ['training', 'overview'],
    createdAt: new Date('2024-01-10'),
    popularity: 76
  },
  // GDPR Resources
  {
    id: 'gdpr-compliance-template',
    frameworkId: 'gdpr',
    type: 'template',
    title: 'GDPR Compliance Assessment Template',
    description: 'Complete template for GDPR compliance assessment and gap analysis',
    format: 'docx',
    size: '1.8 MB',
    downloadUrl: '/resources/gdpr-compliance-template.docx',
    tags: ['gdpr', 'compliance', 'assessment'],
    createdAt: new Date('2024-03-01'),
    popularity: 92
  },
  {
    id: 'gdpr-dpia-template',
    frameworkId: 'gdpr',
    type: 'template',
    title: 'Data Protection Impact Assessment (DPIA) Template',
    description: 'Ready-to-use DPIA template for GDPR compliance',
    format: 'docx',
    size: '850 KB',
    downloadUrl: '/resources/gdpr-dpia-template.docx',
    tags: ['dpia', 'privacy', 'template'],
    createdAt: new Date('2024-02-15'),
    popularity: 85
  },
  // ISO 27001 Resources
  {
    id: 'iso27001-implementation-guide',
    frameworkId: 'iso-27001',
    type: 'guide',
    title: 'ISO 27001:2022 Implementation Guide',
    description: 'Step-by-step guide for ISO 27001 implementation',
    format: 'pdf',
    size: '3.2 MB',
    downloadUrl: '/resources/iso27001-implementation-guide.pdf',
    tags: ['iso27001', 'implementation', 'security'],
    createdAt: new Date('2024-01-20'),
    popularity: 91
  },
  // PCI DSS Resources
  {
    id: 'pci-dss-checklist',
    frameworkId: 'pci-dss',
    type: 'checklist',
    title: 'PCI DSS v4.0 Compliance Checklist',
    description: 'Comprehensive checklist for PCI DSS v4.0 compliance',
    format: 'xlsx',
    size: '620 KB',
    downloadUrl: '/resources/pci-dss-checklist.xlsx',
    tags: ['pci-dss', 'payments', 'compliance'],
    createdAt: new Date('2024-02-10'),
    popularity: 87
  },
  // SOX Resources
  {
    id: 'sox-controls-template',
    frameworkId: 'sox',
    type: 'template',
    title: 'SOX Internal Controls Documentation Template',
    description: 'Template for documenting SOX internal controls',
    format: 'xlsx',
    size: '1.1 MB',
    downloadUrl: '/resources/sox-controls-template.xlsx',
    tags: ['sox', 'internal-controls', 'finance'],
    createdAt: new Date('2024-01-25'),
    popularity: 79
  }
];

export const mockFrameworks: Framework[] = [
  {
    id: 'nist-csf',
    name: 'NIST Cybersecurity Framework',
    category: 'security',
    description: 'A voluntary framework consisting of standards, guidelines, and practices to promote the protection of critical infrastructure',
    region: 'us',
    status: 'active',
    lastUpdated: new Date('2024-01-15'),
    officialUrl: 'https://www.nist.gov/cyberframework',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'nist-csf')
  },
  {
    id: 'gdpr',
    name: 'General Data Protection Regulation (GDPR)',
    category: 'privacy',
    description: 'EU regulation on data protection and privacy for individuals within the European Union and European Economic Area',
    region: 'eu',
    status: 'active',
    lastUpdated: new Date('2018-05-25'),
    officialUrl: 'https://gdpr-info.eu/',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'gdpr')
  },
  {
    id: 'iso-27001',
    name: 'ISO/IEC 27001:2022',
    category: 'security',
    description: 'International standard for information security management systems (ISMS)',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2022-10-25'),
    officialUrl: 'https://www.iso.org/standard/27001',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'iso-27001')
  },
  {
    id: 'pci-dss',
    name: 'PCI Data Security Standard (PCI DSS)',
    category: 'security',
    description: 'Information security standard for organizations that handle branded credit cards',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2024-03-31'),
    officialUrl: 'https://www.pcisecuritystandards.org/',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'pci-dss')
  },
  {
    id: 'sox',
    name: 'Sarbanes-Oxley Act (SOX)',
    category: 'financial',
    description: 'US federal law that set new or expanded requirements for all US public companies',
    region: 'us',
    status: 'active',
    lastUpdated: new Date('2002-07-30'),
    officialUrl: 'https://www.sec.gov/about/laws/soa2002.pdf',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'sox')
  },
  {
    id: 'nis2',
    name: 'Network and Information Security Directive 2 (NIS2)',
    category: 'security',
    description: 'EU directive on security of network and information systems',
    region: 'eu',
    status: 'active',
    lastUpdated: new Date('2022-12-14'),
    officialUrl: 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive',
    resources: []
  },
  {
    id: 'eu-ai-act',
    name: 'EU Artificial Intelligence Act',
    category: 'technology',
    description: 'EU regulation on artificial intelligence',
    region: 'eu',
    status: 'active',
    lastUpdated: new Date('2024-05-21'),
    officialUrl: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence',
    resources: []
  },
  {
    id: 'rbi-guidelines',
    name: 'RBI Cyber Security Guidelines',
    category: 'financial',
    description: 'Reserve Bank of India guidelines on cyber security framework',
    region: 'india',
    status: 'active',
    lastUpdated: new Date('2024-01-01'),
    officialUrl: 'https://www.rbi.org.in/',
    resources: []
  },
  {
    id: 'irdai-guidelines',
    name: 'IRDAI Guidelines',
    category: 'financial',
    description: 'Insurance Regulatory and Development Authority of India guidelines',
    region: 'india',
    status: 'active',
    lastUpdated: new Date('2024-01-01'),
    officialUrl: 'https://www.irdai.gov.in/',
    resources: []
  },
  {
    id: 'tprm',
    name: 'Third Party Risk Management (TPRM)',
    category: 'risk',
    description: 'Framework for managing risks associated with third-party vendors and suppliers',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2024-01-01'),
    officialUrl: '',
    resources: []
  }
];

export const mockFrameworkCategories: FrameworkCategory[] = [
  {
    id: 'security',
    name: 'Cybersecurity & Information Security',
    description: 'Frameworks focused on protecting information systems and data',
    icon: 'Security',
    frameworks: mockFrameworks.filter(f => f.category === 'security')
  },
  {
    id: 'privacy',
    name: 'Data Privacy & Protection',
    description: 'Regulations and frameworks for data privacy and protection',
    icon: 'PrivacyTip',
    frameworks: mockFrameworks.filter(f => f.category === 'privacy')
  },
  {
    id: 'financial',
    name: 'Financial Services & Banking',
    description: 'Regulatory frameworks for financial institutions',
    icon: 'AccountBalance',
    frameworks: mockFrameworks.filter(f => f.category === 'financial')
  },
  {
    id: 'governance',
    name: 'Corporate Governance',
    description: 'Frameworks for corporate governance and oversight',
    icon: 'Gavel',
    frameworks: mockFrameworks.filter(f => f.category === 'governance')
  },
  {
    id: 'risk',
    name: 'Risk Management',
    description: 'Risk management frameworks and methodologies',
    icon: 'Warning',
    frameworks: mockFrameworks.filter(f => f.category === 'risk')
  },
  {
    id: 'technology',
    name: 'Technology & Innovation',
    description: 'Frameworks for emerging technologies like AI, IoT, etc.',
    icon: 'Computer',
    frameworks: mockFrameworks.filter(f => f.category === 'technology')
  }
];
