type PlaceholderArtProps = {
  label: string;
  tone?: "cream" | "red" | "black";
  aspect?: string;
  rotate?: number;
  className?: string;
};

const toneMap: Record<NonNullable<PlaceholderArtProps["tone"]>, string> = {
  cream: "bg-vgs-light-grey text-vgs-black",
  red: "bg-vgs-red text-vgs-cream",
  black: "bg-vgs-black text-vgs-cream",
};

export default function PlaceholderArt({
  label,
  tone = "cream",
  aspect = "aspect-[4/5]",
  rotate = 0,
  className = "",
}: PlaceholderArtProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden border-2 border-vgs-black shadow-comic ${toneMap[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 texture-halftone opacity-[0.07]"
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-display text-3xl opacity-40">✦</span>
        <span className="font-display text-xs uppercase tracking-[0.15em] opacity-70">
          Artwork placeholder
        </span>
        <span className="text-sm font-bold uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
