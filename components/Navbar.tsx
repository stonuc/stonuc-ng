"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-4 text-white md:px-8 lg:px-16">
      <div className="flex items-center">
        <Image
          src="/stunuc1.png"
          alt="Stonuc Technologies Logo"
          width={180}
          height={40}
        />
      </div>
      <nav className="relative">
        <div className="hidden xl:flex space-x-4 text-sm md:text-base">
          <ul className="flex space-x-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li>
              <Link href="#industries">Industries</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Sidebar Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 1000 }}
        >
          <button
            className="absolute top-4 right-4 text-black"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-start p-8 space-y-4 text-black uppercase font-semibold md:text-base">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li>
              <Link href="#industries">Industries</Link>
            </li>
            <li>
              <Link href="#technologies">Technologies</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
          <div className="flex px-3 flex-col text-black gap-3">
            <a
              href="mailto:contact@scnsoft.com"
              className="flex items-center text-sky-600 w-full gap-3"
            >
              <Mail />
              contact@atoovis.com
            </a>
            <a
              href="tel:+2348104092397"
              className="flex items-start w-full text-sky-600 gap-3"
            >
              <Phone />
              +234 810 409 2397
            </a>
            <button className=" contact-btn text-black px-4 py-2 rounded">
              Contact us
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden md:inline-flex items-center space-x-4  text-sm md:text-base">
        <a
          href="mailto:contact@scnsoft.com"
          className="flex items-center text-sky-50 w-full gap-3"
        >
          <Mail />
          contact@atoovis.com
        </a>
        <a
          href="tel:+2348104092397"
          className="flex items-start w-full text-sky-50 gap-3"
        >
          <Phone />
          +234 810 409 2397
        </a>
        <button className=" w-fit text-nowrap contact-btn text-black px-4 py-2 rounded">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Navbar;