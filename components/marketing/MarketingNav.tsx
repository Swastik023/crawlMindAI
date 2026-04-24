"use client";
import Link from "next/link";
import { BrainCircuit, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/#pricing" },
];

export function MarketingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#111412]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 select-none">
          <div className="rounded-lg bg-gradient-to-br from-[#064e3b] to-[#0b513d] border border-[#4de082]/20 p-1.5 shadow-lg shadow-[#4de082]/5">
            <BrainCircuit size={18} className="text-[#4de082]" />
          </div>
          <div className="flex items-baseline">
            <span className="font-extrabold text-lg bg-gradient-to-r from-[#4de082] to-[#95d3ba] bg-clip-text text-transparent">
              CrawlMind
            </span>
            <span className="font-black text-lg text-[#e1e3e0]">AI</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#89938d] hover:text-[#e1e3e0] transition-colors duration-150 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-[#bfc9c3] hover:text-[#e1e3e0] transition-colors font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/sign-in"
            className="rounded-lg bg-[#4de082] px-4 py-2 text-sm font-semibold text-[#003919] transition-all duration-200 hover:bg-[#6dfe9c] hover:shadow-[0_0_20px_rgba(77,224,130,0.3)]"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#bfc9c3] p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/8 bg-[#111412]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-[#bfc9c3] hover:text-[#e1e3e0] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/8">
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="text-center rounded-lg bg-[#4de082] px-4 py-2.5 text-sm font-semibold text-[#003919]"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
