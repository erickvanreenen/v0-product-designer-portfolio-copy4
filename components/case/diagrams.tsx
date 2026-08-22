"use client";

import React from "react";

/*
  Diagrams carry the argument. Each one is here because a paragraph was
  making the reader assemble a picture in their head, and the picture is
  the point. Nothing here restates copy that sits next to it.

  Colours come from the per-project accent scope, so each study is
  internally consistent without a per-file palette.
*/

const INK = "var(--ink)";
const ACCENT = "var(--accent)";
const MONO = "var(--font-mono-face), ui-monospace, monospace";

function Scroller({ children, min = 560 }: { children: React.ReactNode; min?: number }) {
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <div style={{ minWidth: min }}>{children}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FUNNEL — UCOOK
   ══════════════════════════════════════════════════════════ */

/* The expectation gap. Users treat payment as the finish line, and
   payment arrives days after they leave. */
export function ExpectationGap() {
  return (
    <Scroller min={620}>
      <svg viewBox="0 0 700 210" className="w-full" style={{ fontFamily: MONO }}>
        <line x1="40" y1="104" x2="660" y2="104" stroke={INK} strokeOpacity="0.15" strokeWidth="1.5" />

        {/* What the user does */}
        <rect x="40" y="76" width="150" height="56" rx="3" fill="var(--surface)"
          stroke={INK} strokeOpacity="0.25" strokeWidth="1.25" />
        <text x="56" y="98" fontSize="10" fontWeight="600" fill={INK} opacity="0.85">Finishes sign-up</text>
        <text x="56" y="115" fontSize="9" fill={INK} opacity="0.5">Expects to pay now</text>

        {/* The gap */}
        <path d="M 190 104 L 452 104" stroke={ACCENT} strokeWidth="2" strokeDasharray="5 4" />
        <rect x="248" y="42" width="146" height="26" rx="13" fill={ACCENT} />
        <text x="321" y="59" fontSize="10" fontWeight="600" fill="var(--surface)" textAnchor="middle">
          1 to 5 days of silence
        </text>
        <path d="M 321 68 L 321 96" stroke={ACCENT} strokeWidth="1.25" />
        <circle cx="321" cy="104" r="4.5" fill={ACCENT} />

        {/* What actually happens */}
        <rect x="452" y="76" width="208" height="56" rx="3" fill="var(--accent-wash)"
          stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.25" />
        <text x="468" y="98" fontSize="10" fontWeight="600" fill={INK} opacity="0.85">First billing</text>
        <text x="468" y="115" fontSize="9" fill={INK} opacity="0.55">56% of first billings land in this window</text>

        {/* The consequence */}
        <line x1="40" y1="162" x2="660" y2="162" stroke={INK} strokeOpacity="0.12" />
        <text x="40" y="184" fontSize="11" fontWeight="600" fill={INK} opacity="0.85">
          Nothing in the flow told them they had not finished.
        </text>
        <text x="40" y="200" fontSize="10" fill={INK} opacity="0.55">
          So they waited for a delivery against a subscription that was never activated.
        </text>
      </svg>
    </Scroller>
  );
}

/* Old funnel against new, on the numbers that were measured. */
export function FunnelComparison() {
  const rows = [
    { label: "Entered step 1", before: "405", after: "1,994", w1: 0.2, w2: 1 },
    { label: "Abandoned", before: "91.1%", after: "75%", w1: 0.911, w2: 0.75, invert: true },
    { label: "Completed sign-up", before: "3.7%", after: "9.3%", w1: 0.037, w2: 0.093, lead: true },
  ];

  return (
    <div>
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 md:gap-x-8 pb-3 border-b border-line">
        <span className="t-label text-ink/40">Measure</span>
        <span className="t-label text-ink/40 w-24 md:w-32 text-right">Before</span>
        <span className="t-label text-accent w-24 md:w-32 text-right">After</span>
      </div>

      {rows.map((r) => (
        <div key={r.label} className="py-6 border-b border-line">
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 md:gap-x-8 items-baseline mb-3">
            <span className="text-[15px] text-ink/80">{r.label}</span>
            <span className="t-num text-lg text-ink/55 w-24 md:w-32 text-right">{r.before}</span>
            <span
              className={`t-num text-lg w-24 md:w-32 text-right ${
                r.lead ? "text-accent font-semibold" : "text-ink/80"
              }`}
            >
              {r.after}
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-ink/8">
              <div
                className="h-full bg-ink/30"
                style={{ width: `${Math.max(r.w1 * 100, 1.5)}%` }}
              />
            </div>
            <div className="h-2 bg-ink/8">
              <div
                className="h-full"
                style={{
                  width: `${Math.max(r.w2 * 100, 1.5)}%`,
                  background: r.invert ? "var(--ink)" : "var(--accent)",
                  opacity: r.invert ? 0.3 : 1,
                }}
              />
            </div>
          </div>
        </div>
      ))}

      <p className="t-caption mt-4">
        Bars are proportional within each row. Top bar before, bottom bar after.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   OMNICHANNEL — Faithful to Nature
   ══════════════════════════════════════════════════════════ */

/* Filtering changed shape at every category level, so the user had to
   relearn navigation on each step down. */
export function FilterDrift() {
  return (
    <Scroller min={640}>
      <svg viewBox="0 0 700 250" className="w-full" style={{ fontFamily: MONO }}>
        <text x="20" y="16" fontSize="9" fontWeight="600" fill={INK} opacity="0.4" letterSpacing="0.8">
          BEFORE
        </text>

        {/* Three levels, three different filter shapes */}
        {[
          { x: 20, label: "L1", bars: [[0, 62], [0, 40]], style: "row" },
          { x: 226, label: "L2", bars: [], style: "sidebar" },
          { x: 432, label: "L3", bars: [], style: "chips" },
        ].map((lvl, i) => (
          <g key={lvl.label}>
            <rect x={lvl.x} y="26" width="186" height="94" rx="3"
              fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
            <text x={lvl.x + 12} y="44" fontSize="9" fontWeight="700" fill={INK} opacity="0.45">
              {lvl.label}
            </text>

            {lvl.style === "row" && (
              <>
                <rect x={lvl.x + 12} y="54" width="60" height="16" rx="2" fill={INK} opacity="0.16" />
                <rect x={lvl.x + 78} y="54" width="44" height="16" rx="2" fill={INK} opacity="0.16" />
                <rect x={lvl.x + 128} y="54" width="46" height="16" rx="2" fill={INK} opacity="0.16" />
                <rect x={lvl.x + 12} y="82" width="162" height="26" rx="2" fill={INK} opacity="0.06" />
              </>
            )}
            {lvl.style === "sidebar" && (
              <>
                <rect x={lvl.x + 12} y="54" width="44" height="54" rx="2" fill={INK} opacity="0.16" />
                <rect x={lvl.x + 64} y="54" width="110" height="24" rx="2" fill={INK} opacity="0.06" />
                <rect x={lvl.x + 64} y="84" width="110" height="24" rx="2" fill={INK} opacity="0.06" />
              </>
            )}
            {lvl.style === "chips" && (
              <>
                {[0, 1, 2, 3, 4].map((c) => (
                  <rect key={c} x={lvl.x + 12 + (c % 3) * 56} y={54 + Math.floor(c / 3) * 24}
                    width="48" height="16" rx="8" fill={INK} opacity="0.16" />
                ))}
                <rect x={lvl.x + 12} y="100" width="162" height="8" rx="2" fill={INK} opacity="0.06" />
              </>
            )}

            {i < 2 && (
              <>
                <path d={`M ${lvl.x + 186} 73 L ${lvl.x + 218} 73`}
                  stroke={INK} strokeWidth="1.25" strokeOpacity="0.25" />
                <path d={`M ${lvl.x + 218} 73 l -6 -3.5 l 0 7 z`} fill={INK} fillOpacity="0.25" />
              </>
            )}
          </g>
        ))}

        <text x="20" y="140" fontSize="10" fill={INK} opacity="0.55">
          Three levels, three patterns. The user relearns filtering on every step down.
        </text>

        {/* After */}
        <text x="20" y="176" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.8">
          AFTER
        </text>
        {[20, 226, 432].map((x, i) => (
          <g key={x}>
            <rect x={x} y="186" width="186" height="46" rx="3"
              fill="var(--accent-wash)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
            <text x={x + 12} y="204" fontSize="9" fontWeight="700" fill={ACCENT} opacity="0.8">
              {["L1", "L2", "L3"][i]}
            </text>
            <rect x={x + 40} y="194" width="52" height="14" rx="7" fill={ACCENT} opacity="0.7" />
            <rect x={x + 98} y="194" width="52" height="14" rx="7" fill={INK} opacity="0.14" />
            <rect x={x + 12} y="216" width="162" height="8" rx="2" fill={INK} opacity="0.08" />
          </g>
        ))}
      </svg>
    </Scroller>
  );
}

/* Two ways in, one destination. */
export function TwoSearchStreams() {
  return (
    <Scroller min={560}>
      <svg viewBox="0 0 700 190" className="w-full" style={{ fontFamily: MONO }}>
        <rect x="20" y="24" width="220" height="110" rx="3"
          fill="var(--accent-wash)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
        <text x="36" y="46" fontSize="10" fontWeight="700" fill={ACCENT}>01 · VALUES</text>
        <text x="36" y="64" fontSize="9.5" fill={INK} opacity="0.7">Search by what matters to you</text>
        {["Social", "Environmental", "Business", "Ingredient"].map((v, i) => (
          <g key={v}>
            <circle cx="42" cy={84 + i * 13} r="2" fill={ACCENT} opacity="0.6" />
            <text x="52" y={87 + i * 13} fontSize="8.5" fill={INK} opacity="0.55">{v} values</text>
          </g>
        ))}

        <rect x="20" y="146" width="220" height="30" rx="3"
          fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
        <text x="36" y="160" fontSize="10" fontWeight="700" fill={INK} opacity="0.5">02 · PRODUCT</text>
        <text x="36" y="171" fontSize="8.5" fill={INK} opacity="0.5">Type, category, keyword</text>

        <path d="M 240 79 C 320 79, 340 100, 420 100" fill="none" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M 240 161 C 320 161, 340 100, 420 100" fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.25" />

        <rect x="424" y="72" width="200" height="56" rx="3"
          fill="var(--surface)" stroke={INK} strokeOpacity="0.25" strokeWidth="1.25" />
        <text x="524" y="96" fontSize="11" fontWeight="700" fill={INK} textAnchor="middle" opacity="0.85">
          Product found
        </text>
        <text x="524" y="113" fontSize="9" fill={INK} textAnchor="middle" opacity="0.5">
          Same destination, same pattern
        </text>
      </svg>
    </Scroller>
  );
}

/* ══════════════════════════════════════════════════════════
   ONE VIEW — Flanksource
   ══════════════════════════════════════════════════════════ */

export function Convergence() {
  const sources = [
    { name: "Topology", gives: "Service health" },
    { name: "Playbooks", gives: "Last run" },
    { name: "Catalog", gives: "New insights" },
    { name: "Health Checks", gives: "What is failing" },
    { name: "Notifications", gives: "Latest alerts" },
  ];

  return (
    <Scroller min={640}>
      <svg viewBox="0 0 700 300" className="w-full" style={{ fontFamily: MONO }}>
        <text x="20" y="16" fontSize="9" fontWeight="600" fill={INK} opacity="0.4" letterSpacing="0.8">
          FIVE PLACES TO LOOK
        </text>

        {sources.map((s, i) => {
          const y = 34 + i * 50;
          return (
            <g key={s.name}>
              <rect x="20" y={y} width="200" height="38" rx="3"
                fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
              <text x="36" y={y + 17} fontSize="10" fontWeight="600" fill={INK} opacity="0.8">
                {s.name}
              </text>
              <text x="36" y={y + 30} fontSize="8.5" fill={INK} opacity="0.45">
                {s.gives}
              </text>
              <path d={`M 220 ${y + 19} C 290 ${y + 19}, 300 150, 372 150`}
                fill="none" stroke={ACCENT} strokeWidth="1.25" strokeOpacity="0.35" />
            </g>
          );
        })}

        {/* The one view */}
        <text x="380" y="16" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.8">
          ONE PLACE TO LOOK
        </text>
        <rect x="380" y="34" width="300" height="238" rx="4"
          fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="380" y="34" width="300" height="30" rx="4" fill={ACCENT} opacity="0.1" />
        <text x="398" y="54" fontSize="10" fontWeight="700" fill={ACCENT}>Mission Control</text>

        {[
          { t: "Failing health checks", n: "3", urgent: true },
          { t: "Last-run playbooks", n: "12" },
          { t: "New catalog insights", n: "8" },
          { t: "Latest notifications", n: "5" },
        ].map((row, i) => {
          const y = 82 + i * 46;
          return (
            <g key={row.t}>
              <rect x="398" y={y} width="264" height="34" rx="3"
                fill={row.urgent ? ACCENT : INK}
                fillOpacity={row.urgent ? 0.1 : 0.035}
                stroke={row.urgent ? ACCENT : INK}
                strokeOpacity={row.urgent ? 0.4 : 0.12} strokeWidth="1" />
              <circle cx="414" cy={y + 17} r="3.5"
                fill={row.urgent ? ACCENT : INK} fillOpacity={row.urgent ? 1 : 0.25} />
              <text x="428" y={y + 21} fontSize="9.5" fill={INK}
                opacity={row.urgent ? 0.85 : 0.6}>{row.t}</text>
              <text x="646" y={y + 21} fontSize="11" fontWeight="700" textAnchor="end"
                fill={row.urgent ? ACCENT : INK} opacity={row.urgent ? 1 : 0.4}>{row.n}</text>
            </g>
          );
        })}

        <text x="20" y="292" fontSize="10" fill={INK} opacity="0.55">
          Each tool keeps its depth. The dashboard only lifts the thing that needs a decision.
        </text>
      </svg>
    </Scroller>
  );
}

/* ══════════════════════════════════════════════════════════
   ADVANCING — Overture
   ══════════════════════════════════════════════════════════ */

export function AdvancingLanes() {
  const lanes = ["Promoter", "Agent", "Artist"];
  const handoffs = [
    { from: 0, to: 1, x: 168, label: "Brief" },
    { from: 1, to: 2, x: 288, label: "Rider" },
    { from: 2, to: 1, x: 408, label: "Tech spec" },
    { from: 1, to: 0, x: 528, label: "Signed pack" },
  ];

  return (
    <Scroller min={660}>
      <svg viewBox="0 0 700 230" className="w-full" style={{ fontFamily: MONO }}>
        {lanes.map((lane, i) => (
          <g key={lane}>
            <text x="20" y={51 + i * 56} fontSize="9.5" fontWeight="600" fill={INK} opacity="0.6">
              {lane}
            </text>
            <line x1="104" y1={46 + i * 56} x2="620" y2={46 + i * 56}
              stroke={INK} strokeWidth="1" strokeOpacity="0.14" />
          </g>
        ))}

        {handoffs.map((h) => {
          const y1 = 46 + h.from * 56;
          const y2 = 46 + h.to * 56;
          return (
            <g key={h.label}>
              <path d={`M ${h.x} ${y1} L ${h.x + 40} ${y2}`}
                stroke={ACCENT} strokeWidth="1.5" />
              <circle cx={h.x} cy={y1} r="4" fill={ACCENT} />
              <circle cx={h.x + 40} cy={y2} r="4" fill={ACCENT} />
              <text x={h.x + 20} y={(y1 + y2) / 2 - 8} fontSize="8" fontWeight="600"
                fill={ACCENT} textAnchor="middle">{h.label}</text>
            </g>
          );
        })}

        {/* Show date */}
        <line x1="620" y1="30" x2="620" y2="176" stroke={INK} strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 3" />
        <rect x="584" y="182" width="72" height="22" rx="11" fill={INK} />
        <text x="620" y="197" fontSize="9" fontWeight="700" fill="var(--paper)" textAnchor="middle">
          Show day
        </text>

        <text x="20" y="222" fontSize="10" fill={INK} opacity="0.55">
          Every handoff previously lived in email. One app holds the whole exchange.
        </text>
      </svg>
    </Scroller>
  );
}

/* ══════════════════════════════════════════════════════════
   COMPREHENSION — Masterstart
   ══════════════════════════════════════════════════════════ */

export function SimplificationPass() {
  return (
    <Scroller min={640}>
      <svg viewBox="0 0 700 220" className="w-full" style={{ fontFamily: MONO }}>
        {[
          { x: 20, label: "AS THE EXPERT DESCRIBES IT" },
          { x: 254, label: "REDUCED TO THE RELATIONSHIP" },
          { x: 488, label: "WHAT THE LEARNER SEES" },
        ].map((c) => (
          <text key={c.label} x={c.x} y="16" fontSize="8.5" fontWeight="600"
            fill={INK} opacity="0.4" letterSpacing="0.6">{c.label}</text>
        ))}

        {/* 1. the tangle */}
        <rect x="20" y="28" width="192" height="132" rx="3"
          fill="var(--surface)" stroke={INK} strokeOpacity="0.18" strokeWidth="1.25" />
        <path d="M 40 130 C 66 62, 88 156, 112 88 S 150 46, 158 140 S 128 76, 100 152"
          fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.3" />
        <path d="M 48 82 C 84 140, 110 60, 148 108 S 178 128, 190 70"
          fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.18" />
        {[[52, 74], [96, 118], [140, 66], [170, 132]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill={INK} fillOpacity="0.25" />
        ))}

        <path d="M 218 94 L 246 94" stroke={INK} strokeWidth="1.25" strokeOpacity="0.28" />
        <path d="M 246 94 l -6 -3.5 l 0 7 z" fill={INK} fillOpacity="0.28" />

        {/* 2. reduced */}
        <rect x="254" y="28" width="192" height="132" rx="3"
          fill="var(--surface)" stroke={INK} strokeOpacity="0.18" strokeWidth="1.25" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={294 + i * 56} cy="94" r="17"
              fill="none" stroke={INK} strokeOpacity="0.3" strokeWidth="1.5" />
            {i < 2 && (
              <path d={`M ${311 + i * 56} 94 L ${333 + i * 56} 94`}
                stroke={INK} strokeWidth="1.5" strokeOpacity="0.3" />
            )}
          </g>
        ))}
        <text x="350" y="140" fontSize="8.5" fill={INK} opacity="0.45" textAnchor="middle">
          Three parts, one direction
        </text>

        <path d="M 452 94 L 480 94" stroke={ACCENT} strokeWidth="1.25" />
        <path d="M 480 94 l -6 -3.5 l 0 7 z" fill={ACCENT} />

        {/* 3. the asset */}
        <rect x="488" y="28" width="192" height="132" rx="3"
          fill="var(--accent-wash)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={528 + i * 56} cy="82" r="17" fill={ACCENT} opacity={0.35 + i * 0.25} />
            <text x={528 + i * 56} y="86" fontSize="10" fontWeight="700"
              fill="var(--surface)" textAnchor="middle">{i + 1}</text>
            {i < 2 && (
              <path d={`M ${545 + i * 56} 82 L ${567 + i * 56} 82`}
                stroke={ACCENT} strokeWidth="1.5" />
            )}
            <rect x={508 + i * 56} y="112" width="40" height="4" rx="2" fill={INK} opacity="0.2" />
            <rect x={508 + i * 56} y="121" width="30" height="4" rx="2" fill={INK} opacity="0.12" />
          </g>
        ))}
        <rect x="508" y="140" width="152" height="4" rx="2" fill={ACCENT} opacity="0.4" />

        <line x1="20" y1="180" x2="680" y2="180" stroke={INK} strokeOpacity="0.12" />
        <text x="20" y="202" fontSize="10" fontWeight="600" fill={INK} opacity="0.8">
          The work is deciding what to remove without breaking what the model actually claims.
        </text>
      </svg>
    </Scroller>
  );
}

/* ══════════════════════════════════════════════════════════
   CONSOLIDATION — UNi4
   ══════════════════════════════════════════════════════════ */

export function BrandConsolidation() {
  return (
    <Scroller min={640}>
      <svg viewBox="0 0 700 250" className="w-full" style={{ fontFamily: MONO }}>
        <text x="20" y="16" fontSize="9" fontWeight="600" fill={INK} opacity="0.4" letterSpacing="0.8">
          BEFORE · FOUR SITES, FOUR NAVIGATIONS
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={20 + i * 74} y="28" width="62" height="72" rx="3"
              fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
            <rect x={20 + i * 74} y="28" width="62" height="14" rx="3" fill={INK} opacity={0.1 + i * 0.04} />
            <rect x={28 + i * 74} y="52" width="34" height="4" rx="2" fill={INK} opacity="0.16" />
            <rect x={28 + i * 74} y="62" width="44" height="4" rx="2" fill={INK} opacity="0.1" />
            <rect x={28 + i * 74} y="72" width="28" height="4" rx="2" fill={INK} opacity="0.1" />
          </g>
        ))}
        <text x="20" y="122" fontSize="9.5" fill={INK} opacity="0.5">
          A user moving between brands starts over each time.
        </text>

        <path d="M 330 64 L 372 64" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M 372 64 l -6 -3.5 l 0 7 z" fill={ACCENT} />

        <text x="392" y="16" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.8">
          AFTER · ONE PLATFORM, BRANDS INTACT
        </text>
        <rect x="392" y="28" width="288" height="164" rx="4"
          fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="392" y="28" width="288" height="28" rx="4" fill={ACCENT} opacity="0.1" />
        <rect x="408" y="38" width="52" height="8" rx="4" fill={ACCENT} opacity="0.8" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={478 + i * 48} y="39" width="36" height="6" rx="3" fill={INK} opacity="0.18" />
        ))}

        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={410 + (i % 2) * 130} y={72 + Math.floor(i / 2) * 56} width="118" height="46" rx="3"
              fill={INK} fillOpacity="0.04" stroke={INK} strokeOpacity="0.14" strokeWidth="1" />
            <circle cx={428 + (i % 2) * 130} cy={90 + Math.floor(i / 2) * 56} r="7"
              fill={ACCENT} opacity={0.3 + i * 0.17} />
            <rect x={442 + (i % 2) * 130} y={87 + Math.floor(i / 2) * 56} width="46" height="5" rx="2.5"
              fill={INK} opacity="0.22" />
            <rect x={424 + (i % 2) * 130} y={104 + Math.floor(i / 2) * 56} width="82" height="4" rx="2"
              fill={INK} opacity="0.1" />
          </g>
        ))}

        <text x="392" y="212" fontSize="9.5" fill={INK} opacity="0.5">
          Shared navigation and patterns. Brand identity kept where it carries meaning.
        </text>
      </svg>
    </Scroller>
  );
}

/* ══════════════════════════════════════════════════════════
   INSTRUCTION — Academy of Digital Arts
   ══════════════════════════════════════════════════════════ */

export function LearningSequence() {
  const steps = [
    { t: "Roles & history", o: "Context for the discipline" },
    { t: "Research methods", o: "A method they can run" },
    { t: "Benchmarking", o: "A competitive review" },
    { t: "Wireframes", o: "A testable artefact" },
    { t: "Presentation", o: "A defended argument" },
  ];

  return (
    <div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-line">
        {steps.map((s, i) => (
          <li key={s.t} className="border-r border-b border-line p-5">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-6 h-6 flex items-center justify-center text-[11px] font-bold rounded-full ${
                  i === steps.length - 1
                    ? "bg-accent text-white"
                    : "bg-ink/8 text-ink/55"
                }`}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && <span className="h-px flex-1 bg-line" />}
            </div>
            <h3 className="text-[15px] font-bold text-ink leading-snug">{s.t}</h3>
            <p className="t-label text-ink/40 mt-3">Produces</p>
            <p className="text-[13px] text-ink/60 leading-relaxed mt-1">{s.o}</p>
          </li>
        ))}
      </ol>
      <p className="t-caption mt-4">
        Each stage leaves the student holding something the next stage needs.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CURRICULUM — Eduvos
   ══════════════════════════════════════════════════════════ */

export function ModuleMerge() {
  return (
    <Scroller min={660}>
      <svg viewBox="0 0 700 240" className="w-full" style={{ fontFamily: MONO }}>
        {/* two tracks */}
        {[
          { y: 44, label: "UX module" },
          { y: 150, label: "UI module" },
        ].map((t) => (
          <g key={t.label}>
            <rect x="20" y={t.y - 18} width="120" height="36" rx="3"
              fill="var(--surface)" stroke={INK} strokeOpacity="0.22" strokeWidth="1.25" />
            <text x="80" y={t.y + 4} fontSize="10" fontWeight="600" fill={INK}
              opacity="0.75" textAnchor="middle">{t.label}</text>
          </g>
        ))}

        {/* the sort */}
        <path d="M 140 44 C 190 44, 200 97, 250 97" fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.25" />
        <path d="M 140 150 C 190 150, 200 97, 250 97" fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.25" />

        <rect x="250" y="56" width="146" height="82" rx="3"
          fill="var(--surface)" stroke={INK} strokeOpacity="0.25" strokeWidth="1.25" strokeDasharray="4 3" />
        <text x="323" y="76" fontSize="9" fontWeight="700" fill={INK} opacity="0.5" textAnchor="middle">
          EVALUATE
        </text>
        {[
          { l: "Retain", c: ACCENT },
          { l: "Discard", c: INK },
          { l: "Introduce", c: ACCENT },
        ].map((r, i) => (
          <g key={r.l}>
            <circle cx="272" cy={94 + i * 17} r="3.5" fill={r.c}
              opacity={r.c === INK ? 0.22 : 0.85} />
            <text x="284" y={98 + i * 17} fontSize="9" fill={INK}
              opacity={r.c === INK ? 0.4 : 0.7}>{r.l}</text>
          </g>
        ))}

        <path d="M 396 97 L 428 97" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M 428 97 l -6 -3.5 l 0 7 z" fill={ACCENT} />

        {/* one module */}
        <rect x="436" y="40" width="244" height="114" rx="4"
          fill="var(--accent-wash)" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.5" />
        <text x="452" y="62" fontSize="10" fontWeight="700" fill={ACCENT}>One module</text>

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x={452 + i * 30} y="78" width="22" height="22" rx="2"
              fill={ACCENT} opacity="0.25" />
            <text x={463 + i * 30} y="93" fontSize="8" fontWeight="700"
              fill={INK} opacity="0.6" textAnchor="middle">{i + 1}</text>
            <path d={`M ${463 + i * 30} 100 L ${463 + i * 30} 114 L 566 114 L 566 122`}
              fill="none" stroke={ACCENT} strokeWidth="1" strokeOpacity="0.35" />
          </g>
        ))}
        <text x="452" y="112" fontSize="8" fill={INK} opacity="0.4">Six formative exercises</text>

        <rect x="512" y="122" width="108" height="22" rx="3" fill={ACCENT} />
        <text x="566" y="137" fontSize="9" fontWeight="700" fill="var(--surface)" textAnchor="middle">
          Summative
        </text>

        <line x1="20" y1="192" x2="680" y2="192" stroke={INK} strokeOpacity="0.12" />
        <text x="20" y="214" fontSize="10" fontWeight="600" fill={INK} opacity="0.8">
          Every exercise builds toward the assessment. Nothing is there because it always was.
        </text>
      </svg>
    </Scroller>
  );
}
