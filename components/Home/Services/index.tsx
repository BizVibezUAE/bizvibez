import React from "react";
import { homeServices } from "@/data/index";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#d9d9d9] md:p-16 px-8 py-5 items-center flex flex-col">
      <h2 className="md:text-3xl text-xl font-bold text-center text-primary max-w-[600px]">
        Looking for corporate services?
      </h2>
      <p className="md:text-xl text-lg text-center mt-3">
        Our Tailored made corporate services specially made for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-full max-w-[1200px] mx-auto">
        {homeServices.map((service) => (
          <Link
            href={service.href}
            key={service.title}
            className="p-5 border border-gray-200 hover:border-primary rounded-lg shadow-sm bg-white hover:bg-fuchsia-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex mb-4 flex-col">
              <h2 className="text-lg mt-3 font-bold">{service.title}</h2>
            </div>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <a className="text-primary mt-4 inline-block">{service.link}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
