"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );
  const [display, setDisplay] = useState(from.toString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, to, duration, count]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}
