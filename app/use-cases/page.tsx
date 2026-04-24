import { MarketingNav } from "@/components/marketing/MarketingNav";
import { UseCasesGrid } from "@/components/marketing/UseCasesGrid";
import { CTASection } from "@/components/marketing/CTASection";
import { Footer } from "@/components/marketing/Footer";
import type { Metadata } from "next";
import {
  TrendingUp,
  BarChart3,
  Users,
  Radar,
  Building2,
  Megaphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — CrawlMindAI",
  description:
    "Explore how CrawlMindAI powers real-world data automation across e-commerce, finance, real estate, and marketing industries.",
};

const industries = [
  {
    icon: TrendingUp,
    name: "E-Commerce",
    tagline: "Dynamic pricing and stock intelligence for retail leaders.",
    detail:
      "Track millions of product prices and inventory levels across competitor storefronts in real-time. Power your repricing engine with fresh, structured data.",
    accent: "#4de082",
  },
  {
    icon: Building2,
    name: "Real Estate",
    tagline: "Market trend analysis and property listing aggregation.",
    detail:
      "Aggregate MLS listings, Zillow, Realtor.com and regional portals into a single normalized feed. Build AVM models with real-world comparable data.",
    accent: "#06b6d4",
  },
  {
    icon: BarChart3,
    name: "Finance",
    tagline: "Alternative data for alpha generation and risk modeling.",
    detail:
      "Extract earnings call transcripts, SEC filings, job postings, and satellite signals. Build proprietary datasets that give your quant models an edge.",
    accent: "#95d3ba",
  },
  {
    icon: Megaphone,
    name: "Marketing",
    tagline: "Ad verification and social media trend monitoring.",
    detail:
      "Verify ad placements across publisher networks, monitor brand mentions, and track viral trends before they peak. Real-time signals for reactive campaigns.",
    accent: "#4de082",
  },
  {
    icon: Users,
    name: "B2B Sales",
    tagline: "Identify and enrich prospects at scale.",
    detail:
      "Automatically discover new leads from LinkedIn, industry directories, and company websites. Enrich with technographics, headcount, and funding signals.",
    accent: "#06b6d4",
  },
  {
    icon: Radar,
    name: "Competitive Intelligence",
    tagline: "Monitor competitors without getting blocked.",
    detail:
      "Track feature launches, pricing changes, job postings, and product roadmaps. Get instant alerts when a competitor makes a meaningful move.",
    accent: "#95d3ba",
  },
];

export default function UseCasesPage() {
  return (
    <div
      className="min-h-screen text-[#e1e3e0]"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 80% 20%, #06b6d415 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 20% 80%, #064e3b20 0%, transparent 50%), #111412",
        backgroundAttachment: "fixed",
      }}
    >
      <MarketingNav />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/10 px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#06b6d4]">
            Real-World Applications
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-[-0.03em] text-[#e1e3e0] mb-5">
          Real-World Data{" "}
          <span className="bg-gradient-to-r from-[#4de082] to-[#06b6d4] bg-clip-text text-transparent">
            Automation
          </span>
        </h1>
        <p className="text-lg text-[#89938d] max-w-2xl mx-auto leading-relaxed">
          Empowering data-driven organizations with high-velocity crawling and
          precision scraping at scale. Explore how CrawlMindAI transforms raw
          web data into competitive intelligence.
        </p>
      </section>

      {/* Quick-use-case grid from shared component */}
      <UseCasesGrid />

      {/* Tailored for every industry — deep dive */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4de082] bg-[#064e3b]/40 border border-[#4de082]/20 px-4 py-1.5 rounded-full">
              Industry Deep-Dive
            </span>
          </div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
            Tailored for{" "}
            <span className="text-[#4de082]">every industry</span>
          </h2>
          <p className="text-center text-[#89938d] max-w-xl mx-auto mb-16 text-base">
            Purpose-built extraction templates and AI prompts for your vertical.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="group rounded-2xl border border-white/8 bg-[#1d201e]/60 backdrop-blur-xl p-7 transition-all duration-300 hover:border-white/18 hover:bg-[#272b29]/60"
                >
                  <div
                    className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{
                      background: `${ind.accent}12`,
                      border: `1px solid ${ind.accent}28`,
                    }}
                  >
                    <Icon size={20} style={{ color: ind.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: ind.accent }}
                  >
                    {ind.name}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-[#e1e3e0] mb-2">
                    {ind.tagline}
                  </h3>
                  <p className="text-sm text-[#89938d] leading-relaxed">
                    {ind.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
