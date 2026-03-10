"use client";
import { LogoMark } from "@/components/logo-mark";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function YumeaseCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-border">
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
            Sole designer. Full product lifecycle.{" "}
            <strong>Inception to launch in thirteen months.</strong>
          </p>
          <p className="text-base text-foreground/65 leading-relaxed">
            As the only designer on the team, I owned every layer of the experience — from initial research and architecture through to final UI and handoff. The challenge: build something intuitive in a competitive market, fast.
          </p>
        </section>

        {/* The Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Brief</h2>
            </div>

          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            Design an intuitive mobile app from zero. Prioritise onboarding clarity, core flow efficiency, and a cohesive visual system — all within a tight cross-functional team of two developers, a PM, and QA.
          </p>

          {/* Goals */}
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Research</h2>
            </div>
          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            User interviews, competitive analysis, and persona development shaped every design decision. Research ran alongside design — not before it.
          </p>

          {/* Insights */}
          <h3 className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-6">What the research surfaced</h3>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Process</h2>
            </div>
          <div className="space-y-6">
            {[
              { step: "01", label: "Information architecture", desc: "Prioritised the most common user tasks. Created flows and journey maps from first open to habitual use." },
              { step: "02", label: "Rapid prototyping", desc: "Multiple visual directions explored. Tested concepts quickly before committing to development-ready designs." },
              { step: "03", label: "Design system", desc: "Built a component library as the product grew. Ensured consistency without slowing the team down." },
              { step: "04", label: "Iterative testing", desc: "Frequent usability tests with internal and external users throughout. Quick feedback loops drove rapid improvements." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5 shrink-0">{item.step}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screens */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-[#09332C] tracking-tight">Screens</h2>
            </div>
          <div className="space-y-4">
            <div className="border border-border overflow-hidden">
              <Image
                src="/images/yumease-screens.jpg"
                alt="YumEase final app screens"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-foreground/50">Final app screens. Key user flows.</p>
          </div>
        </section>

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
      <div className="border-t border-border">
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
