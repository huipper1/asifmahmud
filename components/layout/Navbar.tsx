"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg ${
          scrolled
            ? "bg-[#0B0D0E]/95 backdrop-blur-md border border-white/15 shadow-black/20"
            : "bg-[#0B0D0E]/90 backdrop-blur-sm border border-white/10"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-heading font-bold text-base sm:text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#B7F34A] shadow-xs shrink-0">
            <Image
              src="/asif-mahmud.png"
              alt="Asif Mahmud"
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </div>
          <span className="flex items-center gap-1.5">
            Asif Mahmud
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] inline-block animate-pulse" />
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-3 py-1 border border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) && !link.href.includes("#");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-[#B7F34A] text-[#0B0D0E] font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href={WHATSAPP_URL}
            isExternal
            size="sm"
            variant="primary"
            className="hidden sm:inline-flex text-xs font-semibold py-2 px-4 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 md:hidden bg-[#0B0D0E] border border-white/15 rounded-3xl p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Button
                variant="whatsapp"
                size="md"
                className="w-full text-center"
              >
                WhatsApp Inquiry
              </Button>
              <Button
                variant="email"
                size="md"
                className="w-full text-center"
              >
                Email Directly
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
