"use client";

import { useRef, useEffect, useState } from "react";

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  squareSize?: number;
  borderColor?: string;
  hoverFillColor?: string;
  className?: string;
}

export default function Squares({
  direction = "right",
  speed = 1,
  squareSize = 40,
  borderColor = "#333",
  hoverFillColor = "#222",
  className = "",
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let requestStep: number;
    let offset = { x: 0, y: 0 };

    const updateAnimation = () => {
      switch (direction) {
        case "right": offset.x -= speed; break;
        case "left": offset.x += speed; break;
        case "up": offset.y += speed; break;
        case "down": offset.y -= speed; break;
        case "diagonal": offset.x -= speed; offset.y -= speed; break;
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;

      const startX = offset.x % squareSize;
      const startY = offset.y % squareSize;

      for (let x = startX; x < canvas.width; x += squareSize) {
        for (let y = startY; y < canvas.height; y += squareSize) {
          ctx.strokeRect(x, y, squareSize, squareSize);
          
          if (hoveredSquare) {
            const sx = Math.floor((hoveredSquare.x - startX) / squareSize) * squareSize + startX;
            const sy = Math.floor((hoveredSquare.y - startY) / squareSize) * squareSize + startY;
            
            if (x >= sx && x < sx + squareSize && y >= sy && y < sy + squareSize) {
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(x, y, squareSize, squareSize);
            }
          }
        }
      }
    };

    const loop = () => {
      updateAnimation();
      drawGrid();
      requestStep = requestAnimationFrame(loop);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    loop();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(requestStep);
      window.removeEventListener("resize", resize);
    };
  }, [direction, speed, squareSize, borderColor, hoverFillColor, hoveredSquare]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setHoveredSquare({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => setHoveredSquare(null);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  );
}
