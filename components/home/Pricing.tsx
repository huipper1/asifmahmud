"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { monthlyPlans, projectPackages, projectSetups } from "@/data/pricing";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Check, Sparkles, ArrowUpRight, ShieldCheck, Zap, Server, AlertCircle } from "lucide-react";

export function Pricing() {
  const [pricingType, setPricingType] = useState<"monthly" | "project">("monthly");

  const buildWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-black/5 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 reveal-fade">
          <SectionTitle
            number="05"
            badge="Clear Investment"
            title="Simple, Transparent &amp; ROI-Driven Pricing"
            accentText="Pricing"
            subtitle="Transparent pricing with zero hidden fees. Choose between ongoing monthly performance management or one-time turnkey project architecture."
            align="center"
          />

          {/* Interactive Pricing Toggle Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 bg-[#F7F7F4] p-1.5 rounded-full border border-black/10 shadow-xs">
            <button
              onClick={() => setPricingType("monthly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                pricingType === "monthly"
                  ? "bg-[#0B0D0E] text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly Management
            </button>
            <button
              onClick={() => setPricingType("project")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                pricingType === "project"
                  ? "bg-[#0B0D0E] text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <span>Project-Based Setup</span>
              <span className="text-[10px] bg-[#B7F34A] text-[#0B0D0E] px-2 py-0.5 rounded-full font-mono font-extrabold">
                Bundles
              </span>
            </button>
          </div>
        </div>

        {/* 1. Monthly Management View */}
        {pricingType === "monthly" && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch reveal-stagger">
              {monthlyPlans.map((plan) => {
                const isPopular = plan.popular;

                return (
                  <div
                    key={plan.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                      isPopular
                        ? "bg-[#0B0D0E] text-white shadow-2xl border-2 border-[#B7F34A] lg:-translate-y-2"
                        : "bg-[#F7F7F4] text-[#111111] border border-black/10 shadow-xs hover:shadow-md"
                    }`}
                  >
                    {/* Popular / Best Value Badge */}
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-[#B7F34A] text-[#0B0D0E] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 fill-current" />
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="mb-4">
                        <h3
                          className={`text-xl font-bold font-heading ${
                            isPopular ? "text-white" : "text-[#111111]"
                          }`}
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${
                            isPopular ? "text-white/70" : "text-[#666666]"
                          }`}
                        >
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing Tag */}
                      <div className="py-4 border-y border-black/10 dark:border-white/10 my-4 flex items-baseline gap-1">
                        <span className="text-xs font-mono font-semibold opacity-70">
                          US$
                        </span>
                        <span
                          className={`text-4xl sm:text-5xl font-black font-heading ${
                            isPopular ? "text-[#B7F34A]" : "text-[#111111]"
                          }`}
                        >
                          ${plan.price}
                        </span>
                        <span className="text-xs font-mono opacity-70">
                          {plan.period}
                        </span>
                      </div>

                      {/* Deliverables List */}
                      <div className="flex flex-col gap-2.5 my-6">
                        <span
                          className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                            isPopular ? "text-white/50" : "text-[#777777]"
                          }`}
                        >
                          What&apos;s Included:
                        </span>
                        {plan.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPopular ? "text-[#B7F34A]" : "text-[#709819]"
                              }`}
                            />
                            <span className={isPopular ? "text-white/90" : "text-[#444444]"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 mt-auto">
                      <Button
                        href={buildWhatsAppLink(plan.whatsappMessage)}
                        isExternal
                        variant={isPopular ? "primary" : "secondary"}
                        size="md"
                        withArrow
                        className="w-full text-center"
                      >
                        {plan.ctaText}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Monthly Management Footnote */}
            <div className="bg-[#F7F7F4] p-4 sm:p-5 rounded-2xl border border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#709819] shrink-0" />
                <span className="font-medium">
                  <strong>Ad Spend Note:</strong> Advertising budget is paid directly to Google or Meta and is not included in monthly management fees.
                </span>
              </div>
              <span className="text-black/60 font-mono text-[11px] shrink-0">
                Cancel or adjust anytime with 15 days notice
              </span>
            </div>
          </div>
        )}

        {/* 2. Project-Based View */}
        {pricingType === "project" && (
          <div className="flex flex-col gap-10">
            {/* Top Project Packages (Bundles) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch reveal-stagger">
              {projectPackages.map((pkg) => {
                const isPopular = pkg.popular;

                return (
                  <div
                    key={pkg.id}
                    className={`rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 card-hover-lift relative ${
                      isPopular
                        ? "bg-[#0B0D0E] text-white shadow-2xl border-2 border-[#B7F34A]"
                        : "bg-[#F7F7F4] text-[#111111] border border-black/10 shadow-xs hover:shadow-xl"
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-8 whitespace-nowrap">
                        <span className="bg-[#B7F34A] text-[#0B0D0E] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 fill-current" />
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="mb-4">
                        <h3
                          className={`text-2xl font-extrabold font-heading ${
                            isPopular ? "text-white" : "text-[#111111]"
                          }`}
                        >
                          {pkg.name}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm font-semibold mt-1 font-mono ${
                            isPopular ? "text-[#B7F34A]" : "text-[#709819]"
                          }`}
                        >
                          {pkg.tagline}
                        </p>
                        <p
                          className={`text-xs mt-2 leading-relaxed ${
                            isPopular ? "text-white/70" : "text-[#555555]"
                          }`}
                        >
                          {pkg.description}
                        </p>
                      </div>

                      {/* Pricing Tag */}
                      <div className="py-4 border-y border-black/10 dark:border-white/10 my-4 flex items-baseline gap-2">
                        {pkg.originalPrice && (
                          <span className="text-lg line-through text-gray-400 font-mono">
                            US${pkg.originalPrice}
                          </span>
                        )}
                        <span className="text-xs font-mono font-semibold opacity-70">
                          US$
                        </span>
                        <span
                          className={`text-4xl sm:text-5xl font-black font-heading ${
                            isPopular ? "text-[#B7F34A]" : "text-[#111111]"
                          }`}
                        >
                          ${pkg.price}
                        </span>
                        <span className="text-xs font-mono opacity-70">
                          one-time project
                        </span>
                      </div>

                      {/* Deliverables List */}
                      <div className="flex flex-col gap-2.5 my-6">
                        <span
                          className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                            isPopular ? "text-white/50" : "text-[#777777]"
                          }`}
                        >
                          Scope of Work:
                        </span>
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPopular ? "text-[#B7F34A]" : "text-[#709819]"
                              }`}
                            />
                            <span className={isPopular ? "text-white/90" : "text-[#444444]"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {pkg.notes && (
                        <div
                          className={`p-3 rounded-xl text-xs mb-6 flex items-start gap-2 ${
                            isPopular
                              ? "bg-white/5 border border-white/10 text-white/70"
                              : "bg-black/5 border border-black/10 text-[#666666]"
                          }`}
                        >
                          <Server className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#B7F34A]" />
                          <span>{pkg.notes}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        href={buildWhatsAppLink(pkg.whatsappMessage)}
                        isExternal
                        variant={isPopular ? "primary" : "secondary"}
                        size="md"
                        withArrow
                        className="w-full text-center"
                      >
                        {pkg.ctaText}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual A La Carte Setup Table */}
            <div className="bg-[#F7F7F4] rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-black/10 gap-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#709819] font-bold">
                    A La Carte Setup
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#111111] mt-0.5">
                    Individual Paid Advertising Setup Services
                  </h3>
                  <p className="text-xs text-[#666666] mt-1">
                    Book specific setup components individually, or bundle everything with the full packages above.
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs text-[#666666] font-mono block">
                    Total Individual Value
                  </span>
                  <span className="text-xl sm:text-2xl font-black font-heading text-[#111111]">
                    US$1,550
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectSetups.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-2xl border border-black/5 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-sm font-bold text-[#111111]">
                          {item.name}
                        </h4>
                        <span className="text-base font-black font-heading text-[#111111] shrink-0 bg-[#B7F34A]/25 px-2.5 py-0.5 rounded-lg">
                          US${item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.deliverables.map((deliv, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-black/5 text-[#333333] px-2 py-0.5 rounded font-mono"
                          >
                            ✓ {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                      <span className="text-gray-400">One-time setup</span>
                      <a
                        href={buildWhatsAppLink(`Hi Asif, I want to inquire about ${item.name} ($${item.price}).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#111111] hover:text-[#709819] flex items-center gap-1 transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2 text-xs text-[#666666]">
                <ShieldCheck className="w-4 h-4 text-[#709819] shrink-0" />
                <span>
                  All setups include full verification, event testing in preview mode, and client handover walkthrough.
                </span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
