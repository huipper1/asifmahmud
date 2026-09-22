"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { ArrowUpRight, Check, Layers, BarChart, Search, Share2, Video, TrendingUp } from "lucide-react";

export function ServicesPreview() {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <Layers className="w-5 h-5 text-[#B7F34A]" />;
      case "search":
        return <Search className="w-5 h-5 text-[#B7F34A]" />;
      case "bar-chart":
        return <BarChart className="w-5 h-5 text-[#B7F34A]" />;
      case "share-2":
        return <Share2 className="w-5 h-5 text-[#B7F34A]" />;
      case "youtube":
        return <Video className="w-5 h-5 text-[#B7F34A]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#B7F34A]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B0D0E] text-white relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6 reveal-fade">
          <SectionTitle
            number="01"
            badge="Capabilities"
            title="My Services"
            accentText="Services"
            subtitle="Engineered for measurable business growth through precision paid acquisition, data integrity, and strategic content."
            theme="dark"
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B7F34A] hover:underline underline-offset-4 group shrink-0"
          >
            <span>View All Detailed Services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 scrollbar-none reveal-fade">
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveServiceId(svc.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeServiceId === svc.id
                  ? "bg-[#B7F34A] text-[#0B0D0E] font-bold shadow-md shadow-[#B7F34A]/25 scale-[1.02]"
                  : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{svc.number}</span>
              <span>{svc.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#14171A] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl reveal-fade">
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(activeService.icon)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B7F34A] uppercase tracking-wider">
                    Service {activeService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-white/70 leading-relaxed mb-8">
                {activeService.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
                  Key Deliverables &amp; Execution
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-white/90 bg-white/5 px-3 py-2 rounded-lg border border-white/5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#B7F34A] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/services#${activeService.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#B7F34A] transition-colors"
              >
                <span>Read Full Service Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-white/40 font-mono">
                Full-funnel implementation
              </span>
            </div>
          </div>

          {/* Right Visual Architecture Box */}
          <div className="lg:col-span-6 bg-[#0E1114] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B7F34A]" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                  Execution Workflow Preview
                </span>
              </div>
              <span className="text-xs text-[#B7F34A] font-semibold bg-[#B7F34A]/10 px-2.5 py-0.5 rounded-full border border-[#B7F34A]/20">
                Turnkey Setup
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[11px] font-mono text-white/40 uppercase">Phase 1: Foundation</span>
                <p className="text-sm font-semibold text-white mt-1">
                  Audience Persona Research, Pixel/CAPI Verification &amp; Competitor Gap Audit
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[11px] font-mono text-white/40 uppercase">Phase 2: Launch &amp; Testing</span>
                <p className="text-sm font-semibold text-white mt-1">
                  Dynamic Creative Iterations, Search Intent Match &amp; Bid Optimization
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[11px] font-mono text-white/40 uppercase">Phase 3: Scaling &amp; Attribution</span>
                <p className="text-sm font-semibold text-white mt-1">
                  Budget Re-allocation into Winning Sets &amp; End-to-End GA4 Reporting
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>Goal: Lower CPA &amp; Maximum ROAS</span>
              <span className="text-[#B7F34A] font-mono font-medium">100% Transparent</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
