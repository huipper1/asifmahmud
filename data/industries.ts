export interface Industry {
  id: string;
  name: string;
  emoji: string;
  examples?: string[];
  channels: string[];
  relevantSkills: string[];
  matrix: {
    metaAds: boolean;
    googleAds: boolean;
    tracking: boolean;
    socialMedia: boolean;
  };
}

export const industries: Industry[] = [
  {
    id: "ecommerce",
    name: "E-commerce",
    emoji: "🛒",
    channels: ["Meta Ads", "Google Ads", "Retargeting", "Analytics"],
    relevantSkills: [
      "Meta Ads",
      "Google Shopping / Search",
      "Retargeting",
      "Analytics",
      "Purchase Tracking",
      "Conversion Optimization",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "real-estate",
    name: "Real Estate",
    emoji: "🏠",
    channels: ["Meta Ads", "Google Ads", "Lead Tracking", "WhatsApp Leads"],
    relevantSkills: [
      "Lead Campaigns",
      "Location Targeting",
      "Google Search Ads",
      "WhatsApp Leads",
      "Lead Tracking",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "local-business",
    name: "Local Businesses",
    emoji: "📍",
    examples: ["Restaurants", "Salons", "Gyms", "Repair Companies"],
    channels: ["Local Targeting", "Google Ads", "Lead Generation", "Remarketing"],
    relevantSkills: [
      "Local Targeting",
      "Google Ads",
      "Lead Generation",
      "Call Tracking",
      "Remarketing",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "education",
    name: "Education",
    emoji: "🎓",
    examples: ["Schools", "Training Institutions", "Online Courses", "EdTech"],
    channels: ["Facebook Campaigns", "YouTube Marketing", "Search Ads"],
    relevantSkills: [
      "Lead Generation",
      "Facebook Campaigns",
      "YouTube Marketing",
      "Search Advertising",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "fashion",
    name: "Fashion & Jewellery",
    emoji: "💎",
    channels: ["Meta Ads", "Instagram Marketing", "Creative Testing", "Remarketing"],
    relevantSkills: [
      "Meta Ads",
      "Instagram Marketing",
      "Creative Testing",
      "Remarketing",
      "E-commerce Campaigns",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    emoji: "💻",
    channels: ["Google Search", "Lead Funnels", "Retargeting", "Analytics"],
    relevantSkills: [
      "Google Search Ads",
      "Lead Funnels",
      "Retargeting",
      "Analytics",
      "Conversion Tracking",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: false },
  },
  {
    id: "automotive",
    name: "Automotive",
    emoji: "🚗",
    channels: ["Meta Ads", "Google Search", "Location Advertising", "Remarketing"],
    relevantSkills: [
      "Lead Campaigns",
      "Location Advertising",
      "Google Search",
      "Facebook Lead Forms",
      "Remarketing",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    emoji: "🏥",
    channels: ["Local Targeting", "Search Campaigns", "Analytics"],
    relevantSkills: [
      "Local Targeting",
      "Search Campaigns",
      "Appointment Acquisition",
      "Analytics",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    emoji: "✈️",
    channels: ["Google Search", "Meta Campaigns", "Retargeting", "Seasonal Campaigns"],
    relevantSkills: [
      "Google Search",
      "Meta Campaigns",
      "Retargeting",
      "Seasonal Campaigns",
      "Conversion Analytics",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
];
