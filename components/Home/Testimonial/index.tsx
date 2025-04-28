import React from "react";
import TestimonialCard from "./Card";
import { testimonials } from "@/data/index";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-[#d9d9d9] md:py-8 px-8 py-5 flex flex-col items-center justify-center">
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-xl font-bold">
          Join 20,000 happy customers
        </h2>
        <p className="text-gray-700 font-light md:text-lg mt-2 max-w-[700px]">
          Make sure you hire the best in the business for your business setup in
          Dubai. With BizVibez, you will fast-track your path to business
          success.
        </p>
        <div className="flex md:flex-row flex-col items-center md:gap-0 gap-2 justify-center mt-4">
          <span className="ml-2 text-xl font-semibold">Google Reviews</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial: any) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            date={testimonial.date}
            rating={testimonial.rating}
            text={testimonial.text}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
