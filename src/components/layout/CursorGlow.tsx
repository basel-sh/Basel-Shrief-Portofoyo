"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;

    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (el) el.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.15] mix-blend-screen will-change-transform lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(46,211,255,0.6) 0%, rgba(168,85,247,0.3) 45%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}
