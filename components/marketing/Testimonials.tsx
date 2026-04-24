const testimonials = [
  {
    quote:
      "CrawlMindAI has reduced our data engineering overhead by 60%. The AI extraction is genuinely mind-blowing.",
    author: "Marcus Thorne",
    role: "CTO, DataLeap",
    avatar: "MT",
    accent: "#4de082",
  },
  {
    quote:
      "The visual workflow builder is the best we've used. It handles complex pagination and infinite scroll like a dream.",
    author: "Sarah Jenkins",
    role: "Lead Dev, WebPioneer",
    avatar: "SJ",
    accent: "#06b6d4",
  },
  {
    quote:
      "We migrated 12 brittle scrapers into CrawlMindAI in a weekend. It just works — even on JS-heavy SPAs.",
    author: "Arjun Patel",
    role: "Data Eng Lead, Finexus",
    avatar: "AP",
    accent: "#95d3ba",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#95d3ba] bg-[#95d3ba]/10 border border-[#95d3ba]/20 px-4 py-1.5 rounded-full">
            Social Proof
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
          Trusted by{" "}
          <span className="text-[#4de082]">data teams</span>
        </h2>
        <p className="text-center text-[#89938d] max-w-xl mx-auto mb-16 text-base">
          From early-stage startups to enterprise data teams, engineers rely on
          CrawlMindAI to power their most critical pipelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative rounded-2xl border border-white/10 bg-[#1d201e]/70 backdrop-blur-xl p-7 flex flex-col gap-5 transition-all duration-300 hover:border-white/20"
            >
              {/* Quote */}
              <div
                className="text-3xl font-serif leading-none"
                style={{ color: t.accent }}
              >
                "
              </div>
              <p className="text-sm text-[#bfc9c3] leading-relaxed flex-1 -mt-2">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: `${t.accent}20`,
                    border: `1px solid ${t.accent}40`,
                    color: t.accent,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e1e3e0]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#89938d]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
