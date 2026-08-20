export default function SectionLabel({
  children,
  onDark = false,
}: {
  children: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={`font-display text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 ${
        onDark ? "text-vgs-cream" : "text-vgs-red"
      }`}
    >
      {children}
    </p>
  );
}
