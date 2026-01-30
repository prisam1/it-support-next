import React from "react";

type FaqItem = {
  q: string;
  a: string;
  bgClass: string;
};

const faqs: FaqItem[] = [
  {
    q: "1. What is the average response time for support tickets?",
    a: "Our average response time is under 15 minutes for standard priority tickets and under 5 minutes for critical issues. We maintain 24/7/365 coverage with technicians available across all major time zones to ensure rapid response regardless of when you need assistance.",
    bgClass: "bg-gradient-to-r from-blue-50 to-purple-50",
  },
  {
    q: "2. What types of issues does Tier-1 support handle?",
    a: "Tier-1 support handles password resets, email configuration, desktop troubleshooting, software installation, network connectivity issues, printer setup, mobile device support, VPN access, Active Directory management, and basic application support. Our first-contact resolution rate exceeds 95% for common technical issues.",
    bgClass: "bg-gradient-to-r from-purple-50 to-pink-50",
  },
  {
    q: "3. How do you ensure data security and compliance?",
    a: "We maintain SOC 2 Type II certification and comply with industry-specific regulations including HIPAA for healthcare, PCI-DSS for financial services, and FERPA for education. All technicians undergo background checks, sign NDAs, and receive ongoing security training. Data encryption, secure access protocols, and comprehensive audit trails are standard.",
    bgClass: "bg-gradient-to-r from-pink-50 to-red-50",
  },
  {
    q: "4. Can you integrate with our existing ticketing system?",
    a: "Yes, we integrate seamlessly with all major ticketing platforms including ServiceNow, Zendesk, Freshdesk, Jira Service Desk, Salesforce Service Cloud, and Microsoft Dynamics. We can also work with custom or proprietary systems through API integrations or web portals, ensuring continuity with your existing workflows.",
    bgClass: "bg-gradient-to-r from-red-50 to-orange-50",
  },
  {
    q: "5. What are your pricing models?",
    a: "We offer flexible pricing including per-user monthly subscriptions, per-ticket pricing, dedicated team models, and hybrid approaches. Most clients see 40-60% cost savings compared to in-house teams. Pricing depends on support hours, SLA requirements, ticket volume, and complexity. Contact us for a customized quote based on your specific needs.",
    bgClass: "bg-gradient-to-r from-orange-50 to-yellow-50",
  },
  {
    q: "6. How quickly can you onboard our organization?",
    a: "Standard onboarding takes 2-4 weeks and includes discovery sessions, knowledge transfer, system integration, technician training on your environment, and pilot testing. For urgent needs, we offer expedited onboarding in as little as 1 week. Our structured approach ensures smooth transition with minimal disruption to your operations.",
    bgClass: "bg-gradient-to-r from-yellow-50 to-green-50",
  },
  {
    q: "7. What languages do your support technicians speak?",
    a: "We provide support in English, Spanish, French, Mandarin Chinese, Hindi, and Portuguese. Our multilingual capabilities ensure your diverse workforce receives assistance in their preferred language, improving satisfaction and resolution rates. Additional languages can be accommodated based on specific requirements.",
    bgClass: "bg-gradient-to-r from-green-50 to-teal-50",
  },
  {
    q: "8. Do you provide reporting and analytics?",
    a: "Comprehensive reporting is included with all service tiers. You receive daily, weekly, and monthly reports covering ticket volume, resolution times, SLA compliance, common issues, technician performance, trend analysis, and user satisfaction scores. Custom dashboards and real-time analytics are available through our client portal.",
    bgClass: "bg-gradient-to-r from-teal-50 to-cyan-50",
  },
  {
    q: "9. What happens if an issue requires escalation beyond Tier-1?",
    a: "Our technicians are trained to recognize issues requiring specialized expertise and escalate appropriately to Tier-2 or Tier-3 support teams. We provide detailed documentation, troubleshooting steps already attempted, and relevant system information to ensure seamless handoffs. We can coordinate with your internal teams or our advanced support services.",
    bgClass: "bg-gradient-to-r from-cyan-50 to-blue-50",
  },
  {
    q: "10. What is your Service Level Agreement (SLA)?",
    a: "Standard SLAs include: Critical issues - 5 minute response, 2 hour resolution target; High priority - 15 minute response, 4 hour resolution; Normal priority - 30 minute response, 8 hour resolution; Low priority - 2 hour response, 24 hour resolution. Custom SLAs available. We maintain 99.5% SLA compliance rate with financial penalties for non-compliance.",
    bgClass: "bg-gradient-to-r from-blue-50 to-indigo-50",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get answers to common questions about our Tier-1 help desk services
        </p>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className={`${item.bgClass} rounded-xl p-6 shadow-md hover:shadow-lg transition`}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
