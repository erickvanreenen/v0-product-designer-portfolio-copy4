"use client";

const GREEN = "var(--ink)";
const ORANGE = "var(--accent)";
const AMBER = "var(--ochre)";
const FONT = "var(--font-mono-face), ui-monospace, monospace";

/* ────────────────────────────────────────────────────────────
   01 · The shift — ranked links vs generated answer
   Why GEO exists at all.
   ──────────────────────────────────────────────────────────── */
export function SearchShiftDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 720 300" className="w-full min-w-[560px]"
        xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: FONT }}>

        {/* ── Left: traditional search ── */}
        <text x="20" y="18" fontSize="9" fontWeight="700" fill={GREEN}
          opacity="0.4" letterSpacing="0.8">TRADITIONAL SEARCH</text>

        {/* Query box */}
        <rect x="20" y="32" width="280" height="30" rx="4"
          fill="none" stroke={GREEN} strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="38" cy="47" r="5" fill="none" stroke={GREEN} strokeOpacity="0.4" strokeWidth="1.3" />
        <line x1="42" y1="51" x2="45" y2="54" stroke={GREEN} strokeOpacity="0.4" strokeWidth="1.3" />
        <text x="54" y="51" fontSize="10" fill={GREEN} opacity="0.55">
          best time to visit Kruger
        </text>

        {/* Ten ranked results */}
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 82 + i * 22;
          const w = [200, 235, 180, 215, 190, 225, 175, 205][i];
          return (
            <g key={i}>
              <text x="20" y={y + 8} fontSize="8" fontWeight="700"
                fill={GREEN} opacity="0.3" textAnchor="middle" dx="6">{i + 1}</text>
              <rect x="34" y={y} width={w * 0.42} height="5" rx="2.5"
                fill={GREEN} opacity="0.35" />
              <rect x="34" y={y + 9} width={w * 0.75} height="4" rx="2"
                fill={GREEN} opacity="0.15" />
            </g>
          );
        })}

        <text x="20" y="272" fontSize="9" fill={GREEN} opacity="0.5">
          The user scans, chooses, clicks through.
        </text>
        <text x="20" y="287" fontSize="9" fill={GREEN} opacity="0.5">
          Ten chances to be found.
        </text>

        {/* ── Divider ── */}
        <line x1="360" y1="30" x2="360" y2="290" stroke={GREEN}
          strokeOpacity="0.12" strokeWidth="1" />

        {/* ── Right: AI-generated answer ── */}
        <text x="400" y="18" fontSize="9" fontWeight="700" fill={ORANGE}
          letterSpacing="0.8">AI-GENERATED ANSWER</text>

        {/* Query box */}
        <rect x="400" y="32" width="300" height="30" rx="4"
          fill="none" stroke={ORANGE} strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="418" cy="47" r="5" fill="none" stroke={ORANGE} strokeOpacity="0.5" strokeWidth="1.3" />
        <line x1="422" y1="51" x2="425" y2="54" stroke={ORANGE} strokeOpacity="0.5" strokeWidth="1.3" />
        <text x="434" y="51" fontSize="10" fill={GREEN} opacity="0.6">
          best time to visit Kruger
        </text>

        {/* Single synthesised answer block */}
        <rect x="400" y="80" width="300" height="112" rx="5"
          fill={ORANGE} fillOpacity="0.05" stroke={ORANGE} strokeOpacity="0.2" strokeWidth="1" />

        <rect x="416" y="98" width="230" height="5" rx="2.5" fill={GREEN} opacity="0.35" />
        <rect x="416" y="111" width="268" height="5" rx="2.5" fill={GREEN} opacity="0.25" />
        <rect x="416" y="124" width="196" height="5" rx="2.5" fill={GREEN} opacity="0.25" />

        {/* Citation chips */}
        <text x="416" y="152" fontSize="7.5" fontWeight="700" fill={GREEN}
          opacity="0.35" letterSpacing="0.6">SOURCES</text>
        <rect x="416" y="160" width="86" height="18" rx="9"
          fill={ORANGE} fillOpacity="0.12" stroke={ORANGE} strokeOpacity="0.35" strokeWidth="1" />
        <text x="459" y="172" fontSize="8" fontWeight="700" fill={ORANGE}
          textAnchor="middle">rhinoafrica</text>
        <rect x="510" y="160" width="62" height="18" rx="9"
          fill={GREEN} fillOpacity="0.06" stroke={GREEN} strokeOpacity="0.18" strokeWidth="1" />
        <rect x="524" y="167" width="34" height="4" rx="2" fill={GREEN} opacity="0.2" />
        <rect x="580" y="160" width="62" height="18" rx="9"
          fill={GREEN} fillOpacity="0.06" stroke={GREEN} strokeOpacity="0.18" strokeWidth="1" />
        <rect x="594" y="167" width="34" height="4" rx="2" fill={GREEN} opacity="0.2" />

        <text x="400" y="222" fontSize="9" fill={GREEN} opacity="0.5">
          The machine reads, synthesises, cites.
        </text>
        <text x="400" y="237" fontSize="9" fill={GREEN} opacity="0.5">
          Two or three chances. Sometimes one.
        </text>

        {/* Takeaway */}
        <line x1="400" y1="256" x2="700" y2="256" stroke={ORANGE} strokeOpacity="0.25" strokeWidth="1" />
        <text x="400" y="275" fontSize="10" fontWeight="700" fill={ORANGE}>
          Ranking gets you on the list.
        </text>
        <text x="400" y="290" fontSize="10" fontWeight="700" fill={ORANGE}>
          Structure gets you in the answer.
        </text>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   02 · The seven-layer GEO content architecture
   ──────────────────────────────────────────────────────────── */
const geoLayers = [
  {
    n: "1", title: "Page Identity (H1)",
    note: "First signal a crawler reads. Entity and claim in one sentence",
    example: "[Destination] Safari Guide: Expert Advice from Rhino Africa's Consultants",
    schema: null, group: "identity",
  },
  {
    n: "2", title: "Authority Block",
    note: "Signals expertise before content begins. The machine reads this first",
    example: "Entity declaration · Trust signals · Named consultant byline",
    schema: "TravelAgency · aggregateRating · Person", group: "authority",
  },
  {
    n: "3", title: "Structured FAQ (H2 → Q&A)",
    note: "Highest extraction signal. Answers lead with the entity, no preamble",
    example: "Q: When is the best time to visit? → A: Rhino Africa recommends…",
    schema: "FAQPage", group: "authority",
  },
  {
    n: "4", title: "Expert Tips Module (H2)",
    note: "AI looks for named, specific insight. Generic tips are ignored",
    example: "Attributed consultant recommendations, specific and citable",
    schema: "author", group: "depth",
  },
  {
    n: "5", title: "Lodge Blocks (H2 → H3)",
    note: "Repeating structured entity blocks, ideal for machine extraction",
    example: "Name · Location hierarchy · Best for · Season · Consultant note",
    schema: null, group: "depth",
  },
  {
    n: "6", title: "Conversion Anchor",
    note: "Human CTA, positioned only after content depth is established",
    example: "Speak to a consultant about [Destination]. One CTA, no form friction",
    schema: null, group: "conversion",
  },
  {
    n: "7", title: "Machine Layer",
    note: "Invisible to the user. Tells AI agents who is speaking and why to trust them",
    example: "Structured data wrapping every layer above",
    schema: "FAQPage · Article · TravelAgency · BreadcrumbList", group: "machine",
  },
];

const groupStyle: Record<string, { bar: string; label: string }> = {
  identity: { bar: GREEN, label: "Entity & identity" },
  authority: { bar: ORANGE, label: "Authority & trust" },
  depth: { bar: AMBER, label: "Content depth" },
  conversion: { bar: "var(--ink-mid)", label: "Conversion" },
  machine: { bar: "var(--ink-mid)", label: "Machine layer" },
};

export function GeoLayerStack() {
  return (
    <div>
      {/* Reading direction marker */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
          Crawler reading order
        </span>
        <div className="flex-1 h-px bg-line" />
        <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
          Top → bottom
        </span>
      </div>

      <div className="space-y-2">
        {geoLayers.map((layer) => {
          const style = groupStyle[layer.group];
          return (
            <div
              key={layer.n}
              className="flex gap-4 bg-surface p-4 md:p-5 border border-line"
            >
              {/* Group colour bar */}
              <div className="w-[3px] rounded-full shrink-0"
                style={{ background: style.bar, opacity: 0.85 }} />

              {/* Number */}
              <span className="text-xs font-bold tabular-nums shrink-0 pt-0.5"
                style={{ color: style.bar }}>
                {layer.n}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-sm font-bold text-ink">{layer.title}</h3>
                  {layer.schema && (
                    <code className="text-[10px] text-ink/55 font-mono bg-ink/6 px-1.5 py-0.5 rounded">
                      {layer.schema}
                    </code>
                  )}
                </div>
                <p className="text-xs text-ink/50 mt-1 leading-relaxed">{layer.note}</p>
                <p className="text-xs text-ink/75 mt-2 leading-relaxed border-l-2 pl-3"
                  style={{ borderColor: `color-mix(in oklch, ${style.bar} 35%, transparent)` }}>
                  {layer.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-4 border-t border-line">
        {[
          { c: GREEN, l: "Entity & identity" },
          { c: ORANGE, l: "Authority & trust" },
          { c: AMBER, l: "Content depth" },
          { c: "var(--ink-mid)", l: "Conversion & machine layer" },
        ].map((item) => (
          <div key={item.l} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: item.c }} />
            <span className="text-[11px] text-ink/55">{item.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   03 · Platform information architecture — and the seam
   ──────────────────────────────────────────────────────────── */
export function PlatformIADiagram() {
  const pillars = [
    { x: 60, label: "Destinations", sub: "Country → region → park" },
    { x: 192, label: "Experiences", sub: "Experience-led entry" },
    { x: 324, label: "Tours & Safaris", sub: "Multi-destination" },
    { x: 456, label: "About Us", sub: "Trust content" },
    { x: 588, label: "Start Planning", sub: "Conversion endpoint" },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 720 340" className="w-full min-w-[600px]"
        xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: FONT }}>

        {/* Root */}
        <rect x="272" y="20" width="176" height="34" rx="5"
          fill={GREEN} />
        <text x="360" y="41" fontSize="11" fontWeight="700" fill="var(--paper)"
          textAnchor="middle">rhinoafrica.com</text>

        {/* Trunk */}
        <line x1="360" y1="54" x2="360" y2="76" stroke={GREEN}
          strokeOpacity="0.35" strokeWidth="1.3" />
        <line x1="60" y1="76" x2="588" y2="76" stroke={GREEN}
          strokeOpacity="0.35" strokeWidth="1.3" />

        {/* Pillars */}
        {pillars.map((p) => (
          <g key={p.label}>
            <line x1={p.x} y1="76" x2={p.x} y2="98" stroke={GREEN}
              strokeOpacity="0.35" strokeWidth="1.3" />
            <rect x={p.x - 54} y="98" width="108" height="42" rx="4"
              fill="var(--surface)" stroke={p.label === "Start Planning" ? ORANGE : GREEN}
              strokeOpacity={p.label === "Start Planning" ? 0.6 : 0.25} strokeWidth="1.2" />
            <text x={p.x} y="116" fontSize="9.5" fontWeight="700"
              fill={p.label === "Start Planning" ? ORANGE : GREEN}
              textAnchor="middle">{p.label}</text>
            <text x={p.x} y="130" fontSize="7.5" fill={GREEN} opacity="0.45"
              textAnchor="middle">{p.sub}</text>
          </g>
        ))}

        {/* Interdependency: Destinations ↔ Tours */}
        <path d="M 60 140 Q 60 176 192 176 Q 324 176 324 140"
          fill="none" stroke={AMBER} strokeWidth="1.3" strokeDasharray="3 2.5" />
        <text x="192" y="192" fontSize="8" fill={AMBER} textAnchor="middle" fontWeight="700">
          tightly interdependent
        </text>

        {/* Funnel arrows to conversion */}
        {[60, 192, 324, 456].map((x) => (
          <path key={x} d={`M ${x} 140 Q ${x} 214 588 214`}
            fill="none" stroke={ORANGE} strokeOpacity="0.16" strokeWidth="1" />
        ))}
        <line x1="588" y1="140" x2="588" y2="214" stroke={ORANGE}
          strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="588" cy="214" r="5" fill={ORANGE} />
        <text x="588" y="232" fontSize="8" fill={ORANGE} textAnchor="middle" fontWeight="700">
          every path funnels here
        </text>

        {/* ── The seam: blog subdomain ── */}
        <line x1="360" y1="256" x2="360" y2="272" stroke={GREEN}
          strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />

        <rect x="196" y="272" width="328" height="46" rx="5"
          fill="none" stroke={GREEN} strokeOpacity="0.3" strokeWidth="1.2"
          strokeDasharray="5 3" />
        <text x="360" y="291" fontSize="10" fontWeight="700" fill={GREEN}
          textAnchor="middle" opacity="0.75">
          rhinoafrica.com/blog · WordPress subdomain
        </text>
        <text x="360" y="306" fontSize="8" fill={GREEN} opacity="0.45" textAnchor="middle">
          Mirrors the main taxonomy · 5 languages · top-of-funnel
        </text>

        {/* Seam marker */}
        <circle cx="360" cy="264" r="4.5" fill="var(--surface)" stroke={ORANGE} strokeWidth="1.8" />
        <text x="378" y="268" fontSize="8" fontWeight="700" fill={ORANGE}>
          the seam
        </text>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   04 · Where multilingual continuity breaks
   ──────────────────────────────────────────────────────────── */
export function MultilingualBreakDiagram() {
  const langs = ["EN", "DE", "FR", "ES", "PT"];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 720 210" className="w-full min-w-[560px]"
        xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: FONT }}>

        {/* Stage 1 — Blog */}
        <text x="20" y="16" fontSize="8" fontWeight="700" fill={GREEN}
          opacity="0.4" letterSpacing="0.7">DISCOVERY · BLOG</text>
        <rect x="20" y="28" width="180" height="86" rx="5"
          fill="var(--surface)" stroke={GREEN} strokeOpacity="0.25" strokeWidth="1.2" />
        {langs.map((l, i) => (
          <g key={l}>
            <rect x={34 + (i % 3) * 52} y={44 + Math.floor(i / 3) * 32}
              width="42" height="22" rx="11"
              fill={GREEN} fillOpacity="0.08" stroke={GREEN} strokeOpacity="0.3" strokeWidth="1" />
            <text x={55 + (i % 3) * 52} y={59 + Math.floor(i / 3) * 32}
              fontSize="9" fontWeight="700" fill={GREEN} textAnchor="middle">{l}</text>
          </g>
        ))}
        <text x="110" y="130" fontSize="8.5" fill={GREEN} opacity="0.5" textAnchor="middle">
          Five languages
        </text>

        {/* Arrow 1 */}
        <line x1="200" y1="71" x2="250" y2="71" stroke={GREEN}
          strokeOpacity="0.3" strokeWidth="1.3" />
        <path d="M 250 71 l -6 -3.5 l 0 7 z" fill={GREEN} fillOpacity="0.4" />

        {/* Stage 2 — Main site */}
        <text x="256" y="16" fontSize="8" fontWeight="700" fill={GREEN}
          opacity="0.4" letterSpacing="0.7">MAIN SITE</text>
        <rect x="256" y="28" width="150" height="86" rx="5"
          fill="var(--surface)" stroke={GREEN} strokeOpacity="0.25" strokeWidth="1.2" />
        {["EN", "PT"].map((l, i) => (
          <g key={l}>
            <rect x={280 + i * 56} y="52" width="42" height="22" rx="11"
              fill={GREEN} fillOpacity="0.08" stroke={GREEN} strokeOpacity="0.3" strokeWidth="1" />
            <text x={301 + i * 56} y="67" fontSize="9" fontWeight="700"
              fill={GREEN} textAnchor="middle">{l}</text>
          </g>
        ))}
        <text x="331" y="94" fontSize="8.5" fill={GREEN} opacity="0.5" textAnchor="middle">
          Two locale alternates
        </text>
        <text x="331" y="130" fontSize="8.5" fill={AMBER} opacity="0.9" textAnchor="middle"
          fontWeight="700">
          −3 languages
        </text>

        {/* Arrow 2 — the break */}
        <line x1="406" y1="71" x2="450" y2="71" stroke={ORANGE}
          strokeWidth="1.3" strokeDasharray="4 3" />
        <path d="M 450 71 l -6 -3.5 l 0 7 z" fill={ORANGE} />

        {/* Break marker */}
        <line x1="428" y1="46" x2="428" y2="96" stroke={ORANGE} strokeWidth="1.5" />
        <circle cx="428" cy="41" r="8" fill={ORANGE} />
        <text x="428" y="45" fontSize="10" fontWeight="700" fill="var(--surface)"
          textAnchor="middle">!</text>

        {/* Stage 3 — Enquiry */}
        <text x="456" y="16" fontSize="8" fontWeight="700" fill={ORANGE}
          letterSpacing="0.7">CONVERSION · ENQUIRY FORM</text>
        <rect x="456" y="28" width="244" height="86" rx="5"
          fill={ORANGE} fillOpacity="0.05" stroke={ORANGE} strokeOpacity="0.4" strokeWidth="1.2" />
        <rect x="556" y="52" width="42" height="22" rx="11"
          fill={ORANGE} fillOpacity="0.15" stroke={ORANGE} strokeOpacity="0.5" strokeWidth="1" />
        <text x="577" y="67" fontSize="9" fontWeight="700" fill={ORANGE}
          textAnchor="middle">EN</text>
        <text x="578" y="94" fontSize="8.5" fill={ORANGE} opacity="0.75" textAnchor="middle">
          English only
        </text>
        <text x="578" y="130" fontSize="8.5" fill={ORANGE} textAnchor="middle" fontWeight="700">
          −4 languages
        </text>

        {/* Explanation */}
        <line x1="20" y1="156" x2="700" y2="156" stroke={GREEN}
          strokeOpacity="0.12" strokeWidth="1" />
        <text x="20" y="176" fontSize="10" fontWeight="700" fill={GREEN}>
          A German reader discovers in German, researches in English, and enquires in English.
        </text>
        <text x="20" y="194" fontSize="10" fill={GREEN} opacity="0.55">
          The language drops away at the exact moment the user commits.
        </text>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   05 · Competitor benchmark matrix
   ──────────────────────────────────────────────────────────── */
const competitors = [
  { name: "Singita", market: "Local", stack: "Gatsby + Contentful", scores: [4, 5, 5, 5, 4], avg: 4.6 },
  { name: "Abercrombie & Kent", market: "Intl", stack: "Next.js SSR", scores: [5, 4, 4, 5, 5], avg: 4.6 },
  { name: "Extraordinary Journeys", market: "Intl", stack: "Prismic headless", scores: [4, 5, 5, 5, 4], avg: 4.6 },
  { name: "Micato Safaris", market: "Intl", stack: "WordPress", scores: [4, 4, 5, 3, 3], avg: 3.8 },
  { name: "Wilderness", market: "Local", stack: "React SPA", scores: [4, 3, 4, 4, 3], avg: 3.6 },
  { name: "&Beyond", market: "Local", stack: "WordPress", scores: [3, 3, 4, 3, 3], avg: 3.2 },
];

const dimensions = ["IA & Nav", "Enquiry", "Content", "Visual", "Mobile"];

export function CompetitorMatrix() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[560px]">
        {/* Header */}
        <div className="flex items-end gap-2 pb-3 mb-1 border-b border-line">
          <div className="w-[190px] shrink-0">
            <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
              Competitor
            </span>
          </div>
          {dimensions.map((d) => (
            <div key={d} className="flex-1 text-center">
              <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
                {d}
              </span>
            </div>
          ))}
          <div className="w-[52px] text-right shrink-0">
            <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
              Avg
            </span>
          </div>
        </div>

        {/* Rows */}
        {competitors.map((c) => (
          <div key={c.name}
            className="flex items-center gap-2 py-3 border-b border-line">
            <div className="w-[190px] shrink-0 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider shrink-0"
                  style={{ color: c.market === "Intl" ? ORANGE : GREEN, opacity: 0.5 }}>
                  {c.market}
                </span>
                <span className="text-sm font-bold text-ink truncate">{c.name}</span>
              </div>
              <p className="text-[10px] text-ink/40 mt-0.5">{c.stack}</p>
            </div>

            {c.scores.map((s, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div className="flex gap-[3px]">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n}
                      className="w-[5px] h-[14px] rounded-[1px]"
                      style={{
                        background: n <= s ? (s >= 5 ? ORANGE : GREEN) : GREEN,
                        opacity: n <= s ? (s >= 5 ? 0.9 : 0.55) : 0.1,
                      }} />
                  ))}
                </div>
              </div>
            ))}

            <div className="w-[52px] text-right shrink-0">
              <span className="text-sm font-bold tabular-nums"
                style={{ color: c.avg >= 4.5 ? ORANGE : GREEN, opacity: c.avg >= 4.5 ? 1 : 0.5 }}>
                {c.avg.toFixed(1)}
              </span>
            </div>
          </div>
        ))}

        <p className="text-[10px] text-ink/35 mt-4">
          Scored 1–5 · 1 = weak · 5 = best in class
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   06 · FAQ answer — before and after
   ──────────────────────────────────────────────────────────── */
export function FaqBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-px bg-line overflow-hidden">
      {/* Before */}
      <div className="bg-surface p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN, opacity: 0.3 }} />
          <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
            Current
          </span>
        </div>
        <p className="text-xs text-ink/45 font-medium mb-2">
          Q: When is the best time to visit Kruger?
        </p>
        <p className="text-sm text-ink/60 leading-relaxed">
          &ldquo;The Kruger National Park is a year-round destination, and there is truly no bad
          time to experience its magic. That said, many travellers find that the seasons each
          offer something unique, and much depends on what you hope to see…&rdquo;
        </p>
        <div className="mt-5 pt-4 border-t border-line space-y-1.5">
          <p className="text-[11px] text-ink/50">→ Preamble before the answer</p>
          <p className="text-[11px] text-ink/50">→ No entity named as the source</p>
          <p className="text-[11px] text-ink/50">→ Nothing clean to extract or cite</p>
        </div>
      </div>

      {/* After */}
      <div className="bg-surface p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: ORANGE }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
            Recommended
          </span>
        </div>
        <p className="text-xs text-ink/45 font-medium mb-2">
          Q: When is the best time to visit Kruger?
        </p>
        <p className="text-sm text-ink/85 leading-relaxed">
          &ldquo;<strong style={{ color: ORANGE }}>Rhino Africa recommends</strong> May–September
          for Big 5 density; November–April for newborns and dramatic skies.&rdquo;
        </p>
        <div className="mt-5 pt-4 border-t border-line space-y-1.5">
          <p className="text-[11px] text-ink/70">→ Entity leads the first sentence</p>
          <p className="text-[11px] text-ink/70">→ Specific, self-contained, citable</p>
          <p className="text-[11px] text-ink/70">→ Wrapped in FAQPage schema</p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   07 · The nine GEO signals
   ──────────────────────────────────────────────────────────── */
const signals = [
  { s: "Structure for extraction", m: "Q&A format, definition blocks, self-contained paragraphs, not intro-heavy prose" },
  { s: "Entity clarity", m: "Name brand, location, and subject in full. Never assume context" },
  { s: "Authoritative citations", m: "Link to trusted sources; earn citations from credible third parties" },
  { s: "Conversational query matching", m: "Write as people ask. 'best time to visit Botswana', not 'optimal visit period'" },
  { s: "Schema markup", m: "FAQ, HowTo, Article, LocalBusiness. Improves extraction accuracy" },
  { s: "E-E-A-T signals", m: "Named authors with credentials, first-hand accounts, transparent policies" },
  { s: "Above-the-fold answer", m: "First 100 words carry the most weight. Answer before context" },
  { s: "Brand mentions across the web", m: "Entity recognition reinforced by presence beyond owned channels" },
  { s: "Fresh content cadence", m: "Recency is a trust signal. AI favours recently touched pages" },
];

export function GeoSignals() {
  return (
    <div className="space-y-0">
      {signals.map((sig, i) => (
        <div key={sig.s}
          className="flex gap-4 md:gap-5 py-4 border-b border-line last:border-0">
          <span className="text-xs text-ink/30 font-bold tabular-nums shrink-0 pt-0.5">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-ink">{sig.s}</h3>
            <p className="text-xs text-ink/55 mt-1 leading-relaxed">{sig.m}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
