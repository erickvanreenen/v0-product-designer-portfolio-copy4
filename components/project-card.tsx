import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { CardVisual } from "@/components/card-visual";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-accent={project.accent}
      className="group block h-full focus-visible:outline-none"
    >
      {/*
        Each card is its own white surface on the cream page. Without it the
        cards ran together, since the only separation was whitespace.
      */}
      <article className="h-full flex flex-col bg-surface border border-line transition-colors duration-300 group-hover:border-accent/45">
        <div className="relative overflow-hidden aspect-[8/5] bg-accent-wash">
          <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
            <CardVisual slug={project.slug} />
          </div>
          <span
            className="absolute bottom-0 right-0 w-9 h-9 flex items-center justify-center bg-accent text-white
                       translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0
                       transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="flex flex-col flex-1 p-5 md:p-6">
          {/*
            Title and client stack rather than sitting on one row. Some client
            names are long enough to blow out a flex row on a narrow screen.
          */}
          <h3 className="t-h2 text-2xl md:text-[26px] text-ink group-hover:text-accent transition-colors duration-200 break-words">
            {project.title}
          </h3>
          <p className="t-label text-ink/45 mt-1.5 break-words">{project.client}</p>

          <p className="text-[15px] text-ink/65 leading-relaxed mt-3.5 mb-5">
            {project.subtitle}
          </p>

          <div className="mt-auto pt-4 border-t border-line">
            {project.metric ? (
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="t-num text-lg font-semibold text-accent">
                  {project.metric.value}
                </span>
                <span className="t-label text-ink/45">{project.metric.label}</span>
              </div>
            ) : (
              <p className="text-[13px] text-ink/50 leading-relaxed">
                {project.outcomes[0]}
              </p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
