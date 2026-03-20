"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";
import { Project } from "@/lib/projects";
import { LogoMark } from "@/components/logo-mark";

interface Uni4CaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function Uni4CaseStudy({ project, nextProject, prevProject }: Uni4CaseStudyProps) {
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
            Three years as Visual Team Lead at UNi4 Online.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-5">
            The company needed two things done in parallel: <strong>fix a fragmented design team, and design a new aggregator platform</strong> to consolidate multiple education brands.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            <strong>I ran both.</strong> Team lead on one side, UX designer on the other. The two tracks informed each other throughout.
          </p>
        </section>

        {/* Two tracks */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Two tracks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            <div className="bg-white p-8">
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Track 01</p>
              <h3 className="text-base font-bold text-foreground mb-3">Team leadership</h3>
              <div className="space-y-3">
                {([
                  <><strong>Designers were working in isolation</strong> with no shared visibility.</>,
                  <>Output quality was inconsistent. <strong>KPIs were being missed.</strong></>,
                  <><strong>Introduced regular check-ins, shared workflows, and Kanban-based project tracking.</strong></>,
                  <><strong>Team productivity increased significantly</strong> and KPI achievement became consistent.</>,
                ] as React.ReactNode[]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#09332C]/20 mt-[0.4rem] shrink-0" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Track 02</p>
              <h3 className="text-base font-bold text-foreground mb-3">Platform design</h3>
              <div className="space-y-3">
                {([
                  <>Multiple education brands needed to coexist on <strong>a single aggregator platform.</strong></>,
                  <>Users required <strong>seamless navigation across brands</strong> without losing context.</>,
                  <><strong>Designed a unified information architecture</strong> that balanced brand identity with platform consistency.</>,
                  <><strong>Delivered a cohesive user experience</strong> across all brands under one platform.</>,
                ] as React.ReactNode[]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Goals</h2>
          </div>
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I did */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What I did</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                label: "Team process audit",
                desc: <><strong>Analysed existing workflows.</strong> Interviewed designers individually to understand friction points and morale. <strong>Identified lack of shared visibility as the core problem.</strong></>,
              },
              {
                step: "02",
                label: "Kanban implementation",
                desc: <>Introduced a shared Kanban board. Weekly check-ins. Clear task ownership. <strong>Output quality improved and missed deadlines dropped significantly.</strong></>,
              },
              {
                step: "03",
                label: "Competitor analysis",
                desc: <><strong>Studied multi-brand education aggregator platforms globally.</strong> Identified navigation patterns and IA approaches for consolidating distinct brands under one roof.</>,
              },
              {
                step: "04",
                label: "Information architecture",
                desc: <><strong>Designed the IA to allow cross-brand navigation</strong> while keeping each brand&apos;s identity intact. Unified design patterns built to flex across multiple brands.</>,
              },
              {
                step: "05",
                label: "Platform design",
                desc: <><strong>Delivered the aggregator platform design.</strong> Stakeholders across all brands reviewed and signed off on the final output.</>,
              },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-foreground/35 font-bold flex-shrink-0 w-6 text-center pt-0.5">{item.step}</span>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-bold text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                </div>
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
