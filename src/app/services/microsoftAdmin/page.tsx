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
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladiusesport.com"),

  title: "Microsoft 365 Support Services USA | Expert Office 365 Assistance",

  description:
    "GladiuseSport offers professional Microsoft 365 support services in the USA, helping businesses with setup, account administration, licensing, troubleshooting, email configuration, and user training.",

  keywords: [
    "Microsoft 365 Support Services USA",
    "Office 365 Support",
    "Microsoft 365 Helpdesk USA",
    "M365 Troubleshooting",
    "Exchange Online Support",
    "Teams & SharePoint Assistance",
  ],

  authors: [{ name: "GladiuseSport" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gladiusesport.com/services/microsoft-365-support-services-usa/",
  },

  openGraph: {
    title: "Professional Microsoft 365 Support Services for US Businesses",
    description:
      "Get reliable Microsoft 365 support from GladiuseSport, including setup, troubleshooting, security configuration, and user assistance for businesses across the USA.",
    url: "https://www.gladiusesport.com/services/microsoft-365-support-services-usa/",
    siteName: "GladiuseSport",
    type: "website",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/microsoft-365-support-services-usa.webp",
        width: 1200,
        height: 630,
        alt: "Microsoft 365 Support and Office 365 Assistance Services USA",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GladiuseSport",
    creator: "@GladiuseSport",
    title: "Trusted Microsoft 365 Support Across the USA",
    description:
      "Explore expert Microsoft 365 support from GladiuseSport, covering installation, licensing, Teams, SharePoint, Exchange Online, and end-user support for US businesses.",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/microsoft-365-support-services-usa.webp",
        alt: "M365 Support Services for US Businesses",
      },
    ],
  },

  other: {
    "og:updated_time": "2026-01-01T00:00:00+00:00",
  },
};




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
    <MicrosoftSchema />
    <main className='bg-blue-50' >
      <Navbar />
      <Hero />
      <WhatWeDo />
      <M365Services /> 
      <Tools/>
      <IndustriesSection/>
      <CaseStudiesAndIndustries />
      <MarketDataTables/>
      <FAQSection />
      <CTA/>
    </main>
    </>
  )
}

export default page