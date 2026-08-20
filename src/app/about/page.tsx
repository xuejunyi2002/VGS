import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import DecorativeShape from "@/components/DecorativeShape";
import TeamMember from "@/components/TeamMember";
import SocialLinks from "@/components/SocialLinks";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — VGS Studio",
  description:
    "Meet VGS Studio, a small multidisciplinary indie game team based in Vancouver, Canada.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-vgs-black px-5 py-20 sm:px-8 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 texture-halftone opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-7xl">
          <SectionLabel>About VGS</SectionLabel>
          <h1 className="font-display leading-[0.95] text-vgs-black text-5xl sm:text-7xl lg:text-8xl">
            WE&apos;RE A SMALL
            <br />
            <span className="text-vgs-red">GAME TEAM</span>
            <br />
            FROM VANCOUVER.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-vgs-black/80">
            We&apos;re a multidisciplinary indie team exploring playful ways for
            people to experience games together.
          </p>
          <DecorativeShape kind="sparkle" color="blue" rotate={8} className="mt-8" />
        </div>
      </section>

      <section className="border-b-2 border-vgs-black px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-display text-4xl uppercase text-vgs-black sm:text-6xl">
            Four people.
            <br />
            One studio.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {team.map((member, i) => (
              <TeamMember key={member.name} member={member} offset={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-vgs-black px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-display text-3xl uppercase text-vgs-black sm:text-5xl">
            Say hi, or come hang out.
          </h2>
          <SocialLinks variant="inline-large" className="mt-10" />
        </div>
      </section>
    </>
  );
}
