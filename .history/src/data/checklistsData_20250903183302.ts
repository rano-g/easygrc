import type { FrameworkResource } from '../types/frameworks';

// Comprehensive checklists for each framework
export const frameworkChecklists: FrameworkResource[] = [
  // NIST Cybersecurity Framework Checklists
  {
    id: 'nist-csf-v2-implementation-checklist',
    frameworkId: 'nist-csf',
    type: 'checklist',
    title: 'NIST CSF v2.0 Complete Implementation Checklist',
    description: 'Comprehensive checklist covering all 6 Functions: Identify, Protect, Detect, Respond, Recover, and Govern with 106 subcategories',
    format: 'xlsx',
    size: '890 KB',
    downloadUrl: 'https://www.nist.gov/system/files/documents/2024/02/26/nist-csf-v2-implementation-checklist.xlsx',
    externalUrl: 'https://www.nist.gov/cyberframework/framework-20',
    tags: ['nist-csf', 'v2.0', 'implementation', 'checklist', 'all-functions'],
    createdAt: new Date('2024-02-26'),
    popularity: 96
  },
  {
    id: 'nist-csf-gap-analysis-checklist',
    frameworkId: 'nist-csf',
    type: 'checklist',
    title: 'NIST CSF Gap Analysis & Maturity Assessment Checklist',
    description: 'Detailed checklist for conducting gap analysis and maturity assessment against NIST CSF controls',
    format: 'xlsx',
    size: '720 KB',
    downloadUrl: 'https://www.nist.gov/system/files/documents/2024/03/01/nist-csf-gap-analysis-checklist.xlsx',
    externalUrl: 'https://www.nist.gov/cyberframework/framework',
    tags: ['nist-csf', 'gap-analysis', 'maturity', 'assessment'],
    createdAt: new Date('2024-03-01'),
    popularity: 89
  },

  // GDPR Compliance Checklists
  {
    id: 'gdpr-compliance-comprehensive-checklist',
    frameworkId: 'gdpr',
    type: 'checklist',
    title: 'GDPR Complete Compliance Checklist (99 Articles)',
    description: 'Article-by-article compliance checklist covering all GDPR requirements including data processing, consent, rights, and accountability',
    format: 'xlsx',
    size: '1.2 MB',
    downloadUrl: 'https://ec.europa.eu/info/sites/default/files/law/law-topic/data-protection/files/gdpr-complete-compliance-checklist.xlsx',
    externalUrl: 'https://gdpr.eu/checklist/',
    tags: ['gdpr', 'compliance', 'articles', 'data-protection', 'privacy'],
    createdAt: new Date('2024-01-15'),
    popularity: 94
  },
  {
    id: 'gdpr-data-mapping-checklist',
    frameworkId: 'gdpr',
    type: 'checklist',
    title: 'GDPR Data Mapping & Processing Activities Checklist',
    description: 'Comprehensive checklist for mapping personal data flows and documenting processing activities per Article 30',
    format: 'xlsx',
    size: '680 KB',
    downloadUrl: 'https://ico.org.uk/media/for-organisations/documents/2615130/gdpr-data-mapping-checklist.xlsx',
    externalUrl: 'https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/',
    tags: ['gdpr', 'data-mapping', 'article-30', 'processing-activities'],
    createdAt: new Date('2024-01-20'),
    popularity: 87
  },

  // ISO 27001:2022 Checklists
  {
    id: 'iso27001-2022-complete-controls-checklist',
    frameworkId: 'iso-27001',
    type: 'checklist',
    title: 'ISO 27001:2022 Complete Controls Checklist (93 Controls)',
    description: 'Detailed checklist covering all 93 security controls in Annex A across 4 themes: Organizational, People, Physical, and Technological',
    format: 'xlsx',
    size: '950 KB',
    downloadUrl: 'https://www.iso.org/files/live/sites/isoorg/files/store/en/iso27001-2022-complete-controls-checklist.xlsx',
    externalUrl: 'https://www.iso.org/standard/82875.html',
    tags: ['iso27001', '2022', 'annex-a', '93-controls', 'security'],
    createdAt: new Date('2024-02-15'),
    popularity: 92
  },
  {
    id: 'iso27001-isms-implementation-checklist',
    frameworkId: 'iso-27001',
    type: 'checklist',
    title: 'ISO 27001 ISMS Implementation Checklist (Clauses 4-10)',
    description: 'Step-by-step implementation checklist covering ISMS establishment, planning, implementation, evaluation, and improvement',
    format: 'xlsx',
    size: '780 KB',
    downloadUrl: 'https://www.iso.org/files/live/sites/isoorg/files/store/en/iso27001-isms-implementation-checklist.xlsx',
    externalUrl: 'https://www.iso.org/standard/82875.html',
    tags: ['iso27001', 'isms', 'implementation', 'clauses', 'management-system'],
    createdAt: new Date('2024-02-10'),
    popularity: 88
  },

  // PCI DSS v4.0 Checklists
  {
    id: 'pci-dss-v4-requirements-checklist',
    frameworkId: 'pci-dss',
    type: 'checklist',
    title: 'PCI DSS v4.0 Complete Requirements Checklist (12 Requirements)',
    description: 'Comprehensive checklist covering all 12 PCI DSS v4.0 requirements with 300+ sub-requirements and testing procedures',
    format: 'xlsx',
    size: '1.1 MB',
    downloadUrl: 'https://www.pcisecuritystandards.org/documents/PCI-DSS-v4-0-Complete-Requirements-Checklist.xlsx',
    externalUrl: 'https://www.pcisecuritystandards.org/document_library/',
    tags: ['pci-dss', 'v4.0', '12-requirements', 'testing-procedures', 'payment-security'],
    createdAt: new Date('2024-02-20'),
    popularity: 90
  },
  {
    id: 'pci-dss-network-segmentation-checklist',
    frameworkId: 'pci-dss',
    type: 'checklist',
    title: 'PCI DSS Network Segmentation Validation Checklist',
    description: 'Detailed checklist for validating network segmentation and cardholder data environment (CDE) isolation',
    format: 'xlsx',
    size: '520 KB',
    downloadUrl: 'https://www.pcisecuritystandards.org/documents/PCI-DSS-Network-Segmentation-Checklist.xlsx',
    externalUrl: 'https://www.pcisecuritystandards.org/guidance/network-segmentation/',
    tags: ['pci-dss', 'network-segmentation', 'cde', 'validation'],
    createdAt: new Date('2024-02-25'),
    popularity: 85
  },

  // SOX Compliance Checklists
  {
    id: 'sox-404-internal-controls-checklist',
    frameworkId: 'sox',
    type: 'checklist',
    title: 'SOX Section 404 Internal Controls Assessment Checklist',
    description: 'Comprehensive checklist for Section 404 internal control over financial reporting (ICFR) assessment and testing',
    format: 'xlsx',
    size: '890 KB',
    downloadUrl: 'https://www.sec.gov/files/sox-section-404-internal-controls-checklist.xlsx',
    externalUrl: 'https://www.sec.gov/spotlight/sarbanes-oxley',
    tags: ['sox', 'section-404', 'icfr', 'internal-controls', 'financial-reporting'],
    createdAt: new Date('2024-01-30'),
    popularity: 86
  },
  {
    id: 'sox-entity-level-controls-checklist',
    frameworkId: 'sox',
    type: 'checklist',
    title: 'SOX Entity-Level Controls Assessment Checklist',
    description: 'Detailed checklist for evaluating entity-level controls including control environment, risk assessment, and monitoring',
    format: 'xlsx',
    size: '650 KB',
    downloadUrl: 'https://www.sec.gov/files/sox-entity-level-controls-checklist.xlsx',
    externalUrl: 'https://www.sec.gov/spotlight/sarbanes-oxley',
    tags: ['sox', 'entity-level', 'control-environment', 'coso-framework'],
    createdAt: new Date('2024-02-05'),
    popularity: 82
  },

  // COBIT 2019 Checklists
  {
    id: 'cobit-2019-governance-checklist',
    frameworkId: 'cobit-2019',
    type: 'checklist',
    title: 'COBIT 2019 Governance System Components Checklist',
    description: 'Assessment checklist for all 7 governance system components: processes, organizational structures, principles, policies, information, culture, ethics, behavior, people, skills, competencies, services, infrastructure, applications',
    format: 'xlsx',
    size: '820 KB',
    downloadUrl: 'https://www.isaca.org/resources/cobit/cobit-2019-governance-checklist.xlsx',
    externalUrl: 'https://www.isaca.org/resources/cobit',
    tags: ['cobit-2019', 'governance-system', '7-components', 'assessment'],
    createdAt: new Date('2024-02-12'),
    popularity: 84
  },
  {
    id: 'cobit-2019-40-objectives-checklist',
    frameworkId: 'cobit-2019',
    type: 'checklist',
    title: 'COBIT 2019 Complete 40 Governance & Management Objectives Checklist',
    description: 'Comprehensive checklist covering all 40 governance and management objectives across 5 domains: APO, BAI, DSS, MEA, EDM',
    format: 'xlsx',
    size: '1.3 MB',
    downloadUrl: 'https://www.isaca.org/resources/cobit/cobit-2019-40-objectives-checklist.xlsx',
    externalUrl: 'https://www.isaca.org/resources/cobit',
    tags: ['cobit-2019', '40-objectives', '5-domains', 'governance', 'management'],
    createdAt: new Date('2024-02-18'),
    popularity: 87
  },

  // COSO ERM Checklists
  {
    id: 'coso-erm-20-principles-checklist',
    frameworkId: 'coso-eic',
    type: 'checklist',
    title: 'COSO ERM 20 Principles Assessment Checklist',
    description: 'Detailed assessment checklist for all 20 COSO ERM principles across 5 components: Governance & Culture, Strategy & Objective-Setting, Performance, Review & Revision, Information, Communication & Reporting',
    format: 'xlsx',
    size: '920 KB',
    downloadUrl: 'https://www.coso.org/Documents/COSO-ERM-20-Principles-Checklist.xlsx',
    externalUrl: 'https://www.coso.org/Pages/erm.aspx',
    tags: ['coso-erm', '20-principles', '5-components', 'enterprise-risk'],
    createdAt: new Date('2024-01-25'),
    popularity: 88
  },
  {
    id: 'coso-internal-control-17-principles-checklist',
    frameworkId: 'coso-eic',
    type: 'checklist',
    title: 'COSO Internal Control 17 Principles Assessment Checklist',
    description: 'Comprehensive checklist for COSO Internal Control framework covering all 17 principles across 5 components: Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring Activities',
    format: 'xlsx',
    size: '850 KB',
    downloadUrl: 'https://www.coso.org/Documents/COSO-Internal-Control-17-Principles-Checklist.xlsx',
    externalUrl: 'https://www.coso.org/Pages/ic.aspx',
    tags: ['coso', 'internal-control', '17-principles', '5-components'],
    createdAt: new Date('2024-02-02'),
    popularity: 85
  },

  // IRM Standard Checklists
  {
    id: 'irm-risk-management-principles-checklist',
    frameworkId: 'irm-standard',
    type: 'checklist',
    title: 'IRM Risk Management Principles & Process Checklist',
    description: 'Assessment checklist for IRM risk management principles covering risk governance, risk assessment, risk treatment, and risk monitoring & review',
    format: 'xlsx',
    size: '680 KB',
    downloadUrl: 'https://www.theirm.org/media/irm-risk-management-principles-checklist.xlsx',
    externalUrl: 'https://www.theirm.org/what-we-do/professional-standards/',
    tags: ['irm', 'risk-principles', 'risk-process', 'governance'],
    createdAt: new Date('2024-02-08'),
    popularity: 79
  },

  // IIA CIA & IPPF Checklists
  {
    id: 'iia-ippf-standards-checklist',
    frameworkId: 'iia-cia',
    type: 'checklist',
    title: 'IIA IPPF Standards Compliance Checklist (Standards 1000-2600)',
    description: 'Complete compliance checklist for all IIA International Standards covering Attribute Standards (1000-1300) and Performance Standards (2000-2600)',
    format: 'xlsx',
    size: '780 KB',
    downloadUrl: 'https://www.theiia.org/globalassets/documents/standards/ippf-standards-compliance-checklist.xlsx',
    externalUrl: 'https://www.theiia.org/en/standards/',
    tags: ['iia', 'ippf', 'standards', 'attribute', 'performance', 'compliance'],
    createdAt: new Date('2024-02-14'),
    popularity: 91
  },
  {
    id: 'iia-internal-audit-charter-checklist',
    frameworkId: 'iia-cia',
    type: 'checklist',
    title: 'IIA Internal Audit Charter Development Checklist',
    description: 'Comprehensive checklist for developing and updating internal audit charter per IIA standards and best practices',
    format: 'xlsx',
    size: '420 KB',
    downloadUrl: 'https://www.theiia.org/globalassets/documents/guidance/iia-audit-charter-checklist.xlsx',
    externalUrl: 'https://www.theiia.org/en/standards/',
    tags: ['iia', 'audit-charter', 'governance', 'standards'],
    createdAt: new Date('2024-01-28'),
    popularity: 83
  },

  // NIS2 Directive Checklist
  {
    id: 'nis2-directive-compliance-checklist',
    frameworkId: 'nis2-directive',
    type: 'checklist',
    title: 'NIS2 Directive Compliance Checklist (Essential & Important Entities)',
    description: 'Comprehensive compliance checklist for NIS2 Directive covering cybersecurity risk management, incident reporting, and supply chain security',
    format: 'xlsx',
    size: '750 KB',
    downloadUrl: 'https://digital-strategy.ec.europa.eu/en/library/nis2-directive-compliance-checklist.xlsx',
    externalUrl: 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive',
    tags: ['nis2', 'directive', 'cybersecurity', 'incident-reporting', 'supply-chain'],
    createdAt: new Date('2024-02-22'),
    popularity: 76
  },

  // EU AI Act Checklist
  {
    id: 'eu-ai-act-compliance-checklist',
    frameworkId: 'eu-ai-act',
    type: 'checklist',
    title: 'EU AI Act Compliance Checklist (High-Risk AI Systems)',
    description: 'Detailed compliance checklist for EU AI Act focusing on high-risk AI systems, conformity assessment, and risk management requirements',
    format: 'xlsx',
    size: '620 KB',
    downloadUrl: 'https://digital-strategy.ec.europa.eu/en/library/eu-ai-act-compliance-checklist.xlsx',
    externalUrl: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence',
    tags: ['eu-ai-act', 'high-risk-ai', 'conformity-assessment', 'risk-management'],
    createdAt: new Date('2024-03-05'),
    popularity: 73
  },

  // RBI Guidelines Checklist
  {
    id: 'rbi-cyber-security-checklist',
    frameworkId: 'rbi-guidelines',
    type: 'checklist',
    title: 'RBI Cyber Security Framework Compliance Checklist',
    description: 'Comprehensive checklist for Reserve Bank of India cyber security guidelines covering governance, risk management, and incident response for banks',
    format: 'xlsx',
    size: '580 KB',
    downloadUrl: 'https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?UrlPage=&ID=RBI-Cyber-Security-Checklist.xlsx',
    externalUrl: 'https://www.rbi.org.in/',
    tags: ['rbi', 'cyber-security', 'banking', 'india', 'compliance'],
    createdAt: new Date('2024-01-18'),
    popularity: 74
  },

  // IRDAI Guidelines Checklist
  {
    id: 'irdai-guidelines-checklist',
    frameworkId: 'irdai-guidelines',
    type: 'checklist',
    title: 'IRDAI Regulatory Compliance Checklist for Insurers',
    description: 'Complete compliance checklist for Insurance Regulatory and Development Authority of India guidelines covering governance, risk management, and regulatory reporting',
    format: 'xlsx',
    size: '650 KB',
    downloadUrl: 'https://www.irdai.gov.in/ADMINCMS/cms/whatsNew_Layout.aspx?page=IRDAI-Compliance-Checklist.xlsx',
    externalUrl: 'https://www.irdai.gov.in/',
    tags: ['irdai', 'insurance', 'regulatory', 'india', 'compliance'],
    createdAt: new Date('2024-01-22'),
    popularity: 71
  },

  // TPRM Checklist
  {
    id: 'tprm-comprehensive-checklist',
    frameworkId: 'tprm',
    type: 'checklist',
    title: 'Third Party Risk Management (TPRM) Complete Assessment Checklist',
    description: 'Comprehensive TPRM checklist covering vendor assessment, due diligence, contract management, ongoing monitoring, and risk mitigation',
    format: 'xlsx',
    size: '890 KB',
    downloadUrl: 'https://www.sharedassessments.org/wp-content/uploads/2024/01/TPRM-Complete-Assessment-Checklist.xlsx',
    externalUrl: 'https://www.sharedassessments.org/',
    tags: ['tprm', 'third-party', 'vendor-management', 'due-diligence', 'risk-assessment'],
    createdAt: new Date('2024-02-28'),
    popularity: 80
  }
];
