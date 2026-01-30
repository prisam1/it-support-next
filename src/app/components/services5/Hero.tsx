"use client";
import React from "react";
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Microsoft 365 Support Services for <span className="gradient-text">US Businesses</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive enterprise Microsoft 365 support designed for American businesses. From cloud migration and security to 24/7 managed services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-blue transition transform hover:scale-105">Get Started</button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">Learn More</button>
            </div>
          </div>
          <div className="relative animate-slide-in-left">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-4">
                {['99.9% Uptime SLA', '24/7 Support Available', '1500+ Happy Clients', 'Industry Leading Support'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/20 p-4 rounded-lg backdrop-blur hover:bg-white/30 transition cursor-default">
                    <i className={`fas ${['fa-shield-alt', 'fa-clock', 'fa-users', 'fa-award'][i]} text-2xl`}></i>
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meta Stats Bar */}
        <div className="mt-20 pt-8 border-t border-blue-200 grid grid-cols-2 md:grid-cols-3 gap-24 text-center">
          <div>
            <p className="text-xs text-gray-500 tracking-widest">Published</p>
            <p className="font-medium text-gray-700">Jan 24, 2026</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-widest">Expert Review Rating</p>
            <div className="flex justify-center mb-1"> 
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </div>
            <p className="font-medium text-gray-700">4.8/5(1,2050 reviews)</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-widest">Expertise</p>
            <p className="font-medium text-blue-600">Enterprise Level</p>
          </div> 
        </div>
      </div>
    </section>
  );
}
