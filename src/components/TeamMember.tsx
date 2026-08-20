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
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-vgs-light-grey">
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <span className="font-display text-xs uppercase tracking-[0.15em] text-vgs-black/40">
            Photo placeholder
          </span>
        </div>

        <span className="absolute left-3 top-3 font-display text-sm text-vgs-black/40">
          {member.index}
        </span>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-vgs-cream text-vgs-black opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        )}
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
