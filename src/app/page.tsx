import Image from "next/image";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Tools from "./components/Tools";
import Industry from "./components/Industry";
import MarketAnalysis from "./components/MarketDemand";
import ClientReview from "./components/ClientReview"
import FAQ from "./components/Faq";
import Navbar from "./components/Navbar";
import HomeSchema from "./components/HomeSchema";

export default function Home() {
  return (
    <>
      {/* --- SEO & META SECTION --- */}
      <title>IT Support Services USA | Managed IT Solutions for Small & Medium Businesses</title>
      <meta name="description" content="GladiuseSport delivers dependable IT support and managed technology services to small and medium-sized businesses across the USA, helping teams stay secure, productive, and scalable." />
      <meta name="keywords" content="IT Support USA, Managed IT Services USA, Business IT Solutions, Small Business IT Support, Medium Business IT Services, IT Helpdesk, Cloud & Cybersecurity" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Smart IT Support Solutions Built for US Small & Medium Companies" />
      <meta property="og:description" content="From daily IT assistance to long-term infrastructure management, GladiuseSport helps US businesses reduce downtime, improve security, and simplify technology operations." />
      <meta property="og:url" content="https://www.gladiusesport.com/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/gladiusesport.webp" />
      <meta property="og:image:alt" content="Business IT Support and Managed Services in the USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/" />
      <meta name="twitter:title" content="Reliable IT Support That Keeps US Businesses Running" />
      <meta name="twitter:description" content="Explore flexible IT support services from GladiuseSport, designed to protect systems, streamline workflows, and support business growth across the United States." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/gladiusesport.webp" />
      <meta name="twitter:image:alt" content="Managed IT Services for US Businesses" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- END SEO SECTION --- */}
      <HomeSchema />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <Tools />
      <Industry />
      <MarketAnalysis />
      <ClientReview />
      <FAQ />

    </>
  );
}
