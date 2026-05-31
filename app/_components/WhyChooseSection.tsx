"use client";

import { useEffect, useRef, useState } from "react";

function IconCap() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12" aria-hidden>
      <path d="M4 24 32 12l28 12-28 12L4 24z" />
      <path d="M14 28v10c0 3 8 6 18 6s18-3 18-6V28" />
      <path d="M58 24v12" />
      <path d="M58 36c-1.5 1-2.5 2.5-2.5 4h5c0-1.5-1-3-2.5-4z" fill="currentColor" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12" aria-hidden>
      <path d="M40 12c-3 0-6 1.5-8 4-2-2.5-5-4-8-4-6 0-10 4-10 9 0 2 .8 4 2 5.5C14.8 28 14 30 14 32c0 3 2 6 5 7-.6 1.4-1 3-1 4.5 0 5 4 8.5 9 8.5 2.5 0 5-1 6.5-2.5C35 51 37.5 52 40 52c5 0 9-3.5 9-8.5 0-1.5-.4-3.1-1-4.5 3-1 5-4 5-7 0-2-.8-4-2-5.5C52.2 25 53 23 53 21c0-5-4-9-9-9-1.4 0-2.8.3-4 .8" />
      <path d="M32 16v36" />
      <path d="M24 28c2 0 4 1 5 3" />
      <path d="M40 28c-2 0-4 1-5 3" />
      <path d="M22 38c2.5 1 4.5 1 6 0" />
      <path d="M42 38c-2.5 1-4.5 1-6 0" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12" aria-hidden>
      <circle cx="32" cy="32" r="22" />
      <path d="m26 38 4-14 12-4-4 14-12 4z" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
      <path d="M32 6v4M32 54v4M6 32h4M54 32h4" />
    </svg>
  );
}

type Feature = {
  icon: () => React.ReactElement;
  title: string;
  body: string;
  index: string;
};

const FEATURES: Feature[] = [
  {
    index: "01",
    icon: IconCap,
    title: "Proven\nPathways",
    body: "GED, IGCSE, and Pre-programmes engineered around outcomes — every cohort lands at a university bench, on schedule.",
  },
  {
    index: "02",
    icon: IconBrain,
    title: "World-Class\nFaculty",
    body: "Mentors with master's degrees from the UK, US, France, and Thailand — over a decade of international classroom craft.",
  },
  {
    index: "03",
    icon: IconCompass,
    title: "Student-First\nApproach",
    body: "Small cohorts, personal mentoring, and weekly progress letters to families — no student lost in the back row.",
  },
];

export function WhyChooseSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Why choose CIES"
      className="section-y relative overflow-hidden bg-cream-soft text-ink"
    >
      {/* SVG backgrounds — diagonal stripes + corner brackets, matching About */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 overflow-hidden"
      >
        <svg
          className="absolute left-[-10%] top-1/2 h-[min(78%,620px)] w-[min(58%,460px)] -translate-y-1/2"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="why-diagonal-l"
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
            <linearGradient id="why-fade-l" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="72%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="why-mask-l">
              <rect width="500" height="500" fill="url(#why-fade-l)" />
            </mask>
          </defs>
          <rect
            width="500"
            height="500"
            fill="url(#why-diagonal-l)"
            mask="url(#why-mask-l)"
          />
        </svg>
        <svg
          className="absolute left-0 top-[6%] h-[min(36%,300px)] w-[min(42%,260px)]"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path d="M0 72 L0 0 L72 0" stroke="#e8dfd0" strokeWidth="2" />
          <path d="M0 112 L0 28 L112 28" stroke="#ebe3d4" strokeWidth="1.25" />
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
          className="absolute right-[-10%] top-1/2 h-[min(78%,620px)] w-[min(58%,460px)] -translate-y-1/2 -scale-x-100"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="why-diagonal-r"
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
            <linearGradient id="why-fade-r" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="72%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="why-mask-r">
              <rect width="500" height="500" fill="url(#why-fade-r)" />
            </mask>
          </defs>
          <rect
            width="500"
            height="500"
            fill="url(#why-diagonal-r)"
            mask="url(#why-mask-r)"
          />
        </svg>
        <svg
          className="absolute right-0 top-[8%] h-[min(36%,300px)] w-[min(42%,260px)] -scale-x-100"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path d="M0 72 L0 0 L72 0" stroke="#e8dfd0" strokeWidth="2" />
          <path d="M0 112 L0 28 L112 28" stroke="#ebe3d4" strokeWidth="1.25" />
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

      <div className="relative mx-auto w-full max-w-330 px-4 sm:px-8">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-3 text-[10.5px] font-semibold tracking-[0.32em] uppercase text-maroon transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span aria-hidden className="h-px w-8 bg-maroon/50" />
          Why Choose CIES
          <span aria-hidden className="h-px w-8 bg-maroon/50" />
        </div>

        {/* Heading */}
        <h2
          className={`mx-auto mt-6 max-w-4xl text-center font-extrabold leading-[1.05] tracking-tight text-[clamp(2rem,4.6vw,3.5rem)] text-ink transition-all duration-900 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          One of Yangon&rsquo;s most{" "}
          <span className="italic text-maroon">trusted</span>{" "}
          international pathways &mdash; from first lesson to offer letter.
        </h2>

        {/* Feature grid */}
        <ul className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/70 p-8 backdrop-blur-sm transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-maroon/30 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(66,4,7,0.25)] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${320 + i * 140}ms` }}
              >
                {/* Hover gold sweep underline */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Index numeral */}
                <span
                  aria-hidden
                  className="absolute right-5 top-5 text-[11px] font-semibold tracking-[0.22em] text-ink/25"
                >
                  / {f.index}
                </span>

                {/* Icon */}
                <div className="text-maroon transition-transform duration-500 group-hover:scale-110">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-[20px] font-bold leading-[1.15] tracking-tight text-ink whitespace-pre-line">
                  {f.title}
                </h3>

                {/* Body */}
                <p className="mt-3 text-[14px] leading-[1.6] tracking-tight text-ink/65">
                  {f.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
