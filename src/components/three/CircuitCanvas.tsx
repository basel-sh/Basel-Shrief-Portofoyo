"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
}

interface Trace {
  points: Node[];
  length: number;
  speed: number;
  offset: number;
  color: string;
  width: number;
}

const COLORS = ["#2ed3ff", "#a855f7", "#34e0b8"];

function buildTraces(width: number, height: number, count: number): Trace[] {
  const cell = Math.max(64, Math.min(width, height) / 12);
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  const traces: Trace[] = [];

  for (let i = 0; i < count; i++) {
    const startCol = Math.floor(Math.random() * cols);
    const startRow = Math.floor(Math.random() * rows);
    let x = startCol * cell;
    let y = startRow * cell;
    const points: Node[] = [{ x, y }];
    const segments = 3 + Math.floor(Math.random() * 4);

    for (let s = 0; s < segments; s++) {
      const horizontal = Math.random() > 0.5;
      const dir = Math.random() > 0.5 ? 1 : -1;
      const steps = 1 + Math.floor(Math.random() * 3);
      if (horizontal) {
        x += dir * steps * cell;
      } else {
        y += dir * steps * cell;
      }
      x = Math.max(0, Math.min(width, x));
      y = Math.max(0, Math.min(height, y));
      points.push({ x, y });
    }

    let length = 0;
    for (let p = 1; p < points.length; p++) {
      length += Math.hypot(points[p].x - points[p - 1].x, points[p].y - points[p - 1].y);
    }

    traces.push({
      points,
      length,
      speed: 60 + Math.random() * 90,
      offset: Math.random() * length,
      color: COLORS[i % COLORS.length],
      width: Math.random() > 0.8 ? 1.6 : 1,
    });
  }
  return traces;
}

function pointAtDistance(points: Node[], dist: number): Node {
  let remaining = dist;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const segLen = Math.hypot(b.x - a.x, b.y - a.y);
    if (remaining <= segLen) {
      const t = segLen === 0 ? 0 : remaining / segLen;
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    }
    remaining -= segLen;
  }
  return points[points.length - 1];
}

export default function CircuitCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let traces: Trace[] = [];
    let raf = 0;
    let last = performance.now();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = width < 640 ? 16 : width < 1024 ? 26 : 36;
      traces = buildTraces(width, height, density);
    }

    function drawStatic() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalAlpha = 0.5;
      traces.forEach((trace) => {
        ctx!.beginPath();
        trace.points.forEach((p, i) => (i === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y)));
        ctx!.strokeStyle = trace.color;
        ctx!.lineWidth = trace.width;
        ctx!.globalAlpha = 0.18;
        ctx!.stroke();
      });
    }

    function draw(now: number) {
      if (!canvas) return;
      const dt = Math.min(now - last, 48);
      last = now;
      const { width, height } = canvas.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);

      traces.forEach((trace) => {
        ctx!.beginPath();
        trace.points.forEach((p, i) => (i === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y)));
        ctx!.strokeStyle = trace.color;
        ctx!.lineWidth = trace.width;
        ctx!.globalAlpha = 0.14;
        ctx!.stroke();

        trace.offset = (trace.offset + (trace.speed * dt) / 1000) % (trace.length + 60);
        const head = pointAtDistance(trace.points, Math.min(trace.offset, trace.length));

        const grad = ctx!.createRadialGradient(head.x, head.y, 0, head.x, head.y, 14);
        grad.addColorStop(0, trace.color);
        grad.addColorStop(1, "transparent");
        ctx!.globalAlpha = 0.9;
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(head.x, head.y, 14, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.globalAlpha = 1;
        ctx!.fillStyle = trace.color;
        ctx!.beginPath();
        ctx!.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx!.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      resize();
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
