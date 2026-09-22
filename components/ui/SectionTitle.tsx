import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  number?: string;
  badge?: string;
  title: string;
  accentText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionTitle({
  number,
  badge,
  title,
  accentText,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionTitleProps) {
  const isDark = theme === "dark";

  // Split title if accentText is provided to highlight the accent word
  let titleContent: React.ReactNode = title;
  if (accentText && title.includes(accentText)) {
    const parts = title.split(accentText);
    titleContent = (
      <>
        {parts[0]}
        <span
          className={cn(
            "relative inline-block font-extrabold",
            isDark ? "text-[#B7F34A]" : "text-[#709819] dark:text-[#B7F34A]"
          )}
        >
          {accentText}
        </span>
        {parts.slice(1).join(accentText)}
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {(number || badge) && (
        <div className="flex items-center gap-2">
          {number && (
            <span
              className={cn(
                "text-xs font-mono tracking-widest uppercase font-semibold",
                isDark ? "text-[#B7F34A]" : "text-[#555555]"
              )}
            >
              {number}
            </span>
          )}
          {number && badge && (
            <span className={cn("text-xs", isDark ? "text-white/30" : "text-black/30")}>
              /
            </span>
          )}
          {badge && (
            <span
              className={cn(
                "text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full",
                isDark
                  ? "bg-white/10 text-white/90 border border-white/15"
                  : "bg-black/5 text-[#222222] border border-black/10"
              )}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-[#111111]"
        )}
      >
        {titleContent}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg max-w-2xl leading-relaxed mt-1",
            isDark ? "text-[#9E9E9E]" : "text-[#555555]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
