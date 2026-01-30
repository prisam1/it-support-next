import React from "react";
import { Building2, HeartPulse, Code2, GraduationCap, ShoppingCart, Factory, Scale, Radio, Pill, HandHelping, CheckCircle2,} from "lucide-react";

type CaseStudy = {
  title: string;
  category: string;
  icon: React.ReactNode;
  badgeBg: string;
  iconColor: string;
  tagBg: string;
  tagText: string;
  challenge: string;
  solution: string;
  results: readonly string[];
  tag: string;
};

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    title: "Global Financial Services",
    category: "Finance & Banking",
    icon: <Building2 className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-purple-100",
    iconColor: "text-purple-600",
    tagBg: "bg-purple-100",
    tagText: "text-purple-800",
    challenge:
      "A multinational bank needed secure VPN access for 5,000+ remote employees across 45 countries with compliance requirements (SOC 2, PCI-DSS).",
    solution:
      "Deployed multi-regional Cisco AnyConnect infrastructure with zero-trust architecture and real-time threat monitoring.",
    results: ["99.98% uptime achieved", "62% reduction in security incidents", "$2.3M annual cost savings"],
    tag: "ROI: 340%",
  },
  {
    title: "HealthCare Network",
    category: "Healthcare & Medical",
    icon: <HeartPulse className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-blue-100",
    iconColor: "text-blue-600",
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
    challenge:
      "Hospital network with 120 clinics required HIPAA-compliant VPN for telehealth services and electronic health records access.",
    solution:
      "Implemented encrypted VPN tunnels with FortiGate firewalls and multi-factor authentication for all healthcare providers.",
    results: ["100% HIPAA compliance maintained", "Zero data breaches in 24 months", "45% faster patient data access"],
    tag: "Uptime: 99.97%",
  },
  {
    title: "Tech Startup Scale-Up",
    category: "Technology & SaaS",
    icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-green-100",
    iconColor: "text-green-600",
    tagBg: "bg-green-100",
    tagText: "text-green-800",
    challenge:
      "Fast-growing SaaS company scaling from 50 to 500 remote developers needed scalable, high-performance VPN infrastructure.",
    solution:
      "WireGuard VPN implementation with AWS integration, automated provisioning, and developer-friendly CLI tools.",
    results: ["10x user scaling with zero downtime", "78% faster connection speeds", "5-minute onboarding for new developers"],
    tag: "Performance: +78%",
  },
  {
    title: "University Remote Learning",
    category: "Education",
    icon: <GraduationCap className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-red-100",
    iconColor: "text-red-600",
    tagBg: "bg-red-100",
    tagText: "text-red-800",
    challenge:
      "Major university needed to provide 25,000 students and 3,000 faculty with secure access to research databases and learning platforms.",
    solution:
      "Deployed OpenVPN Access Server with automated student provisioning and tiered bandwidth allocation for different user groups.",
    results: ["28,000 concurrent connections supported", "93% student satisfaction rate", "$450K infrastructure cost reduction"],
    tag: "Users: 28,000+",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail & E-commerce",
    icon: <ShoppingCart className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    tagBg: "bg-yellow-100",
    tagText: "text-yellow-800",
    challenge:
      "Online retailer with distributed warehouse teams needed secure POS system access and inventory management from multiple locations.",
    solution:
      "Site-to-site VPN with Azure VPN Gateway connecting 15 warehouses and 200+ remote customer service agents.",
    results: ["Real-time inventory synchronization", "35% reduction in order processing time", "Zero payment data breaches"],
    tag: "Security: 100%",
  },
  {
    title: "Manufacturing Enterprise",
    category: "Manufacturing & Industrial",
    icon: <Factory className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-800",
    challenge:
      "Global manufacturer needed to connect 32 production facilities with engineering teams working remotely on CAD systems and IoT monitoring.",
    solution:
      "Hybrid VPN architecture combining Palo Alto Networks for facilities and Cisco AnyConnect for mobile engineers.",
    results: ["24/7 production monitoring enabled", "58% faster design collaboration", "$1.8M in travel cost savings"],
    tag: "Facilities: 32",
  },
  {
    title: "Legal Firm Network",
    category: "Legal Services",
    icon: <Scale className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-pink-100",
    iconColor: "text-pink-600",
    tagBg: "bg-pink-100",
    tagText: "text-pink-800",
    challenge:
      "International law firm with 800 attorneys required secure access to confidential case files and document management systems.",
    solution:
      "Zero-trust VPN implementation with SonicWall, document-level encryption, and session recording for compliance.",
    results: ["Attorney-client privilege maintained", "100% audit trail compliance", "40% increase in remote billable hours"],
    tag: "Compliance: 100%",
  },
  {
    title: "Media Production Company",
    category: "Media & Entertainment",
    icon: <Radio className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-teal-100",
    iconColor: "text-teal-600",
    tagBg: "bg-teal-100",
    tagText: "text-teal-800",
    challenge:
      "Film production company needed high-bandwidth VPN for creative teams to collaborate on 4K video projects remotely.",
    solution:
      "Custom WireGuard deployment optimized for large file transfers with dedicated bandwidth allocation and CDN integration.",
    results: ["10 Gbps sustained throughput", "85% faster render farm access", "3 months earlier project delivery"],
    tag: "Speed: 10 Gbps",
  },
  {
    title: "Pharmaceutical Research",
    category: "Pharmaceutical & Biotech",
    icon: <Pill className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-orange-100",
    iconColor: "text-orange-600",
    tagBg: "bg-orange-100",
    tagText: "text-orange-800",
    challenge:
      "Biotech firm conducting clinical trials across 18 countries needed secure data transmission with FDA 21 CFR Part 11 compliance.",
    solution:
      "Enterprise VPN with end-to-end encryption, digital signatures, and automated compliance reporting using Cisco AnyConnect.",
    results: ["FDA compliance achieved", "50% faster data aggregation", "Zero protocol deviations"],
    tag: "Countries: 18",
  },
  {
    title: "Non-Profit Organization",
    category: "Non-Profit & NGO",
    icon: <HandHelping className="h-6 w-6" aria-hidden="true" />,
    badgeBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    tagBg: "bg-cyan-100",
    tagText: "text-cyan-800",
    challenge:
      "International NGO with field workers in remote locations needed reliable, low-cost VPN access to donor databases and reporting systems.",
    solution:
      "Cost-optimized OpenVPN solution with satellite internet failover and offline-capable mobile applications.",
    results: ["95% connectivity in remote areas", "$120K annual infrastructure savings", "3x increase in field reporting"],
    tag: "Cost Savings: $120K",
  },
] as const;

function CaseStudyCard(item: CaseStudy) {
  return (
    <article className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl">
      <div className="mb-4 flex items-center">
        <div className={`mr-4 rounded-full p-3 ${item.badgeBg}`}>
          <div className={`${item.iconColor}`}>{item.icon}</div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.category}</p>
        </div>
      </div>

      <p className="mb-4 text-gray-700">
        <strong>Challenge:</strong> {item.challenge}
      </p>
      <p className="mb-4 text-gray-700">
        <strong>Solution:</strong> {item.solution}
      </p>

      <p className="mb-3 text-gray-700">
        <strong>Results:</strong>
      </p>

      <ul className="mb-4 space-y-2 text-gray-600">
        {item.results.map((r) => (
          <li key={r} className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
            <span>{r}</span>
          </li>
        ))}
      </ul>

      <span
        className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${item.tagBg} ${item.tagText}`}
      >
        {item.tag}
      </span>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Case Studies: Real-World Success Stories
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
