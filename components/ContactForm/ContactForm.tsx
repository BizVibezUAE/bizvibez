import React, { useState, ChangeEvent, FormEvent } from "react";
import CountryCodeSelect from "../CountryCodeSelect/CountryCodeSelect";
import axios from "axios";

interface ContactFormProps {
  buttonColor: string;
  title: string;
  backgroundColor: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  buttonColor,
  title,
  backgroundColor,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
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
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.service ||
      !formData.message ||
      !selectedCountry
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/contact", {
        ...formData,
        countryName: selectedCountry.name.common,
        countryCode: selectedCountry.idd.root + selectedCountry.idd.suffixes[0],
      });
      alert(response.data.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setSelectedCountry(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
      return;
    }
  };

  return (
    <form
      className="px-8 py-10 flex flex-col gap-3 sticky top-32 rounded-xl"
      style={{ backgroundColor: backgroundColor }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">
          Name<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <div className="w-full flex flex-row gap-3 mt-2">
          <input
            type="text"
            name="name"
            className="w-full rounded px-2 py-3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone">
          Phone<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <div className="flex items-center gap-2">
          <CountryCodeSelect
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
          <input
            type="tel"
            name="phone"
            className="flex-grow rounded px-2 py-3"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email">
          Email<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <input
          type="email"
          name="email"
          className="w-full rounded px-2 py-3 mt-2"
          placeholder="Type your answer here..."
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="service">
          Services
          <span className="text-primary text-xs italic">(Required)</span>
        </label>
        <select
          name="service"
          className="w-full rounded px-2 py-3 mt-2"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          <option value="Company setup">Company setup</option>
          <option value="Bank account assistance">
            Bank account assistance
          </option>
          <option value="Virtual office & Ejari">Virtual office & Ejari</option>
          <option value="PR Services">PR Services</option>
          <option value="Visa Services">Visa Services</option>
          <option value="Company License & renewals">
            Company License & renewals
          </option>
          <option value="Golden Visa">Golden Visa</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">
          Message<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded px-2 py-3 mt-2"
          placeholder="Type your answer here..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-12 py-3 rounded-md text-white font-medium w-fit"
        style={{ backgroundColor: buttonColor }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
