"use client";
import Image from "next/image";
import { Anton, Alfa_Slab_One } from "next/font/google";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import heroMain from "@/assets/hero image main.png";
import heroA from "@/assets/hero image.png";
import heroB from "@/assets/hero image 1.png";
import heroC from "@/assets/hero image (2).png";
import heroD from "@/assets/hero image (3).png";
import heroE from "@/assets/hero image (4).png";
import heroF from "@/assets/hero image (5).png";
import bgDark from "@/assets/background.png";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Hero() {
  const left = [heroA, heroB, heroC];
  const right = [heroD, heroE, heroF];
  const main = heroMain;
  // Mobile strip tiles should use hero images
  const mobileTiles = [heroB, heroC, heroD, heroE];

  // Rotating red text phrases
  const PHRASES = [
    "365 DAYS OF LIVE MUSIC",
    "36 BEERS ON TAP",
    "80 BOLD DISHES TO CHOOSE FROM",
  ] as const;
  const ROTATE_MS = 4200; // time each phrase stays visible
  const ANIM_MS = 900; // smoother zoom+blur+bounce duration

  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % PHRASES.length;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [PHRASES.length]);

  // Clear previous after animation ends to keep DOM clean
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), ANIM_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Measure widest phrase to lock width and avoid layout shift
  useEffect(() => {
    const doMeasure = () => {
      const wrap = wrapRef.current;
      const meas = measureRef.current;
      if (!wrap || !meas) return;
      let max = 0;
      meas.querySelectorAll<HTMLElement>(".measure-phrase").forEach((el) => {
        max = Math.max(max, el.offsetWidth);
      });
      if (max > 0) wrap.style.setProperty("--rotator-w", `${Math.ceil(max)}px`);
    };
    doMeasure();
    window.addEventListener("resize", doMeasure);
    return () => window.removeEventListener("resize", doMeasure);
  }, []);

  const rotatorStyle = ({ ["--rotator-dur" as any]: `${ANIM_MS}ms` } as unknown) as CSSProperties;

  return (
    <section className="section-bleed relative overflow-hidden min-h-screen py-10 md:py-16">
      {/* Background texture (same as skew tile) */}
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
      {/* Headline (three lines) */}
      <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12 max-w-[960px] mx-auto px-3">
        <p className={`${alfa.className} leading-[1.02] text-base sm:text-2xl md:text-4xl font-semibold tracking-tight text-black`}>Authentic Hungarian restaurant where...</p>
        <h1
          className={`${anton.className} leading-[0.96] uppercase tracking-tight sm:tracking-tighter text-2xl sm:text-5xl md:text-6xl font-black text-[#ef2d2d] text-outline soft-drop`}
          aria-live="polite"
          role="status"
          style={rotatorStyle}
        >
          <span ref={wrapRef} className="rotator-wrap relative inline-block">
            {prev !== null && (
              <span
                key={`out-${prev}`}
                aria-hidden="true"
                className="rotator-out absolute inset-0 inline-block will-change-transform"
              >
                {PHRASES[prev]}
              </span>
            )}
            <span key={`in-${index}`} className="rotator-in inline-block will-change-transform">
              {PHRASES[index]}
            </span>
          </span>
          {/* Measuring phrases (hidden) to compute max width */}
          <span
            ref={measureRef}
            aria-hidden
            style={{ position: "absolute", visibility: "hidden", whiteSpace: "nowrap", left: 0, top: 0 }}
          >
            {PHRASES.map((p, i) => (
              <span key={i} className="measure-phrase inline-block">
                {p}
              </span>
            ))}
          </span>
        </h1>
        <p className={`${alfa.className} leading-[1.2] text-base sm:text-2xl md:text-4xl font-semibold tracking-tight text-black`}>ready to captivate and delight you.</p>
      </div>

      {/* Photos row: [large left] [stack left] [main] [stack right] [large right] */}
      <div className="w-full flex items-center justify-center gap-4 md:gap-10 px-3">
        {/* Large single tile (far left) */}
        <div className="hidden sm:block self-center">
          <div className="group relative w-28 h-28 md:w-36 md:h-36">
            <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-[2px] opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative h-full w-full bg-[#242424] overflow-hidden rounded-[2px] transition-transform duration-300 ease-out group-hover:rotate-[-6deg] group-hover:scale-[1.03]">
              <Image src={heroA} alt="Hero image left large" fill sizes="(min-width: 768px) 9rem, 7rem" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Two stacked tiles (left of main) */}
        <div className="hidden sm:grid gap-4 md:gap-5 self-center">
          {[heroB, heroC].map((src, i) => (
            <div key={i} className="group relative w-24 h-24 md:w-32 md:h-32">
              <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-[2px] opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className={`relative h-full w-full bg-[#242424] overflow-hidden rounded-[2px] transition-transform duration-300 ease-out ${i === 0 ? "group-hover:rotate-[5deg]" : "group-hover:rotate-[-5deg]"} group-hover:scale-[1.03]`}>
                <Image src={src} alt={`Hero left stack ${i + 1}`} fill sizes="(min-width: 768px) 8rem, 6rem" className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Main photo */}
        <div className="relative w-[clamp(220px,72vw,340px)] h-[clamp(300px,96vw,480px)] bg-[#1a1a1a] border border-borderline/60 overflow-hidden shadow-lg">
          <Image src={main} alt="Hero main" fill sizes="(min-width: 768px) 340px, 72vw" className="object-cover" priority />
        </div>

        {/* Two stacked tiles (right of main) */}
        <div className="hidden sm:grid gap-4 md:gap-5 self-center">
          {[heroD, heroE].map((src, i) => (
            <div key={i} className="group relative w-24 h-24 md:w-32 md:h-32">
              <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-[2px] opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className={`relative h-full w-full bg-[#242424] overflow-hidden rounded-[2px] transition-transform duration-300 ease-out ${i === 0 ? "group-hover:rotate-[6deg]" : "group-hover:rotate-[-6deg]"} group-hover:scale-[1.03]`}>
                <Image src={src} alt={`Hero right stack ${i + 1}`} fill sizes="(min-width: 768px) 8rem, 6rem" className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Large single tile (far right) */}
        <div className="hidden sm:block self-center">
          <div className="group relative w-28 h-28 md:w-36 md:h-36">
            <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-[2px] opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative h-full w-full bg-[#242424] overflow-hidden rounded-[2px] transition-transform duration-300 ease-out group-hover:rotate-[6deg] group-hover:scale-[1.03]">
              <Image src={heroF} alt="Hero image right large" fill sizes="(min-width: 768px) 9rem, 7rem" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only: four small tiles directly below the main image */}
      <div className="sm:hidden w-full flex justify-center mt-4 px-3">
        <div className="grid grid-cols-4 gap-3">
          {mobileTiles.map((src, i) => (
            <div key={i} className="group relative w-16 h-16">
              <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black rounded-[2px] opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className={`relative h-full w-full bg-[#242424] border border-borderline/60 overflow-hidden rounded-[2px] transition-transform duration-300 ease-out ${i % 2 === 0 ? "group-hover:rotate-[5deg]" : "group-hover:rotate-[-5deg]"} group-hover:scale-[1.03]`}>
                <Image src={src} alt={`Hero tile ${i + 1}`} fill sizes="64px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
