const G = "#09332C";
const O = "#F0531C";
const L = "#F5B86E";
const BG = "#F7EDDA";

interface CardVisualProps {
  slug: string;
}

export function CardVisual({ slug }: CardVisualProps) {
  const patternId = `grid-${slug}`;
  return (
    <svg
      viewBox="0 0 400 250"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke={G}
            strokeWidth="0.4"
            strokeOpacity="0.12"
          />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={BG} />
      <rect width="400" height="250" fill={`url(#${patternId})`} />
      <Composition slug={slug} />
    </svg>
  );
}

function Composition({ slug }: { slug: string }) {
  switch (slug) {
    case "ucook":                       return <UCookVis />;
    case "faithful-to-nature":          return <FtnVis />;
    case "flanksource":                 return <FlanksourceVis />;
    case "overture":                    return <OvertureVis />;
    case "edtech-interactive-learning": return <EdtechVis />;
    case "uni4-online":                 return <Uni4Vis />;
    case "ada-ux-design":               return <AdaVis />;
    case "eduvos-content-writing":      return <EduvosVis />;
    default:                            return <DefaultVis />;
  }
}

// UCook — before / after conversion funnel
// Left: large intake circle → thin line → tiny output (3.7%)
// Right: same intake → same line → much larger output (9.3%)
function UCookVis() {
  return (
    <g>
      {/* Before */}
      <line x1="120" y1="95" x2="120" y2="172" stroke={G} strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="120" cy="75"  r="30" fill={G} fillOpacity="0.75" />
      <circle cx="120" cy="182" r="7"  fill={O} />

      {/* Arrow */}
      <line x1="168" y1="125" x2="210" y2="125" stroke={G} strokeWidth="1.5" strokeOpacity="0.28" />
      <polygon points="205,121 214,125 205,129" fill={G} fillOpacity="0.28" />

      {/* After */}
      <line x1="280" y1="95" x2="280" y2="165" stroke={G} strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="280" cy="75"  r="30" fill={G} fillOpacity="0.75" />
      <circle cx="280" cy="183" r="22" fill={O} />

      {/* Scatter accents */}
      <circle cx="66"  cy="96"  r="8"  fill={L} fillOpacity="0.75" />
      <circle cx="155" cy="198" r="5"  fill={L} fillOpacity="0.65" />
      <circle cx="344" cy="58"  r="7"  fill={L} fillOpacity="0.70" />
      <circle cx="338" cy="192" r="5"  fill={G} fillOpacity="0.25" />
    </g>
  );
}

// Faithful to Nature — omnichannel hub-and-spoke
// Central orange platform node, spokes to 8 store/delivery nodes
function FtnVis() {
  const cx = 200, cy = 125, r = 80;
  const nodes = [
    { angle: 0,   size: 12, color: G,  opacity: 0.80 },
    { angle: 45,  size: 8,  color: L,  opacity: 0.90 },
    { angle: 90,  size: 14, color: G,  opacity: 0.65 },
    { angle: 135, size: 9,  color: G,  opacity: 0.80 },
    { angle: 180, size: 13, color: G,  opacity: 0.70 },
    { angle: 225, size: 7,  color: L,  opacity: 0.90 },
    { angle: 270, size: 12, color: G,  opacity: 0.75 },
    { angle: 315, size: 10, color: L,  opacity: 0.80 },
  ];
  return (
    <g>
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={G} strokeWidth="1" strokeOpacity="0.18" />
            <circle cx={x} cy={y} r={node.size} fill={node.color} fillOpacity={node.opacity} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={34} fill={O} />
    </g>
  );
}

// Flanksource — 5 separate tool views converge into 1 unified dashboard
function FlanksourceVis() {
  const leftX  = 88;
  const rightX = 312;
  const leftYs = [48, 90, 125, 160, 202];
  return (
    <g>
      {leftYs.map((y, i) => (
        <g key={i}>
          <line
            x1={leftX + 18} y1={y}
            x2={rightX - 34} y2={125}
            stroke={G} strokeWidth="1" strokeOpacity="0.20"
          />
          <circle cx={leftX} cy={y} r={17}
            fill={i === 2 ? O : G}
            fillOpacity={i === 2 ? 0.85 : 0.55}
          />
        </g>
      ))}
      <circle cx={rightX} cy={125} r={35} fill={O} />
    </g>
  );
}

// Overture — linear workflow: Promoter → Agent → Artist
function OvertureVis() {
  const nodes = [
    { x: 88,  y: 125, r: 28, color: G, opacity: 0.75 },
    { x: 200, y: 125, r: 35, color: O, opacity: 1.00 },
    { x: 312, y: 125, r: 28, color: G, opacity: 0.65 },
  ];
  return (
    <g>
      <line x1="116" y1="125" x2="165" y2="125" stroke={G} strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="235" y1="125" x2="284" y2="125" stroke={G} strokeWidth="1.5" strokeOpacity="0.25" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.color} fillOpacity={n.opacity} />
      ))}
      <circle cx="88"  cy="78"  r="8" fill={L} fillOpacity="0.80" />
      <circle cx="340" cy="105" r="6" fill={L} fillOpacity="0.75" />
      <circle cx="58"  cy="148" r="5" fill={L} fillOpacity="0.65" />
    </g>
  );
}

// EdTech (BSA) — cascading learning progression, each stage larger than the last
function EdtechVis() {
  const nodes = [
    { x: 78,  y: 188, r: 13 },
    { x: 143, y: 158, r: 16 },
    { x: 200, y: 125, r: 20 },
    { x: 258, y: 90,  r: 24 },
    { x: 322, y: 60,  r: 29 },
  ];
  return (
    <g>
      {nodes.slice(0, -1).map((n, i) => (
        <line
          key={i}
          x1={n.x} y1={n.y}
          x2={nodes[i + 1].x} y2={nodes[i + 1].y}
          stroke={G} strokeWidth="1.5" strokeOpacity="0.20"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={n.r}
          fill={i === nodes.length - 1 ? O : G}
          fillOpacity={i === nodes.length - 1 ? 1 : 0.45 + i * 0.08}
        />
      ))}
      <circle cx="46"  cy="200" r="8" fill={L} fillOpacity="0.70" />
      <circle cx="358" cy="98"  r="6" fill={L} fillOpacity="0.75" />
    </g>
  );
}

// UNi4 — 4 brand clusters converge into one platform
function Uni4Vis() {
  const center = { x: 210, y: 125 };
  const clusters = [
    { x: 68,  y: 62,  nodes: [{ dx: 0,   dy: 0,   r: 15 }, { dx: 22,  dy: -10, r: 8  }, { dx: 8,   dy: 18,  r: 6  }] },
    { x: 75,  y: 190, nodes: [{ dx: 0,   dy: 0,   r: 13 }, { dx: 20,  dy: 8,   r: 7  }, { dx: -8,  dy: -15, r: 5  }] },
    { x: 335, y: 65,  nodes: [{ dx: 0,   dy: 0,   r: 14 }, { dx: -19, dy: -8,  r: 7  }, { dx: 10,  dy: 15,  r: 6  }] },
    { x: 338, y: 188, nodes: [{ dx: 0,   dy: 0,   r: 12 }, { dx: -16, dy: 10,  r: 6  }, { dx: 12,  dy: -10, r: 8  }] },
  ];
  return (
    <g>
      {clusters.map((cluster, ci) => (
        <g key={ci}>
          <line x1={cluster.x} y1={cluster.y} x2={center.x} y2={center.y} stroke={G} strokeWidth="1" strokeOpacity="0.18" />
          {cluster.nodes.map((n, ni) => (
            <circle
              key={ni}
              cx={cluster.x + n.dx} cy={cluster.y + n.dy} r={n.r}
              fill={ni === 0 ? G : L}
              fillOpacity={ni === 0 ? 0.72 : 0.78}
            />
          ))}
        </g>
      ))}
      <circle cx={center.x} cy={center.y} r={33} fill={O} />
    </g>
  );
}

// ADA — teaching/UX knowledge network
// Top node (curriculum) fans down to concept nodes, which connect to student nodes
function AdaVis() {
  const nodes = [
    { x: 200, y: 55,  r: 28, color: O,  opacity: 1.00 },
    { x: 115, y: 125, r: 17, color: G,  opacity: 0.72 },
    { x: 285, y: 125, r: 17, color: G,  opacity: 0.72 },
    { x: 155, y: 192, r: 13, color: G,  opacity: 0.55 },
    { x: 245, y: 192, r: 13, color: G,  opacity: 0.55 },
    { x: 200, y: 155, r: 10, color: L,  opacity: 0.90 },
  ];
  const edges: [number, number][] = [[0,1],[0,2],[1,3],[2,4],[1,5],[2,5],[3,5],[4,5]];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke={G} strokeWidth="1" strokeOpacity="0.20"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.color} fillOpacity={n.opacity} />
      ))}
      <circle cx="58"  cy="82"  r="7" fill={L} fillOpacity="0.70" />
      <circle cx="342" cy="182" r="6" fill={L} fillOpacity="0.70" />
    </g>
  );
}

// Eduvos — curriculum grid: 3×2 module structure, all interconnected
function EduvosVis() {
  const cols = 3, rows = 2;
  const startX = 105, startY = 82, spX = 95, spY = 88;
  const nodes = Array.from({ length: rows * cols }, (_, i) => ({
    x: startX + (i % cols) * spX,
    y: startY + Math.floor(i / cols) * spY,
  }));
  const highlight = [1, 4];
  return (
    <g>
      {nodes.map((n, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        return (
          <g key={i}>
            {col < cols - 1 && (
              <line x1={n.x + 19} y1={n.y} x2={nodes[i + 1].x - 19} y2={nodes[i + 1].y} stroke={G} strokeWidth="1" strokeOpacity="0.20" />
            )}
            {row < rows - 1 && (
              <line x1={n.x} y1={n.y + 19} x2={nodes[i + cols].x} y2={nodes[i + cols].y - 19} stroke={G} strokeWidth="1" strokeOpacity="0.20" />
            )}
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={19}
          fill={highlight.includes(i) ? O : G}
          fillOpacity={highlight.includes(i) ? 0.90 : 0.58}
        />
      ))}
      <circle cx="46"  cy="125" r="9" fill={L} fillOpacity="0.78" />
      <circle cx="354" cy="125" r="9" fill={L} fillOpacity="0.78" />
    </g>
  );
}

// Default fallback
function DefaultVis() {
  return (
    <g>
      <line x1="120" y1="90"  x2="200" y2="125" stroke={G} strokeWidth="1" strokeOpacity="0.20" />
      <line x1="200" y1="125" x2="280" y2="160" stroke={G} strokeWidth="1" strokeOpacity="0.20" />
      <circle cx="120" cy="90"  r="20" fill={G} fillOpacity="0.70" />
      <circle cx="200" cy="125" r="35" fill={O} />
      <circle cx="280" cy="160" r="20" fill={G} fillOpacity="0.70" />
      <circle cx="70"  cy="155" r="8"  fill={L} fillOpacity="0.75" />
      <circle cx="330" cy="90"  r="7"  fill={L} fillOpacity="0.75" />
    </g>
  );
}
