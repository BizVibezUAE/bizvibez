import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

const CountryCodeSelect = ({
  setSelectedCountry,
  selectedCountry,
}: {
  setSelectedCountry: any;
  selectedCountry: any;
}) => {
  const [codes, setCodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetchCodes = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCodes(res.data);
      setSelectedCountry(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchCodes();
  }, []);

  const filteredCodes = codes.filter((country: any) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const convertIddToCode = (idd: any) => {
    if (idd.root && idd.suffixes && idd.suffixes.length > 0) {
      return `${idd.root}${idd.suffixes[0]}`;
    }
    return "+0";
  };

  return (
    <div className="relative w-28 min-h-[48px] flex bg-transparent">
      <button
        type="button"
        className="w-full flex items-center justify-between bg-white rounded-md px-3 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCountry ? (
          <div className="flex items-center">
            <img
              src={selectedCountry.flags.svg}
              alt={selectedCountry.name.common}
              className="w-5 h-3 mr-2"
            />
            <span>{convertIddToCode(selectedCountry.idd)}</span>
          </div>
        ) : (
          <span>+0</span>
        )}
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="max-h-60 overflow-auto">
            {filteredCodes.map((country: any, index) => (
              <li
                key={index}
                className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className="w-5 h-3 mr-2"
                />
                <span className="text-sm">{country.name.common}</span>
                <span className="text-sm text-gray-500 ml-auto">
                  {convertIddToCode(country.idd)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelect;
