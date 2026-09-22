"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { TrendingUp, Sparkles, CheckCircle, ShieldCheck, Target } from "lucide-react";
import { registerGSAP } from "@/lib/animations";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = registerGSAP();
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade-in", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".hero-badge-float", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.4)",
        delay: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#F7F7F4]"
    >
      {/* Subtle background glow/patterns */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B7F34A]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        {/* Top Hello Badge */}
        <div className="flex justify-center mb-5 hero-fade-in">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-black/10 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#709819] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
              Available for Q3/Q4 Projects
              <Sparkles className="w-3.5 h-3.5 text-[#709819]" />
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto hero-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.1]">
            I&apos;m{" "}
            <span className="relative inline-block text-[#111111]">
              <span className="relative z-10 text-[#54790a] underline decoration-[#B7F34A] decoration-wavy decoration-2">
                Asif Mahmud
              </span>
            </span>
            ,
            <br />
            <span className="text-[#111111]">Digital Marketing &amp;</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#111111] via-[#333333] to-[#555555]">
              Performance Ads Specialist
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mt-5 leading-relaxed font-body">
            Helping e-commerce brands, high-ticket services, and scaling startups drive measurable revenue through{" "}
            <strong className="text-[#111111] font-semibold">Meta Ads</strong>,{" "}
            <strong className="text-[#111111] font-semibold">Google Search Campaigns</strong>, and{" "}
            <strong className="text-[#111111] font-semibold">Server-Side GA4/GTM Attribution</strong>.
          </p>
        </div>

        {/* Triple Column Reference Style: Left Quote / Center Visual / Right Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Philosophy Box */}
          <div className="lg:col-span-3 flex flex-col gap-4 hero-fade-in order-2 lg:order-1">
            <div className="bg-white p-5 rounded-2xl border border-black/10 shadow-xs">
              <span className="text-3xl font-serif text-[#709819] leading-none select-none">
                “
              </span>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mt-1">
                Every marketing dollar must be accountable. With disciplined testing and conversion tracking, paid traffic becomes a predictable growth engine.
              </p>
              <div className="mt-3 pt-3 border-t border-black/5 flex items-center gap-2">
                <span className="text-xs font-bold text-[#111111]">Performance First</span>
                <span className="text-xs text-black/30">·</span>
                <span className="text-xs text-[#709819] font-medium">Zero Waste</span>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-xl border border-black/5 flex items-center justify-between">
              <div>
                <div className="text-2xl font-black font-heading text-[#111111]">100+</div>
                <div className="text-xs text-[#666666] font-medium">Campaigns Executed</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#B7F34A]/30 flex items-center justify-center text-[#3b5505]">
                <Target className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Center Visual Mockup with Arch Frame */}
          <div className="lg:col-span-6 flex flex-col items-center hero-fade-in order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              {/* Reference style Arch backdrop */}
              <div className="relative mx-auto w-full aspect-[4/4.5] rounded-t-full bg-gradient-to-b from-[#B7F34A] via-[#a3e22f] to-[#88c918] p-4 pt-6 shadow-2xl flex flex-col justify-between overflow-hidden border-4 border-white">
                {/* Floating metric chips on the arch */}
                <div className="flex justify-between items-center w-full z-20 hero-float">
                  <span className="bg-[#0B0D0E]/90 backdrop-blur-md text-white text-[11px] font-mono px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10 card-hover-lift">
                    <TrendingUp className="w-3.5 h-3.5 text-[#B7F34A]" /> ROAS 4.82x
                  </span>
                  <span className="bg-white/95 backdrop-blur-md text-[#111111] text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-black/5 card-hover-lift">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#426107]" /> GA4 Verified
                  </span>
                </div>

                {/* Asif Mahmud Photo inside the Arch */}
                <div className="relative flex-1 flex items-end justify-center w-full z-10">
                  <div className="relative w-[300px] h-[340px] sm:w-[340px] sm:h-[380px]">
                    <Image
                      src="/asif-mahmud.png"
                      alt="Asif Mahmud - Performance Marketing Specialist"
                      fill
                      sizes="(max-width: 768px) 300px, 340px"
                      className="object-cover object-top rounded-t-full drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                {/* Bottom Floating Pill in Arch */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                  <span className="text-xs font-bold text-[#0B0D0E] uppercase tracking-wider bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-black/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#709819] animate-pulse" />
                    Enterprise Sales Officer · Banglalink
                  </span>
                </div>
              </div>

              {/* Dual Action Buttons under the Arch */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <Button
                  href="#work"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="shadow-md"
                >
                  Explore Work
                </Button>
                <Button
                  href={WHATSAPP_URL}
                  isExternal
                  variant="secondary"
                  size="lg"
                  className="bg-white border border-black/10 text-[#111111]"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>

          {/* Right Stats & Credentials Box */}
          <div className="lg:col-span-3 flex flex-col gap-4 hero-fade-in order-3">
            <div className="bg-white p-5 rounded-2xl border border-black/10 shadow-xs">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-base">{star}</span>
                ))}
              </div>
              <div className="text-2xl font-black font-heading text-[#111111]">
                4+ Years
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#555555] mt-0.5">
                Hands-On Marketing Experience
              </div>
              <p className="text-xs text-[#777777] mt-2 leading-relaxed">
                Proven track record across leading telecom (Banglalink), retail e-commerce (China Jewellery), and agency campaigns.
              </p>
            </div>

            <div className="bg-white/70 p-4 rounded-xl border border-black/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#709819]" />
                <span>Meta Ads Manager Expert</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#709819]" />
                <span>Google Search &amp; Display</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#709819]" />
                <span>GA4 &amp; GTM Tracking Setup</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
