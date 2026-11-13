export interface Project {
  title: string;
  slug: string;
  categories: string[];
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    paper?: string;
  };
  metrics?: { label: string; value: string }[];
  pinned: boolean;
  year: number;
}


export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "resume" | "twitter";
}

export interface MuseData {
  lastTended: string;
  considering: {
    question: string;
    description: string;
    tags: string[];
  };
  reading: {
    title: string;
    author: string;
  }[];
  learning: {
    title: string;
    description: string;
    progress: number;
  };
  awayFromKeys: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  readingTime: string;
  content: string;
}
