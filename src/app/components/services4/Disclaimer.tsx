"use client";
import React from "react";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerSection() {
  return (
    <section
      id="disclaimer"
      className="border-t-4 border-yellow-400 bg-yellow-50 py-12"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-3xl font-bold text-gray-800">
          <AlertTriangle className="h-7 w-7 text-yellow-600" aria-hidden="true" />
          Important Disclaimer
        </h2>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <p className="mb-4 text-gray-700">
            <strong>Third-Party Service Provider:</strong> SecureNet Pro is not
            an authorized or affiliated organization with any VPN manufacturer
            or technology provider. We are an independent third-party service
            provider offering VPN deployment, configuration, and support
            services.
          </p>

          <p className="mb-4 text-gray-700">
            <strong>Partnership Disclosure:</strong> All VPN solutions, software
            licenses, and infrastructure services are provided through
            partnerships with authorized vendors and technology providers. We
            act as implementation and support specialists.
          </p>

          <p className="mb-4 text-gray-700">
            <strong>No Warranties:</strong> While we strive for excellence, we
            do not provide warranties beyond those offered by the original
            equipment manufacturers and software vendors. Service level
            agreements are based on our support capabilities and infrastructure.
          </p>

          <p className="mb-4 text-gray-700">
            <strong>Compliance Responsibility:</strong> Clients are responsible
            for ensuring their use of VPN services complies with local laws,
            regulations, and organizational policies. We provide tools and
            support but cannot guarantee compliance for specific use cases.
          </p>

          <p className="text-gray-700">
            <strong>Professional Advice:</strong> Information provided on this
            website is for general guidance only. For specific legal, security,
            or compliance advice, please consult with qualified professionals in
            your jurisdiction.
          </p>
        </div>
      </div>
    </section>
  );
}
