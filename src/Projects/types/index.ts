export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    tags: string[];
    features?: {
      title: string;
      description: string;
      image: string;
    }[];
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface SocialProfile {
    id: string;
    name: string;
    username: string;
    link: string;
    image: string;
    description: string;
    followers?: string;
    content?: {
      title: string;
      description: string;
      image: string;
    }[];
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
  }