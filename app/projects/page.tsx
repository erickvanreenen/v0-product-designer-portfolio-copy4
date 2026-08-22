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

  const mainProjects = filteredProjects.filter((p) => !EDTECH_SLUGS.includes(p.slug));
  const edtechProjects = filteredProjects.filter((p) => EDTECH_SLUGS.includes(p.slug));

  return (
    <div className="page-entry">
      <section className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="t-label text-ember mb-6">Work</p>
          <h1 className="t-display text-5xl md:text-7xl text-ink mb-6">
            Nine problems.
          </h1>
          <p className="text-lg text-ink/60 measure">
            Each project is titled by the problem it addresses. The company is underneath.
            E-commerce, omnichannel platforms, data tooling, and education.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-14 md:mb-16">
          <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
        </div>

        {mainProjects.length > 0 && (
          <section aria-labelledby="main-work">
            <h2 id="main-work" className="sr-only">Product and platform work</h2>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
              {mainProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 55}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {edtechProjects.length > 0 && (
          <div className="mt-24 md:mt-32">
            <FadeIn>
              <div className="border-t border-line pt-14 mb-14">
                <p className="t-label text-plum mb-3">Discipline</p>
                <h2 className="t-h2 text-3xl md:text-4xl text-ink mb-3">Education</h2>
                <p className="text-[15px] text-ink/55 measure">
                  Four projects where the user is a learner. Designing for comprehension holds
                  a higher bar than most design contexts, because if it does not land, nothing else happens.
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
              {edtechProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 55}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="border border-line py-20 px-6 text-center">
            <p className="text-ink/60 mb-2">Nothing tagged {activeTag} yet.</p>
            <button
              onClick={() => setActiveTag(null)}
              className="t-label text-ember hover:underline underline-offset-4 py-2.5 -my-2.5 inline-block"
            >
              Show all nine
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
