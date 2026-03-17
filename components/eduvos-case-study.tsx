"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Project } from "@/lib/projects";

interface EduvosCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function EduvosCaseStudy({ project, nextProject, prevProject }: EduvosCaseStudyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-[#F0531C] transition-colors duration-200 mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-foreground/40">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C] tracking-tight mb-4 max-w-2xl">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/55 max-w-xl leading-relaxed">
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
                <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#f0f0f0]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-6">Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.map((outcome, i) => (
              <p key={i} className="text-sm text-foreground/70 leading-relaxed">{outcome}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed">{project.context}</p>
        </section>

        {/* Goals */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Goals</h2>
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Insights</h2>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Approach</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-6">{project.iaFlows}</p>
          <p className="text-base text-foreground/70 leading-relaxed mb-6">{project.designExploration}</p>
          <p className="text-base text-foreground/70 leading-relaxed">{project.finalUI}</p>
        </section>

        {/* Assessment CTA */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-4">Formative assessment</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-8">
            An example of the assessment briefs written for the programme. Six exercises spanning six weeks, each building toward the summative assessment.
          </p>
          <Link
            href="/projects/eduvos-content-writing/assessment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#F0531C]/90 transition-all duration-200 group"
          >
            <FileText size={16} />
            View assessment brief
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/65 leading-relaxed">{project.outcome}</p>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Reflection</h2>
          <div className="space-y-6">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{learning}</p>
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
                className="group flex items-center gap-3 text-foreground/50 hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest">Previous</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-foreground/50 hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest">Next</p>
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
