"use client";

import { Project } from "@/lib/projects";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Pullquote, Outcome, Reflection, CaseNav,
} from "@/components/case/parts";
import {
  PlatformMap, EcosystemFlow, TemplateHierarchy, BuilderDrawer,
  PlainEnglishEcho, StressTest, DebugTrace, StatusVsHealth,
  NestedGroupsDecision, LeftOut,
} from "@/components/case/kurtosys-ui";

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
                That sounds administrative until you consider what a section is. A risk
                warning. An ESG disclosure. A jurisdiction-specific disclaimer. Get the rule
                wrong and a regulatory disclosure goes missing from a document that has
                already reached an investor.
              </p>
              <p>
                So the logic has to be powerful enough to express real regulatory conditions,
                and legible enough that the person configuring it can be certain what they
                have built. Those two requirements pull against each other. That tension is
                the whole design problem.
              </p>
            </Prose>
          </div>
        </Section>

        {/* ── Process: understand the system first ── */}
        <Section
          label="Process"
          title="Before designing screens, I needed to understand the system"
          intro="Three passes before any interface. Where the feature belongs, how information moves through the platform, and how a document is actually put together."
        >
          <Figure caption="Rule Builder sits inside the Documents module, next to Templates, Production Centre and audit. Not on its own.">
            <PlatformMap />
          </Figure>
        </Section>

        <Section
          title="Data comes in, rules shape the report, outputs go out"
          intro="Rules are not a feature bolted onto a document editor. They sit at the exact point where incoming data decides what a reader ends up seeing."
        >
          <Figure caption="The rules layer sits between the systems that supply data and every format the report is delivered in.">
            <EcosystemFlow />
          </Figure>
        </Section>

        <Section
          title="Only some sections are a rule's business"
          intro="Zooming into a single template made the scope of the feature concrete. Most sections always appear. A small number are conditional, and those are the only ones a rule ever touches."
        >
          <Figure caption="Cover and disclaimers are constants. Risk warning and ESG highlights are where rules do their work.">
            <TemplateHierarchy />
          </Figure>
        </Section>

        <Pullquote>
          Mapping the system first is what made the next decisions defensible rather than
          stylistic.
        </Pullquote>

        {/* ── Three surfaces ──────────────────────── */}
        <Section
          label="Where to design"
          title="Three surfaces, three states of mind"
          intro="A rule is not encountered once. It is written, later audited, and eventually questioned after a report has already gone out. Each of those moments needs a different interface."
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

        {/* ── The design ──────────────────────────── */}
        <Section
          label="The design"
          title="Lock what the system already knows"
          intro="The builder opens from inside a template, on a specific section. So the THEN clause is already decided. Asking the user to restate it would be asking them to repeat something they have just done."
        >
          <Figure caption="THEN is locked to the section you came from. The only thing left to define is the condition.">
            <BuilderDrawer />
          </Figure>
        </Section>

        <Section
          title="Say the rule back in words"
          intro="Fields, operators and values are precise and easy to misread. So every rule is echoed back in plain English, and that echo updates as the rule is edited."
        >
          <Figure caption="The same readback component appears in the builder, the stress test and the debug trace.">
            <PlainEnglishEcho />
          </Figure>
        </Section>

        <Section
          title="Then try to break it"
          intro="A readback that only works on simple rules is decoration. So I built the most hostile realistic case I could: a five-condition EU distribution rule spanning two groups joined by OR."
        >
          <Figure caption="Five conditions, two groups. The echo resolves to (A AND B AND C) OR (D AND E) and stays readable.">
            <StressTest />
          </Figure>
        </Section>

        <Section
          title="Answer the question asked after the fact"
          intro="The hardest moment is not authoring a rule. It is a month later, when a section is missing from a delivered report and nobody can say why."
        >
          <Figure caption="The trace shows each condition against the data as it actually was at render time, and which one failed.">
            <DebugTrace />
          </Figure>
        </Section>

        {/* ── Systems decisions ───────────────────── */}
        <Section
          label="Systems thinking"
          title="Three calls that reach past this feature"
          intro="The decisions worth defending were not about the screens. They were about the model underneath, and each one generalises to other parts of the platform."
        />

        <Section
          title="Status is not health"
          intro="Status is intent: Active, Draft, Archived. Health is reality: does this rule still run against the data that exists today? They are different questions and they need different columns."
        >
          <Figure caption="An Active rule whose field no longer exists is the urgent case. One column would hide it.">
            <StatusVsHealth />
          </Figure>
        </Section>

        <Section
          title="Complexity earned, not toggled"
          intro="Nested groups are genuinely advanced, and most rules never need them. The question was not whether to support nesting but when to admit it exists."
        >
          <div className="mt-2">
            <NestedGroupsDecision />
          </div>
          <p className="t-caption mt-3">
            Three options compared. The recommendation surfaces the group affordance once a
            rule reaches three conditions, so the user earns it by using complexity.
          </p>
        </Section>

        <Findings
          label="What the mapping surfaced"
          items={project.insights}
        />

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
              nested-groups decision, and the empty, bulk and overflow states that finish a
              management surface.
            </p>
          </div>
        </Outcome>

        {/* ── What I left out ─────────────────────── */}
        <Section
          label="Scope"
          title="What I deliberately left out"
          intro="These are choices, not gaps. Each one merits its own thinking, and naming them is part of the design rather than an admission about it."
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
