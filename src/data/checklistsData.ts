import type { FrameworkResource } from '../types/frameworks';

// Comprehensive model checklists created based on actual framework content
export const frameworkChecklists: FrameworkResource[] = [
  // NIST Cybersecurity Framework v2.0 - Based on actual framework content
  {
    id: 'nist-csf-v2-comprehensive-checklist',
    frameworkId: 'nist-csf',
    type: 'checklist',
    title: 'NIST CSF v2.0 Complete Implementation Checklist (106 Subcategories)',
    description: 'Comprehensive checklist covering all 6 CSF Functions with detailed implementation requirements: GOVERN (41 subcategories), IDENTIFY (22), PROTECT (25), DETECT (8), RESPOND (5), RECOVER (5)',
    format: 'xlsx',
    size: '1.2 MB',
    downloadUrl: '/downloads/checklists/NIST_CSF_v2_Complete_Implementation_Checklist.xlsx',
    externalUrl: 'https://www.nist.gov/cyberframework/framework-20',
    tags: ['nist-csf', 'v2.0', 'govern', 'identify', 'protect', 'detect', 'respond', 'recover'],
    createdAt: new Date('2024-03-01'),
    popularity: 98
  },

  // GDPR - Based on all 99 articles
  {
    id: 'gdpr-article-by-article-checklist',
    frameworkId: 'gdpr',
    type: 'checklist',
    title: 'GDPR Complete Compliance Checklist (All 99 Articles)',
    description: 'Article-by-article compliance checklist covering: Principles (Art 5-6), Legal Basis (Art 7-10), Rights (Art 12-23), Controller/Processor (Art 24-36), International Transfers (Art 44-49), Supervisory Authorities (Art 51-76), Remedies (Art 77-84), Penalties (Art 83-84)',
    format: 'xlsx',
    size: '1.8 MB',
    downloadUrl: '/downloads/checklists/GDPR_Complete_Article_Compliance_Checklist.xlsx',
    externalUrl: 'https://gdpr.eu/checklist/',
    tags: ['gdpr', 'articles', 'data-protection', 'privacy-rights', 'dpo', 'dpia'],
    createdAt: new Date('2024-02-15'),
    popularity: 96
  },

  // ISO 27001:2022 - Based on all clauses and Annex A controls
  {
    id: 'iso27001-2022-complete-checklist',
    frameworkId: 'iso-27001',
    type: 'checklist',
    title: 'ISO 27001:2022 Complete ISMS & Controls Checklist (93 Controls)',
    description: 'Complete implementation checklist: ISMS Clauses (4-10) covering Context, Leadership, Planning, Support, Operation, Performance Evaluation, Improvement + All 93 Annex A Controls across Organizational (37), People (8), Physical (14), Technological (34) themes',
    format: 'xlsx',
    size: '2.1 MB',
    downloadUrl: '/downloads/checklists/ISO27001_2022_Complete_ISMS_Controls_Checklist.xlsx',
    externalUrl: 'https://www.iso.org/standard/82875.html',
    tags: ['iso27001', '2022', 'isms', 'annex-a', '93-controls', 'risk-assessment'],
    createdAt: new Date('2024-02-20'),
    popularity: 94
  },

  // PCI DSS v4.0 - Based on all 12 requirements
  {
    id: 'pci-dss-v4-complete-requirements-checklist',
    frameworkId: 'pci-dss',
    type: 'checklist',
    title: 'PCI DSS v4.0 Complete Requirements Checklist (12 Requirements)',
    description: 'Comprehensive checklist covering: Build/Maintain Secure Networks (Req 1-2), Protect Cardholder Data (Req 3-4), Maintain Vulnerability Management (Req 5-6), Implement Access Controls (Req 7-8), Monitor Networks (Req 9-10), Maintain Information Security Policy (Req 11-12)',
    format: 'xlsx',
    size: '1.6 MB',
    downloadUrl: '/downloads/checklists/PCI_DSS_v4_Complete_Requirements_Checklist.xlsx',
    externalUrl: 'https://www.pcisecuritystandards.org/document_library/',
    tags: ['pci-dss', 'v4.0', '12-requirements', 'cardholder-data', 'payment-security'],
    createdAt: new Date('2024-02-25'),
    popularity: 92
  },

  // SOX - Based on key sections
  {
    id: 'sox-complete-compliance-checklist',
    frameworkId: 'sox',
    type: 'checklist',
    title: 'SOX Complete Compliance Checklist (Sections 302, 404, 906)',
    description: 'Comprehensive SOX compliance checklist covering: Section 302 (Corporate Responsibility), Section 404 (Management Assessment of Internal Controls), Section 906 (Corporate Responsibility for Financial Reports), plus Entity-Level Controls, Process-Level Controls, IT General Controls',
    format: 'xlsx',
    size: '1.4 MB',
    downloadUrl: '/downloads/checklists/SOX_Complete_Compliance_Checklist.xlsx',
    externalUrl: 'https://www.sec.gov/spotlight/sarbanes-oxley',
    tags: ['sox', 'section-302', 'section-404', 'icfr', 'financial-reporting'],
    createdAt: new Date('2024-02-18'),
    popularity: 89
  },

  // COBIT 2019 - Based on all 40 objectives
  {
    id: 'cobit-2019-complete-objectives-checklist',
    frameworkId: 'cobit-2019',
    type: 'checklist',
    title: 'COBIT 2019 Complete Governance & Management Objectives (40 Objectives)',
    description: 'Comprehensive checklist for all 40 objectives across 5 domains: Evaluate, Direct, Monitor (EDM 5 objectives), Align, Plan, Organize (APO 14 objectives), Build, Acquire, Implement (BAI 11 objectives), Deliver, Service, Support (DSS 6 objectives), Monitor, Evaluate, Assess (MEA 4 objectives)',
    format: 'xlsx',
    size: '1.9 MB',
    downloadUrl: '/downloads/checklists/COBIT_2019_Complete_40_Objectives_Checklist.xlsx',
    externalUrl: 'https://www.isaca.org/resources/cobit',
    tags: ['cobit-2019', '40-objectives', 'edm', 'apo', 'bai', 'dss', 'mea'],
    createdAt: new Date('2024-02-22'),
    popularity: 87
  },

  // COSO ERM - Based on 20 principles
  {
    id: 'coso-erm-20-principles-checklist',
    frameworkId: 'coso-eic',
    type: 'checklist',
    title: 'COSO ERM 20 Principles Complete Assessment Checklist',
    description: 'Detailed checklist for all 20 COSO ERM principles: Governance & Culture (Principles 1-5), Strategy & Objective-Setting (Principles 6-9), Performance (Principles 10-15), Review & Revision (Principles 16-17), Information, Communication & Reporting (Principles 18-20)',
    format: 'xlsx',
    size: '1.3 MB',
    downloadUrl: '/downloads/checklists/COSO_ERM_20_Principles_Assessment_Checklist.xlsx',
    externalUrl: 'https://www.coso.org/Pages/erm.aspx',
    tags: ['coso-erm', '20-principles', 'governance', 'strategy', 'performance', 'review'],
    createdAt: new Date('2024-02-12'),
    popularity: 90
  },

  // COSO Internal Control - Based on 17 principles
  {
    id: 'coso-internal-control-17-principles-checklist',
    frameworkId: 'coso-eic',
    type: 'checklist',
    title: 'COSO Internal Control 17 Principles Assessment Checklist',
    description: 'Complete assessment checklist for COSO Internal Control 17 principles: Control Environment (Principles 1-5), Risk Assessment (Principles 6-9), Control Activities (Principles 10-12), Information & Communication (Principles 13-15), Monitoring Activities (Principles 16-17)',
    format: 'xlsx',
    size: '1.1 MB',
    downloadUrl: '/downloads/checklists/COSO_Internal_Control_17_Principles_Checklist.xlsx',
    externalUrl: 'https://www.coso.org/Pages/ic.aspx',
    tags: ['coso', 'internal-control', '17-principles', 'control-environment', 'risk-assessment'],
    createdAt: new Date('2024-02-10'),
    popularity: 88
  },

  // IRM Standard - Based on risk management principles
  {
    id: 'irm-risk-management-standard-checklist',
    frameworkId: 'irm-standard',
    type: 'checklist',
    title: 'IRM Risk Management Standard Complete Implementation Checklist',
    description: 'Comprehensive implementation checklist based on IRM Standard covering: Risk Governance Framework, Risk Strategy & Appetite, Risk Assessment Processes, Risk Treatment & Response, Risk Monitoring & Reporting, Risk Culture & Competence, Risk Integration',
    format: 'xlsx',
    size: '950 KB',
    downloadUrl: '/downloads/checklists/IRM_Risk_Management_Standard_Implementation_Checklist.xlsx',
    externalUrl: 'https://www.theirm.org/what-we-do/professional-standards/',
    tags: ['irm', 'risk-governance', 'risk-assessment', 'risk-treatment', 'risk-monitoring'],
    createdAt: new Date('2024-02-08'),
    popularity: 82
  },

  // IIA IPPF - Based on International Standards
  {
    id: 'iia-ippf-complete-standards-checklist',
    frameworkId: 'iia-cia',
    type: 'checklist',
    title: 'IIA IPPF Complete Standards Compliance Checklist (Standards 1000-2600)',
    description: 'Complete compliance checklist for all IIA Standards: Attribute Standards 1000-1300 (Purpose, Proficiency, Quality Assurance), Performance Standards 2000-2600 (Managing Internal Audit, Nature of Work, Engagement Planning, Performing Engagement, Communicating Results, Monitoring Progress)',
    format: 'xlsx',
    size: '1.5 MB',
    downloadUrl: '/downloads/checklists/IIA_IPPF_Complete_Standards_Compliance_Checklist.xlsx',
    externalUrl: 'https://www.theiia.org/en/standards/',
    tags: ['iia', 'ippf', 'attribute-standards', 'performance-standards', 'internal-audit'],
    createdAt: new Date('2024-02-14'),
    popularity: 91
  },

  // NIS2 Directive - Based on directive requirements
  {
    id: 'nis2-directive-implementation-checklist',
    frameworkId: 'nis2',
    type: 'checklist',
    title: 'NIS2 Directive Complete Implementation Checklist',
    description: 'Comprehensive implementation checklist covering: Scope & Entity Classification, Cybersecurity Risk Management Measures, Incident Reporting Requirements, Business Continuity & Crisis Management, Supply Chain Security, Vulnerability Disclosure, Governance & Oversight',
    format: 'xlsx',
    size: '1.1 MB',
    downloadUrl: '/downloads/checklists/NIS2_Directive_Complete_Implementation_Checklist.xlsx',
    externalUrl: 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive',
    tags: ['nis2', 'cybersecurity', 'incident-reporting', 'supply-chain', 'essential-entities'],
    createdAt: new Date('2024-02-28'),
    popularity: 78
  },

  // EU AI Act - Based on regulation requirements
  {
    id: 'eu-ai-act-compliance-checklist',
    frameworkId: 'eu-ai-act',
    type: 'checklist',
    title: 'EU AI Act Complete Compliance Checklist (High-Risk AI Systems)',
    description: 'Comprehensive compliance checklist covering: AI System Classification, Risk Management System, Data Governance, Transparency & Documentation, Human Oversight Requirements, Accuracy & Robustness, Cybersecurity Measures, Quality Management System, Conformity Assessment',
    format: 'xlsx',
    size: '980 KB',
    downloadUrl: '/downloads/checklists/EU_AI_Act_Complete_Compliance_Checklist.xlsx',
    externalUrl: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence',
    tags: ['eu-ai-act', 'high-risk-ai', 'risk-management', 'transparency', 'human-oversight'],
    createdAt: new Date('2024-03-05'),
    popularity: 75
  },

  // RBI Cyber Security Framework - Based on RBI guidelines
  {
    id: 'rbi-cyber-security-framework-checklist',
    frameworkId: 'rbi-guidelines',
    type: 'checklist',
    title: 'RBI Cyber Security Framework Complete Compliance Checklist',
    description: 'Comprehensive checklist based on RBI guidelines covering: Cyber Security Policy, Organizational Structure, Cyber Risk Management, Safeguards & Controls, Incident Response, Business Continuity Planning, Customer Education, Cyber Crisis Management Plan',
    format: 'xlsx',
    size: '870 KB',
    downloadUrl: '/downloads/checklists/RBI_Cyber_Security_Framework_Compliance_Checklist.xlsx',
    externalUrl: 'https://www.rbi.org.in/',
    tags: ['rbi', 'cyber-security', 'banking', 'india', 'incident-response'],
    createdAt: new Date('2024-02-05'),
    popularity: 79
  },

  // IRDAI Guidelines - Based on insurance regulations
  {
    id: 'irdai-regulatory-compliance-checklist',
    frameworkId: 'irdai-guidelines',
    type: 'checklist',
    title: 'IRDAI Complete Regulatory Compliance Checklist for Insurers',
    description: 'Comprehensive compliance checklist covering: Corporate Governance, Risk Management Framework, Regulatory Reporting, Solvency Requirements, Investment Guidelines, Customer Protection, Complaint Handling, Outsourcing Guidelines',
    format: 'xlsx',
    size: '920 KB',
    downloadUrl: '/downloads/checklists/IRDAI_Complete_Regulatory_Compliance_Checklist.xlsx',
    externalUrl: 'https://www.irdai.gov.in/',
    tags: ['irdai', 'insurance', 'regulatory', 'india', 'solvency'],
    createdAt: new Date('2024-02-08'),
    popularity: 76
  },

  // TPRM - Based on third-party risk management best practices
  {
    id: 'tprm-comprehensive-assessment-checklist',
    frameworkId: 'tprm',
    type: 'checklist',
    title: 'Third Party Risk Management (TPRM) Complete Assessment Checklist',
    description: 'Comprehensive TPRM checklist covering: Vendor Risk Assessment, Due Diligence Process, Contract Risk Management, Ongoing Monitoring & Reviews, Performance Management, Incident Management, Exit Planning, Regulatory Compliance, Fourth Party Risk',
    format: 'xlsx',
    size: '1.3 MB',
    downloadUrl: '/downloads/checklists/TPRM_Complete_Assessment_Checklist.xlsx',
    externalUrl: 'https://www.sharedassessments.org/',
    tags: ['tprm', 'vendor-risk', 'due-diligence', 'contract-management', 'ongoing-monitoring'],
    createdAt: new Date('2024-03-02'),
    popularity: 85
  }
];
