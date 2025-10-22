import Image from "next/image";
import { Anton } from "next/font/google";

import bg from "@/assets/background.png";
import bigFood from "@/assets/bigfoodimage.png";
import heroE from "@/assets/hero image (4).png";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });

export default function BigFoodBeerSection() {
  return (
    <section className="section-bleed relative overflow-hidden">
      {/* Background texture */}
      <Image
        src={bg}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
        priority={false}
      />
      <div className="relative z-10 container-max mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-6 md:gap-12">
          {/* Left: big food photo */}
          <div className="relative w-full h-[min(70vh,720px)] min-h-[300px] overflow-hidden ml-[-16px] md:ml-[-32px] mt-[-40px] mb-[-40px] md:mt-[-64px] md:mb-[-64px]">
            <Image
              src={bigFood}
              alt="Signature dishes and drinks at our pub"
              fill
              sizes="(min-width:1024px) 58vw, 92vw"
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Right: bold copy + beer icon */}
          <div className="relative">
            <div className={`${anton.className} uppercase leading-[0.92] tracking-tight space-y-3 sm:space-y-4 md:space-y-6 pr-24 sm:pr-0`}>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#ef2d2d] text-outline soft-drop">Beers?</p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black black-drop">We&apos;ve got 36!</p>

              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
                <span className="text-[#ef2d2d] text-outline soft-drop">HU</span>
                <span className="ml-2 text-black red-offset">DISHES?</span>
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black black-drop">You bet!</p>

              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#ef2d2d] text-outline soft-drop">Vibe?</p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black black-drop">Guaranteed!</p>
            </div>

            {/* Beer icon - floated on the right of the text on larger screens */}
            <div className="hidden sm:block absolute right-0 md:right-0 top-10 md:top-1/3 -translate-y-0 rotate-[-2deg]">
              <div className="bg-white border border-black/40 shadow-[0_8px_20px_rgba(0,0,0,0.25)] p-1.5 md:p-2 rounded transform-gpu">
                <div className="relative w-[74px] h-[148px] md:w-[104px] md:h-[208px]">
                  <Image src={heroE} alt="Feature image" fill sizes="(min-width:1024px) 104px, 74px" className="object-cover" />
                </div>
              </div>
            </div>

            {/* Mobile: image floated to the right of the text */}
            <div className="sm:hidden block absolute right-2 top-1/2 -translate-y-1/2 rotate-[-2deg]">
              <div className="bg-white border border-black/40 shadow-[0_8px_20px_rgba(0,0,0,0.25)] p-1.5 rounded transform-gpu">
                <div className="relative w-[60px] h-[116px]">
                  <Image src={heroE} alt="Feature image" fill sizes="60px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

