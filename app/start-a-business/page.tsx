"use client";
import ServiceHero from "@/components/Services/ServiceHero";
import { startBusiness } from "@/data/index";
import { MapPin } from "lucide-react";
import Markdown from "react-markdown";
import React from "react";
import rehypeRaw from "rehype-raw";
import ContactForm from "@/components/ContactForm/ContactForm";
import img from "@/assets/How to start a business in UAE.png";

const page = () => {
  return (
    <>
      <head>
  <title>{"Start a Business in the UAE | BizVibez Business Setup Experts"}</title>
  <meta
    name="description"
    content={
      "Learn how to start a business in the UAE with BizVibez. Understand the steps, requirements, and processes for setting up your business in Dubai or other Emirates. "
    }
  />
  {/* Add the keywords meta tag */}
  <meta
    name="keywords"
    content="start a business in UAE, UAE business setup, Dubai company formation, Abu Dhabi business setup, UAE free zone company, UAE mainland company, business license UAE, UAE business regulations, BizVibez guides"
  />
  <meta
    property="og:title"
    content={
      "Start a Business in the UAE | BizVibez Business Setup Experts"
    }
  />
  <meta
    property="og:description"
    content={
      "Learn how to start a business in the UAE with BizVibez. Understand the steps, requirements, and processes for setting up your business in Dubai, Abu Dhabi, or other Emirates."
    }
  />
  <meta
    property="og:image"
    content={"https://www.bizvibez.com/logo.webp"}
  />
  <meta property="og:type" content="article" />
  <meta
    property="og:url"
    content={`https://www.bizvibez.com/guides/start-a-business`}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@bizvibez" />
  <meta
    name="twitter:title"
    content={
      "Start a Business in the UAE | BizVibez"
    }
  />
  <meta
    name="twitter:description"
    content={
      "Learn how to start a business in the UAE with BizVibez. Understand the steps, requirements, and processes for setting up your business in Dubai, Abu Dhabi, or other Emirates."
    }
  />
  <meta
    name="twitter:image"
    content={"https://www.bizvibez.com/logo.webp"}
  />
  <link
    rel="canonical"
    href={`https://www.bizvibez.com/guides/start-a-business`}
  />
</head>
      <ServiceHero
        backgroundColor="#8D0169"
        image={img.src}
        title="HOW TO START A BUSINESS IN DUBAI"
        buttonText="Get started today"
        costCalculator
        description="It’s no secret that Dubai offers business owners countless benefits, the biggest ones being 0% income tax and a central, strategic location. If you are curious about how to start a business in Dubai, BizVibez uses a time-tested process to get your idea to market as soon as possible"
        showButton
        subtitle="BizVibez PRESENTS"
      />
      <div className="flex flex-col items-center pt-10 justify-center my-20">
        <div className="flex items-center justify-center w-16 h-14 rounded-xl">
          <MapPin size={38} className="text-primary" />
        </div>
        <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
          Everything You Need to Know About How to Start a Business in Dubai
        </h2>
      </div>

      <div className="md:w-7/12 w-full flex md:flex-row flex-col mx-auto justify-center gap-10 md:px-0 px-8">
        <div className="md:w-1/3 md:sticky top-40 flex flex-col gap-2 text-sm h-fit text-primary w-full bg-primary/5 rounded-xl p-5">
          <p className="text-xl font-semibold">Table of contents</p>
          <a href="#start-a-business">Why start a business in Dubai?</a>
          <a href="#choose-an-industry">- Choose an industry</a>
          <a href="#choose-a-location">- Choose a location</a>
          <a href="#choose-an-industry">- Choose a company name</a>
          <a href="#complete-paperwork">- Complete paperwork</a>
          <a href="#apply-for-a-license">- Apply For a License</a>
          <a href="#open-a-bank-account">- Open a bank account</a>
          <a href="#apply-for-visa">- Apply for a visa</a>
          <a href="#etiquette-in-the-uae">- Etiquette in the UAE</a>
          <a href="#conclusion">Conclusion</a>
        </div>
        <div className="md:w-2/3 w-full">
          <img src="/dubai 3.jpg" alt="dubai" className="w-full" />
          <Markdown
            className={"markdown text-justify"}
            rehypePlugins={[rehypeRaw]}
          >
            {startBusiness}
          </Markdown>
          <img src="/dubai 2.jpg" alt="dubai" className="w-full" />
        </div>
      </div>

      <div className="md:w-7/12 w-full mx-auto my-20 md:px-0 px-8">
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
