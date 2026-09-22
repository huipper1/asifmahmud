import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL, EMAIL_URL } from "@/lib/constants";
import { MessageSquare, Mail, ArrowUpRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "whatsapp" | "email";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  withArrow = false,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  // Shortcut URLs for special CTA variants
  let targetHref = href;
  let external = isExternal;

  if (variant === "whatsapp" && !targetHref) {
    targetHref = WHATSAPP_URL;
    external = true;
  } else if (variant === "email" && !targetHref) {
    targetHref = EMAIL_URL;
    external = true;
  }

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#B7F34A] text-[#0B0D0E] hover:bg-[#a5e236] shadow-sm hover:shadow-md hover:shadow-[#B7F34A]/20 font-semibold",
    secondary:
      "bg-white text-[#111111] border border-black/10 hover:border-black/30 hover:bg-[#F4F4F0] shadow-2xs",
    dark:
      "bg-[#0B0D0E] text-white hover:bg-[#1E2226] border border-white/10 shadow-sm",
    ghost:
      "bg-transparent text-[#111111] hover:bg-black/5 hover:text-black",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm hover:shadow-md hover:shadow-[#25D366]/25 font-semibold",
    email:
      "bg-[#0B0D0E] text-white hover:bg-[#1f2429] border border-white/10 shadow-sm font-semibold",
  };

  const content = (
    <>
      {variant === "whatsapp" && !icon && (
        <MessageSquare className="w-4 h-4 shrink-0 fill-current" />
      )}
      {variant === "email" && !icon && (
        <Mail className="w-4 h-4 shrink-0" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (targetHref) {
    if (external || targetHref.startsWith("http") || targetHref.startsWith("mailto")) {
      return (
        <a
          href={targetHref}
          target={targetHref.startsWith("http") ? "_blank" : undefined}
          rel={targetHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={targetHref} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
