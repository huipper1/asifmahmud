"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import { MetaDashboard } from "@/components/demos/MetaDashboard";
import { GoogleSearchDemo } from "@/components/demos/GoogleSearchDemo";
import { AnalyticsDashboard } from "@/components/demos/AnalyticsDashboard";
import { ConversionFunnel } from "@/components/demos/ConversionFunnel";
import { Eye, EyeOff } from "lucide-react";

export function WorkShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDemoId, setActiveDemoId] = useState<string>("meta-ecom-scale");

  const categories = ["All", "Meta Ads", "Google Ads", "Tracking & Analytics", "Social Media"];

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  const renderDemo = (demoType: CaseStudy["demoType"]) => {
    switch (demoType) {
      case "meta":
        return <MetaDashboard />;
      case "google":
        return <GoogleSearchDemo />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "funnel":
        return <ConversionFunnel />;
      default:
        return <MetaDashboard />;
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#F7F7F4] relative">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 reveal-fade">
          <SectionTitle
            number="04"
            badge="Case Studies"
            title="Let's Have a Look at my Work"
            accentText="Work"
            subtitle="Demonstrations of real campaign architectures, conversion funnels, and tracking setups."
          />

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap bg-white p-1.5 rounded-full border border-black/10 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0B0D0E] text-white shadow-xs"
                    : "text-gray-600 hover:text-black hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 reveal-stagger">
          {filteredStudies.map((study) => {
            const isDemoActive = activeDemoId === study.id;

            return (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#709819] bg-[#B7F34A]/20 px-2.5 py-0.5 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {study.clientType}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] mt-1.5 font-medium">
                    {study.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mt-3">
                    {study.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5 bg-[#F7F7F4] p-3 rounded-2xl border border-black/5">
                    {study.highlights.map((hl, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-base sm:text-lg font-black font-heading text-[#111111]">
                          {hl.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-mono text-[#709819] font-semibold">
                          {hl.label}
                        </span>
                        {hl.sublabel && (
                          <span className="text-[9px] text-[#777777] truncate">
                            {hl.sublabel}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-black/5 text-[#333333] px-2.5 py-1 rounded-full border border-black/5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#777777] italic">
                    {study.illustrativeNote}
                  </span>
                  <button
                    onClick={() => setActiveDemoId(isDemoActive ? "" : study.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#709819] transition-colors bg-[#F7F7F4] hover:bg-black/5 px-3.5 py-2 rounded-full border border-black/10 cursor-pointer"
                  >
                    {isDemoActive ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Demo</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-[#709819]" />
                        <span>Inspect Interactive Demo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Live Demo Section */}
        {activeDemoId && (
          <div className="mt-8 pt-8 border-t border-black/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#709819] animate-pulse" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#111111] font-mono">
                  Live Interactive Dashboard Demo
                </h4>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Click controls, tabs &amp; scenarios to test the workflow
              </span>
            </div>

            {(() => {
              const currentStudy = caseStudies.find((c) => c.id === activeDemoId);
              return currentStudy ? renderDemo(currentStudy.demoType) : null;
            })()}
          </div>
        )}
      </Container>
    </section>
  );
}
