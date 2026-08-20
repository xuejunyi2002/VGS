"use client";

import { useRef } from "react";
import DecorativeShape from "./DecorativeShape";
import KaijuPeek from "./KaijuPeek";

export default function Hero() {
  const artRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = artRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  }

  function handleMouseLeave() {
    const el = artRef.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <section
      className="relative overflow-hidden border-b-2 border-vgs-black bg-glow-cream px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:min-h-[90vh]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 texture-halftone opacity-[0.07]"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-vgs-grey">
        <span>VGS</span>
        <span>Vancouver / CA</span>
      </div>

      <div className="relative mx-auto mt-8 grid max-w-7xl grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12">
        <div className="relative z-10 lg:col-span-7">
          <h1 className="font-display leading-[0.95] text-vgs-black text-[15vw] sm:text-7xl lg:text-8xl">
            WE MAKE
            <br />
            <span className="text-vgs-red">PLAYFUL</span>
            <br />
            GAMES.
          </h1>

          <p className="mt-8 max-w-md text-lg font-medium text-vgs-black/80">
            Independent game studio based in Vancouver.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <DecorativeShape kind="star" rotate={-8} />
            <a
              href="#kaiju-corp"
              className="font-display text-sm uppercase tracking-[0.15em] text-vgs-black transition-colors duration-150 ease-out hover:text-vgs-red"
            >
              See what we&apos;re making
            </a>
          </div>
        </div>

        <div className="relative z-10 lg:col-span-5">
          <div ref={artRef} className="relative mx-auto max-w-sm transition-transform duration-150 ease-out">
            <KaijuPeek className="mx-auto w-full drop-shadow-[6px_10px_0_rgba(22,22,22,0.08)]" />
          </div>
          <DecorativeShape
            kind="tag"
            label="NEW!"
            rotate={-6}
            className="absolute left-2 top-0 sm:left-6"
          />
          <DecorativeShape
            kind="sparkle"
            color="blue"
            rotate={12}
            className="absolute right-2 top-6"
          />
          <DecorativeShape
            kind="star"
            color="yellow"
            rotate={-10}
            className="absolute bottom-4 left-0"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl items-end justify-between">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-vgs-black">
          Independent
          <br />
          Game Studio
        </p>
        <a
          href="#about-vgs"
          aria-label="Scroll to next section"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-vgs-black text-vgs-black transition-transform duration-150 ease-out hover:translate-y-1 hover:bg-vgs-red hover:text-vgs-cream motion-safe:animate-bounce"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
