"use client";

import { useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.15)",
  spotlightSize = 400,
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt values for premium feel
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Normalize coordinates for tilt (-0.5 to 0.5)
    mouseX.set((x / width) - 0.5);
    mouseY.set((y / height) - 0.5);
    
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={`relative overflow-hidden ${className}`}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Background spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-10"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Card contents */}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
}
