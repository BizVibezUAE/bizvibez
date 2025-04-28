"use client"
import Head from "next/head";
import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import BusinessSetup from "@/components/Home/BusinessSetup";
import BusinessSetup2 from "@/components/Home/BusinessSetup2";
import Partners from "@/components/Home/Partners";
import Zones from "@/components/Home/Zones";
import ProcessSteps from "@/components/Home/ProcessSteps";
import StatsSection from "@/components/Home/Stats";
import TestimonialsSection from "@/components/Home/Testimonial";
import FAQSection from "@/components/Home/Faqs";
import Videos from "@/components/Home/Videos";
import HomeBlogs from "./blogs/HomeBlogs";
import WhatsAppButton from "@/components/whatsappButton";
import { WhatsAppButtonProps } from "@/components/whatsappButton";

// Define metadata for the home page


export default function HomePage() {
  return (
    <>
         <head>
        <title>BizVibez: Business Setup & Corporate Services in Dubai</title>
        <meta
          name="description"
          content="BizVibez Consultants offers business setup, corporate services, and compliance solutions in Dubai. Your trusted partner for seamless operations."
        />
        <meta
          name="keywords"
          content="business setup Dubai, company formation UAE, corporate services Dubai, UAE visa services, Dubai business consultants, free zone company setup, UAE compliance services, Dubai corporate tax, UAE golden visa, Dubai virtual office"
        />
        <meta property="og:title" content="BizVibez Consultants | Business Setup & Corporate Services in Dubai" />
        <meta
          property="og:description"
          content="BizVibez Consultants specializes in business setup, corporate services, and compliance solutions in Dubai. From company formation to visa services, we help you succeed in the UAE."
        />
        <meta property="og:url" content="https://www.bizvibez.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bizvibez.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFNL.50774920.gif&w=750&q=75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BizVibez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bizvibez.com" />
      </head>
     <div>
        <Hero />
        <Services />
        <BusinessSetup />
        <BusinessSetup2 />
        <Partners />
        <Zones />
        <ProcessSteps />
        <StatsSection />
        <Videos />
        <HomeBlogs />
        <TestimonialsSection />
        <FAQSection />
        <div className="fixed bottom-4 md:right-4 right-2">
          <WhatsAppButton
            phoneNumber="97144569917"
            message="Hi, I need assistance."
            className="btn-primary"
          />
        </div>
     </div>
    </>
  );
}