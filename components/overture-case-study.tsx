"use client";
import { LogoMark } from "@/components/logo-mark";

import React, { useState, useEffect } from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";
// ArrowLeft retained for navigation section

interface OvertureCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function OvertureCaseStudy({ project, nextProject, prevProject }: OvertureCaseStudyProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [protoLightboxOpen, setProtoLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setProtoLightboxOpen(false);
      }
    };
    const anyOpen = lightboxOpen || protoLightboxOpen;
    if (anyOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, protoLightboxOpen]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
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

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Brief */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Brief</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed">
            <strong>Design a promoter app that streamlines event documentation,</strong> connecting promoters, agents, and artists throughout the advancing stage of event organisation.
          </p>
        </section>

        {/* Research */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Research</h2>
            </div>
          <p className="text-base text-foreground/85 leading-relaxed mb-4">
            <strong>Benchmarked leading event platforms globally.</strong>
          </p>
          <p className="text-base text-foreground/85 leading-relaxed">
            <strong>Mapped user journeys and deliverables</strong> across the advancing process.
          </p>
        </section>

        {/* Wireframes */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Wireframes</h2>
          </div>
          <div
            className="bg-[#F7EDDA]/50 rounded-lg cursor-zoom-in relative group p-6 md:p-10"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/overture-wireframes.svg"
                alt="Overture wireframe screens"
                className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-[#09332C] rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-white pointer-events-none">
              <ZoomIn size={12} />
              Expand
            </div>
          </div>
        </section>

        {/* Wireframes lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#F7EDDA] flex items-start justify-center overflow-auto p-6 md:p-12"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightboxOpen(false)}
                className="sticky top-0 left-full mb-4 flex items-center gap-2 bg-[#09332C] hover:bg-[#09332C]/80 text-white rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ml-auto"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Prototype</h2>
          </div>
          <div
            className="bg-[#E2F5EF] rounded-lg cursor-zoom-in relative group p-6 md:p-10"
            onClick={() => setProtoLightboxOpen(true)}
          >
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/overture-prototype.svg"
                alt="Overture prototype screens"
                className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-[#09332C] rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-white pointer-events-none">
              <ZoomIn size={12} />
              Expand
            </div>
          </div>
        </section>

        {/* Prototype lightbox */}
        {protoLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#E2F5EF] flex items-start justify-center overflow-auto p-6 md:p-12"
            onClick={() => setProtoLightboxOpen(false)}
          >
            <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setProtoLightboxOpen(false)}
                className="sticky top-0 left-full mb-4 flex items-center gap-2 bg-[#09332C] hover:bg-[#09332C]/80 text-white rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ml-auto"
              >
                <X size={14} />
                Close
              </button>
              <img
                src="/images/overture-prototype.svg"
                alt="Overture prototype screens"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Team */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Team</h2>
            </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm text-foreground font-medium">Erick van Reenen</p>
              <p className="text-xs text-foreground/65 mt-1">UX Designer</p>
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
              <p className="text-xs text-foreground/65 mt-1">UI Designer</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Timeline</h2>
            </div>
          <div className="flex gap-16">
            <div className="flex items-baseline gap-3">
              <p className="text-2xl font-bold text-foreground">2 weeks</p>
              <p className="text-xs text-foreground/65 uppercase tracking-widest font-medium">UX</p>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="text-2xl font-bold text-foreground">2 weeks</p>
              <p className="text-xs text-foreground/65 uppercase tracking-widest font-medium">UI</p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            <strong>Delivered and signed off in 4 weeks.</strong>
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