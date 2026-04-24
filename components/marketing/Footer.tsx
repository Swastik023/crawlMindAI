import Link from "next/link";
import { BrainCircuit } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#0c0f0d] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-[#064e3b] to-[#0b513d] border border-[#4de082]/20 p-1.5">
                <BrainCircuit size={18} className="text-[#4de082]" />
              </div>
              <div className="flex items-baseline">
                <span className="font-extrabold text-base bg-gradient-to-r from-[#4de082] to-[#95d3ba] bg-clip-text text-transparent">
                  CrawlMind
                </span>
                <span className="font-black text-base text-[#e1e3e0]">AI</span>
              </div>
            </Link>
            <p className="text-sm text-[#89938d] leading-relaxed max-w-[200px]">
              Visual Data Extraction with AI. Built for engineers who move fast.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#bfc9c3] mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#89938d] hover:text-[#e1e3e0] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#404944]">
            © {new Date().getFullYear()} CrawlMindAI. All rights reserved.
          </p>
          <p className="text-xs text-[#404944]">
            Developed by{" "}
            <span className="text-[#89938d] font-medium">
              Swastik Agnihotri
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
