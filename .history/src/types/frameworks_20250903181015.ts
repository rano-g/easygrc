// Framework Resources Types
export interface Framework {
  id: string;
  name: string;
  category: 'compliance' | 'governance' | 'risk' | 'security' | 'privacy' | 'financial' | 'technology';
  description: string;
  region: 'global' | 'us' | 'eu' | 'uk' | 'india' | 'asia' | 'other';
  status: 'active' | 'draft' | 'deprecated';
  lastUpdated: Date;
  officialUrl?: string;
  resources: FrameworkResource[];
}

export interface FrameworkResource {
  id: string;
  frameworkId: string;
  type: 'document' | 'video' | 'podcast' | 'checklist' | 'template' | 'guide' | 'standard';
  title: string;
  description: string;
  format: 'pdf' | 'docx' | 'xlsx' | 'mp4' | 'mp3' | 'url' | 'zip';
  size?: string;
  downloadUrl?: string;
  externalUrl?: string;
  tags: string[];
  createdAt: Date;
  popularity: number;
}

export interface FrameworkCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  frameworks: Framework[];
}
