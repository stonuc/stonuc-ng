"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { navbarLinks } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = headerRef?.current?.clientHeight || 0;
      setActive(scrollTop > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();
  return (
    <header
      ref={headerRef}
      className={`
        flex justify-between items-center p-4 w-full text-white md:px-8 lg:px-16 ${
          isActive ? "bg-white fixed top-0 z-20 !text-black shadow-2xl" : ""
        }
    `}
    >
      <a href="/" className="flex items-center">
        <Image
          src={isActive ? "/stunuc0.png" : "/stunuc1.png"}
          alt="Stonuc Technologies Logo"
          width={140}
          height={40}
        />
      </a>
      <nav className="relative">
        <div className="hidden xl:flex space-x-4 text-sm md:text-base">
          <ul className="flex space-x-4">
            {navbarLinks.map((item, i) => {
              const acttiveLink = pathname === item.link;
              return (
                <li key={i} className="relative group">
                  <Link
                    className={`${
                      acttiveLink
                        && "text-white"
                    } ${isActive && "!text-primary "} group-hover:text-white transition-all duration-300`}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                  <div
                    className={`absolute -bottom-1 h-1 border-2 rounded-lg w-full transition-all duration-300 group-hover:border-white group-hover:opacity-100  ${
                      acttiveLink ? "border-white" : "border-black opacity-0"
                    } ${isActive && "!border-primary"}`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="flex">
          <div className="flex md:hidden items-center gap-3">
            <a
              href="mailto:contact@stonuc.atoovis.com"
              className="flex items-center  w-full gap-3"
            >
              <Mail />
            </a>
            <a
              href="https://wa.me/qr/GHFHB4F22BMTK1"
              className="flex items-start w-full  gap-3"
            >
              <FaWhatsapp />
            </a>
          </div>
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
        </div>
        {/* Sidebar Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 w-64 h-full pb-40 bg-white transform transition-transform duration-300 ease-in-out ${
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
          <ul className="flex flex-col h-full items-start p-8 space-y-4 text-black uppercase font-semibold md:text-base">
            {navbarLinks.map((item, i) => {
              const acttiveLink = pathname === item.link;
              return (
                <li key={i} className="relative group">
                  <Link
                    className={`${
                      acttiveLink
                        ? "text-primary"
                        : "text-black"
                    } group-hover:text-primary transition-all duration-300`}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                  <div
                    className={`absolute -bottom-1 h-1 border-2 rounded-lg w-full transition-all duration-300 group-hover:border-blue-500 group-hover:opacity-100  ${
                      acttiveLink ? "border-primary" : "border-black opacity-0"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
          <div className="flex px-3 flex-col  text-black gap-3">
            <a
              href="mailto:contact@stonuc.atoovis.com"
              className={`flex items-center text-primary w-full gap-3 `}
            >
              <Mail size={20} />
              contact@stonuc.atoovis.com
            </a>
            <a
              href="https://wa.me/qr/GHFHB4F22BMTK1"
              className="flex items-start w-full text-primary gap-3"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <button
              onClick={() => router.push("/contact")}
              className=" contact-btn px-4 py-2 bg-primary text-white rounded"
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden md:inline-flex mt-auto items-center space-x-4  text-sm md:text-base">
        <a
          href="mailto:contact@stonuc.atoovis.com"
          className={`flex items-center  w-full gap-3 ${
            isActive ? "text-black" : "text-white"
          } `}
        >
          <Mail />
          contact@stonuc.atoovis.com
        </a>
        <a
          href="https://wa.me/qr/GHFHB4F22BMTK1"
          className={`flex items-start  w-full gap-3 ${
            isActive ? "text-black" : "text-white"
          } `}
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>
        <button
          onClick={() => router.push("/contact")}
          className={`w-fit text-nowrap ${isActive ? "contact-btn" : "contact-btn-v2"}  px-4 py-2 rounded ${isActive ? "bg-primary text-white" : "bg-white text-primary"}`}
        >
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
