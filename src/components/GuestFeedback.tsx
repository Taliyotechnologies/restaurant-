"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Alfa_Slab_One } from "next/font/google";

import bgPaper from "@/assets/background2.png";
import H1 from "@/assets/hotel 1.jpg";
import H2 from "@/assets/hotel 2.jpg";
import H3 from "@/assets/hotel 8.jpg";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

type Testimonial = {
  img: StaticImageData;
  name: string;
  text: string;
  rating: number; // 1..5
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    img: H1,
    name: "Márton",
    rating: 5,
    text:
      "The restaurant is amazing, the interior design is very modern and photo-friendly! The service, the food, and the drinks were all phenomenal. I'll definitely come back another time.",
  },
  {
    img: H2,
    name: "Eszter",
    rating: 5,
    text:
      "Fantastic atmosphere and super friendly staff. The live music nights are a must-try and the craft beers are excellent!",
  },
  {
    img: H3,
    name: "Levente",
    rating: 4,
    text:
      "Great place to hang out with friends. Loved the food variety and the whole vibe. Highly recommended!",
  },
] as const;

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-goldbeige">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < n ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function GuestFeedback() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-bleed relative overflow-hidden border-y border-borderline/70">
      {/* Background texture (background2.png) */}
      <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Title strip with side rules */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-neutral-700/60" />
          <div
            className={`${alfa.className} px-6 py-3 bg-black text-white font-black text-[22px] md:text-[26px] leading-none tracking-[0.005em] antialiased rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.35)]`}
          >
            Guest Feedback
          </div>
          <div className="flex-1 h-[2px] bg-neutral-700/60" />
        </div>

        {/* Main grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left: headline + blurb */}
          <div>
            <h2
              className={`${alfa.className} red-offset uppercase text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-black`}
            >
              The words of our guests mean more than anything to us.
            </h2>
            <p className="mt-5 text-neutral-900/90 max-w-[46ch]">
              Our love language is delicious food and hospitality, so we are always happy to welcome those who can put it into
              words.
            </p>
          </div>

          {/* Right: testimonial card */}
          <div>
            <article className="w-full bg-white text-black border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,0.85)] overflow-hidden">
              <div className="grid grid-cols-[150px_1fr] md:grid-cols-[220px_1fr]">
                <div className="relative min-h-[180px] md:min-h-[240px] border-r border-black">
                  <Image src={t.img} alt="Dish photo" fill sizes="(min-width: 768px) 220px, 150px" className="object-cover" />
                </div>
                <div className="p-4 md:p-6 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-neutral-900 leading-relaxed">{t.text}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <Stars n={t.rating} />
                      <p className="mt-1 text-xs text-neutral-700">{t.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                aria-label="Previous"
                onClick={prev}
                className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] text-white hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40"
              >
                ←
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="w-9 h-9 grid place-items-center border border-borderline rounded-full bg-[#1b1b1b] text-white hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-goldbeige/40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
