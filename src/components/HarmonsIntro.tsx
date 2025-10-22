"use client";
import Image from "next/image";
import { Anton, Alfa_Slab_One } from "next/font/google";
import { useEffect, useState } from "react";

import bg2 from "@/assets/background2.png";
import hImg from "@/assets/h.png";
import aImg from "@/assets/a.png";
import rImg from "@/assets/r.png";
import mImg from "@/assets/m.png";
import oImg from "@/assets/o.png";
import nImg from "@/assets/n.png";
import sImg from "@/assets/s.png";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

const LETTERS = [
  { src: hImg, alt: "H" },
  { src: aImg, alt: "A" },
  { src: rImg, alt: "R" },
  { src: mImg, alt: "M" },
  { src: oImg, alt: "O" },
  { src: nImg, alt: "N" },
  { src: sImg, alt: "S" },
] as const;

// Fine-tuned scale/offset per letter so they feel visually equal even if source PNG sizes differ
const LETTER_STYLE: Record<string, { scale: number; y?: number }> = {
  H: { scale: 0.95, y: 0 },
  A: { scale: 0.92, y: 2 },
  R: { scale: 0.94, y: 0 },
  M: { scale: 1.0, y: 0 },
  O: { scale: 0.98, y: 0 },
  N: { scale: 0.96, y: 0 },
  S: { scale: 0.92, y: 0 },
};

export default function HarmonsIntro() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const INTERVAL_MS = 2600;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % LETTERS.length;
      });
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // clear prev after fade
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 900);
    return () => clearTimeout(t);
  }, [index, prev]);

  return (
    <section className="section-bleed relative overflow-hidden">
      {/* Background texture */}
      <Image src={bg2} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 container-max mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8 md:gap-10">
          {/* Left: rotating big letter in a fixed box */}
          <div className="flex-shrink-0 self-center mx-auto sm:mx-0">
            <div className="relative max-w-full w-[clamp(170px,36vw,340px)] h-[clamp(200px,40vw,380px)]">
              {/* Current */}
              <Image
                key={`in-${index}`}
                src={LETTERS[index].src}
                alt={LETTERS[index].alt}
                fill
                sizes="(min-width:1024px) 380px, (min-width:640px) 40vw, 70vw"
                className="object-contain img-fade-in soft-drop"
                style={{
                  transform: `translateY(${(LETTER_STYLE[LETTERS[index].alt]?.y ?? 0)}px) scale(${LETTER_STYLE[LETTERS[index].alt]?.scale ?? 1})`,
                  transformOrigin: "center",
                }}
                priority={false}
              />
              {/* Previous (crossfade out) */}
              {prev !== null && (
                <Image
                  key={`out-${prev}`}
                  src={LETTERS[prev].src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width:1024px) 380px, (min-width:640px) 40vw, 70vw"
                  className="object-contain img-fade-out soft-drop"
                  style={{
                    transform: `translateY(${(LETTER_STYLE[LETTERS[prev].alt]?.y ?? 0)}px) scale(${LETTER_STYLE[LETTERS[prev].alt]?.scale ?? 1})`,
                    transformOrigin: "center",
                  }}
                  priority={false}
                />
              )}
            </div>
          </div>

          {/* Mobile: horizontal dotted divider with red dot */}
          <div className="relative w-full h-4 my-2 block sm:hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-black/60 border-dotted" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#ef2d2d] border border-black soft-drop" />
          </div>

          <div className="relative w-8 flex-shrink-0 hidden sm:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] border-l border-black/60 border-dotted" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#ef2d2d] border border-black soft-drop" />
          </div>

          {/* Right: headline + copy */}
          <div className="flex-1 max-w-2xl w-full mx-auto sm:mx-0">
            <h2 className={`${anton.className} text-center sm:text-left text-[#ef2d2d] text-outline soft-drop uppercase tracking-tight leading-[0.92] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6`}>
              Your New
              <br />
              Favorite
              <br />
              Restaurant by
              <br />
              The Danube
            </h2>
            <div className={`${alfa.className} text-center sm:text-left text-sm sm:text-base md:text-lg text-black/80 space-y-5`}>
              <p>
                The Jewel of Margaret Bridge – A Gourmet Restaurant in the Heart of Budapest! At Margaret’s, we serve cold beer, medium-rare steak, coffee BBQ chicken wings, duck with creamy polenta and beetroot, and golden dumplings with pecans and caudle.
              </p>
              <p>
                We don’t complicate things because we believe true genius lies in boldness. Homestyle flavors, expertly prepared with a gourmet twist, and the city’s vibrant atmosphere – what more could you want? Every visit is destined to be a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
