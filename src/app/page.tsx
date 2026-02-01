import Image from "next/image";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Tools from "./components/Tools";
import Industry  from "./components/Industry";
import MarketAnalysis from "./components/MarketDemand";
import ClientReview from "./components/ClientReview"
import FAQ from "./components/Faq";
import Navbar from "./components/Navbar";
import type { Metadata } from "next"; 
import HomeSchema from "./components/HomeSchema";
 

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladiusesport.com"),

  title: "IT Support Services USA | Managed IT Solutions for Small & Medium Businesses",

  description:
    "GladiuseSport delivers dependable IT support and managed technology services to small and medium-sized businesses across the USA, helping teams stay secure, productive, and scalable.",

  keywords: [
    "IT Support USA",
    "Managed IT Services USA",
    "Business IT Solutions",
    "Small Business IT Support",
    "Medium Business IT Services",
    "IT Helpdesk",
    "Cloud & Cybersecurity",
  ],

  authors: [{ name: "GladiuseSport" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.gladiusesport.com/",
  },

  openGraph: {
    title: "Smart IT Support Solutions Built for US Small & Medium Companies",
    description:
      "From daily IT assistance to long-term infrastructure management, GladiuseSport helps US businesses reduce downtime, improve security, and simplify technology operations.",
    url: "https://www.gladiusesport.com/",
    siteName: "GladiuseSport",
    type: "website",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/gladiusesport.webp",
        width: 1200,
        height: 630,
        alt: "Business IT Support and Managed Services in the USA",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GladiuseSport",
    creator: "@GladiuseSport",
    title: "Reliable IT Support That Keeps US Businesses Running",
    description:
      "Explore flexible IT support services from GladiuseSport, designed to protect systems, streamline workflows, and support business growth across the United States.",
    images: [
      {
        url: "https://www.gladiusesport.com/assets/img/gladiusesport.webp",
        alt: "Managed IT Services for US Businesses",
      },
    ],
  },

  other: {
    "og:updated_time": "2026-01-01T00:00:00+00:00",
  },
};



export default function Home() {
  return (
   <>
   <HomeSchema />
   <Navbar />
   <Hero />
   <WhatWeDo />
   <Services/>
   <Tools />
   <Industry />
   <MarketAnalysis />
   <ClientReview />
   <FAQ />
   
   </>
  );
}
