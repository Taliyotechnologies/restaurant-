"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import P1 from "@/assets/hotel 1.jpg";
import P2 from "@/assets/hotel 2.jpg";
import P8 from "@/assets/hotel 8.jpg";
import P9 from "@/assets/hotel 9.jpg";
import P10 from "@/assets/hotel 10.jpg";
import L_M from "@/assets/momentum m.png";
import L_O from "@/assets/momentum o.png";
import L_E from "@/assets/momentum e.png";
import L_N from "@/assets/momentum n.png";
import L_T from "@/assets/momentum t.png";
import L_U from "@/assets/momentum u.png";

/**
 * MomentumScroller
 * - When this section reaches the viewport, the content gets pinned (sticky)
 * - Vertical scroll converts to horizontal translation from left ➜ right
 * - When the full word finishes scrolling, vertical scrolling resumes to next section
 * - Purely new implementation (no reuse of previous Moments code)
 */
export default function MomentumScroller() {
  const root = useRef<HTMLDivElement | null>(null);
  const pin = useRef<HTMLDivElement | null>(null);
  const rail = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  // Start horizontal when the section has advanced this fraction of the viewport while pinned
  const START_FRAC = 0; // start horizontal immediately
  const startPxRef = useRef(0);
  const sectionTopYRef = useRef(0);

  const [dx, setDx] = useState(0); // horizontal distance rendered (smoothed)
  const [travel, setTravel] = useState(1); // total horizontal travel needed
  const [fixed, setFixed] = useState(false); // fixed-position pin while progressing
  // Target horizontal distance based on scroll position (unsmoothed)
  const targetDxRef = useRef(0);
  // Internal ref mirror of dx for the lerp loop
  const dxRef = useRef(0);

  // Recalculate dimensions whenever viewport or fonts change
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const r = root.current;
      const t = rail.current;
      const tr = track.current;
      if (!r || !t) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // No initial delay (avoid any empty-looking gap)
      const startPx = 0;
      startPxRef.current = startPx;

      // Cache the section's absolute document Y for robust progress calc
      const rectNow = r.getBoundingClientRect();
      sectionTopYRef.current = rectNow.top + window.scrollY;

      // Base travel = horizontal overflow of the letters track width
      const contentW = tr?.scrollWidth ?? t.scrollWidth;
      let total = Math.max(0, Math.ceil(contentW - vw));
      // Subtract the artificial right padding tail so we don't scroll into empty space
      if (tr) {
        const cs = window.getComputedStyle(tr);
        const pr = parseFloat(cs.paddingRight || "0") || 0;
        total = Math.max(0, Math.ceil(total - pr));
      }

      // Use exact travel (no underflow fudge) so we reach the very end
      total = Math.max(0, total);

      setTravel(total);
      // Section height = viewport height + start delay + horizontal travel
      r.style.height = `${vh + startPx + total}px`;
    };

    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Convert vertical scroll into horizontal translation while pinned
  useEffect(() => {
    const r = root.current;
    if (!r) return;

    let anim = 0;
    const update = () => {
      // Map global scroll to local progress and toggle fixed pin in-range
      const y = window.scrollY;
      const startY = sectionTopYRef.current + startPxRef.current;
      const endY = startY + travel;
      const isFixedNow = y > startY && y < endY;

      let target = 0;
      if (!isFixedNow) {
        target = y <= startY ? 0 : travel;
      } else {
        target = y - startY;
      }

      setFixed(isFixedNow);
      targetDxRef.current = target;

      // When entering the section from either edge (not fixed), sync immediately
      if (!isFixedNow) {
        dxRef.current = target;
        setDx(target);
      }

      anim = 0;
    };
    const onScroll = () => {
      if (!anim) anim = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (anim) cancelAnimationFrame(anim);
    };
  }, [travel]);

  // Smooth the horizontal translation with a lerp toward targetDxRef
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const cur = dxRef.current;
      const target = targetDxRef.current;
      // Lerp factor: higher = snappier, lower = smoother
      const k = 0.15;
      const next = cur + (target - cur) * k;
      if (Math.abs(next - cur) > 0.05) {
        dxRef.current = next;
        setDx(next);
      } else if (cur !== target) {
        dxRef.current = target;
        setDx(target);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // While fixed is true, trap wheel and key scroll so the page doesn't move past the section
  useEffect(() => {
    if (!fixed) return;

    const startY = sectionTopYRef.current + startPxRef.current;
    const endY = startY + travel;

    const onWheel = (e: WheelEvent) => {
      const y = window.scrollY;
      const EPS = 0.5;
      const dir = Math.sign(e.deltaY);
      const atStart = y <= startY + EPS;
      const atEnd = y >= endY - EPS;

      // If we're at the boundary and scrolling outward, release the trap
      if ((dir < 0 && atStart) || (dir > 0 && atEnd)) {
        return; // allow default page scroll
      }

      let next = y + e.deltaY;
      if (next < startY) next = startY;
      if (next > endY) next = endY;
      if (next !== y) {
        e.preventDefault();
        window.scrollTo({ top: next, behavior: "auto" });
      }
    };

    const step = () => Math.max(40, Math.min(180, window.innerHeight * 0.12));
    const onKey = (e: KeyboardEvent) => {
      const y = window.scrollY;
      const EPS = 0.5;
      const atStart = y <= startY + EPS;
      const atEnd = y >= endY - EPS;
      let next = y;
      let dir = 0;
      switch (e.key) {
        case "ArrowDown":
          dir = 1;
          next = y + step();
          break;
        case "ArrowUp":
          dir = -1;
          next = y - step();
          break;
        case "PageDown":
          dir = 1;
          next = y + window.innerHeight * 0.9;
          break;
        case "PageUp":
          dir = -1;
          next = y - window.innerHeight * 0.9;
          break;
        case " ": // Space
          dir = e.shiftKey ? -1 : 1;
          next = y + (e.shiftKey ? -window.innerHeight * 0.9 : window.innerHeight * 0.9);
          break;
        default:
          return; // let other keys pass
      }
      // If at boundary and trying to scroll outward, let the browser handle it
      if ((dir < 0 && atStart) || (dir > 0 && atEnd)) {
        return;
      }
      e.preventDefault();
      if (next < startY) next = startY;
      if (next > endY) next = endY;
      window.scrollTo({ top: next, behavior: "auto" });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel as any);
      window.removeEventListener("keydown", onKey);
    };
  }, [fixed, travel]);

  // letter sequence: M O M E N T U M
  const letters: StaticImageData[] = [L_M, L_O, L_M, L_E, L_N, L_T, L_U, L_M];
  // Some letter PNGs have extra transparent margins; scale a bit to equalize.
  const letterScale = (i: number) => (i === 4 ? 1.16 : i === 6 ? 1.24 : 1);

  // Progress helpers for gentle start/end animation
  const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
  const progress = travel > 0 ? clamp01(dx / travel) : 0;
  // Ease-in for the first 12% and ease-out for the last 12%
  const tIn = clamp01(progress / 0.12);
  const tOut = clamp01((1 - progress) / 0.12);
  // Letter base scale goes 0.96 -> 1 at start, then 1 -> 0.96 at end
  const letterBaseScale = Math.min(0.96 + 0.04 * tIn, 0.96 + 0.04 * tOut);
  // Photo tiles: subtler scale + opacity lift
  const tileBaseScale = Math.min(0.98 + 0.02 * tIn, 0.98 + 0.02 * tOut);
  const tileAlpha = Math.min(0.92 + 0.08 * tIn, 0.92 + 0.08 * tOut);
  // Edge lift: translate letters/tiles slightly down at the start and up at the end
  const edgeBlend = 1 - Math.min(tIn, tOut); // 1 at edges, 0 in the middle
  const edgeDir = progress < 0.5 ? 1 : -1; // start: down, end: up
  const letterDY = edgeDir * edgeBlend * 14; // px
  const tileDY = edgeDir * edgeBlend * 8; // px

  return (
    <section
      ref={root}
      className="relative z-0 w-full section-bleed -mb-px momentum-bg"
    >
      <div
        ref={pin}
        className={`min-h-[100svh] h-screen overflow-hidden momentum-pin-bg ${
          fixed ? "fixed left-0 top-0 w-[100vw] z-0" : "sticky top-0 z-0"
        }`}
      >
        <div
          ref={rail}
          className="relative h-full flex items-center will-change-transform"
          style={{
            transform: `translateX(${-dx}px)`,
          }}
        >
          {/* Wrap letters + overlay so overlay width equals the full track width */}
          <div className="relative h-full inline-block w-max">
            {/* Letter images track with small left pad and a right tail so the end reveals */}
            <div ref={track} className="inline-flex items-center gap-[clamp(24px,8vw,96px)] pl-0 pr-[clamp(24px,8vw,96px)]">
            {letters.map((img, i) => (
              <div
                key={i}
                className="relative h-[62vh] md:h-[70vh] aspect-[3/4] shrink-0 select-none origin-bottom letter"
                style={{
                  '--translate-y': `${letterDY.toFixed(1)}px`,
                  '--scale': `${(letterScale(i) * letterBaseScale).toFixed(4)}`,
                } as React.CSSProperties}
              >
                <Image
                  src={img}
                  alt={`Letter ${i}`}
                  fill
                  sizes="(max-width: 768px) 60vh, 70vh"
                  className="object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,0.85)]"
                  onLoadingComplete={() => {
                    // Re-measure once images load to avoid travel underflow
                    window.dispatchEvent(new Event("resize"));
                  }}
                  priority
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Floating photo tiles above the letters - now sized to the track width */}
          <div className="pointer-events-none absolute inset-0 z-[2]">
            {/* place some tiles near the right end so one is visible at start */}
            <Tile img={P1} left="10%" top="14%" rotate={-7} scale={tileBaseScale} alpha={tileAlpha} dy={tileDY} />
            <Tile img={P2} left="30%" top="8%" rotate={6} scale={tileBaseScale} alpha={tileAlpha} dy={tileDY} />
            <Tile img={P8} left="50%" top="22%" rotate={-5} scale={tileBaseScale} alpha={tileAlpha} dy={tileDY} />
            <Tile img={P9} left="70%" top="10%" rotate={8} scale={tileBaseScale} alpha={tileAlpha} dy={tileDY} />
            <Tile img={P10} left="92%" top="28%" rotate={-6} scale={tileBaseScale} alpha={tileAlpha} dy={tileDY} />
          </div>
        </div>
      </div>
    </div>
    {/* spacer removed to avoid visual empty line */}
  </section>
  );
}

function Tile({ img, left, top, rotate, scale = 1, alpha = 1, dy = 0 }: { img: StaticImageData; left: string; top: string; rotate?: number; scale?: number; alpha?: number; dy?: number }) {
  return (
    <div
      aria-hidden
      className="absolute w-[clamp(140px,18vw,240px)] aspect-square tile"
      style={{
        '--left': left,
        '--top': top,
        '--translate-y': `${dy.toFixed(1)}px`,
        '--rotate': `${rotate ?? 0}deg`,
        '--scale': scale.toFixed(4),
        '--opacity': alpha,
      } as React.CSSProperties}
    >
      <div className="relative h-full w-full">
        {/* black offset border shadow */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
        <Image src={img} alt="" fill sizes="(max-width: 768px) 18vw, 18vw" className="object-cover shadow-xl" />
      </div>
    </div>
  );
}
