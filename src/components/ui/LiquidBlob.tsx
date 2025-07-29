"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LiquidBlobProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "blue" | "purple" | "pink" | "cyan" | "gradient";
  className?: string;
  animate?: boolean;
  delay?: number;
}

interface DynamicBlobProps {
  id: string;
  x: number;
  y: number;
  size: "sm" | "md" | "lg" | "xl";
  color: "blue" | "purple" | "pink" | "cyan" | "gradient";
  duration: number;
}

export const LiquidBlob: React.FC<LiquidBlobProps> = ({
  size = "md",
  color = "gradient",
  className = "",
  animate = true,
  delay = 0,
}) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-400 to-blue-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    pink: "bg-gradient-to-br from-pink-400 to-pink-600",
    cyan: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    gradient: "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500",
  };

  // Different animation durations to create natural variation
  const duration = 6 + delay * 2; // 6s, 7s, 8s, 9s for different blobs

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={
        animate
          ? {
              scale: [1, 1.05, 0.95, 1], // Reduced scale variation for subtler effect
              rotate: [0, 90, 180, 270, 360], // Slower rotation
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "70% 30% 50% 50% / 30% 60% 40% 70%",
                "50% 50% 30% 70% / 50% 40% 60% 30%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              x: [0, 10, -5, 0], // Reduced movement for background effect
              y: [0, -15, 10, 0],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: duration * 1.5, // Slower for background particles
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }
          : {}
      }
      initial={{
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        scale: 1,
        rotate: 0,
        opacity: 0.7, // Slightly more transparent for background effect
      }}
      style={{
        filter: "blur(1px)", // Slight blur for better background integration
      }}
    >
      <motion.div
        className="w-full h-full opacity-70 mix-blend-multiply filter blur-xl"
        animate={
          animate
            ? {
                borderRadius: [
                  "40% 60% 70% 30% / 40% 50% 60% 50%",
                  "70% 30% 50% 50% / 30% 60% 40% 70%",
                  "50% 50% 30% 70% / 50% 40% 60% 30%",
                  "40% 60% 70% 30% / 40% 50% 60% 50%",
                ],
              }
            : {}
        }
        transition={
          animate
            ? {
                duration: duration + 1, // Slightly different timing for layered effect
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0, // Start immediately
              }
            : {}
        }
        initial={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />
    </motion.div>
  );
};

// Floating animation for multiple blobs
export const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <LiquidBlob
        size="xl"
        color="blue"
        className="absolute -top-20 -left-20"
        animate={true}
        delay={0}
      />
      <LiquidBlob
        size="lg"
        color="purple"
        className="absolute top-1/4 -right-16"
        animate={true}
        delay={0.5}
      />
      <LiquidBlob
        size="md"
        color="pink"
        className="absolute bottom-1/4 left-1/4"
        animate={true}
        delay={1}
      />
      <LiquidBlob
        size="lg"
        color="cyan"
        className="absolute -bottom-20 -right-20"
        animate={true}
        delay={1.5}
      />
    </div>
  );
};

// Dynamic blob system with random movement and lifecycle
export const DynamicFloatingBlobs: React.FC = () => {
  const [blobs, setBlobs] = useState<DynamicBlobProps[]>([]);

  // Create a new blob with better distribution
  const createBlob = React.useCallback((): DynamicBlobProps => {
    const colors: Array<"blue" | "purple" | "pink" | "cyan" | "gradient"> = [
      "blue",
      "purple",
      "pink",
      "cyan",
      "gradient",
    ];
    const sizes: Array<"sm" | "md" | "lg" | "xl"> = ["sm", "md", "lg"];

    // Better screen distribution - ensure blobs spawn across the entire viewport
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
    const screenHeight =
      typeof window !== "undefined" ? window.innerHeight : 800;

    // Add padding to keep blobs within visible area
    const padding = 200;

    return {
      id: Math.random().toString(36).substr(2, 9),
      x: padding + Math.random() * (screenWidth - padding * 2),
      y: padding + Math.random() * (screenHeight - padding * 2),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 20 + Math.random() * 20, // 20-40 seconds lifespan for much longer persistence
    };
  }, []);

  useEffect(() => {
    // Create initial blobs once and never recreate them
    const initialBlobs = Array.from({ length: 10 }, createBlob);
    setBlobs(initialBlobs);
  }, [createBlob]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((blob) => {
        // Calculate random movement paths for particle-like behavior
        const screenWidth =
          typeof window !== "undefined" ? window.innerWidth : 1200;
        const screenHeight =
          typeof window !== "undefined" ? window.innerHeight : 800;

        // Generate multiple waypoints for continuous movement
        const waypoints = Array.from({ length: 4 }, () => ({
          x: Math.max(
            100,
            Math.min(screenWidth - 100, blob.x + (Math.random() - 0.5) * 600)
          ),
          y: Math.max(
            100,
            Math.min(screenHeight - 100, blob.y + (Math.random() - 0.5) * 600)
          ),
        }));

        return (
          <motion.div
            key={blob.id}
            className="absolute pointer-events-none"
            initial={{
              opacity: 0,
              scale: 0,
              x: blob.x,
              y: blob.y,
            }}
            animate={{
              opacity: 0.8, // Fixed opacity
              scale: 1, // Fixed scale
              x: [blob.x, ...waypoints.map((w) => w.x), blob.x], // Return to start position for loop
              y: [blob.y, ...waypoints.map((w) => w.y), blob.y], // Return to start position for loop
            }}
            transition={{
              opacity: { duration: 2, ease: "easeOut" }, // Quick fade in once
              scale: { duration: 2, ease: "easeOut" }, // Quick scale in once
              x: {
                duration: blob.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
              y: {
                duration: blob.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <LiquidBlob
              size={blob.size}
              color={blob.color}
              animate={true}
              delay={0}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
