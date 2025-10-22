"use client";

import React from "react";
import Image from "next/image";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bgPaper from "@/assets/background.png";
import mapImg from "@/assets/a.png";
import heroB from "@/assets/hero image 1.png";
import heroC from "@/assets/hero image (2).png";
import heroD from "@/assets/hero image (3).png";
import heroE from "@/assets/hero image (4).png";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactMessage() {
  const contactTiles = [heroB, heroC, heroD, heroE];
  return (
    <section className="section-bleed relative overflow-hidden">
      <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
      <div className="paper-dots absolute inset-0 pointer-events-none" aria-hidden />

      <div className="relative container-max mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Headline */}
        <div className="text-center">
          <p className={`${script.className} text-2xl md:text-3xl text-neutral-900/80`}>Do you have a question?</p>
          <h2 className={`${alfa.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-black`}>Drop a message!</h2>
          <p className="mt-2 max-w-2xl mx-auto text-neutral-900/90 text-sm md:text-base">
            The team is ready to help. Write to us and we will respond as soon as possible!
          </p>
        </div>

        {/* Two column content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.85fr_1.15fr] xl:grid-cols-[0.8fr_1.2fr] gap-6 items-stretch">
          {/* Left: form */}
          <form className="h-full flex flex-col">
            <div className="space-y-4 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className={`${alfa.className} block text-sm text-black mb-1`}>Name*</span>
                <input
                  type="text"
                  placeholder="What is your name?"
                  className="w-full h-12 md:h-14 rounded-sm border border-black bg-[#fbf3dd] px-4 text-base md:text-lg text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40"
                />
              </label>
              <label className="block">
                <span className={`${alfa.className} block text-sm text-black mb-1`}>Email address*</span>
                <input
                  type="email"
                  placeholder="What is your email address?"
                  className="w-full h-12 md:h-14 rounded-sm border border-black bg-[#fbf3dd] px-4 text-base md:text-lg text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40"
                />
              </label>
            </div>

            <label className="block">
              <span className={`${alfa.className} block text-sm text-black mb-1`}>Subject*</span>
              <input
                type="text"
                placeholder="What are you writing about?"
                className="w-full h-12 md:h-14 rounded-sm border border-black bg-[#fbf3dd] px-4 text-base md:text-lg text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40"
              />
            </label>

            <label className="block">
              <span className={`${alfa.className} block text-sm text-black mb-1`}>Message*</span>
              <textarea
                rows={7}
                placeholder="What can we help with?"
                className="w-full rounded-sm border border-black bg-[#fbf3dd] px-4 py-3 text-base md:text-lg text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40 min-h-[160px] md:min-h-[200px]"
              />
            </label>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="w-full px-8 py-2.5 md:px-10 md:py-3 bg-[#ef2d2d] text-black border-[3px] border-black rounded-sm font-semibold text-base md:text-lg shadow-[0_3px_0_#000]"
              >
                Send
              </button>
            </div>
          </form>

          {/* Right: icons + map */}
          <div className="h-full grid grid-cols-4 gap-x-6 md:gap-x-7 lg:gap-x-8 gap-y-3 md:gap-y-4 lg:gap-y-5 w-full max-w-[420px] md:max-w-[480px] lg:max-w-[540px] mx-auto">
            {/* Use the same small hero images */}
            {contactTiles.map((src, i) => (
              <div key={i} className="relative w-full aspect-square bg-[#242424] border border-black rounded-sm overflow-hidden shadow-[3px_3px_0_#000]">
                <Image src={src} alt={`Contact tile ${i + 1}`} fill sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 22vw, (min-width: 768px) 25vw, 45vw" className="object-cover" />
              </div>
            ))}

            <div className="col-span-4 relative w-full min-h-[220px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] bg-[#1e1e1e] border border-borderline rounded-sm overflow-hidden shadow-[3px_3px_0_#000]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=1027%20Budapest%20Margit%20Boulevard%202&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="col-span-4 mt-4">
              <button type="button" className={`${alfa.className} w-full px-4 py-2 border border-black rounded-sm bg-transparent text-black shadow-[2px_2px_0_#000]`}>
                Route planning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
