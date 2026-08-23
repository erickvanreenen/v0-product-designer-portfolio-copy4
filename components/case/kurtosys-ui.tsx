import React from "react";

/*
  Kurtosys design artefacts, rebuilt.

  These carry Kurtosys's own brand rather than the portfolio palette, because
  that is what the work looked like: deep navy ink, electric blue, mint used
  sparingly as an accent and never as a success colour, and long soft shadows.
  Values are the real tokens scraped from kurtosys.com during the project.

  Everything here is presentational. No interactivity, so nothing needs client
  JavaScript.
*/

const K = {
  ink: "#071935",
  blue: "#0342E4",
  mint: "#31FF9C",
  paleBlue: "#D9E3FB",
  grey100: "#F4F4F4",
  grey200: "#E9E9E9",
  border: "#D1D1D1",
  muted: "#54595F",
  /*
    Kurtosys ships this as #7A7A7A. At the label sizes used here that measures
    4.29:1 on white, under AA, so it is darkened to the nearest value that
    passes on both white and the frame's #FAFAFA header.
  */
  grey: "#727272",
};

/* ── Shell ────────────────────────────────────────────

   Establishes the Kurtosys type and colour context. Everything below
   assumes it is inside one of these.
*/
export function KFrame({
  label,
  children,
  pad = true,
}: {
  label?: string;
  children: React.ReactNode;
  pad?: boolean;
}) {
  return (
    <div
      className="font-kurtosys bg-white border border-[#E9E9E9] overflow-hidden"
      style={{ boxShadow: "0 12.5px 10px rgba(0,0,0,0.016), 0 40px 60px rgba(0,0,0,0.04)" }}
    >
      {label && (
        <div className="flex items-center gap-2.5 px-4 sm:px-5 py-3 border-b border-[#E9E9E9] bg-[#FAFAFA]">
          <span className="w-2.5 h-2.5 rounded-[3px]" style={{ background: K.mint }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[1.4px]"
            style={{ color: K.grey }}
          >
            {label}
          </span>
        </div>
      )}
      <div className={pad ? "p-4 sm:p-6" : ""}>{children}</div>
    </div>
  );
}

function Scroll({ children, min }: { children: React.ReactNode; min: number }) {
  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <div style={{ minWidth: min }}>{children}</div>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-[1.4px] mt-3 sm:hidden" style={{ color: K.grey }}>
        Swipe to see the rest
      </p>
    </div>
  );
}

/* ── 1. Platform placement ────────────────────────────
   Where the feature lives. Documents is the feature home.
*/
const MODULES = [
  { name: "DXM", sub: "Sites & experiences", items: ["Fund websites", "Page builder", "Content blocks", "Theming"] },
  { name: "Documents", sub: "Report automation", items: ["Templates", "Rule Builder", "Production Centre", "Approval workflows", "Audit & retention"], home: true },
  { name: "Data", sub: "Book of record", items: ["Data hub", "Data dictionary", "Segmentation", "Metadata"] },
  { name: "Studio", sub: "Component library", items: ["Component library", "Configuration UI", "Live preview", "Office / InDesign"] },
  { name: "Communities", sub: "Investor portals", items: ["Investor portals", "Permissions", "Document library", "Audit logs"] },
];

export function PlatformMap() {
  return (
    <KFrame label="Information architecture">
      <Scroll min={720}>
        <div className="flex flex-col items-center">
          <div
            className="rounded-full px-10 py-3.5 text-center mb-5"
            style={{ background: K.ink, boxShadow: "0 18px 38px rgba(58,64,81,0.16)" }}
          >
            <div className="text-[15px] font-bold text-white">Kurtosys Cloud</div>
            <div className="text-[11px] text-white/70">Digital experience platform</div>
          </div>
          <div className="w-px h-6" style={{ background: K.border }} />

          <div className="grid grid-cols-5 gap-3 w-full pt-4">
            {MODULES.map((m) => (
              <div key={m.name}>
                {m.home ? (
                  <div
                    className="relative rounded-xl border bg-white px-3 py-3 mb-3"
                    style={{ borderColor: K.grey200, boxShadow: "0 15px 30px rgba(58,64,81,0.10)" }}
                  >
                    <span
                      className="absolute top-0 left-5 right-5 h-1 rounded-b"
                      style={{ background: K.mint }}
                    />
                    <div
                      className="text-[8.5px] font-bold uppercase tracking-[1.2px] text-center mb-1.5"
                      style={{ color: K.blue }}
                    >
                      Feature home
                    </div>
                    <div className="text-[13px] font-bold text-center" style={{ color: K.ink }}>
                      {m.name}
                    </div>
                    <div className="text-[10px] text-center" style={{ color: K.muted }}>
                      {m.sub}
                    </div>
                  </div>
                ) : (
                  <div className="mb-3 pt-3">
                    <div className="text-[13px] font-bold text-center" style={{ color: K.ink }}>
                      {m.name}
                    </div>
                    <div className="text-[10px] text-center" style={{ color: K.muted }}>
                      {m.sub}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  {m.items.map((item) => {
                    const active = item === "Rule Builder";
                    return (
                      <div
                        key={item}
                        className="relative rounded-md border px-2 py-2 text-[10.5px] text-center"
                        style={
                          active
                            ? { borderColor: K.blue, background: "rgba(3,66,228,0.06)", color: K.blue, fontWeight: 700 }
                            : { borderColor: K.grey200, color: K.ink, background: "#fff" }
                        }
                      >
                        {active && (
                          <span
                            className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r"
                            style={{ background: K.blue }}
                          />
                        )}
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scroll>
    </KFrame>
  );
}

/* ── 2. Ecosystem ─────────────────────────────────────
   Data in, rules shape the report, outputs out.
*/
const FLOW = [
  { head: "Inputs", items: ["Fund admin systems", "Market data providers", "ESG / ratings data", "Risk & performance", "Document metadata"] },
  { head: "Documents / Rules", items: ["Templates", "Conditional logic", "Production rendering", "Approval checks"], center: true },
  { head: "Outputs", items: ["PDF reports", "Investor portals", "Fund websites", "PowerPoint decks", "Email delivery"] },
];

export function EcosystemFlow() {
  return (
    <KFrame label="Ecosystem">
      <Scroll min={640}>
        <div className="flex items-stretch gap-2">
          {FLOW.map((col, i) => (
            <React.Fragment key={col.head}>
              {i > 0 && (
                <div
                  className="self-center text-lg font-extrabold px-1"
                  style={{ color: K.blue }}
                  aria-hidden="true"
                >
                  &rsaquo;
                </div>
              )}
              <div
                className="flex-1 relative rounded-xl border px-5 py-6"
                style={
                  col.center
                    ? {
                        background: "linear-gradient(180deg, rgba(217,227,251,0.55) 0%, rgba(217,227,251,0.18) 100%)",
                        borderColor: "rgba(3,66,228,0.18)",
                      }
                    : { borderColor: K.grey200, background: "#fff" }
                }
              >
                <span
                  className="absolute top-0 left-5 right-5 h-[5px] rounded-b"
                  style={{ background: col.center ? K.mint : K.blue }}
                />
                <p className="text-[15px] font-bold mb-3.5" style={{ color: K.ink }}>
                  {col.head}
                </p>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="text-[12px]"
                      style={{ color: col.center ? K.ink : K.muted, fontWeight: col.center ? 500 : 400 }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Scroll>
    </KFrame>
  );
}

/* ── 2b. Documents to sections ────────────────────────
   The middle of the drill down. A document is a sequence of sections,
   and only two of them are a rule's business.
*/
const DOC_SECTIONS = [
  { n: "01", name: "Cover" },
  { n: "02", name: "Fund overview" },
  { n: "03", name: "Performance commentary", tag: "Optional" },
  { n: "04", name: "Holdings" },
  { n: "05", name: "Risk warning", touch: true },
  { n: "06", name: "ESG highlights", touch: true },
  { n: "07", name: "Disclaimers" },
];

export function DocumentSections() {
  return (
    <KFrame label="Documents to sections">
      {DOC_SECTIONS.map((s) => (
        <div
          key={s.n}
          className="flex items-center gap-3 px-3 sm:px-4 py-3.5"
          style={
            s.touch
              ? {
                  background: `linear-gradient(90deg, rgba(49,255,156,0.16), rgba(49,255,156,0))`,
                  borderLeft: `4px solid ${K.mint}`,
                  borderRadius: 6,
                  marginLeft: -4,
                }
              : { borderBottom: `1px solid ${K.grey200}` }
          }
        >
          <span className="text-[11px] font-semibold w-7 shrink-0" style={{ color: K.grey }}>
            {s.n}
          </span>
          <span
            className="text-[13.5px] flex-1 min-w-0"
            style={{ color: K.ink, fontWeight: s.touch ? 700 : 400 }}
          >
            {s.name}
          </span>
          {s.touch ? (
            <span
              className="text-[9px] font-bold uppercase tracking-[1.2px] rounded-full px-2.5 py-1 shrink-0"
              style={{ background: K.mint, color: K.ink }}
            >
              Rule touchpoint
            </span>
          ) : (
            <span
              className="text-[9px] font-bold uppercase tracking-[1.2px] shrink-0"
              style={{ color: K.muted }}
            >
              {s.tag ?? ""}
            </span>
          )}
        </div>
      ))}
    </KFrame>
  );
}

/* ── 3. Template hierarchy ────────────────────────────
   Which sections a rule can touch, and which it never does.
*/
const SECTIONS = [
  { n: "01", name: "Cover", tag: "Always" },
  { n: "02", name: "Fund overview", tag: "Always" },
  { n: "03", name: "Performance", tag: "Always" },
  { n: "04", name: "Holdings", tag: "Always" },
  { n: "05", name: "Performance commentary", tag: "Optional" },
  { n: "06", name: "Risk warning", tag: "Conditional", lead: true },
  { n: "07", name: "ESG highlights", tag: "Conditional", cond: true },
  { n: "08", name: "Disclaimers", tag: "Always" },
];

export function TemplateHierarchy() {
  return (
    <KFrame label="Template hierarchy">
      <div className="grid md:grid-cols-[1.35fr_1fr] gap-8 md:gap-10 items-center">
        <div>
          {SECTIONS.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-3 px-3 py-3 relative"
              style={
                s.lead
                  ? {
                      background: "rgba(3,66,228,0.05)",
                      border: "1px solid rgba(3,66,228,0.20)",
                      borderRadius: 8,
                      margin: "4px 0",
                    }
                  : { borderBottom: `1px solid ${K.grey200}` }
              }
            >
              {s.lead && (
                <span
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r"
                  style={{ background: K.blue }}
                />
              )}
              <span className="text-[11px] font-semibold w-6 shrink-0" style={{ color: K.grey }}>
                {s.n}
              </span>
              <span
                className="text-[13px] flex-1 min-w-0"
                style={{ color: K.ink, fontWeight: s.lead ? 700 : 400 }}
              >
                {s.name}
              </span>
              <span
                className="text-[9.5px] font-bold uppercase tracking-[1.3px] shrink-0"
                style={{
                  color: s.lead || s.cond ? K.blue : s.tag === "Optional" ? K.muted : K.grey,
                }}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-[26px] md:text-[30px] font-bold leading-[1.15] tracking-[-0.5px]"
          style={{ color: K.ink }}
        >
          <span
            style={{
              backgroundImage: `linear-gradient(transparent 88%, ${K.mint} 88%)`,
            }}
          >
            Rules control
          </span>
          <br />
          section visibility.
        </p>
      </div>
    </KFrame>
  );
}


/* ── 10. What was left out ────────────────────────────
   Scope choices with their reasons attached.
*/
const LEFT_OUT = [
  { what: "Bulk editing across templates", why: "Out of scope" },
  { what: "Prebuilt rule templates", why: "Phase two" },
  { what: "Advanced formula mode", why: "Power-user track" },
  { what: "Permissions and governance", why: "Platform layer" },
  { what: "Internationalisation support", why: "Platform layer" },
];

export function LeftOut() {
  return (
    <ul className="font-kurtosys space-y-2.5">
      {LEFT_OUT.map((l) => (
        <li
          key={l.what}
          className="rounded-xl border bg-white flex flex-wrap items-center gap-x-4 gap-y-2 px-4 sm:px-5 py-4"
          style={{ borderColor: K.grey200, borderLeft: `4px solid rgba(3,66,228,0.30)` }}
        >
          <span
            className="w-5 h-5 rounded-full border grid place-items-center text-[11px] shrink-0"
            style={{ borderColor: K.border, color: K.grey }}
            aria-hidden="true"
          >
            &times;
          </span>
          <span className="text-[13.5px] font-semibold min-w-0" style={{ color: K.ink }}>
            {l.what}
          </span>
          <span
            className="text-[9.5px] font-bold uppercase tracking-[1.3px] rounded-full px-3 py-1.5 ml-auto shrink-0"
            style={{ background: "rgba(3,66,228,0.08)", color: K.blue }}
          >
            {l.why}
          </span>
        </li>
      ))}
    </ul>
  );
}
