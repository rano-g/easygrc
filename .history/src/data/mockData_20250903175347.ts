import { Risk, ComplianceRequirement, Audit, Policy, Dashboard } from '../types';

// Mock data for demonstration
export const mockRisks: Risk[] = [
  {
    id: '1',
    title: 'Data Breach Risk',
    description: 'Potential unauthorized access to customer data',
    category: 'technology',
    severity: 'high',
    probability: 'medium',
    impact: 'high',
    status: 'mitigating',
    owner: 'John Smith',
    mitigationPlan: 'Implement additional security controls and monitoring',
    dueDate: new Date('2025-12-31'),
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-09-01')
  },
  {
    id: '2',
    title: 'Regulatory Compliance Gap',
    description: 'Non-compliance with new GDPR requirements',
    category: 'compliance',
    severity: 'critical',
    probability: 'high',
    impact: 'high',
    status: 'assessed',
    owner: 'Sarah Johnson',
    dueDate: new Date('2025-10-15'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-09-01')
  },
  {
    id: '3',
    title: 'Financial Fraud Risk',
    description: 'Risk of fraudulent financial transactions',
    category: 'financial',
    severity: 'medium',
    probability: 'low',
    impact: 'high',
    status: 'monitoring',
    owner: 'Mike Davis',
    mitigationPlan: 'Enhanced transaction monitoring and approval workflows',
    createdAt: new Date('2025-07-15'),
    updatedAt: new Date('2025-08-30')
  }
];

export const mockCompliance: ComplianceRequirement[] = [
  {
    id: '1',
    title: 'SOX Section 404 Compliance',
    description: 'Internal control assessment and testing',
    framework: 'SOX',
    status: 'in_progress',
    priority: 'high',
    owner: 'Lisa Anderson',
    evidence: ['control_matrix.xlsx', 'testing_results.pdf'],
    nextReviewDate: new Date('2025-12-31'),
    createdAt: new Date('2025-01-01')
  },
  {
    id: '2',
    title: 'GDPR Data Protection Impact Assessment',
    description: 'Assess impact of data processing activities',
    framework: 'GDPR',
    status: 'completed',
    priority: 'critical',
    owner: 'Tom Wilson',
    evidence: ['dpia_report.pdf', 'approval_letter.pdf'],
    nextReviewDate: new Date('2026-03-15'),
    completionDate: new Date('2025-08-15'),
    createdAt: new Date('2025-03-01')
  },
  {
    id: '3',
    title: 'PCI-DSS Quarterly Security Scan',
    description: 'Vulnerability scanning for payment systems',
    framework: 'PCI-DSS',
    status: 'not_started',
    priority: 'medium',
    owner: 'Alex Chen',
    nextReviewDate: new Date('2025-10-01'),
    createdAt: new Date('2025-09-01')
  }
];

export const mockAudits: Audit[] = [
  {
    id: '1',
    title: 'Annual Financial Audit',
    type: 'external',
    status: 'in_progress',
    auditor: 'EY Auditing Firm',
    scope: 'Financial statements and internal controls',
    startDate: new Date('2025-08-01'),
    endDate: new Date('2025-11-30'),
    findings: [
      {
        id: 'f1',
        auditId: '1',
        title: 'Segregation of Duties Issue',
        description: 'Lack of proper segregation in payment processing',
        severity: 'medium',
        status: 'open',
        recommendation: 'Implement role-based access controls',
        owner: 'Finance Team',
        dueDate: new Date('2025-10-15'),
        createdAt: new Date('2025-09-01')
      }
    ],
    createdAt: new Date('2025-07-01')
  },
  {
    id: '2',
    title: 'IT Security Audit',
    type: 'internal',
    status: 'completed',
    auditor: 'Internal Audit Team',
    scope: 'Information security controls and practices',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-07-15'),
    findings: [],
    createdAt: new Date('2025-05-01')
  }
];

export const mockPolicies: Policy[] = [
  {
    id: '1',
    title: 'Information Security Policy',
    description: 'Comprehensive policy covering information security requirements',
    category: 'Security',
    version: '2.1',
    status: 'active',
    owner: 'CISO Office',
    approver: 'Chief Information Security Officer',
    effectiveDate: new Date('2025-01-01'),
    reviewDate: new Date('2026-01-01'),
    createdAt: new Date('2024-12-01')
  },
  {
    id: '2',
    title: 'Data Privacy Policy',
    description: 'Policy governing the collection, use, and protection of personal data',
    category: 'Privacy',
    version: '1.5',
    status: 'under_review',
    owner: 'Legal Department',
    approver: 'Chief Legal Officer',
    effectiveDate: new Date('2025-03-01'),
    reviewDate: new Date('2026-03-01'),
    createdAt: new Date('2025-02-01')
  },
  {
    id: '3',
    title: 'Code of Conduct',
    description: 'Ethical guidelines and behavioral expectations for all employees',
    category: 'Ethics',
    version: '3.0',
    status: 'active',
    owner: 'HR Department',
    approver: 'Chief Executive Officer',
    effectiveDate: new Date('2025-01-01'),
    reviewDate: new Date('2027-01-01'),
    createdAt: new Date('2024-11-01')
  }
];

export const mockDashboard: Dashboard = {
  riskSummary: {
    total: 15,
    byStatus: {
      identified: 3,
      assessed: 4,
      mitigating: 5,
      monitoring: 2,
      closed: 1
    },
    bySeverity: {
      low: 3,
      medium: 6,
      high: 4,
      critical: 2
    }
  },
  complianceSummary: {
    total: 25,
    compliant: 18,
    nonCompliant: 3,
    inProgress: 4
  },
  auditSummary: {
    total: 8,
    active: 3,
    findings: 12,
    overdue: 2
  },
  policySummary: {
    total: 45,
    active: 38,
    underReview: 5,
    expired: 2
  }
};
