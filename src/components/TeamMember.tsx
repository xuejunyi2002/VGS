import type { TeamMemberData } from "@/lib/data";
import { LinkedInIcon } from "./icons";

export default function TeamMember({
  member,
  offset = false,
}: {
  member: TeamMemberData;
  offset?: boolean;
}) {
  return (
    <div className={`group ${offset ? "sm:mt-16" : ""}`}>
      <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-vgs-black bg-vgs-light-grey shadow-comic transition-transform duration-150 ease-out group-hover:-translate-y-1">
        <div
          aria-hidden="true"
          className="absolute inset-0 texture-halftone opacity-[0.07]"
        />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center transition-transform duration-150 ease-out group-hover:-rotate-1 group-hover:scale-[1.02]">
          <span className="font-display text-xs uppercase tracking-[0.15em] opacity-60">
            Photo placeholder
          </span>
        </div>

        <span className="absolute left-3 top-3 font-display text-sm text-vgs-black/50">
          {member.index}
        </span>

        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-10 w-10 items-center justify-center border-2 border-vgs-black bg-vgs-cream text-vgs-black"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 border-2 border-vgs-red opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
      </div>

      <div className="mt-4">
        <p className="font-display text-xl uppercase tracking-wide text-vgs-black sm:text-2xl">
          {member.name}
        </p>
        <p className="mt-1 text-sm font-bold uppercase tracking-wide text-vgs-red">
          {member.role}
        </p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-vgs-black/70">
          {member.bio}
        </p>
        {(member.linkedin || member.portfolio) && (
          <div className="mt-3 flex gap-4 text-xs font-bold uppercase tracking-wide">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-vgs-red">
                LinkedIn
              </a>
            )}
            {member.portfolio && (
              <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-vgs-red">
                Portfolio
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
