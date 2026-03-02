"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function FlanksourceCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <article>
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
          <p className="text-xl text-[#F0531C] font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            <div>
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-1">Role</p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-1">Team</p>
              <a href="https://nygaard.design/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-[#F0531C] transition-colors duration-200">
                {project.team}
              </a>
            </div>
            <div>
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-1">Timeline</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-1">Tools</p>
              <p className="text-sm text-foreground">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#09332C]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-widest mb-6">Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.outcomes.map((outcome, i) => (
              <p key={i} className="text-sm text-[#F7EDDA]/70 leading-relaxed">{outcome}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed">
            {project.context.replace("Mission Control was built to close that gap.", "").trim()}{" "}
            <strong>{"Mission Control was built to close that gap."}</strong>
          </p>
        </section>

        {/* Brief */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Brief</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-8">
            Design a dashboard that surfaces actionables and service health — bringing catalog, health checks, notifications, playbooks, and topology into a single view.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {["Topology", "Playbooks", "Catalog", "Health Checks", "Notifications"].map((item) => (
              <div key={item} className="border border-border px-4 py-3">
                <p className="text-xs font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Domain immersion", desc: "Learned the terminology and understood component functions." },
              { step: "02", label: "Data vis exploration", desc: "Explored methods to communicate system health clearly." },
              { step: "03", label: "Ideate and wireframe", desc: "Translated component data into dashboard layouts." },
              { step: "04", label: "Structural design", desc: "Produced final representations for review." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-xs text-[#F0531C] font-medium mb-2">{item.step}</p>
                <p className="text-sm font-bold text-foreground mb-1">{item.label}</p>
                <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Before / After -- full width */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Before and after</h2>

          {/* Before */}
          <div className="mb-12">
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">Before</p>
            <div className="border border-border overflow-hidden bg-[#f8f8f8]">
              <Image
                src="/images/flanksource-after.svg"
                alt="Flanksource original dashboard layout"
                width={1800}
                height={1169}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* After */}
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">After</p>
            <div className="border border-border overflow-hidden bg-[#f8f8f8]">
              <Image
                src="/images/flanksource-before.svg"
                alt="Flanksource redesigned dashboard"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lower content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

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
            {nextProject ? (
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
            ) : <div />}
          </div>
        </div>
      </div>
    </article>
  );
}
