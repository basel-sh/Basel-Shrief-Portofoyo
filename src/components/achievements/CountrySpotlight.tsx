import Image from "next/image";
import { FileText } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import JourneyArc from "./JourneyArc";
import { PolandFlag, QatarFlag } from "@/components/icons/FlagIcons";
import type { Achievement } from "@/data/achievements";

const flagByCountry = {
  Poland: PolandFlag,
  Qatar: QatarFlag,
} as const;

export default function CountrySpotlight({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const Flag = achievement.country && achievement.country in flagByCountry
    ? flagByCountry[achievement.country as keyof typeof flagByCountry]
    : null;

  return (
    <Reveal delay={index * 0.08}>
      <GlassCard className="glow-border overflow-hidden p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Flag && (
              <Flag className="h-9 w-auto shrink-0 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
            )}
            <div>
              <p className="font-technical text-xs uppercase tracking-wider text-neon-blue">
                {achievement.period}
              </p>
              <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
                {achievement.title}
              </h3>
            </div>
          </div>
          <div className="hidden text-right sm:block">
            <p className="font-display text-lg font-bold text-gradient">{achievement.result}</p>
            <p className="text-xs text-text-muted">{achievement.org}</p>
          </div>
        </div>

        <div className="mt-2 sm:hidden">
          <p className="font-display text-lg font-bold text-gradient">{achievement.result}</p>
        </div>

        <div className="mt-6">
          <JourneyArc destination={achievement.country ?? ""} />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          {achievement.description}
        </p>

        {achievement.galleryPhotos && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {achievement.galleryPhotos.map((photo) =>
              photo.src ? (
                <div
                  key={photo.label}
                  className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border-subtle"
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                </div>
              ) : (
                <ImagePlaceholder key={photo.label} label={photo.label} aspect="aspect-square" />
              )
            )}
          </div>
        )}

        {achievement.certificate && (
          <a
            href={achievement.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:border-neon-blue hover:text-neon-blue"
          >
            <FileText size={14} /> View Certificate
          </a>
        )}
      </GlassCard>
    </Reveal>
  );
}
