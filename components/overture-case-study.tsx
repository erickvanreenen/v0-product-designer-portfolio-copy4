"use client";

import { Project } from "@/lib/projects";
import { ImageLightbox } from "@/components/image-lightbox";
import { AdvancingLanes } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Metrics, Outcome, Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function OvertureCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "UX Designer" },
          { label: "Client", value: "Overture" },
          { label: "Timeline", value: "2 weeks UX, 2 weeks UI" },
          { label: "Partner", value: "Brent Nygaard, UI" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Advancing is the coordination phase before an event. Documentation moves between
            promoters, agents and artists, and every exchange has to land before the doors open.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                No single tool covered this workflow. The exchange lived in email threads,
                which meant the current version of anything was whatever the last person
                remembered to attach.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="The workflow"
          title="What passes between whom"
          intro="Mapping the handoffs first made it obvious what the app had to hold. It is not a document store. It is a sequence with a deadline."
        >
          <Figure caption="Advancing handoffs, promoter to agent to artist, against show day">
            <AdvancingLanes />
          </Figure>
        </Section>

        <Section
          label="Approach"
          title="Two weeks means scope is the design decision"
          intro="I benchmarked leading event platforms globally and mapped the journeys and deliverables across advancing. Two findings set the shape of the product."
        >
          <div className="grid md:grid-cols-2 border-t border-l border-line">
            {[
              {
                t: "No tool covers the full flow",
                b: "Existing platforms handle ticketing or scheduling. The advancing exchange itself sits between them, which is why it defaults to email.",
              },
              {
                t: "Speed matters more than feature depth",
                b: "Promoters are working to a fixed date. A tool that is thorough but slow loses to the inbox they already have open.",
              },
            ].map((c) => (
              <div key={c.t} className="border-r border-b border-line p-6 md:p-8 bg-surface">
                <h3 className="text-base font-bold text-ink mb-3">{c.t}</h3>
                <p className="text-[15px] text-ink/65 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Design" title="Wireframes to prototype">
          <ImageLightbox
            cols={2}
            contain
            images={[
              {
                src: "/images/overture-wireframes.svg",
                alt: "Overture wireframe screens covering the advancing workflow",
                caption: "Wireframes. Structure agreed before any visual decision.",
              },
              {
                src: "/images/overture-prototype.svg",
                alt: "Overture prototype screens",
                caption: "Prototype. UI by Brent Nygaard, built on the agreed structure.",
              },
            ]}
          />
        </Section>

        <Section label="Shipped">
          <Metrics
            items={[
              { value: "2 wks", label: "UX" },
              { value: "2 wks", label: "UI" },
              { value: "4 wks", label: "brief to sign-off", lead: true },
              { value: "1", label: "app for the whole flow" },
            ]}
          />
        </Section>

        <Outcome>
          <p>Final product signed off in four weeks.</p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
