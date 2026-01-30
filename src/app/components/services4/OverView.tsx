import React from "react";

type Card = {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  gradient: string;
  points: readonly string[];
};

const CARDS: readonly Card[] = [
  {
    icon: "🛡️",
    iconColor: "text-purple-600",
    title: "Our Role",
    description:
      "Strategic IT infrastructure partner providing end-to-end VPN deployment, configuration, and optimization for remote teams worldwide.",
    gradient: "from-purple-50 to-blue-50",
    points: ["Infrastructure Planning", "Security Architecture", "Compliance Management"],
  },
  {
    icon: "✅",
    iconColor: "text-blue-600",
    title: "Our Responsibilities",
    description:
      "Ensuring uninterrupted network connectivity through proactive monitoring, rapid incident response, and continuous performance optimization.",
    gradient: "from-blue-50 to-indigo-50",
    points: ["24/7 Network Monitoring", "Incident Resolution", "Performance Tuning"],
  },
  {
    icon: "⚙️",
    iconColor: "text-indigo-600",
    title: "Our Skills",
    description:
      "Expert team certified in leading VPN technologies, network security protocols, and cloud infrastructure management.",
    gradient: "from-indigo-50 to-purple-50",
    points: ["CCNP/CCIE Certified", "Security Specialists", "Cloud Architecture"],
  },
] as const;

export default function RoleOverviewVpnSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          What We Do: Role Overview
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl bg-gradient-to-br p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl ${card.gradient}`}
            >
              <div className={`mb-4 text-5xl ${card.iconColor}`} aria-hidden="true">
                {card.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-800">{card.title}</h3>
              <p className="mb-4 text-gray-700">{card.description}</p>

              <ul className="space-y-2 text-gray-600">
                {card.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-green-500" aria-hidden="true">
                      ✓
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
