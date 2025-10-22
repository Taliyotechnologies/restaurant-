"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Anton, Alfa_Slab_One, Great_Vibes } from "next/font/google";
import bgDark from "@/assets/blackbackground.png";
import multiPhoto from "@/assets/multiphoto.png";
import harmonLogo from "@/assets/harmons.png";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Great_Vibes({ subsets: ["latin"], weight: "400", display: "swap" });

export default function FinalShowcaseSection() {
  const [active, setActive] = useState<"feature" | "dish" | "music" | null>(null);
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

      <div className="relative z-10 container-max mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-stretch gap-8 md:gap-x-12 md:gap-y-6 md:min-h-[clamp(480px,70vw,680px)]">
          {/* Left: Red feature card + bullets */}
          <div className="flex flex-col h-full max-w-[640px]">
            {/* 3 equal-height cards */}
            <div className="grid grid-rows-3 gap-6 flex-1">
              {/* Card 1: Feature */}
              <div className="relative overflow-hidden">
                <div className={`${active === "feature" ? "bg-[#ef2d2d] text-black border-black" : "bg-[#101010]/85 text-neutral-100 border-borderline hover:bg-[#111]/90 hover:border-neutral-500/80"} border shadow-[0_2px_0_#000] px-6 py-6 md:px-8 md:py-8 rounded-sm h-full flex flex-col transition-colors overflow-hidden relative`} role="button" tabIndex={0} onClick={() => setActive((k) => (k === "feature" ? null : "feature"))} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive((k) => (k === "feature" ? null : "feature")); } }}>
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    aria-label={active === "feature" ? "Collapse" : "Expand"}
                    aria-expanded={active === "feature"}
                    aria-controls="feature-desc"
                    onClick={(e) => { e.stopPropagation(); setActive((k) => (k === "feature" ? null : "feature")); }}
                    className="grid place-items-center shrink-0 w-7 h-7 bg-black text-goldbeige border border-black rounded-[2px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef2d2d] hover:bg-[#0e0e0e] cursor-pointer"
                  >
                    <span className="text-lg leading-none">{active === "feature" ? "−" : "+"}</span>
                  </button>
                  <div>
                    <h3 id="feature-heading" className={`${alfa.className} text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight`}>36 Varieties</h3>
                    <p className={`${script.className} text-goldbeige text-xl sm:text-2xl md:text-3xl leading-tight`}>Of Craft Beer</p>
                  </div>
                </div>
                <div id="feature-desc" role="region" aria-labelledby="feature-heading" tabIndex={-1} className={`transition-[max-height] duration-300 ease-in-out ${active === "feature" ? "max-h-40 md:max-h-48" : "max-h-0"} overflow-hidden`}>
                  <p className={`mt-4 text-[13.5px] sm:text-sm md:text-base ${active === "feature" ? "text-[#1b1b1b]" : "text-neutral-300"}`}>
                    We have more beers than stories you&apos;ve shared with your friends! Whether it&apos;s a classic pilsner or a rich porter, there&apos;s always something new to try at our pub.
                  </p>
                </div>
              </div>
            </div>

              {/* Card 2: Dishes */}
              <div className="relative overflow-hidden">
                <div className={`${active === "dish" ? "bg-[#ef2d2d] text-black border-black" : "bg-[#101010]/85 text-neutral-100 border-borderline hover:bg-[#111]/90 hover:border-neutral-500/80"} rounded-sm border px-6 py-6 md:px-8 md:py-8 h-full flex flex-col transition-colors overflow-hidden relative`} role="button" tabIndex={0} onClick={() => setActive((k) => (k === "dish" ? null : "dish"))} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive((k) => (k === "dish" ? null : "dish")); } }}>
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    aria-label={active === "dish" ? "Collapse" : "Expand"}
                    aria-expanded={active === "dish"}
                    aria-controls="dish-desc"
                    onClick={(e) => { e.stopPropagation(); setActive((k) => (k === "dish" ? null : "dish")); }}
                    className="grid place-items-center shrink-0 w-7 h-7 bg-black text-goldbeige border border-black rounded-[2px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef2d2d] hover:bg-[#0e0e0e] cursor-pointer"
                  >
                    <span className="text-lg leading-none">{active === "dish" ? "−" : "+"}</span>
                  </button>
                  <div>
                    <p className={`${script.className} text-goldbeige text-xl sm:text-2xl md:text-3xl leading-tight`}>More than</p>
                    <p id="dish-heading" className={`${anton.className} uppercase text-2xl sm:text-3xl md:text-4xl font-black ${active === "dish" ? "text-black" : "text-white"} black-drop`}>80 dishes</p>
                  </div>
                </div>
                <div id="dish-desc" role="region" aria-labelledby="dish-heading" tabIndex={-1} className={`transition-[max-height] duration-300 ease-in-out ${active === "dish" ? "max-h-40 md:max-h-48" : "max-h-0"} overflow-hidden`}>
                  <p className={`mt-2 text-sm leading-relaxed ${active === "dish" ? "text-black/80" : "text-neutral-300"}`}>
                    And dozens of them are trending. Start with a punchy beer snack, a gourmet burger, then enjoy our legendary goulash or a juicy steak. If you’re craving more,
                    indulge in seasonal and new courses. Always crafted fresh to finish with a heavenly dessert.
                  </p>
                </div>
                </div>
              </div>

              {/* Card 3: Music */}
              <div className="relative overflow-hidden">
                <div className={`${active === "music" ? "bg-[#ef2d2d] text-black border-black" : "bg-[#101010]/85 text-neutral-100 border-borderline hover:bg-[#111]/90 hover:border-neutral-500/80"} rounded-sm border px-6 py-6 md:px-8 md:py-8 h-full flex flex-col transition-colors overflow-hidden relative`} role="button" tabIndex={0} onClick={() => setActive((k) => (k === "music" ? null : "music"))} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive((k) => (k === "music" ? null : "music")); } }}>
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    aria-label={active === "music" ? "Collapse" : "Expand"}
                    aria-expanded={active === "music"}
                    aria-controls="music-desc"
                    onClick={(e) => { e.stopPropagation(); setActive((k) => (k === "music" ? null : "music")); }}
                    className="grid place-items-center shrink-0 w-7 h-7 bg-black text-goldbeige border border-black rounded-[2px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef2d2d] hover:bg-[#0e0e0e] cursor-pointer"
                  >
                    <span className="text-lg leading-none">{active === "music" ? "−" : "+"}</span>
                  </button>
                  <div>
                    <p id="music-heading" className={`${script.className} text-goldbeige text-xl sm:text-2xl md:text-3xl leading-tight`}>Live music</p>
                    <p className={`${anton.className} uppercase text-2xl sm:text-3xl md:text-4xl font-black ${active === "music" ? "text-black" : "text-white"} black-drop`}>here it&apos;s not an extra, it&apos;s part of the experience.</p>
                  </div>
                </div>
                <div id="music-desc" role="region" aria-labelledby="music-heading" tabIndex={-1} className={`transition-[max-height] duration-300 ease-in-out ${active === "music" ? "max-h-40 md:max-h-48" : "max-h-0"} overflow-hidden`}>
                  <p className={`mt-2 text-sm leading-relaxed ${active === "music" ? "text-black/80" : "text-neutral-300"}`}>
                    From acoustic evenings to energetic bands, we host performances that elevate your night. Grab a drink, enjoy the vibes, and make memories with friends.
                  </p>
                </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Photo collage */}
          <div className="relative w-full max-w-[720px] mx-auto md:self-stretch">
            <div className="relative h-[360px] sm:h-[420px] md:h-full bg-transparent border border-borderline rounded-sm overflow-hidden shadow-xl">
              <Image src={multiPhoto} alt="Collage of our food and drinks" fill sizes="(min-width: 1024px) 720px, 92vw" className="object-cover" />
            </div>
          </div>

          {/* Footer note under the 3 cards (spans both columns) */}
          <div className="pt-4 md:pt-0 md:col-span-2">
            <div className="border-t border-borderline" />
            <div className="py-5">
              <div className="flex items-center justify-center gap-4">
                <span className={`${anton.className} text-goldbeige text-xl sm:text-2xl`}>This is</span>
                <span className="inline-block align-middle">
                  <Image
                    src={harmonLogo}
                    alt="Harmon's"
                    width={260}
                    height={64}
                    className="h-8 sm:h-10 md:h-12 w-auto soft-drop"
                    priority={false}
                  />
                </span>
              </div>
            </div>
            <div className="border-t border-borderline" />
          </div>
        </div>
      </div>
    </section>
  );
}
