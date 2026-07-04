"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function TypingRoles({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(() => (prefersReducedMotion() ? roles[0] : ""));
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const full = roles[roleIndex];

    let delay = deleting ? 40 : 70;
    if (!deleting && text === full) delay = 1400;
    if (deleting && text === "") delay = 300;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) {
          setText(full.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(full.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className="relative">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] animate-pulse-glow bg-neon-blue align-middle" />
    </span>
  );
}
