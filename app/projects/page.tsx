"use client";
import { useState } from "react";
import { projects, getAllTags, ProjectTag } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TagFilter } from "@/components/tag-filter";

const EDTECH_SLUGS = ["edtech-interactive-learning", "uni4-online"];

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
    <div>
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C] tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-[#F0531C] max-w-lg">
            UX work spanning e-commerce, apps, and education.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12">
          <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
        </div>

        {/* Main projects grid */}
        {mainProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            {mainProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {/* EdTech section */}
        {edtechProjects.length > 0 && (
          <div className="mt-24">
            <div className="border-t border-border pt-16 mb-12">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-3">
                Discipline
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#09332C] tracking-tight">
                EdTech
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16 md:gap-12">
              {edtechProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/50">No projects match this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
