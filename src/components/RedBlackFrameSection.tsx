import React from "react";

export default function RedBlackFrameSection() {
  return (
    <section className="my-24 px-4">
      {/* Framed panel */}
      <div className="relative mx-auto max-w-6xl rounded-xl bg-[#161616] p-10 text-center text-neutral-100">
        {/* Dual offset borders (black + red) - decorative only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl border-[5px] border-black"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-xl border-[6px] border-[#ef2d2d]"
        />

        {/* Corner accents */}
        <span aria-hidden className="absolute -top-3 -left-3 h-6 w-6 rotate-45 bg-[#ef2d2d] shadow-[3px_3px_0_#000]" />
        <span aria-hidden className="absolute -top-3 -right-3 h-6 w-6 rotate-45 bg-[#ef2d2d] shadow-[-3px_3px_0_#000]" />
        <span aria-hidden className="absolute -bottom-3 -left-3 h-6 w-6 rotate-45 bg-[#ef2d2d] shadow-[3px_-3px_0_#000]" />
        <span aria-hidden className="absolute -bottom-3 -right-3 h-6 w-6 rotate-45 bg-[#ef2d2d] shadow-[-3px_-3px_0_#000]" />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="inline-block rounded-md bg-black px-4 py-1 text-sm font-semibold uppercase tracking-wider text-[#ef2d2d]">
            Book
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl md:text-4xl font-extrabold leading-tight">
            Book your spot and enjoy the best moments at Buda’s Pub
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-neutral-300">
            Quick online reservation with instant confirmation and flexible times.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            <Feature n="1" title="Easy reservation" text="A few clicks and your spot is secured." />
            <Feature n="2" title="Instant confirmation" text="Get a confirmation immediately." />
            <Feature n="3" title="Flexible times" text="Choose any weekday or weekend slot." />
          </div>

          <div className="pt-2">
            <button className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#ef2d2d] px-6 py-3 text-base font-bold text-black shadow-[3px_3px_0_#000] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="relative grid grid-cols-[auto_1fr] items-start gap-4 rounded-lg bg-[#1d1d1d] p-5 ring-1 ring-black/70">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-sm bg-[#ef2d2d] font-extrabold text-black shadow-[2px_2px_0_#000]">
        {n}
      </div>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-neutral-300">{text}</div>
      </div>
    </div>
  );
}
