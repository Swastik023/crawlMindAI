import Link from "next/link";
import { BrainCircuit, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Radial background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#064e3b]/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#00b55d]/10 blur-[100px]" />
      </div>

      {/* Dev banner */}
      <div className="relative z-10 mb-8 flex items-center gap-2 rounded-full border border-[#404944] bg-[#1d201e]/80 backdrop-blur-sm px-5 py-2 text-sm text-[#bfc9c3]">
        <span className="text-[#4de082] text-base">🚧</span>
        <span>
          <strong className="text-[#e1e3e0]">CrawlMindAI</strong> is currently
          under development{" "}
          <span className="text-[#4de082] font-semibold">(90% complete)</span>
        </span>
      </div>

      {/* Eyebrow */}
      <div className="relative z-10 mb-6 flex items-center gap-2 rounded-full border border-[#95d3ba]/20 bg-[#064e3b]/30 px-4 py-1.5">
        <Sparkles size={13} className="text-[#95d3ba]" />
        <span className="text-xs font-medium tracking-widest uppercase text-[#95d3ba]">
          AI-Powered Web Data Extraction
        </span>
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-center font-bold leading-[1.08] tracking-[-0.03em] text-[clamp(2.5rem,6vw,4.5rem)] text-[#e1e3e0] max-w-4xl">
        Scale your data intelligence with{" "}
        <span className="bg-gradient-to-r from-[#4de082] to-[#95d3ba] bg-clip-text text-transparent">
          autonomous AI agents
        </span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 mt-6 max-w-2xl text-center text-lg text-[#bfc9c3] leading-relaxed">
        Browse, extract, and clean web data in real-time. No code, just flow.
        Visual Data Extraction with AI — built for data engineers who move fast.
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/sign-in"
          className="group flex items-center gap-2 rounded-lg bg-[#4de082] px-7 py-3.5 text-sm font-semibold text-[#003919] transition-all duration-200 hover:bg-[#6dfe9c] hover:shadow-[0_0_30px_rgba(77,224,130,0.35)]"
        >
          Start for Free
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
        <Link
          href="/use-cases"
          className="flex items-center gap-2 rounded-lg border border-[#06b6d4]/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#06b6d4] transition-all duration-200 hover:border-[#06b6d4] hover:bg-[#06b6d4]/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          Explore Use Cases
        </Link>
      </div>

      {/* Social proof */}
      <p className="relative z-10 mt-6 text-sm text-[#89938d]">
        Free plan includes{" "}
        <span className="text-[#4de082] font-medium">200 credits</span> · No
        credit card required
      </p>

      {/* Floating glass stat cards */}
      <div className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {[
          { label: "Success Rate", value: "99.9%", glow: "#4de082" },
          { label: "Data Points / Day", value: "500M+", glow: "#06b6d4" },
          { label: "Avg Latency", value: "< 2s", glow: "#95d3ba" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-white/20"
            style={{ boxShadow: `0 0 30px ${stat.glow}10` }}
          >
            <p
              className="text-3xl font-bold"
              style={{ color: stat.glow }}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-[#89938d] tracking-wide uppercase font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
