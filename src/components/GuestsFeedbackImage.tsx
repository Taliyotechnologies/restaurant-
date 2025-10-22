import Image from "next/image";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bgTexture from "@/assets/background2.png";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export default function GuestsFeedbackImage() {
  return (
    <section className="section-bleed relative overflow-hidden">
      {/* Beige dotted background */}
      <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Title strip with side rules */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-neutral-700/60" />
          <div
            className={`${alfa.className} px-6 py-3 bg-black text-white font-black text-[22px] md:text-[26px] leading-none tracking-[0.005em] antialiased rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.35)]`}
          >
            Our guests’ feedback
          </div>
          <div className="flex-1 h-[2px] bg-neutral-700/60" />
        </div>

        {/* Script headline */}
        <p
          className={`${script.className} text-center mt-8 md:mt-10 text-[28px] sm:text-[36px] md:text-[44px] leading-snug italic text-black`}
        >
          “The place where something is always happening!”
        </p>

        {/* Two testimonial cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Company owner"
            text="The company dinner was amazing – the private room, the beers, the food, everything was excellent! My colleagues are still talking about it."
            rating={5}
          />
          <TestimonialCard
            name="Janka, vendég"
            text="We rented the private room for my birthday, and we were blown away! The beers were excellent, and the chef’s table was a real special treat."
            rating={5}
          />
        </div>

        {/* Bottom CTAs removed by request */}
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-goldbeige" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < n ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <article className="w-full bg-white text-black border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,0.85)]">
      <div className="p-6 md:p-8">
        <Stars n={rating} />
        <p className="mt-4 text-neutral-900 leading-relaxed">{text}</p>
        <p className="mt-6 text-sm font-semibold text-neutral-900">{name}</p>
      </div>
    </article>
  );
}
