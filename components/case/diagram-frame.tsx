"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/material-icon";

/*
  Shared frame for the wide diagrams.

  One affordance, not two. Scrolling is signalled the way the prints carousel
  signals it: a round chevron on each side, each present only while there is
  something further that way. Nothing appears at all on a screen wide enough
  to show the whole drawing.

  Open full size borrows its wording from the Kurtosys screens and its viewer
  from the prints lightbox. Dark backdrop, the diagram scaled to fit whole,
  close top right, escape or a tap outside to leave. No rotation: an earlier
  version turned the drawing on its side and it fell apart on a real phone.
*/

const STEP_RATIO = 0.72; // how much of the visible width one chevron press moves

export function DiagramFrame({
  children,
  min = 0,
  className = "",
}: {
  children: React.ReactNode;
  min?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  /* Measured after layout, not only on mount. A single measurement on mount can
     land before the drawing has been sized, which leaves the frame believing it
     fits and showing no chevron at all. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    update();
    const raf = requestAnimationFrame(() => {
      update();
      requestAnimationFrame(update);
    });
    const settle = setTimeout(update, 400);

    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    window.addEventListener("resize", update);
    // Native listener rather than the onScroll prop: scroll does not bubble,
    // and the prop was not firing here. This is what the prints carousel uses.
    el.addEventListener("scroll", update, { passive: true });
    document.fonts?.ready?.then(update).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      ro.disconnect();
      window.removeEventListener("resize", update);
      el.removeEventListener("scroll", update);
    };
  }, [update]);

  const nudge = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * STEP_RATIO);
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  // The page stays put while the viewer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const viewer = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Diagram, full size"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={() => setOpen(false)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        aria-label="Close"
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface/10 hover:bg-surface/20
                   transition-colors duration-200 flex items-center justify-center text-white"
      >
        <X size={16} />
      </button>

      {/* No min-width in here, so the whole drawing is on screen at once. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface p-4 sm:p-6 w-full overflow-auto"
        style={{ maxWidth: "min(96vw, 1100px)", maxHeight: "86vh" }}
      >
        {children}
      </div>
    </div>
  ) : null;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {canLeft && (
          <button
            onClick={() => nudge("left")}
            aria-label="Scroll diagram left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-surface
                       shadow-sm border border-line flex items-center justify-center
                       hover:bg-[var(--paper-sunk)] transition-colors duration-200 text-ink/82 hover:text-ink"
          >
            <Icon name="chevron_left" size={18} />
          </button>
        )}

        <div ref={ref} className="overflow-x-auto scroll-smooth">
          <div style={min ? { minWidth: min } : undefined}>{children}</div>
        </div>

        {/* Fade and chevron both go once there is nothing further right. */}
        {canRight && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-surface to-transparent"
            />
            <button
              onClick={() => nudge("right")}
              aria-label="Scroll diagram right"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-surface
                         shadow-sm border border-line flex items-center justify-center
                         hover:bg-[var(--paper-sunk)] transition-colors duration-200 text-ink/82 hover:text-ink"
            >
              <Icon name="chevron_right" size={18} />
            </button>
          </>
        )}
      </div>

      {/* Quiet text link, matching the Kurtosys screens rather than competing
          with the chevrons for attention. */}
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="t-caption inline-flex items-center gap-1 text-accent hover:underline
                     underline-offset-4 py-1"
        >
          Open full size
          <ArrowUpRight size={12} aria-hidden="true" />
        </button>
      </div>

      {/* Portalled to the body: the diagrams sit inside FadeIn, which sets a CSS
          transform, and a transformed ancestor becomes the containing block for
          position:fixed. Without this the viewer is trapped in its section. */}
      {mounted && createPortal(viewer, document.body)}
    </div>
  );
}
