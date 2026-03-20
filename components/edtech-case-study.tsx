"use client";
import { LogoMark } from "@/components/logo-mark";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";
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
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed mb-8">
            {project.subtitle}
          </p>

          {project.externalLink && (
            <div className="flex items-center gap-5">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#09332C] transition-all duration-200 group shrink-0"
              >
                View live
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/articulate-logo.svg" alt="Articulate Rise" style={{ height: 13, width: "auto", opacity: 0.3 }} />
            </div>
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

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
            Visual design for a Business Systems Analysis course on Masterstart, Stellenbosch Business School's online platform.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-5">
            I worked alongside a subject matter expert and a learning designer. <strong>My role was visual and layout design: generating infographic assets that made complex BA concepts clear and engaging.</strong>
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            Seeing course content come to life in Articulate Rise is something I genuinely enjoy. <strong>This project sits at the intersection of visual communication, instructional logic, and layout discipline.</strong>
          </p>
        </section>

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/80 leading-relaxed mb-10">
            <strong>Create visual and infographic assets</strong> for a Business Systems Analysis course built in Articulate Rise. Work within the learning designer's content structure. <strong>Communicate complex conceptual models clearly and accessibly.</strong>
          </p>

          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design principles */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Approach</h2>
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
                <p className="text-xs text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Insights</h2>
            </div>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live course CTA */}
        {project.externalLink && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Live experience</h2>
            </div>
            <div className="bg-[#E2F5EF] rounded-lg p-8 md:p-10">
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">What the course covers</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Systems thinking", desc: "Conceptual models and stakeholder mapping made visual through infographic design." },
                  { label: "Process flows", desc: "Business process analysis represented as accessible, structured visual assets." },
                  { label: "Requirements mapping", desc: "Functional and non-functional requirements communicated through clear layout hierarchy." },
                  { label: "Responsive layout", desc: "All content built in Articulate Rise for consistent delivery across devices." },
                ].map((item) => (
                  <div key={item.label} className="bg-white/70 rounded-lg p-5">
                    <p className="text-xs font-semibold text-foreground mb-2">{item.label}</p>
                    <p className="text-xs text-foreground/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#F0531C] hover:text-[#09332C] transition-colors duration-200 group"
                >
                  Open in Articulate Rise
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/articulate-logo.svg" alt="Articulate Rise" style={{ height: 12, width: "auto", opacity: 0.3 }} />
              </div>
            </div>
          </section>
        )}

        {/* Outcomes */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8"><Icon name="check_circle" size={13} />Outcomes</h2>
          <div className="space-y-5">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                <p className="text-sm text-foreground/80 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
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
