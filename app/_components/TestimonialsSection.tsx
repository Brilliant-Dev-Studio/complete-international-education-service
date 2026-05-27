"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "CIES gave me a clear path from Pre-IGCSE to my final exams. The instructors pushed me to think independently, and I felt fully prepared when I sat my papers.",
    name: "Thiri Aung",
    role: "IGCSE Graduate, Class of 2024",
    initials: "TA",
    accent: "#c59235",
  },
  {
    quote:
      "The GED programme was structured week by week — mock exams, feedback, and support until I was confident. I got into my first-choice university abroad.",
    name: "Min Khant",
    role: "GED Graduate, Class of 2024",
    initials: "MK",
    accent: "#d8ac5a",
  },
  {
    quote:
      "From Yangon to an international campus, CIES walked with us at every step — applications, interviews, and visa guidance. My family always knew what came next.",
    name: "Su Mon",
    role: "University Pathway, Class of 2023",
    initials: "SM",
    accent: "#f4ede0",
  },
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
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
      {direction === "left" ? (
        <path d="M19 12H5M12 19l-7-7 7-7" />
      ) : (
        <path d="M5 12h14M12 5l7 7-7 7" />
      )}
    </svg>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[active]!;

  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  return (
    <section
      aria-label="Student testimonials"
      className="section-y bg-cream-soft"
    >
      <div className="mx-auto w-full max-w-330 px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-maroon-deep px-6 py-10 sm:px-10 sm:py-12 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-14 lg:py-16 xl:gap-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[8%] top-1/2 h-[min(70%,520px)] w-[min(45%,420px)] -translate-y-1/2 rounded-full bg-maroon/25 blur-3xl"
          />

          <h2 className="hero-text-chrome hero-text-chrome-shadow relative max-w-md text-[clamp(2rem,3.8vw,2.875rem)] font-bold leading-[1.12] tracking-[-0.025em]">
            Happy students sharing experiences
          </h2>

          <div className="relative mt-10 flex min-h-[min(20rem,45vh)] flex-col justify-between gap-10 lg:mt-0">
            <div>
              <p className="hero-subtext-chrome hero-subtext-chrome-shadow text-sm leading-snug">
                Inspired journeys, honest reflections.
              </p>

              <blockquote className="mt-6 max-w-xl">
                <p
                  key={active}
                  className="testimonial-quote-enter hero-subtext-chrome hero-subtext-chrome-shadow text-[clamp(1.125rem,1.8vw,1.25rem)] leading-[1.7]"
                >
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-6 flex items-center gap-3.5">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-maroon-deep text-[13px] font-bold text-maroon-deep"
                  style={{ backgroundColor: current.accent }}
                  aria-hidden
                >
                  {current.initials}
                </span>
                <div>
                  <cite className="hero-text-chrome hero-text-chrome-shadow not-italic text-base font-bold">
                    {current.name}
                  </cite>
                  <p className="hero-subtext-chrome hero-subtext-chrome-shadow mt-0.5 text-sm">
                    {current.role}
                  </p>
                </div>
              </footer>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-cream-soft transition hover:border-gold/40 hover:bg-white/10 hover:text-gold-soft"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-cream-soft transition hover:border-gold/40 hover:bg-white/10 hover:text-gold-soft"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
