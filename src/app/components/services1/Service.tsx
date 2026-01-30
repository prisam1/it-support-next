import React from "react";

type Service = {
  emoji: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    emoji: "💻",
    title: "Desktop Support",
    description: "Hardware diagnostics, software installation, OS troubleshooting",
  },
  {
    emoji: "🔐",
    title: "Password Resets",
    description: "Active Directory, SSO, multi-factor authentication management",
  },
  {
    emoji: "📧",
    title: "Email Support",
    description: "Outlook, Gmail, Exchange configuration and troubleshooting",
  },
  {
    emoji: "🌐",
    title: "Network Connectivity",
    description: "VPN, Wi-Fi, ethernet, proxy, and firewall basic diagnostics",
  },
  {
    emoji: "📱",
    title: "Mobile Device Support",
    description: "iOS, Android, MDM solutions, app deployment",
  },
  {
    emoji: "🖨️",
    title: "Printer & Peripherals",
    description: "Driver installation, network printer setup, scanning issues",
  },
  {
    emoji: "☁️",
    title: "Cloud Services",
    description: "Microsoft 365, Google Workspace, AWS basic support",
  },
  {
    emoji: "🎫",
    title: "Ticketing Management",
    description: "ServiceNow, Zendesk, Freshdesk integration and tracking",
  },
  {
    emoji: "📊",
    title: "Reporting & Analytics",
    description: "SLA compliance, performance metrics, trend analysis",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{service.emoji}</div>
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
