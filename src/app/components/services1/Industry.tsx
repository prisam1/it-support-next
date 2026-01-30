// components/IndustriesSection.tsx
import React from "react";

type Industry = {
  emoji: string;
  title: string;
  subtitle: string;
};

const industries: Industry[] = [
  { emoji: "🏥", title: "Healthcare", subtitle: "HIPAA-compliant support" },
  { emoji: "🏦", title: "Finance", subtitle: "Secure banking systems" },
  { emoji: "🛒", title: "Retail", subtitle: "POS and e-commerce" },
  { emoji: "🎓", title: "Education", subtitle: "Campus-wide support" },
  { emoji: "🏭", title: "Manufacturing", subtitle: "Industrial IT systems" },
  { emoji: "⚖️", title: "Legal", subtitle: "Confidential data handling" },
  { emoji: "🚚", title: "Logistics", subtitle: "Supply chain systems" },
  { emoji: "💼", title: "Professional Services", subtitle: "Consulting firms" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{industry.emoji}</div>
              <h4 className="font-bold">{industry.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{industry.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
