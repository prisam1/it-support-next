"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  gradient: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What is the difference between Tier-1 and Tier-2 IT support?',
      answer: 'Tier-1 support handles first-line issues like password resets, basic troubleshooting, software installations, and user account management. Tier-2 support deals with complex technical problems requiring advanced expertise, including server administration, network diagnostics, infrastructure optimization, and escalated issues that Tier-1 cannot resolve.',
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      id: 2,
      question: 'Do you provide 24/7 support coverage?',
      answer: 'Yes, we offer round-the-clock support with multiple coverage tiers. Our Tier-1 help desk operates 24/7/365 with average response times under 15 minutes. Tier-2 technical support is available 24/7 for critical escalations, with scheduled coverage options for non-urgent issues during business hours.',
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 3,
      question: 'What Microsoft 365 services do you support?',
      answer: 'We provide comprehensive Microsoft 365 administration including Exchange Online, SharePoint, Teams, OneDrive, Azure Active Directory, Intune, Power Platform, and security compliance tools. Services include migration, configuration, user training, optimization, and ongoing technical support.',
      gradient: 'from-green-50 to-teal-50'
    },
    {
      id: 4,
      question: 'How quickly can you respond to support tickets?',
      answer: 'Our response times vary by priority level: Critical issues receive immediate response (within 5 minutes), High priority tickets are answered within 15 minutes, Medium priority within 2 hours, and Low priority within 8 business hours. We maintain a 98% SLA compliance rate across all priority levels.',
      gradient: 'from-yellow-50 to-orange-50'
    },
];
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our IT support services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full text-left p-6 bg-gradient-to-r ${faq.gradient} font-semibold text-lg flex justify-between items-center hover:opacity-90 transition-opacity`}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Our Team
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;