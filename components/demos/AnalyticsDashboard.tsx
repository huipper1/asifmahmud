"use client";

import React, { useState } from "react";
import { Activity, Check, Code, Globe, ShieldCheck } from "lucide-react";

interface TrafficSource {
  channel: string;
  users: string;
  sessions: string;
  conversions: number;
  convRate: string;
  revenue: string;
}

const trafficData: TrafficSource[] = [
  { channel: "Paid Social (Meta Ads)", users: "18,420", sessions: "24,850", conversions: 624, convRate: "2.51%", revenue: "$34,500" },
  { channel: "Paid Search (Google Ads)", users: "12,180", sessions: "16,400", conversions: 486, convRate: "2.96%", revenue: "$28,150" },
  { channel: "Organic Social (Instagram/FB)", users: "6,940", sessions: "9,120", conversions: 182, convRate: "2.00%", revenue: "$9,800" },
  { channel: "Direct / Brand Search", users: "5,400", sessions: "7,200", conversions: 210, convRate: "2.91%", revenue: "$14,200" },
];

const trackedEvents = [
  { event: "session_start", trigger: "GTM All Pages", status: "Verified", count: "57,570" },
  { event: "view_item_list", trigger: "Custom DataLayer Push", status: "Verified", count: "31,400" },
  { event: "add_to_cart", trigger: "DOM Click Event / CAPI", status: "Verified", count: "4,820" },
  { event: "begin_checkout", trigger: "Initiate Checkout Trigger", status: "Verified", count: "2,190" },
  { event: "purchase / lead_submit", trigger: "Server-side GA4 + Meta Pixel", status: "Verified", count: "1,502" },
];

export function AnalyticsDashboard() {
  const [selectedMedium, setSelectedMedium] = useState<"meta" | "google">("meta");

  const utmUrl =
    selectedMedium === "meta"
      ? "https://brand.com/landing?utm_source=facebook&utm_medium=paid_social&utm_campaign=summer_scale_cbo&utm_content=ugc_hook_v2"
      : "https://brand.com/landing?utm_source=google&utm_medium=cpc&utm_campaign=search_high_intent&utm_term=commercial_consultant";

  return (
    <div className="bg-[#121518] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#191D22] px-4 sm:px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#E37400]/20 border border-[#E37400]/40 flex items-center justify-center text-[#E37400] font-bold text-xs">
            GA4
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">GA4 &amp; GTM Measurement Engine</span>
              <span className="text-[10px] bg-[#B7F34A]/20 text-[#B7F34A] border border-[#B7F34A]/30 px-2 py-0.5 rounded font-mono font-medium">
                DEMO CAMPAIGN / ILLUSTRATIVE DATA
              </span>
            </div>
            <span className="text-xs text-white/50">Tag Container: GTM-ASIF-PROD · Data Streams: Web + Server CAPI</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#B7F34A] bg-[#B7F34A]/10 border border-[#B7F34A]/20 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Attribution Integrity 100%</span>
        </div>
      </div>

      {/* Traffic Attribution Breakdown */}
      <div className="p-4 sm:p-6 border-b border-white/10">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#B7F34A]" />
          <span>Traffic Acquisition &amp; Revenue Attribution</span>
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-white/40 uppercase text-[10px] font-mono border-b border-white/10">
                <th className="py-2.5 px-3">Default Channel Group</th>
                <th className="py-2.5 px-3 text-right">Active Users</th>
                <th className="py-2.5 px-3 text-right">Sessions</th>
                <th className="py-2.5 px-3 text-right">Key Events</th>
                <th className="py-2.5 px-3 text-right">Conv. Rate</th>
                <th className="py-2.5 px-3 text-right">Attributed Rev</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {trafficData.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02]">
                  <td className="py-2.5 px-3 font-medium text-white/90">
                    {row.channel}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-white/70">
                    {row.users}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-white/70">
                    {row.sessions}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-semibold text-white">
                    {row.conversions}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-[#B7F34A]">
                    {row.convRate}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-[#B7F34A]">
                    {row.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GTM Tracked DataLayer Events */}
      <div className="p-4 sm:p-6 bg-[#0E1013] border-b border-white/10">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#B7F34A]" />
          <span>Real-time Funnel Event Telemetry</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {trackedEvents.map((ev, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-white/90">
                  {ev.event}
                </span>
                <span className="text-[10px] bg-[#B7F34A]/20 text-[#B7F34A] px-1.5 py-0.5 rounded flex items-center gap-1 font-mono">
                  <Check className="w-2.5 h-2.5" /> {ev.status}
                </span>
              </div>
              <span className="text-[11px] text-white/40 mt-1">{ev.trigger}</span>
              <span className="text-xs font-mono text-white/70 font-semibold mt-2">
                {ev.count} triggers
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* UTM Parameter Discipline Demo */}
      <div className="p-4 sm:p-6 bg-[#161B1F]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-[#B7F34A]" />
            <span className="text-xs font-mono uppercase font-semibold text-white/80">
              Interactive UTM Parameter Inspector
            </span>
          </div>
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-md border border-white/10">
            <button
              onClick={() => setSelectedMedium("meta")}
              className={`px-2.5 py-0.5 text-xs rounded transition-colors ${
                selectedMedium === "meta"
                  ? "bg-[#B7F34A] text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Meta UTM
            </button>
            <button
              onClick={() => setSelectedMedium("google")}
              className={`px-2.5 py-0.5 text-xs rounded transition-colors ${
                selectedMedium === "google"
                  ? "bg-[#B7F34A] text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Google UTM
            </button>
          </div>
        </div>

        <div className="bg-[#0B0D0E] p-3 rounded-lg border border-white/10 font-mono text-xs text-[#B7F34A] break-all">
          {utmUrl}
        </div>
      </div>
    </div>
  );
}
