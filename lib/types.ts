export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 percentage
  iconName: string;
  badge?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectCategory =
  | "All"
  | "Company Websites"
  | "E-Commerce & Payments"
  | "Full-Stack SaaS"
  | "AI & Automation"
  | "Cloud & Systems";

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  tags: string[];
  image: string;
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  iconName: string;
  features: string[];
  deliveryTime: string;
  popular?: boolean;
}

export interface WhyHireItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectWorkedOn: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
  responseRate: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
