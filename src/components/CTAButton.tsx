import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 border-2 border-vgs-black px-5 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-comic-sm";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-vgs-red text-vgs-cream shadow-comic hover:bg-vgs-red-dark",
  secondary: "bg-vgs-cream text-vgs-black shadow-comic hover:bg-vgs-light-grey",
  onDark: "bg-vgs-cream text-vgs-black border-vgs-black shadow-[4px_4px_0_var(--vgs-red)] hover:bg-vgs-yellow",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
