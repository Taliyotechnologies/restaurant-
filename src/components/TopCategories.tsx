"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import t1 from "@/assets/topcategories1.png";
import t2 from "@/assets/topcategories2.png";
import t3 from "@/assets/topcategories3.png";
import t4 from "@/assets/topcategories4.png";
import t5 from "@/assets/topcategories5.png";
import blackBg from "@/assets/blackbackground.png";

const CATEGORIES = [
  { title: "BEER BITES & DISHES", src: t1, icon: "🥨", iconBg: "bg-goldbeige text-black" },
  { title: "BEER TASTING", src: t2, icon: "🍺", iconBg: "bg-[#ef2d2d] text-white" },
  { title: "APPETIZER", src: t3, icon: "🥐", iconBg: "bg-goldbeige text-black" },
  { title: "HAMBURGER", src: t4, icon: "🍔", iconBg: "bg-[#f2c94c] text-black" },
  { title: "MAIN COURSE", src: t5, icon: "🍽️", iconBg: "bg-[#ef2d2d] text-white" },
] as const;

export default function TopCategories() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [handleLeftPx, setHandleLeftPx] = useState(0);
  const [handleW, setHandleW] = useState(110);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartHandleLeft = useRef(0);

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const total = wrap.scrollWidth;
    const view = wrap.clientWidth;
    const scroll = wrap.scrollLeft;

    // Handle width scales with track width
    const tW = track.clientWidth;
    const hw = Math.max(60, Math.min(160, Math.round(tW * 0.16)));
    if (hw !== handleW) setHandleW(hw);

    const maxPx = Math.max(0, tW - hw);
    const proportion = total - view > 0 ? scroll / (total - view) : 0;
    setHandleLeftPx(proportion * maxPx);
  }, [handleW]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    recalc();
    const onScroll = () => recalc();
    wrap.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);

    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const wrapEl = wrapRef.current;
      const track = trackRef.current;
      if (!wrapEl || !track) return;
      const total = wrapEl.scrollWidth;
      const view = wrapEl.clientWidth;
      const maxPx = Math.max(0, track.clientWidth - handleW);
      const dx = e.clientX - dragStartX.current;
      const newHandle = Math.max(0, Math.min(maxPx, dragStartHandleLeft.current + dx));
      const proportion = maxPx > 0 ? newHandle / maxPx : 0;
      wrapEl.scrollLeft = proportion * Math.max(0, total - view);
    };
    const onUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });

    return () => {
      wrap.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [handleW, recalc]);

  return (
    <section className="section-bleed relative overflow-hidden bg-black border-t border-borderline mt-6 md:mt-8 mb-0">
      <Image
        src={blackBg}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover z-0 pointer-events-none select-none"
        priority={false}
      />
      <div className="relative z-10">
        {/* Title with side lines */}
        <div className="py-8">
          <div className="mx-auto flex items-center gap-3 md:gap-6 px-4 md:px-8 my-3 md:my-4">
            <span className="h-px bg-goldbeige/40 flex-1" />
            <span className="inline-block px-5 py-2 rounded-[4px] bg-goldbeige text-black font-semibold uppercase tracking-wide shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]">
              Top Categories
            </span>
            <span className="h-px bg-goldbeige/40 flex-1" />
          </div>
        </div>

        {/* Cards row */}
        <div className="px-4 md:px-8">
          <div
            ref={wrapRef}
            className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 pb-6"
          >
            {CATEGORIES.map((c, i) => (
              <div
                key={i}
                className="group relative shrink-0 w-[230px] h-[300px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[360px] lg:w-[340px] lg:h-[400px] bg-[#242424] border border-borderline/60 overflow-hidden snap-start"
              >
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(min-width:1024px) 340px, (min-width:768px) 300px, (min-width:640px) 260px, 230px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                  loading="lazy"
                />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bottom-label">
                    <div className="flex items-center justify-between px-4 py-3">
                      <div className="text-goldbeige font-extrabold uppercase tracking-wider text-[12px] sm:text-sm md:text-base">
                        {c.title}
                      </div>
                      <div
                        className="absolute inset-0 z-0 top-categories-bg"
                        aria-hidden
                      />
                      <div className={`relative ml-3 grid place-items-center w-10 h-10 rounded-[3px] ${c.iconBg} skew-y-[6deg] border border-black/60 shadow-[0_1px_0_rgba(0,0,0,0.8)] overflow-hidden`}>
                        <Image
                          src={blackBg}
                          alt=""
                          aria-hidden
                          fill
                          sizes="40px"
                          className="object-cover z-0 pointer-events-none select-none"
                        />
                        <span aria-hidden className="relative z-10 text-base skew-y-[-6deg]">{c.icon}</span>
                        <span className="sr-only">{c.title} icon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track + handle under cards */}
        <div className="relative px-4 md:px-8 pb-8">
          <div ref={trackRef} className="relative h-6">
            <div className="absolute inset-x-0 top-0 h-px bg-goldbeige/25" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-goldbeige/25" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-goldbeige/70" />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[10px] cursor-ew-resize"
              style={{ left: `${handleLeftPx}px`, width: `${handleW}px` }}
              onPointerDown={(e) => {
                isDragging.current = true;
                dragStartX.current = e.clientX;
                dragStartHandleLeft.current = handleLeftPx;
                (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
              }}
            >
              <div className="h-full w-full bg-[#ef2d2d] border border-black shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
