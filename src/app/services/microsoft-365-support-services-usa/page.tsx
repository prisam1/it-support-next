"use client";
import React from 'react'
import Navbar from "../../components/services5/Navbar"
import Hero from "../../components/services5/Hero"
import WhatWeDo from '@/app/components/services5/WhatWeDo'
import M365Services from '@/app/components/services5/M365Services'
import CaseStudiesAndIndustries from '@/app/components/services5/CaseStudies'
import FAQSection from '@/app/components/services5/FAQSection'
import MarketDataTables from '@/app/components/services5/MarketDataTables'
import IndustriesSection from '@/app/components/services5/IndustriesSection'
import Tools from '@/app/components/services5/Tools'
import CTA from '@/app/components/services5/CTA'
import MicrosoftSchema from '@/app/components/services5/MicrosoftSchema'
import FloatingCall from '@/app/components/FloatingCall';


const page = () => {
  type Industry = {
    name: string;
    variant: "purple" | "blue" | "pink" | "indigo";
  };

  const industries: Industry[] = [
    { name: "Healthcare", variant: "purple" },
    { name: "Finance & Banking", variant: "blue" },
    { name: "E-commerce", variant: "pink" },
    { name: "Manufacturing", variant: "indigo" },
    { name: "Education", variant: "purple" },
    { name: "Technology", variant: "blue" },
    { name: "Retail", variant: "pink" },
    { name: "Telecommunications", variant: "indigo" },
    { name: "Logistics", variant: "purple" },
    { name: "Government", variant: "blue" },
  ];

  function tileClasses(variant: Industry["variant"]) {
    switch (variant) {
      case "purple":
        return "from-purple-500 to-purple-600";
      case "blue":
        return "from-blue-500 to-blue-600";
      case "pink":
        return "from-pink-500 to-pink-600";
      case "indigo":
        return "from-indigo-500 to-indigo-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  }

  return (
    <>
      {/* --- SEO & META SECTION --- */}
      <title>Microsoft 365 Support Services USA | Expert Office 365 Assistance</title>
      <meta name="description" content="GladiuseSport offers professional Microsoft 365 support services in the USA, helping businesses with setup, account administration, licensing, troubleshooting, email configuration, and user training." />
      <meta name="keywords" content="Microsoft 365 Support Services USA, Office 365 Support, Microsoft 365 Helpdesk USA, M365 Troubleshooting, Exchange Online Support, Teams & SharePoint Assistance" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/microsoft-365-support-services-usa/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Professional Microsoft 365 Support Services for US Businesses" />
      <meta property="og:description" content="Get reliable Microsoft 365 support from GladiuseSport, including setup, troubleshooting, security configuration, and user assistance for businesses across the USA." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/microsoft-365-support-services-usa/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/microsoft-365-support-services-usa.webp" />
      <meta property="og:image:alt" content="Microsoft 365 Support and Office 365 Assistance Services USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags - All 8 Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/microsoft-365-support-services-usa/" />
      <meta name="twitter:title" content="Trusted Microsoft 365 Support Across the USA" />
      <meta name="twitter:description" content="Explore expert Microsoft 365 support from GladiuseSport, covering installation, licensing, Teams, SharePoint, Exchange Online, and end-user support for US businesses." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/microsoft-365-support-services-usa.webp" />
      <meta name="twitter:image:alt" content="M365 Support Services for US Businesses" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- END SEO SECTION --- */}

      <MicrosoftSchema />

      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>
      <main className='bg-blue-50' >
        <Navbar />
        <Hero />
        <WhatWeDo />
        <M365Services />
        <Tools />
        <IndustriesSection />
        <CaseStudiesAndIndustries />
        <MarketDataTables />
        <FAQSection />
        <CTA />
        <FloatingCall />
      </main>
    </>
  )
}

export default page