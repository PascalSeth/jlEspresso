import React from "react";
import Link from "next/link";
import {
  Menu,
  Coffee,
  Package, // Changed icon for Coffee Machines
  Briefcase,
  Info,
  Mail,
  ShoppingCart,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Marquee from "react-fast-marquee";

const MenuSheet = () => {
  const movingWords = ["Powering Your Perfect Coffee Experience"];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden" aria-label="Open Menu">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white w-64 z-[9999] p-5">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold text-amber-700">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 font-medium text-gray-700">
          <Link href="/coffee" className="flex items-center gap-2 hover:text-black">
            <Coffee className="h-5 w-5" /> Coffee
          </Link>
          <Link href="/coffee-machines" className="flex items-center gap-2 hover:text-black">
            <Package className="h-5 w-5" /> Coffee Machines
          </Link>
          <Link href="/services" className="flex items-center gap-2 hover:text-black">
            <Briefcase className="h-5 w-5" /> Service
          </Link>
          <Link href="/about-us" className="flex items-center gap-2 hover:text-black">
            <Info className="h-5 w-5" /> About Us
          </Link>
          <Link href="/contact-us" className="flex items-center gap-2 hover:text-black">
            <Mail className="h-5 w-5" /> Contact
          </Link>
          <Link href="/shop" className="flex items-center gap-2 hover:text-black">
            <ShoppingCart className="h-5 w-5" /> Shop
          </Link>
        </div>
        {/* <div className="mt-6 flex flex-col gap-4">
          <button
            className="relative p-2 bg-gray-100 rounded-full shadow-md w-fit flex items-center"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="h-5 w-5 text-gray-700" />
          </button>
        </div> */}
        <div className="bg-amber-700 mt-3 text-gray-100 rounded-lg overflow-hidden max-w-xs h-10">
          <Marquee speed={30} gradient={false} pauseOnHover className="h-full flex items-center">
            {movingWords.map((word, index) => (
              <span key={index} className="mx-4 font-semibold whitespace-nowrap">
                {word}
              </span>
            ))}
          </Marquee>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
