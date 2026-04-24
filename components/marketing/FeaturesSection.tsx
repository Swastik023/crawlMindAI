"use client";
import {
  Workflow,
  Globe,
  BrainCircuit,
  Activity,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflow Builder",
    description:
      "Visual drag-and-drop interface for complex multi-step scraping logic. Chain actions, add conditions, and handle errors with ease.",
    color: "#4de082",
  },
  {
    icon: Globe,
    title: "Browser Control",
    description:
      "Full headless browser automation. Bypass captchas, handle SPAs, and mimic human interaction patterns seamlessly.",
    color: "#06b6d4",
  },
  {
    icon: BrainCircuit,
    title: "AI Extraction",
    description:
      "Zero-config data parsing using LLMs. Describe the data you want in plain English and let CrawlMind handle the selectors.",
    color: "#95d3ba",
  },
  {
    icon: Activity,
    title: "Managed Pipelines",
    description:
      "Schedule runs, monitor health in real-time, and get alerted when site structures change. Never miss a data update.",
    color: "#4de082",
    highlights: ["99.9% Success Rate", "Real-time Dashboard"],
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 scroll-mt-20"
    >
      {/* Section label */}
      <div className="flex justify-center mb-5">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4de082] bg-[#064e3b]/40 border border-[#4de082]/20 px-4 py-1.5 rounded-full">
          Platform Features
        </span>
      </div>

      <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
        Powerful primitives for the{" "}
        <span className="text-[#95d3ba]">modern web</span>
      </h2>
      <p className="text-center text-[#89938d] max-w-xl mx-auto mb-16 text-base">
        Everything you need to handle the complexity of real-world data
        extraction at scale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-[#1d201e]/60 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#272b29]/60"
              style={{
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${feature.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)`,
                }}
              />

              <div
                className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl"
                style={{
                  background: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                <Icon size={22} style={{ color: feature.color }} />
              </div>

              <h3 className="text-lg font-semibold text-[#e1e3e0] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#89938d] text-sm leading-relaxed">
                {feature.description}
              </p>

              {feature.highlights && (
                <div className="mt-5 flex flex-col gap-2">
                  {feature.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4de082]" />
                      <span className="text-xs text-[#bfc9c3]">{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
