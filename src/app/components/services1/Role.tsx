import React from "react";

type Card = {
  emoji: string;
  title: string;
  titleClass: string;
  bgClass: string;
  description: string;
};

const cards: Card[] = [
  {
    emoji: "🎯",
    title: "Role",
    titleClass: "text-blue-600",
    bgClass: "bg-gradient-to-br from-blue-50 to-purple-50",
    description:
      "First point of contact for all technical support requests. We triage incoming tickets, resolve basic issues immediately, and escalate complex problems to specialized teams with detailed documentation.",
  },
  {
    emoji: "⚡",
    title: "Responsibility",
    titleClass: "text-purple-600",
    bgClass: "bg-gradient-to-br from-purple-50 to-pink-50",
    description:
      "Maintain 95%+ first-contact resolution rate, ensure sub-15 minute response times, document all interactions in ticketing systems, and provide exceptional customer experience across all communication channels.",
  },
  {
    emoji: "🔧",
    title: "Skills",
    titleClass: "text-pink-600",
    bgClass: "bg-gradient-to-br from-pink-50 to-red-50",
    description:
      "ITIL v4 certified technicians with expertise in Windows, macOS, Linux, Microsoft 365, Active Directory, VPN troubleshooting, remote desktop tools, and excellent communication abilities.",
  },
];

export default function RoleOverviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What We Do: Role Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bgClass} p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2`}
            >
              <div className="text-5xl mb-4">{card.emoji}</div>
              <h3 className={`text-2xl font-bold mb-4 ${card.titleClass}`}>
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
