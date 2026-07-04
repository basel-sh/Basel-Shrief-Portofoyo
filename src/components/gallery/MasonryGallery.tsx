"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/data/gallery";

const spanAspect: Record<NonNullable<GalleryItem["span"]>, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

function Tile({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const aspect = spanAspect[item.span ?? "square"];
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border-subtle text-left",
        aspect
      )}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      ) : (
        <div className="grid-overlay flex h-full w-full flex-col items-center justify-center gap-2 bg-panel/60">
          <ImageIcon className="text-text-muted" size={24} strokeWidth={1.5} />
          <p className="font-technical max-w-[80%] text-center text-[10px] uppercase tracking-wider text-text-muted">
            {item.label}
          </p>
        </div>
      )}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-xs font-medium text-text-primary">{item.label}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
    </button>
  );
}

export default function MasonryGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {items.map((item) => (
          <Tile key={item.id} item={item} onClick={() => setActive(item)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-void/90 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-border-strong bg-panel"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-void/70 text-text-primary"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[16/10] w-full">
                {active.src ? (
                  <Image src={active.src} alt={active.label} fill className="object-contain" sizes="768px" />
                ) : (
                  <div className="grid-overlay flex h-full w-full flex-col items-center justify-center gap-3 bg-panel/60">
                    <ImageIcon className="text-text-muted" size={36} strokeWidth={1.5} />
                    <p className="font-technical max-w-[70%] text-center text-xs uppercase tracking-wider text-text-muted">
                      {active.label}
                    </p>
                  </div>
                )}
              </div>
              <p className="border-t border-border-subtle px-5 py-4 text-sm font-medium text-text-primary">
                {active.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
