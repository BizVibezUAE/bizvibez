"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/assets/FNL.gif";
import {
  accountingTax,
  businessSetup,
  resources,
  services,
} from "@/data/index";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { PopupButton } from "@typeform/embed-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState<string>("");
  const [toggleMenu, setToggleMenu] = useState<string>("");

  function handleToggleSubMenu(id: string) {
    if (toggleSubMenu === id) {
      setToggleSubMenu("");
    } else {
      setToggleSubMenu(id);
    }
  }

  function handleToggleMenu(id: string) {
    if (toggleMenu === id) {
      setToggleMenu("");
    } else {
      setToggleMenu(id);
    }
  }

  function handleLinkClick() {
    setShowMenu(false);
    setToggleSubMenu("");
    setToggleMenu("");
  }

  return (
    <div className="flex items-center md:justify-normal justify-between md:px-22 px-6 py-3 bg-white ">
      <Link href={"/"}>
        <Image src={img} alt="logo" className="w-44" />
      </Link>
      <div className="md:hidden block">
        {showMenu ? (
          <X
            size={24}
            className="text-primary"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <Menu
            size={24}
            className="text-primary"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && (
          <div className="absolute bg-white shadow-md py-5 top-[105px] rounded px-5  left-2.5 z-[999] w-[95vw] mx-auto">
            <div className="flex flex-col gap-2">
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("business-setup")}
              >
                <h4 className="text-sm">Business Setup</h4>
                {toggleMenu == "business-setup" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              <Link
                href={`/services/bank-account-opening`}
                onClick={handleLinkClick}
              >
                <p
                  className={`text-sm pl-2 text-gray-700 hover:text-primary hover:bg-primary/10 ${
                    toggleMenu == "business-setup" ? "block" : "hidden"
                  }`}
                >
                  Bank Account Assistance
                </p>
              </Link>
              {businessSetup.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "business-setup" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {accountingTax.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-1 
                    `}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subservices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-2 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("services")}
              >
                <h4 className="text-sm">Services</h4>
                {toggleMenu == "services" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {services.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "services" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("resources")}
              >
                <h4 className="text-sm">Resources</h4>
                {toggleMenu == "resources" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {resources.map((item, idx) => (
                <Link
                  href={`/${item.id}`}
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "resources" ? "block" : "hidden"
                  }`}
                  onClick={handleLinkClick}
                >
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                </Link>
              ))}
              <PopupButton
                id="naqPzEEo"
                className="text-primary py-2 border-2 border-primary px-4 font-medium rounded"
              >
                Cost Calculator
              </PopupButton>
              <Link
                className="w-full"
                href={"/contact"}
                onClick={handleLinkClick}
              >
                <button className="w-full border border-primary bg-primary rounded text-white py-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="ml-auto flex-row items-center space-x-2 text-sm md:flex hidden">
        <Link href="/about" className="text-black mr-5">
          About
        </Link>
        
        <div className="relative group">
          <div className="flex gap-2 flex-row items-center justify-between">
            <p className="text-black text-sm whitespace-nowrap">Business Setup</p>
            <ChevronDown
              size={15}
              className=" group-hover:rotate-180 transition-all"
            />
          </div>
          
          <div
            className="absolute 
             hidden group-hover:block
           bg-white w-[700px] px-8 pb-8 shadow-lg "
          >
            <div className="grid grid-cols-3 gap-4 px-2 py-3">
              <div>
                <h4 className="font-bold mb-2">Free Zones</h4>
                <div className="flex flex-col space-y-2">
                  {businessSetup[0].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Mainland</h4>
                <div className="flex flex-col space-y-2">
                  {businessSetup[1].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Offshore</h4>
                <div className="flex flex-col space-y-2">
                  {businessSetup[2].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/services/bank-account-opening" className="text-black mr-5 whitespace-nowrap">
          Bank Account
        </Link>
        <div className="relative group">
          <div className="flex flex-row items-center">
            <button className="text-black whitespace-nowrap py-2 px-4 text-sm">
              Accounting & Tax
            </button>
            <ChevronDown
              size={15}
              className=" group-hover:rotate-180 transition-all"
            />
          </div>
          <div className="absolute hidden group-hover:block bg-white shadow-lg ">
            <div className="grid grid-cols-1 w-[230px] gap-4 px-2 py-3">
              {accountingTax[0].subservices.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.id}`}
                  className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="flex flex-row justify-between items-center">
            <button className="text-black py-2 px-4 text-sm">Services</button>
            <ChevronDown
              size={15}
              className=" group-hover:rotate-180 transition-all"
            />
          </div>
          <div
            className="absolute ml-[-200px]
             hidden group-hover:block
           bg-white w-[700px] px-8 pb-8 shadow-lg"
          >
            <div className="grid grid-cols-3 gap-4 px-2 py-3">
              <div>
                <h4 className="font-bold mb-2">Essential Services</h4>
                <div className="flex flex-col space-y-2">
                  {services[0].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Operational Services</h4>
                <div className="flex flex-col space-y-2">
                  {services[1].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">UAE Visa Services</h4>
                <div className="flex flex-col space-y-2">
                  {services[2].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="flex flex-row items-center justify-between">
            <button className="text-black py-2 px-4 text-sm">Resources</button>
            <ChevronDown
              size={15}
              className=" group-hover:rotate-180 transition-all"
            />
          </div>
          <div className="absolute hidden group-hover:block bg-white shadow-lg ">
            <div className="flex flex-col gap-2 px-2 py-3 w-[200px]">
              {resources.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  className="block mt-1 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/careers" className="text-black mr-5">
          Careers
        </Link>
        <Link
          href="/contact"
          className="text-black text-sm py-2 px-4 whitespace-nowrap"
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
        <PopupButton
          id="naqPzEEo"
          className="text-white bg-primary py-2 px-4 rounded text-sm"
        >
          Cost Calculator
        </PopupButton>
      </div>
    </div>
  );
};

export default Navbar;
