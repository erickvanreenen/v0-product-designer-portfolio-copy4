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

  Each step is a number and a dot, centred above an outlined container. There
  is no line along the top; the line runs through the middle of the boxes,
  across the gap from one to the next.

  Motion explains the sequence. When the band comes into view, the first
  step's container appears and its number and dot light up orange. The line
  then draws across the gap to the next step. As that one lights orange, the
  one before settles to black. The last stays orange. On a phone the same
  runs top to bottom.

  The page renders in the finished state, so without JavaScript, or with
  reduced motion, the reader sees the whole workflow.
*/

const BEAT_MS = 340; // one beat: a step lighting up, or a line drawing
const POP = "cubic-bezier(.34,1.56,.64,1)"; // overshoot, so arrivals pop

export function AiWorkflowBand() {
  const ref = useRef<HTMLOListElement>(null);
  const total = DELIVERY_STEPS.length;
  const end = (total - 1) * 2; // last step lit, every line drawn
  const [phase, setPhase] = useState(end);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Without IntersectionObserver the sequence could never start, so stay finished.
    if (!("IntersectionObserver" in window)) return;

    setPhase(-1);
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
        setRunning(true);
        let k = -1;
        timer = setInterval(() => {
          k += 1;
          setPhase(k);
          if (k >= end) {
            if (timer) clearInterval(timer);
            setRunning(false);
          }
        }, BEAT_MS);
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.75, 1] }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [end]);

  return (
    <section className="bg-band text-ink border-b border-ink/12">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div aria-hidden="true" className="h-[3px] w-10 bg-ember-deep mb-7" />
          <h2 className="t-h2 text-3xl md:text-[40px] text-ink mb-5">AI design workflows</h2>
          <p className="text-[16px] text-ink/85 leading-relaxed measure">
            An integrated AI design workflow, from prototype to handover.
          </p>
        </FadeIn>

        <ol
          ref={ref}
          aria-label="Design and delivery workflow"
          className="mt-12 md:mt-16 flex flex-col gap-4 md:grid md:grid-cols-7 md:gap-5"
        >
          {DELIVERY_STEPS.map((s, i) => {
            const last = i === total - 1;
            const shown = phase >= i * 2;
            const done = !last && phase >= i * 2 + 2;
            const active = shown && !done;
            const lineOn = phase >= i * 2 + 1;
            const pop = running && active ? "scale(1.25)" : "scale(1)";

            const num = active ? "text-ember-deep" : done ? "text-ink" : "text-ink/30";
            const ring = active ? "border-ember-deep" : done ? "border-ink" : "border-ink/25";
            const core = active ? "bg-ember-deep" : done ? "bg-ink" : "bg-transparent";
            const box = active ? "border-ember-deep/55" : "border-ink/20";

            return (
              <li key={s.n} className="md:flex md:flex-col md:items-center md:text-center">
                {/* Number and dot, centred above the box on desktop */}
                <span className={`hidden md:block t-num text-[12px] font-semibold mb-3 transition-colors duration-200 ${num}`}>
                  {s.n}
                </span>
                <span className="hidden md:block relative w-[14px] h-[14px] mb-4">
                  {running && active && (
                    <span aria-hidden="true" className="absolute inset-0 rounded-full bg-ember-deep/30 animate-ping" />
                  )}
                  <span
                    className={`relative w-[14px] h-[14px] rounded-full border-[1.5px] bg-band grid place-items-center ${ring}`}
                    style={{ transform: pop, transition: `transform 380ms ${POP}, border-color 200ms` }}
                  >
                    <span className={`w-[5px] h-[5px] rounded-full transition-colors duration-200 ${core}`} />
                  </span>
                </span>

                <div className="relative md:w-full md:flex-1 flex flex-col">
                  {/* Outlined container, appearing as the line reaches it */}
                  <span
                    className={`block flex-1 border p-3 ${box}`}
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "translateY(0) scale(1)" : "translateY(8px) scale(.94)",
                      transition: `opacity 240ms ease, transform 420ms ${POP}, border-color 200ms`,
                    }}
                  >
                    <span className="block text-[15px] md:text-[13.5px] font-bold text-ink-deep leading-snug">
                      <span className={`md:hidden t-num text-[12px] font-semibold mr-2 transition-colors duration-200 ${num}`}>
                        {s.n}
                      </span>
                      {s.label}
                    </span>
                    {s.sub.map((line) => (
                      <span key={line} className="block text-[13px] md:text-[11.5px] text-ink/75 leading-snug mt-1">
                        {line}
                      </span>
                    ))}
                  </span>

                  {!last && (
                    <>
                      {/* desktop: line across the gap, through the box's middle */}
                      <span
                        aria-hidden="true"
                        className="hidden md:block absolute top-1/2 left-full w-5 h-px bg-ink origin-left"
                        style={{ transform: `scaleX(${lineOn ? 1 : 0})`, transition: `transform ${BEAT_MS}ms ease-out` }}
                      />
                      {/* phone: line down the gap, through the box's middle */}
                      <span
                        aria-hidden="true"
                        className="md:hidden absolute top-full left-1/2 h-4 w-px bg-ink origin-top"
                        style={{ transform: `scaleY(${lineOn ? 1 : 0})`, transition: `transform ${BEAT_MS}ms ease-out` }}
                      />
                    </>
                  )}
                </div>
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
