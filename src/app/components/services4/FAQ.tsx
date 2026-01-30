import React from "react";
import { HelpCircle } from "lucide-react";

type Faq = {
  q: string;
  a: string;
};

const FAQS: readonly Faq[] = [
  {
    q: "What is a VPN and why do remote teams need it?",
    a: "A VPN (Virtual Private Network) creates an encrypted tunnel between your remote employees and your company network, ensuring secure data transmission. Remote teams need VPNs to protect sensitive information, access internal resources safely, comply with security regulations, and maintain productivity from any location worldwide.",
  },
  {
    q: "How quickly can you deploy VPN services for my organization?",
    a: "Deployment timelines vary based on organization size and complexity. Small businesses (up to 50 users) can be operational within 48-72 hours. Mid-sized companies typically require 5-7 business days. Enterprise deployments (500+ users) generally take 2-4 weeks including testing and training. We offer expedited deployment options for urgent requirements.",
  },
  {
    q: "What security certifications and compliance standards do you support?",
    a: "We support comprehensive compliance frameworks including SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS, GDPR, CCPA, and FDA 21 CFR Part 11. Our solutions include built-in audit logging, encryption standards (AES-256), multi-factor authentication, and automated compliance reporting to meet your industry-specific requirements.",
  },
  {
    q: "Do you provide 24/7 technical support?",
    a: "Yes, we offer round-the-clock support 365 days a year. Our Level 1 support responds within 15 minutes for critical issues. Enterprise clients receive dedicated account managers and priority escalation channels. Support is available via phone, email, chat, and our customer portal with real-time incident tracking.",
  },
  {
    q: "Can your VPN solution integrate with our existing cloud infrastructure?",
    a: "Absolutely. We seamlessly integrate with AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and hybrid environments. Our solutions support SSO (Single Sign-On) integration with Active Directory, Okta, Azure AD, and other identity providers. We also offer API access for custom integrations.",
  },
  {
    q: "What happens if the VPN connection fails?",
    a: "Our architecture includes automatic failover mechanisms and redundant servers across multiple geographic locations. If a primary connection fails, users are automatically rerouted to backup servers within seconds. We maintain 99.9% uptime SLA with real-time monitoring and instant alerts to our support team.",
  },
  {
    q: "How do you handle bandwidth and performance optimization?",
    a: "We implement intelligent traffic routing, load balancing across multiple servers, and QoS (Quality of Service) policies to prioritize critical applications. Our infrastructure supports adaptive bandwidth allocation, compression algorithms, and split-tunneling options. Performance metrics are monitored 24/7 with proactive optimization.",
  },
  {
    q: "What are your pricing models and contract terms?",
    a: "We offer flexible pricing: per-user monthly subscriptions, annual contracts with discounts (up to 25% savings), and enterprise volume pricing. No setup fees for annual plans. Contracts are available monthly, annually, or multi-year with no penalties for scaling up. Custom packages available for 100+ users.",
  },
  {
    q: "Can users access the VPN from mobile devices?",
    a: "Yes, we provide native applications for iOS, Android, Windows, macOS, and Linux. Mobile apps include the same security features as desktop clients: AES-256 encryption, kill switch functionality, and auto-connect options. MDM (Mobile Device Management) integration available for enterprise deployments.",
  },
  {
    q: "How do you ensure data privacy and prevent logging?",
    a: "We maintain a strict no-logging policy for user traffic and browsing activity. Only essential connection metadata (timestamps, bandwidth usage) is retained for 30 days for troubleshooting purposes. All data is encrypted end-to-end and we never sell or share user information. Regular third-party security audits verify our privacy practices.",
  },
] as const;

function FaqItem({ q, a }: Faq) {
  return (
    <div className="rounded-xl bg-gray-50 p-6 transition hover:shadow-lg">
      <h3 className="mb-3 flex items-start text-xl font-bold text-gray-800">
        <HelpCircle className="mr-3 mt-1 h-5 w-5 text-purple-600" aria-hidden="true" />
        {q}
      </h3>
      <p className="ml-8 text-gray-700">{a}</p>
    </div>
  );
}

export default function VpnFaqSection() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
