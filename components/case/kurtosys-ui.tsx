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

/* ── 4. The builder drawer ────────────────────────────
   The flagship screen. THEN is locked to the section you came from,
   so the only thing left to define is the condition.
*/
function Field({ label, w }: { label: string; w?: string }) {
  return (
    <span
      className="inline-flex items-center justify-between gap-2 rounded-md border bg-white px-2.5 py-1.5 text-[11.5px]"
      style={{ borderColor: K.border, color: K.ink, minWidth: w }}
    >
      {label}
      <span style={{ color: K.grey }} aria-hidden="true">
        ▾
      </span>
    </span>
  );
}

function Op({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-[11.5px] font-bold shrink-0"
      style={{ background: K.grey100, color: K.ink }}
    >
      {children}
    </span>
  );
}

export function BuilderDrawer() {
  return (
    <KFrame label="Rule builder, opened from the template editor">
      <Scroll min={520}>
        {/* THEN, locked */}
        <div className="mb-5">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span
              className="w-5 h-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0"
              style={{ background: K.ink }}
            >
              1
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px]" style={{ color: K.grey }}>
              Then
            </span>
            <span
              className="text-[9.5px] font-bold uppercase tracking-[1.2px] rounded-full px-2 py-0.5"
              style={{ background: K.grey100, color: K.muted }}
            >
              Locked
            </span>
          </div>
          <div
            className="rounded-lg border px-3.5 py-3 flex items-center gap-2.5"
            style={{ borderColor: K.grey200, background: K.grey100 }}
          >
            <span aria-hidden="true" style={{ color: K.grey }}>
              &#128274;
            </span>
            <span className="text-[12.5px] font-semibold" style={{ color: K.ink }}>
              Show this section
            </span>
          </div>
          <p className="text-[11px] leading-relaxed mt-2" style={{ color: K.muted }}>
            The system locks the action to the section you came from. You define the
            condition. The system handles where the rule applies.
          </p>
        </div>

        {/* IF */}
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span
              className="w-5 h-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0"
              style={{ background: K.ink }}
            >
              2
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[1.4px]" style={{ color: K.grey }}>
              If
            </span>
          </div>

          <div className="rounded-lg border p-3.5" style={{ borderColor: K.grey200 }}>
            <div className="flex flex-wrap items-center gap-2">
              <Field label="Volatility" w="104px" />
              <Op>=</Op>
              <Field label="High" w="84px" />
            </div>

            <div className="flex items-center gap-2.5 my-2.5">
              <span
                className="text-[9.5px] font-bold uppercase tracking-[1.4px] rounded px-2 py-1"
                style={{ background: "rgba(3,66,228,0.08)", color: K.blue }}
              >
                And
              </span>
              <span className="h-px flex-1" style={{ background: K.grey200 }} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Field label="Doc type" w="104px" />
              <Op>&ne;</Op>
              <Field label="Institutional" w="84px" />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <span className="text-[11.5px] font-bold" style={{ color: K.blue }}>
                + Add condition
              </span>
              <span className="text-[11.5px]" style={{ color: K.grey }}>
                + Add group (advanced)
              </span>
            </div>
          </div>
        </div>
      </Scroll>
    </KFrame>
  );
}

/* ── 5. The echo ──────────────────────────────────────
   The same readback component everywhere a rule appears. This is the
   one reused across builder, stress test and debug.
*/
export function PlainEnglishEcho() {
  return (
    <KFrame label="Plain English echo">
      <div
        className="rounded-lg border px-4 py-4"
        style={{ borderColor: "rgba(3,66,228,0.20)", background: "rgba(217,227,251,0.28)" }}
      >
        <div
          className="text-[9.5px] font-bold uppercase tracking-[1.4px] mb-2.5"
          style={{ color: K.blue }}
        >
          This rule reads as
        </div>
        <p className="text-[15px] leading-[1.6]" style={{ color: K.ink }}>
          Show <strong>Risk warning</strong> when <strong>Volatility is High</strong> and the
          document is <strong>not for Institutional investors</strong>.
        </p>
      </div>
    </KFrame>
  );
}

/* ── 6. Stress test ───────────────────────────────────
   Five conditions across two groups. If the echo survives this it
   survives anything the product will realistically hold.
*/
export function StressTest() {
  const group = (
    n: string,
    label: string,
    rows: [string, string, string][],
  ) => (
    <div className="rounded-lg border p-3.5" style={{ borderColor: K.grey200 }}>
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="text-[9.5px] font-bold uppercase tracking-[1.3px] rounded px-2 py-1"
          style={{ background: "rgba(3,66,228,0.08)", color: K.blue }}
        >
          {n}
        </span>
        <span className="text-[11.5px] font-semibold" style={{ color: K.ink }}>
          {label}
        </span>
      </div>
      <div className="space-y-2">
        {rows.map(([f, o, v], i) => (
          <div key={f} className="flex flex-wrap items-center gap-2">
            {i > 0 && (
              <span
                className="text-[9px] font-bold uppercase tracking-[1.2px] w-8 shrink-0"
                style={{ color: K.grey }}
              >
                And
              </span>
            )}
            {i === 0 && <span className="w-8 shrink-0" />}
            <Field label={f} w="94px" />
            <Op>{o}</Op>
            <Field label={v} w="76px" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <KFrame label="Five conditions, two groups">
      <Scroll min={480}>
        <div className="space-y-3">
          {group("Group 1", "Institutional in Germany", [
            ["Jurisdiction", "=", "DE"],
            ["Doc type", "=", "Institutional"],
            ["AUM", ">", "€100m"],
          ])}

          <div className="flex items-center gap-3">
            <span className="h-px flex-1" style={{ background: K.grey200 }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[1.6px] rounded px-2.5 py-1"
              style={{ background: K.ink, color: K.mint }}
            >
              Or
            </span>
            <span className="h-px flex-1" style={{ background: K.grey200 }} />
          </div>

          {group("Group 2", "Retail in Italy", [
            ["Jurisdiction", "=", "IT"],
            ["Doc type", "=", "Retail"],
          ])}
        </div>

        <div
          className="rounded-lg border px-4 py-4 mt-4"
          style={{ borderColor: "rgba(3,66,228,0.20)", background: "rgba(217,227,251,0.28)" }}
        >
          <div
            className="text-[9.5px] font-bold uppercase tracking-[1.4px] mb-2.5"
            style={{ color: K.blue }}
          >
            Plain English
          </div>
          <p className="text-[13.5px] leading-[1.6]" style={{ color: K.ink }}>
            EU disclaimer will appear when any of the following are true:
            <br />
            <strong>Jurisdiction is Germany</strong>, the document is for{" "}
            <strong>Institutional</strong> investors, and <strong>AUM is over €100m</strong>.
            <br />
            <span className="font-bold" style={{ color: K.blue }}>
              OR
            </span>{" "}
            <strong>Jurisdiction is Italy</strong> and the document is for{" "}
            <strong>Retail</strong> investors.
          </p>
          <p className="text-[11px] mt-3" style={{ color: K.muted }}>
            Reads as (A AND B AND C) OR (D AND E). Updates as you edit.
          </p>
        </div>
      </Scroll>
    </KFrame>
  );
}

/* ── 7. Debug trace ───────────────────────────────────
   After the fact. Which condition failed, against what the data
   actually said at render time.
*/
export function DebugTrace() {
  return (
    <KFrame label="Why was this section hidden?">
      <div
        className="rounded-lg border px-4 py-3 mb-4 flex flex-wrap items-center gap-x-3 gap-y-1"
        style={{ borderColor: "rgba(3,66,228,0.20)", background: "rgba(217,227,251,0.28)" }}
      >
        <span className="text-[12.5px] font-bold" style={{ color: K.ink }}>
          Risk warning
        </span>
        <span className="text-[11px]" style={{ color: K.muted }}>
          Section 06 · Run #14237 · 16 May 09:24
        </span>
        <span
          className="text-[9.5px] font-bold uppercase tracking-[1.2px] rounded-full px-2.5 py-1 ml-auto"
          style={{ background: K.ink, color: "#fff" }}
        >
          Hidden
        </span>
      </div>

      <div className="rounded-lg border overflow-hidden" style={{ borderColor: K.grey200 }}>
        <div className="px-4 py-2.5" style={{ background: K.grey100 }}>
          <span className="text-[9.5px] font-bold uppercase tracking-[1.4px]" style={{ color: K.grey }}>
            Then
          </span>
          <span className="text-[12px] ml-3" style={{ color: K.ink }}>
            Show Risk warning
          </span>
        </div>

        {[
          { cond: "Volatility = High", actual: "Actual: High", pass: true },
          { cond: "Doc type ≠ Institutional", actual: "Actual: Institutional", pass: false },
        ].map((r, i) => (
          <div
            key={r.cond}
            className="flex items-start gap-3 px-4 py-3.5"
            style={{ borderTop: `1px solid ${K.grey200}` }}
          >
            <span
              className="w-5 h-5 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5"
              style={
                r.pass
                  ? { background: "rgba(3,66,228,0.10)", color: K.blue }
                  : { background: "#FDECEC", color: "#B42318" }
              }
              aria-hidden="true"
            >
              {r.pass ? "✓" : "✕"}
            </span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold" style={{ color: K.ink }}>
                {i > 0 && (
                  <span
                    className="text-[9px] font-bold uppercase tracking-[1.2px] mr-2"
                    style={{ color: K.grey }}
                  >
                    And
                  </span>
                )}
                {r.cond}
              </div>
              <div className="text-[11.5px] mt-1" style={{ color: r.pass ? K.muted : "#B42318" }}>
                {r.actual} · {r.pass ? "matched" : "condition not met"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11.5px] leading-relaxed mt-3" style={{ color: K.muted }}>
        Both conditions must pass for the section to show. The second one did not, so the
        section never rendered.
      </p>
    </KFrame>
  );
}

/* ── 8. Status is not health ──────────────────────────
   Two columns, because they answer different questions.
*/
const RULES = [
  { name: "Show risk warning for high-vol funds", status: "Active", used: "3 templates", health: "Matched", ok: true },
  { name: "Hide ESG section for non-ESG funds", status: "Active", used: "12 templates", health: "Field missing", ok: false },
  { name: "Performance commentary on underperformance", status: "Active", used: "8 templates", health: "Matched", ok: true },
  { name: "UCITS disclaimer for EU jurisdictions", status: "Draft", used: "Unattached", health: "Not tested", ok: null },
];

export function StatusVsHealth() {
  return (
    <KFrame label="Rules library">
      <Scroll min={560}>
        <div
          className="rounded-lg border px-3.5 py-2.5 mb-3.5 flex items-center gap-2.5"
          style={{ borderColor: "rgba(3,66,228,0.20)", background: "rgba(217,227,251,0.28)" }}
        >
          <span aria-hidden="true" style={{ color: K.blue }}>
            &#9888;
          </span>
          <span className="text-[11.5px]" style={{ color: K.ink }}>
            2 active rules reference fields no longer in the data dictionary.
          </span>
        </div>

        <div className="grid grid-cols-[1fr_84px_92px_104px] gap-3 px-3 pb-2.5">
          {["Rule", "Status", "Used in", "Health"].map((h) => (
            <span key={h} className="text-[9.5px] font-bold uppercase tracking-[1.3px]" style={{ color: K.grey }}>
              {h}
            </span>
          ))}
        </div>

        {RULES.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-[1fr_84px_92px_104px] gap-3 px-3 py-3 items-center"
            style={{ borderTop: `1px solid ${K.grey200}` }}
          >
            <span className="text-[12px] min-w-0" style={{ color: K.ink }}>
              {r.name}
            </span>
            <span
              className="text-[9.5px] font-bold uppercase tracking-[1.1px] rounded-full px-2 py-1 text-center"
              style={
                r.status === "Active"
                  ? { background: "rgba(3,66,228,0.08)", color: K.blue }
                  : { background: K.grey100, color: K.muted }
              }
            >
              {r.status}
            </span>
            <span className="text-[11px]" style={{ color: K.muted }}>
              {r.used}
            </span>
            <span
              className="text-[11px] font-semibold"
              style={{ color: r.ok === false ? "#B42318" : r.ok === null ? K.grey : K.ink }}
            >
              {r.ok === true ? "✓ " : r.ok === false ? "⚠ " : ""}
              {r.health}
            </span>
          </div>
        ))}

        <p className="text-[11.5px] leading-relaxed mt-4" style={{ color: K.muted }}>
          Row two is the case that matters. The rule is <strong>Active</strong>, so someone
          believes it is working, but its field no longer exists. Merge these two columns and
          that row looks fine.
        </p>
      </Scroll>
    </KFrame>
  );
}

/* ── 9. The nested groups decision ────────────────────
   Three options, one recommendation, and what each costs.
*/
const OPTIONS = [
  {
    tag: "Alternative",
    name: "Always visible",
    when: "From the moment the builder opens.",
    pros: ["Most discoverable", "No mode shifts"],
    cons: ["Clutters the simple case", "Implies nesting is normal"],
    state: "alt" as const,
  },
  {
    tag: "Recommended",
    name: "Deferred until needed",
    when: "After the third condition is added.",
    pros: ["Beginner has a clean canvas", "Advanced earns the affordance", "No mode toggle"],
    cons: ["Discoverable only by use", "Needs help text"],
    state: "rec" as const,
  },
  {
    tag: "Rejected",
    name: "Behind an Advanced toggle",
    when: "Only once the user flips a mode switch.",
    pros: ["Clear separation of intent"],
    cons: ["Users self-declare as advanced without context", "Two interfaces to maintain"],
    state: "rej" as const,
  },
];

export function NestedGroupsDecision() {
  return (
    <div className="font-kurtosys grid md:grid-cols-3 gap-4">
      {OPTIONS.map((o) => {
        const rec = o.state === "rec";
        return (
          <div
            key={o.name}
            className="relative rounded-xl border bg-white p-5 flex flex-col"
            style={{
              borderColor: rec ? "rgba(3,66,228,0.35)" : K.grey200,
              boxShadow: rec
                ? "0 15px 30px rgba(58,64,81,0.12)"
                : "0 12.5px 10px rgba(0,0,0,0.012)",
            }}
          >
            {rec && (
              <span className="absolute top-0 left-5 right-5 h-[4px] rounded-b" style={{ background: K.mint }} />
            )}
            <span
              className="text-[9px] font-bold uppercase tracking-[1.3px] mb-2.5"
              style={{
                color: rec ? K.blue : o.state === "rej" ? K.grey : K.muted,
              }}
            >
              {o.tag}
            </span>
            <p
              className="text-[16px] font-bold mb-2 leading-snug"
              style={{ color: K.ink, textDecoration: o.state === "rej" ? "line-through" : "none" }}
            >
              {o.name}
            </p>
            <p className="text-[11.5px] leading-relaxed mb-4" style={{ color: K.muted }}>
              {o.when}
            </p>

            <div className="mt-auto space-y-2.5">
              {o.pros.map((p) => (
                <div key={p} className="flex gap-2 text-[11px]" style={{ color: K.ink }}>
                  <span style={{ color: K.blue }} aria-hidden="true">
                    +
                  </span>
                  {p}
                </div>
              ))}
              {o.cons.map((c) => (
                <div key={c} className="flex gap-2 text-[11px]" style={{ color: K.muted }}>
                  <span style={{ color: K.grey }} aria-hidden="true">
                    &minus;
                  </span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
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
