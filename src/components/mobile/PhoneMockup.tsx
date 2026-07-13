import Image from "next/image";
import { Bluetooth, Smartphone } from "lucide-react";

// Stylized wireframe shown in place of a real screenshot — keeps every
// mobile project looking intentional without needing a captured screen.
function AppWireframe({ label }: { label: string }) {
  return (
    <div className="grid-overlay flex h-full w-full flex-col bg-gradient-to-b from-panel to-panel-2 p-3">
      <div className="flex items-center justify-between px-1">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-teal shadow-[0_0_8px_rgba(52,224,184,0.8)]" />
        <span className="font-technical text-[8px] uppercase tracking-widest text-text-muted">
          {label}
        </span>
        <Bluetooth size={11} className="text-neon-blue" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-blue shadow-[0_0_24px_rgba(46,211,255,0.15)]">
          <Smartphone size={22} strokeWidth={1.5} />
        </div>
        <div className="w-full space-y-1.5 px-6">
          <div className="mx-auto h-1.5 w-3/4 rounded-full bg-border-strong/60" />
          <div className="mx-auto h-1.5 w-1/2 rounded-full bg-border-strong/35" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 pb-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded-lg border border-border-subtle bg-panel-2/80" />
        ))}
      </div>
    </div>
  );
}

export default function PhoneMockup({
  image,
  label = "App Interface",
  alt,
}: {
  image?: string;
  label?: string;
  alt: string;
}) {
  return (
    <div className="relative mx-auto w-56 select-none sm:w-64">
      <div className="relative aspect-[9/19.5] w-full rounded-[2.2rem] border-[6px] border-panel-2 bg-void shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-border-strong">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-panel-2" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
          {image ? (
            <Image src={image} alt={alt} fill className="object-cover" sizes="256px" />
          ) : (
            <AppWireframe label={label} />
          )}
        </div>
      </div>
    </div>
  );
}
