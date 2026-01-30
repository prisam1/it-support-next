// app/components/MsServicesSection.tsx

type Service = {
  icon: string;
  title: string;
  items: readonly string[];
};

const SERVICES: readonly Service[] = [
  {
    icon: "☁️",
    title: "Microsoft 365 Administration",
    items: [
      "User management & provisioning",
      "License optimization",
      "Exchange Online configuration",
      "SharePoint & Teams deployment",
    ],
  },
  {
    icon: "🔒",
    title: "Cloud Security & Compliance",
    items: [
      "Multi-factor authentication (MFA)",
      "Data loss prevention (DLP)",
      "Compliance management (HIPAA, SOC 2)",
      "Threat protection & monitoring",
    ],
  },
  {
    icon: "🚀",
    title: "Cloud Migration Services",
    items: [
      "On-premise to cloud migration",
      "Email migration (Exchange, Gmail)",
      "Data migration & validation",
      "Zero-downtime transitions",
    ],
  },
  {
    icon: "💻",
    title: "Azure Cloud Solutions",
    items: [
      "Virtual machine deployment",
      "Azure Active Directory",
      "Backup & disaster recovery",
      "Cost optimization strategies",
    ],
  },
  {
    icon: "🛠️",
    title: "24/7 Technical Support",
    items: [
      "Round-the-clock helpdesk",
      "Incident management",
      "Performance monitoring",
      "Proactive maintenance",
    ],
  },
  {
    icon: "📊",
    title: "Training & Consultation",
    items: [
      "End-user training programs",
      "Best practice workshops",
      "Cloud strategy consulting",
      "IT roadmap planning",
    ],
  },
] as const;

function ServiceCard({ icon, title, items }: Service) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
      <div className="mb-4 text-4xl text-blue-600" aria-hidden="true">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>

      <ul className="space-y-2 text-gray-700">
        {items.map((text) => (
          <li key={text} className="flex gap-2">
            <span className="mt-[2px] text-blue-600" aria-hidden="true">
              •
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function MsServices() {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-blue-50 to-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Services We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
