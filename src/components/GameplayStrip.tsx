const kaijuTraits = ["Gesture", "Gaze", "Voice"];
const raiderTraits = ["Team Up", "Fight Back", "Survive"];

export default function GameplayStrip() {
  return (
    <div className="mt-16 border-2 border-vgs-black">
      <p className="border-b-2 border-vgs-black bg-vgs-light-grey px-6 py-4 text-center font-display text-lg uppercase tracking-wide sm:text-xl">
        Play Both Sides
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="border-b-2 border-vgs-black bg-vgs-red px-6 py-8 text-vgs-cream sm:border-b-0 sm:border-r-2">
          <p className="font-display text-2xl uppercase tracking-wide">VR Kaiju</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-vgs-cream/80">
            Controller-free
          </p>
          <ul className="mt-5 space-y-2 font-display text-base uppercase tracking-wide">
            {kaijuTraits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="bg-vgs-cream px-6 py-8 text-vgs-black">
          <p className="font-display text-2xl uppercase tracking-wide">PC Raiders</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-vgs-blue">
            Squad up
          </p>
          <ul className="mt-5 space-y-2 font-display text-base uppercase tracking-wide">
            {raiderTraits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t-2 border-vgs-black px-6 py-4 text-center font-display text-lg uppercase tracking-wide sm:text-xl">
        Two Sides. One Party.
      </p>
    </div>
  );
}
