import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark" | "outline" | "pill";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs sm:text-sm px-3.5 py-1.5 gap-1.5 font-medium",
  };

  const variantStyles = {
    default:
      "bg-black/5 text-[#222222] border border-black/10",
    accent:
      "bg-[#B7F34A]/20 text-[#304808] dark:text-[#B7F34A] border border-[#B7F34A]/40 font-semibold",
    dark:
      "bg-white/10 text-white/90 border border-white/15",
    outline:
      "bg-transparent text-[#444444] border border-black/15",
    pill:
      "bg-white text-[#111111] shadow-2xs border border-black/10 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full tracking-normal transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
