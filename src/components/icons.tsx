export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M19.27 5.33A18.27 18.27 0 0 0 14.86 4c-.2.36-.42.84-.58 1.22a16.9 16.9 0 0 0-4.56 0A8.6 8.6 0 0 0 9.14 4a18.2 18.2 0 0 0-4.42 1.34C2.1 9.3 1.4 13.16 1.74 16.96a18.4 18.4 0 0 0 5.55 2.8c.45-.6.85-1.25 1.19-1.94a11.9 11.9 0 0 1-1.87-.9c.16-.12.31-.24.46-.37a13.1 13.1 0 0 0 11.06 0c.15.13.3.25.46.37-.59.35-1.22.66-1.87.9.34.69.74 1.34 1.19 1.94a18.35 18.35 0 0 0 5.55-2.8c.4-4.4-.72-8.22-3.19-11.63ZM8.68 14.6c-1.06 0-1.93-.98-1.93-2.18 0-1.2.85-2.18 1.93-2.18 1.08 0 1.95 1 1.93 2.18 0 1.2-.85 2.18-1.93 2.18Zm6.64 0c-1.06 0-1.93-.98-1.93-2.18 0-1.2.85-2.18 1.93-2.18 1.08 0 1.95 1 1.93 2.18 0 1.2-.85 2.18-1.93 2.18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 12h16M14 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M7.8 10v6.2M7.8 7.6v.01M12 16.2v-3.6c0-1.2.8-2 1.9-2 1.1 0 1.7.8 1.7 2v3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12.6c0-1.2.8-2 1.9-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export const socialIcons = {
  Discord: DiscordIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
};
