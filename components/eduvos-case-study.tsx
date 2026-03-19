"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { LogoMark } from "@/components/logo-mark";

interface EduvosCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const formativeExercises = [
  {
    week: "Week 1",
    title: "Research and Usability Audit",
    objective: "Identify the non-profit and evaluate its current website.",
    instructions: [
      "Research and select a non-profit organisation with a poorly designed website.",
      "Conduct a usability audit to document pain points, user interaction issues, and areas for improvement.",
    ],
    deliverable: "A one-page report detailing the current state of the website and your audit findings.",
    tools: "Word/Google Docs, screenshots of the existing website.",
  },
  {
    week: "Week 2",
    title: "User Persona Development",
    objective: "Create detailed user personas to guide your design.",
    instructions: [
      "Develop 2 user personas representing the target audience of the non-profit.",
      "Include key demographics, goals, frustrations, and user needs that align with the non-profit's mission.",
    ],
    deliverable: "A user persona document with detailed profiles and visual aids.",
    tools: "Figma or Adobe Illustrator.",
  },
  {
    week: "Week 3",
    title: "Sitemap and Wireframes",
    objective: "Plan the website structure and design low-fidelity wireframes.",
    instructions: [
      "Create a sitemap for the revamped website to ensure clear navigation.",
      "Design low-fidelity wireframes for key pages: Home, About, Services, Contact.",
    ],
    deliverable: "A sitemap diagram and low-fidelity wireframes for desktop and mobile.",
    tools: "Figma.",
  },
  {
    week: "Week 4",
    title: "Mid-Fidelity Prototyping",
    objective: "Develop mid-fidelity prototypes that reflect your design and usability findings.",
    instructions: [
      "Create a mid-fidelity prototype in Figma, addressing layout, navigation, and user interactions.",
      "Design for both desktop (1440px) and mobile (iPhone 11 Pro Max, 414px).",
    ],
    deliverable: "Mid-fidelity prototype of key pages in desktop and mobile layouts.",
    tools: "Figma.",
  },
  {
    week: "Week 5",
    title: "Platform Research and Prototype Refinement",
    objective: "Research and recommend a suitable platform: WordPress.org or Webflow.",
    instructions: [
      "Compare WordPress.org and Webflow to determine which is better suited for the non-profit's needs.",
      "Refine your prototype based on peer or mentor feedback.",
    ],
    deliverable: "A platform recommendation report with pros and cons. An updated prototype.",
    tools: "Word/Google Docs, Figma.",
  },
  {
    week: "Week 6",
    title: "Final Prototype and Documentation",
    objective: "Prepare your prototype for usability testing and final submission.",
    instructions: [
      "Finalise your mid-fidelity prototype, ensuring consistency with the non-profit's brand identity.",
      "Include all necessary annotations and links to make it user-friendly.",
      "Prepare for usability testing by ensuring all key user journeys are clear.",
    ],
    deliverable: "Final mid-fidelity prototype with detailed documentation.",
    tools: "Figma.",
  },
];

const summativeExercises = [
  {
    week: "Week 7",
    title: "Usability Testing",
    objective: "Test your prototype with real users and gather feedback.",
    instructions: [
      "Conduct usability testing with 1–2 users using your mid-fidelity prototype.",
      "Record and document feedback, focusing on usability issues, pain points, and suggested improvements.",
    ],
    deliverable: "Usability test report documenting key feedback and areas of improvement.",
    tools: "Figma, Word/Google Docs.",
  },
  {
    week: "Week 8",
    title: "Final Presentation",
    objective: "Present your project from start to finish.",
    instructions: [
      "Compile your entire process into a final presentation, showcasing research, personas, prototypes, usability testing, and final design.",
      "Ensure your presentation highlights improvements made based on user feedback.",
    ],
    deliverable: "A live presentation and a PDF slide deck showcasing the project and its deliverables.",
    tools: "PowerPoint or Google Slides, Figma or Adobe InDesign.",
  },
];

export function EduvosCaseStudy({ project, nextProject, prevProject }: EduvosCaseStudyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/65 hover:text-[#F0531C] transition-colors duration-200 mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-foreground/58">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 max-w-2xl">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-14">
            {[
              { label: "Role", value: project.role },
              { label: "Business", value: "Eduvos" },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.slice(0, 3).join(", ") },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              } ${
                i === 2 || i === 3 ? "border-t md:border-t-0" : ""
              }`}>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#E2F5EF]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-xs text-foreground/58 font-medium uppercase tracking-widest mb-6">Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.map((outcome, i) => (
              <p key={i} className="text-sm text-foreground/85 leading-relaxed">{outcome}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
            I started doing content writing and course creation at Eduvos in May 2024.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-5">
            I was tasked to merge and consolidate the UX and UI modules into the three-year Digital Design degree programme as a unified module.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-5">
            It involved evaluating the relevance of existing content, determining what to retain, discard, or introduce. This included crafting both formative and summative assessments, as well as developing lesson content through educational writing and design.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            I enjoyed this work as it challenged me to really think and assess what the most relevant things are to introduce into the learning path.
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">The challenge</h2>
          </div>
          <section className="bg-white rounded-lg p-8 md:p-10 mb-8">
            <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">What needed solving</p>
            <div className="space-y-5">
              {[
                "Existing modules treated UX and UI as separate, disconnected disciplines.",
                "Content was misaligned with current industry practice and tools.",
                "No unified learning path existed across the three-year programme.",
                "Assessment design required a clear framework of learning outcomes first.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Approach */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Approach</h2>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed mb-6">
            Structured the unified module so each exercise builds progressively toward the summative assessment. Clear learning objectives anchored every piece of content.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            Explored how to balance theory with practical application across six weeks of formative exercises. Each brief was designed to mirror real industry workflows, culminating in a live presentation and full portfolio submission.
          </p>
        </section>

        {/* Assessment — Learning Objective */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Formative assessment</h2>
          </div>

          <div className="bg-[#E2F5EF] rounded-lg p-8 md:p-10 mb-12">
            <p className="text-xs text-foreground/58 font-medium uppercase tracking-widest mb-4">Learning objective</p>
            <p className="text-base text-foreground/85 leading-relaxed">
              This brief aims to immerse students in the core principles of UI and UX design, applying them in a real-world scenario by revamping a non-profit organisation's website. Through a series of hands-on exercises, students will develop user personas, create mid-fidelity prototypes, and select the best platform for implementation. The project culminates in usability testing, ensuring the design enhances user interaction while staying true to the non-profit's mission and brand identity.
            </p>
          </div>

          {/* Brief summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-8">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Brief topic</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Identify an existing non-profit with a poorly designed website and revamp it using modern UI/UX principles. Includes personas, mid-fidelity prototype, usability testing, and a live presentation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Delivery requirements</p>
              <div className="space-y-3">
                {[
                  "Digital portfolio with all deliverables",
                  "Reflection document: research to final design",
                  "Prototype, screen recording, and usability test documentation",
                ].map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#09332C]/20 mt-[0.4rem] shrink-0" />
                    <p className="text-xs text-foreground/75 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formative Exercises */}
        <section className="mb-16">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Exercises — Weeks 1 to 6</p>
          <div className="space-y-4">
            {formativeExercises.map((ex, i) => (
              <div key={ex.week} className="bg-white rounded-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{ex.week}</span>
                  <span className="text-foreground/35">/</span>
                  <span className="text-xs text-foreground/58 font-medium uppercase tracking-widest">Exercise {i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{ex.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-6">{ex.objective}</p>
                <div className="space-y-3 mb-8">
                  {ex.instructions.map((ins) => (
                    <div key={ins} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                      <p className="text-sm text-foreground/80 leading-relaxed">{ins}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground/58 font-medium uppercase tracking-widest mb-2">Deliverable</p>
                    <p className="text-xs text-foreground/75 leading-relaxed">{ex.deliverable}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/58 font-medium uppercase tracking-widest mb-2">Tools</p>
                    <p className="text-xs text-foreground/75 leading-relaxed">{ex.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summative */}
        <section className="mb-24">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Summative assessment — Weeks 7 and 8</p>
          <div className="space-y-4">
            {summativeExercises.map((ex, i) => (
              <div key={ex.week} className="bg-[#E2F5EF] rounded-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{ex.week}</span>
                  <span className="text-[#09332C]/35">/</span>
                  <span className="text-xs text-[#09332C]/58 font-medium uppercase tracking-widest">Exercise {i + 7}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{ex.title}</h3>
                <p className="text-sm text-[#09332C]/70 leading-relaxed mb-6">{ex.objective}</p>
                <div className="space-y-3 mb-8">
                  {ex.instructions.map((ins) => (
                    <div key={ins} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/50 mt-[0.4rem] shrink-0" />
                      <p className="text-sm text-[#09332C]/80 leading-relaxed">{ins}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-[#09332C]/10">
                  <div>
                    <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">Deliverable</p>
                    <p className="text-xs text-[#09332C]/75 leading-relaxed">{ex.deliverable}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">Tools</p>
                    <p className="text-xs text-[#09332C]/75 leading-relaxed">{ex.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</p>
          <p className="text-base text-foreground/80 leading-relaxed">{project.outcome}</p>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Reflection</h2>
          </div>
          <div className="space-y-6">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Navigation */}
      <div>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Previous</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Next</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{nextProject.title}</p>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
