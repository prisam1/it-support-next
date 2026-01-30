import React from 'react';
import { CircleQuestionMark } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    { q: "What is Microsoft 365?", a: "Microsoft 365 is a comprehensive cloud-based subscription service combining productivity applications (Word, Excel, PowerPoint), communication tools (Teams, Exchange), and collaboration platforms (SharePoint, OneDrive) with advanced security and compliance features designed for modern businesses." },
    { q: "What support options are available 24/7?", a: "We offer comprehensive 24/7 support including emergency IT help desk assistance, critical system monitoring, incident response, and escalation management. Our dedicated support team responds within 15 minutes to critical issues and provides continuous monitoring throughout the year." },
    { q: "How long does Microsoft 365 migration typically take?", a: "Migration timelines vary based on organizational size and complexity. Small organizations typically migrate in 30-60 days, mid-sized companies in 60-120 days, and large enterprises in 120-180 days. We perform zero-downtime migrations with comprehensive data validation and user training included." },
    { q: "Is Microsoft 365 compliant with industry regulations?", a: "Yes, Microsoft 365 meets compliance requirements for HIPAA, SOC 2, GDPR, FedRAMP, FERPA, and many other regulations. We implement additional security controls and governance policies specific to your industry to ensure full compliance and audit readiness." },
    { q: "What is the cost of Microsoft 365 support services?", a: "Pricing depends on your organization's size, service level, and specific requirements. We offer tiered support packages from basic help desk support ($8-12 per user/month) to comprehensive managed services. We can often reduce overall IT costs by 30-40% through consolidation and efficiency improvements." },
    { q: "How do you handle data security and backup?", a: "We implement multi-layered security including MFA, DLP, Advanced Threat Protection, encryption at-rest and in-transit, advanced auditing, and redundant backup systems. We maintain automated daily backups with 99.99% recovery capability and perform regular security assessments." },
    { q: "Can we train our staff on Microsoft 365?", a: "Absolutely. We provide comprehensive user training through live sessions, recorded videos, documentation, and ongoing support. Our training programs are customized by role and department, ensuring users quickly achieve productivity. Post-migration support includes change management and adoption programs." },
    { q: "What happens if we have an outage or emergency?", a: "We have dedicated incident response protocols with priority escalation paths. Our SLA guarantees 99.9% uptime with rapid incident response. In case of emergencies, our team provides immediate assistance, real-time updates, and post-incident analysis to prevent recurrence." },
    { q: "Do you offer Microsoft Teams calling and meeting solutions?", a: "Yes, we provide complete Teams implementation including direct calling, conference bridges, call recording, video meetings, and meeting room optimization. We handle deployment, configuration, quality assurance, user training, and ongoing support for enterprise Teams environments." },
    { q: "How do you measure Microsoft 365 ROI?", a: "We track metrics including user productivity gains (typically 20-40%), IT cost savings (usually 25-50% reduction), incident resolution time improvement, user adoption rates, and security incident prevention. We provide quarterly reporting and optimization recommendations to maximize your investment returns." }
  ];

  return (
    <section id="faqs" className="py-20 bg-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Quick answers to common questions about our Microsoft 365 support services.</p>
        </div>
        
        {/* The grid items will automatically stretch to the tallest height in their row */}
        <div className="grid md:grid-cols-2 gap-7 items-stretch">
          {faqs.map((faq, i) => (
            <div key={i} className="flex">
              <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <CircleQuestionMark className="w-6 h-6 fill-white text-blue-500 bg-blue-600 rounded-3xl shrink-0 mt-1" />
              
                  <h4 className="text-xl font-bold text-gray-900   transition-colors">{faq.q}</h4>
                    </div>
                <p className="text-gray-600 text-[16px] font-light flex-grow">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;