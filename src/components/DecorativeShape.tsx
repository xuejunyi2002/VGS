type DecorativeShapeProps = {
  kind: "star" | "sparkle" | "arrow" | "tag";
  label?: string;
  className?: string;
  rotate?: number;
  color?: "red" | "yellow" | "blue" | "black";
};

const colorMap: Record<NonNullable<DecorativeShapeProps["color"]>, string> = {
  red: "text-vgs-red",
  yellow: "text-vgs-yellow",
  blue: "text-vgs-blue",
  black: "text-vgs-black",
};

export default function DecorativeShape({
  kind,
  label,
  className = "",
  rotate = 0,
  color = "red",
}: DecorativeShapeProps) {
  const style = { transform: `rotate(${rotate}deg)` };

  if (kind === "star") {
    return (
      <span
        aria-hidden="true"
        className={`inline-block font-display text-3xl leading-none ${colorMap[color]} ${className}`}
        style={style}
      >
        ★
      </span>
    );
  }

  if (kind === "sparkle") {
    return (
      <span
        aria-hidden="true"
        className={`inline-block font-display text-2xl leading-none ${colorMap[color]} ${className}`}
        style={style}
      >
        ✦
      </span>
    );
  }

  if (kind === "arrow") {
    return (
      <span
        aria-hidden="true"
        className={`inline-block font-display text-2xl leading-none ${colorMap[color]} ${className}`}
        style={style}
      >
        ↗
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-block border-2 border-vgs-black bg-vgs-yellow px-2.5 py-1 font-display text-xs uppercase text-vgs-black ${className}`}
      style={style}
    >
      {label ?? "NEW!"}
    </span>
  );
}
