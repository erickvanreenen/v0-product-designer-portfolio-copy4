"use client";
import { LogoMark } from "@/components/logo-mark";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X, Maximize2 } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function FlanksourceCaseStudy({ project, nextProject, prevProject }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-foreground/58">{tag}</span>
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
              { label: "Role", content: <p className="text-sm text-foreground break-words">{project.role}</p> },
              { label: "Team", content: (
                <a href="https://nygaard.design/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-[#F0531C] transition-colors duration-200 break-words">
                  {project.team}
                </a>
              )},
              { label: "Timeline", content: <p className="text-sm text-foreground break-words">{project.timeline}</p> },
              { label: "Tools", content: <p className="text-sm text-foreground break-words">{project.tools.join(", ")}</p> },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              } ${
                i === 2 || i === 3 ? "border-t md:border-t-0" : ""
              }`}>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Flanksource began as a Kubernetes consulting firm. Teams were drowning in data but lacked context.{" "}
            <strong>Mission Control was built to close that gap.</strong>
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            They had metrics dashboards, log tools, and Git for config, but nothing tying them together. Engineers needed one place to understand the health of their systems and act on it.
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">The Challenge</h2>
            </div>

          <section className="mb-10 bg-white rounded-lg p-8 md:p-10">
            <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">What we were up against</h2>
            <div className="space-y-5">
              {[
                "Engineers needed context, not more data. Existing tools created noise without signal.",
                "Key components were siloed across separate views with no single entry point.",
                "Actionable items were buried inside individual tools. Nothing surfaced by default.",
                "Unfamiliar terminology required deep domain learning before any design could begin.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Brief</h2>
            </div>
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Dashboard redesign</p>

          <p className="text-base text-foreground/80 leading-relaxed mb-10">
            Design a single dashboard that surfaces actionable insights and system health, consolidating five major platform components into one scannable view.
          </p>

          {/* Five components */}
          <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Five components to unify</h3>
          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            {[
              { label: "01", title: "Topology", desc: "System relationships and infrastructure map." },
              { label: "02", title: "Playbooks", desc: "Runbooks for responding to incidents and alerts." },
              { label: "03", title: "Catalog", desc: "Service catalogue with metadata and ownership." },
              { label: "04", title: "Health Checks", desc: "Real-time pass/fail state of services." },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-xs text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="bg-[#E2F5EF] p-8 md:col-span-2">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">05</p>
              <p className="text-sm font-semibold text-foreground mb-2">Notifications</p>
              <p className="text-xs text-foreground/65 leading-relaxed">Alerts and updates requiring attention.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Process</h2>
            </div>
          <div className="space-y-6">
            {[
              { step: "01", label: "Domain immersion", desc: "Logged into the beta platform. Learned terminology and understood each component function before touching Figma." },
              { step: "02", label: "Data visualisation exploration", desc: "Explored methods to communicate system health clearly, balancing density with scannability." },
              { step: "03", label: "Ideate and wireframe", desc: "Translated component data into dashboard layouts. Mapped what surfaces by default vs. on demand." },
              { step: "04", label: "Structural design", desc: "Produced final dashboard representations for review with the Flanksource product team." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{item.step}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Before / After — full width */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-12">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Before and after</h2>
            </div>

          {/* Side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Before</p>
              <div className="border border-border overflow-hidden">
                <Image
                  src="/images/flanksource-after.svg"
                  alt="Flanksource original dashboard layout"
                  width={1800}
                  height={1169}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">After</p>
              <div className="border border-border overflow-hidden">
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

          {/* Expand CTA */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 text-xs text-foreground/65 hover:text-[#F0531C] transition-colors duration-200 group"
            >
              <Maximize2 size={12} className="group-hover:scale-110 transition-transform duration-200" />
              Expand views
            </button>
          </div>
        </div>
      </section>

      {/* Expanded lightbox */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setExpanded(false)}
        >
          <div
            className="max-w-6xl mx-auto px-6 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setExpanded(false)}
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors duration-200"
              >
                <X size={14} />
                Close
              </button>
            </div>

            {/* Before */}
            <div className="mb-12">
              <p className="text-xs text-white/30 font-medium uppercase tracking-widest mb-4">Before</p>
              <div className="overflow-hidden">
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
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">After</p>
              <div className="overflow-hidden">
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
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Insights */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Insights</h2>
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

        {/* Outcomes */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Outcomes</h2>
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
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Reflection</h2>
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
