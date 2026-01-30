"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#case-study", label: "Case Studies" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full">
      {/* Disclaimer bar */}
      <div className="border-b-2 border-yellow-200 bg-yellow-50 py-2 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-yellow-800">
            <strong>⚠️ Disclaimer:</strong> We are an independent third-party
            service provider and not authorized or affiliated with any specific
            vendor or manufacturer.
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                TechSupport Pro
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden items-center space-x-8 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 transition hover:text-purple-600"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
              >
                Contact Us
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
              {/* Hamburger / Close */}
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
        </div>

        {/* Mobile menu (overlay + panel) */}
        <div
          className={`md:hidden ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Slide-down panel */}
          <div
            className={`fixed left-0 right-0 top-[calc(4rem+0px)] z-50 origin-top bg-white shadow-lg transition-all duration-200 ${
              open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
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
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
