"use client";
import { useState } from "react";
import { projects, getAllTags, ProjectTag } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TagFilter } from "@/components/tag-filter";
import { FadeIn } from "@/components/fade-in";

const EDTECH_SLUGS = ["edtech-interactive-learning", "uni4-online", "ada-ux-design", "eduvos-content-writing"];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
  const allTags = getAllTags();

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const mainProjects = filteredProjects.filter(
    (p) => !EDTECH_SLUGS.includes(p.slug)
  );
  const edtechProjects = filteredProjects.filter((p) =>
    EDTECH_SLUGS.includes(p.slug)
  );

  return (
    <div className="page-entry">
      <section className="bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-6">Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-sm text-foreground/45 max-w-sm">
            UX across e-commerce, omnichannel platforms, and education.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">

        {/* Tag filter */}
        <div className="mb-14">
          <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
        </div>

        {/* Main projects */}
        {mainProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
            {mainProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        )}

        {/* EdTech */}
        {edtechProjects.length > 0 && (
          <div className="mt-24 md:mt-32">
            <FadeIn>
              <div className="border-t border-border/60 pt-14 mb-14">
                <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-2">Discipline</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">EdTech</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
              {edtechProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 60}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/40 text-sm">No projects match this filter.</p>
          </div>
        )}

      </div>
    </div>
  );
}
