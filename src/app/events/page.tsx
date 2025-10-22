import Image from "next/image";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bgTexture from "@/assets/background2.png";
import foodHero from "@/assets/food 1.png";
import bgPaper from "@/assets/background.png";
import eventImg from "@/assets/event.png";
import danceImg from "@/assets/dance.png";
import GuestsFeedbackImage from "@/components/GuestsFeedbackImage";
import HostForm from "@/components/HostForm";
import MomentumScroller from "@/components/MomentumScroller";
import Footer from "@/components/Footer";

// Images for backgrounds (local assets)
const HERO_IMG = foodHero;

export const metadata = {
  title: "Events",
  description: "Live events and weekly specials at Buda's Pub.",
};

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export default function EventsPage() {
  return (
    <>
      {/* Top hero section */}
      <section className="section-bleed relative overflow-hidden border-b border-borderline/70 text-neutral-100">
        {/* Base hero photo */}
        <Image src={HERO_IMG} alt="Events hero" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        {/* Texture overlay */}
        <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-45 mix-blend-multiply pointer-events-none select-none" />
        {/* Beige screen overlay to achieve screened look */}
        <div aria-hidden className="absolute inset-0 bg-[#E1C07A]/35 mix-blend-screen" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1
            className={`${alfa.className} text-center uppercase tracking-wide text-5xl md:text-7xl font-black text-red-600 text-outline`}
          >
            EVENTS
          </h1>
        </div>
      </section>

      {/* Special Occasion section */}
      <section className="section-bleed relative overflow-hidden border-b border-borderline/70">
        {/* Dotted paper background */}
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          {/* Left copy (no card, like reference) */}
          <div>
            <div className="relative inline-block pb-6">
              <h2 className={`${alfa.className} text-3xl md:text-5xl font-black text-black`}>Special Occasion?</h2>
              <span className={`${script.className} absolute -bottom-3 left-1 text-red-600 italic text-2xl md:text-4xl leading-none select-none`}>Leave the party to us!</span>
            </div>
            <p className="mt-6 text-neutral-900/95 leading-relaxed max-w-prose">
              Birthday? Friends’ gathering? Business dinner? Organizing a private party...?
            </p>
            <p className="mt-2 text-neutral-900/95 leading-relaxed max-w-prose">
              Private parties for any gastronomic outing. At Margaret’s, everything is set for hosting a larger group.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className={`${alfa.className} text-xl md:text-2xl font-extrabold text-black`}>Corporate events</p>
                <p className="mt-1 text-neutral-900/85 leading-relaxed">From quarterly kickoffs to client dinners — we’ll set up a private room for up to 50 guests, provide projector and PA on request, coursed menus and bar packages. A dedicated coordinator keeps your agenda on time while the kitchen keeps the service flowing.</p>
              </div>
              <div>
                <p className={`${alfa.className} text-xl md:text-2xl font-extrabold text-black`}>Private parties</p>
                <p className="mt-1 text-neutral-900/85 leading-relaxed">Birthdays, anniversaries, reunions — reserve the private room or a large-table layout. Custom playlists, cake service, welcome drinks and decor options are available. We handle the timing so you can enjoy the evening.</p>
              </div>
              <div>
                <p className={`${alfa.className} text-xl md:text-2xl font-extrabold text-black`}>Chef’s table & beer tap rental</p>
                <p className="mt-1 text-neutral-900/85 leading-relaxed">Let our chef host a tasting menu paired with our own taps. We can install a tabletop beer tap at your group’s station, offer guided pours and pair each course with a signature brew — a hit with foodies and corporate treats.</p>
              </div>
              <div>
                <p className={`${alfa.className} text-xl md:text-2xl font-extrabold text-black`}>Team‑building packages</p>
                <p className="mt-1 text-neutral-900/85 leading-relaxed">Fun‑first itineraries: icebreakers, pub games and tasting challenges with scorecards and prizes. AV, whiteboard and projector support available; we’ll tailor the pace to your workshop plan.</p>
              </div>
              <div>
                <p className={`${alfa.className} text-xl md:text-2xl font-extrabold text-black`}>Live music & karaoke</p>
                <p className="mt-1 text-neutral-900/85 leading-relaxed">Compact stage setup with powered speakers and microphones. Bring a guitarist, book our resident DJ or switch to karaoke with on‑screen lyrics. Our staff manages noise levels and the set list.</p>
              </div>
            </div>
          </div>

          {/* Right: single event photo from assets */}
          <div className="relative mt-6 md:mt-10 flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] md:aspect-[5/6] rounded-md overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
              <Image src={eventImg} alt="Event collage" fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover" />
            </div>
            {/* Elephant sticker placed below and centered */}
            <div aria-hidden className="mt-4 md:mt-6">
              <Image src={danceImg} alt="Dance sticker" width={220} height={220} className="mx-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </section>

      <GuestsFeedbackImage />
      <HostForm />
      <MomentumScroller />
      <Footer />

    </>
  );
}
