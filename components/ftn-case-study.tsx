"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface FtnCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function FtnCaseStudy({ project, nextProject, prevProject }: FtnCaseStudyProps) {
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
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Tools</p>
              <p className="text-sm text-foreground">{project.tools.join(", ")}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Status</p>
              <p className="text-sm text-[#F0531C]">Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Context */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            One of South Africa's largest online wellness retailers.{" "}
            <strong>Rapid store expansion has moved the platform into a full omnichannel environment.</strong>
          </p>
          <p className="text-base text-foreground/65 leading-relaxed mb-4">
            The Magento 1 to Magento 2 migration started around 2020. Multiple designers passed through. I joined as the lone lead UX/UI designer in September 2024.
          </p>
          <p className="text-base text-foreground/65 leading-relaxed">
            The platform was live. Revenue was flowing. But years of dev-first decisions had accumulated into significant UX debt — and no single designer had stayed long enough to address it systematically.
          </p>
        </section>

        {/* The Environment */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">The Environment</h2>

          <section className="mb-10 bg-white rounded-lg p-8 md:p-10">
            <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Working conditions</h2>
            <div className="space-y-5">
              {[
                "Dev-first culture. Low UX maturity across the organisation.",
                "Significant accumulated UX debt. Inconsistency baked into the platform.",
                "Design constrained by data availability — not by user need.",
                "Legacy Magento 1 dependencies limit what is buildable on Magento 2.",
                "Historical decisions frequently misaligned with UX best practice.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                  <p className="text-sm text-foreground/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-base text-foreground/65 leading-relaxed mb-4">
            Systems thinking became non-negotiable. Every design decision had downstream consequences — across tech, logistics, data, and operations.
          </p>
          <p className="text-base text-foreground/65 leading-relaxed">
            Advocating for good UX here means translating user needs into business outcomes and technical language simultaneously. It is a skill. It has become one of my strongest.
          </p>
        </section>

        {/* Team */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Team</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              "CEO",
              "Co-CEO",
              "Chief Technology Officer",
              "BE Architecture Developer",
              "Acumatica Developer",
              "2× Backend Developers",
              "2× Frontend Developers",
              "Product Owner",
              "Project Manager",
              "UX/UI Designer — me",
            ].map((member) => (
              <div key={member} className="bg-white p-5 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                <p className="text-sm text-foreground/65">{member}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filtering System */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-4">Consistent filtering system</h2>
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-10">Shipped</p>

          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            When I joined, filtering changed structure between category levels. L1 looked different from L2. L2 from L3. No shared logic. No shared pattern.
          </p>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            <div className="bg-white p-8">
              <h3 className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-4">The problem</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">Filtering patterns varied across every category level. Users had to relearn navigation at each step.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">The solution</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">One consistent filtering system. Two search streams. Applied at every level of the platform.</p>
            </div>
          </div>

          {/* Two streams */}
          <h3 className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-6">Two search streams</h3>
          <div className="grid md:grid-cols-2 gap-px bg-border mb-10">
            {/* Values */}
            <div className="bg-white p-8">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-3">01 — Values</p>
              <p className="text-sm font-semibold text-foreground mb-4">Search by what matters to the user.</p>
              <div className="space-y-2">
                {["Social values", "Environmental values", "Business values", "Ingredient values"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F0531C]/40 shrink-0" />
                    <p className="text-xs text-foreground/50">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Product */}
            <div className="bg-white p-8">
              <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-3">02 — Product</p>
              <p className="text-sm font-semibold text-foreground mb-4">Traditional product-led search.</p>
              <p className="text-xs text-foreground/50 leading-relaxed">Search by product type, category, or keyword. Familiar. Fast. Consistent at every level.</p>
            </div>
          </div>

          {/* Convergence */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Values search</span>
              <span className="text-foreground/20">→</span>
              <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">Product found</span>
              <span className="text-foreground/20">←</span>
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Product search</span>
            </div>
            <p className="text-xs text-foreground/50">Both paths lead to the same destination.</p>
          </div>
        </section>

        {/* Omnichannel collection options */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-4">Omnichannel collection options</h2>
          <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-10">In progress</p>

          <p className="text-base text-foreground/65 leading-relaxed mb-10">
            Faithful to Nature is opening stores at a rapid rate. The platform needed to reflect this — extending beyond its original delivery model into a true omnichannel experience.
          </p>

          {/* Existing vs New */}
          <h3 className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-6">Delivery and collection options</h3>
          <div className="grid md:grid-cols-2 gap-px bg-border mb-12">
            <div className="bg-white p-8">
              <h3 className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-5">Existing</h3>
              <div className="space-y-3">
                {[
                  "Economy delivery",
                  "Express delivery (selected areas)",
                  "Pargo collection point",
                  "FtN warehouse — Johannesburg",
                  "FtN warehouse — Cape Town",
                ].map((opt) => (
                  <div key={opt} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-[0.35rem] shrink-0" />
                    <p className="text-sm text-foreground/50">{opt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-5">New</h3>
              <div className="space-y-3">
                {[
                  "In-store collection — 17 locations and growing",
                  "Scheduled delivery — choose date and timeslot",
                ].map((opt) => (
                  <div key={opt} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.35rem] shrink-0" />
                    <p className="text-sm text-foreground/65">{opt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Considerations */}
          <section className="bg-white rounded-lg p-8 md:p-10">
            <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Design considerations</h2>
            <div className="space-y-5">
              {[
                "Logistics — what is executable given postcode, zone, and area parameters.",
                "Data — what is available now vs. what is coming in a staggered rollout.",
                "Omnichannel — decisions must account for the full ecosystem, not isolated features.",
                "M1 dependencies — legacy constraints define what is buildable on M2 today.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                  <p className="text-sm text-foreground/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Outcome */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Outcome</h2>
          <p className="text-base text-foreground/65 leading-relaxed">
            Consistent filtering system shipped. Omnichannel collection options in active design. UX practice embedded in a team that had none. Project ongoing.
          </p>
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
            {nextProject && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
