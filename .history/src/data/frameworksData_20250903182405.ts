import type { Framework, FrameworkResource, FrameworkCategory } from '../types/frameworks';

// Mock Framework Resources Data
export const mockFrameworkResources: FrameworkResource[] = [
  // NIST Resources
  {
    id: 'nist-csf-guide-v1.1',
    frameworkId: 'nist-csf',
    type: 'document',
    title: 'NIST Cybersecurity Framework v1.1 Official Guide',
    description: 'Complete guide to implementing the NIST Cybersecurity Framework v1.1',
    format: 'pdf',
    size: '2.5 MB',
    downloadUrl: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf',
    externalUrl: 'https://www.nist.gov/cyberframework/framework',
    tags: ['cybersecurity', 'implementation', 'guide'],
    createdAt: new Date('2024-01-15'),
    popularity: 95
  },
  {
    id: 'nist-csf-guide-v2.0',
    frameworkId: 'nist-csf',
    type: 'document',
    title: 'NIST Cybersecurity Framework v2.0 Official Guide',
    description: 'Latest version of the NIST Cybersecurity Framework with enhanced guidance and updated controls',
    format: 'pdf',
    size: '3.2 MB',
    downloadUrl: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    externalUrl: 'https://www.nist.gov/cyberframework/framework-20',
    tags: ['cybersecurity', 'implementation', 'guide', 'v2.0', 'latest'],
    createdAt: new Date('2024-02-26'),
    popularity: 98
  },
  {
    id: 'nist-csf-checklist',
    frameworkId: 'nist-csf',
    type: 'checklist',
    title: 'NIST CSF Implementation Checklist',
    description: 'Step-by-step checklist for NIST CSF implementation',
    format: 'xlsx',
    size: '450 KB',
    downloadUrl: 'https://www.nist.gov/document/frameworkforimprovingcriticalinfrastructurecybersecurityxlsx',
    externalUrl: 'https://www.nist.gov/cyberframework/framework',
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
    externalUrl: 'https://www.youtube.com/watch?v=O5CrSnRk4QM',
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
  },
  // COBIT Resources
  {
    id: 'cobit-2019-guide',
    frameworkId: 'cobit-2019',
    type: 'document',
    title: 'COBIT 2019 Framework Guide',
    description: 'Complete guide to COBIT 2019 for governance and management of enterprise IT',
    format: 'pdf',
    size: '3.2 MB',
    downloadUrl: '/resources/cobit-2019-guide.pdf',
    tags: ['governance', 'it-management', 'cobit'],
    createdAt: new Date('2024-01-20'),
    popularity: 85
  },
  {
    id: 'cobit-implementation-template',
    frameworkId: 'cobit-2019',
    type: 'template',
    title: 'COBIT Implementation Roadmap Template',
    description: 'Step-by-step template for implementing COBIT in your organization',
    format: 'xlsx',
    size: '650 KB',
    downloadUrl: '/resources/cobit-implementation-template.xlsx',
    tags: ['implementation', 'roadmap', 'template'],
    createdAt: new Date('2024-02-05'),
    popularity: 78
  },
  {
    id: 'cobit-assessment-checklist',
    frameworkId: 'cobit-2019',
    type: 'checklist',
    title: 'COBIT Maturity Assessment Checklist',
    description: 'Comprehensive checklist for assessing COBIT process maturity',
    format: 'xlsx',
    size: '520 KB',
    downloadUrl: '/resources/cobit-maturity-checklist.xlsx',
    tags: ['assessment', 'maturity', 'checklist'],
    createdAt: new Date('2024-01-30'),
    popularity: 82
  },
  {
    id: 'cobit-training-video',
    frameworkId: 'cobit-2019',
    type: 'video',
    title: 'COBIT 2019 Foundation Training',
    description: 'Comprehensive training video series on COBIT 2019 fundamentals',
    format: 'mp4',
    size: '2.1 GB',
    externalUrl: 'https://youtube.com/watch?v=cobit-2019-training',
    tags: ['training', 'foundation', 'video'],
    createdAt: new Date('2024-01-18'),
    popularity: 74
  },
  // COSO Resources
  {
    id: 'coso-eic-guide',
    frameworkId: 'coso-eic',
    type: 'document',
    title: 'COSO Enterprise Risk Management Framework Guide',
    description: 'Comprehensive guide to implementing COSO ERM framework for enterprise risk management',
    format: 'pdf',
    size: '2.8 MB',
    downloadUrl: '/resources/coso-erm-guide.pdf',
    tags: ['enterprise-risk', 'risk-management', 'coso'],
    createdAt: new Date('2024-01-22'),
    popularity: 89
  },
  {
    id: 'coso-internal-control-template',
    frameworkId: 'coso-eic',
    type: 'template',
    title: 'COSO Internal Control Assessment Template',
    description: 'Template for assessing internal controls using COSO framework',
    format: 'xlsx',
    size: '720 KB',
    downloadUrl: '/resources/coso-internal-control-template.xlsx',
    tags: ['internal-control', 'assessment', 'template'],
    createdAt: new Date('2024-02-08'),
    popularity: 83
  },
  {
    id: 'coso-risk-assessment-checklist',
    frameworkId: 'coso-eic',
    type: 'checklist',
    title: 'COSO Risk Assessment Checklist',
    description: 'Comprehensive checklist for conducting risk assessments per COSO guidelines',
    format: 'xlsx',
    size: '580 KB',
    downloadUrl: '/resources/coso-risk-assessment-checklist.xlsx',
    tags: ['risk-assessment', 'checklist', 'coso'],
    createdAt: new Date('2024-02-01'),
    popularity: 81
  },
  // IRM Resources
  {
    id: 'irm-standard-guide',
    frameworkId: 'irm-standard',
    type: 'document',
    title: 'IRM Risk Management Standard Guide',
    description: 'Institute of Risk Management standard for professional risk management practices',
    format: 'pdf',
    size: '1.9 MB',
    downloadUrl: '/resources/irm-standard-guide.pdf',
    tags: ['risk-management', 'irm', 'professional-standard'],
    createdAt: new Date('2024-01-28'),
    popularity: 77
  },
  {
    id: 'irm-implementation-template',
    frameworkId: 'irm-standard',
    type: 'template',
    title: 'IRM Implementation Toolkit',
    description: 'Complete toolkit for implementing IRM risk management standards',
    format: 'zip',
    size: '3.2 MB',
    downloadUrl: '/resources/irm-implementation-toolkit.zip',
    tags: ['implementation', 'toolkit', 'irm'],
    createdAt: new Date('2024-02-10'),
    popularity: 75
  },
  {
    id: 'irm-training-video',
    frameworkId: 'irm-standard',
    type: 'video',
    title: 'IRM Professional Risk Management Training',
    description: 'Professional development video series for risk management practitioners',
    format: 'mp4',
    size: '1.8 GB',
    externalUrl: 'https://youtube.com/watch?v=irm-training-series',
    tags: ['training', 'professional-development', 'video'],
    createdAt: new Date('2024-01-25'),
    popularity: 72
  },
  // IIA CIA Resources
  {
    id: 'iia-cia-study-guide',
    frameworkId: 'iia-cia',
    type: 'guide',
    title: 'IIA CIA Certification Study Guide',
    description: 'Comprehensive study guide for Certified Internal Auditor certification',
    format: 'pdf',
    size: '4.1 MB',
    downloadUrl: '/resources/iia-cia-study-guide.pdf',
    tags: ['certification', 'internal-audit', 'study-guide'],
    createdAt: new Date('2024-01-15'),
    popularity: 92
  },
  {
    id: 'iia-audit-program-templates',
    frameworkId: 'iia-cia',
    type: 'template',
    title: 'IIA Internal Audit Program Templates',
    description: 'Collection of audit program templates following IIA standards',
    format: 'zip',
    size: '2.3 MB',
    downloadUrl: '/resources/iia-audit-programs.zip',
    tags: ['audit-programs', 'templates', 'iia'],
    createdAt: new Date('2024-02-05'),
    popularity: 86
  },
  {
    id: 'iia-ippf-checklist',
    frameworkId: 'iia-cia',
    type: 'checklist',
    title: 'IIA IPPF Compliance Checklist',
    description: 'International Professional Practices Framework compliance checklist',
    format: 'xlsx',
    size: '450 KB',
    downloadUrl: '/resources/iia-ippf-checklist.xlsx',
    tags: ['ippf', 'compliance', 'checklist'],
    createdAt: new Date('2024-01-30'),
    popularity: 84
  },
  {
    id: 'iia-training-podcast',
    frameworkId: 'iia-cia',
    type: 'podcast',
    title: 'IIA Internal Audit Insights Podcast Series',
    description: 'Professional insights and best practices in internal auditing',
    format: 'mp3',
    size: '850 MB',
    externalUrl: 'https://podcast.theiia.org/internal-audit-insights',
    tags: ['podcast', 'insights', 'best-practices'],
    createdAt: new Date('2024-01-20'),
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
  },
  {
    id: 'cobit-2019',
    name: 'COBIT 2019',
    category: 'governance',
    description: 'ISACA framework for governance and management of enterprise IT, providing comprehensive guidance for managing and governing enterprise IT',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2019-04-09'),
    officialUrl: 'https://www.isaca.org/resources/cobit',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'cobit-2019')
  },
  {
    id: 'coso-eic',
    name: 'COSO Enterprise Risk Management',
    category: 'risk',
    description: 'Committee of Sponsoring Organizations framework for enterprise risk management and internal control over financial reporting',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2017-09-06'),
    officialUrl: 'https://www.coso.org/Pages/erm.aspx',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'coso-eic')
  },
  {
    id: 'irm-standard',
    name: 'IRM Risk Management Standard',
    category: 'risk',
    description: 'Institute of Risk Management professional standard providing guidance on risk management principles and practices',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2018-11-01'),
    officialUrl: 'https://www.theirm.org/what-we-do/professional-standards/',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'irm-standard')
  },
  {
    id: 'iia-cia',
    name: 'IIA Standards & CIA Resources',
    category: 'governance',
    description: 'Institute of Internal Auditors International Professional Practices Framework and Certified Internal Auditor resources',
    region: 'global',
    status: 'active',
    lastUpdated: new Date('2024-01-01'),
    officialUrl: 'https://www.theiia.org/en/standards/',
    resources: mockFrameworkResources.filter(r => r.frameworkId === 'iia-cia')
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
