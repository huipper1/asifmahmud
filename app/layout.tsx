import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Digital Marketing Specialist",
    "Performance Marketing",
    "Facebook Ads Expert",
    "Google Ads Specialist",
    "GA4 Tracking",
    "Google Tag Manager",
    "Conversion API",
    "ROAS Optimization",
    "Social Media Marketing",
    "Asif Mahmud",
  ],
  authors: [{ name: "Asif Mahmud", url: SITE_URL }],
  creator: "Asif Mahmud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asif Mahmud",
    jobTitle: "Digital Marketing & Performance Ads Specialist",
    url: SITE_URL,
    sameAs: [
      "https://wa.me/8801605863987",
      "mailto:iamasifmahmud13@gmail.com",
    ],
    knowsAbout: [
      "Performance Marketing",
      "Meta Ads",
      "Facebook Advertising",
      "Google Ads",
      "Google Analytics 4",
      "Google Tag Manager",
      "Conversion Rate Optimization",
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F7F4] text-[#111111] antialiased selection:bg-[#B7F34A] selection:text-[#0B0D0E]">
        <SmoothScroll />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
