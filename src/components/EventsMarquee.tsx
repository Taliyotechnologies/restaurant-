"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import bgDark from "@/assets/blackbackground.png";
import { Alfa_Slab_One } from "next/font/google";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

type EventItem = {
  title: string;
  date: string; // e.g., "03. 06."
  desc: string;
};

const EVENTS: readonly EventItem[] = [
  {
    title: "Live music: Tom Tom Duo (guitar, singer, piano)",
    date: "03. 06.",
    desc: "The mood setter of the evening: Tom Tom Duo (guitar, singer, piano). Live music, 20+ draft beers, 80+ dishes.",
  },
  {
    title: "Live music: Tom Tom Duo (guitar, singer, piano)",
    date: "03. 07.",
    desc: "The mood setter of the evening: Tom Tom Duo (guitar, singer, piano). Live music, 20+ draft beers, 80+ dishes.",
  },
  {
    title: "Live music: Flow Duo (bass, singing, piano)",
    date: "03. 08.",
    desc: "The mood setter of the evening: Flow Duo (bass, singing, piano). Live music, 20+ draft beers, 80+ dishes.",
  },
  {
    title: "Live music: Flow Duo (bass, singing, piano)",
    date: "03. 09.",
    desc: "The mood setter of the evening: Flow Duo (bass, singing, piano). Live music, 20+ draft beers, 80+ dishes.",
  },
  {
    title: "Trivia Night",
    date: "03. 10.",
    desc: "Bring your friends! Fun prizes, craft beer specials, and great pub food.",
  },
  {
    title: "Acoustic Session",
    date: "03. 11.",
    desc: "A laid-back evening with local artists. Cozy vibes guaranteed.",
  },
] as const;

export default function EventsMarquee() {
  const items = [...EVENTS, ...EVENTS]; // duplicate for seamless loop
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Smooth auto-scroll with requestAnimationFrame
  useEffect(() => {
    let raf = 0;
    const speed = 0.6; // pixels per frame (~36px/s at 60fps)
    const step = () => {
      const wrap = marqueeRef.current;
      const track = trackRef.current;
      if (wrap && track && !paused) {
        wrap.scrollLeft += speed;
        const half = track.scrollWidth / 2;
        if (wrap.scrollLeft >= half) {
          wrap.scrollLeft -= half; // seamless loop
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const wrap = marqueeRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const card = wrap.querySelector("article") as HTMLElement | null;
    const cardWidth = card?.offsetWidth ?? 240;
    wrap.scrollLeft += dir * cardWidth;
    const half = track.scrollWidth / 2;
    if (wrap.scrollLeft < 0) wrap.scrollLeft += half;
    if (wrap.scrollLeft >= half) wrap.scrollLeft -= half;
  }, []);

  return (
    <section className="section-bleed relative overflow-hidden border-y border-borderline text-neutral-100">
      {/* Background image (black variant) */}
      <Image
        src={bgDark}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
        priority={false}
      />

      <div className="relative z-10">
        {/* Header strip (full width) */}
        <div className="events-strip w-full px-4 md:px-8 py-4 md:py-5 flex items-center justify-between relative">
          <h2 className={`${alfa.className} text-2xl md:text-3xl font-black text-goldbeige`}>Unmissable Events</h2>
          {/* Arrows (decorative for now) */}
          <div className="hidden md:flex gap-3 text-goldbeige/80">
            <button aria-label="Previous" onClick={() => scrollByCard(-1)} className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40">←</button>
            <button aria-label="Next" onClick={() => scrollByCard(1)} className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40">→</button>
          </div>
        </div>

        {/* Gold separator */}
        <div className="h-2 bg-goldbeige/70 border-y border-borderline" />

        {/* Marquee row (full width) */}
        <div
          className="marquee border-t border-borderline/70"
          ref={marqueeRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="marquee-track no-animate" ref={trackRef}>
            {items.map((ev, i) => (
              <article
                key={`${ev.title}-${i}`}
                className="w-[200px] sm:w-[230px] md:w-[260px] lg:w-[280px] sq px-4 md:px-5 py-5 border-r border-borderline/50 text-neutral-200 flex flex-col justify-start overflow-hidden"
              >
                <h3 className={`${alfa.className} text-base sm:text-lg md:text-xl font-extrabold text-goldbeige leading-snug`}>{ev.title}</h3>
                <p className={`${alfa.className} text-sm sm:text-base md:text-lg font-extrabold text-goldbeige mt-2`}>{ev.date}</p>
                <p className="text-xs sm:text-sm md:text-base text-neutral-300 mt-2 leading-relaxed max-h-24 overflow-hidden">{ev.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
