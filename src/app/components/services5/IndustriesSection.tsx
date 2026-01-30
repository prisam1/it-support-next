import React from 'react';
import { Hospital, Landmark, GraduationCap, Building2, ShieldCheck, Factory, Briefcase, ShoppingCart, Scale, Globe, Truck } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      title: "Healthcare",
      icon: <Hospital className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "HIPAA-compliant infrastructure with secure patient data management and regulatory adherence.",
      points: ["HIPAA Compliance", "Patient privacy protection", "Audit trail management"]
    },
    {
      title: "Financial Services",
      icon: <Landmark className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "SOC 2 certified support with advanced security and fraud prevention mechanisms.",
      points: ["SOC 2 Type II", "Advanced encryption", "Compliance auditing"]
    },
    {
      title: "Education",
      icon: <Landmark className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "Student information security with FERPA compliance and educational technology integration.",
      points: ["FERPA Compliant", "Learning management systems", "Research data protection"]
    },
    {
      title: "Enterprise",
      icon: <Building2 className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "Large-scale deployment with multi-region support and global compliance standards.",
      points: ["Global infrastructure", "Multi-region deployment", "Disaster recovery"]
    },
    {
      title: "Government",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "FedRAMP authorized with government cloud support and classified data handling.",
      points: ["FedRAMP Authorized", "GCC/GCC High Support", "FIPS 140-2 Compliance"]
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-10 h-10 text-blue-600 mb-4" />,
      desc: "Modernizing shop-floor communication and supply chain visibility via real-time dashboards.",
      points: ["Operational Efficiency", "IoT Integration", "Supply chain tracking"]
    },
 
  ];

  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 ">Industries We Serve</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          Specialized expertise across diverse sectors with industry-specific compliance and best practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-blue-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              {item.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.desc}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {item.points.map((p, i) => (
                  <li key={i}>✓ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;