import { socials } from "@/lib/data";
import { socialIcons } from "./icons";

type SocialLinksProps = {
  variant?: "nav" | "stacked" | "inline-large";
  onDark?: boolean;
  className?: string;
};

export default function SocialLinks({
  variant = "nav",
  onDark = false,
  className = "",
}: SocialLinksProps) {
  const color = onDark ? "text-vgs-cream" : "text-vgs-black";

  if (variant === "nav") {
    return (
      <ul className={`flex items-center gap-4 ${className}`}>
        {socials.map((social) => {
          const Icon = socialIcons[social.name];
          return (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`block transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:text-vgs-red ${color}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  if (variant === "stacked") {
    return (
      <ul className={`flex flex-col gap-3 ${className}`}>
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-display text-xl uppercase tracking-wide transition-transform duration-150 ease-out hover:translate-x-1 ${color}`}
            >
              {social.name}
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-x-8 gap-y-4 ${className}`}>
      {socials.map((social) => {
        const Icon = socialIcons[social.name];
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 font-display text-2xl sm:text-3xl uppercase tracking-wide transition-transform duration-150 ease-out hover:-translate-y-1 ${color}`}
            >
              <Icon className="h-7 w-7" />
              {social.name}
              <span aria-hidden="true" className="text-lg">↗</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
