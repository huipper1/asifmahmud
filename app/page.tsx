import React from "react";
import { Hero } from "@/components/home/Hero";
import { ExpertiseStrip } from "@/components/home/ExpertiseStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Experience } from "@/components/home/Experience";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Skills } from "@/components/home/Skills";
import { Pricing } from "@/components/home/Pricing";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F4]">
      {/* 1. Hero Section matching reference arch, quotes & stats */}
      <Hero />

      {/* 2. Infinite Marquee Capability Strip */}
      <ExpertiseStrip />

      {/* 3. Services Preview with interactive switcher */}
      <ServicesPreview />

      {/* 4. Experience Timeline matching reference layout */}
      <Experience />

      {/* 5. "Why You Hire Me for Your Next Projects?" Editorial Split */}
      <AboutPreview />

      {/* 6. Portfolio Showcase with Interactive Live Demos */}
      <WorkShowcase />

      {/* 7. 9+ Industries Matrix & Cards */}
      <Industries />

      {/* 8. Transparent Pricing & Investment Packages */}
      <Pricing />

      {/* 9. 6-Step Growth Methodology Framework */}
      <Process />

      {/* 10. Core Competencies & Technical Skills Cloud */}
      <Skills />

      {/* 11. Direct WhatsApp & Email CTA Section */}
      <ContactCTA />
    </main>
  );
}
