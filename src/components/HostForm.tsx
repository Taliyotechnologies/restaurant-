"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import bgPaper from "@/assets/background.png";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function HostForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    try {
      setLoading(true);
      // Placeholder submit. Hook up to API/email later.
      await new Promise((r) => setTimeout(r, 500));
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-[#f0e6c7] text-black placeholder:text-neutral-600 border-2 border-black focus:outline-none focus:ring-2 focus:ring-goldbeige/40 px-3 py-3";

  return (
    <section className="section-bleed relative z-30 overflow-hidden border-t border-borderline/70">
      {/* Beige dotted background */}
      <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mx-auto w-full max-w-[600px]">
          {/* Title strip */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-neutral-700/60" />
            <div
              className={`${alfa.className} px-6 py-3 bg-black text-white font-black text-[22px] md:text-[26px] leading-none tracking-[0.005em] antialiased rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.35)]`}
            >
              Can we host you?
            </div>
            <div className="flex-1 h-[2px] bg-neutral-700/60" />
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-1">Name*</label>
              <input required id="name" name="name" className={inputCls} type="text" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-1">Email address*</label>
              <input required id="email" name="email" className={inputCls} type="email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-800 mb-1">Phone number*</label>
              <input required id="phone" name="phone" className={inputCls} type="tel" />
            </div>
            <div>
              <label htmlFor="people" className="block text-sm font-medium text-neutral-800 mb-1">How many people are coming?*</label>
              <input required id="people" name="people" className={inputCls} type="number" min={1} placeholder="10" />
            </div>
          </div>

          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-neutral-800 mb-1">What is the occasion for the event?*</label>
            <input required id="occasion" name="occasion" className={inputCls} type="text" placeholder="Birthday" />
          </div>

          <div>
            <label htmlFor="preferences" className="block text-sm font-medium text-neutral-800 mb-1">Any specific food or drink preferences?*</label>
            <textarea required id="preferences" name="preferences" className={`${inputCls} min-h-[112px]`} placeholder="Food sensitivities, allergies" />
          </div>

          <div>
            <label htmlFor="extras" className="block text-sm font-medium text-neutral-800 mb-1">Do you need any extra services for the event?*</label>
            <textarea required id="extras" name="extras" className={`${inputCls} min-h-[112px]`} placeholder="Do you need any extra services for the event?" />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-semibold border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.85)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          <p className="text-center text-sm text-neutral-800/90 max-w-prose mx-auto">
            The restaurant in Buda, at the foot of the Margaret Bridge, where beers and dishes meet – you just sit back and enjoy.
          </p>

          {submitted && (
            <p className="text-center text-green-700 font-medium" aria-live="polite">
              Thanks! We received your request and will get back to you soon.
            </p>
          )}
          </form>
        </div>
      </div>
    </section>
  );
}
