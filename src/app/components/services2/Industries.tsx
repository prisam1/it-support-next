import React from 'react';

const Industries = () => {
  const industries = [
    { emoji: "🏥", name: "Healthcare" },
    { emoji: "💰", name: "Financial Services" },
    { emoji: "🏦", name: "Banking" },
    { emoji: "🎓", name: "Higher Education" },
    { emoji: "🏢", name: "Enterprise Corp" },
    { emoji: "☁️", name: "Cloud Services" },
    { emoji: "🏭", name: "Manufacturing" },
    { emoji: "⚖️", name: "Government" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-0 px-4 mb-22">
      <div className="rounded-xl p-12 border border-blue-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center md:text-left">
          Industries We Serve
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((item) => (
            <div 
              key={item.name} 
              className="text-center group"
            >
              <span className="text-4xl mb-3 block filter drop-shadow-sm group-hover:drop-shadow-md">
                {item.emoji}
              </span>
              <p className="font-semibold text-slate-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;