"use client";
import React, { useState } from 'react';

const FAQ = () => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleIndex = (index: number) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter((i) => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    const faqs = [
        { q: "How quickly do you respond to Tier-2 escalations?", a: "We maintain a critical incident response time of under 2 hours with 99.8% SLA compliance. Our escalation process is automated, and critical infrastructure issues are prioritized immediately. We offer tiered SLAs from 1-hour response for critical infrastructure to 8-hour response for standard technical escalations." },
        { q: "What certifications do your Tier-2 technicians hold?", a: "Our team members hold advanced certifications including CCNA, CCNP, MCSE, Linux+, Azure Administrator, AWS Solutions Architect, and industry-specific credentials. All technicians have minimum 5+ years enterprise support experience and complete continuous training to maintain current technology expertise." },
        { q: "Do you support on-premises and cloud infrastructure?", a: "Yes, we provide comprehensive Tier-2 support for hybrid environments. We specialize in on-premises infrastructure (Windows Server, Linux, Cisco, Fortinet), cloud platforms (AWS, Azure, Google Cloud), containerized environments (Kubernetes, Docker), and hybrid cloud deployments. Our team has expertise in complex multi-cloud architectures." },
        { q: "What is your experience with compliance frameworks like HIPAA, SOC 2, and FedRAMP?", a: "We have extensive experience supporting compliant environments. Our team is trained in HIPAA, HITRUST, SOC 2 Type II, PCI-DSS, FedRAMP, and NIST compliance requirements. We maintain detailed audit trails, implement security controls, and provide compliance-aligned documentation for regulated industries including healthcare, finance, and government." },
        { q: "Do you offer proactive monitoring and preventive support?", a: "Absolutely. Our premium Tier-2 service includes 24/7 proactive infrastructure monitoring using advanced tools like Nagios, Splunk, and Datadog. We identify and resolve issues before they impact users through predictive analytics, capacity planning, and preventive maintenance. This approach reduces unplanned downtime by up to 80%." },
        { q: "Can you handle database administration and optimization tasks?", a: "Yes, our Tier-2 team includes database specialists with expertise in SQL Server, Oracle, PostgreSQL, MongoDB, and MySQL. We provide database administration, performance tuning, backup/recovery management, replication setup, and optimization services to ensure optimal database performance and data protection." },
        { q: "What disaster recovery and business continuity support do you offer?", a: "We provide comprehensive disaster recovery planning, implementation, and testing. Services include RTO/RPO assessment, backup strategy design, failover testing, recovery runbook creation, and incident response coordination. We maintain disaster recovery readiness with regular drills and updates to ensure business continuity." },
        { q: "How do you handle security incidents and vulnerability management?", a: "Our Tier-2 team provides incident response coordination, vulnerability assessment, patch management, and security hardening. We maintain a 24/7 incident response team that coordinates with your security team, manages threat investigation, implements mitigations, and provides detailed incident reporting with remediation recommendations." },
        { q: "What SLAs and uptime guarantees do you provide?", a: "We offer tiered SLA options: Critical Infrastructure (99.95% uptime, 1-hour response), Enterprise Systems (99.8% uptime, 2-hour response), and Standard Support (99.5% uptime, 4-hour response). All SLAs include detailed performance metrics, regular reporting, and service credit guarantees for non-compliance." }
    ];

    return (
        <section id="faq" className="py-22 px-4 bg-white/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl text-center font-bold mb-18 bg-gradient-to-r from-blue-500 to-indigo-700  bg-clip-text text-transparent">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndices.includes(i);
                        return (
                            <div
                                key={i}
                                className={`
                  bg-white rounded-lg border border-blue-100 
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1 hover:shadow-blue 
                `}
                            >
                                <button
                                    onClick={() => toggleIndex(i)}
                                    className="w-full p-6 flex justify-between items-center text-left font-semibold text-slate-800 transition-color"
                                >
                                    <span className="pr-4 font-bold">{faq.q}</span>
                                    <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        ▼
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-blue-50">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;