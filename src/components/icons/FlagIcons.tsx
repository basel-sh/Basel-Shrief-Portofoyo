import type { SVGProps } from "react";

/**
 * Windows doesn't render regional-indicator emoji sequences as pictorial
 * flags (shows "PL"/"QA" letter codes instead) — these SVGs render
 * consistently across every OS.
 */

export function PolandFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" width="1.4em" height="1em" {...props}>
      <rect width="30" height="20" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#dc143c" />
    </svg>
  );
}

export function QatarFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" width="1.4em" height="1em" {...props}>
      <rect width="30" height="20" fill="#8d1b3d" />
      <rect width="9" height="20" fill="#fff" />
      <polyline
        points="9,0 11.5,1.4 9,2.8 11.5,4.2 9,5.6 11.5,7 9,8.4 11.5,9.8 9,11.2 11.5,12.6 9,14 11.5,15.4 9,16.8 11.5,18.2 9,20"
        fill="#8d1b3d"
      />
    </svg>
  );
}
