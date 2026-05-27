const ITEMS = [
  "Spring 2026 GED batch — seats filling fast",
  "Free GED mock exam every Saturday, 10 AM",
  "University Pathway info session — June 8",
  "New: SAT prep cohort opens July 1",
  "Scholarship results for Semester 2 are out",
  "Open house — visit our Yangon campus this Sunday",
];

function Bullet() {
  return (
    <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold/70" />
  );
}

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-20 border-b border-ink/10 bg-cream-soft">
      <div className="mx-auto flex w-full max-w-330 items-stretch px-4 sm:px-8">
        {/* Pinned label */}
        <div className="relative z-10 hidden shrink-0 items-center gap-2 border-r border-ink/10 pr-5 py-2.5 md:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-maroon" />
          <span className="text-[12px] font-normal tracking-tight text-ink">
            Apply / Admitted?{" "}
            <span className="text-maroon">Let&rsquo;s make it official!</span>
          </span>
        </div>

        {/* Scrolling area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Edge fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-cream-soft via-cream-soft to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-cream-soft via-cream-soft to-transparent"
          />

          <div className="flex w-max animate-marquee items-center gap-8 py-2.5 whitespace-nowrap">
            {loop.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 text-[12px] font-medium tracking-tight text-ink-soft/85"
              >
                <Bullet />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
