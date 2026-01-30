import React from "react";
import { Server, KeyRound, Cloud, Shield, Network } from "lucide-react";

type ToolItem = {
  name: string;
  icon: React.ReactNode;
  iconColor: string;
  hoverBg: string;
};

const TOOLS: readonly ToolItem[] = [
  {
    name: "Cisco AnyConnect",
    icon: <Server className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-purple-600",
    hoverBg: "hover:bg-purple-50",
  },
  {
    name: "OpenVPN",
    icon: <Network className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-blue-600",
    hoverBg: "hover:bg-blue-50",
  },
  {
    name: "WireGuard",
    icon: <KeyRound className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-green-600",
    hoverBg: "hover:bg-green-50",
  },
  {
    name: "FortiGate VPN",
    icon: <Shield className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-red-600",
    hoverBg: "hover:bg-red-50",
  },
  {
    name: "AWS VPN",
    icon: <Cloud className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-indigo-600",
    hoverBg: "hover:bg-indigo-50",
  },
  {
    name: "Azure VPN",
    icon: <Cloud className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-yellow-600",
    hoverBg: "hover:bg-yellow-50",
  },
  {
    name: "Palo Alto",
    icon: <Shield className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-pink-600",
    hoverBg: "hover:bg-pink-50",
  },
  {
    name: "SonicWall",
    icon: <Network className="h-12 w-12" aria-hidden="true" />,
    iconColor: "text-teal-600",
    hoverBg: "hover:bg-teal-50",
  },
] as const;

export default function VpnToolsTechnologiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Tools &amp; Technologies
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl bg-gray-50 p-6 text-center transition ${t.hoverBg}`}
            >
              <div className={`mb-4 flex justify-center ${t.iconColor}`}>
                {t.icon}
              </div>
              <h4 className="font-bold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
