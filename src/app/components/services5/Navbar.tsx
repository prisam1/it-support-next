import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Cloud } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#case', label: 'Case Studies' },
    { href: '#faqs', label: 'FAQ' },
  ];


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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl flex items-center gap-2 font-bold text-gray-900"
            >
              <Cloud className="w-10 h-10 fill-black text-black" />
              Microsoft 365 Support
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={'transition text-gray-700 hover:text-blue-600'}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="#contact"
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105">
                Contact Us
              </Link>

            </div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition text-gray-700 hover:text-blue-600`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;