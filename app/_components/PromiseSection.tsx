"use client";

import { useEffect, useRef, useState } from "react";

type Faculty = {
  country: string;
  flag: string;
  degree: string;
  city: string;
};

const FACULTY: Faculty[] = [
  { country: "United Kingdom", flag: "🇬🇧", degree: "M.Ed.", city: "London" },
  { country: "United States", flag: "🇺🇸", degree: "M.A.", city: "Boston" },
  { country: "France", flag: "🇫🇷", degree: "M.Sc.", city: "Paris" },
  { country: "Thailand", flag: "🇹🇭", degree: "M.Ed.", city: "Bangkok" },
];

const STEPS = [
  { word: "Attend.", caption: "Show up" },
  { word: "Pass.", caption: "Earn it" },
  { word: "Go.", caption: "University" },
];

export function PromiseSection() {
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
      { threshold: 0.25 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Our promise and faculty"
      className="section-y relative overflow-hidden bg-cream-soft text-ink"
    >
      {/* Soft ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-330 px-4 sm:px-8">
        {/* Eyebrow */}
        <div
          className={`mb-6 flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.28em] uppercase text-maroon transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span aria-hidden className="h-px w-8 bg-maroon/60" />
          Our Promise
        </div>

        {/* Motto — three-step reveal */}
        <h2 className="font-extrabold leading-[0.95] tracking-[-0.035em] text-[clamp(2.5rem,7.5vw,6rem)]">
          {STEPS.map((step, i) => (
            <span
              key={step.word}
              className="inline-flex items-baseline"
              style={{ transitionDelay: `${120 + i * 180}ms` }}
            >
              <span
                className={`inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${120 + i * 180}ms` }}
              >
                {step.word}
              </span>
              <span
                aria-hidden
                className={`ml-2 mr-5 text-[0.22em] font-semibold not-italic tracking-[0.18em] text-maroon/60 transition-all duration-[900ms] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${260 + i * 180}ms` }}
              >
                {step.caption}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className={`mr-5 inline-block h-[0.08em] w-[0.45em] origin-left bg-gold transition-transform duration-700 ease-out ${
                    visible ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 180}ms` }}
                />
              )}
            </span>
          ))}
        </h2>

        {/* Body grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className={`lg:col-span-7 transition-all duration-[900ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <p className="text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.6] tracking-tight text-ink/80">
              It is the simplest promise in education —
              <span className="text-ink"> and the one we quietly keep, year after year. </span>
              Students who attend, pass. Students who pass, head to university.
              Each cohort, more of them than the last.
            </p>
            <p className="mt-6 text-[15px] leading-[1.65] tracking-tight text-ink/65">
              The proof is not only in the GED transcript. It is in how our
              students perform once they sit down inside a university hall —
              with marks that quietly catch their professors&rsquo; attention.
            </p>
          </div>

          {/* Right — credential note */}
          <div
            className={`lg:col-span-5 transition-all duration-[900ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "820ms" }}
          >
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-7 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.28em] uppercase text-maroon">
                <span aria-hidden className="h-px w-6 bg-maroon/60" />
                The Faculty
              </div>
              <p className="text-[15px] leading-[1.6] tracking-tight text-ink/85">
                Ten years of international classroom experience, and
                master&rsquo;s degrees from{" "}
                <span className="font-semibold text-ink">
                  four countries across three continents.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Faculty country cards */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {FACULTY.map((f, i) => (
            <li
              key={f.country}
              className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-[900ms] ease-out hover:border-maroon/30 hover:shadow-[0_18px_40px_-20px_rgba(66,4,7,0.35)] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${950 + i * 110}ms` }}
            >
              {/* Hover gold sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between">
                <span className="text-3xl leading-none" aria-hidden>
                  {f.flag}
                </span>
                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-maroon">
                  {f.degree}
                </span>
              </div>
              <div className="mt-5 text-[15px] font-bold tracking-tight text-ink">
                {f.country}
              </div>
              <div className="mt-1 text-[11.5px] tracking-tight text-ink/55">
                {f.city}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
