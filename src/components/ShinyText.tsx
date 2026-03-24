"use client";

import { motion } from "framer-motion";

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
  color?: string;
}

export default function ShinyText({
  text,
  className = "",
  speed = 3,
  color = "#3b82f6",
}: ShinyTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-10 text-transparent bg-clip-text" 
            style={{ 
              backgroundImage: `linear-gradient(90deg, #94a3b8 0%, #ffffff 50%, #94a3b8 100%)`,
              backgroundSize: "200% 100%",
            }}>
        {text}
      </span>
      
      {/* Shimmer overlay */}
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
          repeatDelay: 2,
        }}
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
          backgroundSize: "40% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </span>
  );
}
