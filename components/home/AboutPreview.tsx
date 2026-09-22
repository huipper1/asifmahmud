"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { Check, ShieldCheck, Target, Zap } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-black/5 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Badge Column */}
          <div className="lg:col-span-5 flex justify-center reveal-fade">
            <div className="relative w-full max-w-sm">
              {/* Card Backdrop with Performance Green Gradient Accent */}
              <div className="relative aspect-[4/4.8] rounded-3xl bg-gradient-to-b from-[#B7F34A]/25 via-[#F7F7F4] to-[#EFEFEA] p-5 shadow-2xl flex flex-col justify-between border-2 border-black/10 overflow-hidden card-hover-lift">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between w-full z-20">
                  <span className="text-[11px] font-mono font-bold bg-[#0B0D0E] text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B7F34A]" /> Banglalink ESO
                  </span>
                  <span className="text-[11px] font-semibold bg-white text-[#111111] px-2.5 py-1 rounded-full shadow-2xs border border-black/10">
                    Growth Specialist
                  </span>
                </div>

                {/* Asif Mahmud Photo */}
                <div className="relative flex-1 flex items-end justify-center w-full z-10 -mb-2">
                  <div className="relative w-[280px] h-[320px] sm:w-[310px] sm:h-[350px]">
                    <Image
                      src="/asif-mahmud.png"
                      alt="Asif Mahmud - Digital Marketer & Enterprise Sales Officer"
                      fill
                      sizes="(max-width: 768px) 280px, 310px"
                      className="object-cover object-top rounded-2xl drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                  <div className="bg-[#0B0D0E] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#B7F34A]" />
                    <span>4+ Years · Conversion Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionTitle
              number="03"
              badge="Strategic Advantage"
              title="Why You Hire Me for Your Next Projects?"
              accentText="Hire Me"
              subtitle="Marketing without accurate tracking is guesswork. I combine commercial acumen, granular ad architecture, and data engineering to ensure your ad spend produces profit, not just clicks."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#426107] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">Full-Funnel Alignment</h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    From cold audience discovery to dynamic retargeting and repeat purchases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#426107] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">Flawless Attribution</h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    GA4, GTM, Meta Pixel &amp; Server-Side CAPI tracking verified before spending.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#426107] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">High-Intent Search</h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Target buyers ready to purchase with negative keyword protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#426107] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">Transparent Reporting</h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    No vanity metrics. Clean dashboards showing spend, CPA, and blended ROAS.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Counters Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10">
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#111111]">
                  100+
                </div>
                <div className="text-xs text-[#666666] font-medium mt-0.5">
                  Campaigns Executed
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#111111]">
                  9+
                </div>
                <div className="text-xs text-[#666666] font-medium mt-0.5">
                  Industries Covered
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#111111]">
                  4+ Yrs
                </div>
                <div className="text-xs text-[#666666] font-medium mt-0.5">
                  Professional Experience
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href={WHATSAPP_URL}
                isExternal
                variant="primary"
                size="md"
                withArrow
              >
                Hire Me for Your Business
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
