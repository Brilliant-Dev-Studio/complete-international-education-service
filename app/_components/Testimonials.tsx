"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const ITEMS: Testimonial[] = [
  {
    quote:
      "From Yangon to an international campus, CIES walked with us at every step — applications, interviews, and visa guidance. My family always knew what came next.",
    name: "Su Mon",
    role: "University Pathway, Class of 2023",
    initials: "SM",
  },
  {
    quote:
      "I came in struggling with maths and left with a GED score I never thought possible. The teachers don't just teach — they sit with you until it clicks.",
    name: "Kaung Htet",
    role: "GED Programme, Class of 2024",
    initials: "KH",
  },
  {
    quote:
      "The Pre-IGCSE foundation gave my daughter the confidence to study abroad. We received clear, honest updates from week one — no surprises, just steady progress.",
    name: "Daw Thida",
    role: "Parent, Pre-IGCSE Cohort 2024",
    initials: "DT",
  },
  {
    quote:
      "Three universities offered me places — including my first choice in Singapore. CIES made the impossible feel like just another Tuesday on the calendar.",
    name: "Nyein Chan",
    role: "IGCSE — University Pathway, 2025",
    initials: "NC",
  },
];

function IconArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = ITEMS.length;

  const go = (delta: number) =>
    setIndex((i) => (i + delta + total) % total);

  return (
    <section
      aria-label="Student testimonials"
      className="w-full px-4 py-16 sm:px-8 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-330 overflow-hidden rounded-3xl bg-maroon-deep text-cream-soft shadow-[0_30px_80px_-30px_rgba(42,2,5,0.55)]">
        {/* Subtle gold orbital glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-130 w-130 rounded-full bg-gold/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-[-10%] h-105 w-105 rounded-full bg-maroon/40 blur-3xl"
        />

        <div className="relative grid w-full grid-cols-1 gap-10 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:px-16 lg:py-16">
        {/* Left — heading */}
        <div className="lg:col-span-5">
          <div className="mb-5 flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.28em] uppercase text-gold">
            <span aria-hidden className="h-px w-8 bg-gold/70" />
            Testimonials
          </div>
          <h2 className="font-extrabold leading-[0.95] tracking-[-0.025em] text-[clamp(1.75rem,3.4vw,2.75rem)]">
            Happy students
            <br />
            sharing{" "}
            <span className="italic text-gold-soft">experiences</span>
          </h2>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-cream-soft/65">
            Letters from the desk — graduates, parents, and the small wins
            that built their pathway.
          </p>
        </div>

        {/* Right — slider */}
        <div className="lg:col-span-7">
          <p className="mb-8 text-[13px] tracking-tight text-cream-soft/70">
            Inspired journeys, honest reflections.
          </p>

          {/* Slide track */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            >
              {ITEMS.map((t, i) => (
                <article
                  key={t.name}
                  aria-hidden={i !== index}
                  className="w-full shrink-0 pr-2"
                >
                  <blockquote
                    className={`text-[clamp(1rem,1.3vw,1.2rem)] leading-normal tracking-tight text-cream-soft transition-all duration-700 ${
                      i === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    <span aria-hidden className="mr-1 text-gold">
                      &ldquo;
                    </span>
                    {t.quote}
                    <span aria-hidden className="ml-1 text-gold">
                      &rdquo;
                    </span>
                  </blockquote>

                  <figcaption
                    className={`mt-10 flex items-center gap-4 transition-all delay-150 duration-700 ${
                      i === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream-soft text-[12px] font-bold tracking-wide text-maroon-deep">
                      {t.initials}
                    </span>
                    <div className="leading-tight">
                      <div className="text-[15px] font-semibold tracking-tight text-cream-soft">
                        {t.name}
                      </div>
                      <div className="mt-1 text-[12px] tracking-tight text-cream-soft/60">
                        {t.role}
                      </div>
                    </div>
                  </figcaption>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-between">
            {/* Pagination */}
            <div className="flex items-center gap-2">
              {ITEMS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-gold"
                      : "w-4 bg-cream-soft/25 hover:bg-cream-soft/40"
                  }`}
                />
              ))}
              <span className="ml-4 text-[11px] font-semibold tracking-[0.22em] uppercase text-cream-soft/55 tabular-nums">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream-soft/25 text-cream-soft/85 transition hover:border-gold hover:bg-cream-soft/5 hover:text-gold"
              >
                <IconArrow flip />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-12 w-12 place-items-center rounded-full border border-gold bg-gold/15 text-gold transition hover:bg-gold hover:text-maroon-deep"
              >
                <IconArrow />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
