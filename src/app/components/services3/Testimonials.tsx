"use client";
import React from "react";
type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "CTO, HealthTech Solutions",
    quote:
      '"Outstanding migration service! Our healthcare data was handled with utmost security and professionalism. The team\'s expertise in HIPAA compliance gave us complete confidence."',
  },
  {
    initials: "MR",
    name: "Michael Rodriguez",
    role: "IT Director, Pacific Bank",
    quote:
      '"The 24/7 support has been a game-changer for our financial operations. Response times are impressive and solutions are always effective. Highly recommend!"',
  },
  {
    initials: "EP",
    name: "Emily Patterson",
    role: "CEO, GreenBuild Construction",
    quote:
      '"Mobile collaboration transformed how our field teams work. Real-time access to blueprints and project updates has increased efficiency dramatically."',
  },
  {
    initials: "DK",
    name: "David Kim",
    role: "Managing Partner, Summit Legal Group",
    quote:
      '"eDiscovery implementation was flawless. We\'ve cut costs by 70% and compliance is never a concern. The team understands legal requirements perfectly."',
  },
  {
    initials: "LT",
    name: "Lisa Thompson",
    role: "Principal, Riverside Academy",
    quote:
      '"Remote learning deployment was completed in just 3 weeks. Student engagement remained high and teachers adapted quickly thanks to excellent training."',
  },
] as const;

function TestimonialCard({ initials, name, role, quote }: Testimonial) {
  return (
    <article className="w-96 flex-shrink-0 rounded-xl bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center">
        <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 text-2xl font-bold text-blue-600">
          {initials}
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <div className="text-lg text-yellow-500" aria-label="5 star rating">
            {"★★★★★"}
          </div>
        </div>
      </div>
      <p className="text-gray-700">{quote}</p>
    </article>
  );
}

export default function TestimonialsMarqueeSection() {
  // duplicate list for seamless loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          What Our Clients Say
        </h2>

        {/* Marquee */}
        <div className="relative">
          {/* soft edge fade (nice on wide screens) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-blue-700/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-blue-800/80 to-transparent" />

          <div className="overflow-hidden">
            <div className="flex gap-8 will-change-transform animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
              {marqueeItems.map((t, idx) => (
                <TestimonialCard
                  key={`${t.initials}-${idx}`}
                  initials={t.initials}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white">
          <p className="mb-2 text-2xl font-bold">★★★★★ 4.9 out of 5.0</p>
          <p className="text-lg">Based on 1,247 verified reviews</p>
        </div>
      </div>

      {/* Keyframes for marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
