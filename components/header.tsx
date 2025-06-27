"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setIsSticky(window.scrollY > 520);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-[#1F2460] transition-all duration-300 ease-in-out ${
        isSticky && "sticky top-0 z-100 shadow-lg"
      }`}
    >
      <motion.div
        className={`bg-[#1F2460] transition-shadow duration-300 shadow-lg ${
          isSticky ? "shadow-lg" : ""
        }`}
      >
        <div className="w-full max-w-[1230px] mx-auto text-white">
          <div className="flex justify-between items-center px-2 py-4 md:py-4 md:px-[22px]">
            <div>
              <Link href="/">
                <Image
                  src="/img/PANALOBET-frb-logo.webp"
                  alt="PANALOBET"
                  width={200}
                  height={40}
                />
              </Link>
            </div>
            <div className="hidden md:ml-auto md:flex gap-4">
              {/* <Link
                href="#"
                className="bg-transparent px-4 py-2 rounded-full text-center
                            transition-transform transform hover:scale-105
                            border border-white
                            md:w-[150px]
                            flex items-center justify-center
                            "
              >
                SIGNUP
              </Link> */}
              <Link
                href="https://panalobet200.com/ph/tl"
                className="bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)] px-4 py-2 rounded-full shadow-md text-center
                            transition-transform transform hover:scale-105 duration-300
                            md:w-[150px]
                            flex items-center justify-center
                            "
              >
                LOGIN
              </Link>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.div>

      <div
        className={`
    text-white transition-all duration-500 ease-in-out overflow-hidden
    ${
      mobileMenuOpen
        ? "max-h-[500px] opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-4"
    }
  `}
      >
        <div className="flex flex-col justify-center items-center mt-4 gap-4 pb-5 mx-auto md:hidden px-2">
          <Link
            href="#"
            className="bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)]
        w-full
         py-3 rounded-full shadow-md text-center lg:px-4
        transition-transform transform hover:scale-105 duration-300
        md:w-[150px]
        flex items-center justify-center"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}
