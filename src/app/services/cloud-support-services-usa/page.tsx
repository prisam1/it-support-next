import React from 'react'
import Navbar from "../../components/services3/Navbar"
import Hero from "../../components/services3/Hero"
import Services from "../../components/services3/Service"
import Industry from "../../components/services3/Industries"
import MarketAnalysis from '../../components/services3/MarketAnalysis'
import CaseStudy from "../../components/services3/CaseStudies"
import Testimonials from "../../components/services3/Testimonials"
import FAQ from "../../components/services3/FAQ"
import Contact from "../../components/services3/Contact"
import CloudSupportSchema from '@/app/components/services3/CloudSupportSchema'
import FloatingCall from '@/app/components/FloatingCall'


const TOOLS: readonly string[] = ["Microsoft 365", "Azure", "Exchange Online", "SharePoint", "Teams", "Power Platform", "Intune", "OneDrive", "Defender", "PowerShell", "Sentinel", "Entra ID",] as const;

const BRANDS: readonly string[] = ["HealthTech", "Pacific Bank", "GreenBuild", "Summit Legal", "Riverside Academy", "TechStart Inc",] as const;
const page = () => {
  
  return (
    <>
      {/* --- SEO SECTION START --- */}
      <title>Cloud Support Services USA | Managed Cloud IT Support for Businesses</title>
      <meta name="description" content="GladiuseSport delivers cloud support services in the USA, helping businesses manage, monitor, and optimize cloud environments with secure, scalable, and reliable IT solutions." />
      <meta name="keywords" content="Cloud Support Services USA, Managed Cloud Support, Cloud IT Services, Business Cloud Support, AWS Azure Cloud Support, Cloud Infrastructure Management" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/cloud-support-services-usa/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Reliable Cloud Support Solutions for US Businesses" />
      <meta property="og:description" content="GladiuseSport provides expert cloud support services to US organizations, ensuring performance, security, and continuity across public and hybrid cloud platforms." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/cloud-support-services-usa/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/cloud-support-services-usa.webp" />
      <meta property="og:image:alt" content="Cloud Support and Managed Cloud Services for US Businesses" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/cloud-support-services-usa/" />
      <meta name="twitter:title" content="Expert Cloud Support Services for Growing US Companies" />
      <meta name="twitter:description" content="Get professional cloud support from GladiuseSport, delivering monitoring, troubleshooting, and optimization for business-critical cloud environments across the USA." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/cloud-support-services-usa.webp" />
      <meta name="twitter:image:alt" content="Managed Cloud Support Services USA" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- SEO SECTION END --- */}

      <CloudSupportSchema />

      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>
      <Navbar />
      <Hero />
      <Services />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
            Tools &amp; Technologies
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {TOOLS.map((tool) => (
              <div
                key={tool}
                className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 p-6 text-center"
              >
                <p className="font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Industry />
      <MarketAnalysis />
      <CaseStudy />
      <Testimonials />

      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Trusted by Leading Organizations
          </h3>

          <div className="grid grid-cols-2 items-center gap-8 opacity-60 md:grid-cols-4 lg:grid-cols-6">
            {BRANDS.map((name) => (
              <div
                key={name}
                className="rounded-lg bg-white p-4 text-center font-bold text-gray-700 shadow"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <Contact />
      <FloatingCall />
    </>
  )
}

export default page