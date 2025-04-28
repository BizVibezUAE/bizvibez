"use client"

import ServiceHero from "@/components/Services/ServiceHero";
import { setupGuides } from "@/data";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/assets/SETUP GUAIDE.jpg";

const page = () => {
  return (
    <>
    <head>
  <title>{"Choosing a Company Name in the UAE | BizVibez Business Setup Experts"}</title>
  <meta
    name="description"
    content={
      "Learn how to choose the perfect company name in the UAE with BizVibez. Understand naming rules, regulations, and tips for a successful business setup. Start your journey today!"
    }
  />
  {/* Add the keywords meta tag */}
  <meta
    name="keywords"
    content="UAE company name, Dubai company registration, UAE business setup, company name rules UAE, Dubai business name, UAE company naming, business name registration UAE, Dubai company formation, UAE business regulations, BizVibez guides"
  />
  <meta
    property="og:title"
    content={
      "Choosing a Company Name in the UAE | BizVibez Business Setup Experts"
    }
  />
  <meta
    property="og:description"
    content={
      "Learn how to choose the perfect company name in the UAE with BizVibez. Understand naming rules, regulations, and tips for a successful business setup."
    }
  />
  <meta
    property="og:image"
    content={"https://www.bizvibez.com/logo.webp"}
  />
  <meta property="og:type" content="article" />
  <meta
    property="og:url"
    content={`https://www.bizvibez.com/guides`}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@bizvibez" />
  <meta
    name="twitter:title"
    content={
      "Choosing a Company Name in the UAE | BizVibez"
    }
  />
  <meta
    name="twitter:description"
    content={
      "Learn how to choose the perfect company name in the UAE with BizVibez. Understand naming rules, regulations, and tips for a successful business setup."
    }
  />
  <meta
    name="twitter:image"
    content={"https://www.bizvibez.com/logo.webp"}
  />
  <link
    rel="canonical"
    href={`https://www.bizvibez.com/guides`}
  />
</head>

      <ServiceHero
        image={img.src}
        title="THE RESOURCES FOR YOUR SUCCESS"
        subtitle="UAE BUSINESS SETUP GUIDES"
        description="Your success is our success. That is why we have prepared these resources to help you get your business on the right track, from the start."
        showButton
        buttonText="Get started today"
        costCalculator
        backgroundColor="#8D0169"
      />
      <div className="flex flex-col items-center pt-10 justify-center">
        <div className="flex items-center justify-center w-16 h-14 rounded-xl">
          <GlobeIcon size={38} className="text-primary" />
        </div>
        <h2 className="md:text-3xl text-xl font-semibold text-center max-w-[700px] mt-5">
          Business Setup Guides
        </h2>
      </div>

      <div className="grid grid-cols-1 md:w-7/12 w-full md:px-0 px-8 mx-auto my-20 gap-10">
        {setupGuides.map((guide, index) => (
          <div className="flex md:flex-row flex-col justify-between items-center md:gap-16 gap-10" key={index} >
            <div className="flex flex-col gap-1 w-full">
              <p className="text-2xl font-semibold">{guide.title}</p>
              <p className="text-justify">{guide.description}</p>
              {/* <Link href={`/guides/${guide.id}`}>
                                    <button className='bg-primary w-fit rounded text-white font-medium px-4 py-2 mt-5'>Download FREE</button>
                                </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
