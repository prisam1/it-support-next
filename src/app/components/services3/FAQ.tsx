import React from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: readonly FaqItem[] = [
  {
    q: "1. What is included in your Microsoft 365 support services?",
    a: "Our comprehensive support includes user account management, license optimization, email configuration, security implementation, compliance management, 24/7 technical assistance, proactive monitoring, backup solutions, and ongoing training for your team members.",
  },
  {
    q: "2. How long does cloud migration typically take?",
    a: "Migration timelines vary based on data volume and complexity. Small businesses with 50-100 users typically complete migration in two to three weeks, while enterprise migrations with 1,000+ users may take six to eight weeks. We provide detailed project timelines during initial consultation.",
  },
  {
    q: "3. Do you offer 24/7 support?",
    a: "Yes, we provide round-the-clock support 365 days per year. Our team is available via phone, email, and chat with guaranteed response times of under 15 minutes for critical issues and under one hour for standard requests.",
  },
  {
    q: "4. What industries do you specialize in?",
    a: "We serve healthcare, finance, education, manufacturing, retail, legal, construction, and professional services industries. Our team has specific expertise in industry compliance requirements including HIPAA, SOC 2, FERPA, and financial regulations.",
  },
  {
    q: "5. How do you ensure data security during migration?",
    a: "We employ end-to-end encryption, secure transfer protocols, multi-factor authentication, validation checksums, and comprehensive backup procedures. All migrations follow industry best practices with zero data loss guarantees and complete audit trails.",
  },
  {
    q: "6. What is your pricing structure?",
    a: "We offer flexible pricing models including monthly subscriptions, per-user licensing, and project-based fees. Pricing depends on organization size, service level requirements, and complexity. Contact us for a customized quote tailored to your specific needs.",
  },
  {
    q: "7. Can you help with Microsoft 365 compliance requirements?",
    a: "Absolutely. We specialize in implementing compliance solutions including data retention policies, eDiscovery capabilities, sensitivity labels, DLP policies, and audit logging. We help organizations meet HIPAA, SOC 2, GDPR, and other regulatory requirements.",
  },
  {
    q: "8. Do you provide training for our staff?",
    a: "Yes, comprehensive training is included with all service packages. We offer live training sessions, recorded tutorials, documentation, and ongoing support to ensure your team maximizes Microsoft 365 capabilities and adopts best practices.",
  },
  {
    q: "9. What is your average response time for support tickets?",
    a: "Critical issues receive response within 15 minutes with immediate technician assignment. High-priority tickets are addressed within one hour, and standard requests within four business hours. Our average resolution time is under two hours for most issues.",
  },
  {
    q: "10. How do you handle disaster recovery and business continuity?",
    a: "We implement comprehensive backup solutions using Azure Backup, OneDrive retention policies, and Exchange Online archive mailboxes. Our disaster recovery plans include documented procedures, regular testing, and guaranteed recovery time objectives to ensure business continuity.",
  },
] as const;

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-4xl space-y-6">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="rounded-r-lg border-l-4 border-blue-600 bg-blue-50 p-6"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
