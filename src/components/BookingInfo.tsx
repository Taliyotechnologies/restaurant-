"use client";

import React, { useEffect } from "react";
import { Alfa_Slab_One } from "next/font/google";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });

type InfoItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const iconTile = (svg: React.ReactNode) => (
  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d6b980] border border-black rounded-sm flex items-center justify-center">
    <div className="text-black" aria-hidden>
      {svg}
    </div>
  </div>
);

const items: InfoItem[] = [
  {
    title: "Holding a table when late",
    desc: "We will hold the reservation for 10 minutes.",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="black" strokeWidth="2"/>
        <path d="M12 7v5l3 2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Group bookings",
    desc: "Call us",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="black" strokeWidth="2"/>
        <line x1="7" y1="7" x2="17" y2="7" stroke="black" strokeWidth="2"/>
        <line x1="7" y1="11" x2="17" y2="11" stroke="black" strokeWidth="2"/>
        <line x1="7" y1="15" x2="13" y2="15" stroke="black" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Service fee",
    desc: "The invoice includes",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.8L12 17l-5.5 3 .9-6.8L3 8.9 9 8l3-6z" stroke="black" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Wheelchair access",
    desc: "Wheelchair ramp",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="6" r="2" fill="black"/>
        <path d="M10 8l1.5 4H16" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="17" r="4" stroke="black" strokeWidth="2"/>
        <path d="M8 12l-2 4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Pets",
    desc: "Pet friendly",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="8" r="2"/>
        <circle cx="10" cy="5.5" r="2"/>
        <circle cx="14" cy="5.5" r="2"/>
        <circle cx="18" cy="8" r="2"/>
        <path d="M6 16c1.5-2.5 4-4 6-4s4.5 1.5 6 4c-3 2-6 3-12 0z"/>
      </svg>
    ),
  },
  {
    title: "Reservation cancellation",
    desc: "Up to 24 hours free",
    icon: iconTile(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7h16" stroke="black" strokeWidth="2"/>
        <path d="M7 7v12a2 2 0 002 2h6a2 2 0 002-2V7" stroke="black" strokeWidth="2"/>
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" stroke="black" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function BookingInfo() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-info");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-14 md:py-20">
      <div className="container-max mx-auto px-6 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-[980px] mx-auto">
          <h3 className={`${alfa.className} text-2xl md:text-3xl text-center text-black`}>Information</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {items.map((it, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 reveal reveal-info ${i % 2 ? "reveal-right md:ml-16 lg:ml-24 xl:ml-28" : "reveal-left"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {it.icon}
              <div>
                <p className={`${alfa.className} text-base md:text-lg text-black`}>{it.title}</p>
                <p className="text-sm md:text-base text-black/80 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button type="button" className="px-8 py-2.5 md:px-10 md:py-3 min-w-[210px] bg-[#ef2d2d] text-black border-[3px] border-black rounded-sm font-semibold text-base md:text-lg shadow-[0_3px_0_#000]">
              Table reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
