"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { PhoneIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import img from "@/assets/CONTACT.gif";
import ServiceHero from "@/components/Services/ServiceHero";
import axios from "axios";
import CountryCodeSelect from "@/components/CountryCodeSelect/CountryCodeSelect";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, category, message } = formData;
    if (!firstName || !lastName || !email || !phone || !category || !message) {
      alert("Please fill out all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/contact2", {
        firstName,
        lastName,
        email,
        phone:
          (
            selectedCountry.idd.root + selectedCountry.idd.suffixes[0]
          ).toString() +
          " " +
          phone,
        requirement: category,
        message,
      });
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
      setLoading(false);
      return;
    }
  };

  return (
    <div>
      <ServiceHero
        backgroundColor="#8D0169"
        description="Book a free consultation with one of our Company Formation Specialists now and find out all the information you need about starting your own company in the UAE."
        image={img.src}
        subtitle="Contact Us"
        title=" FOR FREE CONSULTATION TO START YOUR BUSINESS IN UAE"
      />
      <div className="md:px-40 px-8 my-5 w-full flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full flex flex-col py-5">
          <div className="flex md:flex-row flex-col gap-5 ">
            <a
              href="tel:+971542019999"
              className="flex w-full flex-row gap-5 px-8 py-3 md:w-fit rounded-xl items-center bg-primary/5 text-primary"
            >
              <PhoneIcon size={24} className="" />
              <div className="flex flex-col">
                <p className="text-black font-semibold ">Call us at</p>
                <p className="">+971 4 4569 917</p>
              </div>
            </a>
            <a
              href="https://wa.me/971542019999"
              className="flex flex-row gap-5 px-8 py-3 md:w-fit w-full rounded-xl items-center bg-primary/5 text-primary"
            >
              <BsWhatsapp size={24} className="" />
              <div className="flex flex-col">
                <p className="text-black font-semibold">Whatsapp us at</p>
                <p className="">+971 54 201 9999</p>
              </div>
            </a>
          </div>
          <h3 className="md:text-2xl text-lg mt-7 font-semibold ">
            Send us a message
          </h3>
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3 border"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3 border"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3 border"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold">
                  Phone
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="border rounded">
                    <CountryCodeSelect
                      setSelectedCountry={setSelectedCountry}
                      selectedCountry={selectedCountry}
                    />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded px-2 py-3 border"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label htmlFor="category" className="font-semibold">
                  How can we help you?
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <select
                  name="category"
                  className="py-3 mt-1 border rounded px-2"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Company setup">Company setup</option>
                  <option value="Bank account assistance">
                    Bank account assistance
                  </option>
                  <option value="Virtual office & Ejari">
                    Virtual office & Ejari
                  </option>
                  <option value="PR Services">PR Services</option>
                  <option value="Visa Services">Visa Services</option>
                  <option value="Company License & renewals">
                    Company License & renewals
                  </option>
                  <option value="Golden Visa">Golden Visa</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold">
                Message
                <span className="text-primary text-xs font-normal italic">
                  {" "}
                  (Required)
                </span>
              </label>
              <textarea
                name="message"
                className="border px-2 py-3 resize-none"
                placeholder="Type your answer here..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              disabled={loading}
              className="px-12 py-3 rounded-md text-white font-medium w-fit bg-primary"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5649920970577!2d55.26127867490336!3d25.184162232229475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f435782172a35%3A0xf6b77d7ae225eee7!2sBizVibeZ%20Consultants!5e0!3m2!1sen!2s!4v1719232909267!5m2!1sen!2s"
            loading="lazy"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
