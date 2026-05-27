const TICKER = [
  "Complete International",
  "Education Service",
  "IGCSE",
  "GED",
  "University Pathways",
  "Yangon",
] as const;

export function HeroBottomMarquee() {
  const loop = [...TICKER, ...TICKER];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[clamp(4.5rem,13vw,9.5rem)] overflow-hidden"
    >
      <div className="hero-bottom-marquee-track absolute bottom-[-0.1em] left-0 flex w-max items-center whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center pr-[0.28em]"
          >
            <span className="text-[clamp(4.5rem,14vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-white/30">
              {item}
            </span>
            <span className="px-[0.18em] text-[clamp(4.5rem,14vw,11rem)] font-extrabold leading-[0.85] text-white/18">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
