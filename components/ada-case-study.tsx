"use client";

import { Project } from "@/lib/projects";
import { LearningSequence } from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section,
  Prose, Lead, Findings, Pullquote, Outcome, Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const lessonContent = [
  {
    module: "Lesson 01",
    title: "Introduction to UX Design",
    description: "Introducing the discipline and the people who build the web.",
    topics: [
      { label: "UX Designer", desc: "Researches user needs and designs solutions that solve real problems." },
      { label: "UI Designer", desc: "Focuses on visual design: colour, typography, layout, and component systems." },
      { label: "Front-End Developer", desc: "Builds interfaces using HTML, CSS, and JavaScript." },
      { label: "Back-End Developer", desc: "Manages servers, databases, and the logic behind the product." },
      { label: "Full Stack Developer", desc: "Covers both front-end and back-end across the full product stack." },
      { label: "Product Manager", desc: "Owns the product vision and aligns teams around delivery priorities." },
      { label: "Content Designer", desc: "Shapes the words, structure, and tone users interact with." },
      { label: "Copywriter", desc: "Writes marketing and interface copy that drives action." },
      { label: "SEO Specialist", desc: "Optimises content and structure for search engine visibility." },
      { label: "DTP Specialist", desc: "Handles layout and print-ready document production." },
    ],
  },
  {
    module: "Lesson 02",
    title: "Overview: Birth of UX",
    description: "How the field shifted from engineering-led to human-centred design.",
    topics: [
      { label: "1975: Altair 8800", desc: "Early personal computers were built for engineers. The user was not considered." },
      { label: "1984: Apple Macintosh", desc: "The GUI made computing accessible. Usability entered product thinking." },
      { label: "1988: Don Norman at Apple", desc: "Norman coined the term user experience to describe the full interaction a person has with a product." },
      { label: "1990s: UX as a discipline", desc: "The term entered industry vocabulary. Human-centred design became a formal practice." },
      { label: "Paradigm shift", desc: "Design moved from engineer and machine first to human and experience first. Products began to serve people rather than systems." },
    ],
  },
];

const assessments = [
  {
    code: "IUD-03",
    title: "App Redesign: lekkeslaap",
    level: "NQF Level 5",
    weighting: "60% of module mark",
    description:
      "Students redesign the lekkeslaap short-term rental app using a structured UX process. The brief is anchored to a realistic persona and requires research, journey mapping, and mobile-first wireframes.",
    persona: {
      name: "Sam",
      age: "28",
      role: "Marketing Manager",
      context: "Books weekend getaways and values a smooth, fast booking experience on mobile.",
    },
    deliverables: [
      "User research: survey or interview findings",
      "User journey map based on Sam's experience",
      "Mobile-first wireframes for the redesigned app",
      "Final presentation of process and decisions",
    ],
    marking: [
      { criterion: "Design process", weight: "35%" },
      { criterion: "Design", weight: "25%" },
      { criterion: "Wireframes", weight: "25%" },
      { criterion: "Presentation", weight: "15%" },
    ],
  },
  {
    code: "Module 3",
    title: "Affinity Diagram: Food Delivery App",
    level: "NQF Level 5",
    weighting: "60% of module mark",
    description:
      "Students benchmark two competing food delivery apps, run usability testing, and synthesise findings into an affinity diagram. The goal is to identify patterns and propose feature improvements.",
    apps: ["Uber Eats", "Mr D"],
    deliverables: [
      "Competitive benchmarking report, Uber Eats against Mr D",
      "Usability test protocol document",
      "Recorded usability test session",
      "Affinity diagram synthesising all findings",
      "Feature suggestions based on insights",
      "Final presentation",
    ],
    marking: [
      { criterion: "Benchmarking", weight: "15%" },
      { criterion: "Usability test protocol", weight: "10%" },
      { criterion: "Usability test recording", weight: "15%" },
      { criterion: "Affinity diagram", weight: "30%" },
      { criterion: "Feature suggestions", weight: "10%" },
      { criterion: "Presentation", weight: "20%" },
    ],
  },
];

export function AdaCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "Lecturer, freelance" },
          { label: "Institution", value: "Academy of Digital Arts" },
          { label: "Period", value: "Jan 2024 to Mar 2025" },
          { label: "Scope", value: "Two academic terms" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Teaching a discipline forces you to decide what it actually is. You cannot
            sequence a module until you know which idea the next one depends on.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                I delivered a UX design module on the Higher Certificate in Web Publishing and
                Interactive Media. The role covered in-person lesson delivery, slide content
                creation, and assessment design.
              </p>
              <p>
                I wrote two summative assessments around real apps and real research methods.
                Students went from competitive benchmarking and usability testing through to
                wireframes and final presentations.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Sequence"
          title="What a student meets, and in what order"
          intro="Each stage has to leave them holding something the next stage needs. Get the order wrong and the assessment becomes a test of improvisation."
        >
          <LearningSequence />
        </Section>

        <Section label="Lessons" title="Foundational content">
          <div className="space-y-14">
            {lessonContent.map((lesson) => (
              <div key={lesson.module}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <span className="t-label text-accent">{lesson.module}</span>
                  <h3 className="t-h2 text-2xl text-ink">{lesson.title}</h3>
                </div>
                <p className="text-[15px] text-ink/60 mb-8 measure">{lesson.description}</p>
                <dl className="grid sm:grid-cols-2 border-t border-l border-line">
                  {lesson.topics.map((t) => (
                    <div key={t.label} className="border-r border-b border-line p-5 bg-surface">
                      <dt className="text-[15px] font-bold text-ink">{t.label}</dt>
                      <dd className="text-[13px] text-ink/60 leading-relaxed mt-1.5">{t.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Pullquote>
            Students respond to authentic briefs. Hypothetical scenarios produce weaker work,
            so both assessments use real apps, real competitors, and real users.
          </Pullquote>
        </Section>

        <Section label="Assessment" title="Two summative briefs">
          <div className="space-y-16">
            {assessments.map((a) => (
              <article key={a.code} className="border border-line bg-surface p-6 md:p-9">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                  <span className="t-label text-accent">{a.code}</span>
                  <span className="t-label text-ink/40">{a.level}</span>
                  <span className="t-label text-ink/40">{a.weighting}</span>
                </div>

                <h3 className="t-h2 text-2xl text-ink mb-4">{a.title}</h3>
                <p className="text-[16px] text-ink/70 leading-relaxed measure mb-9">
                  {a.description}
                </p>

                {a.persona && (
                  <div className="bg-accent-wash p-5 mb-9">
                    <p className="t-label text-accent mb-4">The persona</p>
                    <div className="flex flex-wrap gap-x-10 gap-y-3 mb-4">
                      {[
                        ["Name", a.persona.name],
                        ["Age", a.persona.age],
                        ["Role", a.persona.role],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <p className="t-label text-ink/40 mb-1">{k}</p>
                          <p className="text-[15px] font-semibold text-ink">{v}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[14px] text-ink/65 leading-relaxed">{a.persona.context}</p>
                  </div>
                )}

                {a.apps && (
                  <div className="flex items-center gap-3 mb-9">
                    <span className="t-label text-ink/40">Apps benchmarked</span>
                    {a.apps.map((app) => (
                      <span key={app} className="t-label px-2.5 py-1 bg-ink/6 text-ink/70">
                        {app}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <p className="t-label text-ink/40 mb-5">Deliverables</p>
                    <ul className="space-y-3">
                      {a.deliverables.map((d) => (
                        <li key={d} className="text-[14px] text-ink/70 leading-relaxed flex gap-3">
                          <span className="mt-[8px] w-1 h-1 shrink-0 rounded-full bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="t-label text-ink/40 mb-5">Marking</p>
                    <dl>
                      {a.marking.map((m) => (
                        <div
                          key={m.criterion}
                          className="flex items-baseline justify-between gap-4 py-2.5 border-b border-line"
                        >
                          <dt className="text-[14px] text-ink/70">{m.criterion}</dt>
                          <dd className="t-num text-[14px] font-semibold text-ink">{m.weight}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section label="Findings" title="What teaching surfaced">
          <Findings label="Insights" items={project.insights} />
        </Section>

        <Outcome>
          <p>
            Two full academic terms of UX design content delivered. Students completed
            research-led assessments involving real apps, usability testing, and final
            presentations.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
