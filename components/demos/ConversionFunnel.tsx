"use client";

import React, { useState } from "react";
import { Calendar, Share2, Sparkles, MessageCircle, Heart, ArrowDown, CheckCircle } from "lucide-react";

interface ContentPillar {
  day: string;
  pillar: string;
  platform: "Instagram Reels" | "Facebook Carousel" | "YouTube Shorts" | "Meta Story";
  hook: string;
  objective: string;
  engagementEst: string;
}

const schedule: ContentPillar[] = [
  {
    day: "Monday",
    pillar: "Educational / Problem Solved",
    platform: "Instagram Reels",
    hook: "\"3 Costly Mistakes Brands Make with Paid Ads in 2024\"",
    objective: "Authority & High Shares",
    engagementEst: "14.2K Views · 850 Saves",
  },
  {
    day: "Wednesday",
    pillar: "Customer Transformation / Proof",
    platform: "Facebook Carousel",
    hook: "\"How We Scaled E-Com ROAS from 1.8x to 4.8x in 60 Days\"",
    objective: "Trust & Inbound DMs",
    engagementEst: "9.8K Impressions · 120 Comments",
  },
  {
    day: "Friday",
    pillar: "Direct Offer / Limited Opportunity",
    platform: "Instagram Reels",
    hook: "\"Ready for Q4 scale? Booking 2 audit spots this week.\"",
    objective: "Direct Conversions & Leads",
    engagementEst: "28 Qualified Link Inquiries",
  },
];

const funnelSteps = [
  { step: "Top of Funnel (Awareness)", metric: "350,000+", label: "Targeted Video Views & Impressions", width: "w-full", bg: "bg-white/10" },
  { step: "Middle of Funnel (Engagement)", metric: "21,700", label: "Saves, Shares & Product Inquiries", width: "w-3/4", bg: "bg-[#B7F34A]/20 text-[#B7F34A]" },
  { step: "Bottom of Funnel (Action)", metric: "410", label: "Direct Purchases & WhatsApp Consultations", width: "w-1/2", bg: "bg-[#B7F34A] text-[#0B0D0E]" },
];

export function ConversionFunnel() {
  const [activeDay, setActiveDay] = useState<string>("Monday");

  const currentPillar = schedule.find((s) => s.day === activeDay) || schedule[0];

  return (
    <div className="bg-[#121518] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#191D22] px-4 sm:px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] font-bold text-xs">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">Organic Content Strategy &amp; Funnel</span>
              <span className="text-[10px] bg-[#B7F34A]/20 text-[#B7F34A] border border-[#B7F34A]/30 px-2 py-0.5 rounded font-mono font-medium">
                DEMO CAMPAIGN / ILLUSTRATIVE DATA
              </span>
            </div>
            <span className="text-xs text-white/50">Multi-Channel Synergistic Scheduling</span>
          </div>
        </div>
      </div>

      {/* Interactive Content Schedule Row */}
      <div className="p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#B7F34A]" />
            <span>Weekly Strategic Content Architecture</span>
          </h4>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            {schedule.map((s) => (
              <button
                key={s.day}
                onClick={() => setActiveDay(s.day)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeDay === s.day
                    ? "bg-[#B7F34A] text-[#0B0D0E] font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {s.day}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Content Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/10 text-white/80">
              Format: {currentPillar.platform}
            </span>
            <span className="text-xs text-[#B7F34A] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> {currentPillar.objective}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-white/40 uppercase tracking-wide font-mono">Hook Line</span>
            <p className="text-sm sm:text-base font-semibold text-white mt-0.5 font-heading">
              {currentPillar.hook}
            </p>
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
            <span>Expected Engagement: {currentPillar.engagementEst}</span>
            <span className="text-[#B7F34A] font-semibold">Scheduled &amp; Scripted</span>
          </div>
        </div>
      </div>

      {/* Funnel Flow Visualization */}
      <div className="p-4 sm:p-6 bg-[#0E1013]">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white/60 mb-4 flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[#B7F34A]" />
          <span>Audience Conversion Funnel</span>
        </h4>

        <div className="flex flex-col gap-3">
          {funnelSteps.map((f, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-xl border border-white/10 ${f.bg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2`}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-75">
                  {f.step}
                </span>
                <p className="text-xs sm:text-sm font-medium mt-0.5">
                  {f.label}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-black font-mono">
                {f.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
