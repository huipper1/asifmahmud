export interface MonthlyPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  popular?: boolean;
  description: string;
  badge?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface ProjectSetupItem {
  id: string;
  name: string;
  price: number;
  description: string;
  deliverables: string[];
}

export interface ProjectPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  originalPrice?: number;
  discount?: number;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  notes?: string;
  ctaText: string;
  whatsappMessage: string;
}

export const monthlyPlans: MonthlyPlan[] = [
  {
    id: "meta-monthly",
    name: "Facebook & Instagram Ads Management",
    price: 500,
    period: "/month",
    description: "End-to-end campaign scaling, creative iteration, and high-converting retargeting loops.",
    features: [
      "Campaign setup & continuous management",
      "In-depth audience & competitor research",
      "Full-funnel custom retargeting",
      "Dynamic creative & hook testing",
      "Weekly bid & budget optimization",
      "Meta Pixel & CAPI telemetry monitoring",
      "Monthly executive performance reporting",
    ],
    ctaText: "Start Meta Management",
    whatsappMessage: "Hi Asif, I am interested in the Facebook & Instagram Ads Management ($500/month) plan.",
  },
  {
    id: "bundle-monthly",
    name: "Google + Meta Ads Management",
    price: 950,
    period: "/month",
    popular: true,
    badge: "Best Value · Save $150/mo",
    description: "The complete multi-channel growth engine. Unified strategy capturing search intent and social demand.",
    features: [
      "Includes BOTH Google Ads + Meta Ads management",
      "Unified cross-channel attribution strategy",
      "Cross-platform retargeting (Search → Meta & Meta → Search)",
      "Continuous keyword & search term pruning",
      "Creative iteration, copy variants & RSAs",
      "Pixel, CAPI & GA4 tracking oversight",
      "Bi-weekly check-ins & monthly executive dashboard",
    ],
    ctaText: "Claim Dual-Channel Bundle",
    whatsappMessage: "Hi Asif, I want to discuss the Google + Meta Ads Management ($950/month) bundle for my business.",
  },
  {
    id: "google-monthly",
    name: "Google Ads Management",
    price: 600,
    period: "/month",
    description: "Capturing high-intent buyers searching actively for your services or products with zero budget bleed.",
    features: [
      "Full Google Search & Display campaign management",
      "Granular keyword research & STAG clustering",
      "Responsive Search Ad (RSA) copy testing",
      "Negative keyword harvesting & pruning",
      "Conversion tracking & tag health monitoring",
      "Smart bidding (tCPA/ROAS) optimization",
      "Monthly comprehensive performance reporting",
    ],
    ctaText: "Start Google Management",
    whatsappMessage: "Hi Asif, I am interested in the Google Ads Management ($600/month) plan.",
  },
];

export const projectSetups: ProjectSetupItem[] = [
  {
    id: "google-setup",
    name: "Google Ads Account & Campaign Setup",
    price: 450,
    description: "Complete account structuring, campaign launch architecture, ad groups, and keyword clusters.",
    deliverables: ["Account architecture", "Keyword clustering", "Ad copy creation", "Negative keyword list"],
  },
  {
    id: "meta-setup",
    name: "Facebook & Instagram Ads Setup",
    price: 350,
    description: "Full Meta Business Manager & Ads Manager setup with Cold, Warm, and Hot audience tiers.",
    deliverables: ["BM setup", "Custom & lookalike audiences", "Campaign structure", "Initial creative setup"],
  },
  {
    id: "google-tracking-setup",
    name: "Google Ads Conversion Tracking Setup",
    price: 250,
    description: "Flawless tracking of form leads, phone calls, and purchase conversions linked directly to Google Ads.",
    deliverables: ["Conversion action setup", "GTM tag configuration", "Call tracking setup", "Enhanced conversions"],
  },
  {
    id: "meta-pixel-capi-setup",
    name: "Meta Pixel & Conversion API (CAPI) Setup",
    price: 500,
    description: "Robust browser Pixel + Server-Side CAPI tracking ensuring 100% event data matches and zero signal loss.",
    deliverables: ["Server-side CAPI deployment", "Domain verification", "Aggregated event measurement", "Deduplication"],
  },
];

export const projectPackages: ProjectPackage[] = [
  {
    id: "analytics-package",
    name: "One-Time Tracking & Analytics Project",
    originalPrice: 2800,
    discount: 900,
    price: 1900,
    badge: "Save US$900",
    tagline: "Total Value: US$2,800 · Package Discount: US$900",
    description:
      "A complete overhaul and deployment of your data foundation: GA4, Google Tag Manager, Server-Side Meta CAPI, and custom funnel reporting.",
    features: [
      "Full Google Analytics 4 (GA4) property configuration",
      "Google Tag Manager (GTM) web & server container architecture",
      "Server-side Meta Conversions API (CAPI) implementation",
      "Standard & custom e-commerce / lead generation event tracking",
      "Cross-domain & sub-domain measurement validation",
      "UTM governance and naming taxonomy documentation",
      "Custom Looker Studio executive dashboard",
    ],
    notes: "Ongoing server hosting: approximately US$100–150/month, depending on traffic and hosting plan.",
    ctaText: "Get Tracking Architecture",
    whatsappMessage: "Hi Asif, I would like to book the One-Time Tracking & Analytics Project ($1,900).",
  },
  {
    id: "complete-full-bundle",
    name: "Complete Tracking + Paid Ads Setup",
    popular: true,
    badge: "Ultimate Turnkey Package",
    price: 2700,
    tagline: "Tracking ($1,900) + Paid Ads Setup ($800 instead of $1,550)",
    description:
      "The complete full-stack launchpad: enterprise-grade tracking and measurement combined with turnkey Google and Meta Ads account setups.",
    features: [
      "Everything in One-Time Tracking & Analytics Project ($1,900 value)",
      "Google Ads Account & Campaign Setup included ($450 value)",
      "Facebook & Instagram Ads Setup included ($350 value)",
      "Google Ads Conversion Tracking Setup included ($250 value)",
      "Meta Pixel & Server CAPI Setup included ($500 value)",
      "Full pre-launch audit & conversion validation before going live",
      "14 days of post-launch hypercare monitoring",
    ],
    notes: "Client pays ad spend directly to Google/Meta. Server hosting: approx. US$100–150/mo depending on traffic.",
    ctaText: "Get Complete Turnkey Setup",
    whatsappMessage: "Hi Asif, I want to book the Complete Tracking + Paid Ads Setup Bundle ($2,700).",
  },
];
