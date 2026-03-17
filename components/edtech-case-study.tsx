"use client";
import { LogoMark } from "@/components/logo-mark";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function EdtechCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-14">
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Role</p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Team</p>
              <p className="text-sm text-foreground">{project.team}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Tools</p>
              <p className="text-sm text-foreground">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            UX principles applied to educational content.{" "}
            <strong>Learning design and interaction design share more than most realise.</strong>
          </p>
          <p className="text-base text-foreground/65 leading-relaxed">
            This project demonstrates how UX methodology (information architecture, user flow, cognitive load reduction) translates directly into effective instructional design. Built in Articulate Rise with a focus on engagement, accessibility, and retention.
          </p>
        </section>

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            Design and develop an interactive online learning experience that engages learners through structured content, progressive disclosure, and interactive assessments, all fully responsive and accessible.
          </p>

          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design principles */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Approach</h2>
            </div>
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Learning science meets UX</p>

          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            {[
              { label: "01", title: "Chunked content", desc: "Short, focused sections reduce cognitive load and improve comprehension." },
              { label: "02", title: "Progressive disclosure", desc: "Information revealed in sequence. Learners build on what they know." },
              { label: "03", title: "Interactive checkpoints", desc: "Assessments embedded throughout, not just at the end." },
              { label: "04", title: "Accessible by default", desc: "Designed for all devices and user needs from the start." },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Insights</h2>
            </div>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live course CTA */}
        {project.externalLink && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Live experience</h2>
            </div>
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-[#09332C] rounded-lg px-8 py-14 flex flex-col items-center justify-center text-center group-hover:bg-[#09332C]/90 transition-colors duration-300">
                {/* Abstract content indicator */}
                <div className="w-40 h-24 border border-[#F7EDDA]/10 rounded-lg mb-8 flex flex-col justify-between p-4 group-hover:border-[#F7EDDA]/25 transition-colors duration-300">
                  <div className="space-y-1.5">
                    <div className="h-1 bg-[#F7EDDA]/10 rounded w-full" />
                    <div className="h-1 bg-[#F7EDDA]/10 rounded w-4/5" />
                    <div className="h-1 bg-[#F7EDDA]/10 rounded w-3/5" />
                  </div>
                  <div className="h-5 bg-[#F0531C]/25 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[#F7EDDA]/40 uppercase tracking-widest group-hover:text-[#F7EDDA]/70 transition-colors duration-200">Open in Articulate Rise</p>
                  <ArrowUpRight size={12} className="text-[#F7EDDA]/30 group-hover:text-[#F0531C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Outcomes */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Outcomes</h2>
          <div className="space-y-5">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                <p className="text-sm text-foreground/65 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Reflection</h2>
            </div>
          <div className="space-y-6">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
            {nextProject ? (
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
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
