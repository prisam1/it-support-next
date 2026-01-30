"use client";
import React from "react";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  rating: 5 | 4.5;
  quote: string;
  avatarBg: string;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    initials: "JD",
    name: "John Davis",
    role: "CTO, TechCorp Inc.",
    rating: 5,
    quote:
      '"Outstanding VPN service! Our remote team of 200+ works seamlessly across 15 countries. Best decision we made."',
    avatarBg: "bg-indigo-500",
  },
  {
    initials: "SM",
    name: "Sarah Martinez",
    role: "IT Director, HealthPlus",
    rating: 5,
    quote:
      '"HIPAA compliance made easy. Their team handled everything professionally. Zero downtime in 18 months!"',
    avatarBg: "bg-purple-600",
  },
  {
    initials: "RP",
    name: "Rajesh Patel",
    role: "CEO, Global Solutions Ltd.",
    rating: 4.5,
    quote:
      '"Scaled from 50 to 500 users without a hitch. Their support team is incredibly responsive. Highly recommended!"',
    avatarBg: "bg-sky-500",
  },
  {
    initials: "EJ",
    name: "Emily Johnson",
    role: "VP Operations, RetailHub",
    rating: 5,
    quote:
      '"Our warehouse network runs flawlessly. Cost savings were immediate and substantial. Great value for money!"',
    avatarBg: "bg-pink-500",
  },
  {
    initials: "MC",
    name: "Michael Chen",
    role: "CIO, FinanceFirst Bank",
    rating: 5,
    quote:
      '"Security is paramount in banking. This VPN solution exceeded all our compliance requirements. Excellent service!"',
    avatarBg: "bg-emerald-500",
  },
] as const;

function Stars({ rating }: { rating: 5 | 4.5 }) {
  const stars = rating === 5 ? "★★★★★" : "★★★★½";
  return (
    <div className="mb-2 text-yellow-500" aria-label={`${rating} star rating`}>
      {stars}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="mx-4 w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center">
        <div
          className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${t.avatarBg}`}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{t.name}</h4>
          <p className="text-sm text-gray-600">{t.role}</p>
        </div>
      </div>

      <Stars rating={t.rating} />
      <p className="text-gray-700 italic">{t.quote}</p>
    </article>
  );
}

export default function Testimonials() {
  // duplicate for seamless loop
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Client Testimonials
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="flex gap-0 will-change-transform animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
            {items.map((t, idx) => (
              <Card key={`${t.initials}-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </div>

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
