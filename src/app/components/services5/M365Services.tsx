import React from 'react';
import { Headset, ArrowLeftRight, Users, Shield, Check, Lock, ShieldCheck, Globe, Server } from 'lucide-react';

const M365Services = () => {
  const serviceBlocks = [
    {
      type: "metrics",
      icon: <Headset className="w-8 h-8 text-blue-600" />,
      title: "Managed IT Support & Help Desk",
      desc: "Around-the-clock support for all Microsoft 365 applications with expert technicians ready to resolve issues.",
      items: ["24/7/365 Help Desk Support", "Ticket-based issue tracking", "User onboarding and training", "Performance optimization"],
      rightTitle: "KEY METRICS:",
      metrics: [
        { val: "98.7%", lab: "First-contact resolution rate" },
        { val: "15 min", lab: "Average response time" }
      ]
    },
    {
      type: "compliance",
      icon: <ArrowLeftRight className="w-8 h-8 text-blue-600" />,
      title: "Exchange & Email Management",
      desc: "Complete email infrastructure management including migration, security, and archival solutions.",
      items: ["Exchange Online administration", "Email security & filtering", "Archive & compliance management", "Mailbox recovery services"],
      rightTitle: "COMPLIANCE COVERAGE:",
      metrics: ["HIPAA Compliant", "SOC 2 Type II", "GDPR Ready", "FedRAMP Certified"]
    },
    {
      type: "deployment",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Teams & Collaboration",
      desc: "Strategic deployment and optimization of Microsoft Teams for seamless enterprise collaboration.",
      items: ["Teams deployment & governance", "Call quality monitoring", "Meeting room optimization", "User adoption programs"],
      rightTitle: "DEPLOYMENT OPTIONS:",
      metrics: ["Cloud-based deployment", "Hybrid environments", "Government cloud (GCC)", "Custom configurations"]
    },
    {
      type: "protection",
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Security & Threat Protection",
      desc: "Advanced security implementation protecting against evolving threats with multi-layered defense.",
      items: ["MFA & Conditional Access", "Advanced Threat Protection", "Data Loss Prevention (DLP)", "Insider risk management"],
      rightTitle: "PROTECTION INCLUDES:",
      metrics: ["Anti-malware & anti-phishing", "Email encryption", "Advanced audit logging", "Threat intelligence"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Services We Offer</h2>
        <p className="text-lg text-gray-500 font-light mb-16 max-w-3xl">Our comprehensive suite of Microsoft 365 support services covers all aspects of your cloud environment.</p>
        
        <div className="space-y-8">
          {serviceBlocks.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    {s.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 max-w-2xl text-lg font-light leading-relaxed">{s.desc}</p>
                  
                  <div className="grid sm:grid-cols-1 gap-3">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-600">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-[16px] font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Different UI for each box */}
                <div className="bg-blue-50/50 p-8 rounded-2xl mt-10 h-full">
                  <p className="text-xs font-bold text-gray-500 tracking-widest mb-6 uppercase">{s.rightTitle}</p>
                  
                  <div className="space-y-4">
                    {/* BIG METRICS (Help Desk) */}
                    {s.type === "metrics" && s.metrics.map((m: any, idx) => (
                      <div key={idx} className={idx !== 0 ? "pt-4 border-t border-blue-100" : ""}>
                        <p className="text-3xl font-bold text-blue-600">{m.val}</p>
                        <p className="text-sm text-gray-500 font-medium">{m.lab}</p>
                      </div>
                    ))}

                    {/*CHECKLIST (Exchange) */}
                    {s.type === "compliance" && s.metrics.map((m: any, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 font-medium">
                         ✓
                        <span>{m}</span>
                      </div>
                    ))}

                    {/* BULLET POINTS (Teams) */}
                    {s.type === "deployment" && s.metrics.map((m: any, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                        <span className="text-sm">{m}</span>
                      </div>
                    ))}

                    {/* SHIELD ICONS (Security) */}
                    {s.type === "protection" && s.metrics.map((m: any, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-blue-500 fill-blue-500" />
                        <span className="text-xs font-semibold text-gray-700">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default M365Services;