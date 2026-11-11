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

  Motion explains the sequence. Each step pops into its own box, left to right;
  the line then draws out to the right, and the next box pops in where it lands.
  On a phone the same sequence runs top to bottom.

  The page renders with everything shown, so without JavaScript, or with reduced
  motion, the reader sees the finished workflow.
*/

const BEAT_MS = 300;   // one beat is either a box arriving or a line drawing
const POP = "cubic-bezier(.34,1.56,.64,1)"; // overshoot, so arrivals pop

export function AiWorkflowBand() {
  const ref = useRef<HTMLOListElement>(null);
  const total = DELIVERY_STEPS.length;
  const beats = total * 2 - 1;   // box, line, box, line, ... box
  const [beat, setBeat] = useState(beats);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Without IntersectionObserver the sequence could never start, so stay shown.
    if (!("IntersectionObserver" in window)) return;

    setBeat(-1);
    let timer: ReturnType<typeof setInterval> | undefined;

    // Count the viewport's share as well as the list's, so a list taller than
    // the screen (a phone, where the steps stack) still starts.
    const io = new IntersectionObserver(
      (entries) => {
        const x = entries[0];
        const viewH = x.rootBounds ? x.rootBounds.height : window.innerHeight;
        const enough = x.intersectionRatio >= 0.35 || x.intersectionRect.height >= 0.35 * viewH;
        if (!x.isIntersecting || !enough) return;
        io.disconnect();
        let k = -1;
        timer = setInterval(() => {
          k += 1;
          setBeat(k);
          if (k >= beats - 1 && timer) clearInterval(timer);
        }, BEAT_MS);
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.75, 1] }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [beats]);

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
          className="mt-12 md:mt-16 grid gap-4 md:grid-cols-7 md:gap-4"
        >
          {DELIVERY_STEPS.map((s, i) => {
            const shown = beat >= i * 2;
            const lineOn = beat >= i * 2 + 1;
            const last = i === total - 1;

            return (
              <li key={s.n} className="relative">
                <div
                  className={`h-full bg-surface border p-4 md:p-3.5 shadow-[0_1px_2px_rgba(0,0,0,.04)] ${
                    last ? "border-ember-deep/60" : "border-ink/12"
                  }`}
                  style={{
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0) scale(1)" : "translateY(10px) scale(.86)",
                    transition: `opacity 260ms ease, transform 460ms ${POP}`,
                  }}
                >
                  <span className="block t-num text-[12px] font-semibold text-ember-deep">{s.n}</span>
                  <span className="block mt-2 text-[15px] md:text-[13.5px] font-bold text-ink-deep leading-snug">
                    {s.label}
                  </span>
                  {s.sub.map((line) => (
                    <span key={line} className="block mt-1 text-[13px] md:text-[11.5px] text-ink/75 leading-snug">
                      {line}
                    </span>
                  ))}
                </div>

                {!last && (
                  <>
                    {/* desktop: line across the gap to the next box */}
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute top-[22px] left-full w-4 h-[1.5px] bg-ink origin-left"
                      style={{
                        transform: `scaleX(${lineOn ? 1 : 0})`,
                        transition: `transform ${BEAT_MS}ms ease-out`,
                      }}
                    />
                    {/* phone: line down the gap to the next box */}
                    <span
                      aria-hidden="true"
                      className="md:hidden absolute top-full left-6 w-[1.5px] h-4 bg-ink origin-top"
                      style={{
                        transform: `scaleY(${lineOn ? 1 : 0})`,
                        transition: `transform ${BEAT_MS}ms ease-out`,
                      }}
                    />
                  </>
                )}
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
