const useCases = [
  {
    vertical: "E-Commerce",
    title: "Monitor Pricing & Reviews",
    description: "Monitor pricing, product availability, and customer reviews.",
    tag: "Price comparison, Product monitoring",
    tagColor: "#4de082",
  },
  {
    vertical: "Real Estate",
    title: "Track Listings & Trends",
    description: "Track property listings and analyze market trends.",
    tag: "Market analysis, Pricing trends",
    tagColor: "#06b6d4",
  },
  {
    vertical: "Finance",
    title: "Extract Financial Data",
    description: "Extract financial data and monitor market movements.",
    tag: "Stock data tracking, News aggregation",
    tagColor: "#95d3ba",
  },
  {
    vertical: "Travel",
    title: "Compare Prices & Availability",
    description: "Compare prices and track availability across booking platforms.",
    tag: "Price comparison, Deal monitoring",
    tagColor: "#4de082",
  },
  {
    vertical: "Job Recruitment",
    title: "Aggregate Job Listings",
    description: "Aggregate job listings and analyze hiring trends.",
    tag: "Job aggregation, Salary insights",
    tagColor: "#06b6d4",
  },
  {
    vertical: "News & Media",
    title: "Monitor News & Social",
    description: "Monitor news, social media, and trending topics.",
    tag: "Trend monitoring, Media analysis",
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
            Solutions by Industry
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
          Tailored <span className="text-[#4de082]">automation workflows</span>
        </h2>
        <p className="text-center text-[#89938d] max-w-2xl mx-auto mb-16 text-base">
          ScrapeFlow adapts to industry-specific challenges with tailored automation workflows.
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
