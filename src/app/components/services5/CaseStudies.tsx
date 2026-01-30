import React from 'react';
import { Building2, Landmark, Laptop, GraduationCap, Factory, Briefcase, ShoppingCart, Scale, Globe, Truck } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      industry: "Healthcare",

      title: "Regional Medical Network Achieves HIPAA Compliance",
      desc: "A 15-hospital network needed secure patient data management across Microsoft 365 with HIPAA compliance.",
      challenge: "Legacy email systems, no data encryption, compliance gaps",
      solution: "Complete migration to Exchange Online with DLP, encryption, and audit logging",
      results: "100% compliance in 90 days, zero data breaches, 40% efficiency gain",
      stats: [
        { val: "5,000+", lab: "Users supported" },
        { val: "90 days", lab: "Completion time" },
        { val: "$420K", lab: "Annual savings" }
      ]
    },
    {
      industry: "Financial Services",
      title: "Fortune 500 Bank Secures Cloud Infrastructure",
      desc: "A major bank required SOC 2 Type II compliance and advanced threat protection implementation.",
      challenge: "Security gaps, compliance audit failures, phishing incidents",
      solution: "Implemented MFA, advanced threat protection, DLP, and continuous auditing",
      results: "SOC 2 Type II certified, 99.97% threat prevention, zero incidents",
      stats: [
        { val: "8,500+", lab: "Users protected" },
        { val: "120 days", lab: "To certification" },
        { val: "$1.2M", lab: "Risk mitigation" }
      ]
    },
    {
      industry: "Technology",
      title: "SaaS Company Enables Global Collaboration",
      desc: "A software company with 2,000+ distributed employees needed unified Teams and SharePoint deployment.",
      challenge: "Multiple communication tools, poor collaboration, high latency issues",
      solution: "Enterprise Teams deployment with calling, meeting rooms, and SharePoint intranet",
      results: "35% productivity increase, 60% tool consolidation, 45% cost reduction",
      stats: [
        { val: "2,000+", lab: "Global users" },
        { val: "60 days", lab: "Go-live timeline" },
        { val: "$2.1M", lab: "Annual savings" }
      ]
    },
    {
      industry: "Education",
      title: "University System Implements FERPA-Compliant Cloud",
      desc: "A 12-campus university system required secure student data management with FERPA compliance.",
      challenge: "Siloed systems, compliance gaps, difficult user management",
      solution: "Integrated Azure AD, Teams, SharePoint with FERPA controls and encryption",
      results: "100% FERPA compliant, zero data breaches, improved student experience",
      stats: [
        { val: "45,000+", lab: "Students & staff" },
        { val: "180 days", lab: "Full deployment" },
        { val: "$850K", lab: "Annual savings" }
      ]
    },
    {
      industry: "Manufacturing",
      title: "Manufacturing Giant Improves Operational Efficiency",
      desc: "A major manufacturing company needed to modernize communication across 50+ facilities.",
      challenge: "Disparate systems, poor visibility, high operational costs",
      solution: "Microsoft 365 with production-floor integrated teams, real-time dashboards",
      results: "28% efficiency gain, 15% downtime reduction, $3.8M saved annually",
      stats: [
        { val: "12,000+", lab: "Employees connected" },
        { val: "150 days", lab: "Implementation" },
        { val: "$3.8M", lab: "First-year savings" }
      ]
    },
    {
      industry: "Professional Services",

      title: "Consulting Firm Scales to 1,000+ Remote Workers",
      desc: "A consulting company needed to rapidly scale remote work capabilities post-pandemic.",
      challenge: "Emergency remote work transition, no cloud infrastructure",
      solution: "Rapid Microsoft 365 deployment with Teams calling, file sharing, and security",
      results: "30-day deployment, 99.95% uptime, 50% operational cost reduction",
      stats: [
        { val: "1,200+", lab: "Remote workers" },
        { val: "30 days", lab: "Emergency deployment" },
        { val: "$1.5M", lab: "Cost savings/year" }
      ]
    },
    {
      industry: "Retail",
      title: "Retail Chain Unifies 500+ Store Communications",
      desc: "A national retail chain needed unified communication across stores, distribution centers, and HQ.",
      challenge: "Multiple phone systems, inconsistent messaging, high support costs",
      solution: "Teams Phone System, meeting rooms, unified support ticketing",
      results: "75% phone cost reduction, 40% support ticket reduction, improved customer service",
      stats: [
        { val: "8,000+", lab: "Store employees" },
        { val: "120 days", lab: "Full rollout" },
        { val: "$2.2M", lab: "Annual savings" }
      ]
    },
    {
      industry: "Legal Services",
      title: "Law Firm Secures Client Data with Advanced DLP",
      desc: "A 200-attorney law firm required strict data protection and privilege controls for client materials.",
      challenge: "Client confidentiality concerns, regulatory compliance, access control",
      solution: "Advanced DLP, information barriers, encryption, audit trails, role-based access",
      results: "100% compliance, zero data breaches, enhanced client confidence",
      stats: [
        { val: "800+", lab: "Staff members" },
        { val: "90 days", lab: "Implementation" },
        { val: "$500K", lab: "Risk mitigation" }
      ]
    },
    {
      industry: "Non-Profit",
      title: "Humanitarian Organization Connects 200+ Global Offices",
      desc: "A global non-profit organization needed to connect field offices with headquarters across 50 countries.",
      challenge: "Limited budget, international connectivity, language barriers",
      solution: "Cost-optimized Microsoft 365 with multi-language support and regional deployments",
      results: "60% cost savings, improved coordination, faster mission delivery",
      stats: [
        { val: "5,000+", lab: "Global users" },
        { val: "180 days", lab: "Phased rollout" },
        { val: "$1.3M", lab: "Annual savings" }
      ]
    },
    {
      industry: "Logistics",
      title: "Logistics Company Optimizes Supply Chain Communication",
      desc: "A major logistics provider needed real-time communication across 30,000+ fleet and warehouse workers.",
      challenge: "Fragmented communications, poor coordination, high operational costs",
      solution: "Mobile-first Microsoft Teams with real-time tracking and operational dashboards",
      results: "22% on-time delivery improvement, 18% cost reduction, better safety",
      stats: [
        { val: "30,000+", lab: "Field workers" },
        { val: "210 days", lab: "Full implementation" },
        { val: "$4.2M", lab: "First-year ROI" }
      ]
    }
  ];

  return (
    <section id="case" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 ">Case Studies</h2>
        <p className="text-xl text-gray-500 mb-16  max-w-4xl">Real-world success stories demonstrating measurable impact and transformation through Microsoft 365 support.</p>

        <div className="grid lg:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-sm flex flex-col h-full">
              <div className="mb-4"> 
                <span className="text-white font-medium text-sm rounded-3xl px-3 py-1 bg-blue-500">{c.industry}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.title}</h3>
              <p className="text-gray-700 mb-6 font-medium">{c.desc}</p>

              <div className="space-y-4 mb-8 flex-grow">
                <div className='flex flex-col'><span className="font-medium text-gray-500">Challenge</span> <span className="text-gray-700">{c.challenge}</span></div>
                <div className='flex flex-col'><span className="font-medium text-gray-500">Solution</span> <span className="text-gray-700">{c.solution}</span></div>
                <div className='flex flex-col'><span className="font-medium text-gray-500">Results</span> <span className="text-gray-700">{c.results}</span></div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-blue-200 pt-6">
                {c.stats.map((s, idx) => (
                  <div key={idx} className="">
                    <p className="text-xl font-bold text-blue-600">{s.val}</p>
                    <p className="text-[10px] text-gray-500">{s.lab}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;