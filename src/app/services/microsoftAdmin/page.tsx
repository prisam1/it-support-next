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
  )
}

export default page