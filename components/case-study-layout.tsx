"use client";

import { Project } from "@/lib/projects";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section,
  Prose, Findings, Metrics, Outcome, Reflection, LiveLink, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

/* Generic fallback. Every project currently has a bespoke study, so this
   only renders if one is added to the data without a matching component. */
export function CaseStudyLayout({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero project={project} />
      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Prose>
            <p>{project.context}</p>
          </Prose>
        </Section>

        {project.outcomes.length > 0 && (
          <Section label="Outcomes">
            <Metrics
              items={project.outcomes.slice(0, 4).map((o, i) => ({
                value: String(i + 1).padStart(2, "0"),
                label: o,
              }))}
            />
          </Section>
        )}

        <Section label="Goals" title="What the work had to achieve">
          <Findings label="Objectives" items={project.goals} />
        </Section>

        {project.research && (
          <Section label="Research" title="How I approached it">
            <Prose>
              <p>{project.research}</p>
            </Prose>
          </Section>
        )}

        {project.insights.length > 0 && (
          <Section label="Findings" title="What surfaced">
            <Findings label="Insights" items={project.insights} />
          </Section>
        )}

        {project.iaFlows && (
          <Section label="Architecture" title="How it was structured">
            <Prose>
              <p>{project.iaFlows}</p>
            </Prose>
          </Section>
        )}

        {(project.designExploration || project.finalUI) && (
          <Section label="Design" title="What was made">
            <Prose>
              {project.designExploration && <p>{project.designExploration}</p>}
              {project.finalUI && <p>{project.finalUI}</p>}
            </Prose>
          </Section>
        )}

        {project.testing && (
          <Section label="Testing" title="How it was validated">
            <Prose>
              <p>{project.testing}</p>
            </Prose>
          </Section>
        )}

        <Outcome>
          <p>{project.outcome}</p>
        </Outcome>

        <Reflection items={project.learnings} />

        {project.externalLink && (
          <div className="border-t border-line pt-12">
            <p className="t-label text-ink/75 mb-6">Production site</p>
            <LiveLink href={project.externalLink} />
          </div>
        )}
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
