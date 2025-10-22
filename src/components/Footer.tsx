import Image from "next/image";
import Link from "next/link";
import { Alfa_Slab_One } from "next/font/google";
import bgDark from "@/assets/blackbackground.png";
import harmonsLogo from "@/assets/harmons.png";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-bleed relative overflow-hidden border-t border-borderline text-neutral-100">
      {/* Background texture */}
      <Image src={bgDark} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 md:pt-48 pb-10 md:pb-14">
        {/* Top thin rule */}
        <div className="h-[2px] bg-goldbeige/50" />

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-12 items-start">
          {/* Left: CTA */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-10">
                <Image src={harmonsLogo} alt="Harmons" fill sizes="128px" className="object-contain" />
              </div>
            </div>
            <h2 className={`${alfa.className} text-4xl md:text-5xl font-black text-goldbeige black-drop mt-2`}>See you soon?</h2>
            <p className="mt-4 text-neutral-200/85 max-w-[40ch]">
              We’re waiting for you at Harmons in Budapest! This won’t be an average evening!
            </p>
            <div className="mt-6">
              <Link
                href="/book"
                className={`${alfa.className} inline-block px-6 py-3 bg-transparent text-goldbeige border-2 border-goldbeige hover:bg-goldbeige hover:text-black transition-colors rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.35)]`}
              >
                Book
              </Link>
            </div>
          </div>

          {/* Middle: Contact + Hours with vertical rule */}
          <div className="relative">
            <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-goldbeige/50" aria-hidden />
            <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-px bg-goldbeige/50" aria-hidden />
            <h4 className={`${alfa.className} text-goldbeige text-xl font-black`}>Contact Us</h4>
            <div className="h-[2px] bg-goldbeige/50 my-2" />
            <address className="not-italic space-y-2 text-neutral-200/90">
              <p>1027 Budapest Margit körút 2.</p>
              <p>
                <a href="tel:+3620612042" className="hover:underline">+36 20 612 0042</a>
              </p>
              <p>
                <a href="mailto:contact@harmons.hu" className="hover:underline">contact@harmons.hu</a>
              </p>
            </address>

            <h4 className={`${alfa.className} text-goldbeige text-xl font-black mt-6`}>Opening Hours</h4>
            <div className="h-[2px] bg-goldbeige/50 my-2" />
            <p>Monday–Sunday</p>
            <p>11:00 – 23:00</p>
          </div>

          {/* Right: Map placeholder */}
          <div>
            <div className="relative w-full aspect-square bg-[#1e1e1e] border border-borderline overflow-hidden">
              <iframe
                title="Map to Harmons Budapest"
                aria-label="Map to Harmons Budapest"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps?q=1027%20Budapest%20Margit%20k%C3%B6r%C3%BAt%202&z=15&output=embed"
              />
            </div>
          </div>
        </div>

        {/* Bottom thin rule */}
        <div className="mt-8 h-[2px] bg-goldbeige/50" />

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-sm text-neutral-200/85">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <span aria-hidden className="text-goldbeige/60">|</span>
            <Link href="#" className="hover:underline">Impresszum</Link>
          </div>

          <div className="text-center">Copyright {year}. Harmons Budapest</div>

          <div className="flex items-center gap-3">
            <Link aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center border border-black/40 rounded-[4px] bg-goldbeige text-black hover:bg-[#f1d49a] transition shadow-[0_2px_0_rgba(0,0,0,0.35)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center border border-black/40 rounded-[4px] bg-goldbeige text-black hover:bg-[#f1d49a] transition shadow-[0_2px_0_rgba(0,0,0,0.35)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </Link>
            <Link aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center border border-black/40 rounded-[4px] bg-goldbeige text-black hover:bg-[#f1d49a] transition shadow-[0_2px_0_rgba(0,0,0,0.35)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
