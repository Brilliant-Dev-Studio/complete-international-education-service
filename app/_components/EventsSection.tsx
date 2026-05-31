"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const EVENTS = [
  {
    date: "June 8, 2025",
    title: "University Pathway Info Session",
    image: "/event1.jpg",
    alt: "Students at a university pathway information session",
    objectPosition: "center 20%",
  },
  {
    date: "May 22, 2025",
    title: "Open House — Visit Our Yangon Campus",
    image: "/event2.jpg",
    alt: "Campus open house at Complete International Education Service",
    objectPosition: "center center",
  },
  {
    date: "Every Saturday, 10 AM",
    title: "Free GED Mock Exam",
    image: "/event3.jpg",
    alt: "Students preparing for GED mock examinations",
    objectPosition: "center top",
  },
] as const;

const CARD_SCROLL = 524;

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

export function EventsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction === "left" ? -CARD_SCROLL : CARD_SCROLL,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Events and activities"
      className="section-y relative overflow-x-clip bg-cream"
    >
      <div className="mx-auto w-full max-w-330 overflow-visible px-4 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.28em] uppercase text-ink/55">
              <span aria-hidden className="h-px w-8 bg-ink/40" />
              From the Calendar
            </div>
            <h2 className="text-[clamp(2rem,3.8vw,2.875rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Events &amp;{" "}
              <span className="italic font-extrabold">Activities</span>
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll events left"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-maroon/30 hover:text-maroon"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll events right"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-maroon/30 hover:text-maroon"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Left: container edge. Right: bleeds past container to viewport. */}
        <div
          ref={trackRef}
          className="events-slider mt-10 flex w-[calc(100vw-var(--container-inline-start))] max-w-none min-w-0 gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 sm:mt-12 sm:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pr-4 sm:pr-8"
        >
          {EVENTS.map((event) => (
            <article
              key={event.title}
              className="w-[min(78vw,28rem)] shrink-0 snap-start sm:w-[min(46vw,32rem)] lg:w-[31rem]"
            >
              <Link href="/events" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, 31rem"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: event.objectPosition }}
                  />
                </div>

                <time
                  dateTime={event.date}
                  className="mt-4 block text-sm text-muted"
                >
                  {event.date}
                </time>

                <p className="mt-1.5 text-base font-bold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-maroon">
                  {event.title}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
