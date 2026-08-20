"use client";

import { useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = bgRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${x * 8}px, ${y * 8}px) scale(1.03)`;
  }

  function handleMouseLeave() {
    const el = bgRef.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px) scale(1)";
  }

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-vgs-cream"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/*
        Reserved for a background video: drop a <video autoPlay muted loop
        playsInline> here (object-cover, absolute inset-0) once footage is
        ready. Kept empty/transparent for now.
      */}
      <div ref={bgRef} className="absolute inset-0 -z-10 transition-transform duration-300 ease-out" />

      <div className="relative flex flex-1 flex-col justify-between px-5 py-24 sm:px-8 sm:py-28">
        <h1 className="font-display leading-[0.95] text-vgs-red text-[14vw] sm:text-7xl lg:text-8xl">
          WE MAKE PLAYFUL
          <br />
          GAMES.
        </h1>

        <div className="mt-16 flex items-end justify-between">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-vgs-black sm:text-sm">
            Independent Game Studio
            <br />
            Vancouver, Canada
          </p>
          <a
            href="#about-vgs"
            aria-label="Scroll to next section"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-vgs-black text-vgs-black transition-transform duration-150 ease-out hover:translate-y-1 hover:bg-vgs-red hover:text-vgs-cream motion-safe:animate-bounce"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}
