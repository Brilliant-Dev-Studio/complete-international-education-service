"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutImageCollage() {
  const collageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = collageRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={collageRef} className="flex items-center gap-3 sm:gap-4">
      <div className="relative aspect-3/4 w-[54%] shrink-0 overflow-hidden">
        <div
          className={`about-img-reveal about-img-reveal-left absolute inset-0${inView ? " is-visible" : ""}`}
        >
          <Image
            src="/whowearetwo.jpg"
            alt="CIES graduates group photo at ceremony"
            fill
            sizes="(max-width: 1024px) 54vw, 22vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="flex w-[46%] flex-col gap-3 sm:gap-4">
        <div className="relative aspect-square overflow-hidden">
          <div
            className={`about-img-reveal about-img-reveal-top absolute inset-0${inView ? " is-visible" : ""}`}
          >
            <Image
              src="/whoweareone.jpg"
              alt="CIES graduation ceremony on stage"
              fill
              sizes="(max-width: 1024px) 46vw, 18vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative aspect-[5/6] overflow-hidden">
          <div
            className={`about-img-reveal about-img-reveal-bottom absolute inset-0${inView ? " is-visible" : ""}`}
          >
            <Image
              src="/whowearethree.jpg"
              alt="CIES graduation celebration with students"
              fill
              sizes="(max-width: 1024px) 46vw, 18vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
