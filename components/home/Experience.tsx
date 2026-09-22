"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience, education } from "@/data/experience";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F7F7F4] relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-fade">
          <SectionTitle
            number="02"
            badge="Career Timeline"
            title="My Work Experience"
            accentText="Experience"
            subtitle="Hands-on commercial roles spanning corporate enterprise sales, retail e-commerce management, and performance campaigns."
            align="center"
          />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-black/10" />

          <div className="flex flex-col gap-10 sm:gap-14 reveal-stagger">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Left Column (Desktop: Company & Period) */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${
                      isEven ? "md:items-end md:text-right" : "md:order-2 md:items-start md:text-left"
                    }`}
                  >
                    <span className="text-xs font-mono font-semibold text-[#709819] uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111111] mt-0.5">
                      {item.company}
                    </h3>
                    <span className="text-xs text-[#666666] font-medium">
                      {item.location}
                    </span>
                  </div>

                  {/* Central Node Marker */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#111111] shadow-xs items-center justify-center z-10 transition-transform hover:scale-125 duration-300">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#B7F34A]" />
                  </div>

                  {/* Right Column (Desktop: Role & Responsibilities Card) */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl border border-black/10 shadow-xs hover:shadow-lg card-hover-lift">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-[#709819]" />
                        <h4 className="text-base font-bold text-[#111111]">
                          {item.role}
                        </h4>
                      </div>

                      <ul className="flex flex-col gap-2">
                        {item.focus.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#555555]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#709819] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight Bar */}
        <div className="mt-20 max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-black/10 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#B7F34A]/30 text-[#3d5a06] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#111111]">
                Academic Background
              </h3>
              <p className="text-xs text-[#666666]">
                Business management foundations applied to marketing strategy
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#F7F7F4] p-4 rounded-xl border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#709819] font-semibold">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-bold text-[#111111] mt-1">
                    {edu.degree}
                  </h4>
                </div>
                <span className="text-xs text-[#666666] mt-2 font-medium">
                  {edu.institution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
