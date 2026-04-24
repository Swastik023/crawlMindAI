import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Glass card with radial glow */}
        <div className="relative rounded-3xl border border-[#4de082]/20 bg-gradient-to-b from-[#064e3b]/40 to-[#1d201e]/60 backdrop-blur-xl overflow-hidden p-12 text-center">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[300px] bg-[#4de082]/8 rounded-full blur-[80px]" />
          </div>

          {/* Top etched line */}
          <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#4de082]/40 to-transparent" />

          <div className="relative z-10">
            <span className="inline-block mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-[#4de082] bg-[#064e3b]/50 border border-[#4de082]/20 px-4 py-1.5 rounded-full">
              Limited Early Access
            </span>

            <h2 className="text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
              Ready to Take Control of{" "}
              <span className="text-[#4de082]">Web Scraping?</span>
            </h2>
            <p className="text-[#89938d] max-w-xl mx-auto mb-10 text-base">
              🎁 100 Free Credits on Signup<br/>
              🚀 Start instantly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-in"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#4de082] px-8 py-3.5 text-sm font-semibold text-[#003919] transition-all duration-200 hover:bg-[#6dfe9c] hover:shadow-[0_0_40px_rgba(77,224,130,0.3)]"
              >
                Start Free Trial
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#89938d]/40 bg-transparent px-8 py-3.5 text-sm font-semibold text-[#bfc9c3] transition-all duration-200 hover:border-[#89938d]/70 hover:text-[#e1e3e0]"
              >
                View Use Cases
              </Link>
            </div>

            <p className="mt-5 text-xs text-[#89938d]">
              💳 No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
