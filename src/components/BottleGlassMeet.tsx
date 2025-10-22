"use client";

import React from "react";
import Image from "next/image";
import { Cormorant_Garamond, Merriweather } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import bottle from "@/assets/bottle.png";
import glass from "@/assets/glass.png";
import bgBorder from "@/assets/background.png";

// Display serif fonts
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const merri = Merriweather({ subsets: ["latin"], weight: ["700", "900"], display: "swap" });

export default function BottleGlassMeet() {
  const START_OFFSET_VW = -3; // negative -> starts slightly off-screen; more negative = farther apart at start
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 while scrolling through the section
  const bottleRef = useRef<HTMLDivElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);
  const [shifts, setShifts] = useState({ left: 0, right: 0 });
  // UI tunables - adjusted for better visibility and touching animation
  const LINE_TOP_PCT = 12; // add a little top gap
  const LINE_BOTTOM_PCT = 1; // bring line slightly closer to bottom to reduce gap
  const BOTTLE_NUDGE_PX = 0; // center alignment
  const GLASS_NUDGE_PX = 0; // center alignment
  const CENTER_SHIFT_VW = 0; // centered
  const CENTER_SHIFT_PX = 0; // centered

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let ticking = false;

    const updateProgress = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Progress runs from when the section touches the bottom of the viewport
      // to the end of the sticky phase (when container bottom reaches viewport bottom).
      const viewport = window.innerHeight;
      const start = viewport; // rect.top == viewport -> just entering
      const end = -(Math.max(0, rect.height - viewport)); // sticky ends here
      const raw = (start - rect.top) / Math.max(1, start - end);
      const p = Math.max(0, Math.min(1, raw));
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Compute exact horizontal distances (in px) needed for both items to meet at center
  const recomputeDistances = useCallback(() => {
    const bottleEl = bottleRef.current;
    const glassEl = glassRef.current;
    if (!bottleEl || !glassEl) return;

    const vw = window.innerWidth;
    const leftEdge = vw * (START_OFFSET_VW / 100); // matches left: `${START_OFFSET_VW}vw`
    const rightEdge = vw * (START_OFFSET_VW / 100); // matches right: `${START_OFFSET_VW}vw`

    // Make items touch - minimal gap
    const edgeGap = Math.max(0, Math.min(20, vw * 0.01)); // very small gap for touching effect
    const centerX = vw / 2;
    const centerXShifted = centerX + vw * (CENTER_SHIFT_VW / 100) + CENTER_SHIFT_PX;

    // Visual inset per image to account for PNG white margins
    const insetRatio = 0.10; // ~10% of width for white sticker margins
    const minInset = 12; // at least 12px inset on each side

    // Bottle: right border (minus inset) at centerX - edgeGap/2
    const bottleWidth = bottleEl.offsetWidth;
    const bottleInset = Math.max(minInset, bottleWidth * insetRatio);
    const targetBottleLeft = centerXShifted - edgeGap / 2 - (bottleWidth - bottleInset) + BOTTLE_NUDGE_PX;
    const startBottleLeft = leftEdge;
    const bottleShift = targetBottleLeft - startBottleLeft; // positive px

    // Glass: left border (plus inset) at centerX + edgeGap/2
    const glassWidth = glassEl.offsetWidth;
    const glassInset = Math.max(minInset, glassWidth * insetRatio);
    const targetGlassLeft = centerXShifted + edgeGap / 2 + glassInset + GLASS_NUDGE_PX;
    const startGlassLeft = vw - rightEdge - glassWidth;
    const glassShift = targetGlassLeft - startGlassLeft; // negative px

    setShifts({ left: bottleShift, right: glassShift });
  }, [
    START_OFFSET_VW,
    CENTER_SHIFT_VW,
    CENTER_SHIFT_PX,
    BOTTLE_NUDGE_PX,
    GLASS_NUDGE_PX,
  ]);

  useEffect(() => {
    recomputeDistances();
    window.addEventListener("resize", recomputeDistances);
    return () => window.removeEventListener("resize", recomputeDistances);
  }, [recomputeDistances]);

  // Animation timing and easing - adjusted for better visibility
  const lockAt = 0.85; // Complete animation earlier for better visibility
  const used = Math.min(progress, lockAt);
  
  // Calculate movement with explicit left/right constraints
  const movementEase = 1 - Math.pow(1 - used, 2); // Ease-out quad
  
  // Calculate the center line position (SSR-safe)
  const vwSSR = typeof window === 'undefined' ? 0 : window.innerWidth;
  const centerX = vwSSR / 2;
  // Dynamic side inset: keep items a bit closer to center on small screens
  const sideInsetPct = vwSSR < 640 ? 8 : vwSSR < 1024 ? 12 : 15;
  
  // "Cheers" phase near the end: items lean in, get closer, then settle
  const CHEERS_START = 0.88; // when the cheers micro-animation begins
  const cheersPhase = Math.max(0, Math.min(1, (progress - CHEERS_START) / (1 - CHEERS_START)));
  const cheersPulse = Math.sin(cheersPhase * Math.PI); // 0 -> 1 -> 0

  // Dynamic offsets from the center line (px). Adjusted for touching animation
  const LEFT_BASE_OFFSET = 0;   // touch at center
  const RIGHT_BASE_OFFSET = 0;  // touch at center
  const MIN_OFFSET = 0;         // allow touching
  const PULL_MAX = 12;           // subtle movement at peak

  const leftOffset = Math.max(MIN_OFFSET, LEFT_BASE_OFFSET - PULL_MAX * cheersPulse);
  const rightOffset = Math.max(MIN_OFFSET, RIGHT_BASE_OFFSET - PULL_MAX * cheersPulse);

  // Start anchors (approximate from left)
  const bottleStartX = vwSSR * (sideInsetPct / 100); // bottle is placed from left by side inset
  const glassStartX = vwSSR * ((100 - sideInsetPct) / 100); // glass approximated from the right side

  // Targets that respect clamping to each side of the dotted line
  // On small screens the previous fixed ±260px nudges pushed items off-screen.
  // Use a small, viewport-scaled gap so they meet near the center on phones/tablets.
  const meetingGapPx = Math.max(0, Math.min(20, vwSSR * 0.025)); // 0–20px based on width
  // Bottle should finish LEFT of the dotted line, glass to the RIGHT
  const bottleTargetX = centerX - leftOffset - meetingGapPx;
  const glassTargetX = centerX + rightOffset + meetingGapPx;

  // Translations toward their targets, per element
  const translateBottle = (bottleTargetX - bottleStartX) * movementEase;
  const translateGlass = (glassTargetX - glassStartX) * movementEase;

  // Rotations: base easing plus a brief inward tilt for the cheers
  const inwardTilt = 6 * cheersPulse; // deg
  const glassRotate = -3 * Math.sin(used * Math.PI) * (1 - used) - inwardTilt;
  const bottleRotate = 3 * Math.sin(used * Math.PI) * (1 - used) + inwardTilt;

  // Minor lift & scale at the peak to sell the "clink"
  const cheersLiftPx = 6 * cheersPulse;
  const cheersScale = 1 + 0.02 * cheersPulse;

  // UI accents
  const dotTop = LINE_TOP_PCT + progress * (100 - LINE_TOP_PCT - LINE_BOTTOM_PCT); // percentage position along the shortened dashed line

  return (
    <div>
      <section ref={containerRef} className="section-bleed relative h-[120svh] bg-transparent">
        {/* Background image (bordered variant) fills entire section */}
        <Image
          src={bgBorder}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover pointer-events-none select-none z-0"
          priority={false}
        />
        <div className="sticky top-0 h-screen overflow-hidden z-[70]">
        {/* Center dashed guide line (longer, crisper) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] center-dash opacity-90 pointer-events-none z-[60]"
          style={{
            '--line-top': `${LINE_TOP_PCT}%`,
            '--line-bottom': `${LINE_BOTTOM_PCT}%`
          } as React.CSSProperties}
          aria-hidden
        />

        {/* Moving red dot along the dashed line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-[80] pointer-events-none"
          style={{ top: `${dotTop}%` }}
          aria-hidden
        >
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_1px_0_rgba(0,0,0,0.25)]" />
        </div>

        <div className="relative h-full w-full">
          {/* Bottle (left) */}
          <div
            ref={bottleRef}
            className="relative w-[160px] h-auto transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(-50%) translateY(${-cheersLiftPx}px) translateX(${translateBottle}px) rotate(${bottleRotate}deg) scale(${cheersScale})`,
              transformOrigin: 'right center',
              position: 'absolute',
              left: `${sideInsetPct}%`,
              top: '48%',
              willChange: 'transform',
              zIndex: 78,
              pointerEvents: 'none'
            }}
          >
            <Image
              src={bottle}
              alt="Bottle"
              className="w-[42vw] sm:w-[34vw] md:w-[28vw] min-w-[120px] max-w-[300px] h-auto pointer-events-none"
              priority
              onLoadingComplete={recomputeDistances}
              draggable={false}
            />
          </div>

          {/* Glass (right) */}
          <div
            ref={glassRef}
            className="absolute select-none"
            style={{
              right: `${sideInsetPct}%`,
              top: '48%',
              transform: `translateY(-50%) translateY(${-cheersLiftPx}px) translateX(${translateGlass}px) rotate(${glassRotate}deg) scale(${cheersScale})`,
              transformOrigin: 'left center',
              willChange: 'transform',
              zIndex: 78,
              pointerEvents: 'none'
            }}
          >
            <Image
              src={glass}
              alt="Glass"
              className="w-[42vw] sm:w-[34vw] md:w-[28vw] min-w-[120px] max-w-[340px] h-auto pointer-events-none"
              priority
              onLoadingComplete={recomputeDistances}
              draggable={false}
            />
          </div>

        </div>
        </div>
      </section>

      {/* Below-the-hero content: Reservation info and steps */}
      <section className="section-bleed relative overflow-hidden pt-0 md:pt-0 pb-6 md:pb-7 -mt-5 md:-mt-8">
        {/* Background image (bordered variant) */}
        <Image
          src={bgBorder}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover pointer-events-none select-none z-0"
          priority={false}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          {/* Title with side rules */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-neutral-600/70" />
            <div className={`${merri.className} px-6 py-3 bg-black text-white font-black text-[24px] md:text-[26px] leading-none tracking-[0.005em] antialiased rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.35)]`}>Reservation</div>
            <div className="flex-1 h-[2px] bg-neutral-600/70" />
          </div>

          {/* Subtitle / Main heading */}
          <h2 className={`${merri.className} mt-2 text-center text-[22px] md:text-[28px] font-black tracking-[0.005em] text-neutral-900`}>
            Book now and secure your spot at one of the best restaurants in Budapest!
          </h2>
          <p className="mt-2 text-center text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            It doesn’t matter if you’re coming for a quick dinner or with a larger group – we’ll make sure everything goes smoothly.
          </p>

          {/* Steps with dashed connectors */}
          <div className="mt-5 md:mt-7 flex items-start justify-center gap-4 md:gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className={`${cormorant.className} w-12 h-12 bg-[#e5c48a] text-black font-extrabold text-2xl flex items-center justify-center rounded-[2px] border border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.3)]`}>1</div>
              <h3 className={`${merri.className} mt-4 font-bold text-neutral-900`}>Easy online booking</h3>
              <p className="mt-2 text-sm text-neutral-700">A few clicks and your place is secured.</p>
            </div>

            <div className="hidden md:block h-[2px] w-24 md:w-32 h-dash mt-9" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className={`${cormorant.className} w-12 h-12 bg-[#e5c48a] text-black font-extrabold text-2xl flex items-center justify-center rounded-[2px] border border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.3)]`}>2</div>
              <h3 className={`${merri.className} mt-4 font-bold text-neutral-900`}>Instant confirmation</h3>
              <p className="mt-2 text-sm text-neutral-700">All you have to do is come and enjoy your time.</p>
            </div>

            <div className="hidden md:block h-[2px] w-24 md:w-32 h-dash mt-9" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className={`${cormorant.className} w-12 h-12 bg-[#e5c48a] text-black font-extrabold text-2xl flex items-center justify-center rounded-[2px] border border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.3)]`}>3</div>
              <h3 className={`${merri.className} mt-4 font-bold text-neutral-900`}>Flexible times</h3>
              <p className="mt-2 text-sm text-neutral-700">Weekdays or weekends, we’re waiting for you.</p>
            </div>
          </div>

          {/* Center CTA */}
          <div className="mt-5 md:mt-6 flex justify-center">
            <a
              href="/book"
              className={`${merri.className} relative px-8 py-3 bg-red-600 text-white font-black text-[18px] md:text-[20px] leading-none tracking-[0.005em] antialiased rounded-[2px] border-2 border-red-800 shadow-[0_3px_0_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-transform duration-200`}
            >
              Reservation
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
