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
    id: "dental-medical",
    name: "Dental / Medical Clinics",
    emoji: "🦷",
    examples: ["Dental Practices", "Orthodontics", "Specialist Clinics", "Primary Care"],
    channels: ["Google Search Ads", "Local Targeting", "Call Tracking", "Meta Ads"],
    relevantSkills: [
      "Local Healthcare Targeting",
      "High-Intent Search",
      "Call Conversion Tracking",
      "Appointment Bookings",
      "GA4 Healthcare Funnels",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "law-firms",
    name: "Law Firms",
    emoji: "⚖️",
    examples: ["Personal Injury", "Family Law", "Corporate & Business", "Immigration"],
    channels: ["Google Search", "Call Tracking", "High-Intent Retargeting", "Lead Forms"],
    relevantSkills: [
      "High-CPC Search Optimization",
      "Negative Keyword Scrubbing",
      "Call & Lead Tracking",
      "Client Intake Funnels",
      "Geo-Radius Targeting",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: false },
  },
  {
    id: "hvac-plumbing",
    name: "HVAC / Plumbing",
    emoji: "🔧",
    examples: ["Emergency AC Repair", "Heating & Furnaces", "Residential Plumbing", "Drain Cleaning"],
    channels: ["Google Search", "Local Services Ads", "Call Tracking", "Meta Retargeting"],
    relevantSkills: [
      "Emergency Search Campaigns",
      "Radius Geo-Fencing",
      "Pay-Per-Call Attribution",
      "Seasonal Demand Timing",
      "Lead Form Tracking",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "real-estate",
    name: "Real Estate Agents",
    emoji: "🏠",
    examples: ["Luxury Home Sales", "Buyer & Seller Leads", "Commercial Brokers", "Property Investors"],
    channels: ["Meta Lead Ads", "Google Search", "WhatsApp / SMS Inquiries", "Dynamic Retargeting"],
    relevantSkills: [
      "Meta Lead Forms",
      "Hyper-Local Zip Code Targeting",
      "Google High-Intent Search",
      "Lead Qualification Tracking",
      "Property Showcase Ads",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "med-spa",
    name: "Med Spa / Aesthetic Clinics",
    emoji: "💉",
    examples: ["Botox & Fillers", "Laser Hair Removal", "Body Contouring", "Skincare Treatments"],
    channels: ["Instagram & Meta Ads", "Google Search", "Visual Creative Testing", "Booking Tracking"],
    relevantSkills: [
      "Visual Creative Production",
      "High-Income Audience Targeting",
      "Consultation Booking Tracking",
      "Retargeting Offers",
      "VIP Lead Funnels",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "home-renovation",
    name: "Home Renovation / Remodeling",
    emoji: "🔨",
    examples: ["Kitchen Remodeling", "Bathroom Makeovers", "Roofing & Siding", "Custom Additions"],
    channels: ["Google Search", "Meta Showcase Ads", "Quote Request Tracking", "Local Retargeting"],
    relevantSkills: [
      "High-Ticket Quote Lead Funnels",
      "Before/After Creative Testing",
      "Search Intent Filtering",
      "GTM Quote Submission Tracking",
      "Geo-Radius Targeting",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "solar",
    name: "Solar Panel Installers",
    emoji: "☀️",
    examples: ["Residential Solar", "Commercial Rooftop", "Battery Backup Storage", "Zero-Down Financing"],
    channels: ["Meta Quiz Funnels", "Google Search", "Multi-Step Lead Tracking", "Retargeting"],
    relevantSkills: [
      "High-Volume Lead Acquisition",
      "Multi-Step Qualification Funnels",
      "GA4 Form Drop-Off Tracking",
      "Zip-Code Targeting",
      "Negative Keyword Management",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
  {
    id: "auto-repair",
    name: "Auto Repair / Detailing",
    emoji: "🚗",
    examples: ["Transmission & Brake Repair", "Ceramic Coating", "Paint Protection Film", "Collision Centers"],
    channels: ["Google Local Search", "Meta Video Ads", "Call Tracking", "Location Ads"],
    relevantSkills: [
      "Local Intent Search Ads",
      "Call & Directions Tracking",
      "Instagram Video Demos",
      "Customer Retention Retargeting",
      "Review Generation Ads",
    ],
    matrix: { metaAds: true, googleAds: true, tracking: true, socialMedia: true },
  },
];
