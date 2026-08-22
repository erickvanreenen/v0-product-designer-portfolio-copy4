const GREEN = "#09332C";
const ORANGE = "#F0531C";

/* ── Design and delivery: seven steps ─────────────────── */
export function DeliveryWorkflowDiagram() {
  const steps = [
    { x: 65, n: "01", label: "POC and prototype", sub: ["Claude Code, Cowork"] },
    { x: 176, n: "02", label: "Refine", sub: [] },
    { x: 287, n: "03", label: "Present", sub: [] },
    { x: 398, n: "04", label: "Editable frames", sub: ["written to Figma"] },
    { x: 509, n: "05", label: "Align to system", sub: ["1:1, then refine as a whole"] },
    { x: 620, n: "06", label: "Annotations", sub: ["for developers"] },
    { x: 731, n: "07", label: "Handover", sub: ["with documentation"], end: true },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 800 118" className="w-full min-w-[700px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

        <line x1="65" y1="52" x2="731" y2="52"
          stroke={GREEN} strokeOpacity="0.18" strokeWidth="1.3" />

        <g textAnchor="middle">
          {steps.map((s) => (
            <g key={s.n}>
              <text x={s.x} y="30" fontSize="9" fontWeight="700" fill={ORANGE}>{s.n}</text>
              <circle cx={s.x} cy="52" r="6.5" fill="#fff"
                stroke={s.end ? ORANGE : GREEN} strokeWidth="1.6" />
              <circle cx={s.x} cy="52" r="2.6" fill={s.end ? ORANGE : GREEN} />
              <text x={s.x} y="80" fontSize="10" fontWeight="700" fill={GREEN}>{s.label}</text>
              {s.sub.map((line, i) => (
                <text key={i} x={s.x} y={94 + i * 12} fontSize="8.5"
                  fill={GREEN} opacity="0.5">{line}</text>
              ))}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ── Design system: four steps, then the loop ─────────── */
export function DesignSystemDiagram() {
  const steps = [
    { x: 75, n: "01", label: "Design system", sub: ["in Figma"] },
    { x: 218, n: "02", label: "Storybook", sub: ["tokens and components,", "in the front end language of choice"] },
    { x: 361, n: "03", label: "Validate", sub: ["true to spec, maps to Figma 1:1"] },
    { x: 504, n: "04", label: "Semantic layer", sub: ["on tokens and components"], end: true },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 800 130" className="w-full min-w-[700px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <defs>
          <marker id="wf-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill={ORANGE} fillOpacity="0.65" />
          </marker>
        </defs>

        <line x1="75" y1="52" x2="504" y2="52"
          stroke={GREEN} strokeOpacity="0.18" strokeWidth="1.3" />
        <line x1="504" y1="52" x2="588" y2="52"
          stroke={ORANGE} strokeOpacity="0.5" strokeWidth="1.3"
          strokeDasharray="4 3" markerEnd="url(#wf-arrow)" />

        <g textAnchor="middle">
          {steps.map((s) => (
            <g key={s.n}>
              <text x={s.x} y="30" fontSize="9" fontWeight="700" fill={ORANGE}>{s.n}</text>
              <circle cx={s.x} cy="52" r="6.5" fill="#fff"
                stroke={s.end ? ORANGE : GREEN} strokeWidth="1.6" />
              <circle cx={s.x} cy="52" r="2.6" fill={s.end ? ORANGE : GREEN} />
              <text x={s.x} y="80" fontSize="10" fontWeight="700" fill={GREEN}>{s.label}</text>
              {s.sub.map((line, i) => (
                <text key={i} x={s.x} y={94 + i * 12} fontSize="8.5"
                  fill={GREEN} opacity="0.5">{line}</text>
              ))}
            </g>
          ))}
        </g>

        {/* Outcome */}
        <rect x="596" y="30" width="188" height="46" rx="6" fill="#E2F5EF" />
        <text x="690" y="49" fontSize="10" fontWeight="700" fill={GREEN} textAnchor="middle">
          The workflow repeats
        </text>
        <text x="690" y="64" fontSize="8.5" fill={GREEN} opacity="0.55" textAnchor="middle">
          output governed by the system
        </text>
      </svg>
    </div>
  );
}

/* ── The semantic layer explainer ─────────────────────── */
export function SemanticLayerNote() {
  return (
    <div className="border-t border-border/50 mt-4 pt-6">
      <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest mb-2">
        The semantic layer
      </p>
      <p className="text-xs text-foreground/50 leading-relaxed">
        The same colour, named three ways.
      </p>
      <div className="flex items-center gap-2.5 flex-wrap my-3.5">
        <code className="text-xs font-mono px-2.5 py-1.5 rounded bg-[#F7EDDA] text-foreground/75">
          #F0531C
        </code>
        <span className="text-foreground/30 text-xs">&rarr;</span>
        <code className="text-xs font-mono px-2.5 py-1.5 rounded bg-[#F7EDDA] text-foreground/75">
          orange-600
        </code>
        <span className="text-foreground/30 text-xs">&rarr;</span>
        <code className="text-xs font-mono px-2.5 py-1.5 rounded bg-[#F0531C]/10 text-[#F0531C] font-bold">
          action.primary
        </code>
      </div>
      <p className="text-xs text-foreground/50 leading-relaxed">
        Only the last one still holds after a rebrand. It names the decision rather than
        the value, which is what makes generated output predictable.
      </p>
    </div>
  );
}
