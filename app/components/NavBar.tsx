'use client';
import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import MenuSheet from "./MenuSheet";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  }
};

const staggerLinks = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const linkVariant = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5
    }
  }
};

const Navbar = () => {
  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="flex w-full items-center sticky z-[999] top-0 left-0 right-0 justify-between px-10 py-4 bg-white shadow-md"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link href="/" className="flex items-center gap-2">
          <img src="/jlexpresso/JLLogo.png" alt="Logo" className="h-12" />
        </Link>
      </motion.div>

      {/* Desktop Navigation Links */}
      <motion.div 
        variants={staggerLinks}
        initial="hidden"
        animate="visible"
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
          <motion.div key={index} variants={linkVariant}>
            <Link 
              href={link.href} 
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section */}
      <motion.div 
        variants={staggerLinks}
        initial="hidden"
        animate="visible"
        className="max-lg:hidden flex items-center gap-4"
      >
        <motion.button 
          variants={buttonVariants}
          className="relative p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
        >
          <ShoppingBag className="h-5 w-5 text-gray-700" />
        </motion.button>
        <motion.button 
          variants={buttonVariants}
          className="px-5 py-2 bg-[#4F2B1D] text-white rounded-lg font-medium hover:bg-[#3D2217] transition-colors duration-300"
        >
          <Link href="/gift-vouchers">Buy Gift Vouchers</Link>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="lg:hidden"
      >
        <MenuSheet />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;