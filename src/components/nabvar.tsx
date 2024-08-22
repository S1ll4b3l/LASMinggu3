"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import React from "react";

const navLinks = [
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Experiences",
    path: "#experiences",
  },
  {
    title: "Contacts",
    path: "#contacts",
  },
  {
    title: "Jannabi",
    path: "#jannabi",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent z-10">
      <div className="flex items-center justify-between mx-auto p-8">
        <Link href="/" className="text-4xl text-white font-bold">
          GotaBK
        </Link>
        <div className="block md:w-auto" id="navbar">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
