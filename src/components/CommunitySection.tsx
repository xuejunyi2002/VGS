import DecorativeShape from "./DecorativeShape";
import SocialLinks from "./SocialLinks";

export default function CommunitySection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-vgs-black bg-vgs-red px-5 py-20 text-vgs-cream sm:px-8 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 texture-halftone opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-7xl">
        <DecorativeShape kind="star" color="black" rotate={10} className="mb-6 text-vgs-black" />

        <h2 className="font-display leading-[0.95] text-4xl sm:text-6xl lg:text-7xl">
          COME
          <br />
          HANG OUT.
        </h2>

        <p className="mt-6 max-w-md text-lg font-medium text-vgs-cream/90">
          Follow what we&apos;re making and hang out with the community while
          Kaiju Corp. comes together.
        </p>

        <SocialLinks variant="inline-large" onDark className="mt-12" />
      </div>
    </section>
  );
}
