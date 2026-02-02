"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 text-gray-900">

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-[54px] font-bold text-slate-900 mb-6 leading">
              Advanced <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">Tier-2 Help Desk</span> Services
            </h1>
            <p className="text-[17px] text-slate-700 font-light mb-8 leading-8">
              Expert second-line technical support for US businesses. Our certified Tier-2 specialists handle complex escalations, advanced troubleshooting, and system optimization. We resolve critical infrastructure issues and provide specialized support for enterprise systems with 24/7 availability and rapid resolution times.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer hover:scale-105 transition-all">Schedule Demo</button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-50 transition-all">Learn More</button>
            </div>
          </div>

          <div className="relative animate-float mt-2">
            <div className="bg-white rounded-2xl p-8 glow-border border-none shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Resolution SLA", val: "99.8%" },
                  { label: "Avg Response", val: "<2hrs" },
                  { label: "Support Hours", val: "24/7" },
                  { label: "Clients Served", val: "400+" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-blue-50 p-8 rounded-xl">
                    <div className="text-4xl font-bold text-blue-500">{stat.val}</div>
                    <p className="text-xs text-slate-600 mt-4 tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
