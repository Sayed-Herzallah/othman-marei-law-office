export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  scopePoints: string[];
  deliverables: string[];
}

export interface QualificationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
  type: 'degree' | 'certificate' | 'membership';
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readingTime: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
