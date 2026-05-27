import Link from "next/link";
import { AboutImageCollage } from "./AboutImageCollage";

const FEATURES = [
  {
    label: "Structured IGCSE & GED programmes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M8 21h8M12 17v4M7 4h10l1 4H6l1-4zM6 8v5a6 6 0 0 0 12 0V8" />
      </svg>
    ),
  },
  {
    label: "Expert & experienced instructors",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
] as const;

export function AboutSection() {
  return (
    <section
      aria-label="About us"
      className="section-y relative overflow-hidden bg-cream"
    >
      {/* SVG backgrounds — geometric patterns, 2 per side */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 overflow-hidden"
      >
        <svg
          className="absolute -left-[10%] top-1/2 h-[min(78%,620px)] w-[min(58%,460px)] -translate-y-1/2"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="about-diagonal-l"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-32)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="18"
                stroke="#ddd4c4"
                strokeWidth="0.8"
              />
            </pattern>
            <linearGradient id="about-fade-l" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="72%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="about-mask-l">
              <rect width="500" height="500" fill="url(#about-fade-l)" />
            </mask>
          </defs>
          <rect
            width="500"
            height="500"
            fill="url(#about-diagonal-l)"
            mask="url(#about-mask-l)"
          />
        </svg>
        <svg
          className="absolute left-0 top-[6%] h-[min(36%,300px)] w-[min(42%,260px)]"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path
            d="M0 72 L0 0 L72 0"
            stroke="#e8dfd0"
            strokeWidth="2"
          />
          <path
            d="M0 112 L0 28 L112 28"
            stroke="#ebe3d4"
            strokeWidth="1.25"
          />
          <line x1="28" y1="0" x2="28" y2="168" stroke="#ebe3d4" strokeWidth="1" />
          <line x1="0" y1="56" x2="192" y2="56" stroke="#ebe3d4" strokeWidth="1" />
          <line x1="0" y1="112" x2="192" y2="112" stroke="#f0e8da" strokeWidth="1" />
          <line x1="56" y1="28" x2="56" y2="168" stroke="#f0e8da" strokeWidth="1" />
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 overflow-hidden"
      >
        <svg
          className="absolute -right-[10%] top-1/2 h-[min(78%,620px)] w-[min(58%,460px)] -translate-y-1/2 -scale-x-100"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="about-diagonal-r"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-32)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="18"
                stroke="#ddd4c4"
                strokeWidth="0.8"
              />
            </pattern>
            <linearGradient id="about-fade-r" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="72%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="about-mask-r">
              <rect width="500" height="500" fill="url(#about-fade-r)" />
            </mask>
          </defs>
          <rect
            width="500"
            height="500"
            fill="url(#about-diagonal-r)"
            mask="url(#about-mask-r)"
          />
        </svg>
        <svg
          className="absolute right-0 top-[8%] h-[min(36%,300px)] w-[min(42%,260px)] -scale-x-100"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path
            d="M0 72 L0 0 L72 0"
            stroke="#e8dfd0"
            strokeWidth="2"
          />
          <path
            d="M0 112 L0 28 L112 28"
            stroke="#ebe3d4"
            strokeWidth="1.25"
          />
          <line x1="28" y1="0" x2="28" y2="168" stroke="#ebe3d4" strokeWidth="1" />
          <line x1="0" y1="56" x2="192" y2="56" stroke="#ebe3d4" strokeWidth="1" />
          <line
            x1="0"
            y1="112"
            x2="192"
            y2="112"
            stroke="#420407"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <line
            x1="56"
            y1="28"
            x2="56"
            y2="168"
            stroke="#420407"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-330 grid-cols-1 items-start gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image collage — left portrait centered, right stack */}
        <AboutImageCollage />

        {/* Copy — right */}
        <div className="max-w-xl lg:pt-1">
          <span className="ink-subtext-chrome ink-subtext-chrome-shadow inline-block rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-bold tracking-[0.14em] uppercase">
            Who we are
          </span>

          <h2 className="ink-text-chrome-shadow mt-7 text-[clamp(2rem,3.6vw,2.875rem)] font-bold leading-[1.32] tracking-[-0.025em]">
            <span className="ink-text-chrome ink-text-chrome-multiline">
              International education for a global future
            </span>
          </h2>

          <p className="ink-subtext-chrome ink-subtext-chrome-shadow mt-6 max-w-[38rem] text-base leading-[1.65]">
            At Complete International Education Service, we prepare students for
            IGCSE, GED, and beyond — with structured programmes, experienced
            instructors, and clear pathways to international universities.
          </p>

          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {FEATURES.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-4 py-5 text-[17px] font-bold leading-snug"
              >
                <span className="shrink-0 text-maroon">{feature.icon}</span>
                <span className="ink-text-chrome ink-text-chrome-shadow">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/apply"
            className="group mt-10 inline-flex items-center gap-3.5 rounded-full border border-ink/10 bg-white py-1.5 pr-7 pl-1.5 text-[13px] font-bold tracking-[0.08em] uppercase transition-[border-color,gap] duration-300 hover:border-maroon/25 hover:gap-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-maroon text-cream-soft transition-transform duration-300 ease-out group-hover:translate-x-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <span className="ink-text-chrome ink-text-chrome-shadow">Apply Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
