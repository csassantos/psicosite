"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#situacoes", label: "Para quem" },
  { href: "/#abordagem", label: "Abordagem" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-neutral-900">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white text-sm font-bold leading-none">
            Ψ
          </span>
          Isadora Sasse
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-500">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-neutral-900 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#agendar"
          className="hidden md:inline-flex items-center rounded-full bg-green-500 text-white px-5 py-2 text-sm hover:bg-green-600 transition-colors"
        >
          Agendar consulta

        </a>

        <button
          className="md:hidden text-neutral-600"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-neutral-200 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#agendar"
            className="text-sm bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  );
}
