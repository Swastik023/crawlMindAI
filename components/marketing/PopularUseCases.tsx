"use client";
import { LineChart, FileText, PieChart, Users } from "lucide-react";

const popularUseCases = [
  {
    title: "Price Monitoring",
    icon: LineChart,
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Time Saved", value: "85%" },
      { label: "Cost Reduction", value: "63%" },
    ],
    color: "#4de082",
  },
  {
    title: "Content Aggregation",
    icon: FileText,
    metrics: [
      { label: "Faster Updates", value: "78%" },
      { label: "Coverage", value: "92%" },
      { label: "Less Manual Work", value: "56%" },
    ],
    color: "#06b6d4",
  },
  {
    title: "Market Research",
    icon: PieChart,
    metrics: [
      { label: "Data Accuracy", value: "87%" },
      { label: "Time Efficiency", value: "73%" },
      { label: "Cost Savings", value: "68%" },
    ],
    color: "#95d3ba",
  },
  {
    title: "Lead Generation",
    icon: Users,
    metrics: [
      { label: "High-Quality Leads", value: "82%" },
      { label: "Volume Increase", value: "3.5×" },
      { label: "Conversion Rate", value: "71%" },
    ],
    color: "#4de082",
  },
];

export function PopularUseCases() {
  return (
    <section id="popular-use-cases" className="relative py-24 px-6 scroll-mt-20">
      <div className="flex justify-center mb-5">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4de082] bg-[#064e3b]/40 border border-[#4de082]/20 px-4 py-1.5 rounded-full">
          Popular Use Cases
        </span>
      </div>

      <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
        ScrapeFlow enables businesses to <span className="text-[#4de082]">automate data collection</span>
      </h2>
      <p className="text-center text-[#89938d] max-w-xl mx-auto mb-16 text-base">
        across multiple domains, improving efficiency and decision-making.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {popularUseCases.map((uc) => {
          const Icon = uc.icon;
          return (
            <div
              key={uc.title}
              className="group relative rounded-2xl border border-white/10 bg-[#1d201e]/60 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#272b29]/60"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: `${uc.color}15`,
                    border: `1px solid ${uc.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: uc.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#e1e3e0]">{uc.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-4">
                {uc.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: uc.color }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-[#89938d]">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
