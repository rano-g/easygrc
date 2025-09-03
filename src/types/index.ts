// Core GRC Types and Interfaces

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'compliance_officer' | 'risk_manager' | 'auditor' | 'employee';
  department: string;
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  category: 'operational' | 'financial' | 'strategic' | 'compliance' | 'technology';
  severity: 'low' | 'medium' | 'high' | 'critical';
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  status: 'identified' | 'assessed' | 'mitigating' | 'monitoring' | 'closed';
  owner: string;
  mitigationPlan?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ComplianceRequirement {
  id: string;
  title: string;
  description: string;
  framework: string; // e.g., 'SOX', 'GDPR', 'HIPAA', 'PCI-DSS'
  status: 'not_started' | 'in_progress' | 'completed' | 'non_compliant';
  priority: 'low' | 'medium' | 'high' | 'critical';
  owner: string;
  evidence?: string[];
  nextReviewDate: Date;
  completionDate?: Date;
  createdAt: Date;
}

export interface Audit {
  id: string;
  title: string;
  type: 'internal' | 'external' | 'regulatory';
  status: 'planned' | 'in_progress' | 'review' | 'completed';
  auditor: string;
  scope: string;
  startDate: Date;
  endDate: Date;
  findings: AuditFinding[];
  createdAt: Date;
}

export interface AuditFinding {
  id: string;
  auditId: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  recommendation: string;
  owner: string;
  dueDate: Date;
  createdAt: Date;
}

export interface Policy {
  id: string;
  title: string;
  description: string;
  category: string;
  version: string;
  status: 'draft' | 'active' | 'under_review' | 'archived';
  owner: string;
  approver: string;
  effectiveDate: Date;
  reviewDate: Date;
  content?: string;
  attachments?: string[];
  createdAt: Date;
}

export interface Dashboard {
  riskSummary: {
    total: number;
    byStatus: Record<Risk['status'], number>;
    bySeverity: Record<Risk['severity'], number>;
  };
  complianceSummary: {
    total: number;
    compliant: number;
    nonCompliant: number;
    inProgress: number;
  };
  auditSummary: {
    total: number;
    active: number;
    findings: number;
    overdue: number;
  };
  policySummary: {
    total: number;
    active: number;
    underReview: number;
    expired: number;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  children?: NavigationItem[];
}
