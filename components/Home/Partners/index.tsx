import React from "react";
import Marquee from "react-fast-marquee";
import p1 from "@/assets/imgs/p1.webp";
import p2 from "@/assets/imgs/p2.webp";
import p3 from "@/assets/imgs/p3.webp";
import p4 from "@/assets/imgs/p4.webp";
import p5 from "@/assets/p1.png";
import p6 from "@/assets/p2.png";
import p7 from "@/assets/p3.png";
import p8 from "@/assets/p4.png";
import p9 from "@/assets/p5.png";
import p10 from "@/assets/p6.png";
import p11 from "@/assets/p7.png";
import p12 from "@/assets/p8.png";
import p13 from "@/assets/p9.png";
import p14 from "@/assets/p10.png";
import p15 from "@/assets/p11.png";
import p16 from "@/assets/p12.png";

const Partners = () => {
  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
  ];

  return (
    <>
      <h2 className="md:text-3xl text-xl font-bold text-center mt-10 mb-3">
        Our Channel Partners
      </h2>
      <p className="md:text-lg text-sm text-center max-w-[700px] mx-auto text-[#666] mb-5">
        We have partnered with some of the best companies in the industry to
        provide you with the best services.
      </p>
      <Marquee
        gradient={false}
        speed={50}
        className="bg-primary w-full gap-10 py-3 flex md:flex-row flex-col items-center justify-between md:px-32 px-8"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="partner"
            className="md:h-[200px] md:w-[200px] w-[150px] object-contain px-5"
          />
        ))}
      </Marquee>
    </>
  );
};

export default Partners;
