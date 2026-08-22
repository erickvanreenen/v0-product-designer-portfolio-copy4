const LACE = "#F7EDDA";
const ORANGE = "#F0531C";
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

/**
 * Notice, understand, specify.
 * Three panels on one line, each drawn rather than described.
 */
export function HowIWorkVisual() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 840 200" className="w-full min-w-[660px]"
        xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: FONT }} aria-hidden="true">

        {/* ── 01 · Notice ─────────────────────────────
            A scatter of ordinary readings, one of them wrong. */}
        <g>
          {[
            [40, 96], [62, 88], [84, 100], [106, 84], [128, 94],
            [150, 90], [172, 98], [194, 86], [216, 92],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.2" fill={LACE} fillOpacity="0.28" />
          ))}
          {/* The outlier */}
          <circle cx="150" cy="132" r="6.5" fill={ORANGE} />
          <circle cx="150" cy="132" r="15" fill="none" stroke={ORANGE}
            strokeOpacity="0.35" strokeWidth="1.2" />
          <circle cx="150" cy="132" r="25" fill="none" stroke={ORANGE}
            strokeOpacity="0.15" strokeWidth="1" />
          <line x1="150" y1="107" x2="150" y2="118" stroke={ORANGE}
            strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* ── 02 · Understand ─────────────────────────
            Many inputs converging into one conclusion. */}
        <g transform="translate(280,0)">
          {[76, 88, 100, 112, 124].map((y, i) => (
            <g key={i}>
              <rect x="20" y={y - 3} width={[34, 46, 28, 40, 32][i]} height="5"
                rx="2.5" fill={LACE} fillOpacity="0.3" />
              <path d={`M ${20 + [34, 46, 28, 40, 32][i] + 6} ${y} Q 120 ${y} 148 100`}
                fill="none" stroke={LACE} strokeOpacity="0.22" strokeWidth="1" />
            </g>
          ))}
          <circle cx="158" cy="100" r="17" fill={ORANGE} />
          <path d="M 151 100 l 5 5 l 9 -10" fill="none" stroke="#fff"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* ── 03 · Specify ────────────────────────────
            A frame with callout pins. */}
        <g transform="translate(560,0)">
          <rect x="30" y="66" width="112" height="72" rx="4"
            fill="none" stroke={LACE} strokeOpacity="0.3" strokeWidth="1.2" />
          <rect x="42" y="80" width="52" height="5" rx="2.5" fill={LACE} fillOpacity="0.28" />
          <rect x="42" y="93" width="76" height="5" rx="2.5" fill={LACE} fillOpacity="0.18" />
          <rect x="42" y="112" width="40" height="14" rx="3" fill={LACE} fillOpacity="0.22" />

          {/* Annotation pins */}
          {[[152, 84, "1"], [152, 106, "2"], [152, 128, "3"]].map(([x, y, n], i) => (
            <g key={i}>
              <line x1="118" y1={Number(y)} x2={Number(x) - 9} y2={Number(y)}
                stroke={ORANGE} strokeOpacity="0.45" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={Number(x)} cy={Number(y)} r="8" fill={ORANGE} />
              <text x={Number(x)} y={Number(y) + 3.5} fontSize="8.5" fontWeight="700"
                fill="#fff" textAnchor="middle">{n}</text>
            </g>
          ))}
        </g>

        {/* ── Labels ───────────────────────────────── */}
        {[
          { x: 20, n: "01", t: "I notice things" },
          { x: 300, n: "02", t: "Then I go and check" },
          { x: 580, n: "03", t: "Then I write it down properly" },
        ].map((l) => (
          <g key={l.n}>
            <text x={l.x} y="176" fontSize="9" fontWeight="700"
              fill={LACE} fillOpacity="0.3" letterSpacing="1">{l.n}</text>
            <text x={l.x + 26} y="176" fontSize="12" fontWeight="700"
              fill={LACE}>{l.t}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
