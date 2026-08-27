"use client";

import { Project } from "@/lib/projects";
import { ImageLightbox } from "@/components/image-lightbox";
import { Convergence } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Pullquote, Outcome, Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const components = [
  { name: "Topology", role: "How services relate to each other" },
  { name: "Playbooks", role: "Automated runbooks and their last result" },
  { name: "Catalog", role: "The inventory of what exists" },
  { name: "Health Checks", role: "Continuous probes against services" },
  { name: "Notifications", role: "Everything the platform wants to tell you" },
];

export function FlanksourceCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Client", value: "Flanksource" },
          { label: "Studio", value: "Nygaard Design" },
          { label: "Year", value: "2025" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Flanksource began as a Kubernetes consulting firm, so they had seen the same
            problem repeatedly. Teams had plenty of data and still could not tell what needed
            attention.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                Metrics dashboards, log tools, Git for config. Each fine on its own, none of
                them connected. Mission Control was built to tie them together, and the
                dashboard is where that has to be visible.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Domain first"
          title="Learning what the five things actually are"
          intro="I logged into the beta and worked through each component before drawing anything. I could not decide what should surface by default until I knew what each of these meant to the person on call."
        >
          <ol className="border-t border-line">
            {components.map((c, i) => (
              <li
                key={c.name}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-x-4 py-5 border-b border-line items-baseline"
              >
                <span className="t-num text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                  <span className="text-[17px] font-bold text-ink md:w-44 shrink-0">{c.name}</span>
                  <span className="text-[15px] text-ink/82 leading-relaxed">{c.role}</span>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          label="The move"
          title="Lift the decision, leave the depth"
          intro="Each tool stays as it is. The dashboard takes only the item from each that needs someone to act, and puts those four things on one screen in priority order."
        >
          <Figure caption="Five sources, one entry point. Failing health checks lead because they are the only row that implies something is wrong right now.">
            <Convergence />
          </Figure>
        </Section>

        <Section>
          <Pullquote>
            Engineers did not need more data. They needed to know which of the five places
            to open first.
          </Pullquote>
        </Section>

        <Section label="Findings" title="What the immersion surfaced">
          <Findings label="Four things that shaped the layout" items={project.insights} />
        </Section>

        <Section
          label="Design"
          title="Before and after"
          intro="Moving from wireframes to structural representations meant testing how much density the view could carry before it stopped being scannable."
        >
          <ImageLightbox
            cols={2}
            contain
            images={[
              {
                src: "/images/flanksource-before.svg",
                alt: "Original Mission Control dashboard layout",
                caption: "Before. Components accessible but separate, so status meant five visits.",
              },
              {
                src: "/images/flanksource-after.svg",
                alt: "Redesigned Mission Control dashboard",
                caption: "After. Last-run playbooks, new catalog insights, notifications, and failing checks in one view.",
              },
            ]}
          />
        </Section>

        <Outcome>
          <p>
            One entry point into system health instead of five separate views. Reviewed with
            the Flanksource product team, and iterated on density and hierarchy from their
            feedback.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
