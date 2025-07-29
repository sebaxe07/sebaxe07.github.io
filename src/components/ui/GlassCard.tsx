"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  blur?: "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "primary",
  blur = "md",
  hover = true,
  onClick,
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-xl border border-white/20";

  const variantClasses = {
    primary: "bg-white/10 backdrop-blur-md",
    secondary: "bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg",
    accent:
      "bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border-blue-300/30",
  };

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${blurClasses[blur]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 blur-sm pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
