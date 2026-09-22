export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "meta-ads",
    number: "01",
    title: "Meta / Facebook Ads",
    description:
      "Campaign strategy, audience targeting, creative testing, retargeting and optimization designed around measurable objectives.",
    capabilities: [
      "Campaign Setup",
      "Audience Research",
      "Lead Generation",
      "Retargeting",
      "Creative Testing",
      "Pixel Events",
      "Campaign Optimization",
    ],
    icon: "facebook",
  },
  {
    id: "google-ads",
    number: "02",
    title: "Google Ads",
    description:
      "Search-focused advertising designed to reach users with high purchase or inquiry intent.",
    capabilities: [
      "Search Campaigns",
      "Keyword Research",
      "Competitor Research",
      "Negative Keywords",
      "Ad Copy",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    icon: "search",
  },
  {
    id: "analytics",
    number: "03",
    title: "Tracking & Analytics",
    description:
      "Accurate marketing data helps identify where customers come from and which campaigns actually create business results.",
    capabilities: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Meta Pixel",
      "Conversion Events",
      "UTM Tracking",
      "Funnels",
      "Campaign Attribution",
      "Reporting",
    ],
    icon: "bar-chart",
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Marketing",
    description:
      "Strategic content and campaign management to build brand presence and engage the right audience across platforms.",
    capabilities: [
      "Content Strategy",
      "Audience Research",
      "Content Planning",
      "Campaign Strategy",
      "Engagement Analysis",
      "Brand Positioning",
    ],
    icon: "share-2",
  },
  {
    id: "youtube-seo",
    number: "05",
    title: "YouTube SEO",
    description:
      "Optimizing video content for discoverability, search ranking, and organic audience growth on YouTube.",
    capabilities: [
      "Keyword Research",
      "Metadata Optimization",
      "Titles & Descriptions",
      "Tags",
      "Content Optimization",
      "Performance Analysis",
    ],
    icon: "youtube",
  },
  {
    id: "growth-strategy",
    number: "06",
    title: "Growth & Marketing Strategy",
    description:
      "Connecting advertising, data and creative strategy to identify where your next growth opportunities exist.",
    capabilities: [
      "Customer Acquisition",
      "Campaign Planning",
      "Performance Analysis",
      "Funnel Review",
      "Conversion Opportunities",
      "Marketing Recommendations",
    ],
    icon: "trending-up",
  },
];
