"use client";

import React, { useEffect } from "react";
import { Alfa_Slab_One } from "next/font/google";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });

const steps = [
  { n: 1, title: "Choose a day" },
  { n: 2, title: "Choose how many people you are coming with" },
  { n: 3, title: "Pick a time" },
  { n: 4, title: "Allergies, birthday? All that's left is the information" },
  { n: 5, title: "All set!" },
];

export default function BookingProcess() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".bp-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative mt-16 md:mt-20 section-bleed booking-bg">
      <div className="relative container-max mx-auto px-6 md:px-8 py-16 md:py-20 lg:py-28">
        <div className="relative flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-black/40" />
          <div className={`${alfa.className} inline-flex items-center bg-black text-goldbeige text-lg md:text-xl px-4 py-2 rounded-sm border border-black`}>Booking process</div>
          <div className="h-px flex-1 bg-black/40" />
        </div>

        {/* Steps block with its own relative wrapper so the dashed line starts below the heading */}
        <div className="relative mt-14 sm:mt-20 md:mt-24">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] center-dash opacity-70" aria-hidden />
          {/* One column grid so items appear strictly one after another. On lg we align each item to left/right half. */}
          <div className="grid grid-cols-1 items-stretch gap-y-10 md:gap-y-12 lg:gap-y-14">
          {steps.map((s, i) => {
            const isRight = i % 2 === 1;
            return (
              <div
                key={s.n}
                className={`${
                  isRight
                    ? "lg:justify-self-end lg:ml-10"
                    : "lg:justify-self-start lg:mr-10"
                } w-full lg:w-[44%] xl:w-[42%] h-[64px] md:h-[84px] reveal bp-reveal ${isRight ? "reveal-right" : "reveal-left"} td-${i * 160}`}
              >
                <div className="relative bg-[#fbf3dd] text-black rounded-sm border border-black px-5 py-2 md:px-6 md:py-2.5 h-full flex items-center justify-between shadow-[4px_4px_0_#000]">
                  <h4 className={`${alfa.className} text-sm md:text-base leading-tight font-bold text-center w-full pr-14`}>{s.title}</h4>
                  <div className="absolute right-3 md:right-4 w-9 h-9 md:w-11 md:h-11 bg-[#d6b980] border border-black flex items-center justify-center rounded-sm">
                    <span className={`${alfa.className} text-black text-base md:text-lg`}>{s.n}.</span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
