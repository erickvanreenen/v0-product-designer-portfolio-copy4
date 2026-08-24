"use client";

import { Project } from "@/lib/projects";
import { SimplificationPass } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Steps, Pullquote, Outcome,
  Reflection, LiveLink, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function EdtechCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Visual & Layout Designer" },
          { label: "Client", value: "Masterstart, Stellenbosch Business School" },
          { label: "Year", value: "2024" },
          { label: "Built in", value: "Articulate Rise" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            A learner meeting a systems model for the first time has no prior structure to
            hang it on. Every element you leave in is one they have to hold.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                I worked alongside a subject matter expert and a learning designer on a
                Business Systems Analysis course. The learning designer led content structure.
                My job was to support that structure visually, drawing infographic assets
                that made the conceptual models clear.
              </p>
              <p>
                Most of the work is deciding what to take out.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="The method"
          title="Simplify until the concept is visible, then stop"
          intro="An expert describes a model with every qualification intact, because that is what makes it correct. A learner needs the relationship first. The work is finding the reduction that stays true."
        >
          <Figure caption="From the expert's description to the learner-facing asset">
            <SimplificationPass />
          </Figure>
        </Section>

        <Section>
          <Pullquote>
            The models needed simplifying, not decorating.
          </Pullquote>
        </Section>

        <Section label="Approach" title="Four rules I worked to">
          <Steps
            items={[
              { title: "Infographic-led", body: "Complex BA models drawn as structured visuals rather than text walls." },
              { title: "Collaborative brief", body: "Iterated with the SME on accuracy, and with the learning designer on placement and pacing." },
              { title: "Native to Articulate Rise", body: "Designed inside Rise's constraints. It rewards visual restraint and hierarchy over embellishment." },
              { title: "Accessible by default", body: "Layouts built for all devices and learner needs from the start, not retrofitted." },
            ]}
          />
        </Section>

        <Section label="What the course covers">
          <div className="grid sm:grid-cols-2 border-t border-l border-line">
            {[
              { label: "Systems thinking", desc: "Conceptual models and stakeholder mapping made visual through infographic design." },
              { label: "Process flows", desc: "Business process analysis represented as accessible, structured visual assets." },
              { label: "Requirements mapping", desc: "Functional and non-functional requirements communicated through clear layout hierarchy." },
              { label: "Responsive layout", desc: "All content built in Articulate Rise for consistent delivery across devices." },
            ].map((item) => (
              <div key={item.label} className="border-r border-b border-line p-6 md:p-7 bg-surface">
                <h3 className="text-base font-bold text-ink mb-2.5">{item.label}</h3>
                <p className="text-[15px] text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {project.externalLink && (
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <LiveLink href={project.externalLink} label="Open the live course" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/articulate-logo.svg" alt="Articulate Rise" style={{ height: 13, width: "auto", opacity: 0.35 }} />
            </div>
          )}
        </Section>

        <Section label="Findings" title="What working with an SME taught me">
          <Findings label="Insights" items={project.insights} />
        </Section>

        <Outcome>
          <p>
            The course went live on Masterstart, built for Stellenbosch Business School.
            I enjoyed this one.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
