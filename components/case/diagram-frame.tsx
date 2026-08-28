"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/*
  Shared frame for the wide diagrams.

  On a phone these are wider than the screen. Previously the only sign of that
  was a line of text reading "swipe to see the rest", which is easy to miss and
  says nothing about which way or how much further. This adds three things:

  1. Edge fades that appear only on the side where there is more to see, and
     disappear as you reach each end.
  2. A scroll position bar, so the amount left to see is legible at a glance.
  3. Expand, which opens the diagram over the whole screen. On a phone held
     upright the diagram is turned on its side, so a wide drawing gets the long
     axis of the screen instead of the short one.

  The controls only render once we have measured real overflow, so a diagram
  that already fits shows no swipe cue.
*/

function ExpandIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SwipeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ── The full-screen view ─────────────────────────────
   Rendered only while open. Rotation is done in CSS rather than through the
   Screen Orientation API, which needs full-screen permission and behaves
   differently on every browser. The close button sits outside the rotated
   wrapper so it stays at the top right of the screen, not of the drawing.
*/
function Expanded({
  children,
  onClose,
  min,
}: {
  children: React.ReactNode;
  onClose: () => void;
  min: number;
}) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const decide = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setRotate(portrait && window.innerWidth < 820);
    };
    decide();
    window.addEventListener("resize", decide);
    window.addEventListener("orientationchange", decide);
    return () => {
      window.removeEventListener("resize", decide);
      window.removeEventListener("orientationchange", decide);
    };
  }, []);

  // Escape to close, and hold the page still behind the overlay.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Diagram, expanded"
      className="fixed inset-0 z-[100] bg-ink-deep/95 grid place-items-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close expanded diagram"
        className="absolute top-4 right-4 z-10 w-11 h-11 grid place-items-center
                   bg-paper text-ink-deep hover:bg-ember hover:text-white
                   transition-colors duration-200 shadow-lg"
      >
        <CloseIcon />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={
          rotate
            ? { width: "100dvh", height: "100dvw", transform: "rotate(90deg)" }
            : { width: "100%", height: "100%" }
        }
        className="grid place-items-center p-4 sm:p-8"
      >
        <div className="w-full max-h-full overflow-auto bg-surface p-4 sm:p-6">
          <div style={min ? { minWidth: min } : undefined}>{children}</div>
        </div>
      </div>

      <p className="absolute bottom-4 left-0 right-0 text-center t-label text-paper/45 pointer-events-none">
        Tap anywhere to close
      </p>
    </div>
  );
}

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
  const [overflows, setOverflows] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setOverflows(max > 4);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  /* Measure after layout rather than only on mount. A single measurement on
     mount can land before the browser has sized the drawing, which leaves the
     frame believing it fits and hiding the swipe cue. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    measure();
    const raf = requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });
    const settle = setTimeout(measure, 400);

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    window.addEventListener("resize", measure);

    // Web fonts change text metrics, which changes how wide a diagram sits.
    document.fonts?.ready?.then(measure).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div className={`relative ${className}`}>
      <div ref={ref} onScroll={measure} className="overflow-x-auto">
        <div style={min ? { minWidth: min } : undefined}>{children}</div>
      </div>

      {/* Fades sit over the drawing, on whichever side still has content. */}
      {overflows && !atStart && (
        <div aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-surface to-transparent" />
      )}
      {overflows && !atEnd && (
        <div aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-surface to-transparent" />
      )}

      <div className="mt-3 flex items-center justify-between gap-4">
        {overflows ? (
          <div className="flex items-center gap-3 min-w-0">
            <span className="t-label text-ink/45 flex items-center gap-1.5 shrink-0">
              Swipe
              <span className={atEnd ? "opacity-0" : "opacity-100 transition-opacity duration-200"}>
                <SwipeIcon />
              </span>
            </span>
            {/* How far along the drawing you are. */}
            <span aria-hidden="true" className="relative h-px w-16 bg-ink/15 shrink-0">
              <span
                className="absolute top-[-1.5px] h-[4px] w-6 bg-accent transition-[left] duration-150"
                style={{ left: `calc(${progress * 100}% - ${progress * 24}px)` }}
              />
            </span>
          </div>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="t-label text-ink/55 hover:text-accent transition-colors duration-200
                     inline-flex items-center gap-1.5 py-2 -my-2 shrink-0"
        >
          <ExpandIcon />
          Expand
        </button>
      </div>

      {/* Portalled to the body. The diagrams sit inside FadeIn, which sets a
          CSS transform, and a transformed ancestor becomes the containing block
          for position:fixed. Without the portal the overlay would be trapped
          inside the section instead of covering the screen. */}
      {open &&
        createPortal(
          <Expanded min={min} onClose={() => setOpen(false)}>
            {children}
          </Expanded>,
          document.body
        )}
    </div>
  );
}
