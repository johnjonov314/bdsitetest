export type NavItem = { label: string; href: string };
export type Solution = {
  slug: string;
  title: string;
  summary: string;
  priority: number;
  points: string[];
};

export type CaseItem = {
  company: string;
  industry: string;
  challenge: string;
  impact: string;
};

export type FaqItem = { question: string; answer: string };

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: string;
};
