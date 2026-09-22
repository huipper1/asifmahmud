"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, ChevronRight, Target } from "lucide-react";

interface SearchScenario {
  id: string;
  tabLabel: string;
  query: string;
  adTitle: string;
  displayUrl: string;
  adDescription: string;
  extensions: string[];
  keywords: {
    keyword: string;
    matchType: "Exact [ ]" | "Phrase \" \"" | "Broad";
    cpc: string;
    ctr: string;
    qualityScore: string;
  }[];
}

const scenarios: SearchScenario[] = [
  {
    id: "services",
    tabLabel: "High-Intent Service",
    query: "commercial property real estate consultant dhaka",
    adTitle: "Commercial Real Estate Advisory | Find Verified Office Spaces",
    displayUrl: "https://www.primeproperties.com/commercial-consulting",
    adDescription:
      "Looking for premium corporate office spaces? Expert valuation, lease negotiation & verified zoning. Request a direct consultation today.",
    extensions: ["Schedule Free Viewing", "Download Rate Card", "Corporate Client Case Studies", "Direct Phone Support"],
    keywords: [
      { keyword: "[commercial real estate consultant dhaka]", matchType: "Exact [ ]", cpc: "$1.45", ctr: "9.2%", qualityScore: "10/10" },
      { keyword: "\"corporate office spaces for lease\"", matchType: "Phrase \" \"", cpc: "$1.80", ctr: "7.8%", qualityScore: "9/10" },
      { keyword: "[commercial property advisory]", matchType: "Exact [ ]", cpc: "$2.10", ctr: "8.5%", qualityScore: "9/10" },
    ],
  },
  {
    id: "ecom",
    tabLabel: "E-Commerce Luxury",
    query: "authentic 22k gold jewellery set buy online",
    adTitle: "Handcrafted 22K Gold Jewellery | Hallmarked & Free Insured Delivery",
    displayUrl: "https://www.chinajewellery.com/collections/22k-gold",
    adDescription:
      "Explore exquisite bridal sets, gold chains, and bangles with government hallmarked purity certificates. Instant checkout & secure insured shipping.",
    extensions: ["Bridal Collection", "Gold Coin Rates", "Lifetime Exchange Guarantee", "WhatsApp Concierge"],
    keywords: [
      { keyword: "[authentic 22k gold jewellery buy online]", matchType: "Exact [ ]", cpc: "$0.85", ctr: "11.4%", qualityScore: "10/10" },
      { keyword: "\"hallmarked gold necklace designs\"", matchType: "Phrase \" \"", cpc: "$0.95", ctr: "8.9%", qualityScore: "9/10" },
      { keyword: "[buy bridal jewellery set online]", matchType: "Exact [ ]", cpc: "$1.20", ctr: "9.6%", qualityScore: "9/10" },
    ],
  },
];

export function GoogleSearchDemo() {
  const [selectedScenario, setSelectedScenario] = useState<string>(scenarios[0].id);

  const current = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];

  return (
    <div className="bg-[#FFFFFF] text-[#1F1F1F] rounded-2xl border border-black/10 shadow-xl overflow-hidden">
      {/* Header & Scenarios Bar */}
      <div className="bg-[#F8F9FA] px-4 sm:px-6 py-3.5 border-b border-black/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-white shadow-xs border border-black/10 flex items-center justify-center font-bold text-sm text-[#4285F4]">
            G
          </span>
          <div>
            <span className="text-xs font-semibold text-gray-800">Google Ads Search Architecture</span>
            <span className="ml-2 text-[10px] bg-[#B7F34A]/30 text-[#2b4205] border border-[#B7F34A]/60 px-2 py-0.5 rounded font-mono font-bold">
              DEMO CAMPAIGN / ILLUSTRATIVE DATA
            </span>
          </div>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-black/10">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(sc.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedScenario === sc.id
                  ? "bg-[#0B0D0E] text-white shadow-xs"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              {sc.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Google Search Box */}
      <div className="p-4 sm:p-6 bg-white border-b border-black/5">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2.5 shadow-xs">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="text-sm font-medium text-gray-800 flex-1 truncate font-mono">
              {current.query}
            </span>
            <span className="text-xs text-blue-600 font-medium">Search</span>
          </div>
        </div>
      </div>

      {/* Sponsored Ad Mockup */}
      <div className="p-4 sm:p-6 bg-[#FCFCFD]">
        <div className="max-w-2xl mx-auto bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-2xs">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold text-[#202124] uppercase tracking-wide">Sponsored</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-[#202124] truncate">{current.displayUrl}</span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
            {current.adTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#4d5156] mt-1.5 leading-relaxed">
            {current.adDescription}
          </p>

          {/* Sitelink Extensions */}
          <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
            {current.extensions.map((ext, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-xs font-medium text-[#1a0dab] hover:underline cursor-pointer"
              >
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <span>{ext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind The Scenes: Keyword Intent Clustering */}
      <div className="p-4 sm:p-6 bg-[#14171A] text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#B7F34A]" />
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Targeted Keyword Cluster &amp; Quality Scores
            </h4>
          </div>
          <span className="text-[11px] text-[#B7F34A] font-medium hidden sm:inline">
            Zero Negative Keyword Leaks
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-white/40 uppercase text-[10px] font-mono border-b border-white/10">
                <th className="py-2.5 px-3">Keyword Query</th>
                <th className="py-2.5 px-3">Match Type</th>
                <th className="py-2.5 px-3 text-right">Avg CPC</th>
                <th className="py-2.5 px-3 text-right">CTR</th>
                <th className="py-2.5 px-3 text-right">Quality Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {current.keywords.map((kw, i) => (
                <tr key={i} className="hover:bg-white/[0.02]">
                  <td className="py-2.5 px-3 font-mono font-medium text-white/90">
                    {kw.keyword}
                  </td>
                  <td className="py-2.5 px-3 text-white/70">
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">
                      {kw.matchType}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-white/90">
                    {kw.cpc}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-[#B7F34A] font-medium">
                    {kw.ctr}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-white">
                    <span className="bg-[#B7F34A]/20 text-[#B7F34A] border border-[#B7F34A]/40 px-2 py-0.5 rounded">
                      {kw.qualityScore}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Funnel Bar */}
      <div className="bg-[#0B0D0E] p-4 text-xs border-t border-white/10 text-white/70 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#B7F34A]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Intent Funnel: High Search Intent → Granular Copy → Dedicated LP → Closed Client</span>
        </div>
      </div>
    </div>
  );
}
