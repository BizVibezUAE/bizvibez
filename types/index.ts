type ServiceType = {
  title: string;
  serviceStyle: "rounded" | "square" | "rectangle";
  secondaryColor: string;
  contactForm?: boolean;
  primaryColor: string;
  heroImage: string;
  heroVideo?: string;
  heroTitle: string;
  heroDescription: string;
  breadcrumbDescription: string;
  heroButton: string;
  serviceOrientation?: "row" | "column";
  link: string;
  requirements: {
    title: string;
    points: string[];
  }[];
  notes: {
    title: string;
    description: string;
  }[];
  services?: {
    title: string;
    description: string;
    icon: string;
  }[];
  info: {
    title: string;
    description: string | React.ReactNode;
  }[];
  icon: string;
  description: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    openGraph?: {
      title ?: string;
      description?: string;
      type?:string;
      url?:string;
      images?: string[];
    };
    twitter?: {
      card?: string;
      site?: string;
      title?: string;
      description?: string;
      image?: string;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
    };
    alternates?: {
      canonical?: string;
    };
  };
};

type PointType = {
  title: string;
  description: string;
};

export type { PointType, ServiceType };
