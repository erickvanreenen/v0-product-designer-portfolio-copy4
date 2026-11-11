"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { DELIVERY_STEPS } from "@/lib/workflow";

/*
  The AI band on the home page.

  It shows the workflow rather than claiming it. The seven steps are the same
  ones as the About page diagram, read from one shared list.

  Desktop steps are left-aligned, so the first one lines up with the text
  above and no label hangs past either edge.

  Motion explains the sequence: when the band comes into view, the steps light
  up one after another and the line draws between them. The page is rendered
  with every step lit, so without JavaScript, or with reduced motion, the
  reader sees the finished workflow.
*/

const STEP_MS = 280;

export function AiWorkflowBand() {
  const ref = useRef<HTMLOListElement>(null);
  const total = DELIVERY_STEPS.length;
  const [lit, setLit] = useState(total);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Without IntersectionObserver the sequence could never start, so stay lit.
    if (!("IntersectionObserver" in window)) return;

    setLit(0);
    let timer: ReturnType<typeof setInterval> | undefined;

    // Count the viewport's share as well as the list's, so a list taller than
    // the screen (a phone, where the steps stack) still starts.
    const io = new IntersectionObserver(
      (entries) => {
        const x = entries[0];
        const viewH = x.rootBounds ? x.rootBounds.height : window.innerHeight;
        const enough = x.intersectionRatio >= 0.4 || x.intersectionRect.height >= 0.4 * viewH;
        if (!x.isIntersecting || !enough) return;
        io.disconnect();
        let k = 0;
        timer = setInterval(() => {
          k += 1;
          setLit(k);
          if (k >= total && timer) clearInterval(timer);
        }, STEP_MS);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [total]);

  return (
    <section className="bg-band text-ink border-b border-ink/12">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div aria-hidden="true" className="h-[3px] w-10 bg-ember-deep mb-7" />
          <h2 className="t-h2 text-3xl md:text-[40px] text-ink mb-5">AI design workflows</h2>
          <p className="text-[16px] text-ink/85 leading-relaxed measure">
            Perplexity, ChatGPT, Claude, NotebookLM, Figma Make and Stitch. I use them for
            research, synthesis and exploration. I studied AI Fundamentals for UX in 2025.
          </p>
        </FadeIn>

        <ol
          ref={ref}
          aria-label="Design and delivery workflow"
          className="mt-12 md:mt-16 flex flex-col md:grid md:grid-cols-7"
        >
          {DELIVERY_STEPS.map((s, i) => {
            const on = lit > i;
            const last = i === total - 1;
            const lineOn = lit > i + 1;
            const dotRing = on ? (last ? "border-ember-deep" : "border-ink") : "border-ink/25";
            const dotCore = on ? (last ? "bg-ember-deep" : "bg-ink") : "bg-ink/20";

            return (
              <li
                key={s.n}
                className="relative grid grid-cols-[14px_1fr] gap-x-4 pb-7 last:pb-0
                           md:flex md:flex-col md:items-start md:pb-0"
              >
                {/* phone: vertical line from this dot's centre to the next one's.
                    Sized to the whole step, so a step with a second line of
                    text still reaches the next dot. */}
                {!last && (
                  <span aria-hidden="true" className="md:hidden absolute left-[6.5px] top-[10px] -bottom-[10px] w-px bg-ink/15">
                    <span
                      className="absolute inset-0 bg-ink origin-top transition-transform ease-out"
                      style={{ transform: `scaleY(${lineOn ? 1 : 0})`, transitionDuration: `${STEP_MS}ms` }}
                    />
                  </span>
                )}

                {/* Number: above the dot on desktop, beside the label on a phone */}
                <span
                  className={`hidden md:block t-num text-[12px] font-semibold mb-3 transition-opacity duration-300 ${
                    on ? "text-ember-deep opacity-100" : "text-ember-deep opacity-40"
                  }`}
                >
                  {s.n}
                </span>

                {/* Dot, plus the line to the next step */}
                <span className="relative self-start mt-[3px] md:mt-0 w-[14px] h-[14px] md:w-full md:h-[14px] flex">
                  {!last && (
                    /* desktop: horizontal line across to the next dot */
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute top-[6.5px] left-[7px] w-full h-px bg-ink/15"
                    >
                      <span
                        className="absolute inset-0 bg-ink origin-left transition-transform ease-out"
                        style={{ transform: `scaleX(${lineOn ? 1 : 0})`, transitionDuration: `${STEP_MS}ms` }}
                      />
                    </span>
                  )}
                  <span
                    className={`relative z-10 w-[14px] h-[14px] rounded-full border-[1.5px] bg-band grid place-items-center transition-colors duration-300 ${dotRing}`}
                  >
                    <span className={`w-[5px] h-[5px] rounded-full transition-colors duration-300 ${dotCore}`} />
                  </span>
                </span>

                <span className={`md:mt-4 md:pr-4 transition-opacity duration-300 ${on ? "opacity-100" : "opacity-40"}`}>
                  <span className="block text-[15px] md:text-[14px] font-bold text-ink-deep leading-snug">
                    <span className="md:hidden t-num text-[12px] font-semibold text-ember-deep mr-2">{s.n}</span>
                    {s.label}
                  </span>
                  {s.sub.map((line) => (
                    <span key={line} className="block text-[13px] md:text-[12px] text-ink/75 leading-snug mt-1">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            );
          })}
        </ol>

        <Link
          href="/about#workflow"
          className="group inline-flex items-center gap-1.5 t-label text-ink/82 hover:text-ember-deep transition-colors duration-200 mt-12 md:mt-14 py-2"
        >
          Workflow
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
}
