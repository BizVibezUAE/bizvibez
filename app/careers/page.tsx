"use client";
import React from "react";
import img from "@/assets/Careers.png";
import ServiceHero from "@/components/Services/ServiceHero";

const ApplyPage: React.FC = () => {
  return (
    <div>
      <ServiceHero
        title="BizVibeZ offers the best internships and jobs."
        description="The BizVibeZ team welcomes all talents in the business industry. If you think you have the right experience and passion to work with us, please contact our recruitment team. Don’t forget to mention how you can add value to us."
        subtitle="Careers"
        image={img.src}
        backgroundColor="#8D0169"
        buttonText="Get started today"
        showButton
      />
      <div className="relative py-10 px-8 bg-[#d9d9d9]">
        {/* Background pattern or elements */}
        <div className="absolute inset-0 w-full h-full bg-pattern opacity-10 pointer-events-none"></div>

        <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
            Join Our Team
          </h2>
          <div className="space-y-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-4 text-gray-700">
                Digital Marketing Executive
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a Digital Marketing Specialist, you will play a pivotal role
                in managing client relationships, developing marketing
                strategies, overseeing social media accounts, and ensuring the
                successful execution of digital campaigns. Your primary
                responsibility will be to act as the main point of contact for
                clients, understanding their needs, and delivering tailored
                digital marketing solutions.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  Act as the main liaison between clients and the agency,
                  building and maintaining strong, long-term relationships while
                  understanding client needs and objectives.
                </li>
                <li>
                  Know graphic designing, video making & editing. Make graphics
                  for the company Ads.
                </li>
                <li>
                  Develop and implement comprehensive digital marketing
                  strategies aligned with client goals, collaborating with
                  internal teams to ensure successful execution.
                </li>
                <li>
                  Oversee company social media accounts, creating and curating
                  engaging content, monitoring channels, and analyzing
                  performance metrics to provide actionable insights.
                </li>
                <li>
                  Ensure clear, consistent communication with clients, providing
                  regular updates and detailed reports, and proactively
                  addressing any issues or challenges to achieve desired
                  outcomes.
                </li>
                <li>
                  Manage and execute organic and paid marketing campaigns on
                  Facebook, Instagram, and other social media platforms.
                </li>
                <li>
                  Collaborate with graphic designers, video editors, and account
                  managers to create and execute social media marketing
                  campaigns according to the client's needs and priorities.
                </li>
              </ul>
              <h5 className="font-bold mt-8 text-gray-700">Qualifications:</h5>
              <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700">
                <li>
                  Bachelor’s degree in marketing, Communications, Business, or a
                  related field.
                </li>
                <li>
                  3+ years of proven experience preferably within a digital
                  marketing agency in the UAE.
                </li>
                <li>Knowledge of the UAE business market.</li>
                <li>
                  Strong understanding of digital marketing concepts and best
                  practices.
                </li>
                <li>Design the post graphics and videos.</li>
                <li>
                  Proficiency in using digital marketing tools and platforms.
                </li>
                <li>Excellent communication and interpersonal skills.</li>
                <li>
                  Strong problem-solving abilities and attention to detail.
                </li>
                <li>
                  Ability to multitask and manage multiple client accounts
                  simultaneously.
                </li>
                <li>
                  Familiarity with social media management and analytics tools.
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-4 text-gray-700">
                Business Development Advisor
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Responsibilities include building leads database, preparing
                proposals, converting leads to sales, providing client guidance
                on business opportunities, and ensuring smooth coordination with
                authorities during the business setup process.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  Build leads database for business setup and new company
                  formation.
                </li>
                <li>
                  Prepare proposals and quotations, negotiate, and convert leads
                  to sales.
                </li>
                <li>
                  Provide guidance and recommendations to clients regarding
                  their business opportunities and help them understand the
                  difference between mainland and free zone licenses.
                </li>
                <li>
                  Coordinate with various government and free zone authorities
                  and support clients throughout their business setup process.
                </li>
                <li>
                  Be responsive to all client queries and ensure to provide the
                  best and most reliable service.
                </li>
                <li>
                  Formulate recommendations and solutions with attention to a
                  client's wishes, capabilities, and limitations forming concise
                  reports.
                </li>
                <li>
                  Support the customer in gathering the required documentation
                  to support license application in a timely manner through the
                  clear explanation of the application process and its key
                  steps.
                </li>
                <li>
                  Display and maintain a high level of UAE business setup market
                  knowledge with customers to be seen as ‘expert’ and a credible
                  source of information.
                </li>
                <li>
                  Represent the Company professionally in both client and
                  networking situations.
                </li>
                <li>
                  Contribute to the development of marketing materials,
                  promotions, and digital content.
                </li>
                <li>Attend networking events to promote company services.</li>
                <li>
                  Keeping in touch with channel partners to ensure that the
                  relationship with the Free zone is good.
                </li>
                <li>
                  Recognize, explore, and bring to the attention of management,
                  opportunities, and areas for future company development.
                </li>
                <li>
                  As required, assist with the orientation and induction of new
                  colleagues to transfer knowledge and best practice.
                </li>
                <li>
                  Undertake any other reasonable duties as required and
                  requested by the Company.
                </li>
                <li>
                  Preparing reports as required and/or requested by the line
                  manager.
                </li>
              </ul>
              <h5 className="font-bold mt-8 text-gray-700">Qualifications:</h5>
              <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700">
                <li>
                  Minimum 2-3 years of experience working as a Business Setup
                  Consultant or Company Formation Specialist.
                </li>
                <li>Excellent communication skills in English.</li>
                <li>
                  Demonstrated ability to convert prospects, close deals, and
                  achieve sales quotas.
                </li>
                <li>
                  Strong knowledge of sales principles, methods, practices, and
                  techniques.
                </li>
                <li>
                  Strong problem identification and objection resolution skills.
                </li>
                <li>
                  Able to build and maintain lasting relationships with
                  customers.
                </li>
                <li>
                  Exceptional verbal communication and presentation skills.
                </li>
                <li>
                  Self-motivated, with high energy and an engaging level of
                  enthusiasm.
                </li>
                <li>
                  Proven track record of strong sales and lead conversion
                  experience.
                </li>
                <li>
                  Must have experience dealing with all Free zone and DED
                  authorities in the UAE.
                </li>
                <li>
                  Must have experience working in Business Setup Consultancies
                  in the UAE.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center text-gray-800">
            <p className="text-lg">
              If you think you have the right experience and passion to work
              with us, please contact our recruitment team at{" "}
              <a
                href="mailto:careers@bizvibez.com"
                className="text-primary font-semibold hover:underline"
              >
                careers@bizvibez.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
