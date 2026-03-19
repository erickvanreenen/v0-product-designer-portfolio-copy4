"use client";
import { LogoMark } from "@/components/logo-mark";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";
// ArrowLeft retained for navigation section

interface OvertureCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function OvertureCaseStudy({ project, nextProject, prevProject }: OvertureCaseStudyProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
              { label: "Role", value: project.role },
              { label: "Team", value: "Erick van Reenen, Brent Nygaard" },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.join(", ") },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
              } ${
                i === 2 || i === 3 ? "border-t md:border-t-0" : ""
              }`}>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed">
            Design a promoter app that streamlines event documentation, connecting promoters, agents, and artists throughout the advancing stage of event organisation.
          </p>
        </section>

        {/* Research */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Research</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed mb-4">
            Benchmarked leading event platforms globally.
          </p>
          <p className="text-base text-foreground/85 leading-relaxed">
            Mapped user journeys and deliverables across the advancing process.
          </p>
        </section>

        {/* Wireframes */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Wireframes</h2>
          </div>
          <div
            className="bg-[#F7EDDA]/50 rounded-lg overflow-hidden cursor-zoom-in relative group"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="overflow-hidden">
              <img
                src="/images/overture-wireframes.svg"
                alt="Overture wireframe screens"
                className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-[#09332C] rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-white pointer-events-none">
              <ZoomIn size={12} />
              Expand
            </div>
          </div>
        </section>

        {/* Wireframes lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-start justify-center overflow-auto p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightboxOpen(false)}
                className="sticky top-0 left-full mb-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ml-auto"
              >
                <X size={14} />
                Close
              </button>
              <img
                src="/images/overture-wireframes.svg"
                alt="Overture wireframe screens"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Prototype */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Prototype</h2>
            </div>
          <div className="bg-[#E2F5EF] rounded-lg p-8 md:p-10">
            <p className="text-xs text-foreground/58 font-medium uppercase tracking-widest mb-6">What's in the prototype</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Event creation", desc: "Promoter creates event with key details and document requirements." },
                { label: "Document requests", desc: "Requests sent to agents and artists with deadlines and status tracking." },
                { label: "Advancing flow", desc: "All parties complete document submission in a single coordinated workflow." },
              ].map((item) => (
                <div key={item.label} className="bg-white/70 rounded-lg p-5">
                  <p className="text-xs font-semibold text-foreground mb-2">{item.label}</p>
                  <p className="text-xs text-foreground/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.figma.com/proto/QdoSI1orZciqLgNdeuwweb/Overture---Promoter-App?node-id=324-839&t=hzQyEkisr6EUwGlc-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A6&starting-point-node-id=266%3A670&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#F0531C] hover:text-[#09332C] transition-colors duration-200 group"
            >
              Open prototype
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Team</h2>
            </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm text-foreground font-medium">Erick van Reenen</p>
              <p className="text-xs text-foreground/58 mt-1">UX Designer</p>
            </div>
            <div>
              <Link
                href="https://nygaard.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground font-medium hover:text-[#F0531C] transition-colors duration-200"
              >
                Brent Nygaard
              </Link>
              <p className="text-xs text-foreground/58 mt-1">UI Designer</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Timeline</h2>
            </div>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-2xl font-bold text-foreground">2 weeks</p>
              <p className="text-xs text-foreground/58 mt-1">UX</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2 weeks</p>
              <p className="text-xs text-foreground/58 mt-1">UI</p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            Delivered and signed off in 4 weeks.
          </p>
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