import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { CardVisual } from "@/components/card-visual";

/*
  Home page project card. A visual, what the project shows, the title, one
  line, and a link that says where it goes.

  The capability tag replaces the old "What I do" list: rather than claiming a
  skill, each card names the skill its project demonstrates. The Work page keeps
  the fuller ProjectCard with its metric.
*/
export function WorkCard({ project, shows }: { project: Project; shows: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-accent={project.accent}
      className="group flex flex-col h-full bg-surface border border-line
                 transition-[transform,box-shadow,border-color] duration-300 ease-out
                 hover:border-accent hover:shadow-[0_14px_30px_-14px_rgba(9,51,44,.35)] motion-safe:hover:-translate-y-1
                 focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[0_14px_30px_-14px_rgba(9,51,44,.35)]"
    >
      <div className="relative overflow-hidden aspect-[8/5] bg-accent-wash">
        <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <CardVisual slug={project.slug} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Slightly tighter tracking than t-label so the longest tag fits one line at four across */}
        <p className="t-label tracking-[0.06em] whitespace-nowrap text-accent">{shows}</p>
        <h3 className="mt-3 text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="t-label text-ink/45 mt-1.5">{project.client}</p>
        <p className="mt-2 mb-6 text-[14px] text-ink/75 leading-relaxed">{project.subtitle}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View project
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}
