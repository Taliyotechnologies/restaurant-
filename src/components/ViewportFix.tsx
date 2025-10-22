"use client";

import { useEffect } from "react";

export default function ViewportFix() {
  useEffect(() => {
    const update = () => {
      // Calculate scrollbar width (innerWidth includes scrollbar, clientWidth excludes it)
      const sbw = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
      document.documentElement.style.setProperty("--sbw", `${sbw}px`);

      // Normalize vertical overflow: turn off unintended vertical scrollbars
      const candidates = Array.from(document.querySelectorAll<HTMLElement>("body *"));
      for (const el of candidates) {
        const cs = window.getComputedStyle(el);
        // Skip elements that are explicitly horizontal scrollers
        const allowsX = /(auto|scroll)/.test(cs.overflowX);
        const allowsY = /(auto|scroll)/.test(cs.overflowY);
        if (!allowsY) continue;
        // Ignore the marquee/nav wrappers which intentionally scroll X
        if (el.classList.contains("no-scrollbar") || el.classList.contains("marquee") || el.classList.contains("nav-scroll-fade")) {
          continue;
        }
        // If element is taller than its content in Y, disable Y scrolling
        if (el.scrollHeight > el.clientHeight && !allowsX) {
          el.style.overflowY = "visible";
        }
      }
    };

    update();
    window.addEventListener("resize", update);

    const mo = new MutationObserver(() => update());
    mo.observe(document.body, { attributes: true, childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", update);
      mo.disconnect();
    };
  }, []);
  return null;
}
