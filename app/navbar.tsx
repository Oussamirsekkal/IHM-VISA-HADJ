"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Contact",
    },
    {
      id: 3,
      link: "About Us",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-15 px-4 text-white bg-emerald-800 fixed top-0">
      <div className="flex items-center">
        {/* Add your logo image here */}
        <img src="/IHM.png" alt="Logo" className="h-10 mr-2" />

        <h1 className="text-xl font-signature">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Visa Hadj
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href="/">{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-green-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href="/">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
