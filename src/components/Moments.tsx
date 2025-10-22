"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

// Letter assets (big block letters with shadow)
import L_M from "@/assets/momentum m.png";
import L_O from "@/assets/momentum o.png";
import L_E from "@/assets/momentum e.png";
import L_N from "@/assets/momentum n.png";
import L_T from "@/assets/momentum t.png";
import L_S from "@/assets/momentum s.png";
import L_U from "@/assets/momentum u.png";

// Overlay photos (hotel x)
import P1 from "@/assets/hotel 1.jpg";
import P2 from "@/assets/hotel 2.jpg";
import P4 from "@/assets/hotel  4.jpeg";
import P5 from "@/assets/hotel  5.jpg";
import P8 from "@/assets/hotel 8.jpg";
import P9 from "@/assets/hotel 9.jpg";
import P10 from "@/assets/hotel 10.jpg";
import BG from "@/assets/background2.png";

export default function Moments() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollLen, setScrollLen] = useState(1);

  const computeLayout = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const trackW = track.scrollWidth;
    const needed = Math.max(0, trackW - vw);
    const neededCeil = Math.ceil(needed); // avoid underflow from fractional pixels
    setScrollLen(neededCeil);
    // section height = sticky viewport height + exact horizontal-needed
    section.style.height = `${vh + neededCeil}px`;
  }, []);

  useEffect(() => {
    computeLayout();
    window.addEventListener("resize", computeLayout);
    return () => window.removeEventListener("resize", computeLayout);
  }, [computeLayout]);

  useEffect(() => {
    let raf = 0;
    const handle = () => {
      const section = sectionRef.current;
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      // When pinned, top goes from 0 to -scrollLen
      const p = Math.max(0, Math.min(1, (-top) / Math.max(1, scrollLen)));
      setScrollX(p * scrollLen);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(handle);
    };
    handle();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scrollLen]);

  // Content letters sequence: M O M E N T U M
  const letters = [L_M, L_O, L_M, L_E, L_N, L_T, L_U, L_M];

  return (
    <section ref={sectionRef} className="relative w-full">
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden overscroll-contain section-bleed z-50">
        {/* Background image (swap BG to your red background when ready) */}
        <Image src={BG} alt="background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#ef2d2d]/85" aria-hidden />
        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="relative h-full inline-flex items-center gap-[clamp(24px,8vw,96px)] px-[10vw]"
          style={{ transform: `translateX(${-scrollX}px)` }}
        >
          {letters.map((img, idx) => (
            <div key={idx} className="relative h-[62vh] md:h-[70vh] aspect-[3/4] shrink-0 select-none">
              <Image
                src={img}
                alt={`Letter ${idx}`}
                fill
                className="object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,0.8)]"
                sizes="(max-width: 768px) 60vh, 70vh"
                priority={idx < 2}
                onLoadingComplete={() => computeLayout()}
              />
            </div>
          ))}

          {/* Overlay photo clusters (spaced along the track) */}
          <div className="pointer-events-none absolute inset-0">
            {/* each photo absolutely placed with slight rotations */}
            <Photo img={P1} className="left-[8%] top-[14%] rotate-[-6deg]" />
            <Photo img={P2} className="left-[26%] top-[6%] rotate-[8deg]" />
            <Photo img={P4} className="left-[44%] top-[22%] rotate-[-3deg]" />
            <Photo img={P5} className="left-[62%] top-[10%] rotate-[6deg]" />
            <Photo img={P8} className="left-[78%] top-[34%] rotate-[-8deg]" />
            <Photo img={P9} className="left-[92%] top-[12%] rotate-[10deg]" />
            <Photo img={P10} className="left-[110%] top-[28%] rotate-[-5deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({ img, className }: { img: any; className?: string }) {
  return (
    <div className={`absolute w-[clamp(140px,18vw,240px)] aspect-square ${className ?? ""}`}>
      <div className="absolute inset-0 bg-black translate-x-[8px] translate-y-[8px]" />
      <Image src={img} alt="moment" fill className="object-cover shadow-xl" sizes="(max-width: 768px) 40vw, 20vw" />
    </div>
  );
}
