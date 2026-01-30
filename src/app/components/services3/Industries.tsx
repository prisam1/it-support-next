import React from "react"

type Industry = {
  icon: string;
  name: string;
};

const INDUSTRIES: readonly Industry[] = [
  { icon: "🏥", name: "Healthcare" },
  { icon: "🏦", name: "Finance" },
  { icon: "🎓", name: "Education" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🛒", name: "Retail" },
  { icon: "⚖️", name: "Legal" },
  { icon: "🏗️", name: "Construction" },
  { icon: "💼", name: "Professional Services" },
] as const;

export default function IndustriesGridSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Industries We Serve
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((item) => (
            <div
              key={item.name}
              className="rounded-lg bg-white p-6 text-center shadow-md transition hover:shadow-xl"
            >
              <div className="mb-2 text-3xl" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
