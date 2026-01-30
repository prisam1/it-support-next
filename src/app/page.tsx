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
export default function Home() {
  return (
   <>
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
