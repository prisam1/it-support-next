import React from "react";
import {Briefcase,HeartPulse, Code2, GraduationCap, ShoppingCart,} from "lucide-react";

type Industry = {
  name: string;
  icon: React.ReactNode;
  iconColor: string;
};

const INDUSTRIES: readonly Industry[] = [
  {
    name: "Finance & Banking",
    icon: <Briefcase className="h-10 w-10" aria-hidden="true" />,
    iconColor: "text-purple-600",
  },
  {
    name: "Healthcare",
    icon: <HeartPulse className="h-10 w-10" aria-hidden="true" />,
    iconColor: "text-red-600",
  },
  {
    name: "Technology",
    icon: <Code2 className="h-10 w-10" aria-hidden="true" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Education",
    icon: <GraduationCap className="h-10 w-10" aria-hidden="true" />,
    iconColor: "text-green-600",
  },
  {
    name: "E-commerce",
    icon: <ShoppingCart className="h-10 w-10" aria-hidden="true" />,
    iconColor: "text-orange-600",
  },
] as const;

export default function VpnIndustriesSection() {
  return (
    <section id="industries" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Industries We Serve
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl"
            >
              <div className={`mb-3 flex justify-center ${item.iconColor}`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
