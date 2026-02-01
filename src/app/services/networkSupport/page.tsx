import React from 'react'
import Navbar from "../../components/services4/Navbar"
import Hero from "../../components/services4/Hero"
import OverView from "../../components/services4/OverView"
import Services from "../../components/services4/Service"
import Tools from "../../components/services4/Tools"
import Industry from "../../components/services4/Industries"
import Analysis from "../../components/services4/DemandAnalysis"
import CaseStudies from '../../components/services4/CaseStudies'
import WhyChooseUs from "../../components/services4/WhyChooseUs"
import Testimonials from "../../components/services4/Testimonials"
import FAQ from "../../components/services4/FAQ"
import Contact from "../../components/services4/Contact"
import Disclaimer from "../../components/services4/Disclaimer"
import {Building2, Hospital, University, GraduationCap, ShoppingCart, Cog,} from "lucide-react";
import type { Metadata } from "next";
import NetworkSupportSchema from '@/app/components/services4/NetworkSupportSchema'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladiusesport.com"),

  title:
    "Network Support Services USA | VPN Troubleshooting & Secure Access Support",

  description:
    "GladiuseSport provides network support services in the USA, specializing in VPN troubleshooting, secure remote access, network connectivity issues, and user access resolution for businesses.",

  keywords: [
    "Network Support Services USA",
    "VPN Troubleshooting Services",
    "Secure Network Access Support",
    "Remote Access Issues",
    "Business VPN Support",
    "Network Connectivity Solutions",
  ],

  authors: [{ name: "GladiuseSport" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gladiusesport.com/services/network-support-services-usa/",
  },

  openGraph: {
    title: "Network & VPN Troubleshooting Support for US Businesses",
    description:
      "Resolve VPN, network access, and remote connectivity problems with GladiuseSport’s network support services, helping US businesses maintain secure and uninterrupted access.",
    url: "https://www.gladiusesport.com/services/network-support-services-usa/",
    siteName: "GladiuseSport",
    type: "website",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/network-support-services-usa.webp",
        width: 1200,
        height: 630,
        alt: "Network Support and VPN Troubleshooting Services USA",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GladiuseSport",
    creator: "@GladiuseSport",
    title: "VPN & Network Support Services in the USA",
    description:
      "Get expert network support from GladiuseSport for VPN errors, remote access failures, and secure business connectivity across the USA.",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/network-support-services-usa.webp",
        alt: "VPN Troubleshooting and Network Support Services USA",
      },
    ],
  },

  other: {
    "og:updated_time": "2026-01-01T00:00:00+00:00",
  },
};



const page = () => {

    
type Org = {
  name: string;
  icon: React.ReactNode;
};

const ORGS: readonly Org[] = [
  { name: "TechCorp", icon: <Building2 className="h-12 w-12" aria-hidden="true" /> },
  { name: "HealthPlus", icon: <Hospital className="h-12 w-12" aria-hidden="true" /> },
  { name: "FinanceFirst", icon: <University className="h-12 w-12" aria-hidden="true" /> },
  { name: "EduGlobal", icon: <GraduationCap className="h-12 w-12" aria-hidden="true" /> },
  { name: "RetailHub", icon: <ShoppingCart className="h-12 w-12" aria-hidden="true" /> },
  { name: "ManuTech", icon: <Cog className="h-12 w-12" aria-hidden="true" /> },
] as const;
  return (
    <>
    <NetworkSupportSchema />
    <Navbar />
    <Hero />
    <OverView />
    <Services />
    <Tools />
    <Industry />
    <Analysis />
    <CaseStudies />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />

      <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-800">
          Trusted By Leading Organizations
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Join 500+ companies worldwide who trust us for their network security
        </p>

        <div className="grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-4 lg:grid-cols-6">
          {ORGS.map((org) => (
            <div key={org.name} className="text-center">
              <div className="mx-auto flex justify-center text-gray-400">
                {org.icon}
              </div>
              <p className="mt-2 text-sm text-gray-600">{org.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Contact />
    <Disclaimer />
    </>
  )
}

export default page