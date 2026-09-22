export interface CaseStudy {
  id: string;
  category: "Meta Ads" | "Google Ads" | "Tracking & Analytics" | "Social Media";
  title: string;
  tagline: string;
  description: string;
  clientType: string;
  objective: string;
  highlights: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  tags: string[];
  demoType: "meta" | "google" | "analytics" | "funnel";
  illustrativeNote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "meta-ecom-scale",
    category: "Meta Ads",
    title: "E-Commerce Fashion Scaling Campaign",
    tagline: "Optimized multi-tier funnel with lookalike audience and dynamic creative testing",
    description:
      "A complete Meta Ads campaign framework designed to lower Cost Per Acquisition (CPA) and maximize Return on Ad Spend (ROAS) using catalog ads, high-intent interest targeting, and automated retargeting.",
    clientType: "Fashion & Lifestyle E-Commerce",
    objective: "Scalable Customer Acquisition & ROAS Boost",
    highlights: [
      { label: "ROAS", value: "4.8x", sublabel: "Target: 3.0x" },
      { label: "CPA Reduction", value: "-34%", sublabel: "Over 60 days" },
      { label: "Add to Cart Rate", value: "8.4%", sublabel: "Funnel benchmark" },
      { label: "Monthly Spend Managed", value: "$12,500+", sublabel: "Optimized budget" },
    ],
    tags: ["Meta Ads Manager", "CBO Strategy", "Custom Audiences", "Dynamic Creative", "Pixel CAPI"],
    demoType: "meta",
    illustrativeNote: "Demo Campaign / Illustrative Data based on typical e-commerce campaign architecture.",
  },
  {
    id: "google-search-leads",
    category: "Google Ads",
    title: "High-Intent Google Search Lead Funnel",
    tagline: "Granular keyword clustering with negative keyword pruning & automated bid bidding",
    description:
      "Capturing purchase-ready searches with precision-matched ad copy, high Quality Scores, and high-converting landing page click-to-call flows for high-ticket service inquiries.",
    clientType: "Real Estate & Professional Services",
    objective: "Qualified Lead Generation with Minimal Waste",
    highlights: [
      { label: "Avg CTR", value: "8.6%", sublabel: "Industry avg: 3.1%" },
      { label: "Cost Per Lead", value: "$18.20", sublabel: "Down from $35.00" },
      { label: "Quality Score", value: "9/10", sublabel: "Top ad rank" },
      { label: "Conversion Rate", value: "14.2%", sublabel: "Search to inquiry" },
    ],
    tags: ["Google Search Ads", "Exact Match", "Negative Keywords", "Call Tracking", "Smart Bidding"],
    demoType: "google",
    illustrativeNote: "Demo Campaign / Illustrative Data representing search intent and lead generation funnel.",
  },
  {
    id: "ga4-gtm-attribution",
    category: "Tracking & Analytics",
    title: "Full-Funnel GA4 & Server-Side GTM Setup",
    tagline: "End-to-end event measurement, UTM parameter discipline, and custom attribution models",
    description:
      "Eliminating attribution blind spots with Google Tag Manager, custom event tracking (Form Submits, Scroll Depths, Button Clicks), and GA4 Exploration funnels to prove campaign ROI.",
    clientType: "Multi-Channel Digital Brand",
    objective: "Accurate Measurement & Attribution Integrity",
    highlights: [
      { label: "Tracked Events", value: "100%", sublabel: "Zero tracking loss" },
      { label: "Attributed Revenue", value: "$148K+", sublabel: "Accurate sourcing" },
      { label: "Data Discrepancy", value: "< 2%", sublabel: "Meta vs GA4 alignment" },
      { label: "Custom Dashboards", value: "5 Reports", sublabel: "Stakeholder ready" },
    ],
    tags: ["Google Analytics 4", "Google Tag Manager", "UTM Tracking", "Conversion API", "Looker Studio"],
    demoType: "analytics",
    illustrativeNote: "Demo Campaign / Illustrative Data showcasing tracking architecture and event verification.",
  },
  {
    id: "social-content-funnel",
    category: "Social Media",
    title: "Multi-Channel Content & Engagement Growth",
    tagline: "Structured content calendar, audience interaction loops, and viral organic reach",
    description:
      "Cohesive brand positioning through daily scheduled content pillars, community management, and paid boost integrations that convert followers into active brand advocates.",
    clientType: "Retail Jewellery & Consumer Tech",
    objective: "Organic Brand Awareness & Community Building",
    highlights: [
      { label: "Engagement Rate", value: "6.2%", sublabel: "3x industry standard" },
      { label: "Audience Growth", value: "+210%", sublabel: "Organic expansion" },
      { label: "Video Views", value: "350K+", sublabel: "Short-form video" },
      { label: "Inbound DMs", value: "85/wk", sublabel: "Direct purchase inquiries" },
    ],
    tags: ["Social Media Strategy", "Content Calendar", "Community Engagement", "YouTube SEO", "Reels & Shorts"],
    demoType: "funnel",
    illustrativeNote: "Demo Campaign / Illustrative Data demonstrating content strategy and conversion pipeline.",
  },
];
