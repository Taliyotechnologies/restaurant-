"use client";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import hero1 from "@/assets/hero image 1.png";
import hero2 from "@/assets/hero image (2).png";
import hero4 from "@/assets/hero image (4).png";
import hero5 from "@/assets/hero image (5).png";
import bgBeige from "@/assets/background.png";
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

function ImageBadge({ src, alt }: { src: any; alt: string }) {
  return (
    <span className="inline-block align-middle mx-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] hover:rotate-[1.5deg]">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] md:w-[96px] md:h-[96px] object-cover rounded-[6px] border-4 border-black shadow-[0_3px_0_rgba(0,0,0,0.8)]"
      />
    </span>
  );
}

export default function BottomPitchSection() {
  return (
    <section className="section-bleed relative overflow-hidden border-t border-borderline text-black">
      {/* Background texture */}
      <Image
        src={bgBeige}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
        priority={false}
      />

      <div className="relative z-10 container-max mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className={`${alfa.className} leading-[1.04] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold`}>
            At Buda&apos;s Pub,
            <ImageBadge src={hero2} alt="icon" />
            every great evening begins
          </p>

          <p className={`${alfa.className} leading-[1.04] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3 sm:mt-4`}>
            neighborhood bar
            <ImageBadge src={hero4} alt="icon" />
            flavors of Hungary
          </p>

          <p className={`${alfa.className} leading-[1.04] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3 sm:mt-4`}>
            <ImageBadge src={hero5} alt="icon" />
            beers and atmosphere, the
          </p>

          <p className={`${alfa.className} leading-[1.04] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3 sm:mt-4`}>
            reasons you&apos;ll keep coming back.
            <ImageBadge src={hero1} alt="icon" />
          </p>
        </div>
      </div>
    </section>
  );
}
