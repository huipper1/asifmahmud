import React from "react";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  sublabel?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function Metric({
  value,
  label,
  sublabel,
  theme = "light",
  className,
}: MetricProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading",
          isDark ? "text-white" : "text-[#111111]"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1",
          isDark ? "text-[#B7F34A]" : "text-[#555555]"
        )}
      >
        {label}
      </div>
      {sublabel && (
        <div
          className={cn(
            "text-xs mt-0.5",
            isDark ? "text-[#888888]" : "text-[#888888]"
          )}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
