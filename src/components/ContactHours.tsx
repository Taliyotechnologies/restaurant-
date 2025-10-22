import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ContactHours() {
  return (
    <section className="section-bleed relative overflow-hidden bg-[#ef2d2d] border-y border-black/30">
      <div className="paper-dots-lite absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative container-max mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10">
          {/* Left: Contact info */}
          <div className="text-center md:text-left">
            <h3 className={`${alfa.className} text-goldbeige text-3xl md:text-4xl lg:text-5xl font-black text-outline`}>Contact</h3>
            <div className="h-[3px] w-28 md:w-32 bg-black/70 mt-2 mb-5 mx-auto md:mx-0" />
            <div className="space-y-3 text-base md:text-lg leading-relaxed text-black font-medium tracking-wide">
              <p>1027 Budapest Margit Boulevard 2.</p>
              <p>+36 20 612 0142</p>
              <p>margarets@wasabi.hu</p>
            </div>
          </div>

          {/* Center divider (desktop only) */}
          <div className="hidden md:block w-px h-full bg-black/50 mx-auto" aria-hidden />

          {/* Right: Opening hours */}
          <div className="text-center md:text-right">
            <h3 className={`${alfa.className} text-goldbeige text-3xl md:text-4xl lg:text-5xl font-black text-outline`}>Opening hours</h3>
            <div className="h-[3px] w-28 md:w-32 bg-black/70 mt-2 mb-5 mx-auto md:ml-auto md:mr-0" />
            <div className="space-y-3 text-base md:text-lg leading-relaxed text-black font-medium tracking-wide">
              <p>Monday–Sunday</p>
              <p className="font-semibold">11:00 – 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
