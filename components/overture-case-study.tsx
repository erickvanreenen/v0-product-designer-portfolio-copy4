
import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface OvertureCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function OvertureCaseStudy({ project, nextProject, prevProject }: OvertureCaseStudyProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/30 hover:text-[#F0531C] transition-colors duration-200 mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/40">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#09332C] tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[#F0531C] font-medium">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#09332C]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-widest mb-6">Outcomes</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {project.outcomes.map((outcome, i) => (
              <p key={i} className="text-sm text-[#F7EDDA]/70 leading-relaxed">{outcome}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Brief */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Brief</h2>
          <p className="text-base text-foreground/70 leading-relaxed">
            Design a promoter app that streamlines event documentation — connecting promoters, agents, and artists throughout the advancing stage of event organisation.
          </p>
        </section>

        {/* Research */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Research</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-4">
            Benchmarked leading event platforms globally.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed">
            Mapped user journeys and deliverables across the advancing process.
          </p>
        </section>

        {/* Team */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Team</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground">Erick van Reenen</p>
              <p className="text-xs text-foreground/40">UX Designer</p>
            </div>
            <div>
              <Link
                href="https://nygaard.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-[#F0531C] transition-colors duration-200"
              >
                Brent Nygaard
              </Link>
              <p className="text-xs text-foreground/40">UI Designer</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Timeline</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-bold text-[#09332C]">2 weeks</p>
              <p className="text-xs text-foreground/40 mt-1">UX</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#09332C]">2 weeks</p>
              <p className="text-xs text-foreground/40 mt-1">UI</p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-[#09332C] rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#FFA74F] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-[#F7EDDA]/70 leading-relaxed">
            Delivered and signed off in 4 weeks.
          </p>
        </section>

        {/* Tools */}
        <section className="mb-16 pb-16 border-b border-border">
          <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs px-3 py-1.5 rounded-full border border-border text-foreground/40">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-foreground/30 hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest">Previous</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-foreground/30 hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest">Next</p>
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