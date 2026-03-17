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
          <p className="text-lg text-foreground/55 max-w-xl leading-relaxed mb-8">
            {project.subtitle}
          </p>

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#09332C] transition-all duration-200 group"
            >
              View live
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-14">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: project.team },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.join(", ") },
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

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
            Visual design for a Business Systems Analysis course on Masterstart, Stellenbosch Business School's online platform.
          </p>
          <p className="text-base text-foreground/65 leading-relaxed mb-5">
            I worked alongside a subject matter expert and a learning designer. My role was visual and layout design: generating infographic assets that made complex BA concepts clear and engaging.
          </p>
          <p className="text-base text-foreground/65 leading-relaxed">
            Seeing course content come to life in Articulate Rise is something I genuinely enjoy. This project sits at the intersection of visual communication, instructional logic, and layout discipline.
          </p>
        </section>

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            Create visual and infographic assets for a Business Systems Analysis course built in Articulate Rise. Work within the learning designer's content structure. Communicate complex conceptual models clearly and accessibly.
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
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Visual design in service of learning</p>

          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            {[
              { label: "01", title: "Infographic-led", desc: "Complex BA models visualised as clear, structured infographics rather than text walls." },
              { label: "02", title: "Collaborative brief", desc: "Iterated with the SME on accuracy and with the learning designer on placement and pacing." },
              { label: "03", title: "Articulate Rise native", desc: "Designed within Rise's constraints. Visual restraint and hierarchy over embellishment." },
              { label: "04", title: "Accessible by default", desc: "Layouts built for all devices and learner needs from the start." },
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
              <div className="bg-[#E2F5EF] rounded-lg px-8 py-14 flex flex-col items-center justify-center text-center group-hover:bg-[#E2F5EF]/70 transition-colors duration-300">
                {/* Abstract content indicator */}
                <div className="w-40 h-24 border border-[#09332C]/10 rounded-lg mb-8 flex flex-col justify-between p-4 group-hover:border-[#09332C]/20 transition-colors duration-300">
                  <div className="space-y-1.5">
                    <div className="h-1 bg-[#09332C]/10 rounded w-full" />
                    <div className="h-1 bg-[#09332C]/10 rounded w-4/5" />
                    <div className="h-1 bg-[#09332C]/10 rounded w-3/5" />
                  </div>
                  <div className="h-5 bg-[#F0531C]/25 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[#09332C]/40 uppercase tracking-widest group-hover:text-[#09332C]/70 transition-colors duration-200">Open in Articulate Rise</p>
                  <ArrowUpRight size={12} className="text-[#09332C]/30 group-hover:text-[#F0531C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
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
