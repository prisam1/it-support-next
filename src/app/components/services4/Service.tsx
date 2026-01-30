import React from "react";
import { Shield, Network, Headset, Lock, Cloud, TrendingUp,} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SERVICES: readonly Service[] = [
  {
    icon: <Shield className="h-10 w-10 text-purple-600" aria-hidden="true" />,
    title: "Enterprise VPN Setup",
    description:
      "Custom VPN infrastructure design and deployment for secure remote access",
  },
  {
    icon: <Network className="h-10 w-10 text-blue-600" aria-hidden="true" />,
    title: "Network Configuration",
    description:
      "Optimal network setup with load balancing and failover mechanisms",
  },
  {
    icon: <Headset className="h-10 w-10 text-green-600" aria-hidden="true" />,
    title: "24/7 Technical Support",
    description: "Round-the-clock expert assistance for network and VPN issues",
  },
  {
    icon: <Lock className="h-10 w-10 text-red-600" aria-hidden="true" />,
    title: "Security Auditing",
    description:
      "Comprehensive security assessments and vulnerability remediation",
  },
  {
    icon: <Cloud className="h-10 w-10 text-indigo-600" aria-hidden="true" />,
    title: "Cloud Integration",
    description: "Seamless VPN integration with AWS, Azure, and Google Cloud",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-orange-600" aria-hidden="true" />,
    title: "Performance Monitoring",
    description: "Real-time analytics and proactive performance optimization",
  },
] as const;

function ServiceCard({ icon, title, description }: Service) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
}

export default function VpnServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Services We Offer
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
