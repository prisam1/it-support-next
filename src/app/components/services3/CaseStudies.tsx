

type CaseStudy = {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  footer: string;
};

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 1,
    title: "Healthcare Provider - 2,500 Users",
    challenge:
      "HIPAA-compliant email migration from legacy Exchange to Microsoft 365 with zero downtime requirement.",
    solution:
      "Phased migration strategy with data encryption, MFA implementation, and comprehensive staff training over 6 weeks.",
    results:
      "100% data integrity, zero patient data exposure, 40% reduction in IT costs, and improved collaboration across 12 facilities.",
    footer: "✓ Completed in 42 days | Cost savings: $180K annually",
  },
  {
    id: 2,
    title: "Financial Services Firm - 850 Users",
    challenge:
      "Implement SOC 2 compliance and advanced threat protection across distributed workforce.",
    solution:
      "Deployed Microsoft Defender, conditional access policies, DLP rules, and security awareness training program.",
    results:
      "Achieved SOC 2 Type II certification, reduced security incidents by 87%, passed regulatory audit with zero findings.",
    footer: "✓ Compliance achieved in 90 days | Incident reduction: 87%",
  },
  {
    id: 3,
    title: "Manufacturing Company - 1,200 Users",
    challenge:
      "Consolidate 8 regional offices onto unified Microsoft 365 platform with SharePoint document management.",
    solution:
      "Custom SharePoint architecture, Teams deployment, automated workflows, and site migration across all locations.",
    results:
      "Unified collaboration platform, 60% faster document retrieval, eliminated email storage costs, improved cross-team communication.",
    footer: "✓ ROI achieved in 8 months | Productivity gain: 35%",
  },
  {
    id: 4,
    title: "Legal Firm - 320 Users",
    challenge:
      "Implement eDiscovery and litigation hold capabilities with attorney-client privilege protection.",
    solution:
      "Microsoft Purview deployment, retention policies, sensitivity labels, and legal team training on compliance features.",
    results:
      "Reduced eDiscovery costs by 70%, streamlined case management, ensured regulatory compliance across 50+ active cases.",
    footer: "✓ Cost reduction: $250K annually | Compliance: 100%",
  },
  {
    id: 5,
    title: "Education Institution - 4,500 Users",
    challenge:
      "Enable remote learning infrastructure during pandemic with secure student data management.",
    solution:
      "Rapid Teams for Education deployment, OneDrive provisioning, student email accounts, and faculty training program.",
    results:
      "Full remote learning capability in 3 weeks, 98% student engagement, FERPA compliance maintained throughout transition.",
    footer: "✓ Deployment: 3 weeks | Student satisfaction: 94%",
  },
  {
    id: 6,
    title: "Retail Chain - 3,800 Users",
    challenge:
      "Modernize point-of-sale systems integration with cloud-based inventory management and Azure backend.",
    solution:
      "Azure SQL migration, Power BI dashboards, real-time inventory sync, and hybrid cloud architecture across 85 locations.",
    results:
      "Real-time inventory visibility, 45% reduction in stockouts, improved supply chain efficiency, data-driven decision making.",
    footer: "✓ Revenue increase: 22% | Inventory accuracy: 99.2%",
  },
  {
    id: 7,
    title: "Construction Firm - 680 Users",
    challenge:
      "Enable mobile workforce collaboration with offline access to project files and blueprints.",
    solution:
      "OneDrive offline sync, SharePoint project sites, Teams mobile app deployment, and field worker training program.",
    results:
      "70% improvement in project communication, reduced rework by 40%, real-time blueprint access for field teams.",
    footer: "✓ Project delays reduced: 55% | Mobile adoption: 92%",
  },
  {
    id: 8,
    title: "Technology Startup - 150 Users",
    challenge:
      "Rapid scaling from 50 to 150 employees while maintaining security and cost control.",
    solution:
      "Automated user provisioning, license optimization strategy, security baseline implementation, and scalable architecture design.",
    results:
      "Seamless 200% growth accommodation, 30% license cost savings through optimization, zero security incidents during scaling.",
    footer: "✓ Cost per user reduced: 30% | Onboarding time: 2 hours",
  },
  {
    id: 9,
    title: "Non-Profit Organization - 280 Users",
    challenge:
      "Leverage Microsoft non-profit grants while implementing donor management and fundraising tools.",
    solution:
      "Non-profit licensing optimization, Power Platform custom apps for donor tracking, automated email campaigns via Dynamics 365.",
    results:
      "85% software cost reduction through grants, 50% increase in donor engagement, streamlined volunteer coordination.",
    footer: "✓ Cost savings: $120K annually | Donor retention: +45%",
  },
  {
    id: 10,
    title: "Professional Services - 520 Users",
    challenge:
      "Implement client portal with secure file sharing and project collaboration while maintaining confidentiality.",
    solution:
      "SharePoint external sharing with conditional access, Azure B2B integration, sensitivity labels, and client training materials.",
    results:
      "80% reduction in email attachments, improved client satisfaction scores by 35%, enhanced security posture with audit trails.",
    footer: "✓ Client satisfaction: +35% | Security incidents: Zero",
  },
] as const;

function CaseCard({ id, title, challenge, solution, results, footer }: CaseStudy) {
  return (
    <article className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
      <div className="mb-4 flex items-center">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          Case Study #{id}
        </span>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>

      <p className="mb-4 text-gray-700">
        <strong>Challenge:</strong> {challenge}
      </p>

      <p className="mb-4 text-gray-700">
        <strong>Solution:</strong> {solution}
      </p>

      <p className="mb-4 text-gray-700">
        <strong>Results:</strong> {results}
      </p>

      <div className="font-semibold text-green-600">
        <span>{footer}</span>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Success Stories: Case Studies
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((item) => (
            <CaseCard
              key={item.id}
              id={item.id}
              title={item.title}
              challenge={item.challenge}
              solution={item.solution}
              results={item.results}
              footer={item.footer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
