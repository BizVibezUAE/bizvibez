"use client";
import React from "react";
import img from "@/assets/hero.png";
import Image from "next/image";
import Link from "next/link";
import google from "@/assets/google.png";

const Hero = () => {
  return (
    <div className="md:pt-10 ">
      <Image
        src={img}
        alt="hero image"
        className="opacity-80 object-cover w-full h-screen absolute top-0 left-0"
      />
      <div className="w-full h-screen absolute top-0 left-0" />
      <div className="flex flex-col bg-black/50  md:px-0 px-5 items-center justify-center w-full h-screen relative md:pt-32 ">
      <h1 className="text-[#fff] md:text-[2.5rem] md:leading-[2.75rem] text-xl text-center md:mt-14 max-w-[800px] font-bold">
          OPEN YOUR DREAM BUSINESS & <br /> ENJOY YOUR UAE RESIDENCY TODAY
        </h1>
        <Link
          href="/start-a-business"
          className="py-2 px-4 bg-primary text-white mt-3"
        >
          WHERE TO START?
        </Link>
        <p className="text-white text-center mt-3 md:text-lg text-m max-w-5xl">
          That depends. What is your business activity? Free zone, mainland or
          Offshore? How many visas or shareholders? From our experience with
          business setup in UAE for over 20,000 entrepreneurs, we have created
          the Business Setup Cost Calculator to give you the answer.
        </p>
        <a
          href="https://search.google.com/local/reviews?placeid=ChIJNSoXgldDXz4R5-4l4np9t_Y&q=BizVibeZ+Consultants&hl=en&gl=AE"
          target="_blank"
          rel="noreferrer"
          className="mb-64 mt-5 flex items-center p-2 border rounded-lg shadow-lg bg-white max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
        >
          <span className="text-xs sm:text-base font-medium text-center sm:text-left">
            EXCELLENT
          </span>
          <div className="flex items-center ml-2">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L17.82 22 12 18.27 6.18 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              ))}
          </div>
          <span className="text-xs sm:text-base font-medium ml-2 text-center sm:text-left">
            72 reviews <span className="font-light">on</span>
          </span>
          <Image src={google} alt="google" className="w-12 sm:w-16 ml-2" />
        </a>
      
      </div>
    </div>
  );
};

export default Hero;
