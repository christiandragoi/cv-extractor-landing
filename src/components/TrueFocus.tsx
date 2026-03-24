"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface TrueFocusProps {
  text: string;
  className?: string;
  glowColor?: string;
}

export default function TrueFocus({
  text,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.4)",
}: TrueFocusProps) {
  const [focusIndex, setFocusIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const index = Math.floor((x / width) * text.length);
      setFocusIndex(Math.max(0, Math.min(text.length - 1, index)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [text]);

  return (
    <div ref={containerRef} className={`flex cursor-default select-none ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{
            filter: i === focusIndex ? "blur(0px)" : "blur(4px)",
            opacity: i === focusIndex ? 1 : 0.4,
            scale: i === focusIndex ? 1.05 : 0.95,
            textShadow: i === focusIndex ? `0 0 10px ${glowColor}` : "none",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
