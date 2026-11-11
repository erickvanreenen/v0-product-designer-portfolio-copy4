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

  Motion explains the sequence. When the band comes into view, the first dot
  lights up orange and its outlined container appears beneath it. The line
  then draws to the next step. As that step lights up orange, the one before
  it settles to black. The last step stays orange.

  Each step's text sits in its own outlined container, which wraps the text
  inside its column so nothing hangs past the right edge. On wide screens the
  row runs further right than the text column, so the steps get more room.

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
            Perplexity, ChatGPT, Claude, NotebookLM, Figma Make and Stitch. I use them for
            research, synthesis and exploration. I studied AI Fundamentals for UX in 2025.
          </p>
        </FadeIn>

        <ol
          ref={ref}
          aria-label="Design and delivery workflow"
          className="mt-12 md:mt-16 flex flex-col md:grid md:grid-cols-7 xl:-mr-24"
        >
          {DELIVERY_STEPS.map((s, i) => {
            const last = i === total - 1;
            const shown = phase >= i * 2;
            const done = !last && phase >= i * 2 + 2;
            const active = shown && !done;
            const lineOn = phase >= i * 2 + 1;

            const ring = active ? "border-ember-deep" : done ? "border-ink" : "border-ink/25";
            const core = active ? "bg-ember-deep" : done ? "bg-ink" : "bg-transparent";
            const box = active ? "border-ember-deep/55" : "border-ink/20";

            return (
              <li
                key={s.n}
                className="relative grid grid-cols-[14px_1fr] gap-x-4 pb-4 last:pb-0
                           md:flex md:flex-col md:pb-0"
              >
                {/* phone: vertical line from this dot's centre to the next one's */}
                {!last && (
                  <span aria-hidden="true" className="md:hidden absolute left-[6.5px] top-[17px] -bottom-[17px] w-px bg-ink/15">
                    <span
                      className="absolute inset-0 bg-ink origin-top"
                      style={{ transform: `scaleY(${lineOn ? 1 : 0})`, transition: `transform ${BEAT_MS}ms ease-out` }}
                    />
                  </span>
                )}

                {/* Number, above the dot on desktop */}
                <span
                  className="hidden md:block t-num text-[12px] font-semibold text-ember-deep mb-3 transition-opacity duration-300"
                  style={{ opacity: shown ? 1 : 0.35 }}
                >
                  {s.n}
                </span>

                {/* Dot, plus the line to the next step */}
                <span className="relative self-start mt-[10px] md:mt-0 w-[14px] h-[14px] md:w-full">
                  {!last && (
                    <span aria-hidden="true" className="hidden md:block absolute top-[6.5px] left-[7px] w-full h-px bg-ink/15">
                      <span
                        className="absolute inset-0 bg-ink origin-left"
                        style={{ transform: `scaleX(${lineOn ? 1 : 0})`, transition: `transform ${BEAT_MS}ms ease-out` }}
                      />
                    </span>
                  )}
                  <span className="absolute left-0 top-0 w-[14px] h-[14px]">
                    {/* a soft pulse behind the dot while it is the current step */}
                    {running && active && (
                      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-ember-deep/30 animate-ping" />
                    )}
                    <span
                      className={`relative z-10 w-[14px] h-[14px] rounded-full border-[1.5px] bg-band grid place-items-center ${ring}`}
                      style={{
                        transform: running && active ? "scale(1.3)" : "scale(1)",
                        transition: `transform 380ms ${POP}, border-color 200ms, background-color 200ms`,
                      }}
                    >
                      <span className={`w-[5px] h-[5px] rounded-full transition-colors duration-200 ${core}`} />
                    </span>
                  </span>
                </span>

                {/* Outlined container, appearing as the line reaches the step */}
                <span
                  className={`block border p-3 md:mt-4 md:flex-1 ${box} ${last ? "" : "md:mr-3"}`}
                  style={{
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0) scale(1)" : "translateY(8px) scale(.94)",
                    transition: `opacity 240ms ease, transform 420ms ${POP}, border-color 200ms`,
                  }}
                >
                  <span className="block text-[15px] md:text-[13.5px] font-bold text-ink-deep leading-snug">
                    <span className="md:hidden t-num text-[12px] font-semibold text-ember-deep mr-2">{s.n}</span>
                    {s.label}
                  </span>
                  {s.sub.map((line) => (
                    <span key={line} className="block text-[13px] md:text-[11.5px] text-ink/75 leading-snug mt-1">
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
