import React from "react";
import ServiceHero from "./ServiceHero";
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import CTAButton from "../Button/CTAButton";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Requirements from "../Requirements/Requirements";
import SquareNote from "../Note/SquareNote";
import { ServiceType } from "@/types";
import Link from "next/link";
import { FaCcVisa } from "react-icons/fa";
import Head from "next/head";

const Service = ({ service }: { service: ServiceType }) => {
  return (
    <>
   
      <div>
       
        {/* Hero */}
        <ServiceHero
          backgroundColor={service.primaryColor}
          buttonText={service.heroButton}
          title={service.heroTitle}
          description={service.heroDescription}
          subtitle={service.title}
          image={service.heroImage}
          video={service.heroVideo && service.heroVideo}
          showButton
        />
  
        <div className="md:px-32 text-justify px-8 mb-40 mt-20">
          <Breadcrumb
            textColor={"#8D0169"}
            links={["Home", "Services", service.title]}
            description={service.breadcrumbDescription}
          />
  
          {service.notes && service.notes.length > 0 && (
            <h2 className="text-2xl font-bold uppercase mt-12">MUST KNOW</h2>
          )}
          <div
            className={`grid gap-x-10 mt-10 md:gap-y-0 gap-y-5 ${
              service.notes.length > 1
                ? "md:grid-cols-3 grid-cols-1"
                : "grid-cols-1"
            }`}
          >
            {service.notes &&
              service.notes.length > 0 &&
              service.notes.map((note, idx) => (
                <SquareNote
                  content={note.description}
                  title={note.title}
                  contentBackground={"#8D016910"}
                />
              ))}
          </div>
          {/* {service.services && service.services.length > 0 && (
            <h1 className="text-2xl font-bold uppercase my-12">
              OUR {service.title} SERVICES
            </h1>
  
          )}
  
          <div
            className={`grid gap-x-10 gap-y-10 mt-10 mb-16 ${service.serviceStyle != "square"
              ? service.serviceStyle == "rounded"
                ? service.serviceOrientation === "row"
                  ? "md:grid-cols-1 "
                  : "md:grid-cols-3 grid-cols-1"
                : service.serviceOrientation === "column"
                  ? "grid-cols-1"
                  : "md:grid-cols-3 grid-cols-1"
              : service.serviceOrientation === "row" ? "grid-cols-1" : "md:grid-cols-3 grid-cols-1"
              }`}
          >
            {service.serviceStyle === "rounded"
              ? service?.services?.map((ser, idx) => (
                <RoundServiceCard
                  subtitle={ser.description}
                  // @ts-ignore
                  orientation={service.serviceOrientation}
                  titleColor={"#8D0169"}
                  icon={
                    <Image
                      src={ser.icon}
                      alt={ser.title}
                      width={500}
                      height={500}
                      className="w-[500px]"
                    />
                  }
                  iconBackgroundColor={"#8D016910"}
                  title={ser.title}
                />
              ))
              : service.serviceStyle == "square"
                ? service.services?.map((ser, idx) => (
                  <SquareServiceCard
                    description={ser.description}
                    direction={service.serviceOrientation}
                    orientation="column"
                    icon={
                      <Image
                        src={ser.icon}
                        alt={ser.title}
                        width={500}
                        height={100}
                        className={`${service.serviceOrientation === "row"
                          ? "w-[120px]"
                          : "w-[400px]"
                          }`}
                      />
                    }
                    iconBackgroundColor={"#8D016910"}
                    title={ser.title}
                  />
                ))
                : service.services?.map((ser, idx) => (
                  <RectangleServiceCard
                    description={ser.description}
                    // @ts-ignore
                    direction={service.serviceOrientation}
                    orientation="column"
                    backgroundColor={"#8D016910"}
                    icon={
                      <Image
                        src={ser.icon}
                        alt={ser.title}
                        width={500}
                        height={100}
                        className={`${service.serviceOrientation === "row"
                          ? "w-[120px]"
                          : "w-[100px]"
                          }`}
                      />
                    }
                    iconBackgroundColor={"#8D016910"}
                    title={ser.title}
                  />
                ))}
          </div> */}
          <div
            className={` mt-12 grid gap-5  ${
              service.requirements.length > 1
                ? "md:grid-cols-2 grid-cols-1"
                : "grid-cols-1"
            }`}
          >
            {service.requirements &&
              service.requirements.length > 0 &&
              service.requirements.map((req) => (
                <Requirements
                  title={req.title}
                  titleBackground={"#8D016910"}
                  titleColor={"#8D0169"}
                  requirements={req.points}
                />
              ))}
          </div>
          <div className="flex md:flex-row flex-col justify-center md:mt-20 mt-10 gap-24">
            <div
              className={`flex flex-col gap-5
              ${service.info && service.info.length > 0 ? "w-full" : "hidden"}
              `}
            >
              {service.info &&
                service.info.length > 0 &&
                service.info.map((info, idx) => (
                  <Info description={info.description} title={info.title} />
                ))}
              {service.title.toLowerCase() === "freelance visa" && (
                <div>
                  <section className="py-12">
                    <div>
                      <h2 className="text-3xl font-semibold text-center mb-8">
                        Types of Freelance Visas in Dubai
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Visa Card 1 */}
                        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
                          <div className="bg-primary rounded-full p-4">
                            <FaCcVisa className="text-white text-3xl" />
                          </div>
                          <h3 className="mt-6 text-xl font-semibold text-primary">
                            Freelance Visa for Media
                          </h3>
                          <p className="mt-4 text-gray-600 text-sm">
                            For professionals in the media sector, a portfolio of
                            work is required.
                          </p>
                        </div>
  
                        {/* Visa Card 2 */}
                        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
                          <div className="bg-primary rounded-full p-4">
                            <FaCcVisa className="text-white text-3xl" />
                          </div>
                          <h3 className="mt-6 text-xl font-semibold text-primary">
                            Freelance Visa for Education
                          </h3>
                          <p className="mt-4 text-gray-600 text-sm">
                            For researchers, e-learning advisors, and other
                            education specialists.
                          </p>
                        </div>
  
                        {/* Visa Card 3 */}
                        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
                          <div className="bg-primary rounded-full p-4">
                            <FaCcVisa className="text-white text-3xl" />
                          </div>
                          <h3 className="mt-6 text-xl font-semibold text-primary">
                            Freelance Visa for Design
                          </h3>
                          <p className="mt-4 text-gray-600 text-sm">
                            For designers in various fields like graphic design,
                            costume design, and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <p className="my-5">
                    To wrap up, The freelance visa in Dubai allows freelancers to
                    work independently and legally within the city. Also,
                    attractive tax incentives like 0% personal and corporate
                    income tax make earning and retaining more of your income
                    possible.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`
              ${
                service.contactForm
                  ? service.info && service.info.length > 0
                    ? "md:w-7/12 w-full"
                    : "md:w-11/12 w-full"
                  : "hidden"
              }
              `}
            >
              {service.contactForm && (
                <ContactForm
                  backgroundColor={"#8D016910"}
                  buttonColor="#8D0169"
                  title={service.title}
                />
              )}
            </div>
          </div>
          <br />
          <Link href="/contact" className="mt-10">
            <CTAButton
              backgroundColor={"#8d0169"}
              color="white"
              className="rounded mx-auto font-medium text-lg"
              title="Book your free consultation"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Service;
