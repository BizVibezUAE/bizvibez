"use client";
import React from "react";
import ServiceHero from "../Services/ServiceHero";
import Image from "next/image";
import { GlobeIcon } from "lucide-react";
import Characteristics from "./Characteristics";
import { aboutPoints, team } from "@/data/index";
import TeamCard from "../Cards/TeamCard";
import img from "@/assets/About us.png";
import img2 from "@/assets/About us 2.png";

const About = () => {
  return (
    <div>
      <ServiceHero
        title="The BizVibez Story"
        description="Founded in 2009, BizVibez mission is to remove the complexities of company setup in Dubai so that our clients can focus 100% on running their businesses. "
        subtitle="About Us"
        image={img.src}
        backgroundColor="#8D0169"
        buttonText="Get started today"
        showButton
      />
      <div className="md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
        <div className="flex items-center justify-center w-16 h-14  rounded-xl">
          <GlobeIcon size={38} className="text-primary" />
        </div>
        <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
          The BizVibez Story
        </h2>
        <div className="mt-10 flex md:flex-row flex-col justify-center md:gap-20 gap-10 items-center">
          <p className="md:w-1/2 w-full text-justify">
            <strong>
              {" "}
              BizVibeZ is a Management Consulting firm specialized in Market’s
              best & trendiest Solutions{" "}
            </strong>
            <br />
            With over 15 years of rich Banking and Business Management
            Experience, we intend to assist our valued clients with the best of
            the services. We have an immense working exposure and portfolio of
            UAE and international clients which made us to stand out of the
            crowd with 100% work delivery of Company Formation and Banking
            Assistance. Whether you are a startup, a small business, or an
            individual simply requiring your own trade licence, with BizVibez
            you won’t have to lose even a night’s sleep worrying about the red
            tape involved with the UAE free zone and mainland company setup
            process. That’s because we do all the heavy lifting for you. While
            the technical, administrative, and financial aspects of setting up a
            business in the UAE can seem challenging, with the right support the
            process is far more straightforward and affordable than you might
            think. BizVibez provides just that type of support, and it’s what
            has led us to become the leading company setup specialists in Dubai
            and the UAE. More than 20,000 entrepreneurs have trusted us to set
            up their companies, and almost 90% of our clients renew their trade
            licence with us every year going forward.
          </p>
          <iframe
            className="md:w-1/2 w-full h-[50vh] rounded-xl"
            src="https://www.youtube.com/embed/khozQM-8vrE?si=b4ZExN4xWDxtZbiv"
            title="BizVibez - Business Setup With No Regrets"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      <Characteristics
        title="Setting Up a Company With No Regrets"
        points={aboutPoints}
        image={img2.src}
      />
    </div>
  );
};

export default About;
