import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-vgs-black px-5 pt-16 text-vgs-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2">
          <div>
            <p className="font-display text-2xl">VGS</p>
            <p className="mt-3 max-w-xs text-sm font-medium uppercase tracking-wide text-vgs-cream/70">
              Independent game studio
              <br />
              Vancouver, Canada
            </p>
            <nav aria-label="Footer" className="mt-6 flex gap-6">
              <Link href="/" className="text-sm font-bold uppercase tracking-wide hover:text-vgs-red">
                Home
              </Link>
              <Link href="/about" className="text-sm font-bold uppercase tracking-wide hover:text-vgs-red">
                About
              </Link>
            </nav>
          </div>

          <div className="sm:justify-self-end">
            <SocialLinks variant="stacked" onDark />
          </div>
        </div>

        <div className="border-t border-vgs-cream/20 py-6 text-xs font-medium uppercase tracking-wide text-vgs-cream/60">
          © 2026 VGS Studio
        </div>
      </div>

      <p
        aria-hidden="true"
        className="select-none overflow-hidden whitespace-nowrap text-center font-display leading-none text-vgs-cream/10"
        style={{ fontSize: "min(32vw, 320px)", marginBottom: "-6vw" }}
      >
        VGS
      </p>
    </footer>
  );
}
