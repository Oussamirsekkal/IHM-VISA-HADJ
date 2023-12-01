"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState("en");

  const links = [
    {
      id: 1,
      link: "Home",
      url: "/",
    },
    {
      id: 2,
      link: "Data",
      url: "/data",
    },
    {
      id: 3,
      link: "About Us",
      url: "/",
    },
  ];

  const handleLanguageSwitch = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <nav className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
       
            <img src="/IHM.png" alt="Logo" className="h-10 mr-2" />
            <h1 className="text-xl font-signature">
              <Link  className="link-underline link-underline-black" href="/">
                Visa Hadj
              </Link>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {links.map(({ id, link, url }) => (
              <Link className="capitalize font-medium hover:text-black transition duration-200" key={id} href={url}>
              
                  {link}
                
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleLanguageSwitch}
              className="px-3 py-2 rounded-full border border-white focus:outline-none focus:border-opacity-0 focus:border-emerald-500 hover:bg-opacity-80"
            >
              {language === "en" ? "عربية" : "English"}
            </button>
            <div
              onClick={() => setNav(!nav)}
              className="md:hidden cursor-pointer"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-gradient-to-b from-black to-green-800 text-white">
          <ul className="flex flex-col items-center py-8">
            {links.map(({ id, link, url }) => (
              <li key={id} className="py-4">
                <Link className="text-2xl" href={url}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
