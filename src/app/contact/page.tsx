import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import bgTexture from "@/assets/background2.png";
import contactImg from "@/assets/event.png";
import ContactMessage from "@/components/ContactMessage";
import ContactHours from "@/components/ContactHours";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Buda's Pub.",
};

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function ContactPage() {
  return (
    <>
    <section className="section-bleed relative overflow-hidden border-b border-borderline/70 text-neutral-100">
      <Image src={contactImg} alt="Contact hero" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
      <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-45 mix-blend-multiply pointer-events-none select-none" />
      <div aria-hidden className="absolute inset-0 bg-[#E1C07A]/35 mix-blend-screen" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h1
          className={`${alfa.className} text-center uppercase tracking-wide text-5xl md:text-7xl font-black text-red-600 text-outline`}
        >
          CONTACT
        </h1>
      </div>
    </section>
    <ContactMessage />
    <ContactHours />
    <Footer />
    </>
  );
}
