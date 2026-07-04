export default function JourneyArc({ destination }: { destination: string }) {
  return (
    <div className="relative flex h-24 w-full items-center">
      <svg viewBox="0 0 320 80" className="h-full w-full overflow-visible" aria-hidden="true">
        <path
          id="flight-path"
          d="M 12 64 Q 160 -10 308 64"
          fill="none"
          stroke="url(#arc-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <defs>
          <linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2ed3ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="64" r="4" fill="#2ed3ff" />
        <circle cx="308" cy="64" r="4" fill="#a855f7" />
        <circle r="5" fill="#f2f5fc">
          <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#flight-path" />
          </animateMotion>
        </circle>
      </svg>
      <span className="absolute bottom-0 left-0 font-technical text-[10px] uppercase tracking-wider text-text-muted">
        Egypt
      </span>
      <span className="absolute bottom-0 right-0 font-technical text-[10px] uppercase tracking-wider text-text-muted">
        {destination}
      </span>
    </div>
  );
}
