type KaijuCreatureProps = {
  className?: string;
};

export default function KaijuCreature({ className = "" }: KaijuCreatureProps) {
  return (
    <svg
      viewBox="0 0 360 420"
      className={className}
      role="img"
      aria-label="VGS Kaiju mascot roaring with one claw raised"
    >
      <ellipse cx="180" cy="392" rx="118" ry="16" fill="var(--vgs-black)" opacity="0.08" />

      <path
        d="M96 300 C60 300 34 344 40 384 C44 400 62 406 76 396 C88 388 92 372 96 356 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M258 300 C296 300 322 344 316 384 C312 400 294 406 280 396 C268 388 264 372 260 356 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      <path
        d="M252 150 C300 118 330 60 316 26 C312 16 298 16 292 26 C280 48 268 70 244 96 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M292 40 L306 30 M286 58 L302 52 M282 76 L300 74" stroke="var(--vgs-black)" strokeWidth="5" strokeLinecap="round" />

      <path
        d="M84 158 C60 176 52 216 62 250 C50 232 42 208 48 182 C36 202 34 232 46 258 C34 250 26 232 26 214 C22 244 34 274 62 288 L96 296 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      <path
        d="M180 60 C260 60 300 128 296 208 C292 276 244 322 180 322 C116 322 68 276 64 208 C60 128 100 60 180 60 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      <path d="M108 78 L128 118 L88 118 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M180 60 L200 106 L160 106 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M250 80 L268 120 L230 118 Z" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" strokeLinejoin="round" />

      <ellipse cx="178" cy="248" rx="70" ry="52" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" />

      <g>
        <ellipse cx="140" cy="190" rx="30" ry="34" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" />
        <ellipse cx="222" cy="190" rx="30" ry="34" fill="var(--vgs-cream)" stroke="var(--vgs-black)" strokeWidth="6" />
        <circle cx="146" cy="196" r="12" fill="var(--vgs-black)" />
        <circle cx="228" cy="196" r="12" fill="var(--vgs-black)" />
        <circle cx="150" cy="191" r="4" fill="var(--vgs-cream)" />
        <circle cx="232" cy="191" r="4" fill="var(--vgs-cream)" />
        <path d="M116 162 L150 170 M244 162 L210 170" stroke="var(--vgs-black)" strokeWidth="6" strokeLinecap="round" />
      </g>

      <path
        d="M148 236 C160 260 200 260 212 236 C214 252 200 268 180 268 C160 268 146 252 148 236 Z"
        fill="var(--vgs-black)"
      />
      <path d="M162 240 L168 254 L176 240 Z" fill="var(--vgs-cream)" />
      <path d="M198 240 L192 254 L184 240 Z" fill="var(--vgs-cream)" />

      <path
        d="M62 208 C20 196 -6 214 4 250 C10 270 30 280 48 272 C36 262 30 246 34 230 C42 244 56 252 70 248 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M6 226 L-14 220 M2 244 L-18 244 M10 260 L-8 268" stroke="var(--vgs-black)" strokeWidth="5" strokeLinecap="round" opacity="0.6" />

      <path
        d="M280 232 C246 220 226 244 236 268 C222 262 214 244 222 226 C204 234 196 254 206 272 C216 288 240 292 256 280 C244 278 236 266 240 252 C250 264 266 268 280 260 Z"
        fill="var(--vgs-red)"
        stroke="var(--vgs-black)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
