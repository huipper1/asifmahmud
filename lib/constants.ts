export const WHATSAPP_NUMBER = "8801605863987";
export const WHATSAPP_MESSAGE =
  "Hi Asif, I came across your portfolio and would like to discuss digital marketing for my business.";
export const EMAIL = "iamasifmahmud13@gmail.com";
export const EMAIL_SUBJECT = "Digital Marketing Project Inquiry";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

export const SITE_NAME = "Asif Mahmud";
export const SITE_TITLE = "Asif Mahmud | Digital Marketing & Performance Ads Specialist";
export const SITE_DESCRIPTION =
  "Digital marketing specialist focused on Facebook Ads, Google Ads, tracking, analytics, social media marketing and performance-driven growth strategies.";
export const SITE_URL = "https://asifmahmud.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
];

export const CAPABILITIES = [
  "Facebook Ads",
  "Google Ads",
  "GA4",
  "Google Tag Manager",
  "Conversion Tracking",
  "Social Media",
  "YouTube SEO",
  "Meta Pixel",
  "UTM Tracking",
  "Retargeting",
  "Analytics",
  "Growth Strategy",
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    items: [
      "Business goals",
      "Offer & positioning",
      "Target audience",
      "Customer journey",
      "Existing data",
    ],
  },
  {
    number: "02",
    title: "Research",
    items: [
      "Market analysis",
      "Competitor research",
      "Keyword opportunities",
      "Audience behavior",
      "Campaign opportunities",
    ],
  },
  {
    number: "03",
    title: "Build",
    items: [
      "Campaign structure",
      "Creative strategy",
      "Ad setup",
      "Tracking implementation",
      "Funnel design",
    ],
  },
  {
    number: "04",
    title: "Launch",
    items: [
      "Campaign activation",
      "Analytics validation",
      "Conversion validation",
      "Initial monitoring",
    ],
  },
  {
    number: "05",
    title: "Measure",
    items: ["CTR & CPC", "CPA & Conversions", "ROAS & Revenue", "Attribution"],
  },
  {
    number: "06",
    title: "Optimize",
    items: [
      "Audience refinement",
      "Creative iteration",
      "Keyword optimization",
      "Budget allocation",
      "Funnel improvement",
    ],
  },
];

export const skills = {
  "Paid Acquisition": [
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Google Ads",
    "Search Advertising",
    "Retargeting",
  ],
  Analytics: [
    "GA4",
    "Google Tag Manager",
    "Meta Pixel",
    "UTM Tracking",
    "Conversion Tracking",
    "Campaign Reporting",
  ],
  Marketing: [
    "Digital Strategy",
    "Audience Research",
    "Competitor Research",
    "Social Media Management",
    "Branding",
    "Campaign Optimization",
  ],
  Content: [
    "YouTube SEO",
    "Content Strategy",
    "Ad Copywriting",
    "Creative Strategy",
  ],
};
