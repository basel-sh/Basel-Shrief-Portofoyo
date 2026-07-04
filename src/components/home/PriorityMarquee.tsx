import { priorities } from "@/data/profile";

export default function PriorityMarquee() {
  const items = [...priorities, ...priorities];

  return (
    <div className="relative overflow-hidden border-y border-border-subtle bg-panel/40 py-4">
      <div className="flex w-max animate-marquee items-center gap-10">
        {[...items, ...items].map((p, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-technical text-xs text-text-muted">0{(i % priorities.length) + 1}</span>
            <span className="font-display text-lg font-medium text-text-secondary">
              {p.label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-blue/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
