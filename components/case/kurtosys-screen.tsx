"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/*
  The actual designed screens, embedded.

  These are the original 1440px HTML deliverables served from /public, not
  reconstructions. Each is scaled down to the column width so the design
  stays exactly as drawn, and stays sharp at any size rather than being
  flattened into an image.

  Scaling is measured rather than expressed in CSS: scale() takes a number,
  and there is no reliable way to divide a container width by a fixed pixel
  width in stylesheets today. The container keeps an aspect-ratio so the page
  does not shift while that measurement happens.
*/

export interface ScreenSpec {
  /** File in /public/kurtosys, without the extension. */
  file: string;
  /** Accessible name for the embedded document. */
  title: string;
  /** Rendered height of the design at 1440px wide. */
  height: number;
}

export const SCREENS = {
  library:  { file: "01-rules-library",    title: "Rules library, the standalone management view", height: 2088 },
  drawer:   { file: "02-inline-drawer",    title: "Rule builder drawer, opened from the template editor", height: 1619 },
  debug:    { file: "03-production-debug", title: "Production debug, tracing why a section was hidden", height: 1890 },
  stress:   { file: "04-stress-test",      title: "Stress test, five conditions across two groups", height: 1688 },
  nested:   { file: "05-nested-groups",    title: "Nested groups, three options compared", height: 1300 },
  states:   { file: "06-library-states",   title: "Library states, empty, bulk selection and overflow", height: 2675 },
} satisfies Record<string, ScreenSpec>;

const DESIGN_WIDTH = 1440;

export function KurtosysScreen({
  screen,
  caption,
  /** Show only the top of a tall screen, in design pixels. */
  crop,
}: {
  screen: keyof typeof SCREENS;
  caption?: string;
  crop?: number;
}) {
  const spec = SCREENS[screen];
  const shown = crop ?? spec.height;

  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / DESIGN_WIDTH);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <figure>
      <div
        ref={boxRef}
        className="relative border border-line bg-white overflow-hidden"
        style={{ aspectRatio: `${DESIGN_WIDTH} / ${shown}` }}
      >
        <iframe
          src={`/kurtosys/${spec.file}.html`}
          title={spec.title}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute top-0 left-0 border-0 pointer-events-none"
          style={{
            width: DESIGN_WIDTH,
            height: spec.height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            // Hidden until measured, so it never flashes at full size.
            visibility: scale ? "visible" : "hidden",
          }}
        />
      </div>

      <figcaption className="t-caption mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {caption && <span className="flex-1 min-w-0">{caption}</span>}
        <a
          href={`/kurtosys/${spec.file}.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:underline underline-offset-4 shrink-0 py-1"
        >
          Open full size
          <ArrowUpRight size={12} />
        </a>
      </figcaption>
    </figure>
  );
}
