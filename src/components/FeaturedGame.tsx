import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import GameplayStrip from "./GameplayStrip";
import TrailerBlock from "./TrailerBlock";
import { game } from "@/lib/data";

export default function FeaturedGame() {
  return (
    <section id="kaiju-corp" className="bg-vgs-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>02 / Current Project</SectionLabel>

        <div className="-mx-5 bg-vgs-red px-5 py-14 sm:-mx-8 sm:px-10 sm:py-20 lg:mx-0 lg:px-10">
          <h2 className="text-poster font-display leading-[0.9] text-[16vw] sm:text-8xl lg:text-[7vw]">
            KAIJU
            <br />
            CORP.
          </h2>
        </div>

        <p className="mt-6 font-display text-sm uppercase tracking-[0.2em] text-vgs-grey">
          {game.tagline}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-2xl leading-tight text-vgs-black sm:text-4xl">
              ONE VR KAIJU.
              <br />
              A TEAM OF PC RAIDERS.
              <br />
              <span className="text-vgs-red">TOTAL CHAOS.</span>
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-vgs-black/80 sm:text-lg">
              {game.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href={game.buttons.trailer.href}>
                {game.buttons.trailer.label}
              </CTAButton>
              <CTAButton href={game.buttons.follow.href} variant="secondary" external>
                {game.buttons.follow.label}
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TrailerBlock />
          </div>
        </div>

        <GameplayStrip />
      </div>
    </section>
  );
}
