// app/components/RoleOverviewSection.tsx
type Card = {
  emoji: string;
  title: string;
  titleClass: string;
  bgClass: string;
  description: string;
};

const cards: Card[] = [
  {
    emoji: "👨‍💼",
    title: "Role",
    titleClass: "text-black",
    bgClass: "bg-white",
    description: "Advanced technical specialists who handle escalated issues from Tier-1. We provide expert-level troubleshooting, system optimization, infrastructure support, and complex problem resolution for enterprise environments."
  },
  {
    emoji: "⚡",
    title: "Responsibility",
    titleClass: "text-black",
    bgClass: "bg-white",
    description: "Resolving complex technical escalations, performing root cause analysis, implementing permanent solutions, managing infrastructure health, and mentoring Tier-1 teams. We're accountable for resolution quality and system stability."
  },
  {
    emoji: "🎖️",
    title: "Skills",
    titleClass: "text-black",
    bgClass: "bg-white",
    description:
      "Advanced certifications (CCNA, MCSE, Linux+), deep system knowledge, networking expertise, database administration, security protocols, scripting/automation, and enterprise system architecture experience.",
  },
];

export default function WhatWeDo() {

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text sm:text-4xl">
          What We Do: Tier-2 Help Desk Overview
        </h2>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={
                `${card.bgClass} 
              bg-white/80 p-8 rounded-2xl border-t border-blue-100
               shadow-lg 
               transition-all duration-300 ease-out
               hover:shadow-blue hover:-translate-y-2`}
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
