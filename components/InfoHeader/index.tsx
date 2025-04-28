import React from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const InfoHeader = () => {
  return (
    <div>
      <div className=" hidden md:flex w-full bg-[#d9d9d9] md:h-[40px] py-2 items-center justify-end md:px-32 px-5 gap-6">
        <a href="tel:+971542019999" className="flex w-auto items-center gap-2">
          <FaPhone className="text-primary md:text-lg text-xs" />
          <span className="md:text-sm text-xs font-light">
            +971 54 201 9999
          </span>
        </a>
        <a
          href="https://wa.me/97144569917"
          className="flex items-center gap-2"
        >
          <IoLogoWhatsapp className="text-green-500 md:text-2xl text-sm" />
          <span className="ms:text-sm text-xs font-light">WhatsApp</span>
        </a>
        <a
          href="https://maps.app.goo.gl/V15q1zX5aL3AYqvh7?g_st=com.google.maps.preview.copy"
          className="flex items-center gap-2"
        >
          <FaLocationDot className="text-primary md:text-2xl text-sm" />
          <span className="ms:text-sm text-xs font-light">
            602 Bays Water Tower, Business Bay Dubai United Arab Emirates.
          </span>
        </a>
        {/* <div className="flex items-center gap-2">
          <FaUsers className="md:text-xl text-sm text-primary" />
          <span className="text-xs">Refer and Earn</span>
        </div> */}
      </div>
    </div>
  );
};

export default InfoHeader;
