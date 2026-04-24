"use client";
import { Users, Share2, Shield, CheckCircle2, Zap } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-4 py-1.5 rounded-full">
            Community & Collaboration
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#e1e3e0] mb-4">
          Build Together. <span className="text-[#06b6d4]">Scale Faster.</span>
        </h2>
        <p className="text-center text-[#89938d] max-w-2xl mx-auto mb-16 text-base">
          Collaborate with your team and the ScrapeFlow community to scale scraping operations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Key Features Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#1d201e]/60 backdrop-blur-xl p-8 transition-all hover:border-white/20">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                <Users size={20} className="text-[#06b6d4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#e1e3e0] mb-3">Team Workspaces</h3>
              <ul className="space-y-2 text-sm text-[#89938d]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#06b6d4]" /> Role-based access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#06b6d4]" /> Centralized workflow management
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1d201e]/60 backdrop-blur-xl p-8 transition-all hover:border-white/20">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#4de082]/10 border border-[#4de082]/20">
                <Share2 size={20} className="text-[#4de082]" />
              </div>
              <h3 className="text-lg font-semibold text-[#e1e3e0] mb-3">Workflow Sharing</h3>
              <ul className="space-y-2 text-sm text-[#89938d]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4de082]" /> Share workflows internally
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4de082]" /> Discover community workflows
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1d201e]/60 backdrop-blur-xl p-8 transition-all hover:border-white/20 md:col-span-2">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#95d3ba]/10 border border-[#95d3ba]/20">
                <Shield size={20} className="text-[#95d3ba]" />
              </div>
              <h3 className="text-lg font-semibold text-[#e1e3e0] mb-3">Collaboration Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-xs font-bold text-[#95d3ba] mb-1">STEP 1</div>
                  <div className="text-sm text-[#e1e3e0] font-medium mb-1">Create Workspace</div>
                  <div className="text-xs text-[#89938d]">Set permissions and organize workflows.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-xs font-bold text-[#95d3ba] mb-1">STEP 2</div>
                  <div className="text-sm text-[#e1e3e0] font-medium mb-1">Secure & Govern</div>
                  <div className="text-xs text-[#89938d]">SSO, Audit logs, and data encryption.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-xs font-bold text-[#95d3ba] mb-1">STEP 3</div>
                  <div className="text-sm text-[#e1e3e0] font-medium mb-1">Monitor & Scale</div>
                  <div className="text-xs text-[#89938d]">Performance tracking & analytics.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Teams Choose Column */}
          <div className="rounded-2xl border border-[#4de082]/20 bg-gradient-to-b from-[#064e3b]/30 to-[#1d201e]/60 backdrop-blur-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4de082]/10 rounded-full blur-[40px] -mr-16 -mt-16" />
            
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-[#4de082]" size={24} />
              <h3 className="text-xl font-bold text-[#e1e3e0]">Why Teams Choose ScrapeFlow</h3>
            </div>
            
            <ul className="space-y-5">
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[#89938d] text-sm">Development Speed</span>
                <span className="font-semibold text-[#4de082]">10× Faster</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[#89938d] text-sm">Scalability</span>
                <span className="font-semibold text-[#4de082]">500% Increase</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[#89938d] text-sm">Global Regions</span>
                <span className="font-semibold text-[#e1e3e0]">15+ Locations</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[#89938d] text-sm">Success Rate</span>
                <span className="font-semibold text-[#06b6d4]">99.9%</span>
              </li>
              <li className="flex items-center justify-between pt-2">
                <span className="text-[#89938d] text-sm">Monitoring</span>
                <span className="font-semibold text-[#e1e3e0]">24/7 Alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
