"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const PHONE_DISPLAY = "+95 9 123 456 789";
const PHONE_HREF = "tel:+959123456789";
const EMAIL_DISPLAY = "info@cies.edu";
const EMAIL_HREF = "mailto:info@cies.edu";
const ADDRESS = "No. 12, University Ave, Yangon, Myanmar";
const TAGLINE = "Empowering Futures Since 2024";

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61L12 2z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      {/* ── Utility bar ─────────────────────────────────────────── */}
      <div className="hidden bg-maroon text-cream-soft md:block">
        <div className="mx-auto grid w-full max-w-330 grid-cols-4 items-center divide-x divide-white/15 px-4 sm:px-8">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 py-2.5 text-[12px] font-medium tracking-tight transition hover:text-gold"
          >
            <IconPhone />
            {PHONE_DISPLAY}
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center justify-center gap-2 py-2.5 text-[12px] font-medium tracking-tight transition hover:text-gold"
          >
            <IconMail />
            {EMAIL_DISPLAY}
          </a>
          <div className="flex items-center justify-center gap-2 py-2.5 text-[12px] font-medium tracking-tight">
            <IconPin />
            {ADDRESS}
          </div>
          <div className="flex items-center justify-center gap-2 py-2.5 text-[12px] font-semibold tracking-tight text-gold-soft">
            <IconStar />
            {TAGLINE}
          </div>
        </div>
      </div>

      {/* ── Main bar ────────────────────────────────────────────── */}
      <div className="bg-cream-soft shadow-[0_1px_0_rgba(18,18,18,0.06)]">
        <div className="mx-auto flex w-full max-w-330 items-center justify-between gap-4 px-4 py-2 sm:px-8 sm:py-2.5">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Complete International Education Service"
            className="group flex items-center gap-3.5"
          >
            <Image
              src="/IMG_4392-removebg-preview(1).png"
              alt=""
              width={400}
              height={500}
              priority
              className="h-15 w-auto sm:h-17"
            />
            <span className="hidden flex-col items-stretch justify-center leading-[0.85] sm:flex">
              <span className="text-[12px] font-normal tracking-[-0.015em] text-ink">
                COMPLETE
              </span>
              <span className="mt-0.75 text-[12px] font-normal tracking-[-0.015em] text-ink">
                INTERNATIONAL
              </span>
              <span className="mt-1.5 block rounded-[3px] bg-maroon px-2 py-[3px] text-center text-[8.5px] font-normal leading-none tracking-tight text-gold">
                Education&nbsp;Service
              </span>
            </span>
          </Link>

          {/* Desktop nav + actions */}
          <div className="hidden items-center gap-7 lg:flex">
            <nav aria-label="Primary" className="flex items-center gap-7">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-[14px] font-medium tracking-tight text-ink-soft transition hover:text-maroon"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Apply CTA */}
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-ink/85 bg-transparent px-5 py-2.5 text-[13px] font-semibold tracking-tight text-ink transition hover:border-maroon hover:text-cream-soft"
            >
              <span className="absolute inset-0 -translate-x-full bg-maroon transition-transform duration-400 ease-out group-hover:translate-x-0" />
              <span className="relative z-10">Apply Now</span>
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-cream-soft text-ink transition hover:bg-cream lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-4 rounded-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[10px] h-[2px] w-4 rounded-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile sheet ───────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-cream-soft transition-[max-height,opacity] duration-400 ease-out lg:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pt-2 pb-6 sm:px-8">
          {NAV.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-ink/10 py-3.5 text-[15px] font-medium text-ink transition hover:text-maroon"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">
                / 0{i + 1}
              </span>
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3.5 text-[13px] font-semibold tracking-tight text-cream-soft transition hover:bg-maroon-deep"
          >
            Apply Now
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
