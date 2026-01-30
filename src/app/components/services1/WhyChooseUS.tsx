import React from "react";

type Benefit = {
  emoji: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    emoji: "⚡",
    title: "Lightning-Fast Response",
    description:
      "Average response time under 15 minutes with 24/7/365 availability across all time zones.",
  },
  {
    emoji: "🎓",
    title: "Certified Professionals",
    description:
      "ITIL v4, CompTIA A+, Microsoft certified technicians with proven industry expertise.",
  },
  {
    emoji: "💰",
    title: "Cost-Effective Solutions",
    description:
      "Reduce IT operational costs by up to 60% compared to in-house support teams.",
  },
  {
    emoji: "📈",
    title: "Scalable Services",
    description:
      "Easily scale support capacity up or down based on your business needs and growth.",
  },
  {
    emoji: "🔒",
    title: "Enterprise Security",
    description:
      "SOC 2 Type II compliant with comprehensive data protection and privacy protocols.",
  },
  {
    emoji: "🌍",
    title: "Multilingual Support",
    description:
      "Support available in English, Spanish, French, Mandarin, Hindi, and Portuguese.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{b.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{b.title}</h3>
              <p className="text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
