"use client";

import Link from "next/link";

export default function FixedBottomCTAs() {
  return (
    <div className="fixed inset-x-0 bottom-3 sm:bottom-4 z-[999] flex justify-center px-3 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-0">
        <Link
          href="/book"
          aria-label="Reservation"
          className="relative inline-flex items-center justify-center bg-[#ef2d2d] text-white font-black uppercase tracking-wide border-2 border-[#ef2d2d] border-r-0 h-9 md:h-10 px-3.5 md:px-5 rounded-l-[2px] rounded-r-none shadow-[3px_3px_0_0_#000] hover:translate-y-[-1px] active:translate-y-0 transition-transform select-none"
        >
          <span className="relative">
            Reservation
            <span className="pointer-events-none absolute inset-0 translate-y-0.5">
              {/* inner white box */}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-1 border border-white/95 rounded-[1px]"></span>
        </Link>

        <Link
          href="/menu"
          aria-label="Menu"
          className="relative inline-flex items-center justify-center bg-[#ef2d2d] text-white font-black uppercase tracking-wide border-2 border-[#ef2d2d] border-l-0 h-9 md:h-10 px-4 md:px-6 rounded-r-[2px] rounded-l-none shadow-[3px_3px_0_0_#000] hover:translate-y-[-1px] active:translate-y-0 transition-transform select-none"
        >
          <span className="relative">Menu</span>
          <span className="pointer-events-none absolute inset-1 border border-white/95 rounded-[1px]"></span>
        </Link>

        {/* Spacer to the right as requested (a bit larger) */}
        <div className="ml-5 sm:ml-6 md:ml-8" />

        {/* Sticky small square button (e.g., language) */}
        <button
          type="button"
          aria-label="Language"
          className="relative inline-flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-[8px] bg-[#1e1e1e] border-2 border-black shadow-[3px_3px_0_0_#000]"
        >
          {/* Indian flag: saffron / white with Ashoka Chakra / green */}
          <span className="relative w-5 h-3.5 overflow-hidden rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.15)]">
            <span className="block w-full h-1.5 bg-[#FF671F]"></span>
            <span className="relative block w-full h-1.5 bg-white">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border border-[#0a3d91]"></span>
            </span>
            <span className="block w-full h-1.5 bg-[#138808]"></span>
          </span>
        </button>
      </div>
      {/* iOS safe area */}
      <div className="fixed bottom-0 left-0 right-0 h-[env(safe-area-inset-bottom)]"></div>
    </div>
  );
}
