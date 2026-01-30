"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/#services", label: "Services" },
  { href: "/#why-choose-us", label: "Why Us" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Disclaimer */}
      <div className="border-b border-yellow-200 bg-yellow-50 px-4 py-2">
        <p className="text-center text-sm text-yellow-800">
          <strong>Disclaimer:</strong> We are an independent third-party service
          provider and not an authorized Microsoft partner or official Microsoft
          organization.
        </p>
      </div>

      {/* Nav */}
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MS365 Cloud Support
          </Link>

          {/* Desktop */}
          <div className="hidden items-center space-x-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile button */}
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
                  className="rounded-md px-3 py-2 text-gray-800 transition hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
