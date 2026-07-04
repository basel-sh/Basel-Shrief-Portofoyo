"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  direction = "up",
  once = true,
}: RevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -y }
      : direction === "right"
        ? { opacity: 0, x: y }
        : { opacity: 0, y };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
