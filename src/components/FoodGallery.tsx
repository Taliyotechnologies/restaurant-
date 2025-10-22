"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import food1 from "@/assets/food 1.png";
import food2 from "@/assets/food 2.png";
import food3 from "@/assets/food 3.png";
import food4 from "@/assets/food 4.png";
import food5 from "@/assets/food 5.png";
import food6 from "@/assets/food 6.png";
import food7 from "@/assets/food 7.png";
import food8 from "@/assets/food 8.png";
import food9 from "@/assets/food 9.png";
import food10 from "@/assets/food 10.png";
import bg2 from "@/assets/background2.png";

const FOODS = [
  { src: food1, alt: "Food 1" },
  { src: food2, alt: "Food 2" },
  { src: food3, alt: "Food 3" },
  { src: food4, alt: "Food 4" },
  { src: food5, alt: "Food 5" },
  { src: food6, alt: "Food 6" },
  { src: food7, alt: "Food 7" },
  { src: food8, alt: "Food 8" },
  { src: food9, alt: "Food 9" },
  { src: food10, alt: "Food 10" },
];

export default function FoodGallery() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [thumbPct, setThumbPct] = useState(0); // viewport/total in % (for info, not used for handle width)
  const [handleLeftPx, setHandleLeftPx] = useState(0);
  const [handleW, setHandleW] = useState(120); // dynamic px width of the red handle
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartHandleLeft = useRef(0);

  const recalc = useCallback(() => {
    const el = wrapRef.current;
    const track = trackRef.current;
    if (!el) return;
    const total = el.scrollWidth;
    const view = el.clientWidth;
    const scroll = el.scrollLeft;
    const thumb = total > 0 ? (view / total) * 100 : 100;
    setThumbPct(thumb);
    if (track) {
      // Handle width scales with track size for responsiveness
      const tW = track.clientWidth;
      const hw = Math.max(64, Math.min(160, Math.round(tW * 0.15)));
      if (hw !== handleW) setHandleW(hw);
      const proportion = total - view > 0 ? scroll / (total - view) : 0;
      const maxPx = Math.max(0, tW - hw);
      setHandleLeftPx(proportion * maxPx);
    }
  }, [handleW]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    recalc();
    const onScroll = () => recalc();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);
    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const track = trackRef.current;
      const wrap = wrapRef.current;
      if (!track || !wrap) return;
      const total = wrap.scrollWidth;
      const view = wrap.clientWidth;
      const maxPx = Math.max(0, track.clientWidth - handleW);
      const dx = e.clientX - dragStartX.current;
      const newHandle = Math.max(0, Math.min(maxPx, dragStartHandleLeft.current + dx));
      const proportion = maxPx > 0 ? newHandle / maxPx : 0;
      wrap.scrollLeft = proportion * Math.max(0, total - view);
    };
    const onUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [handleW, recalc]);

  return (
    <section className="section-bleed relative overflow-hidden bg-transparent border-t border-borderline">
      {/* Background image */}
      <Image
        src={bg2}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="food-gallery-bg"
        priority={false}
      />
      {/* Row of photos */}
      <div className="relative z-10 px-4 md:px-8 py-6">
        <div
          ref={wrapRef}
          className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6"
        >
          {FOODS.map((f, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px] bg-[#242424] border border-borderline/60 overflow-hidden snap-start"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width:1024px) 350px, (min-width:768px) 310px, (min-width:640px) 250px, 210px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom track + handle under photos */}
      <div className="relative z-10 px-4 md:px-8 pb-6">
        <div ref={trackRef} className="relative h-6">
          {/* top and bottom hairlines to match style */}
          <div className="absolute inset-x-0 top-0 h-px bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-black/40" />
          {/* black track line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-black/80" />
          {/* red handle with black border */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[12px] cursor-ew-resize"
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

      {/* bottom divider removed to avoid top-border look on next section */}
    </section>
  );
}
