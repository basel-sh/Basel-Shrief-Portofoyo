import type { SVGProps } from "react";

/**
 * lucide-react dropped brand/company logo icons — these are small custom
 * monogram-in-circle glyphs so social links stay dependency-free.
 */

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

function toSvgProps({ size, ...rest }: IconProps) {
  return { width: size ?? 20, height: size ?? 20, ...rest };
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...toSvgProps(props)}>
      <path
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.24-3.37-1.24-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...toSvgProps(props)}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" opacity="0.12" />
      <path
        d="M7.2 9.8h2.6v8.4H7.2V9.8Zm1.3-4.15a1.5 1.5 0 1 1 0 3.01 1.5 1.5 0 0 1 0-3.01Zm3.7 4.15h2.5v1.15h.04c.35-.66 1.2-1.36 2.46-1.36 2.63 0 3.12 1.73 3.12 3.98v4.63h-2.6v-4.1c0-.98-.02-2.24-1.36-2.24-1.37 0-1.58 1.07-1.58 2.17v4.17h-2.58V9.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...toSvgProps(props)}>
      <path
        d="M13.5 21v-7.4h2.48l.37-2.88h-2.85V8.9c0-.83.23-1.4 1.42-1.4h1.52V4.93A20.6 20.6 0 0 0 14.2 4.8c-2.2 0-3.7 1.34-3.7 3.8v2.12H8v2.88h2.5V21h3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...toSvgProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...toSvgProps(props)}>
      <path
        d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.97 12.53l-.24.38.6 2.2-2.27-.6-.37.22A8.2 8.2 0 1 1 12 3.8Zm-3.1 3.9c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 1.98 3.16 4.9 4.3 2.42.95 2.9.76 3.43.71.52-.05 1.68-.68 1.92-1.35.23-.66.23-1.23.16-1.35-.06-.12-.26-.19-.55-.34-.28-.14-1.68-.83-1.94-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.11-.16.2-.33.22-.6.08-.29-.15-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.57-1.96-.16-.29-.02-.44.13-.58.13-.13.29-.34.44-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.14-.63-1.57-.89-2.14-.22-.5-.46-.5-.64-.51h-.15Z"
        fill="currentColor"
      />
    </svg>
  );
}
