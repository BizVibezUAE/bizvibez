import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import InfoHeader from "@/components/InfoHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.bizvibez.com#organization",
  "name": "BizVibez Consultants",
  "url": "https://www.bizvibez.com",
  "logo": "https://www.bizvibez.com/logo.webp",
  "description": "BizVibez Consultants specializes in facilitating company setups in the UAE, offering services such as bank account assistance, virtual office solutions, PR services, and corporate tax consultancy.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "602 Bays Water Tower, Business Bay",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "United Arab Emirates"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971 54 201 9999",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic"]
    }
  ],
  "sameAs": [
    "https://www.instagram.com/bizvibez_consultants/",
    "https://www.linkedin.com/company/bizvibez",
    "https://www.facebook.com/bizvibez"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "14:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Our Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Company Setup",
        "description": "Assisting entrepreneurs in establishing businesses in Dubai, including free zones, mainland, and offshore setups.",
        "offers": {
          "@type": "Offer",
          "price": "1500",
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "name": "Bank Account Assistance",
        "description": "Facilitating the opening of corporate bank accounts in the UAE with leading banks."
      },
      {
        "@type": "Service",
        "name": "Virtual Office & Ejari",
        "description": "Providing virtual office solutions and assistance with Ejari registration for tenancy contracts."
      },
      {
        "@type": "Service",
        "name": "PR Services",
        "description": "Handling licenses, visas, and other administrative tasks to streamline business operations."
      },
      {
        "@type": "Service",
        "name": "Corporate Tax & VAT Consultancy",
        "description": "Offering guidance on corporate tax compliance and VAT consultancy in line with UAE regulations."
      },
      {
        "@type": "Service",
        "name": "UAE Visa Services",
        "description": "Assisting with the process of obtaining UAE residence visas, including Golden Visas."
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Faizan Atique"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I recently used Bizvibez’s bank account opening assistance, and the experience was smooth and efficient. The team was knowledgeable, guiding me through each step and addressing all my questions promptly. Their expertise made the process straightforward and hassle-free. Highly recommend their services for anyone needing help with bank account setups!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Ali"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      },
      "reviewBody": "Professional services and great support for visa processing."
    }
  ],
  "mainEntityOfPage": [
    {
      "@type": "WebPage",
      "@id": "https://www.bizvibez.com"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.bizvibez.com/blogs",
      "name": "Blogs",
      "description": "Explore our latest blogs on business setup in the UAE, tax consultancy, and more."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bizvibez.com/faq",
      "name": "FAQ",
      "description": "Frequently Asked Questions about business setup and other services."
    }
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.bizvibez.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <Head>
        {/* Google Site Verification */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta
          name="google-site-verification"
          content="FF07H1pJyYiCRHvAcjkhLId6gQWLqTDmHg6YxUqKr5I"
        />
      </Head>
      <body className={inter.className}>
        {/* Combined GTM and GA Script */}
       
        <div className="fixed top-0 left-0 w-full z-50">
          <InfoHeader />
          <Navbar />
        </div>
        {children}
        <Footer />
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(schemaMarkup)}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16906158112"
        />
        <Script
          id="gtm-ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16906158112'); // GTM ID
              gtag('config', 'G-ZWEZHR9FMW'); // GA ID
            `,
          }}
        />

      </body>
    </html>
  );
}