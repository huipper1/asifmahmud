"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "@/lib/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F7F7F4] relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-fade">
          <SectionTitle
            number="06"
            badge="Methodology"
            title="The 6-Step Growth Framework"
            accentText="Growth"
            subtitle="A systematic, repeatable methodology that turns experimental ad spend into profitable acquisition channels."
            align="center"
          />
        </div>

        {/* 6 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7F34A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#709819] bg-[#B7F34A]/20 px-3 py-1 rounded-xl">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Step {idx + 1} of 6
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#111111] mb-3">
                  {step.title}
                </h3>

                <ul className="flex flex-col gap-2">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#555555]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#709819] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-gray-400">
                <span>Phase Outcome</span>
                <span className="text-[#111111] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Validated <ArrowRight className="w-3 h-3 text-[#709819]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
