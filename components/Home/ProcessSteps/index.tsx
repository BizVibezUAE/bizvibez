import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import doc1 from "@/assets/1.png";
import doc2 from "@/assets/2.png";
import doc3 from "@/assets/3.png";
import doc4 from "@/assets/4.png";

const ProcessSteps = () => {
  return (
    <div className="min-h-screen bg-white md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
      <div className="flex items-center justify-center w-16 h-14 rounded-xl ">
        <IoDocumentTextOutline className="text-primary w-12 h-12" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
        The process of business setup in Dubai
      </h2>
      <p className="md:text-xl max-w-[780px] text-center font-light mt-3">
        With BizVibez as your company formation partner, registering a company
        in the UAE is not only easy, but it’s the most cost-effective way to do
        it! In fact, the entire process can take as little as 24 hours! That’s
        right! All you have to do is supply us with the relevant information
        about your company and we do the rest. Here’s our time-tested process:
      </p>
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <img
              src={doc1.src}
              width={150}
              height={150}
              alt="Prepare Documentation"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              1. Prepare Documentation
            </h2>
            <p className="font-light">
              If you’re an overseas entrepreneur starting up in a new country
              for the first time, the documentation process can be daunting. We
              help you to make the right decisions for your Dubai company and
              handle all of the complex paperwork.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={doc2.src}
              width={150}
              height={150}
              alt="Business License"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">2. Business Licence</h2>
            <p className="font-light">
              Choosing the right license and applying for it is crucial for a
              smooth business setup in Dubai. Understanding the dos and don’ts
              of obtaining your business license will help you avoid common
              pitfalls. Some business categories may need prior approvals from
              specific authorities. A company formation expert can guide you
              through these requirements and ensure a successful start for your
              business.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={doc3.src}
              width={150}
              height={150}
              alt="Visa Process"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">3. Visa Process</h2>
            <p className="font-light">
              Private companies can obtain new employment entry permits for
              their employees provided they apply for residence visa status
              within 30 days of the employee’s entry into the UAE.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={doc4.src}
              width={150}
              height={150}
              alt="Bank Account"
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">4. Bank Account</h2>
            <p className="font-light">
              Setting up a corporate bank account in the UAE can be a little
              arduous for international entrepreneurs. It requires careful
              consideration and there are several boxes to tick to ensure you
              have everything in place before approaching your bank of choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
