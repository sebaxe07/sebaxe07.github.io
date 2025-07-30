"use client";

import React, { useEffect, useState } from "react";
import { useMousePosition } from "./MouseProvider";

export const MouseGradient: React.FC = () => {
  const { mousePosition, isMouseMoving } = useMousePosition();
  const [gradientStyle, setGradientStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateGradient = () => {
      const { x, y } = mousePosition;

      // Create a smaller radial gradient that follows the mouse
      const gradientSize = isMouseMoving ? 400 : 300;
      const opacity = isMouseMoving ? 0.12 : 0.06;

      setGradientStyle({
        background: `radial-gradient(${gradientSize}px circle at ${x}px ${y}px, 
          rgba(59, 130, 246, ${opacity}) 0%,
          rgba(147, 51, 234, ${opacity * 0.7}) 25%,
          rgba(59, 130, 246, ${opacity * 0.4}) 50%,
          transparent 70%)`,
        transition: isMouseMoving
          ? "background 0.1s ease-out"
          : "background 0.3s ease-out",
      });
    };

    updateGradient();
  }, [mousePosition, isMouseMoving]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={gradientStyle}
    />
  );
};
