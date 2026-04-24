const useCases = [
  {
    vertical: "E-Commerce",
    title: "Price Monitoring",
    description:
      "Real-time competitor price tracking across millions of SKUs with automated alerting and historical trend analysis.",
    tag: "Live",
    tagColor: "#4de082",
  },
  {
    vertical: "Finance",
    title: "News & Sentiment",
    description:
      "Aggregating global news sources and performing NLP-based sentiment analysis for market impact reports.",
    tag: "AI",
    tagColor: "#06b6d4",
  },
  {
    vertical: "B2B Sales",
    title: "Lead Generation",
    description:
      "Automatically identifying new prospects from professional networks and business directories at scale.",
    tag: "Auto",
    tagColor: "#95d3ba",
  },
  {
    vertical: "Competitive Intel",
    title: "Competitor Tracking",
    description:
      "Monitor competitor product launches, inventory levels, and visual changes without getting blocked.",
    tag: "Smart",
    tagColor: "#4de082",
  },
  {
    vertical: "Real Estate",
    title: "Listing Aggregation",
    description:
      "Market trend analysis and property listing aggregation across all major platforms in one unified feed.",
    tag: "Bulk",
    tagColor: "#06b6d4",
  },
  {
    vertical: "Marketing",
    title: "Ad Verification",
    description:
      "Ad placement verification and social media trend monitoring across channels to protect brand integrity.",
    tag: "Shield",
    tagColor: "#95d3ba",
  },
];

export function UseCasesGrid() {
  return (
    <section id="use-cases" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-4 py-1.5 rounded-full">
            Use Cases
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
          Built for{" "}
          <span className="text-[#4de082]">every vertical</span>
        </h2>
        <p className="text-center text-[#89938d] max-w-2xl mx-auto mb-16 text-base">
          From e-commerce price intelligence to financial alternative data —
          CrawlMindAI powers mission-critical data pipelines across industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="relative group rounded-xl border border-white/8 bg-[#191c1b]/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-white/15 hover:bg-[#1d201e]/80"
            >
              {/* Top-left glow dot */}
              <div
                className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: uc.tagColor }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#89938d]">
                  {uc.vertical}
                </span>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{
                    color: uc.tagColor,
                    background: `${uc.tagColor}15`,
                    border: `1px solid ${uc.tagColor}30`,
                  }}
                >
                  {uc.tag}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#e1e3e0] mb-2">
                {uc.title}
              </h3>
              <p className="text-sm text-[#89938d] leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
