"use client";

import { useEffect, useRef } from "react";

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  fontSize: number;
}

const GLYPHS = ["0", "1"];
const COLORS = ["#2ed3ff", "#a855f7"];

export default function BinaryRainCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let columns: Column[] = [];
    let raf = 0;

    function setup() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = width < 640 ? 13 : 16;
      const count = Math.floor(width / (fontSize * 2.4));
      const trailSpan = 14 * fontSize * 1.4;
      // Spread initial y across [-trailSpan, height] so columns are already
      // mid-fall on first paint instead of every column starting off-screen.
      columns = Array.from({ length: count }, (_, i) => ({
        x: (i + 0.5) * (width / count),
        y: Math.random() * (height + trailSpan) - trailSpan,
        speed: 34 + Math.random() * 46,
        fontSize,
        chars: Array.from({ length: 14 }, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]),
      }));
    }

    function frame(dt: number) {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);

      columns.forEach((col, ci) => {
        col.y += (col.speed * dt) / 1000;
        if (col.y > height + col.chars.length * col.fontSize) {
          col.y = -Math.random() * height * 0.5;
          col.chars = col.chars.map(() => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
        }

        ctx!.font = `${col.fontSize}px var(--font-technical, monospace)`;
        ctx!.textAlign = "center";

        col.chars.forEach((char, i) => {
          const y = col.y - i * col.fontSize * 1.4;
          if (y < -20 || y > height + 20) return;
          const alpha = Math.max(0, 1 - i / col.chars.length);
          ctx!.globalAlpha = alpha * 0.7;
          ctx!.fillStyle = COLORS[ci % COLORS.length];
          ctx!.fillText(char, col.x, y);
        });
      });
      ctx!.globalAlpha = 1;
    }

    function drawStatic() {
      const { width, height } = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);
      columns.forEach((col, ci) => {
        ctx!.font = `${col.fontSize}px monospace`;
        ctx!.textAlign = "center";
        ctx!.globalAlpha = 0.12;
        ctx!.fillStyle = COLORS[ci % COLORS.length];
        col.chars.forEach((char, i) => ctx!.fillText(char, col.x, (i / col.chars.length) * height));
      });
      ctx!.globalAlpha = 1;
    }

    let last = performance.now();
    function loop(now: number) {
      const dt = Math.min(now - last, 48);
      last = now;
      frame(dt);
      raf = requestAnimationFrame(loop);
    }

    setup();
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      setup();
      if (reduced) drawStatic();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
