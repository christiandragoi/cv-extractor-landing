"use client";

import { useEffect, useRef } from "react";

interface AuroraProps {
  colorStops?: string[];
  speed?: number;
  blend?: number;
  amplitude?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
  speed = 0.004,
  blend = 0.6,
  amplitude = 0.8,
  className = "",
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += speed;
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = blend;

      colorStops.forEach((color, i) => {
        const phase = time + (i * Math.PI * 2) / colorStops.length;
        const x = width * (0.3 + 0.4 * Math.sin(phase * 0.7 + i));
        const y = height * (0.2 + amplitude * 0.4 * Math.cos(phase * 0.5 + i * 1.3));
        const r = Math.max(width, height) * (0.3 + 0.15 * Math.sin(phase * 0.3));

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, color + "80");
        grad.addColorStop(0.5, color + "30");
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [colorStops, speed, blend, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ filter: "blur(80px)" }}
    />
  );
}
