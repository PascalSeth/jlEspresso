'use client'
import React from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  // Use the usePathname hook to get the current path
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { name: "Dashboard", icon: "M4 6h16M4 12h16m-7 6h7", href: "/dashboard" },
    { name: "Machines", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", href: "/dashboard/machines" },
    { name: "Beans", icon: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z", href: "/dashboard/beans" },
    { name: "Bookings", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5", href: "/dashboard/bookings" },
    { name: "History", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", href: "/dashboard/history" },

  ];

  return (
    <div className="w-full sticky top-0 left-0 z-[999] bottom-0 right-0 bg-white border-b shadow-sm px-4 py-4 flex items-center justify-between">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="flex items-center mr-2">
            <img className="w-12 h-12" src="/jlexpresso/JLLogo.png" alt="JL Logo"/>
          </div>
          <span className="text-gray-800 items-center text-sm max-lg:hidden font-bold">JL Dashboard</span>
        </Link>
      </div>

      {/* Center - Navigation items */}
      <div className="flex items-center space-x-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-1 ${
                isActive 
                  ? "text-blue-800 border-b-2 border-blue-800" 
                  : "text-gray-500 hover:text-blue-700"
              }`}
            >
              <span className="text-xs mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </span>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Right side - User profile */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <Bell size={18} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="/api/placeholder/32/32" 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;