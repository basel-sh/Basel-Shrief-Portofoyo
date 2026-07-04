import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
}

// Renders a styled placeholder wherever a real photo/screenshot has not been supplied yet.
// Replace the referenced file in /public/assets/... and swap the <Image> back in to retire this.
export default function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-border-strong bg-panel/60 text-center",
        aspect,
        className
      )}
    >
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <ImageIcon className="relative z-10 text-text-muted" size={28} strokeWidth={1.5} />
      <p className="font-technical relative z-10 max-w-[80%] text-[11px] uppercase tracking-wider text-text-muted">
        {label}
      </p>
    </div>
  );
}
