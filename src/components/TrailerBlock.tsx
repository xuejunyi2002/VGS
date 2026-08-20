"use client";

import { useState } from "react";
import { game } from "@/lib/data";

function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const id =
      parsed.hostname.includes("youtu.be")
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
  } catch {
    return null;
  }
}

export default function TrailerBlock() {
  const [playing, setPlaying] = useState(false);
  const embedUrl = game.trailerUrl ? getYoutubeEmbedUrl(game.trailerUrl) : null;

  return (
    <div id="trailer" className="relative aspect-video w-full border-2 border-vgs-black bg-vgs-black shadow-comic">
      {playing && embedUrl ? (
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={`${game.name} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => embedUrl && setPlaying(true)}
          disabled={!embedUrl}
          className="group flex h-full w-full flex-col items-center justify-center gap-4 text-vgs-cream disabled:cursor-default"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 texture-halftone opacity-[0.06]"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-vgs-cream bg-vgs-red transition-transform duration-150 ease-out group-enabled:group-hover:scale-110">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-vgs-cream" />
          </span>
          <span className="relative font-display text-sm uppercase tracking-[0.2em]">
            {embedUrl ? "Watch Trailer" : "Trailer coming soon"}
          </span>
        </button>
      )}
    </div>
  );
}
