"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

// Letter images for the word "MOMENTUMS"
import L_M from "@/assets/momentum m.png";
import L_O from "@/assets/momentum o.png";
import L_E from "@/assets/momentum e.png";
import L_N from "@/assets/momentum n.png";
import L_T from "@/assets/momentum t.png";
import L_U from "@/assets/momentum u.png";
import L_S from "@/assets/momentum s.png";

// Photo tiles (hotel images)
import H1 from "@/assets/hotel 1.jpg";
import H2 from "@/assets/hotel 2.jpg";
import H8 from "@/assets/hotel 8.jpg";
import H9 from "@/assets/hotel 9.jpg";
import H10 from "@/assets/hotel 10.jpg";

export default function MomentumShowcase() {
  const root = useRef<HTMLDivElement | null>(null);
  const pin = useRef<HTMLDivElement | null>(null);
  const rail = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  const [dx, setDx] = useState(0); // horizontal distance traveled
  const [travel, setTravel] = useState(1); // total horizontal travel needed

  // Measure content and set required travel + container height
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const r = root.current;
      const t = track.current;
      if (!r || !t) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const contentW = t.scrollWidth; // width of letters row
      let total = Math.max(0, Math.ceil(contentW - vw));
      // small rounding fudge so we never overshoot by a pixel
      total = Math.max(0, total - 1);

      setTravel(total);
      // Container height = viewport height + horizontal travel
      r.style.height = `${vh + total}px`;
    };

    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Convert vertical scroll to horizontal translation (right -> left)
  useEffect(() => {
    const r = root.current;
    if (!r) return;

    let anim = 0;
    const update = () => {
      const rect = r.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh; // top == vh -> progress 0
      const end = -Math.max(1, travel); // top == -travel -> progress 1
      const raw = (start - rect.top) / Math.max(1, start - end);
      const progress = Math.max(0, Math.min(1, raw));
      setDx(progress * travel);
      anim = 0;
    };
    const onScroll = () => {
      if (!anim) anim = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (anim) cancelAnimationFrame(anim);
    };
  }, [travel]);

  // MOMENTUMS letters
  const letters: StaticImageData[] = [L_M, L_O, L_M, L_E, L_N, L_T, L_U, L_M, L_S];

  return (
    <section ref={root} className="relative w-full section-bleed -mb-px overflow-hidden red-dots">
      <div ref={pin} className="sticky top-0 min-h-[100svh] h-screen overflow-hidden">
        {/* Moving rail (right -> left) */}
        <div
          ref={rail}
          className="relative h-full flex items-center"
          style={{
            transform: `translateX(${-dx}px)`,
            willChange: "transform",
          }}
        >
          {/* Letter images track */}
          <div ref={track} className="inline-flex items-center gap-[8vw] pl-[6vw] pr-[22vw]">
            {letters.map((img, i) => (
              <div key={i} className="relative h-[62vh] md:h-[70vh] aspect-[3/4] select-none">
                <Image
                  src={img}
                  alt={`Letter ${i}`}
                  fill
                  sizes="(max-width: 768px) 60vh, 70vh"
                  className="object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,0.85)]"
                  onLoadingComplete={() => {
                    // re-measure when images load
                    window.dispatchEvent(new Event("resize"));
                  }}
                  priority={i < 2}
                />
              </div>
            ))}
          </div>

          {/* Floating photo tiles above the letters */}
          <div className="pointer-events-none absolute inset-0 z-[2]">
            <Tile img={H1} left="12%" top="14%" rotate={-6} />
            <Tile img={H2} left="30%" top="8%" rotate={7} />
            <Tile img={H8} left="52%" top="22%" rotate={-5} />
            <Tile img={H9} left="74%" top="10%" rotate={8} />
            <Tile img={H10} left="90%" top="28%" rotate={-6} />
          </div>
        </div>
      </div>
      {/* tiny spacer to prevent sub-pixel seam showing the page background */}
      <div className="h-px w-full" />
    </section>
  );
}

function Tile({ img, left, top, rotate }: { img: StaticImageData; left: string; top: string; rotate?: number }) {
  return (
    <div
      aria-hidden
      className="absolute"
      style={{ left, top, width: "clamp(120px, 22vw, 260px)", aspectRatio: "1 / 1", transform: `rotate(${rotate ?? 0}deg)` }}
    >
      <div className="relative h-full w-full">
        {/* black offset border shadow */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
        <Image src={img} alt="" fill sizes="(max-width: 768px) 40vw, 22vw" className="object-cover shadow-xl" />
      </div>
    </div>
  );
}
