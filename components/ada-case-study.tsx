"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";
import { Project } from "@/lib/projects";
import { LogoMark } from "@/components/logo-mark";

interface AdaCaseStudyProps {
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
      { label: "1988: Don Norman at Apple", desc: "Norman coined the term 'user experience' to describe the full interaction a person has with a product." },
      { label: "1990s: UX as a discipline", desc: "The term entered industry vocabulary. Human-centred design became a formal practice." },
      { label: "Paradigm shift", desc: "Design moved from Engineer/Machine-first to Human/Experience-first. Products began to serve people rather than systems." },
    ],
  },
];

const module1Assessment = {
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
    { criterion: "Design Process", weight: "35%" },
    { criterion: "Design", weight: "25%" },
    { criterion: "Wireframes", weight: "25%" },
    { criterion: "Presentation", weight: "15%" },
  ],
};

const module3Assessment = {
  code: "Module 3",
  title: "Affinity Diagram: Food Delivery App",
  level: "NQF Level 5",
  weighting: "60% of module mark",
  description:
    "Students benchmark two competing food delivery apps, conduct usability testing, and synthesise findings into an affinity diagram. The goal is to identify patterns and propose feature improvements.",
  apps: ["Uber Eats", "Mr D"],
  deliverables: [
    "Competitive benchmarking report: Uber Eats vs Mr D",
    "Usability test protocol document",
    "Recorded usability test session",
    "Affinity diagram synthesising all findings",
    "Feature suggestions based on insights",
    "Final presentation",
  ],
  marking: [
    { criterion: "Benchmarking", weight: "15%" },
    { criterion: "Usability Test Protocol", weight: "10%" },
    { criterion: "Usability Test Recording", weight: "15%" },
    { criterion: "Affinity Diagram", weight: "30%" },
    { criterion: "Feature Suggestions", weight: "10%" },
    { criterion: "Presentation", weight: "20%" },
  ],
};

export function AdaCaseStudy({ project, nextProject, prevProject }: AdaCaseStudyProps) {
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
              <span key={tag} className="text-xs text-foreground/65">{tag}</span>
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
              { label: "Business", value: "Academy of Digital Arts" },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.join(", ") },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              } ${
                i === 2 || i === 3 ? "border-t md:border-t-0" : ""
              }`}>
                <div className="flex items-center gap-1.5 text-foreground/35 mb-2">
                  <Icon name={metaIcon(item.label)} size={14} />
                  <span className="text-xs font-medium uppercase tracking-widest">{item.label}</span>
                </div>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#E2F5EF]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6"><Icon name="check_circle" size={13} />Outcomes</p>
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
            Freelance lecturer at the Academy of Digital Arts, Jan 2024 to Mar 2025.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-5">
            <strong>I delivered a UX design module</strong> as part of the Higher Certificate in Web Publishing and Interactive Media. The role covered in-person lesson delivery, slide content creation, and assessment design.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            <strong>Two summative assessments were authored, structured around real apps and real research methods.</strong> Students were guided from competitive benchmarking and usability testing through to wireframes and final presentations.
          </p>
        </section>

        {/* Slides */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">From the slides</h2>
          </div>
          <p className="text-sm text-foreground/65 mb-10">
            A snapshot of slide content from the module. <strong>This is pre-AI-takeover material</strong>: foundational theory built from scratch and delivered in person.
          </p>

          {/* Slide deck 01 */}
          <div className="bg-[#09332C] rounded-lg p-8 md:p-10 mb-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">Slide deck 01</span>
            </div>
            <h3 className="text-xl font-bold text-[#F7EDDA] tracking-tight mb-2">Introduction to UX Design</h3>
            <p className="text-sm text-[#F7EDDA]/65 leading-relaxed mb-8">Roles in the web industry and where UX sits within it.</p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                { role: "UX Designer", note: "Researches user needs. Designs solutions to real problems." },
                { role: "UI Designer", note: "Colour, typography, layout, and component systems." },
                { role: "Front-End Developer", note: "Builds interfaces with HTML, CSS, and JavaScript." },
                { role: "Back-End Developer", note: "Servers, databases, and product logic." },
                { role: "Full Stack Developer", note: "Covers both front-end and back-end." },
                { role: "Product Manager", note: "Owns the product vision. Aligns team delivery." },
                { role: "Content Designer", note: "Words, structure, and tone in the product." },
                { role: "Copywriter", note: "Marketing and interface copy." },
                { role: "SEO Specialist", note: "Optimises content for search visibility." },
                { role: "DTP Specialist", note: "Layout and print-ready document production." },
              ].map((item) => (
                <div key={item.role} className="bg-white/8 rounded p-4 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.35rem] shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#F7EDDA] mb-0.5">{item.role}</p>
                    <p className="text-xs text-[#F7EDDA]/55 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide deck 02 */}
          <div className="bg-[#09332C] rounded-lg p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">Slide deck 02</span>
            </div>
            <h3 className="text-xl font-bold text-[#F7EDDA] tracking-tight mb-2">Overview: Birth of UX</h3>
            <p className="text-sm text-[#F7EDDA]/65 leading-relaxed mb-8">How design shifted from engineering-led to human-centred.</p>

            <div className="space-y-3 mb-8">
              {[
                { year: "1975", title: "Altair 8800", note: "Early personal computers were built for engineers. The user was not a consideration." },
                { year: "1984", title: "Apple Macintosh", note: "The GUI made computing accessible. Usability entered product thinking for the first time." },
                { year: "1988", title: "Don Norman at Apple", note: "Norman coined 'user experience' to describe the full interaction a person has with a product." },
                { year: "1990s", title: "UX as a discipline", note: "The term entered industry vocabulary. Human-centred design became a formal practice." },
              ].map((item) => (
                <div key={item.year} className="bg-white/8 rounded p-4 flex gap-5">
                  <p className="text-xs font-bold text-[#F0531C] w-10 shrink-0 pt-0.5">{item.year}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#F7EDDA] mb-0.5">{item.title}</p>
                    <p className="text-xs text-[#F7EDDA]/55 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/8 rounded p-5">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-3">Paradigm shift</p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#F7EDDA]/50 line-through">Engineer / Machine</p>
                  <p className="text-xs text-[#F7EDDA]/35 mt-1">Technology first</p>
                </div>
                <div className="text-[#F0531C] text-lg font-bold">→</div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#F7EDDA]">Human / Experience</p>
                  <p className="text-xs text-[#F7EDDA]/55 mt-1">People first</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I taught */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What I taught</h2>
          </div>

          <div className="space-y-4">
            {lessonContent.map((lesson) => (
              <div key={lesson.module} className="bg-white rounded-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{lesson.module}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{lesson.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-8">{lesson.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {lesson.topics.map((topic) => (
                    <div key={topic.label} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-foreground/85 mb-0.5">{topic.label}</p>
                        <p className="text-xs text-foreground/65 leading-relaxed">{topic.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assessments */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Assessments</h2>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed mb-12">
            <strong>Both summative assessments were designed to mirror real industry workflows.</strong> Students were not given hypothetical scenarios -- <strong>they worked with real apps, real competitors, and real users.</strong>
          </p>
        </section>

        {/* Module 1 Assessment */}
        <section className="mb-8">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Module 1 summative assessment</p>
          <div className="bg-white rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{module1Assessment.code}</span>
              <span className="text-foreground/35">/</span>
              <span className="text-xs text-foreground/65 font-medium uppercase tracking-widest">{module1Assessment.level}</span>
              <span className="text-foreground/35">/</span>
              <span className="text-xs text-foreground/65 font-medium uppercase tracking-widest">{module1Assessment.weighting}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">{module1Assessment.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-8">{module1Assessment.description}</p>

            {/* Persona */}
            <div className="bg-[#FDFAF5] rounded-lg p-6 mb-8">
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Persona</p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-xs text-foreground/45 mb-0.5">Name</p>
                  <p className="text-sm font-semibold text-[#09332C]/60">{module1Assessment.persona.name}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45 mb-0.5">Age</p>
                  <p className="text-sm font-semibold text-[#09332C]/60">{module1Assessment.persona.age}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45 mb-0.5">Role</p>
                  <p className="text-sm font-semibold text-[#09332C]/60">{module1Assessment.persona.role}</p>
                </div>
              </div>
              <p className="text-xs text-foreground/65 leading-relaxed mt-4">{module1Assessment.persona.context}</p>
            </div>

            {/* Deliverables + Marking */}
            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border">
              <div>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Deliverables</p>
                <div className="space-y-3">
                  {module1Assessment.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                      <p className="text-xs text-foreground/80 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Marking</p>
                <div className="space-y-2">
                  {module1Assessment.marking.map((m) => (
                    <div key={m.criterion} className="flex justify-between items-center">
                      <p className="text-xs text-foreground/80">{m.criterion}</p>
                      <p className="text-xs font-semibold text-[#09332C]/60">{m.weight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module 3 Assessment */}
        <section className="mb-24">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Module 3 summative assessment</p>
          <div className="bg-[#E2F5EF] rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{module3Assessment.code}</span>
              <span className="text-[#09332C]/35">/</span>
              <span className="text-xs text-[#09332C]/58 font-medium uppercase tracking-widest">{module3Assessment.level}</span>
              <span className="text-[#09332C]/35">/</span>
              <span className="text-xs text-[#09332C]/58 font-medium uppercase tracking-widest">{module3Assessment.weighting}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">{module3Assessment.title}</h3>
            <p className="text-sm text-[#09332C]/70 leading-relaxed mb-8">{module3Assessment.description}</p>

            {/* Apps benchmarked */}
            <div className="flex gap-3 mb-8">
              <p className="text-xs text-[#09332C]/58 font-medium uppercase tracking-widest mr-2">Apps benchmarked</p>
              {module3Assessment.apps.map((app) => (
                <span key={app} className="text-xs font-semibold text-[#09332C]/60 bg-white/60 rounded px-3 py-1">{app}</span>
              ))}
            </div>

            {/* Deliverables + Marking */}
            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#09332C]/10">
              <div>
                <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Deliverables</p>
                <div className="space-y-3">
                  {module3Assessment.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/50 mt-[0.4rem] shrink-0" />
                      <p className="text-xs text-[#09332C]/75 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Marking</p>
                <div className="space-y-2">
                  {module3Assessment.marking.map((m) => (
                    <div key={m.criterion} className="flex justify-between items-center">
                      <p className="text-xs text-[#09332C]/75">{m.criterion}</p>
                      <p className="text-xs font-semibold text-[#09332C]/60">{m.weight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <p className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6"><Icon name="check_circle" size={13} />Outcome</p>
          <p className="text-base text-foreground/80 leading-relaxed">{project.outcome}</p>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Reflection</h2>
          </div>
          <div className="space-y-6">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
            {nextProject ? (
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
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
