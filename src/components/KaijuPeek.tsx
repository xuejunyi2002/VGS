type KaijuPeekProps = {
  className?: string;
};

export default function KaijuPeek({ className = "" }: KaijuPeekProps) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="VGS Kaiju mascot peeking up and waving"
    >
      <path
        d="M40 320 C40 220 90 150 160 150 C230 150 280 220 280 320 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      <path d="M96 168 L114 204 L78 204 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M160 150 L178 192 L142 192 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M224 168 L242 204 L206 204 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />

      <ellipse cx="126" cy="252" rx="24" ry="27" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" />
      <ellipse cx="196" cy="252" rx="24" ry="27" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" />
      <circle cx="131" cy="257" r="9" fill="var(--vgs-black)" />
      <circle cx="201" cy="257" r="9" fill="var(--vgs-black)" />
      <circle cx="134" cy="253" r="3" fill="var(--vgs-cream)" />
      <circle cx="204" cy="253" r="3" fill="var(--vgs-cream)" />

      <path
        d="M138 288 C148 306 176 306 186 288 C188 300 176 312 162 312 C148 312 136 300 138 288 Z"
        fill="var(--vgs-black)"
      />

      <g>
        <path
          d="M64 236 C30 220 4 232 8 262 C10 280 30 288 44 278 C34 270 30 256 36 244 C42 256 54 262 66 258 Z"
          fill="var(--vgs-red)"
          stroke="var(--vgs-black)"
          strokeWidth="6"
          strokeLinejoin="round"
          transform="rotate(-18 40 250)"
        />
      </g>

      <path d="M92 240 Q80 226 90 214" stroke="var(--vgs-black)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M234 240 Q246 226 236 214" stroke="var(--vgs-black)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}
