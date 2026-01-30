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