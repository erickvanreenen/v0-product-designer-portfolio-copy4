"use client";

import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function CaseStudyLayout({ project, nextProject, prevProject }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen">
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

          {project.externalLink && (
            <Link
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#F0531C]/90 transition-all duration-200 group"
            >
              View live
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          )}

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-12">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: project.team },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.slice(0, 3).join(", ") },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              }`}>
                <div className="flex items-center gap-1.5 text-foreground/35 mb-1">
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
          <p className="text-lg text-foreground leading-relaxed">{project.context}</p>
        </section>

        {/* Goals */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Goals</h2>
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Research</h2>
          <p className="text-base text-foreground/85 leading-relaxed">{project.research}</p>
        </section>

        {/* Insights */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Insights</h2>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IA & Flows */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Architecture</h2>
          <p className="text-base text-foreground/85 leading-relaxed">{project.iaFlows}</p>
        </section>

        {/* Design */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Design</h2>
          <p className="text-base text-foreground/85 leading-relaxed mb-6">{project.designExploration}</p>
          <p className="text-base text-foreground/85 leading-relaxed">{project.finalUI}</p>
        </section>


        {/* Testing */}
        {project.testing && (
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Testing</h2>
            <p className="text-base text-foreground/85 leading-relaxed">{project.testing}</p>
          </section>
        )}

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/80 leading-relaxed">{project.outcome}</p>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Reflection</h2>
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
