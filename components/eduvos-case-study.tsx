"use client";

import { Project } from "@/lib/projects";
import { ModuleMerge } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Compare, Pullquote, Outcome,
  Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const formativeExercises = [
  {
    week: "Week 1",
    title: "Research and usability audit",
    objective: "Identify the non-profit and evaluate its current website.",
    instructions: [
      "Research and select a non-profit organisation with a poorly designed website.",
      "Run a usability audit documenting pain points, interaction issues, and areas for improvement.",
    ],
    deliverable: "A one-page report on the current state of the website and the audit findings.",
    tools: "Word or Google Docs, screenshots of the existing site.",
  },
  {
    week: "Week 2",
    title: "User persona development",
    objective: "Create detailed user personas to guide the design.",
    instructions: [
      "Develop two user personas representing the target audience of the non-profit.",
      "Include demographics, goals, frustrations, and needs that align with the non-profit's mission.",
    ],
    deliverable: "A persona document with detailed profiles and visual aids.",
    tools: "Figma or Adobe Illustrator.",
  },
  {
    week: "Week 3",
    title: "Sitemap and wireframes",
    objective: "Plan the website structure and design low-fidelity wireframes.",
    instructions: [
      "Create a sitemap for the revamped website so navigation is clear.",
      "Design low-fidelity wireframes for Home, About, Services, and Contact.",
    ],
    deliverable: "A sitemap diagram and low-fidelity wireframes for desktop and mobile.",
    tools: "Figma.",
  },
  {
    week: "Week 4",
    title: "Mid-fidelity prototyping",
    objective: "Develop prototypes that reflect the design and the usability findings.",
    instructions: [
      "Create a mid-fidelity prototype in Figma addressing layout, navigation, and interactions.",
      "Design for desktop at 1440px and mobile at 414px, iPhone 11 Pro Max.",
    ],
    deliverable: "Mid-fidelity prototype of key pages in desktop and mobile layouts.",
    tools: "Figma.",
  },
  {
    week: "Week 5",
    title: "Platform research and refinement",
    objective: "Research and recommend a platform, WordPress.org or Webflow.",
    instructions: [
      "Compare WordPress.org and Webflow against the non-profit's needs.",
      "Refine the prototype based on peer or mentor feedback.",
    ],
    deliverable: "A platform recommendation report with pros and cons, and an updated prototype.",
    tools: "Word or Google Docs, Figma.",
  },
  {
    week: "Week 6",
    title: "Final prototype and documentation",
    objective: "Prepare the prototype for usability testing and final submission.",
    instructions: [
      "Finalise the mid-fidelity prototype, consistent with the non-profit's brand identity.",
      "Include annotations and links so it is usable by someone else.",
      "Make sure every key user journey is clear before testing.",
    ],
    deliverable: "Final mid-fidelity prototype with detailed documentation.",
    tools: "Figma.",
  },
];

const summativeExercises = [
  {
    week: "Week 7",
    title: "Usability testing",
    objective: "Test the prototype with real users and gather feedback.",
    instructions: [
      "Run usability testing with one or two users on the mid-fidelity prototype.",
      "Record and document feedback, focusing on usability issues, pain points, and suggested improvements.",
    ],
    deliverable: "A usability test report documenting key feedback and areas for improvement.",
    tools: "Figma, Word or Google Docs.",
  },
  {
    week: "Week 8",
    title: "Final presentation",
    objective: "Present the project from start to finish.",
    instructions: [
      "Compile the whole process into a presentation covering research, personas, prototypes, usability testing, and final design.",
      "Show which improvements came out of user feedback.",
    ],
    deliverable: "A live presentation and a PDF slide deck covering the project and its deliverables.",
    tools: "PowerPoint or Google Slides, Figma or Adobe InDesign.",
  },
];

function ExerciseCard({
  ex,
  index,
  summative,
}: {
  ex: (typeof formativeExercises)[number];
  index: number;
  summative?: boolean;
}) {
  return (
    <article
      className={`border border-line p-6 md:p-8 ${summative ? "bg-accent-wash" : "bg-surface"}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
        <span className={`t-label ${summative ? "text-accent" : "text-ink/75"}`}>{ex.week}</span>
        <span className="t-num text-xs text-ink/75">
          Exercise {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-xl font-bold text-ink tracking-[-0.015em] mb-2">{ex.title}</h3>
      <p className="text-[15px] text-ink/82 leading-relaxed mb-7">{ex.objective}</p>

      <p className="t-label text-ink/75 mb-3">Instructions</p>
      <ul className="space-y-2.5 mb-7">
        {ex.instructions.map((i) => (
          <li key={i} className="text-[14px] text-ink/82 leading-relaxed flex gap-3">
            <span className="mt-[8px] w-1 h-1 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>

      <dl className="grid sm:grid-cols-2 gap-6 pt-5 border-t border-line">
        <div>
          <dt className="t-label text-ink/75 mb-2">Deliverable</dt>
          <dd className="text-[14px] text-ink/82 leading-relaxed">{ex.deliverable}</dd>
        </div>
        <div>
          <dt className="t-label text-ink/75 mb-2">Tools</dt>
          <dd className="text-[14px] text-ink/82 leading-relaxed">{ex.tools}</dd>
        </div>
      </dl>
    </article>
  );
}

export function EduvosCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Content Writer" },
          { label: "Institution", value: "Eduvos" },
          { label: "Since", value: "May 2024" },
          { label: "Programme", value: "Digital Design, three years" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            The degree taught UX and UI as separate modules. Students learned to research
            in one place and to make things look right in another, then had to join them
            up themselves.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                I was tasked with merging the two into a single unified module. That meant
                evaluating the relevance of everything already there and deciding what to
                retain, discard, or introduce, then writing the formative and summative
                assessments and the lesson content around it.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="The merge"
          title="What survives, and what it builds toward"
          intro="Every piece that stays has to earn its place against the assessment at the end. Otherwise it is there because it always was."
        >
          <Figure caption="Two modules evaluated into one, with every exercise pointing at the summative">
            <ModuleMerge />
          </Figure>
        </Section>

        <Section>
          <Pullquote>
            Curriculum design works like UX. Clarity and sequence matter, and industry
            relevance decides what goes in.
          </Pullquote>
        </Section>

        <Section
          label="The brief"
          title="Revamp a real non-profit website"
          intro="Students apply the core principles of UI and UX design to a real scenario. They build personas, make mid-fidelity prototypes, and choose the platform to build on. It ends in usability testing, so the design has to improve the interaction while staying true to the non-profit's mission and brand."
        >
          <Compare
            before={{
              label: "Brief topic",
              body: "Identify an existing non-profit with a poorly designed website and revamp it using modern UI and UX principles. Personas, mid-fidelity prototype, usability testing, and a live presentation.",
            }}
            after={{
              label: "Delivery requirements",
              body: "What has to arrive at the end of week eight.",
              notes: [
                "Digital portfolio with all deliverables",
                "Reflection document covering research through to final design",
                "Prototype, screen recording, and usability test documentation",
              ],
            }}
          />
        </Section>

        <Section
          label="Weeks 1 to 6"
          title="Formative exercises"
          intro="Each week produces one artefact the following week depends on. Nothing here is practice for its own sake."
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {formativeExercises.map((ex, i) => (
              <ExerciseCard key={ex.week} ex={ex} index={i + 1} />
            ))}
          </div>
        </Section>

        <Section
          label="Weeks 7 and 8"
          title="Summative assessment"
          intro="The six formative weeks exist to make these two possible. By this point students are testing something they built from research they ran themselves."
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {summativeExercises.map((ex, i) => (
              <ExerciseCard key={ex.week} ex={ex} index={i + 7} summative />
            ))}
          </div>
        </Section>

        <Section label="Findings" title="What the evaluation surfaced">
          <Findings label="Insights" items={project.insights} />
        </Section>

        <Outcome>
          <p>
            The unified UX and UI module was delivered with formative and summative
            assessments, lesson plans, and practical briefs. I enjoyed this work because it
            forced me to decide what is actually worth putting in a learning path.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
