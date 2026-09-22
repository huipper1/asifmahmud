import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_URL, EMAIL_URL, EMAIL } from "@/lib/constants";
import { ArrowUpRight, MessageSquare, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0D0E] text-white pt-16 pb-12 border-t border-white/10">
      <Container>
        {/* Top Callout Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7F34A]">
              Next Step
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Ready to grow your revenue with performance marketing?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={WHATSAPP_URL}
              isExternal
              variant="primary"
              size="md"
              withArrow
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={EMAIL_URL}
              isExternal
              variant="secondary"
              size="md"
            >
              Email Asif
            </Button>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white font-heading font-bold text-xl tracking-tight"
            >
              <span className="w-8 h-8 rounded-full bg-[#B7F34A] text-[#0B0D0E] flex items-center justify-center font-extrabold text-sm">
                A
              </span>
              <span>Asif Mahmud</span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Performance Advertising &amp; Digital Marketing Specialist. Helping e-commerce,
              startups, and local enterprises acquire customers efficiently through Meta Ads,
              Google Ads, and precision GA4 tracking.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#B7F34A] font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-[#B7F34A] inline-block animate-ping" />
              <span>Available for selected consulting &amp; campaign management</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white/50 mb-1">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-[#B7F34A] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white/50 mb-1">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-[#B7F34A] text-sm transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-[#B7F34A]" />
                <span>+880 1605 863987</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={EMAIL_URL}
                className="flex items-center gap-2.5 text-white/80 hover:text-[#B7F34A] text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#B7F34A]" />
                <span>{EMAIL}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-xs text-white/40 pt-2 leading-relaxed">
                Dhaka, Bangladesh · Serving clients worldwide across all timezones.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Asif Mahmud. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Performance &amp; Campaign Architecture · Illustrative demo data shown for showcase purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
