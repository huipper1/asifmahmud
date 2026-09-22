"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import {
  MessageSquare,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Building,
  DollarSign,
  Globe,
  User,
  Phone,
} from "lucide-react";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "Google + Meta Ads Management (US$950/mo)",
    budget: "$1,000 – $3,000 / month",
    message: "",
  });

  const [submittedChannel, setSubmittedChannel] = useState<"whatsapp" | "email" | null>(null);

  const servicesList = [
    "Google + Meta Ads Management (US$950/mo)",
    "Facebook & Instagram Ads Management (US$500/mo)",
    "Google Ads Management (US$600/mo)",
    "Complete Tracking + Paid Ads Setup Bundle (US$2,700)",
    "One-Time Tracking & Analytics Project (US$1,900)",
    "Google Ads Setup (US$450)",
    "Meta Ads Setup (US$350)",
    "Meta Pixel + CAPI Setup (US$500)",
    "Google Conversion Tracking Setup (US$250)",
    "Custom Consulting / Full Audit",
  ];

  const budgetList = [
    "Under $1,000 / month",
    "$1,000 – $3,000 / month",
    "$3,000 – $10,000 / month",
    "$10,000+ / month",
    "One-time project setup only",
  ];

  const formatInquiryMessage = () => {
    return `🔥 *New Project Inquiry for Asif Mahmud*

• *Client Name:* ${formData.name || "Not specified"}
• *Email:* ${formData.email || "Not specified"}
• *Phone/WhatsApp:* ${formData.phone || "Not specified"}
• *Business / Website:* ${formData.website || "Not specified"}
• *Selected Service/Plan:* ${formData.service}
• *Ad Spend / Budget:* ${formData.budget}
• *Project Notes / Goals:* ${formData.message || "Ready to discuss scope & audit."}`;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }

    const message = formatInquiryMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmittedChannel("whatsapp");
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }

    const subject = `Project Inquiry from ${formData.name} - ${formData.service}`;
    const body = formatInquiryMessage();
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmittedChannel("email");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0D0E] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B7F34A]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#25D366]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal-fade">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 mb-4 text-xs font-semibold uppercase tracking-wider text-[#B7F34A]">
                <Zap className="w-3.5 h-3.5" />
                <span>Instant Submission to WhatsApp &amp; Email</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
                Have An Awesome Project?{" "}
                <span className="text-[#B7F34A]">Let&apos;s Discuss</span>
              </h2>

              <p className="text-base text-white/70 mt-4 leading-relaxed">
                Fill out the project details on the right. When submitted, your inquiry is directly formatted and sent to my <strong>WhatsApp</strong> (+880 1605 863987) and <strong>Email</strong> ({EMAIL}) for immediate review.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="bg-[#14171A] p-5 rounded-2xl border border-white/10 flex flex-col gap-3.5 card-hover-lift">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                Direct Channels
              </span>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm font-semibold text-white hover:text-[#B7F34A] transition-colors group p-2 rounded-xl bg-white/5 hover:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                  <span>+880 1605 863987</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between text-sm font-semibold text-white hover:text-[#B7F34A] transition-colors group p-2 rounded-xl bg-white/5 hover:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{EMAIL}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Guarantees */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                <Clock className="w-4 h-4 text-[#B7F34A] shrink-0" />
                <span>Fast response (within 2–4 hours during business hours)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#B7F34A] shrink-0" />
                <span>100% Confidentiality &amp; NDA ready</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                <Zap className="w-4 h-4 text-[#B7F34A] shrink-0" />
                <span>Free initial account audit &amp; strategy review</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hire Form */}
          <div className="lg:col-span-7 bg-[#14171A] p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative reveal-fade">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Choose to submit directly via WhatsApp or Email
                </p>
              </div>
              <span className="text-[11px] font-mono bg-[#B7F34A]/20 text-[#B7F34A] border border-[#B7F34A]/40 px-2.5 py-1 rounded-full font-bold">
                DIRECT TO ASIF
              </span>
            </div>

            {submittedChannel && (
              <div className="mb-6 p-4 rounded-2xl bg-[#B7F34A]/15 border border-[#B7F34A]/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B7F34A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">
                    Inquiry Generated for {submittedChannel === "whatsapp" ? "WhatsApp" : "Email"}!
                  </p>
                  <p className="text-white/70 mt-0.5">
                    Your inquiry has been formatted. If your browser didn&apos;t automatically launch the application, you can also use the alternate button below.
                  </p>
                </div>
              </div>
            )}

            <form className="flex flex-col gap-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B7F34A]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-[#B7F34A] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B7F34A]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-[#B7F34A] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone/WhatsApp & Business Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B7F34A]" />
                    <span>Phone / WhatsApp Number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-[#B7F34A] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#B7F34A]" />
                    <span>Website / Store URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-[#B7F34A] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service/Plan Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#B7F34A]" />
                  <span>Service or Package Interested In</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-[#B7F34A] transition-colors cursor-pointer"
                >
                  {servicesList.map((svc, i) => (
                    <option key={i} value={svc} className="bg-[#0B0D0E] text-white py-1">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Estimated Monthly Ad Budget */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-medium text-white/70 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#B7F34A]" />
                  <span>Estimated Monthly Ad Spend</span>
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-[#B7F34A] transition-colors cursor-pointer"
                >
                  {budgetList.map((b, i) => (
                    <option key={i} value={b} className="bg-[#0B0D0E] text-white py-1">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 5: Project Details Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-medium text-white/70">
                  Project Goals &amp; Specific Challenges
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your business goals, target audience, or current ROAS/CPA bottlenecks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0B0D0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-[#B7F34A] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp & Email Dual Dispatch */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSubmitWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full transition-all shadow-md shadow-[#25D366]/20 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>Send via WhatsApp (Instant)</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmitEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#B7F34A]" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-white/40 text-center mt-2">
                Clicking either button will automatically format your inquiry and open WhatsApp or your email client addressed directly to Asif Mahmud.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
