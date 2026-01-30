import React from 'react';

const CaseStudies = () => {
  const stories = [
    {
      title: "Global Investment Bank",
      subtitle: "Fortune 100 financial institution with 10,000+ employees",
      desc: "Deployed Tier-2 support for mission-critical trading systems and infrastructure. Reduced critical incident resolution time from 8 hours to 45 minutes, achieved 99.95% uptime, and prevented $2M+ in potential trading losses.",
      tags: ["Mission Critical", "99.95% SLA"],
      borderColor: "border-blue-600"
    },
    {
      title: "Healthcare Delivery Network",
      subtitle: "Multi-hospital system managing 15 facilities with 12,000+ staff",
      desc: "Implemented HIPAA-compliant Tier-2 support with specialized EHR system expertise. Reduced patient care delays by 73%, improved EMR system uptime to 99.9%, and achieved zero compliance incidents.",
      tags: ["HIPAA Compliant", "EHR Expert"],
      borderColor: "border-indigo-600"
    },
    {
      title: "Cloud Infrastructure Provider",
      subtitle: "SaaS platform with 500+ enterprise customers",
      desc: "Specialized Tier-2 support for Kubernetes, Docker, and cloud infrastructure. Reduced customer-reported infrastructure issues by 82%, improved system scalability, and enabled rapid infrastructure expansion.",
      tags: ["Kubernetes Expert", "82% Improvement"],
      borderColor: "border-blue-600"
    },
    {
      title: "Telecommunications Corporation",
      subtitle: "National telecom provider with 8,000 network nodes",
      desc: "Advanced Tier-2 support for complex telecom infrastructure and NOC operations. Reduced network incidents by 58%, improved MTTR from 3 hours to 28 minutes, and maintained 99.99% network availability.",
      tags: ["Network Ops", "58% Reduction"],
      borderColor: "border-indigo-600"
    },
    {
      title: "Major University System",
      subtitle: "Research university with 50,000+ students and faculty",
      desc: "Deployed Tier-2 support for research computing infrastructure. Reduced research project delays by 44%, improved system stability for computational labs, and supported secure data management.",
      tags: ["Research Computing", "44% Improvement"],
      borderColor: "border-blue-600"
    },
    {
      title: "E-Commerce Platform",
      subtitle: "High-traffic retail platform processing $500M+ annually",
      desc: "Advanced Tier-2 support for high-availability database infrastructure and payment systems. Reduced transaction processing delays by 91% and maintained uptime during peak seasons.",
      tags: ["Database Expert", "91% Reduction"],
      borderColor: "border-indigo-600"
    },
    {
      title: "Energy & Utilities Company",
      subtitle: "Critical infrastructure provider with SCADA systems nationwide",
      desc: "Specialized Tier-2 support for SCADA, OT systems, and critical infrastructure. Achieved zero unplanned outages in 24 months and improved incident response from 2 hours to 12 minutes.",
      tags: ["SCADA/OT", "Zero Outages"],
      borderColor: "border-blue-600"
    },
    {
      title: "Insurance & Reinsurance Giant",
      subtitle: "Global insurer with $50B+ in assets and 25,000 employees",
      desc: "Enterprise Tier-2 support for complex policy management systems. Reduced policy processing time by 37%, improved disaster recovery, and achieved SOC 2 Type II compliance.",
      tags: ["Enterprise Systems", "37% Improvement"],
      borderColor: "border-indigo-600"
    },
    {
      title: "Federal Government Agency",
      subtitle: "Defense/Intelligence agency with 5,000+ classified systems",
      desc: "FedRAMP High certified Tier-2 support for secure infrastructure. Achieved ICD 705 compliance and reduced security incident response time by 65%.",
      tags: ["FedRAMP High", "Classified Systems"],
      borderColor: "border-blue-600"
    },
    {
      title: "Pharmaceutical Research Company",
      subtitle: "Biotech firm with 21 CFR Part 11 requirements",
      desc: "FDA-compliant Tier-2 support for research databases and lab systems. Enabled 3 major drug approvals through reliable infrastructure and reduced lab downtime by 79%.",
      tags: ["21 CFR Part 11", "79% Reduction"],
      borderColor: "border-indigo-600"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
          Enterprise Success Stories
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 border-l-4 ${story.borderColor} shadow-sm transition-all duration-300 hover:shadow-blue hover:-translate-y-1`}
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2">{story.title}</h4>
              <p className="text-sm text-slate-600 mb-4">{story.subtitle}</p>
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">{story.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {story.tags.map(tag => (
                  <span key={tag} className={`${story.borderColor.replace('border-', 'bg-').replace('600', '100')} ${story.borderColor.replace('border-', 'text-').replace('600', '700')} px-3 py-1 rounded-full text-xs font-medium`}>
                    {tag}
                  </span>
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