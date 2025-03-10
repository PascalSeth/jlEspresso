'use client'
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-t-gray-200 text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <div className='flex items-center mb-4'>
          <img src="/jlexpresso/JLLogo.png" alt=" Logo" className="h-12" />
          <h3 className='font-semibold'>JL <span>Espresso</span></h3>
          </div>
          <p className="text-sm mb-4">Powering Your Perfect Coffee Experience</p>
          <div className="flex space-x-4">
  <a 
    href="https://web.facebook.com/profile.php?id=61573161185770" 
    className="hover:text-gray-900 transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook size={20} />
  </a>
  <a 
    href="" 
    className="hover:text-gray-900 transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Twitter size={20} />
  </a>
  <a  
    href="https://www.instagram.com/j.lespresso/" 
    className="hover:text-gray-900 transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram size={20} />
  </a>
  <a  
    href="https://www.linkedin.com/company/j-l-espresso/?viewAsMember=true" 
    className="hover:text-gray-900 transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Linkedin size={20} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className='flex flex-col space-y-2'>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <Link href="/coffee" className="cursor-pointer hover:text-black">Coffee</Link>
        <Link href="/coffee-machines" className="cursor-pointer hover:text-black">Coffee Machines</Link>
        <Link href="/services" className="cursor-pointer hover:text-black">Service</Link>
        <Link href="/about-us" className="cursor-pointer hover:text-black">About Us</Link>

  </div>

          {/* Resources */}
          <div className='flex flex-col space-y-2'>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
            <Link href="/contact-us" className="cursor-pointer hover:text-black">Contact</Link>
            <Link href="/shop" className="cursor-pointer hover:text-black">Shop</Link>
             <Link href="#" className="text-sm hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                <span>Support@jlespressoservice.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone size={16} className="mr-2" />
                <span>+44 7903856712</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin size={16} className="mr-2" />
                <span>Gretton Rd, <br />Corby NN17 3HN, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {year} Jl Espresso. All rights reserved.</p>
            <div className="mt-4 space-x-3 md:space-y-3 md:mt-0">
                <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">Cookies</Link>
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-4">
            <a href="https://www.stanparaclete.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">Built By Stan Paraclete</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;