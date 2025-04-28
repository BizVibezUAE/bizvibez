import { servicesSection } from "@/data/index";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type ParamsType = {
  service: string;
};

const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const serviceTitle = params.service.replace(/-/g, " ").toLowerCase();
  const service = servicesSection.find((s) => s.title.toLowerCase() === serviceTitle);

  if (!service) {
    console.error(`Service not found: ${params.service}`);
    notFound();
  }

  // Use fields directly from ServiceType
  const title = service.meta?.title || service.heroTitle;
  const description = service.meta?.description || service.heroDescription;
  const keywords = service.meta?.keywords?.join(", ") || "";
  const openGraphImages = service.meta?.openGraph?.images || [service.heroImage].filter(Boolean);
  const twitterImage = service.meta?.twitter?.image || openGraphImages[0];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: openGraphImages,
      type: "article",
      url: `https://bizvibez.com/services/${generateSlug(service.title)}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@bizvibez",
      title,
      description,
      images: twitterImage,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.bizvibez.com/services/${generateSlug(service.title)}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}