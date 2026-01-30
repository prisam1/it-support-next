import React from "react";
import {
  Award,
  Clock,
  Shield,
  Lock,
  DollarSign,
  Users,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  circleBg: string;
  iconColor: string;
};

const FEATURES: readonly Feature[] = [
  {
    title: "15+ Years Experience",
    description:
      "Industry-leading expertise with certified professionals and proven track record",
    icon: <Award className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock expert assistance with 15-minute response time guarantee",
    icon: <Clock className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability with money-back uptime guarantee",
    icon: <Shield className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Military-Grade Encryption",
    description: "AES-256 encryption with zero-trust security architecture",
    icon: <Lock className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, flexible plans, and clear ROI metrics",
    icon: <DollarSign className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "500+ Happy Clients",
    description:
      "Trusted by Fortune 500 companies and growing startups worldwide",
    icon: <Users className="h-10 w-10" aria-hidden="true" />,
    circleBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
] as const;

function FeatureCard({ title, description, icon, circleBg, iconColor }: Feature) {
  return (
    <div className="p-6 text-center">
      <div
        className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${circleBg}`}
      >
        <div className={iconColor}>{icon}</div>
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
