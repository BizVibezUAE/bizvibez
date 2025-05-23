import React from "react";
import { FaFileAlt } from "react-icons/fa";
import img from "@/assets/Home Pg 2.png";
import { PopupButton } from "@typeform/embed-react";

const BusinessSetup2 = () => {
  return (
    <div className=" md:pt-16 px-8 min-h-screen bg-[#d9d9d9] md:px-16 flex flex-col">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <FaFileAlt className="text-primary text-5xl" />
        </div>
        <h3 className="md:text-3xl text-xl font-bold mb-4">
          Business setup in Dubai – the BizVibez way.
        </h3>
        <p className="md:text-lg mb-4">
          Our time-tested process saves you time and money, while removing the
          headaches of beginning your journey. We know the game. We have the
          networks. We are the leaders in this space.
        </p>
        <p className="text-gray-700 mb-8">
          Since 2009, our company formation experts have helped more than 20,000
          business owners and founders with business setup in Dubai. We’ve done
          the heavy lifting and helped them navigate a myriad of options, while
          they focus on their exciting new Dubai company. Our process saves you
          time and money, while removing the headaches of beginning your
          journey. Make sure you get set up the right way!
        </p>
        <p className="text-primary text-xl font-semibold mb-6">
          Find out why over 20,000 entrepreneurs have entrusted their business
          with us.
        </p>
        <PopupButton
          id="naqPzEEo"
          className="text-white bg-primary py-4 px-8 rounded text-lg"
        >
          Pricing
        </PopupButton>
      </div>
      <img
        src={img.src}
        alt="img"
        className="w-full md:h-[800px] mx-auto object-contain mt-10"
      />
    </div>
  );
};

export default BusinessSetup2;
