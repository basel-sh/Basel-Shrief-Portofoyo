import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export default function CairoPoster() {
  return (
    <Reveal>
      <div className="relative mx-6 mt-28 overflow-hidden rounded-[2rem] border border-border-subtle sm:mx-10 sm:rounded-[3rem] lg:mx-auto lg:max-w-6xl">
        <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
          <Image
            src="/assets/images/university/cairo-university-engineering.jpg"
            alt="Faculty of Engineering, Cairo University — Electronics Building"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/40" />
          <div className="grid-overlay absolute inset-0 opacity-20" />

          {/* floating ambient light particles */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="animate-float absolute h-1.5 w-1.5 rounded-full bg-neon-blue/70 shadow-[0_0_12px_rgba(46,211,255,0.8)]"
              style={{
                left: `${12 + i * 15}%`,
                top: `${20 + (i % 3) * 22}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}

          <div className="glass-panel absolute bottom-5 left-5 right-5 rounded-2xl p-5 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md sm:p-7">
            <p className="font-technical text-xs uppercase tracking-[0.25em] text-neon-blue">
              Faculty of Engineering
            </p>
            <h1 className="font-display mt-2 text-2xl font-semibold text-text-primary sm:text-3xl">
              {profile.university.name}
            </h1>
            <p className="mt-2 text-sm text-text-secondary">{profile.university.degree}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-technical text-xs text-text-muted">
              <span>{profile.university.period}</span>
              <span>GPA {profile.university.gpa}</span>
              <span>{profile.university.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
