import React from "react";

type Metric = {
  value: string;
  label: string;
  valueClass: string;
};

type CaseStudy = {
  id: number;
  badgeBgClass: string;
  company: string;
  meta: string;
  ratingText: string; // e.g. "5.0/5"
  testimonial: string;
  metrics: Metric[];
  author: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    badgeBgClass: "bg-gradient-to-br from-blue-500 to-purple-500",
    company: "TechCorp Solutions",
    meta: "Software Development • 850 employees",
    ratingText: "5.0/5",
    testimonial:
      '"Reduced our ticket resolution time by 67% within the first quarter. The team\'s expertise in handling complex Microsoft 365 migrations was exceptional. Our employee satisfaction scores jumped from 71% to 94%."',
    metrics: [
      { value: "67%", label: "Faster Resolution", valueClass: "text-blue-600" },
      { value: "94%", label: "User Satisfaction", valueClass: "text-purple-600" },
      { value: "$180K", label: "Annual Savings", valueClass: "text-pink-600" },
    ],
    author: "— Michael Chen, CTO",
  },
  {
    id: 2,
    badgeBgClass: "bg-gradient-to-br from-green-500 to-teal-500",
    company: "MediHealth Network",
    meta: "Healthcare • 2,400 employees",
    ratingText: "5.0/5",
    testimonial:
      '"HIPAA-compliant support that never misses a beat. Their 24/7 availability means our medical staff always has access to critical systems. First-call resolution rate of 96% is industry-leading."',
    metrics: [
      { value: "96%", label: "First-Call Fix", valueClass: "text-green-600" },
      { value: "24/7", label: "Availability", valueClass: "text-teal-600" },
      { value: "100%", label: "HIPAA Compliant", valueClass: "text-blue-600" },
    ],
    author: "— Dr. Sarah Williams, Chief Medical Information Officer",
  },
  {
    id: 3,
    badgeBgClass: "bg-gradient-to-br from-orange-500 to-red-500",
    company: "RetailMax Corporation",
    meta: "Retail Chain • 5,200 employees",
    ratingText: "4.9/5",
    testimonial:
      '"Supporting 340 retail locations across 28 states seamlessly. Their POS system expertise saved us during Black Friday when we had zero downtime. Response times average under 8 minutes."',
    metrics: [
      { value: "8min", label: "Avg Response", valueClass: "text-orange-600" },
      { value: "0", label: "Holiday Downtime", valueClass: "text-red-600" },
      { value: "340", label: "Locations Supported", valueClass: "text-yellow-600" },
    ],
    author: "— James Rodriguez, VP of Operations",
  },
  {
    id: 4,
    badgeBgClass: "bg-gradient-to-br from-indigo-500 to-blue-500",
    company: "FinanceFirst Bank",
    meta: "Banking • 1,800 employees",
    ratingText: "5.0/5",
    testimonial:
      '"Security-focused support that understands financial compliance. Helped us achieve SOC 2 Type II certification with their meticulous documentation. Reduced security incidents by 83%."',
    metrics: [
      { value: "83%", label: "Fewer Incidents", valueClass: "text-indigo-600" },
      { value: "SOC 2", label: "Certified Support", valueClass: "text-blue-600" },
      { value: "99.8%", label: "SLA Compliance", valueClass: "text-purple-600" },
    ],
    author: "— Patricia Johnson, Chief Information Security Officer",
  },
  {
    id: 5,
    badgeBgClass: "bg-gradient-to-br from-pink-500 to-rose-500",
    company: "EduTech University",
    meta: "Education • 12,000 users",
    ratingText: "4.8/5",
    testimonial:
      '"Scaled support for 12,000 students and faculty during remote learning transition. Their multilingual support team handles 6 languages. Student tech complaints dropped 72%."',
    metrics: [
      { value: "72%", label: "Fewer Complaints", valueClass: "text-pink-600" },
      { value: "6", label: "Languages", valueClass: "text-rose-600" },
      { value: "12K", label: "Users Supported", valueClass: "text-red-600" },
    ],
    author: "— Dr. Robert Martinez, Dean of Technology",
  },
  {
    id: 6,
    badgeBgClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    company: "LogiTrans Global",
    meta: "Logistics • 3,600 employees",
    ratingText: "5.0/5",
    testimonial:
      '"Their understanding of warehouse management systems and mobile device support is unmatched. Cut our IT operational costs by 44% while improving service quality significantly."',
    metrics: [
      { value: "44%", label: "Cost Reduction", valueClass: "text-yellow-600" },
      { value: "15min", label: "Avg Resolution", valueClass: "text-orange-600" },
      { value: "98%", label: "Uptime Rate", valueClass: "text-amber-600" },
    ],
    author: "— David Kim, Director of IT Operations",
  },
  {
    id: 7,
    badgeBgClass: "bg-gradient-to-br from-cyan-500 to-blue-500",
    company: "LegalPro Associates",
    meta: "Legal Services • 620 employees",
    ratingText: "5.0/5",
    testimonial:
      '"Confidentiality and discretion are paramount in legal work. Their team understands this perfectly. Document management system support is flawless with 99.9% uptime."',
    metrics: [
      { value: "99.9%", label: "System Uptime", valueClass: "text-cyan-600" },
      { value: "100%", label: "Confidentiality", valueClass: "text-blue-600" },
      { value: "5min", label: "Priority Response", valueClass: "text-indigo-600" },
    ],
    author: "— Amanda Foster, Managing Partner",
  },
  {
    id: 8,
    badgeBgClass: "bg-gradient-to-br from-violet-500 to-purple-500",
    company: "ManufacturePro Industries",
    meta: "Manufacturing • 4,100 employees",
    ratingText: "4.9/5",
    testimonial:
      '"Production floor can\'t afford downtime. Their rapid response to manufacturing execution system issues kept our production lines running. Prevented $2.3M in potential losses."',
    metrics: [
      { value: "$2.3M", label: "Loss Prevention", valueClass: "text-violet-600" },
      { value: "7min", label: "Critical Response", valueClass: "text-purple-600" },
      { value: "97%", label: "Production Uptime", valueClass: "text-fuchsia-600" },
    ],
    author: "— Thomas Anderson, Plant Manager",
  },
  {
    id: 9,
    badgeBgClass: "bg-gradient-to-br from-emerald-500 to-green-500",
    company: "BioResearch Labs",
    meta: "Biotechnology • 890 employees",
    ratingText: "5.0/5",
    testimonial:
      '"Scientific equipment and specialized software require unique expertise. Their technicians learned our complex systems quickly. Research productivity increased 31% due to reduced tech friction."',
    metrics: [
      { value: "31%", label: "Productivity Gain", valueClass: "text-emerald-600" },
      { value: "12min", label: "Avg Resolution", valueClass: "text-green-600" },
      { value: "95%", label: "User Satisfaction", valueClass: "text-teal-600" },
    ],
    author: "— Dr. Lisa Chang, Research Director",
  },
  {
    id: 10,
    badgeBgClass: "bg-gradient-to-br from-red-500 to-pink-500",
    company: "CloudSync Consulting",
    meta: "Professional Services • 1,200 employees",
    ratingText: "4.9/5",
    testimonial:
      '"As consultants, we\'re client-facing 24/7. Their white-glove support keeps our billable hours high. Onboarded new clients 58% faster with their seamless IT provisioning support."',
    metrics: [
      { value: "58%", label: "Faster Onboarding", valueClass: "text-red-600" },
      { value: "24/7", label: "Support Coverage", valueClass: "text-pink-600" },
      { value: "$340K", label: "Revenue Impact", valueClass: "text-rose-600" },
    ],
    author: "— Jennifer Brooks, Operations Director",
  },
];

function Stars({ ratingText }: { ratingText: string }) {
  return (
    <div className="mb-4">
      <span className="text-yellow-400">★★★★★</span>
      <span className="text-sm text-gray-600 ml-2">{ratingText}</span>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="py-16 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Success Stories: 10 Case Studies
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real results from businesses that transformed their IT support
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-16 h-16 ${cs.badgeBgClass} rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4`}
                >
                  {cs.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {cs.company}
                  </h3>
                  <p className="text-sm text-gray-500">{cs.meta}</p>
                </div>
              </div>

              <Stars ratingText={cs.ratingText} />

              <p className="text-gray-700 mb-4">{cs.testimonial}</p>

              <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 p-4 rounded-lg">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <p className={`text-2xl font-bold ${m.valueClass}`}>
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-600">{m.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4 italic">{cs.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
