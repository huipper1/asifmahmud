import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MetaDashboard } from "@/components/demos/MetaDashboard";
import { GoogleSearchDemo } from "@/components/demos/GoogleSearchDemo";
import { AnalyticsDashboard } from "@/components/demos/AnalyticsDashboard";
import { ConversionFunnel } from "@/components/demos/ConversionFunnel";
import { Industries } from "@/components/home/Industries";
import { Pricing } from "@/components/home/Pricing";
import { ContactCTA } from "@/components/home/ContactCTA";
import { WHATSAPP_URL } from "@/lib/constants";
import { CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Asif Mahmud - Performance Marketing",
  description:
    "Comprehensive breakdown of performance marketing services: Meta / Facebook Ads, Google Search Ads, GA4 & GTM tracking architecture, and growth strategy.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Services Hero */}
      <section className="py-16 sm:py-20 bg-[#F7F7F4] border-b border-black/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-black/10 shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#709819]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                Full-Funnel Capabilities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] leading-tight font-heading">
              Strategic Services Built for{" "}
              <span className="text-[#54790a] underline decoration-[#B7F34A]">Measurable ROI</span>
            </h1>

            <p className="text-base sm:text-lg text-[#555555] mt-5 leading-relaxed">
              Every channel in your growth engine must connect seamlessly: from cold audience acquisition and high-intent search capture, to server-side event tracking and conversion rate optimization.
            </p>

            <div className="flex items-center justify-center gap-3 mt-8">
              <Button href="#meta-ads" variant="primary" size="md">
                Explore Meta Ads
              </Button>
              <Button href={WHATSAPP_URL} isExternal variant="secondary" size="md">
                Schedule Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service 1: Meta / Facebook Ads */}
      <section id="meta-ads" className="py-20 bg-[#FFFFFF] border-b border-black/5 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <SectionTitle
                number="01"
                badge="Paid Acquisition"
                title="Meta / Facebook &amp; Instagram Advertising"
                accentText="Meta / Facebook"
                subtitle="Scaling revenue with systematic creative testing, Advantage+ campaigns, and deep retargeting funnels."
              />

              <div className="flex flex-col gap-2.5 mt-2">
                {[
                  "Account & Pixel / Conversions API (CAPI) Architecture",
                  "Cold Audience Prospecting: Broad, Interest & Custom Lookalikes",
                  "Dynamic Creative Iterations (Video UGC, Hooks, Carousels)",
                  "Custom Funnel Retargeting (View Content, Cart Abandoners, Engagers)",
                  "Budget Scaling: CBO vs ABO with Target CPA Bidding",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#709819] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} isExternal variant="primary" size="md" withArrow>
                  Discuss Meta Strategy
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MetaDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* Service 2: Google Ads */}
      <section id="google-ads" className="py-20 bg-[#F7F7F4] border-b border-black/5 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <GoogleSearchDemo />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5 order-1 lg:order-2">
              <SectionTitle
                number="02"
                badge="Search Intent"
                title="Google Ads &amp; High-Intent Search"
                accentText="Google Ads"
                subtitle="Intercept high-intent prospects precisely when they are actively searching for your service or product."
              />

              <div className="flex flex-col gap-2.5 mt-2">
                {[
                  "Granular Single-Themed Ad Groups (STAGs) & Exact Match Clustering",
                  "Negative Keyword Lists to prevent budget bleed on irrelevant searches",
                  "Responsive Search Ads (RSAs) optimized for 9+/10 Quality Scores",
                  "Call Extensions, Sitelinks, and Structured Snippets for high CTR",
                  "Smart Bidding alignment with Target CPA and Maximize Conversions",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#709819] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} isExternal variant="primary" size="md" withArrow>
                  Discuss Google Search Strategy
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service 3: GA4 & GTM Tracking */}
      <section id="analytics" className="py-20 bg-[#FFFFFF] border-b border-black/5 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <SectionTitle
                number="03"
                badge="Attribution Engineering"
                title="Google Analytics 4 &amp; GTM Tracking"
                accentText="Google Analytics 4"
                subtitle="Eliminate attribution blind spots. Know exactly which creative, keyword, and channel generated profit."
              />

              <div className="flex flex-col gap-2.5 mt-2">
                {[
                  "Google Tag Manager (GTM) Web & Server-Side Container Deployment",
                  "GA4 Recommended & Custom E-Commerce / Lead Events",
                  "UTM Parameter Naming Conventions & URL Builder Standardization",
                  "Cross-Domain & Sub-domain Tracking with Cookie Consent Compliance",
                  "Looker Studio Performance Dashboards for Executive Visibility",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#709819] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} isExternal variant="primary" size="md" withArrow>
                  Audit My Tracking Setup
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AnalyticsDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* Service 4: Social Media & Content Funnel */}
      <section id="social-media" className="py-20 bg-[#F7F7F4] border-b border-black/5 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ConversionFunnel />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5 order-1 lg:order-2">
              <SectionTitle
                number="04"
                badge="Organic & Paid Synergy"
                title="Social Media Marketing &amp; Content Architecture"
                accentText="Social Media"
                subtitle="Content that builds authentic trust, nurtures leads, and creates warm audiences primed for conversion."
              />

              <div className="flex flex-col gap-2.5 mt-2">
                {[
                  "Content Pillars: Authority, Proof, Product Demonstration & Conversion",
                  "Multi-Platform Distribution: Instagram Reels, Facebook & YouTube Shorts",
                  "Active Community Management & Inbound DM Conversion Routing",
                  "Paid Boosting Strategy for High-Performing Organic Content",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#709819] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} isExternal variant="primary" size="md" withArrow>
                  Discuss Content Strategy
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vertical Industries Matrix */}
      <Industries />

      {/* Pricing Breakdown */}
      <Pricing />

      {/* Bottom CTA */}
      <ContactCTA />
    </div>
  );
}
