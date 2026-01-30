import React from 'react';

const Testimonials = () => {
    const reviews = [
        { title: "Outstanding Technical Excellence", text: "TierTwo Support transformed our infrastructure. Proactive monitoring prevented major outages and improved uptime to 99.98%.", author: "CTO, Financial Institution" },
        { title: "Critical for Our Operations", text: "The Tier-2 support team has been invaluable for our healthcare IT infrastructure. HIPAA expertise and 24/7 availability.", author: "IT Director, Healthcare Network" },
        { title: "Expert Cloud Support", text: "Managing our Kubernetes infrastructure became seamless with their expertise. Response times are incredible and cost-optimized.", author: "DevOps Lead, SaaS Company" },
        { title: "Eliminated Our Downtime", text: "Before TierTwo, we had frequent infrastructure issues. Now we achieved 99.95% uptime with their comprehensive support.", author: "VP Operations, Manufacturing" },
        { title: "Compliance Made Easy", text: "Their FedRAMP expertise was critical for our compliance requirements. Rigorous security standards and trusted partners.", author: "Security Officer, Federal Agency" },
        { title: "Fastest Response in Industry", text: "Average response time under 2 hours for critical issues is game-changing. Database optimization reduced query times significantly.", author: "Security Officer, Federal Agency" },
        { title: "Perfect for Enterprise Scaling", text: "As we scaled from 500 to 3000 employees, TierTwo scaled with us seamlessly. Prevented growing pains anticipated.", author: "CIO, Tech Startup" },
        { title: "Disaster Recovery Excellence", text: "Comprehensive DR testing and planning gave us confidence. When needed, their incident coordination was flawless.", author: "Infrastructure Manager, E-Commerce" },
        { title: "Reduced Support Costs by 40%", text: "Migrated from in-house support and cut costs significantly while improving quality. Fewer emergency calls and better planning.", author: "CFO, Retail Chain" },
        { title: "True 24/7 Support Partner", text: "Round-the-clock expert support invaluable for research operations. Provide solutions, not just Band-Aids. Exceptional team.", author: "IT Director, University Lab" },
        { title: "Outstanding Technical Excellence", text: "TierTwo Support transformed our infrastructure. Proactive monitoring prevented major outages and improved uptime to 99.98%.", author: "CTO, Financial Institution" },
    ];

    return (
        <section className="py-14 mx-4 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
            <div className="max-w-6xl mx-auto mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">Client Reviews & Testimonials</h2>
                <p className="text-slate-700 text-sm">Trusted by leading enterprises across industries</p>
            </div>

            <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {reviews.map((rev, i) => (
                    <div key={i} className="inline-block w-82 shrink-0 bg-white rounded-lg p-6 border border-blue-100 whitespace-normal">
                        <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                        <p className="text-sm font-semibold text-slate-900 mb-1">{rev.title}</p>
                        <p className="text-xs text-slate-700 mb-3 leading-relaxed">{rev.text}</p>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{rev.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;