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
  "inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors duration-150 ease-out";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-vgs-red text-vgs-cream hover:bg-vgs-red-dark",
  secondary: "border border-vgs-black text-vgs-black hover:bg-vgs-black hover:text-vgs-cream",
  onDark: "border border-vgs-cream text-vgs-cream hover:bg-vgs-cream hover:text-vgs-black",
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
