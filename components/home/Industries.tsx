"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { industries } from "@/data/industries";
import { Layers, Table } from "lucide-react";

export function Industries() {
  const [viewMode, setViewMode] = useState<"cards" | "matrix">("cards");

  return (
    <section id="industries" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-black/5 relative">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 reveal-fade">
          <SectionTitle
            number="05"
            badge="Vertical Expertise"
            title="Tailored Across 8 High-Value Service Industries"
            accentText="Industries"
            subtitle="Different sectors require vastly different marketing mechanics. From emergency home services to high-intent medical and legal intake pipelines."
          />

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-[#F7F7F4] p-1.5 rounded-full border border-black/10 shrink-0">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === "cards"
                  ? "bg-[#0B0D0E] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === "matrix"
                  ? "bg-[#0B0D0E] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Table className="w-3 h-3" />
              <span>Channel Matrix</span>
            </button>
          </div>
        </div>

        {/* Cards View */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="bg-[#F7F7F4] p-6 rounded-2xl border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl p-2 rounded-xl bg-white border border-black/5 shadow-2xs group-hover:scale-110 transition-transform">
                      {ind.emoji}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-[#111111]">
                      {ind.name}
                    </h3>
                  </div>

                  {ind.examples && (
                    <p className="text-xs text-[#777777] mb-3">
                      Includes: {ind.examples.join(", ")}
                    </p>
                  )}

                  <div className="mt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] font-semibold">
                      Recommended Channels
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {ind.channels.map((ch, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-white text-[#222222] px-2.5 py-1 rounded-full border border-black/5 font-medium shadow-2xs"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#555555]">
                  <span>Custom KPI Funnel</span>
                  <span className="font-semibold text-[#709819]">Proven Setup</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Matrix Table View */
          <div className="bg-[#F7F7F4] rounded-2xl border border-black/10 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-black/5 text-[#444444] uppercase text-[10px] font-mono border-b border-black/10">
                    <th className="py-3.5 px-4">Industry Sector</th>
                    <th className="py-3.5 px-4 text-center">Meta Ads</th>
                    <th className="py-3.5 px-4 text-center">Google Ads</th>
                    <th className="py-3.5 px-4 text-center">GA4 / Tracking</th>
                    <th className="py-3.5 px-4 text-center">Social Media</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {industries.map((ind) => (
                    <tr key={ind.id} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-[#111111] flex items-center gap-2">
                        <span>{ind.emoji}</span>
                        <span>{ind.name}</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {ind.matrix.metaAds ? (
                          <span className="inline-flex w-5 h-5 rounded-full bg-[#B7F34A]/40 text-[#3f5f04] items-center justify-center font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {ind.matrix.googleAds ? (
                          <span className="inline-flex w-5 h-5 rounded-full bg-[#B7F34A]/40 text-[#3f5f04] items-center justify-center font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {ind.matrix.tracking ? (
                          <span className="inline-flex w-5 h-5 rounded-full bg-[#B7F34A]/40 text-[#3f5f04] items-center justify-center font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {ind.matrix.socialMedia ? (
                          <span className="inline-flex w-5 h-5 rounded-full bg-[#B7F34A]/40 text-[#3f5f04] items-center justify-center font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
