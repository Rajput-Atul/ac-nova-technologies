export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  price: string;
  features: string[];
  slug: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  gradient: string;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
  portfolioLink?: string;
  isFounder?: boolean;
  image?: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}