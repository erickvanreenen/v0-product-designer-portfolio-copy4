"use client";

import { Project } from "@/lib/projects";
import { FilterDrift, TwoSearchStreams } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Compare, Pullquote, Outcome,
  Reflection, LiveLink, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const conditions = [
  { t: "Dev-first culture", b: "Low UX maturity across the organisation. Design entered the conversation after the technical decision was already made." },
  { t: "Accumulated UX debt", b: "Multiple designers came and went. Inconsistency was baked into the platform before I arrived." },
  { t: "Data availability, not user need", b: "What could be designed was set by which data existed on which system, and when." },
  { t: "Legacy M1 dependencies", b: "Magento 1 constraints define what is buildable on Magento 2 today, not in principle." },
];

export function FtnCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Lead UX/UI Designer" },
          { label: "Client", value: "Faithful to Nature" },
          { label: "Since", value: "September 2024" },
          { label: "Status", value: "Ongoing" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            One of South Africa&apos;s largest online wellness retailers, live and taking
            revenue, halfway through a platform migration that started in 2020.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                Rapid store expansion moved the platform into a full omnichannel environment
                while the Magento 1 to Magento 2 migration was still running. Multiple designers
                passed through. I joined as the lone lead UX/UI designer in September 2024.
              </p>
              <p>
                Nothing was broken enough to stop and fix. Years of dev-first decisions had
                accumulated into UX debt, and no designer had stayed long enough to work
                through it.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Conditions"
          title="What the work has to survive"
          intro="The constraints every design decision here gets measured against."
        >
          <div className="grid sm:grid-cols-2 border-t border-l border-line">
            {conditions.map((c) => (
              <div key={c.t} className="border-r border-b border-line p-6 md:p-7 bg-surface">
                <h3 className="text-base font-bold text-ink mb-2.5">{c.t}</h3>
                <p className="text-[15px] text-ink/82 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Pullquote>
            Most of the job is translating what users need into business outcomes and technical
            language at the same time.
          </Pullquote>
        </Section>

        <Section
          label="Shipped"
          title="One filtering system"
          intro="When I joined, filtering changed structure between category levels. L1 did not match L2, and L2 did not match L3. No shared logic, no shared pattern, so the user relearned navigation on every step down."
        >
          <Figure caption="Filtering before and after. The fix is one pattern applied at every level, not three good patterns.">
            <FilterDrift />
          </Figure>

          <div className="mt-14">
            <h3 className="t-h2 text-2xl text-ink mb-4">Two ways to search, one destination</h3>
            <p className="text-[16px] text-ink/82 leading-relaxed measure mb-8">
              Faithful to Nature sells on values as much as on product. The filtering system
              carries both entry points without splitting the catalogue in two.
            </p>
            <Figure caption="Values-led and product-led search converge on the same result set">
              <TwoSearchStreams />
            </Figure>
          </div>
        </Section>

        <Section
          label="In progress"
          title="Omnichannel collection"
          intro="Stores are opening quickly. The platform had to move past delivery-only so a customer can choose how they receive an order."
        >
          <Compare
            before={{
              label: "Existing",
              body: "Delivery, with two warehouse collection points.",
              notes: [
                "Economy delivery",
                "Express delivery, selected areas",
                "Pargo collection point",
                "FtN warehouse, Johannesburg",
                "FtN warehouse, Cape Town",
              ],
            }}
            after={{
              label: "Added",
              body: "Collection where the customer already is, and delivery when they choose.",
              notes: [
                "In-store collection across 17 locations and growing",
                "Scheduled delivery with date and timeslot",
              ],
            }}
          />

          <div className="mt-12">
            <p className="t-label text-ink/75 mb-6">What each option has to clear</p>
            <ol className="border-t border-line">
              {[
                { h: "Logistics", b: "What is executable given postcode, zone, and area parameters." },
                { h: "Data", b: "What is available now against what arrives in a staggered rollout." },
                { h: "Omnichannel", b: "Decisions have to account for the whole ecosystem, not the isolated feature." },
                { h: "M1 dependencies", b: "Legacy constraints define what is buildable on M2 today." },
              ].map((r, i) => (
                <li
                  key={r.h}
                  className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-x-4 py-5 border-b border-line"
                >
                  <span className="t-num text-sm text-accent pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div className="md:flex md:gap-6">
                    <span className="text-[16px] font-bold text-ink md:w-48 shrink-0">{r.h}</span>
                    <span className="text-[15px] text-ink/82 leading-relaxed">{r.b}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section label="Findings" title="What the platform taught me">
          <Findings label="Five things that hold across the work" items={project.insights} />
        </Section>

        <Outcome>
          <p>
            The filtering system shipped. Omnichannel collection and delivery are in active
            design. There is now a UX practice in a team that did not have one. Ongoing.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />

        {project.externalLink && (
          <div className="border-t border-line pt-12">
            <p className="t-label text-ink/75 mb-3">Production site</p>
            <p className="text-[16px] text-ink/82 mb-6 measure">
              The current live experience, including the filtering system.
            </p>
            <LiveLink href={project.externalLink} label="Open the live site" />
          </div>
        )}
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
