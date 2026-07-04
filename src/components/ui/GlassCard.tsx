import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel relative rounded-2xl transition-all duration-300",
        hover && "hover:border-neon-blue/30 hover:shadow-[0_0_40px_rgba(46,211,255,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
