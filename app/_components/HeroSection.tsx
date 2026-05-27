"use client";

import { HeroBottomMarquee } from "./HeroBottomMarquee";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef } from "react";

const PROGRAMMES = ["IGCSE", "GED", "Pre-IGCSE", "Pre-GED"] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const updateParallax = useCallback(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const rect = section.getBoundingClientRect();
    const progress = Math.max(0, -rect.top);
    image.style.transform = `translate3d(0, ${progress * 0.16}px, 0) scale(1.06)`;
  }, []);

  useLenis(updateParallax);

  useEffect(() => {
    updateParallax();
  }, [updateParallax]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative h-[calc(100svh-122px)] min-h-[510px] w-full overflow-hidden"
    >
      <div
        ref={imageRef}
        aria-hidden
        className="absolute -inset-[12%] will-change-transform"
      >
        <Image
          src="/IMG_4393.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-[2px]"
        />
      </div>

      <div aria-hidden className="absolute inset-0 bg-ink/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-ink/70 via-ink/25 to-ink/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-ink/30"
      />

      {/* Organic wave — left, behind copy */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-1/2 z-[5] h-[min(95%,760px)] w-[min(62%,580px)] -translate-y-1/2 text-maroon/25"
        viewBox="0 0 500 500"
        fill="currentColor"
      >
        <path d="M412,72C348,8 228-12 128,48C28,108-8,228 32,338C72,448 192,508 312,468C402,438 452,348 472,238C482,178 476,118 412,72Z" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-[2%] top-[22%] z-[5] h-[min(65%,480px)] w-[min(44%,400px)] text-gold/10"
        viewBox="0 0 500 500"
        fill="currentColor"
      >
        <path d="M388,96C332,40 232,24 148,72C64,120 24,216 52,312C80,408 176,472 276,456C356,444 416,372 432,276C440,228 432,136 388,96Z" />
      </svg>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-330 items-center overflow-visible px-4 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="hero-text-chrome hero-text-chrome-shadow text-[clamp(2rem,4.5vw,3.375rem)] font-light leading-[1.2] tracking-[-0.015em]">
            <span className="block">We provide the best education</span>
            <span className="block font-extrabold">
              service for your children, until they go to University.
            </span>
          </h1>

          <p className="hero-subtext-chrome-shadow hero-subtext-chrome mt-5 max-w-xl text-base font-normal leading-[1.65]">
            IGCSE, GED, and pre-university programmes with clear pathways from
            Yangon to international campuses.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {PROGRAMMES.map((programme) => (
              <span
                key={programme}
                className="rounded-[3px] bg-maroon px-2.5 py-1 text-[11px] font-semibold tracking-tight text-gold"
              >
                {programme}
              </span>
            ))}
          </div>
        </div>
      </div>

      <HeroBottomMarquee />
    </section>
  );
}
