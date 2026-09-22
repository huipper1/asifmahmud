"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { BarChart3, TrendingUp, DollarSign, Filter, RefreshCw, Layers } from "lucide-react";

interface CampaignItem {
  id: string;
  name: string;
  status: "Active" | "Learning" | "Paused";
  budget: string;
  spend: string;
  roas: string;
  ctr: string;
  cpa: string;
  purchases: number;
}

const mockCampaigns: CampaignItem[] = [
  {
    id: "c1",
    name: "TOF | Broad | UGC Video Hooks [Advantage+]",
    status: "Active",
    budget: "$150.00/day",
    spend: "$4,500.00",
    roas: "4.92x",
    ctr: "3.42%",
    cpa: "$11.80",
    purchases: 381,
  },
  {
    id: "c2",
    name: "MOF | Social Engagers & Video Viewers (75%)",
    status: "Active",
    budget: "$80.00/day",
    spend: "$2,400.00",
    roas: "5.40x",
    ctr: "4.15%",
    cpa: "$10.20",
    purchases: 235,
  },
  {
    id: "c3",
    name: "BOF | Dynamic Product Ads (View Content / ATC 14D)",
    status: "Active",
    budget: "$100.00/day",
    spend: "$3,000.00",
    roas: "6.85x",
    ctr: "5.80%",
    cpa: "$8.40",
    purchases: 357,
  },
  {
    id: "c4",
    name: "TEST | Creative Concept Batch #4 (Carousel Angles)",
    status: "Learning",
    budget: "$50.00/day",
    spend: "$1,500.00",
    roas: "3.20x",
    ctr: "2.10%",
    cpa: "$18.50",
    purchases: 81,
  },
];

export function MetaDashboard() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "adsets" | "ads">("campaigns");
  const [filterActive, setFilterActive] = useState(false);

  const displayedCampaigns = filterActive
    ? mockCampaigns.filter((c) => c.status === "Active")
    : mockCampaigns;

  return (
    <div className="bg-[#101316] text-white rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="bg-[#161B1F] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0081FB]/20 border border-[#0081FB]/40 flex items-center justify-center text-[#0081FB] font-bold text-sm">
            f
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-wide">Meta Ads Manager</span>
              <span className="text-[10px] bg-[#B7F34A]/20 text-[#B7F34A] border border-[#B7F34A]/30 px-2 py-0.5 rounded font-mono font-medium">
                DEMO CAMPAIGN / ILLUSTRATIVE DATA
              </span>
            </div>
            <span className="text-xs text-white/50">Account ID: 9402-1823-DEMO · Currency: USD</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterActive(!filterActive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              filterActive
                ? "bg-[#B7F34A] text-black font-semibold"
                : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
            }`}
          >
            <Filter className="w-3 h-3" />
            <span>Active Only</span>
          </button>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
            <RefreshCw className="w-3 h-3 text-[#B7F34A] animate-spin" />
            <span>Last 30 Days</span>
          </div>
        </div>
      </div>

      {/* KPI Overview Summary Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border-b border-white/10">
        <div className="bg-[#12161A] p-4 flex flex-col">
          <span className="text-[11px] text-white/50 uppercase tracking-wider font-mono">
            Total Spend
          </span>
          <span className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
            $11,400.00
          </span>
          <span className="text-[11px] text-[#B7F34A] flex items-center gap-1 mt-1 font-medium">
            <TrendingUp className="w-3 h-3" /> 100% Budget Utilized
          </span>
        </div>

        <div className="bg-[#12161A] p-4 flex flex-col">
          <span className="text-[11px] text-white/50 uppercase tracking-wider font-mono">
            Blended ROAS
          </span>
          <span className="text-xl sm:text-2xl font-bold font-heading text-[#B7F34A] mt-1">
            4.82x
          </span>
          <span className="text-[11px] text-white/50 mt-1">
            $54,948 Est. Revenue
          </span>
        </div>

        <div className="bg-[#12161A] p-4 flex flex-col">
          <span className="text-[11px] text-white/50 uppercase tracking-wider font-mono">
            Avg. Purchase CPA
          </span>
          <span className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
            $10.81
          </span>
          <span className="text-[11px] text-[#B7F34A] mt-1">
            1,054 Total Orders
          </span>
        </div>

        <div className="bg-[#12161A] p-4 flex flex-col">
          <span className="text-[11px] text-white/50 uppercase tracking-wider font-mono">
            Avg. CTR (Link)
          </span>
          <span className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
            3.65%
          </span>
          <span className="text-[11px] text-white/50 mt-1">
            38,400 Unique Clicks
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 bg-[#161B1F] px-4 text-xs font-medium">
        <button
          onClick={() => setActiveTab("campaigns")}
          className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === "campaigns"
              ? "border-[#B7F34A] text-[#B7F34A] font-semibold"
              : "border-transparent text-white/60 hover:text-white"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Campaigns ({displayedCampaigns.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("adsets")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "adsets"
              ? "border-[#B7F34A] text-[#B7F34A] font-semibold"
              : "border-transparent text-white/60 hover:text-white"
          }`}
        >
          Ad Sets (12)
        </button>
        <button
          onClick={() => setActiveTab("ads")}
          className={`py-3 px-4 border-b-2 transition-colors ${
            activeTab === "ads"
              ? "border-[#B7F34A] text-[#B7F34A] font-semibold"
              : "border-transparent text-white/60 hover:text-white"
          }`}
        >
          Ads (36)
        </button>
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[#13171B] text-white/50 uppercase text-[10px] font-mono border-b border-white/10 tracking-wider">
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Campaign Name</th>
              <th className="py-3 px-4 text-right">Daily Budget</th>
              <th className="py-3 px-4 text-right">Spend</th>
              <th className="py-3 px-4 text-right">Purchases</th>
              <th className="py-3 px-4 text-right">CPA</th>
              <th className="py-3 px-4 text-right">ROAS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {displayedCampaigns.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-white/[0.03] transition-colors group cursor-default"
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${
                      c.status === "Active"
                        ? "bg-[#25D366]/15 text-[#25D366]"
                        : "bg-amber-400/15 text-amber-400"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        c.status === "Active" ? "bg-[#25D366]" : "bg-amber-400"
                      }`}
                    />
                    {c.status}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-white/90 group-hover:text-white">
                  {c.name}
                </td>
                <td className="py-3 px-4 text-right text-white/70 font-mono">
                  {c.budget}
                </td>
                <td className="py-3 px-4 text-right text-white/90 font-mono font-medium">
                  {c.spend}
                </td>
                <td className="py-3 px-4 text-right text-white/90 font-mono">
                  {c.purchases}
                </td>
                <td className="py-3 px-4 text-right font-mono text-white/80">
                  {c.cpa}
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-[#B7F34A]">
                  {c.roas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Insight */}
      <div className="bg-[#12161A] px-4 py-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
        <span>⚡ Strategic structure: Cold acquisition + Retargeting + Dynamic Catalog</span>
        <span className="text-[#B7F34A] font-medium hidden sm:inline">Meta CAPI &amp; Pixel Verified</span>
      </div>
    </div>
  );
}
