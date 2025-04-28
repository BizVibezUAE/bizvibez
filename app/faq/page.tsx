"use client";
import { faq } from "@/data";
import React, { useState } from "react";
import Markdown from "react-markdown";
import { GlobeIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm/ContactForm";
import ServiceHero from "@/components/Services/ServiceHero";
import FAQSection from "@/components/Home/Faqs";
import img from "@/assets/FAQS.png";

const page = () => {
  return (
    <>
    <head>
      <title>FAQS | BizVibez Consultants - Connecting Businesses</title>
      <meta name="description" content="Do you have questions about BizVibez, entrepreneurship or anything about doing business in the UAE? Check our FAQ below to find the answers you need." />
    </head>
      <ServiceHero
        title="Frequently Asked Questions"
        subtitle=""
        image={img.src}
        backgroundColor="#8D0169"
        showButton
        costCalculator
        buttonText="Get started today"
        description="Do you have questions about BizVibez, entrepreneurship or anything about doing business in the UAE? Check our FAQ below to find the answers you need."
      />
      <FAQSection />
      <div className="md:w-7/12 w-full mx-auto my-20 md:px-0 px-6">
        <ContactForm
          backgroundColor="#8D016910"
          buttonColor="#8D0169"
          title="Contact Us"
        />
      </div>
    </>
  );
};

export default page;
