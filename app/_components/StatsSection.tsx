"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    target: 500,
    suffix: "+",
    label:
      "Active students enrolled across IGCSE, GED, and pre-university programmes",
  },
  {
    target: 120,
    suffix: "+",
    label:
      "Graduates placed into international universities through our pathways",
  },
] as const;

const BADGE_COUNT = 500;

function easeOutExpo(progress: number) {
  return progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
}

function AnimatedCounter({
  target,
  suffix = "",
  className,
  duration = 2200,
}: {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(easeOutExpo(progress) * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

function StudentAvatars() {
  return (
    <div className="flex -space-x-2.5" aria-hidden>
      {["#c59235", "#d8ac5a", "#f4ede0"].map((color, i) => (
        <span
          key={color}
          className="grid h-9 w-9 place-items-center rounded-full border-2 border-maroon-deep text-[11px] font-bold text-maroon-deep"
          style={{ backgroundColor: color, zIndex: 3 - i }}
        >
          {["A", "K", "M"][i]}
        </span>
      ))}
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      aria-label="Student outcomes"
      className="section-y relative overflow-hidden bg-maroon-deep"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[12%] top-1/2 h-[min(90%,640px)] w-[min(55%,520px)] -translate-y-1/2 rounded-full bg-maroon/30 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-330 grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div>
          <span className="hero-subtext-chrome hero-subtext-chrome-shadow inline-block rounded-full border border-white/25 px-5 py-2 text-[12px] font-bold tracking-[0.14em] uppercase">
            Since 2024
          </span>

          <h2 className="hero-text-chrome-shadow mt-7 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.28] tracking-[-0.025em] text-pretty">
            <span className="hero-text-chrome ink-text-chrome-multiline">
              From Yangon classrooms to universities worldwide
            </span>
          </h2>

          <dl className="mt-12 space-y-10 sm:mt-14">
            {STATS.map((stat) => (
              <div
                key={stat.target}
                className="border-b border-white/15 pb-10 last:border-b-0 last:pb-0"
              >
                <dt
                  className="text-[clamp(3rem,8vw,5.25rem)] font-bold leading-none tracking-[-0.04em] tabular-nums"
                  aria-label={`${stat.target}${stat.suffix}`}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="hero-text-chrome hero-text-chrome-shadow"
                  />
                </dt>
                <dd className="hero-subtext-chrome hero-subtext-chrome-shadow mt-4 max-w-sm text-[16px] leading-[1.65]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="group relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.28)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="/hero_about.jpg"
              alt="CIES students at graduation ceremony"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_20%] transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-maroon-deep/50 via-transparent to-transparent"
            />
          </div>

          <div className="absolute bottom-5 left-5 flex max-w-[calc(100%-2.5rem)] items-center gap-3.5 rounded-2xl border border-white/15 bg-ink/35 px-4 py-3.5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:px-5 sm:py-4">
            <StudentAvatars />
            <div>
              <p className="text-[15px] font-bold leading-tight tabular-nums">
                <AnimatedCounter
                  target={BADGE_COUNT}
                  suffix="+ Students"
                  className="hero-text-chrome hero-text-chrome-shadow"
                />
              </p>
              <p className="hero-subtext-chrome hero-subtext-chrome-shadow mt-0.5 text-[13px]">
                Growing every semester at CIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
