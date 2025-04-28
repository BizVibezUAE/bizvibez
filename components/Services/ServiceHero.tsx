import Image from "next/image";
import React, { ReactNode } from "react";
import { PopupButton } from "@typeform/embed-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceHero = ({
  buttonText,
  title,
  description,
  subtitle,
  image,
  video,
  backgroundColor,
  showButton = false,
  costCalculator = false,
}: {
  buttonText?: string;
  title: string;
  description?: string;
  subtitle?: string;
  image: any;
  video?: string;
  costCalculator?: boolean;
  backgroundColor: string;
  showButton?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div
      className="w-full flex md:mt-[140px] mt-[100px] px-8 md:px-32 gap-5 justify-center items-center md:flex-row flex-col overflow-hidden md:h-[66vh]"
      style={{ backgroundColor: "#8D0169" }}
    >
      <div className="text-white flex flex-col gap-2 md:w-1/2 ">
        <p className="uppercase font-medium md:text-lg">{subtitle}</p>
        <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
        <p className="md:text-xl">{description}</p>
        {showButton && (
          <Link
            href="/contact"
            className="bg-white mt-5 w-fit font-medium text-center px-14 py-6 rounded-md text-md"
            style={{ color: "#8D0169" }}
          >
            {buttonText}
          </Link>
        )}
        {costCalculator && (
          <PopupButton
            id="naqPzEEo"
            className="mt-5 w-fit text-white underline text-sm"
          >
            Calculate your setup costs
          </PopupButton>
        )}
      </div>
      <div className="md:w-1/2 md:self-end h-full">
        <img src={image} alt="hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServiceHero;
