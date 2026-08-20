import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { ArrowRightIcon } from "./icons";

type StudioIntroProps = {
  id?: string;
  label: string;
  heading: string[];
  body: string[];
  showTeamCta?: boolean;
};

export default function StudioIntro({
  id,
  label,
  heading,
  body,
  showTeamCta = true,
}: StudioIntroProps) {
  return (
    <section id={id} className="border-b-2 border-vgs-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>{label}</SectionLabel>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h2 className="font-display leading-[0.98] text-vgs-black text-4xl sm:text-6xl lg:col-span-8 lg:text-7xl">
            {heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div className="max-w-sm space-y-4 text-base leading-relaxed text-vgs-black/80 sm:text-lg">
              {body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {showTeamCta && (
              <CTAButton href="/about" variant="secondary">
                Meet the Team <ArrowRightIcon className="h-4 w-4" />
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
