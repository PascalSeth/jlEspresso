'use client';
import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import MenuSheet from "./MenuSheet";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const moviingWords = [
    "We Offer Best Price and Products",
  ];

  return (
    <nav 
      className="flex w-full items-center sticky z-[999] top-0 left-0 right-0 justify-between px-10 py-4 bg-white shadow-md"
    >
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center gap-2">
          <img src="/jlexpresso/JLLogo.png" alt="Logo" className="h-12" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div 
        className="max-lg:hidden flex font-semibold text-base items-center gap-6 text-amber-700"
      >
        {[
          { href: "/coffee", text: "Coffee" },
          { href: "/coffee-machines", text: "Coffee Machines" },
          { href: "/services", text: "Service" },
          { href: "/about-us", text: "About Us" },
          { href: "/contact-us", text: "Contact" },
          { href: "/shop", text: "Shop" }
        ].map((link, index) => (
          <div key={index}>
            <Link 
              href={link.href} 
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="max-lg:hidden flex items-center gap-4">
        <button 
          className="relative p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
        >
          <ShoppingBag className="h-5 w-5 text-gray-700" />
        </button>
        
        {/* Horizontal Word Marquee */}
        <div className="bg-[#4F2B1D] text-white rounded-lg overflow-hidden w-36 h-10">
          <Marquee
            speed={30}
            gradient={false}
            pauseOnHover={true}
            className="h-full flex items-center"
          >
            {moviingWords.map((word, index) => (
              <span key={index} className="mx-4 font-medium whitespace-nowrap">
                {word}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MenuSheet />
      </div>
    </nav>
  );
};

export default Navbar;