import Image from "next/image";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bookImage from "@/assets/book image.png";
import bgTexture from "@/assets/background2.png";
import hand from "@/assets/hand.png";
import background from "@/assets/background.png";
import BookingProcess from "@/components/BookingProcess";
import BookingInfo from "@/components/BookingInfo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book",
  description: "Reserve a table at Buda's Pub.",
};

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export default function BookPage() {
  return (
    <>
      {/* Top hero section (like Events) */}
      <section className="section-bleed relative overflow-hidden border-b border-borderline/70 text-neutral-100">
        {/* Base hero photo */}
        <Image src={bookImage} alt="Book hero" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        {/* Texture overlay */}
        <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-45 mix-blend-multiply pointer-events-none select-none" />
        {/* Beige screen overlay */}
        <div aria-hidden className="absolute inset-0 bg-[#E1C07A]/35 mix-blend-screen" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1
            className={`${alfa.className} text-center uppercase tracking-wide text-5xl md:text-7xl font-black text-red-600 text-outline`}
          >
            BOOK
          </h1>
        </div>
      </section>

      {/* Intro content section restored */}
      <section className="section-bleed relative overflow-hidden">
        <Image src={background} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
        <div className="paper-dots absolute inset-0 pointer-events-none" aria-hidden />
        <div className="relative container-max mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-start gap-10">
            <div>
              <h2 className={`${script.className} text-goldbeige text-3xl sm:text-4xl md:text-5xl leading-tight`}>Reserve a table,</h2>
              <h3 className={`${alfa.className} text-3xl sm:text-4xl md:text-5xl leading-tight text-black`}>and enjoy the atmosphere!</h3>
              <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-neutral-800">
                Book now and secure your spot at one of the best restaurants in Budapest! It doesn&apos;t matter if you&apos;re coming for a quick dinner or with a larger group – we&apos;ll make sure everything goes smoothly.
              </p>
              <div className="mt-8 space-y-7 text-neutral-900">
                <div>
                  <p className={`${alfa.className} text-lg text-black`}>Easy online booking:</p>
                  <p className="text-sm leading-relaxed">Book a table in under a minute—pick your date, time, and party size and you’re done. No login needed, and it works beautifully on mobile. Your preferences are saved for next time to make it even faster.</p>
                </div>
                <div>
                  <p className={`${alfa.className} text-lg text-black`}>Instant confirmation:</p>
                  <p className="text-sm leading-relaxed">Get your confirmation instantly on screen and via email/SMS. Your table is guaranteed—just arrive and we’ll be ready for you with a warm welcome.</p>
                </div>
                <div>
                  <p className={`${alfa.className} text-lg text-black`}>Flexible dates:</p>
                  <p className="text-sm leading-relaxed">Plans changed? Reschedule or cancel for free up to a few hours before your visit. Whether it’s weekdays or weekends, we’ll find you a spot that suits your plans.</p>
                </div>
                <div>
                  <p className={`${alfa.className} text-lg text-black`}>Real‑time availability:</p>
                  <p className="text-sm leading-relaxed">See live table availability and choose the exact time that works best for you. No back‑and‑forth calls—what you see is what you get.</p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[720px] mx-auto">
              <div className="relative h-[320px] sm:h-[400px] md:h-[460px] bg-transparent border border-borderline rounded-sm overflow-hidden shadow-xl">
                <Image src={bookImage} alt="Dining collage" fill sizes="(min-width: 1024px) 720px, 92vw" className="object-cover" />
              </div>
              <div className="mt-7 flex items-center gap-7">
                <button type="button" className="px-8 py-2.5 md:px-10 md:py-3 min-w-[210px] bg-[#ef2d2d] text-black border-[3px] border-black rounded-sm font-semibold text-base md:text-lg shadow-[0_3px_0_#000]">
                  Table reservation
                </button>
                <Image src={hand} alt="" width={460} height={170} className="h-28 md:h-32 w-auto select-none pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingProcess />
      <BookingInfo />
      <Footer />
    </>
  );
}
