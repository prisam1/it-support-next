"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string; className?: string };

const NAV_ITEMS: readonly NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#faq", label: "FAQ" },
  { href: "#disclaimer", label: "Disclaimer", className: "text-red-600 hover:text-red-700 font-semibold" },
] as const;

export default function SecureNetHeader() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full">
      {/* Disclaimer Bar */}
      <div id="disclaimer" className="border-b border-yellow-200 bg-yellow-50 py-2">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-yellow-800">
          <span className="mr-2" aria-hidden="true">
            ℹ️
          </span>
          <strong>Disclaimer:</strong> We are not an authorized organization. All
          services are provided through third-party partnerships.
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              <span className="mr-2" aria-hidden="true">
                🛡️
              </span>
              SecureNet Pro
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center space-x-8 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.className ?? "text-gray-700 transition hover:text-purple-600"}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700 md:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${open ? "block" : "hidden"}`}>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 transition hover:bg-gray-100 ${
                      item.className ?? "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
