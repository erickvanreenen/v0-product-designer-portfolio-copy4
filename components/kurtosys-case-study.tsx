"use client";

import { Project } from "@/lib/projects";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Pullquote, Outcome, Reflection, CaseNav,
} from "@/components/case/parts";
import {
  PlatformMap, EcosystemFlow, DocumentSections, TemplateHierarchy, LeftOut,
} from "@/components/case/kurtosys-ui";
import { KurtosysScreen } from "@/components/case/kurtosys-screen";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const surfaces = [
  {
    letter: "A",
    name: "Rules Library",
    state: "Auditing",
    body: "Managing rules across the workspace. Which are live, where they are used, and which have quietly stopped working.",
  },
  {
    letter: "B",
    name: "Inline Template Editor",
    state: "Authoring",
    body: "Writing a rule while editing the template it belongs to, with the section already in hand.",
  },
  {
    letter: "C",
    name: "Production Preview",
    state: "Debugging",
    body: "A report has gone out and a section is missing. Working backwards from the render to the reason.",
  },
];

/* The drill down, stated as four levels so the diagrams below read as one
   descent rather than four unrelated pictures. */
const DESCENT = [
  { level: "Platform", detail: "Kurtosys Cloud, five modules" },
  { level: "Module", detail: "Documents, where reports are automated" },
  { level: "Document", detail: "A sequence of sections" },
  { level: "Section", detail: "Two of them are rule touchpoints" },
];

export function KurtosysCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Client", value: "Kurtosys" },
          { label: "Year", value: "May 2026" },
          { label: "Tools", value: "Figma, Claude, HTML" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        {/* ── Context ─────────────────────────────── */}
        <Section>
          <Lead>
            Kurtosys automates investor reporting for asset managers. Inside its Documents
            module, rules decide which sections of a fund report appear, for which funds,
            for which audiences.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                That sounds administrative until you look at what a section is. A risk
                warning. An ESG disclosure. A jurisdiction-specific disclaimer. Get the rule
                wrong and a regulatory disclosure goes missing from a document that has
                already reached an investor.
              </p>
              <p>
                So the logic has to handle real regulatory conditions, and still be readable
                enough that whoever configures it knows what they have built. Those two pull
                against each other.
              </p>
            </Prose>
          </div>
        </Section>

        {/* ── The drill down ──────────────────────── */}
        <Section
          label="Process"
          title="Before designing screens, I needed to understand the system"
          intro="Four levels down, from the platform to the two sections a rule can actually touch. Each level narrows the next."
          wide
        >
          <ol className="grid sm:grid-cols-4 border-t border-line mb-12">
            {DESCENT.map((d, i) => (
              <li
                key={d.level}
                className={`py-5 sm:pr-5 ${i > 0 ? "sm:pl-5 sm:border-l border-line" : ""} border-b sm:border-b-0 border-line`}
              >
                <span className="t-num text-sm text-accent">0{i + 1}</span>
                <p className="text-[17px] font-bold text-ink mt-2">{d.level}</p>
                <p className="text-[14px] text-ink/60 leading-relaxed mt-1">{d.detail}</p>
              </li>
            ))}
          </ol>

          <Figure caption="Level one and two. Kurtosys Cloud has five modules. Rule Builder sits inside Documents, next to Templates, Production Centre and audit.">
            <PlatformMap />
          </Figure>
        </Section>

        <Section
          title="Data comes in, rules shape the report, outputs go out"
          intro="A sideways view before going further down. Rules sit between the data coming in and what a reader ends up seeing."
        >
          <Figure caption="The rules layer sits between the systems that supply data and every format the report is delivered in.">
            <EcosystemFlow />
          </Figure>
        </Section>

        <Section
          title="A document is a sequence, and only part of it is a rule's business"
          intro="Level three. Opening a single report shows where a rule can and cannot reach. Most sections are fixed. Two are the reason this feature exists."
        >
          <Figure caption="Level three and four. Risk warning and ESG highlights are the rule touchpoints. Everything else appears regardless.">
            <DocumentSections />
          </Figure>
        </Section>

        <Section
          title="Which becomes three states a section can be in"
          intro="The same document, as the template that generates it. Always, Optional, Conditional. Only the conditional rows can be touched by a rule."
        >
          <Figure caption="The template hierarchy. Conditional is the only state a rule controls.">
            <TemplateHierarchy />
          </Figure>
        </Section>

        <Pullquote>
          By the time I got to the screens, most of the decisions had already been made by the
          model underneath.
        </Pullquote>

        {/* ── Three surfaces ──────────────────────── */}
        <Section
          label="Where to design"
          title="Three surfaces, three states of mind"
          intro="A rule gets written once, audited later, and questioned after a report has gone out. Those are three different jobs."
          wide
        >
          <div className="grid sm:grid-cols-3 gap-5 mt-2">
            {surfaces.map((s) => (
              <div key={s.letter} className="border border-line bg-surface p-6 flex flex-col">
                <span className="t-num text-sm font-semibold text-accent mb-5">
                  {s.letter}
                </span>
                <h3 className="text-[19px] font-bold text-ink leading-snug mb-1.5">
                  {s.name}
                </h3>
                <p className="t-label text-ink/45 mb-4">{s.state}</p>
                <p className="text-[14px] text-ink/65 leading-relaxed mt-auto">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── The screens ─────────────────────────── */}
        <Section
          label="A · Authoring"
          title="Lock what the system already knows"
          intro="The builder opens from inside a template, on a specific section, so the THEN clause is already known. Asking someone to restate it would be asking them to repeat themselves. Underneath, the rule is echoed back in plain English as it is edited."
          wide
        >
          <KurtosysScreen
            screen="drawer"
            caption="The rule builder drawer, opened from the template editor. THEN is locked to the section you came from."
          />
        </Section>

        <Section
          label="B · Auditing"
          title="Rules as objects, not settings buried in templates"
          intro="Once rules are shared across templates they need somewhere to live. Status, usage, last edited and health in one table, so a broken rule shows up before it reaches a report."
          wide
        >
          <KurtosysScreen
            screen="library"
            caption="The rules library. Status and health are separate columns, for reasons covered further down."
          />
        </Section>

        <Section
          label="C · Debugging"
          title="Answer the question asked after the fact"
          intro="The harder moment is a month later, when a section is missing from a delivered report and nobody can say why. The trace shows each condition against the data as it was at render time."
          wide
        >
          <KurtosysScreen
            screen="debug"
            caption="Production debug. Volatility matched, doc type did not, so the section never rendered."
          />
        </Section>

        {/* ── Systems decisions ───────────────────── */}
        <Section
          label="Systems thinking"
          title="Three calls that reach past this feature"
          intro="Three decisions about the model underneath rather than the screens. Each one applies elsewhere in the platform."
          wide
        >
          <div className="mt-2">
            <Prose>
              <p>
                <strong>Status is not health.</strong> Status is intent: Active, Draft,
                Archived. Health is reality: does this rule still run against the data that
                exists today? An Active rule whose field no longer exists is the urgent case,
                and one combined column would hide it. This applies to any object with a
                publishing lifecycle.
              </p>
              <p>
                <strong>One readback, three contexts.</strong> The same plain-English echo
                appears in the builder, in the stress test and in the debug trace. The
                audience learns the pattern once and recognises it everywhere. Reusable in any
                form that produces a parseable rule.
              </p>
              <p>
                <strong>Complexity earned, not toggled.</strong> The group affordance appears
                after three conditions exist, rather than always or never. No Advanced mode,
                so there is no second interface to maintain.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          title="Proving the readback holds at scale"
          intro="An echo that only works on simple rules is not much use, so I tested it on the worst realistic case I could find. A five-condition EU distribution rule across two groups joined by OR."
          wide
        >
          <KurtosysScreen
            screen="stress"
            caption="Five conditions, two groups. The echo resolves to (A AND B AND C) OR (D AND E) and stays readable."
          />
        </Section>

        <Section
          title="When should nesting admit it exists?"
          intro="Most rules never need nested groups. The question was when to show the option, not whether to support it. Three options, compared on what each costs."
          wide
        >
          <KurtosysScreen
            screen="nested"
            caption="Option B recommended. The option appears once a rule reaches three conditions."
          />
        </Section>

        <Section
          title="The states that finish a management surface"
          intro="Empty, bulk selection and overflow. The states that decide whether the table holds up with real data in it."
          wide
        >
          <KurtosysScreen
            screen="states"
            caption="Library states. The empty state explains the concept and offers exactly one way in."
          />
        </Section>

        <Findings label="What the mapping surfaced" items={project.insights} />

        {/* ── Conclusion ──────────────────────────── */}
        <Outcome>
          <div className="space-y-5">
            <p>
              Five decisions carried the work. Rules are human-readable, simple by default
              with advanced available when it is needed, reusable from a central library,
              connected live to the data dictionary, and backed by version history and an
              audit trail.
            </p>
            <p>
              Six screens covered creation, management, debugging, behaviour at scale, the
              nested-groups decision, and the empty, bulk and overflow states.
            </p>
          </div>
        </Outcome>

        {/* ── What I left out ─────────────────────── */}
        <Section
          label="Scope"
          title="What I deliberately left out"
          intro="Each of these needs its own thinking, so I left them out rather than half-answer them."
          wide
        >
          <div className="mt-2">
            <LeftOut />
          </div>
        </Section>

        <Reflection items={project.learnings} />

        <CaseNav nextProject={nextProject} prevProject={prevProject} />
      </CaseBody>
    </CaseShell>
  );
}
