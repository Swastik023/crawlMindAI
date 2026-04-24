import { MarketingNav } from "@/components/marketing/MarketingNav";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { PopularUseCases } from "@/components/marketing/PopularUseCases";
import { UseCasesGrid } from "@/components/marketing/UseCasesGrid";
import { CommunitySection } from "@/components/marketing/CommunitySection";
import { Testimonials } from "@/components/marketing/Testimonials";
import { CTASection } from "@/components/marketing/CTASection";
import { Footer } from "@/components/marketing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrawlMindAI — Visual Data Extraction with AI",
  description:
    "Scale your data intelligence with autonomous agents that browse, extract, and clean web data in real-time. No code, just flow.",
};

export default function SaasPage() {
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
      <FeaturesSection />
      <PopularUseCases />
      <UseCasesGrid />
      <CommunitySection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
