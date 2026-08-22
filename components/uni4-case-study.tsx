"use client";

import { Project } from "@/lib/projects";
import { BrandConsolidation } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Compare, Steps, Pullquote,
  Outcome, Reflection, LiveLink, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function Uni4CaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Visual Team Lead & UX Designer" },
          { label: "Client", value: "UNi4 Online" },
          { label: "Period", value: "May 2021 to Aug 2024" },
          { label: "Team", value: "Junior designers, learning designers, PM" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Two problems arrived together. The design team was working in isolation, and
            several education brands needed to live on one platform.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                They turned out to be the same problem at different scales. Designers without
                shared visibility produce inconsistent output, and brands without shared
                patterns produce a platform users have to relearn on every hop.
              </p>
            </Prose>
          </div>
        </Section>

        <Section label="Two tracks" title="Team and platform, run in parallel" wide>
          <Compare
            before={{
              label: "Track 01 · Team leadership",
              title: "Designers working in isolation",
              body: "Output quality was inconsistent and KPIs were being missed.",
              notes: [
                "No shared visibility across projects",
                "Introduced regular check-ins, shared workflows, and Kanban-based tracking",
                "Team productivity increased significantly and KPI achievement became consistent",
              ],
            }}
            after={{
              label: "Track 02 · Platform design",
              title: "Several brands, one platform",
              body: "Users needed to move between brands without losing context.",
              notes: [
                "Designed a unified information architecture",
                "Balanced brand identity against platform consistency",
                "Delivered a cohesive experience across all brands under one roof",
              ],
            }}
          />
        </Section>

        <Section
          label="The platform"
          title="Shared where it helps, distinct where it matters"
          intro="Consolidation fails when it flattens everything. Navigation, patterns, and content structure are shared. Brand identity stays where a prospective student is deciding which institution they are choosing."
        >
          <Figure caption="Four separate sites becoming one platform without dissolving the brands">
            <BrandConsolidation />
          </Figure>
        </Section>

        <Section label="Process" title="What I did">
          <Steps
            items={[
              { title: "Team process audit", body: "Analysed existing workflows and interviewed designers individually about friction and morale. Lack of shared visibility was the core problem." },
              { title: "Kanban implementation", body: "A shared board, weekly check-ins, and clear task ownership. Output quality improved and missed deadlines dropped significantly." },
              { title: "Competitor analysis", body: "Studied multi-brand education aggregators globally for navigation patterns and IA approaches to consolidating distinct brands." },
              { title: "Information architecture", body: "Designed the IA for cross-brand navigation with each brand's identity intact, on unified patterns built to flex." },
              { title: "Platform design", body: "Delivered the aggregator design. Stakeholders across all brands reviewed and signed off." },
            ]}
          />
        </Section>

        <Section>
          <Pullquote>
            Leadership means balancing individual needs against team goals. The process change
            did more for output quality than any individual design decision I made that year.
          </Pullquote>
        </Section>

        <Section label="Findings" title="What surfaced across both tracks">
          <Findings label="Insights" items={project.insights} />
        </Section>

        <Outcome>
          <p>
            Team productivity increased significantly, KPIs were consistently met, and the
            aggregator platform received positive feedback from stakeholders.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />

        {project.externalLink && (
          <div className="border-t border-line pt-12">
            <p className="t-label text-ink/40 mb-3">Production site</p>
            <p className="text-[16px] text-ink/70 mb-6 measure">
              The aggregator platform, live.
            </p>
            <LiveLink href={project.externalLink} label="Open UNi4 Online" />
          </div>
        )}
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
