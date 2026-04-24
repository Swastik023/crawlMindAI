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
    title: "Visual Workflow Editor",
    description: "Build workflows visually using a drag-and-drop interface. No Code Required.",
    color: "#4de082",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Extraction",
    description: "Smart parsing of complex pages using LLMs.",
    color: "#06b6d4",
  },
  {
    icon: Activity,
    title: "Scheduling & Monitoring",
    description: "Automate and track workflows. Get alerted when site structures change.",
    color: "#95d3ba",
    highlights: ["24/7 Monitoring & Alerts", "99.9% Success Rate"],
  },
  {
    icon: Globe,
    title: "Advanced Selectors",
    description: "Precise element targeting for the most complex sites.",
    color: "#4de082",
  },
  {
    icon: CheckCircle2,
    title: "Data Storage",
    description: "Organized, structured data handling.",
    color: "#06b6d4",
  },
  {
    icon: Workflow,
    title: "Webhooks",
    description: "Integrate with external services and send data anywhere.",
    color: "#95d3ba",
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
        Visual Web Scraping —{" "}
        <span className="text-[#95d3ba]">No Code Required</span>
      </h2>
      <p className="text-center text-[#89938d] max-w-xl mx-auto mb-16 text-base">
        Design powerful scraping workflows using a drag-and-drop interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
