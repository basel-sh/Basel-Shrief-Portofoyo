import Link from "next/link";
import { Cpu, Layers, Globe, Smartphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { projectsByCategory } from "@/data/projects";

const tiles = [
  { title: "Embedded Systems", href: "/embedded", icon: Cpu, category: "embedded" as const },
  { title: "Digital Design", href: "/digital-design", icon: Layers, category: "digital-design" as const },
  { title: "Web", href: "/web", icon: Globe, category: "web" as const },
  { title: "Mobile", href: "/mobile", icon: Smartphone, category: "mobile" as const },
];

export default function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {tiles.map((tile, i) => (
        <Reveal key={tile.href} delay={i * 0.05}>
          <Link href={tile.href} className="group block h-full">
            <div className="glass-panel flex h-full flex-col gap-4 rounded-2xl p-6 transition-colors group-hover:border-neon-blue/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 text-neon-blue">
                <tile.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg">
                  {tile.title}
                </h3>
                <p className="font-technical mt-1 text-xs text-text-muted">
                  {projectsByCategory(tile.category).length} projects
                </p>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
