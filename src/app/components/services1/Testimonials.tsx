import React from "react";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  cardBgClass: string;
  avatarBgClass: string;
};

const testimonials: Testimonial[] = [
  {
    initials: "MC",
    name: "Michael Chen",
    role: "CTO, TechCorp Solutions",
    quote:
      '"Outstanding service quality and response times. Our team productivity has never been higher!"',
    cardBgClass: "bg-gradient-to-br from-blue-50 to-purple-50",
    avatarBgClass: "bg-blue-500",
  },
  {
    initials: "SW",
    name: "Dr. Sarah Williams",
    role: "CMIO, MediHealth Network",
    quote: '"HIPAA-compliant and reliable. They understand healthcare IT like no other provider."',
    cardBgClass: "bg-gradient-to-br from-green-50 to-teal-50",
    avatarBgClass: "bg-green-500",
  },
  {
    initials: "JR",
    name: "James Rodriguez",
    role: "VP Operations, RetailMax Corp",
    quote: '"Zero downtime during our busiest season. Absolute game-changer for our retail operations."',
    cardBgClass: "bg-gradient-to-br from-orange-50 to-red-50",
    avatarBgClass: "bg-orange-500",
  },
  {
    initials: "PJ",
    name: "Patricia Johnson",
    role: "CISO, FinanceFirst Bank",
    quote:
      '"Security-first approach that aligns perfectly with our compliance requirements. Exceptional!"',
    cardBgClass: "bg-gradient-to-br from-indigo-50 to-blue-50",
    avatarBgClass: "bg-indigo-500",
  },
  {
    initials: "RM",
    name: "Dr. Robert Martinez",
    role: "Dean of Technology, EduTech University",
    quote:
      '"Multilingual support that serves our diverse student body perfectly. Truly impressive."',
    cardBgClass: "bg-gradient-to-br from-pink-50 to-rose-50",
    avatarBgClass: "bg-pink-500",
  },
];

export default function TestimonialsMarqueeSection() {
  // Duplicate list for seamless loop
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-white">4.9/5</span>
            <span className="text-yellow-900">★★★★★</span>
            <span className="text-white">|</span>
            <span className="text-white font-semibold">2,847 Reviews</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex">
          <div className="flex gap-6 px-3 animate-marquee">
            {loopItems.map((t, idx) => (
              <div
                key={`${t.initials}-${idx}`}
                className={`min-w-[24rem] ${t.cardBgClass} p-6 rounded-xl shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-14 h-14 ${t.avatarBgClass} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>

                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-700">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
