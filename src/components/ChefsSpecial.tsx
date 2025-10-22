"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Alfa_Slab_One } from "next/font/google";

import food1 from "@/assets/food 1.png";
import food2 from "@/assets/food 2.png";
import food3 from "@/assets/food 3.png";
import food4 from "@/assets/food 4.png";
import food5 from "@/assets/food 5.png";
import bgDark from "@/assets/blackbackground.png";
import cheff from "@/assets/cheff.png";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

type Slide = {
  img: StaticImageData;
  title: string;
  points: { n: number; title: string; desc?: string }[];
  markers: { n: number; left: string; top: string }[]; // % positions on photo
};

const SLIDES: readonly Slide[] = [
  {
    img: food1,
    title: "SÁRGADINNYE- KRÉMLEVES HÁZI MENTA KAVIÁRRAL",
    points: [
      { n: 1, title: "Sárgadinnye-krémleves", desc: "Édes, gyümölcsös frissesség egy tálnyérban!" },
      { n: 2, title: "Házi menta kaviár", desc: "Frissítő, illatos befejezés." },
    ],
    markers: [
      { n: 1, left: "58%", top: "62%" },
      { n: 2, left: "9%", top: "10%" },
    ],
  },
  {
    img: food2,
    title: "ROSTON SÜLT CSIRKE FŰSZERVAJJAL",
    points: [
      { n: 1, title: "Csirke", desc: "Szaftos és omlós" },
      { n: 2, title: "Fűszervaj", desc: "Illatos, olvadós" },
    ],
    markers: [
      { n: 1, left: "48%", top: "60%" },
      { n: 2, left: "15%", top: "14%" },
    ],
  },
  {
    img: food3,
    title: "MARGARET BURGER HÁZI SZÓSSZAL",
    points: [
      { n: 1, title: "Szaftos pogácsa" },
      { n: 2, title: "Házi szósz" },
    ],
    markers: [
      { n: 1, left: "46%", top: "56%" },
      { n: 2, left: "18%", top: "20%" },
    ],
  },
  {
    img: food4,
    title: "TÜZES SHAKSHUKA FRISS KENYÉRREL",
    points: [
      { n: 1, title: "Paradicsomos alap" },
      { n: 2, title: "Friss kenyér" },
    ],
    markers: [
      { n: 1, left: "50%", top: "58%" },
      { n: 2, left: "10%", top: "14%" },
    ],
  },
  {
    img: food5,
    title: "TRÜFFÖLŐS TÉSZTA PARMEZÁNNAL",
    points: [
      { n: 1, title: "Friss tészta" },
      { n: 2, title: "Trüffel + parmezán" },
    ],
    markers: [
      { n: 1, left: "50%", top: "58%" },
      { n: 2, left: "12%", top: "16%" },
    ],
  },
] as const;

function NumBadge({ n, variant = "red" }: { n: number; variant?: "red" | "gold" }) {
  const base =
    "w-8 h-8 grid place-items-center rounded-full text-sm font-black border-2 shadow-[0_2px_0_rgba(0,0,0,0.45)]";
  const color =
    variant === "red"
      ? "bg-red-600 border-red-800 text-white"
      : "bg-goldbeige text-black border-black/40";
  return <div className={`${base} ${color}`}>{n}</div>;
}

export default function ChefsSpecial() {
  const [i, setI] = useState(0);
  const s = SLIDES[i];

  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="section-bleed relative overflow-hidden border-y border-borderline/70 text-neutral-100">
      {/* Background texture */}
      <Image src={bgDark} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header strip */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-goldbeige/60" />
          <div className={`${alfa.className} px-5 py-2 bg-goldbeige text-black font-black rounded-[2px] leading-none`}>Chef’s Special Offer</div>
          <div className="flex-1 h-[2px] bg-goldbeige/60" />
        </div>

        {/* Headline row */}
        <div className="mt-6 md:mt-8 flex items-start justify-between gap-6">
          <div>
            <h2 className={`${alfa.className} text-3xl md:text-5xl font-black text-goldbeige black-drop`}>The best for the best.</h2>
            <p className="mt-3 text-sm md:text-base text-neutral-200/85 max-w-[50ch]">
              Our chef doesn’t waste time, the formula is simple:
              <br />Classic dishes + Margaret’s twist = a flavor explosion
            </p>
          </div>
          {/* Chef image only */}
          <div className="hidden sm:flex items-center translate-y-1">
            <Image
              src={cheff}
              alt="Chef"
              width={220}
              height={220}
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 180px"
              className="object-contain md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]"
            />
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-[minmax(0,520px)_1fr] gap-10 items-start">
          {/* Photo with markers */}
          <div>
            <div className="relative w-full aspect-[4/3] bg-[#2a2a2a] border border-borderline overflow-hidden">
              <div className="absolute inset-0 z-0 chef-special-bg" aria-hidden />
              <Image src={s.img} alt="Dish" fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover" />
              {s.markers.map((m) => (
                <div
                  key={m.n}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: m.left, top: m.top }}
                >
                  <NumBadge n={m.n} variant={m.n === 1 ? "red" : "gold"} />
                </div>
              ))}
            </div>
          </div>

          {/* Right column: controls + copy */}
          <div>
            <div className="flex items-center gap-3 text-goldbeige">
              <button
                aria-label="Previous"
                onClick={prev}
                className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40"
              >
                ←
              </button>
              <span className="text-sm tabular-nums">{i + 1}/{SLIDES.length}</span>
              <button
                aria-label="Next"
                onClick={next}
                className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40"
              >
                →
              </button>
            </div>

            <h3 className={`${alfa.className} mt-4 md:mt-6 text-2xl md:text-4xl font-black text-goldbeige uppercase`}>{s.title}</h3>
            <div className="mt-2 h-[2px] bg-goldbeige/40" />

            <div className="mt-4 divide-y divide-goldbeige/30">
              {s.points.map((p) => (
                <div key={p.n} className="py-3 flex items-start gap-3">
                  <NumBadge n={p.n} variant={p.n === 1 ? "red" : "gold"} />
                  <div>
                    <p className={`${alfa.className} text-base md:text-lg font-extrabold text-goldbeige`}>{p.title}</p>
                    {p.desc && <p className="text-sm text-neutral-200/85 mt-1">{p.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
