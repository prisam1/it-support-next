"use client";
import React from "react";
import Link from "next/link";

const META = {
  published: "January 10, 2025",
  updated: "January 14, 2025",
  rating: "4.8/5.0",
  reviews: "2,847 reviews",
} as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-purple-600 bg-white py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center opacity-0 animate-[fadeUp_700ms_ease-out_forwards]">
          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">📅</span>
              Published: {META.published}
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🔄</span>
              Last Updated: {META.updated}
            </span>
          </div>

          {/* Rating */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-lg text-yellow-500" aria-label="4 and a half star rating">
              {"★★★★☆"}
            </span>
            <span className="font-semibold text-yellow-600">{META.rating}</span>
            <span className="text-gray-600">({META.reviews})</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            VPN &amp; Network Support Services for Remote Teams
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-700 sm:text-xl">
            Empower your distributed workforce with enterprise-grade VPN
            solutions and comprehensive network support. We deliver secure,
            reliable connectivity that scales with your business, ensuring
            seamless collaboration across global teams with 24/7 expert
            assistance and 99.9% uptime guarantee.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-purple-700"
            >
              Start Free Consultation
            </Link>

            <Link
              href="/#services"
              className="rounded-full border-2 border-purple-600 px-8 py-4 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Floating icon (no external icons) */}
      <div
        className="pointer-events-none absolute right-6 top-16 opacity-10 motion-safe:animate-[float_6s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <span className="text-7xl text-purple-600 sm:text-8xl md:text-9xl">🌐</span>
      </div>

      {/* Lightweight keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
