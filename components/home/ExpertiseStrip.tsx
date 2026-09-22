import React from "react";
import { CAPABILITIES } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export function ExpertiseStrip() {
  const items = [
    ...CAPABILITIES,
    "ROAS Optimization",
    "Conversion API (CAPI)",
    "Creative Testing",
    "Custom Audiences",
    "Negative Keyword Pruning",
    "Customer Acquisition",
  ];

  return (
    <div className="w-full bg-[#0B0D0E] text-white py-4 overflow-hidden border-y border-white/10 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span className="text-sm font-semibold tracking-wide uppercase font-mono text-white/90 hover:text-[#B7F34A] transition-colors">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B7F34A] shrink-0" />
            </div>
          ))}
        </div>

        {/* Second repetition for seamless infinite marquee */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span className="text-sm font-semibold tracking-wide uppercase font-mono text-white/90 hover:text-[#B7F34A] transition-colors">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B7F34A] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
