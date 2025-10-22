"use client";

import Image from "next/image";

import logo1 from "@/assets/beerlogo1.png";
import logo2 from "@/assets/beerlogo2.png";
import logo3 from "@/assets/beerlogo3.png";
import logo4 from "@/assets/beerlogo4.png";
import logo5 from "@/assets/beerlogo5.png";
import logo6 from "@/assets/beerlogo6.png";
import logo7 from "@/assets/beerlogo7.png";
import logo8 from "@/assets/beerlogo8.png";
import logo9 from "@/assets/beerlogo9.png";
import logo10 from "@/assets/beerlogo10.png";
import logo11 from "@/assets/beerlogo11.webp";
import logo12 from "@/assets/beerlogo12.webp";
import logo13 from "@/assets/beerlogo13.webp";
import logo14 from "@/assets/beerlogo14.webp";

import beer1 from "@/assets/beer1.webp";
import beer2 from "@/assets/beer2.png";
import beer3 from "@/assets/beer3.png";
import beer4 from "@/assets/beer4.png";
import beer5 from "@/assets/beer5.png";
import beer6 from "@/assets/beer6.png";
import beer7 from "@/assets/beer7.png";
import beer8 from "@/assets/beer8.png";
import beer9 from "@/assets/beer9.png";
import beer10 from "@/assets/beer10.png";
import beer11 from "@/assets/beer11.png";
import beer12 from "@/assets/beer12.png";

const LOGOS = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
];

const LOGO_SCALES: number[] = [1.1, 1.1, 1.1, 1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1];

const BEERS = [beer1, beer2, beer3, beer4, beer5, beer6, beer7, beer8, beer9, beer10, beer11, beer12];
const BEER_SCALES: number[] = [1.32, 1.14, 1.18, 1.16, 0.82, 1.18, 1.24, 1.16, 1.18, 1.32, 1.3, 1.32];

export default function BeerBrandSliders() {
  const logosLoop = [...LOGOS, ...LOGOS];
  const beersLoop = [...BEERS, ...BEERS];

  return (
    <section className="section-bleed beer-section-bg relative overflow-hidden">
      <div className="relative">
        <div className="marquee edge-fade events-edge-fade pt-2 md:pt-2 lg:pt-3 pb-0 md:pb-0 lg:pb-0">
          <div className="marquee-track marquee-reverse marquee-dur-42 flex items-center gap-[clamp(64px,7.5vw,140px)]">
            {logosLoop.map((src, i) => (
              <div key={`logo-${i}`} className="shrink-0 grid place-items-center">
                <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] xl:w-[240px] h-[56px] sm:h-[64px] md:h-[80px] lg:h-[92px]">
                  <Image
                    src={src}
                    alt={`beer-logo-${i % LOGOS.length}`}
                    fill
                    className="object-contain select-none pointer-events-none"
                    style={{ transform: `scale(${LOGO_SCALES[i % LOGOS.length] ?? 1})`, transformOrigin: "center" }}
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, (max-width: 1280px) 220px, 240px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee marquee-no-pause edge-fade events-edge-fade pt-0 md:pt-0 lg:pt-0 pb-2 md:pb-2 lg:pb-3 -mt-2 md:-mt-3">
          <div className="marquee-track marquee-dur-38 flex items-end gap-0">
            {beersLoop.map((src, i) => (
              <div key={`beer-${i}`} className="shrink-0 grid place-items-end -mx-8 sm:-mx-9 md:-mx-10 lg:-mx-11 xl:-mx-12">
                <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[500px] w-[156px] sm:w-[188px] md:w-[220px] lg:w-[256px] xl:w-[292px]">
                  <Image
                    src={src}
                    alt={`beer-bottle-${i % BEERS.length}`}
                    fill
                    className="object-contain object-bottom select-none pointer-events-none"
                    style={{ transform: `scale(${BEER_SCALES[i % BEERS.length] ?? 1})`, transformOrigin: "bottom center" }}
                    sizes="(max-width: 640px) 156px, (max-width: 768px) 188px, (max-width: 1024px) 220px, (max-width: 1280px) 256px, 292px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
