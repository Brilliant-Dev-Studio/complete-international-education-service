import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const NAV_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Achievements", href: "/achievements" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Apply Now", href: "/apply" },
    ],
  },
] as const;

const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

const ADDRESS = "No. 12, University Ave, Yangon, Myanmar";
const MAP_HREF =
  "https://maps.google.com/?q=No.+12,+University+Ave,+Yangon,+Myanmar";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-cream-soft/45">
        {title}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block text-[14px] leading-[1.9] text-cream-soft/70 transition hover:text-gold-soft"
    >
      {children}
    </Link>
  );
}

function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
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

function SocialIcon({ label }: { label: string }) {
  const paths: Record<string, string> = {
    Facebook:
      "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    Instagram:
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M17.5 6.5h.01",
    LinkedIn: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2 M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    X: "M4 4l16 16M20 4 4 20",
    YouTube:
      "M22 8s-.2-1.4-.8-2C20.4 5 19 5 19 5H5s-1.4 0-2.2 1C2.2 7 2 8 2 8s-.2 1.4 0 2.8c.8 1 2.2 1 2.2 1h14s1.4 0 2.2-1c.8-1.4.8-2.8.8-2.8s.2-1.4 0-2.8z M10 15V9l6 3-6 3z",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[label] ?? "M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"} />
    </svg>
  );
}

function FooterLogoText() {
  return (
    <span className="flex flex-col items-stretch justify-center leading-[0.85]">
      <span className="text-[clamp(1.25rem,3vw,2rem)] font-normal tracking-[-0.015em] text-cream-soft">
        COMPLETE
      </span>
      <span className="mt-1 text-[clamp(1.25rem,3vw,2rem)] font-normal tracking-[-0.015em] text-cream-soft">
        INTERNATIONAL
      </span>
      <span className="mt-3 block w-fit rounded-[4px] bg-maroon px-3.5 py-2 text-[clamp(0.8rem,1.6vw,1rem)] font-normal leading-none tracking-tight text-gold">
        Education&nbsp;Service
      </span>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream-soft">
      <div className="mx-auto w-full max-w-330 px-4 pt-16 pb-10 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
          <div className="sm:row-span-2 lg:row-span-1">
            <FooterColumn title="Address">
              <p className="text-[14px] leading-[1.75] text-cream-soft/65">
                {ADDRESS}
              </p>
              <a
                href={MAP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-cream-soft/70 transition hover:text-gold-soft"
              >
                <IconPin />
                See on Map
              </a>
            </FooterColumn>
          </div>

          {NAV_GROUPS.map((group, index) => (
            <div
              key={group.title}
              className={index === 1 ? "sm:col-start-2 lg:col-start-auto" : undefined}
            >
              <FooterColumn title={group.title}>
                {group.links.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterColumn>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-cream-soft/10 pt-10 sm:mt-16 sm:flex-row sm:items-center">
          <Link
            href="/"
            aria-label="Complete International Education Service"
            className="flex items-center gap-6 sm:gap-7"
          >
            <Image
              src="/IMG_4392-removebg-preview(1).png"
              alt=""
              width={220}
              height={280}
              className="h-[clamp(6rem,14vw,9.5rem)] w-auto"
            />
            <FooterLogoText />
          </Link>

          <div className="flex items-center gap-2.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-soft/8 text-cream-soft/75 transition hover:bg-cream-soft/14 hover:text-gold-soft"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
