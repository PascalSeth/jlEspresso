import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center sticky z-[999] top-0 left-0 right-0 justify-between px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href='/' className="flex items-center gap-2">
        <img src="/jlexpresso/JLLogo.png" alt=" Logo" className="h-12" />
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden font-semibold md:flex text-base items-center gap-6 text-amber-700 ">
        <Link href="/coffee" className="cursor-pointer hover:text-black">Coffee</Link>
        <Link href="/coffee-machines" className="cursor-pointer hover:text-black">Coffee Machines</Link>
        <Link href="/services" className="cursor-pointer hover:text-black">Service</Link>
        <Link href="/about-us" className="cursor-pointer hover:text-black">About Us</Link>
        <Link href="/contact-us" className="cursor-pointer hover:text-black">Contact</Link>
        <Link href="/shop" className="cursor-pointer hover:text-black">Shop</Link>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 bg-gray-100 rounded-full shadow-md">
          <ShoppingBag className="h-5 w-5 text-gray-700" />
        </button>
        <button className="px-5 py-2 bg-[#4F2B1D] text-white rounded-lg font-medium">
          <Link href="/gift-vouchers">Buy Gift Vouchers</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
