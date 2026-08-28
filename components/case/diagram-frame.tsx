"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/material-icon";

/*
  Shared frame for the wide diagrams.

  A single hint, and only until it has done its job. On a narrow screen a
  diagram that is wider than the column shows one chevron, and it
  goes for good the moment the reader scrolls. Once you know a thing scrolls
  you do not need to be told again, and the arrow was sitting over the part of
  the drawing you were trying to reach.

  It points right and sits on the right, in the direction of travel.

  Nothing renders at all on a screen wide enough to show the whole drawing.
*/

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
  const [scrolled, setScrolled] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setOverflows(el.scrollWidth - el.clientWidth > 4);
    if (el.scrollLeft > 1) setScrolled(true);
  }, []);

  /* Measured after layout, not only on mount. A single measurement on mount can
     land before the drawing has been sized, which leaves the frame believing it
     fits and showing no hint at all. */
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
    // Native listener rather than the onScroll prop, which does not fire on
    // these containers. This is what the prints carousel uses.
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

  const showHint = overflows && !scrolled;

  return (
    <div className={`relative ${className}`}>
      {/* Translucent rather than solid: it sits over the drawing, so it should
          read as a control without blanking out whatever is behind it. */}
      {showHint && (
        <button
          onClick={() => {
            const el = ref.current;
            if (!el) return;
            el.scrollBy({ left: Math.round(el.clientWidth * 0.72), behavior: "smooth" });
          }}
          aria-label="Scroll the diagram to see the rest"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full
                     bg-surface/70 backdrop-blur-[2px] border border-ink/10 shadow-sm
                     flex items-center justify-center text-ink/70
                     hover:bg-surface/90 hover:text-ink transition-colors duration-200"
        >
          <Icon name="chevron_right" size={18} />
        </button>
      )}

      <div ref={ref} className="overflow-x-auto scroll-smooth">
        <div style={min ? { minWidth: min } : undefined}>{children}</div>
      </div>
    </div>
  );
}
