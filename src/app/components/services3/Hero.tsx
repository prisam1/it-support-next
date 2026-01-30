"use client";
import Link from "next/link";

type Stat = { label: string };

const STATS: readonly Stat[] = [
  { label: "1,247 Reviews" },
  { label: "500+ Clients Served" },
] as const;

type MetaItem = {
  label: string;
  value: string;
};

const meta: readonly MetaItem[] = [
  { label: "Published", value: "January 10, 2025" },
  { label: "Last Updated", value: "January 14, 2025" },
] as const;


export default function MsHeroSection() {
  return (
    <>
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="opacity-0 animate-[fadeUp_700ms_ease-out_forwards]">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            Microsoft 365 &amp; Cloud Support Services USA
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Professional IT support and cloud solutions designed to transform
            your business operations with enterprise-grade Microsoft 365
            services, seamless cloud migration, and 24/7 expert assistance across
            all 50 states.
          </p>

          {/* Rating + Stats */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-300" aria-label="5 star rating">
                {"★★★★★"}
              </span>
              <span className="text-lg font-semibold">4.9/5.0</span>
            </div>

            <span className="hidden text-lg text-white/70 md:inline">|</span>

            <div className="flex flex-col items-center gap-2 text-lg md:flex-row md:gap-4">
              {STATS.map((s, idx) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="text-white/90">{s.label}</span>
                  {idx !== STATS.length - 1 && (
                    <span className="hidden text-white/70 md:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Request Free Consultation
          </Link>
        </div>
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
      `}</style>
    </section>

     <div className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
          {meta.map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <strong className="text-gray-700">{item.label}:</strong>
              <span>{item.value}</span>
            </div>
          ))}

          {/* Separator only on larger screens */}
          <span className="hidden h-4 w-px bg-gray-300 sm:inline-block" />

          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Rating:</strong>
            <span className="text-yellow-500" aria-label="5 star rating">
              {"★★★★★"}
            </span>
            <span>4.9 (1,247 reviews)</span>
          </div>
        </div>
      </div>
    </div>

    </>

    
  );
}
