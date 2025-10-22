"use client";
import React from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { Cormorant_Garamond } from "next/font/google";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/menu", label: "Menu" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact Us" },
] satisfies ReadonlyArray<{ href: Route; label: string }>;

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: Route) => pathname === href;
  // Mobile uses a horizontal scroll nav; no hamburger state needed.

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal text-goldbeige border-y border-borderline pt-[env(safe-area-inset-top)]">
      {/* Mobile bar: centered logo */}
      <div className="md:hidden h-16 flex items-center justify-center px-4">
        <Link href="/" aria-label="Home" className="flex items-center">
          <div className="relative w-[48px] h-[48px]">
            <Image src={logoImg} alt="Site Logo" fill sizes="48px" className="object-contain" priority />
          </div>
        </Link>
      </div>

      {/* Mobile nav: horizontal scroll list */}
      <nav aria-label="Primary mobile" className="md:hidden w-full overflow-x-auto no-scrollbar nav-scroll-fade border-t border-borderline">
        <div className={`${cormorant.className} grid w-max min-w-full h-14 items-stretch nav-divider grid-flow-col auto-cols-[minmax(112px,1fr)]`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`flex items-center justify-center px-4 text-[15px] font-semibold tracking-[0.01em] transition-colors hover:bg-[#242424] snap-start ${
                isActive(l.href) ? "text-goldbeige" : "text-neutral-200"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Removed hamburger overlay on mobile in favor of scrollable links */}

      {/* Desktop nav: full grid row with dividers; scrolls on small screens */}
      <nav aria-label="Primary" className="hidden md:block w-full overflow-x-auto no-scrollbar nav-scroll-fade snap-x snap-mandatory">
        <div
          className={`${cormorant.className} grid w-max min-w-full h-16 sm:h-20 items-stretch border-x border-borderline nav-divider grid-cols-[56px_128px_200px_104px_104px_104px_104px_104px_104px] sm:grid-cols-[64px_136px_220px_110px_110px_110px_110px_110px_110px] md:grid-cols-[88px_144px_260px_120px_120px_120px_120px_120px_120px]`}
        >
          {/* Empty spacer (far left) */}
          <div />

          {/* Logo cell (using uploaded image) */}
          <Link href="/" className="flex items-center justify-center px-0" aria-label="Home">
            <div className="relative w-full h-[60px] sm:h-[68px] md:h-[80px]">
              <Image
                src={logoImg}
                alt="Site Logo"
                fill
                priority
                sizes="(min-width: 768px) 144px, 136px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Spacer after logo (moved from the end) */}
          <div />

          {/* Navigation items (fixed-width cells) */}
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`flex items-center justify-center px-4 text-[13.5px] sm:text-[14.5px] md:text-[15px] font-semibold tracking-[0.01em] transition-colors hover:bg-[#242424] snap-start ${
                isActive(l.href) ? "text-goldbeige" : "text-neutral-200"
              }`}
            >
              {l.label}
            </Link>
          ))}

          
        </div>
      </nav>
    </header>
  );
}
