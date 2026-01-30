import React from 'react';

const Services = () => {
  const coreServices = [
    { title: "Escalation Management", desc: "Expert handling of complex tickets from Tier-1 with root cause analysis" },
    { title: "Network Troubleshooting", desc: "Advanced diagnostics for connectivity, performance, and configuration issues" },
    { title: "Server & Database Support", desc: "Enterprise server management and database optimization" },
    { title: "Security & Compliance", desc: "Advanced security troubleshooting and compliance verification" },
    { title: "System Architecture Design", desc: "Infrastructure planning and optimization consultations" },
  ];

  const premiumServices = [
    { title: "Proactive Monitoring", desc: "24/7 infrastructure monitoring with predictive alerts and preventive actions" },
    { title: "Performance Tuning", desc: "System optimization, capacity planning, and bottleneck identification" },
    { title: "Patch Management", desc: "Enterprise patch deployment and change management" },
    { title: "Incident Response", desc: "Critical incident management and disaster recovery coordination" },
    { title: "Technical Documentation", desc: "Comprehensive system documentation and runbook creation" },
  ];

  const ServiceList = ({ title, items }: { title: string, items: any[] }) => (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <span className="text-blue-600 font-bold text-xl">✓</span>
            <span className="text-slate-700">
              <strong>{item.title}:</strong> {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="services" className="py-0 mt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ServiceList title="Core Services" items={coreServices} />
          <ServiceList title="Premium Services" items={premiumServices} />
        </div>
      </div>
    </section>
  );
};

export default Services;