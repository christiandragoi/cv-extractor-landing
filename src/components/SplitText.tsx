"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  animateBy?: "chars" | "words";
  onComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  animateBy = "chars",
}: SplitTextProps) {
  const units = useMemo(() => {
    if (animateBy === "words") {
      return text.split(" ").map((word, i) => ({
        content: word,
        key: `w-${i}`,
        space: i < text.split(" ").length - 1,
      }));
    }
    return text.split("").map((char, i) => ({
      content: char,
      key: `c-${i}`,
      space: false,
    }));
  }, [text, animateBy]);

  return (
    <span className={className} aria-label={text}>
      {units.map((unit, i) => (
        <span key={unit.key} style={{ display: "inline-block" }}>
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: "inline-block" }}
          >
            {unit.content === " " ? "\u00A0" : unit.content}
          </motion.span>
          {unit.space && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
