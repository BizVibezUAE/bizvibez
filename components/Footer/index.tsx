"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      {(pathname === "/services/freezone-overview" ||
        pathname === "services/business-activities" ||
        pathname === "/services/our-solution" ||
        pathname === "/services/freezone-license" ||
        pathname === "/services/uae-residence-visa" ||
        pathname === "/services/registration-process" ||
        pathname === "/services/our-solution" ||
        pathname === "/services/mainland-overview" ||
        pathname === "/services/dubai-mainland-license" ||
        pathname === "/services/business-activities" ||
        pathname === "/services/mainland-visas" ||
        pathname === "/services/offshore") && (
        <div className="px-8 md:px-16 py-10 bg-gray-100">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Why choose Dubai for starting a business?
          </h2>
          <p className="mb-4">
            So many reasons! Here's a list of the most common ones:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The UAE government actively promotes businesses as part of its
              long-term economic stability plan.
            </li>
            <li>
              Dubai offers a tax-friendly environment and competitive labor and
              financing costs.
            </li>
            <li>
              It has no foreign exchange controls, trade barriers, or quotas.
            </li>
            <li>
              Dubai is strategically placed for doing business, with easy access
              to 1.5 billion consumers in Africa, West Asia, Eastern Europe, and
              the Middle East.
            </li>
            <li>
              Our world-class transport links also make it an easy place to
              attract business to.
            </li>
            <li>
              In terms of business setup, the process is straightforward and
              affordable.
            </li>
            <li>
              Dubai has a large pool of highly educated talent and world-class
              infrastructure, making it ideal for startups.
            </li>
            <li>
              Its high standard of living combined with unparalleled safety
              measures makes Dubai an alluring destination for global talent.
            </li>
            <li>
              Conducting market research in Dubai is simplified due to clear
              procedures and robust legal frameworks.
            </li>
          </ul>
        </div>
      )}

      <footer className="bg-[#1a1a1a] text-gray-100 py-10">
        <div className="container mx-auto px-6">
          <p className="font-bold uppercase leading-relaxed text-xl md:text-3xl text-center mx-auto mb-10">
            Make us your family business advisor not just consultant
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="w-full px-6 mb-8 md:mb-0">
              <h2 className=" font-bold mb-4">MAIN OFFICE</h2>

              <p>
                602 Bays Water Tower, Business Bay Dubai United Arab Emirates.
              </p>
              <a
                href="https://maps.app.goo.gl/D61ovMnS6uum7eP6A"
                className="text-gray-300 underline mt-2 inline-block"
              >
                Click for Directions
              </a>
            </div>
            <div className="w-full px-6 mb-8 md:mb-0">
              <h2 className=" font-bold mb-4">FREE ZONES</h2>
              <ul>
                <li className="mb-2">
                  <a
                    href="/services/freezone-overview"
                    className="hover:text-blue-600"
                  >
                    Overview
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/business-activities"
                    className="hover:text-blue-600"
                  >
                    Business Activities
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/freezone-license"
                    className="hover:text-blue-600"
                  >
                    Free Zone License Locations and Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/uae-residence-visa"
                    className="hover:text-blue-600"
                  >
                    UAE Visas
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/registration-process"
                    className="hover:text-blue-600"
                  >
                    Registration Process
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/our-solution"
                    className="hover:text-blue-600"
                  >
                    Our solution
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-6 mb-8 md:mb-0">
              <h2 className=" font-bold mb-4">MAINLAND</h2>
              <ul>
                <li className="mb-2">
                  <a
                    href="/services/mainland-overview"
                    className="hover:text-blue-600"
                  >
                    Overview
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/sponsorship"
                    className="hover:text-blue-600"
                  >
                    Sponsorship
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/dubai-mainland-license"
                    className="hover:text-blue-600"
                  >
                    Dubai Mainland Licence
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/mainland-visas"
                    className="hover:text-blue-600"
                  >
                    Mainland Visas
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services/business-activities"
                    className="hover:text-blue-600"
                  >
                    Mainland Activities
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-6 mb-8 md:mb-0">
              <h2 className=" font-bold mb-4">SUPPORT</h2>
              <ul>
                <li className="mb-2">
                  <a href="/contact" className="hover:text-blue-600">
                    Support Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faq" className="hover:text-blue-600">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/guides" className="hover:text-blue-600">
                    Setup Guides
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/partners" className="hover:text-blue-600">
                    Our Partners
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-600">
                    Citizenship & Residency
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-6">
              <h2 className=" font-bold mb-4">RESOURCES</h2>
              <ul>
                <li className="mb-2">
                  <a href="/about" className="hover:text-blue-600">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faq" className="hover:text-blue-600">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/partners" className="hover:text-blue-600">
                    Our Partners
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/start-a-business" className="hover:text-blue-600">
                    How to Start a Business in Dubai
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/get-a-trade-license"
                    className="hover:text-blue-600"
                  >
                    Trade License Dubai
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/guides" className="hover:text-blue-600">
                    Free UAE Setup Guides
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="border-t mt-8 pt-8 flex flex-col justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 uppercase text-center">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/freezone-overview"
                  className="hover:text-blue-600"
                >
                  Company Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bank-account-opening"
                  className="hover:text-blue-600"
                >
                  Bank Account Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pr-services"
                  className="hover:text-blue-600"
                >
                  PR Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/virtual-ejari"
                  className="hover:text-blue-600"
                >
                  Virtual Ejari
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-600">
                  Our Blogs
                </Link>
              </li>
            </ul>
            <div className="mt-5 flex gap-5">
              <a
                href="https://www.facebook.com/share/cHKA1ASuCQhekVCp/?mibextid=LQQJ4d"
                target="_blank"
                className="text-2xl md:text-3xl text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/bizvibez_consultants/"
                target="_blank"
                className="text-2xl md:text-3xl text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/bizvibezconsultants/mycompany/?viewAsMember=true"
                target="_blank"
                className="text-2xl md:text-3xl text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@bizvibezconsultants"
                target="_blank"
                className="text-2xl md:text-3xl text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
