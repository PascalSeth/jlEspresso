import React from "react";
import Link from "next/link";
import { ShoppingBag, Menu, Coffee, Briefcase, Info, Mail, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden">
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
            <Coffee className="h-5 w-5" /> Coffee Machines
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
        <div className="mt-6 flex flex-col gap-4">
          <button className="relative p-2 bg-gray-100 rounded-full shadow-md w-fit flex items-center">
            <ShoppingBag className="h-5 w-5 text-gray-700" />
          </button>
          <Link
            href="/gift-vouchers"
            className="px-5 py-2 bg-[#4F2B1D] text-white rounded-lg font-medium text-center flex items-center gap-2"
          >
            <ShoppingBag className="h-5 w-5" /> Buy Gift Vouchers
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;