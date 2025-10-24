"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Info = {
  title: string;
  price: string;
  imgSrc: string;
  category?: string;
  desc?: string;
};

export default function MenuQuickView() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>("[data-menu-item]");
      if (!el) return;
      const title = el.getAttribute("data-title") || "Item";
      const price = el.getAttribute("data-price") || "";
      const imgSrc = el.getAttribute("data-img") || "";
      const category = el.getAttribute("data-category") || undefined;
      const desc = el.getAttribute("data-desc") || undefined;
      setInfo({ title, price, imgSrc, category, desc });
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !info) return null;

  const fallbackDesc = info.desc || "Carefully prepared with fresh ingredients, served with our signature touch.";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      <div role="dialog" aria-modal="true" className="relative z-10 max-w-5xl w-[92vw] md:w-[86vw] bg-[#F1EEDB] text-black rounded-md shadow-[0_8px_0_#000] border-2 border-black overflow-hidden">
        <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-3 top-3 w-9 h-9 grid place-items-center rounded-full bg-black/80 text-white">×</button>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(320px,400px)] gap-0">
          <div className="relative min-h-[260px] md:min-h-[520px] bg-[#222]">
            {info.imgSrc ? (
              <Image src={info.imgSrc} alt={info.title} fill sizes="(max-width:768px) 92vw, 60vw" className="object-cover" />
            ) : null}
          </div>
          <div className="p-5 md:p-7">
            {info.category ? (
              <span className="inline-block px-3 py-1 text-xs font-extrabold uppercase bg-black text-white rounded-sm">{info.category}</span>
            ) : null}
            <h3 className="mt-3 text-2xl md:text-3xl font-black leading-snug">{info.title}</h3>
            <p className="mt-3 text-sm md:text-base text-black/80">{fallbackDesc}</p>
            <div className="mt-5 flex items-center gap-2 text-black/70">
              <span className="inline-block px-2 py-1 border border-black/30 rounded">🔥</span>
              <span className="inline-block px-2 py-1 border border-black/30 rounded">🌶️</span>
              <span className="inline-block px-2 py-1 border border-black/30 rounded">🥗</span>
            </div>
            <div className="mt-6 text-2xl md:text-3xl font-black tracking-wide">{info.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
