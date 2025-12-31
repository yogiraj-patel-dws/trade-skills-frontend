export interface Author {
  name: string;
  title: string;
  avatar: string;
}

export interface Story {
  id: number;
  rating: number;
  story: string;
  author: Author;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksTestimonial {
  quote: string;
  author: Author;
}

export interface HowItWorks {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  testimonial: HowItWorksTestimonial;
}

export interface CommunityStoriesData {
  stories: Story[];
  howItWorks: HowItWorks;
}

export interface CommunityStoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: CommunityStoriesData;
}

// Footer types
export interface Link {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Company {
  name: string;
  description: string;
  tagline: string;
}

export interface Links {
  platform: Link[];
  company: Link[];
  legal: Link[];
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
}

export interface CallToAction {
  title: string;
  subtitle: string;
  buttonText: string;
  note: string;
}

export interface FooterData {
  company: Company;
  links: Links;
  social: SocialLink[];
  contact: Contact;
  copyright: string;
  callToAction: CallToAction;
}

export interface FooterResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: FooterData;
}