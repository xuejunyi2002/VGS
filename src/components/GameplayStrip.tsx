const kaijuTraits = ["Gesture", "Gaze", "Voice"];
const raiderTraits = ["Team Up", "Fight Back", "Survive"];

export default function GameplayStrip() {
  return (
    <div className="mt-20">
      <p className="font-display text-sm uppercase tracking-[0.2em] text-vgs-grey">
        Play Both Sides
      </p>

      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-vgs-red">VR Kaiju</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-vgs-grey">
            Controller-free
          </p>
          <ul className="mt-4 space-y-1 text-base text-vgs-black/80">
            {kaijuTraits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-vgs-black">PC Raiders</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-vgs-blue">
            Squad up
          </p>
          <ul className="mt-4 space-y-1 text-base text-vgs-black/80">
            {raiderTraits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 font-display text-lg uppercase tracking-wide text-vgs-black">
        Two Sides. One Party.
      </p>
    </div>
  );
}
