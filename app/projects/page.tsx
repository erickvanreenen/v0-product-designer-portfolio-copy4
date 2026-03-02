"use client";
import { useState } from "react";
import { projects, getAllTags, ProjectTag } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TagFilter } from "@/components/tag-filter";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
  const allTags = getAllTags();
  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

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
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/30">No projects match this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}