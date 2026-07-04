import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function PhoneMockup({
  image,
  placeholder,
  alt,
}: {
  image?: string;
  placeholder: string;
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
            <div className="grid-overlay flex h-full w-full flex-col items-center justify-center gap-3 bg-panel/60 text-center">
              <ImageIcon className="text-text-muted" size={26} strokeWidth={1.5} />
              <p className="font-technical max-w-[75%] text-[10px] uppercase tracking-wider text-text-muted">
                {placeholder}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
