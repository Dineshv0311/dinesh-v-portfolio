"use client";

import React, { useEffect, useRef } from "react";

interface MatrixRainCanvasProps {
  symbols?: string[];
  textColor?: string;
  bgColor?: string;
  fontSize?: number;
  speed?: number;
  className?: string;
}

export const MatrixRainCanvas: React.FC<MatrixRainCanvasProps> = ({
  symbols = ["1", "0", "<", ">", "Z", "X", "D", "V", "/", "{" , "}"],
  textColor = "#FFFFFF",
  bgColor = "#0D0208",
  fontSize = 14,
  speed = 33,
  className = "absolute inset-0 w-full h-full",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initDrops = () => {
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
      }
    };

    initDrops();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initDrops();
    };

    window.addEventListener("resize", handleResize);

    let lastTime = 0;

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (time - lastTime < speed) return;
      lastTime = time;

      // Semi-transparent fade background to create trailing rain effect
      ctx.fillStyle = "rgba(13, 2, 8, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading head character has bright highlight
        if (Math.random() > 0.88) {
          ctx.fillStyle = "#FF0000";
        } else if (Math.random() > 0.6) {
          ctx.fillStyle = "#FFFFFF";
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        }

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [symbols, textColor, bgColor, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
