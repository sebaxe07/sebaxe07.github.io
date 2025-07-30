"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMousePosition } from "../MouseProvider";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const { mousePosition } = useMousePosition();
  const [illumination, setIllumination] = useState({
    opacity: 0,
    x: 50,
    y: 50,
  });
  const [liquidEffect, setLiquidEffect] = useState({
    flow: 0,
    angle: 0,
    intensity: 0,
    chromeOpacity: 0,
  });

  useEffect(() => {
    if (!cardRef.current) return;

    const updateLiquidEffect = () => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to card center
      const distance = Math.sqrt(
        Math.pow(mousePosition.x - centerX, 2) +
          Math.pow(mousePosition.y - centerY, 2)
      );

      // Maximum distance to start affecting the card (in pixels)
      const maxDistance = 350;

      if (distance < maxDistance) {
        // Calculate relative mouse position within the card
        const relativeX = ((mousePosition.x - rect.left) / rect.width) * 100;
        const relativeY = ((mousePosition.y - rect.top) / rect.height) * 100;

        // Calculate base intensity based on distance
        const intensity = Math.max(0, (maxDistance - distance) / maxDistance);

        // Calculate flow angle based on mouse movement direction
        const deltaX = mousePosition.x - centerX;
        const deltaY = mousePosition.y - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setIllumination({
          opacity: intensity * 0.3,
          x: Math.max(0, Math.min(100, relativeX)),
          y: Math.max(0, Math.min(100, relativeY)),
        });

        setLiquidEffect({
          flow: intensity,
          angle: angle,
          intensity: intensity,
          chromeOpacity: Math.min(intensity * 0.4, 0.25),
        });
      } else {
        setIllumination({ opacity: 0, x: 50, y: 50 });
        setLiquidEffect({ flow: 0, angle: 0, intensity: 0, chromeOpacity: 0 });
      }
    };

    updateLiquidEffect();
  }, [mousePosition]);

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
      ref={cardRef}
      className={`${baseClasses} ${variantClasses[variant]} ${blurClasses[blur]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Apple Liquid Chrome Effect - Primary Flow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `linear-gradient(${liquidEffect.angle + 90}deg, 
            transparent 0%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.05}) 20%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.15}) 45%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.25}) 50%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.15}) 55%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.05}) 80%,
            transparent 100%)`,
          opacity: liquidEffect.intensity > 0.3 ? 1 : 0,
          transform: `translateX(${(illumination.x - 50) * 0.1}px) translateY(${
            (illumination.y - 50) * 0.1
          }px)`,
        }}
      />

      {/* Liquid Chrome Secondary Flow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          background: `linear-gradient(${liquidEffect.angle + 45}deg, 
            transparent 0%,
            rgba(147, 197, 253, ${liquidEffect.chromeOpacity * 0.08}) 35%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.2}) 50%,
            rgba(196, 181, 253, ${liquidEffect.chromeOpacity * 0.08}) 65%,
            transparent 100%)`,
          opacity: liquidEffect.intensity > 0.4 ? 1 : 0,
          transform: `translateX(${
            (illumination.x - 50) * -0.05
          }px) translateY(${(illumination.y - 50) * -0.05}px)`,
        }}
      />

      {/* Mercury-like Reflection Streaks */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-150"
        style={{
          background: `conic-gradient(from ${liquidEffect.angle}deg at ${
            illumination.x
          }% ${illumination.y}%, 
            transparent 0deg,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.1}) 30deg,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.2}) 60deg,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.1}) 90deg,
            transparent 120deg,
            transparent 240deg,
            rgba(59, 130, 246, ${liquidEffect.chromeOpacity * 0.08}) 270deg,
            rgba(147, 51, 234, ${liquidEffect.chromeOpacity * 0.08}) 300deg,
            transparent 330deg)`,
          opacity: liquidEffect.intensity > 0.5 ? 1 : 0,
        }}
      />

      {/* Flowing Highlight - Like liquid mercury */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-100"
        style={{
          background: `radial-gradient(ellipse 150px 60px at ${
            illumination.x
          }% ${illumination.y}%, 
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.3}) 0%,
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.1}) 40%,
            transparent 70%)`,
          opacity: liquidEffect.intensity > 0.6 ? 1 : 0,
          transform: `rotate(${liquidEffect.angle * 0.1}deg)`,
        }}
      />

      {/* Animated Ripple Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${illumination.x}% ${
            illumination.y
          }%, 
            rgba(255, 255, 255, ${liquidEffect.chromeOpacity * 0.05}) 0%,
            transparent 30%,
            rgba(147, 51, 234, ${liquidEffect.chromeOpacity * 0.03}) 60%,
            transparent 80%)`,
          opacity: liquidEffect.intensity > 0.2 ? 1 : 0,
          animation:
            liquidEffect.intensity > 0.8
              ? "pulse 3s infinite ease-in-out"
              : "none",
        }}
      />

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 blur-sm pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
