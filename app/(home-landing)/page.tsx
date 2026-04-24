import { MarketingNav } from "@/components/marketing/MarketingNav";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesSection as SaaSFeaturesSection } from "@/components/marketing/FeaturesSection";
import { PopularUseCases } from "@/components/marketing/PopularUseCases";
import { UseCasesGrid } from "@/components/marketing/UseCasesGrid";
import { CommunitySection } from "@/components/marketing/CommunitySection";
import { Testimonials } from "@/components/marketing/Testimonials";
import { CTASection } from "@/components/marketing/CTASection";
import { Footer } from "@/components/marketing/Footer";
import type { Metadata } from "next";

import { FeaturesGradient as LegacyHowItWorks } from "./_components/FeaturesGradient";
import { FeaturesSection as LegacyScrapingFeatures } from "./_components/Feature";
import { HoverEffect as LegacyPricingGrid } from "@/components/accernity-ui/CardHover";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "CrawlMindAI — Visual Data Extraction with AI",
  description:
    "Scale your data intelligence with autonomous agents that browse, extract, and clean web data in real-time. No code, just flow.",
};

export default function HomeLandingPage() {
  return (
    <div
      className="min-h-screen text-[#e1e3e0]"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, #064e3b22 0%, transparent 60%), #111412",
        backgroundAttachment: "fixed",
      }}
    >
      <MarketingNav />
      <HeroSection />
      
      {/* SaaS Sections */}
      <SaaSFeaturesSection />
      <PopularUseCases />
      <UseCasesGrid />
      <CommunitySection />

      {/* Legacy: How It Works */}
      <section id="howItWorks" className="relative py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4de082] bg-[#064e3b]/40 border border-[#4de082]/20 px-4 py-1.5 rounded-full">
              How It Works
            </span>
          </div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-16">
            Create intelligent pipelines <span className="text-[#4de082]">visually</span>
          </h2>
          <LegacyHowItWorks />
        </div>
      </section>

      {/* Legacy: Scraping Features Grid */}
      <section id="scrapingFeatures" className="relative py-24 px-6 scroll-mt-20 bg-[#111412]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-4 py-1.5 rounded-full">
              Scraping Features
            </span>
          </div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-16">
            Everything you need to <span className="text-[#06b6d4]">extract data</span>
          </h2>
          <LegacyScrapingFeatures />
        </div>
      </section>

      {/* Legacy: Pricing */}
      <section id="pricing" className="relative py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#95d3ba] bg-[#95d3ba]/10 border border-[#95d3ba]/20 px-4 py-1.5 rounded-full">
              Pricing
            </span>
          </div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
            Simple & Transparent <span className="text-[#95d3ba]">Pricing</span>
          </h2>
          <p className="text-center text-[#89938d] max-w-2xl mx-auto mb-16 text-base">
            Start scraping today with our flexible credit-based system.
          </p>
          <LegacyPricingGrid items={[...pricingPlans]} />
        </div>
      </section>

      {/* SaaS Testimonials & Footer */}
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
