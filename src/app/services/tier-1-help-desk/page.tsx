"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Role from "../../components/services1/Role"
import Services from "../../components/services1/Service"
import Tools from "../../components/services1/Tools"
import Industries from "../../components/services1/Industry"
import MarketDemand from "../../components/services1/MarketDemandSection"
import CaseStudy from "../../components/services1/CaseStudies"
import Testimonials from "../../components/services1/Testimonials"
import WhyChooseUs from "../../components/services1/WhyChooseUS"
import FAQ from "../../components/services1/FAQ"
import CallToAction from "../../components/services1/CallAction"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
    { href: '#disclaimer', label: 'Disclaimer', special: true }
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href= "/" >
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechSupport Pro
              </span>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    link.special
                      ? 'text-red-600 hover:text-red-700 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

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
                  className={`block py-2 transition ${
                    link.special
                      ? 'text-red-600 hover:text-red-700 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Disclaimer Section */}
      <div id="disclaimer" className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> We are an independent third-party service provider and are not an authorized organization affiliated with any specific manufacturers or vendors. All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>

      {/* Hero Section  */}
       <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Rating Badge */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
              ★★★★★ 4.9/5
            </span>
            <span className="text-white text-sm">(2,847 reviews)</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Outsourced Tier-1 Help Desk Services for US Businesses
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical support solutions delivered by certified professionals. 
            We handle frontline IT issues so your team can focus on strategic initiatives. 
            Available 24/7/365 with industry-leading response times and multilingual support 
            across all major platforms and technologies.
          </p>

          {/* Metadata Tags */}
          <div className="flex flex-wrap gap-2 justify-center text-sm  text-gray-500 mb-8">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              Published: January 10, 2026
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              Last Updated: January 14, 2026
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              Expert Reviewed ✓
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
      {/* Hero section end  */}
      <Role />
      <Services />
      <Tools />
      <Industries />
      <MarketDemand />
      <CaseStudy />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <CallToAction />
    </>
  );
}