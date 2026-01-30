"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, Shield, Clock, Award } from "lucide-react";

export default function VpnContactCtaSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to Secure Your Remote Team?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Get started with a free consultation and see how our VPN solutions can
          transform your remote work infrastructure.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {/* Use <a> for external protocols like mailto/tel */}
          <a
            href="mailto:info@securenetpro.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-purple-600 transition hover:bg-gray-100 hover:scale-105"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Request Free Consultation
          </a>

          <a
            href="tel:+1-800-VPN-HELP"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-purple-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Us Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex flex-col items-center">
            <Shield className="mb-2 h-8 w-8" aria-hidden="true" />
            <p>No Credit Card Required</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="mb-2 h-8 w-8" aria-hidden="true" />
            <p>Setup in 48 Hours</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="mb-2 h-8 w-8" aria-hidden="true" />
            <p>30-Day Money Back</p>
          </div>
        </div>
      </div>
    </section>
  );
}
