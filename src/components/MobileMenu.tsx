"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";
import SocialLinks from "./SocialLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="site-menu"
      className={`fixed inset-x-0 top-[64px] z-40 origin-top border-b-2 border-vgs-black bg-vgs-cream transition-transform duration-200 ease-out ${
        open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
      }`}
      style={{ transformOrigin: "top" }}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8">
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="font-display text-3xl uppercase tracking-wide text-vgs-black transition-colors duration-150 ease-out hover:text-vgs-red sm:text-5xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-0.5 w-12 bg-vgs-red" aria-hidden="true" />
        <SocialLinks variant="nav" className="gap-6" />
      </nav>
    </div>
  );
}
