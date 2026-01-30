import { Cloud } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    /* Added sticky, top-0, and z-50 here to fix the WHOLE header */
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Disclaimer bar */}
      <div className="border-b-2 border-yellow-200 bg-yellow-50 py-2 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-yellow-800">
            <strong>⚠️ Disclaimer:</strong> We are an independent third-party
            service provider and not authorized or affiliated with any specific
            vendor or manufacturer.
          </p>
        </div>
      </div>

      {/* Main Nav - backdrop-blur works best when background is slightly transparent (bg-white/90) */}
      <nav className="backdrop-blur-xl bg-white/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">  
          <Cloud className="w-10 h-10 fill-black text-black" />
           <Link
                href="/"
                className="text-2xl font-bold text-gray-900"
              >
               Microsoft 365 Support
              </Link>
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-medium">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#case" className="text-gray-700 hover:text-blue-600 transition">Case Studies</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQs</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;