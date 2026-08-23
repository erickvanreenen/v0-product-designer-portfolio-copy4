/*
  Thumbnails are miniature diagrams of the problem each project solved,
  not decoration. Ink carries structure, the project accent carries the
  thing that changed.
*/

const INK = "var(--ink)";
/* Thumbnails carry no text, so they use the brighter tier. */
const ACCENT = "var(--accent-vivid)";

interface CardVisualProps {
  slug: string;
}

export function CardVisual({ slug }: CardVisualProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ fontFamily: "var(--font-mono-face), monospace" }}
    >
      <rect width="400" height="250" fill="var(--accent-wash)" />
      <Composition slug={slug} />
    </svg>
  );
}

function Composition({ slug }: { slug: string }) {
  switch (slug) {
    case "rhino-africa-geo":            return <GeoVis />;
    case "kurtosys-rule-builder":       return <RuleVis />;
    case "ucook":                       return <FunnelVis />;
    case "faithful-to-nature":          return <OmnichannelVis />;
    case "flanksource":                 return <OneViewVis />;
    case "overture":                    return <AdvancingVis />;
    case "edtech-interactive-learning": return <ComprehensionVis />;
    case "uni4-online":                 return <ConsolidationVis />;
    case "ada-ux-design":               return <InstructionVis />;
    case "eduvos-content-writing":      return <CurriculumVis />;
    default:                            return <DefaultVis />;
  }
}

/* GEO — ten ranked results collapse into one cited answer */
/* A rule decides which sections of a document survive to the reader. */
function RuleVis() {
  const rows = [
    { y: 60, on: true }, { y: 78, on: true }, { y: 96, on: false },
    { y: 114, on: true }, { y: 132, on: false }, { y: 150, on: true },
  ];
  return (
    <g>
      {/* the condition */}
      <rect x="40" y="88" width="104" height="34" rx="4"
        fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
      <rect x="54" y="99" width="34" height="5" rx="2.5" fill={INK} opacity="0.3" />
      <rect x="94" y="99" width="10" height="5" rx="2.5" fill={ACCENT} />
      <rect x="110" y="99" width="20" height="5" rx="2.5" fill={INK} opacity="0.3" />
      <rect x="54" y="110" width="62" height="4" rx="2" fill={INK} opacity="0.14" />

      <path d="M 156 105 L 188 105" stroke={INK} strokeWidth="1.25" strokeOpacity="0.3" />
      <path d="M 188 105 l -7 -4 l 0 8 z" fill={INK} fillOpacity="0.3" />

      {/* the document, some sections kept, some dropped */}
      <rect x="206" y="44" width="150" height="162" rx="4"
        fill="var(--surface)" stroke={INK} strokeOpacity="0.14" strokeWidth="1.25" />
      {rows.map((r) => (
        <g key={r.y}>
          <rect x="224" y={r.y} width={r.on ? 100 : 68} height="7" rx="3.5"
            fill={r.on ? INK : INK} opacity={r.on ? 0.24 : 0.07} />
          {r.on
            ? <rect x="332" y={r.y} width="7" height="7" rx="3.5" fill={ACCENT} />
            : <path d={`M 333 ${r.y + 1} l 5 5 M 338 ${r.y + 1} l -5 5`}
                stroke={INK} strokeOpacity="0.18" strokeWidth="1.25" strokeLinecap="round" />}
        </g>
      ))}
    </g>
  );
}

function GeoVis() {
  return (
    <g>
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          x="46" y={62 + i * 18}
          width={[74, 92, 60, 84, 68, 88, 56][i]}
          height="6" rx="3"
          fill={INK} opacity={0.16}
        />
      ))}

      <path d="M 168 125 L 196 125" stroke={INK} strokeWidth="1.25" strokeOpacity="0.3" />
      <path d="M 196 125 l -7 -4 l 0 8 z" fill={INK} fillOpacity="0.3" />

      <rect x="214" y="62" width="140" height="86" rx="4"
        fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.4" strokeWidth="1.25" />
      <rect x="230" y="80" width="108" height="6" rx="3" fill={INK} opacity="0.22" />
      <rect x="230" y="94" width="90" height="6" rx="3" fill={INK} opacity="0.16" />

      {/* the citation, which is the whole point */}
      <rect x="230" y="116" width="62" height="16" rx="8" fill={ACCENT} />
      <rect x="240" y="122" width="42" height="4" rx="2" fill="var(--surface)" opacity="0.85" />
      <rect x="300" y="116" width="38" height="16" rx="8"
        fill={INK} fillOpacity="0.07" stroke={INK} strokeOpacity="0.14" />
    </g>
  );
}

/* Funnel — same intake, different completion */
function FunnelVis() {
  return (
    <g>
      {/* before */}
      <path d="M 60 62 L 156 62 L 122 132 L 122 172 L 94 172 L 94 132 Z"
        fill={INK} fillOpacity="0.12" stroke={INK} strokeOpacity="0.22" strokeWidth="1.25" />
      <rect x="94" y="160" width="28" height="12" fill={ACCENT} opacity="0.55" />

      <path d="M 178 116 L 206 116" stroke={INK} strokeWidth="1.25" strokeOpacity="0.3" />
      <path d="M 206 116 l -7 -4 l 0 8 z" fill={INK} fillOpacity="0.3" />

      {/* after */}
      <path d="M 228 62 L 324 62 L 290 132 L 290 172 L 262 172 L 262 132 Z"
        fill={INK} fillOpacity="0.12" stroke={INK} strokeOpacity="0.22" strokeWidth="1.25" />
      <rect x="262" y="118" width="28" height="54" fill={ACCENT} />

      <rect x="60" y="192" width="34" height="5" rx="2.5" fill={INK} opacity="0.2" />
      <rect x="228" y="192" width="62" height="5" rx="2.5" fill={ACCENT} opacity="0.7" />
    </g>
  );
}

/* Omnichannel — one catalogue, two ways to receive it */
function OmnichannelVis() {
  return (
    <g>
      <rect x="164" y="46" width="72" height="34" rx="4" fill={ACCENT} />
      <rect x="180" y="60" width="40" height="5" rx="2.5" fill="var(--surface)" opacity="0.9" />

      <path d="M 200 80 L 200 104 M 104 104 L 296 104 M 104 104 L 104 126 M 296 104 L 296 126"
        stroke={INK} strokeWidth="1.25" strokeOpacity="0.28" fill="none" />

      {/* delivery: one destination */}
      <rect x="60" y="126" width="88" height="30" rx="3"
        fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
      <rect x="76" y="138" width="56" height="5" rx="2.5" fill={INK} opacity="0.28" />
      <path d="M 104 156 L 104 176" stroke={INK} strokeWidth="1.25" strokeOpacity="0.22" />
      <circle cx="104" cy="186" r="9" fill={INK} fillOpacity="0.3" />

      {/* collection: many */}
      <rect x="252" y="126" width="88" height="30" rx="3"
        fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
      <rect x="268" y="138" width="56" height="5" rx="2.5" fill={ACCENT} opacity="0.75" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <path d={`M 296 156 L ${256 + i * 16} 178`}
            stroke={ACCENT} strokeWidth="1" strokeOpacity="0.28" />
          <circle cx={256 + i * 16} cy={186} r="6" fill={ACCENT} opacity={0.75} />
        </g>
      ))}
    </g>
  );
}

/* One View — five panels become one */
function OneViewVis() {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="54" y={54 + i * 30} width="76" height="22" rx="3"
            fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
          <rect x="64" y={62 + i * 30} width="40" height="5" rx="2.5" fill={INK} opacity="0.22" />
          <path d={`M 130 ${65 + i * 30} L 216 125`}
            stroke={INK} strokeWidth="1" strokeOpacity="0.2" />
        </g>
      ))}

      <rect x="224" y="58" width="124" height="134" rx="4"
        fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="240" y={76 + i * 28} width={[92, 72, 84, 62][i]} height="6" rx="3"
          fill={i === 0 ? ACCENT : INK} opacity={i === 0 ? 0.85 : 0.18} />
      ))}
      <circle cx="332" cy="79" r="4" fill={ACCENT} />
    </g>
  );
}

/* Advancing — documentation passed between three roles before the date */
function AdvancingVis() {
  const roles = [
    { x: 76, label: 0 },
    { x: 200, label: 1 },
    { x: 324, label: 2 },
  ];
  return (
    <g>
      <path d="M 76 158 L 324 158" stroke={INK} strokeWidth="1.25" strokeOpacity="0.22" />

      {roles.map((r, i) => (
        <g key={i}>
          <rect x={r.x - 34} y="72" width="68" height="48" rx="4"
            fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
          <rect x={r.x - 20} y="88" width="40" height="5" rx="2.5" fill={INK} opacity="0.24" />
          <rect x={r.x - 20} y="99" width="26" height="5" rx="2.5" fill={INK} opacity="0.14" />
          <path d={`M ${r.x} 120 L ${r.x} 158`} stroke={INK} strokeWidth="1.25" strokeOpacity="0.22" />
          <circle cx={r.x} cy="158" r="5" fill={INK} fillOpacity="0.3" />
        </g>
      ))}

      {/* the document moving along */}
      <path d="M 110 96 L 162 96 M 238 96 L 286 96"
        stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 166 96 l -7 -4 l 0 8 z" fill={ACCENT} />
      <path d="M 290 96 l -7 -4 l 0 8 z" fill={ACCENT} />

      {/* the show */}
      <rect x="300" y="180" width="48" height="18" rx="9" fill={ACCENT} />
      <rect x="312" y="187" width="24" height="4" rx="2" fill="var(--surface)" opacity="0.9" />
    </g>
  );
}

/* Comprehension — a tangle resolved into a readable diagram */
function ComprehensionVis() {
  return (
    <g>
      <path
        d="M 54 132 C 78 78, 96 176, 122 108 S 152 62, 158 148 S 132 92, 108 160"
        fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.28" />
      <path
        d="M 62 96 C 96 148, 118 74, 150 122"
        fill="none" stroke={INK} strokeWidth="1.5" strokeOpacity="0.18" />

      <path d="M 178 125 L 206 125" stroke={INK} strokeWidth="1.25" strokeOpacity="0.3" />
      <path d="M 206 125 l -7 -4 l 0 8 z" fill={INK} fillOpacity="0.3" />

      {/* resolved */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={234 + i * 44} y="98" width="34" height="34" rx="3"
            fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
          {i < 2 && (
            <path d={`M ${268 + i * 44} 115 L ${278 + i * 44} 115`}
              stroke={ACCENT} strokeWidth="1.25" strokeOpacity="0.6" />
          )}
        </g>
      ))}
      <rect x="234" y="150" width="122" height="5" rx="2.5" fill={ACCENT} opacity="0.5" />
      <rect x="234" y="163" width="84" height="5" rx="2.5" fill={INK} opacity="0.16" />
    </g>
  );
}

/* Consolidation — four brands under one frame, still distinguishable */
function ConsolidationVis() {
  return (
    <g>
      <rect x="106" y="58" width="188" height="134" rx="5"
        fill="var(--surface)" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.25" />
      <rect x="106" y="58" width="188" height="26" rx="5" fill={ACCENT} opacity="0.12" />
      <rect x="122" y="68" width="52" height="6" rx="3" fill={ACCENT} opacity="0.8" />

      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={124 + (i % 2) * 82} y={100 + Math.floor(i / 2) * 48}
            width="68" height="36" rx="3"
            fill={INK} fillOpacity={0.06}
            stroke={INK} strokeOpacity="0.18" strokeWidth="1" />
          <circle
            cx={138 + (i % 2) * 82} cy={118 + Math.floor(i / 2) * 48}
            r="6" fill={ACCENT} opacity={0.35 + i * 0.16} />
          <rect
            x={150 + (i % 2) * 82} y={115 + Math.floor(i / 2) * 48}
            width="32" height="5" rx="2.5" fill={INK} opacity="0.2" />
        </g>
      ))}
    </g>
  );
}

/* Instruction — the order a student meets things in */
function InstructionVis() {
  const steps = [0, 1, 2, 3];
  return (
    <g>
      <path d="M 62 125 L 338 125" stroke={INK} strokeWidth="1.25" strokeOpacity="0.18" />
      {steps.map((i) => {
        const x = 74 + i * 84;
        const isLast = i === steps.length - 1;
        return (
          <g key={i}>
            <circle cx={x} cy="125" r={isLast ? 17 : 13}
              fill={isLast ? ACCENT : "var(--surface)"}
              stroke={isLast ? ACCENT : INK}
              strokeOpacity={isLast ? 1 : 0.25} strokeWidth="1.5" />
            <text x={x} y="129" textAnchor="middle" fontSize="11" fontWeight="600"
              fill={isLast ? "var(--surface)" : INK}
              opacity={isLast ? 1 : 0.45}>
              {i + 1}
            </text>
            <rect x={x - 26} y="160" width={[46, 52, 40, 52][i]} height="5" rx="2.5"
              fill={INK} opacity={0.18} />
          </g>
        );
      })}
    </g>
  );
}

/* Curriculum — two tracks merge into one */
function CurriculumVis() {
  return (
    <g>
      <rect x="52" y="74" width="30" height="14" rx="7" fill={INK} fillOpacity="0.28" />
      <rect x="52" y="162" width="30" height="14" rx="7" fill={INK} fillOpacity="0.28" />

      <path d="M 82 81 C 150 81, 160 125, 216 125" fill="none"
        stroke={INK} strokeWidth="2" strokeOpacity="0.28" />
      <path d="M 82 169 C 150 169, 160 125, 216 125" fill="none"
        stroke={INK} strokeWidth="2" strokeOpacity="0.28" />

      <path d="M 216 125 L 300 125" stroke={ACCENT} strokeWidth="3" />
      <circle cx="216" cy="125" r="6" fill={ACCENT} />

      <rect x="300" y="106" width="48" height="38" rx="4" fill={ACCENT} />
      <rect x="312" y="120" width="24" height="5" rx="2.5" fill="var(--surface)" opacity="0.9" />
      <rect x="312" y="130" width="16" height="5" rx="2.5" fill="var(--surface)" opacity="0.6" />
    </g>
  );
}

function DefaultVis() {
  return (
    <g>
      <rect x="120" y="98" width="56" height="56" rx="4"
        fill="var(--surface)" stroke={INK} strokeOpacity="0.2" strokeWidth="1.25" />
      <path d="M 176 125 L 220 125" stroke={INK} strokeWidth="1.25" strokeOpacity="0.3" />
      <rect x="224" y="98" width="56" height="56" rx="4" fill={ACCENT} />
    </g>
  );
}
