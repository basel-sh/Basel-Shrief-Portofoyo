import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue" | "purple" | "amber";
}) {
  const variants = {
    default: "border-border-strong text-text-secondary",
    blue: "border-neon-blue/40 text-neon-blue bg-neon-blue/5",
    purple: "border-neon-purple/40 text-neon-purple bg-neon-purple/5",
    amber: "border-signal-amber/40 text-signal-amber bg-signal-amber/5",
  };

  return (
    <span
      className={cn(
        "font-technical inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
