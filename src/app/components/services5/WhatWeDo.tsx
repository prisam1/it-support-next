import React from 'react';
import { Cloud, Settings, ArrowLeftRight, Check, ShieldCheck } from 'lucide-react';

const WhatWeDo = () => {
  const cards = [
    { 
      icon: <Cloud className="w-6 h-6 text-white" />, 
      title: "Technical Support", 
      desc: "Expert troubleshooting and resolution for Exchange, Teams, SharePoint, and OneDrive issues with priority response times.", 
      features: ["15-minute response time", "Advanced diagnostics", "Proactive monitoring"] 
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />, 
      title: "Security & Compliance", 
      desc: "Comprehensive security implementation including MFA, DLP, threat protection, and compliance with HIPAA, SOC2, and industry standards.", 
      features: ["Advance threat protection", "Data loss prevention", "Compliance audits"] 
    },
    { 
      icon: <ArrowLeftRight className="w-6 h-6 text-white" />, 
      title: "Cloud Migration", 
      desc: "Seamless migration from on-premises or legacy systems to Microsoft 365 with zero downtime and complete data integrity.", 
      features: ["Zero-downtime migration", "Data validation", "User training"] 
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-900">What We Do</h2>
        <p className="text-xl text-center text-gray-500 mb-16 max-w-3xl mx-auto">
          We deliver end-to-end Microsoft 365 support services tailored to US business requirements.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group p-7 rounded-2xl border border-blue-100 bg-cyan-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-blue">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue/20">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">{card.desc}</p>
              <ul className="space-y-3">
                {card.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;