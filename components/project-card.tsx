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
      className="group block focus-visible:outline-none"
    >
      <article>
        <div className="relative overflow-hidden aspect-[8/5] mb-6 bg-accent-wash">
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

        <div className="flex items-baseline gap-3 mb-1">
          <h3 className="t-h2 text-2xl md:text-[28px] text-ink group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <span className="t-label text-ink/40 truncate">{project.client}</span>
        </div>

        <p className="text-[15px] text-ink/60 leading-relaxed measure-sm mb-4">
          {project.subtitle}
        </p>

        {project.metric ? (
          <div className="flex items-baseline gap-2.5 border-t border-line pt-4">
            <span className="t-num text-lg font-semibold text-accent">{project.metric.value}</span>
            <span className="t-label text-ink/45">{project.metric.label}</span>
          </div>
        ) : (
          <p className="text-[13px] text-ink/45 border-t border-line pt-4 leading-relaxed">
            {project.outcomes[0]}
          </p>
        )}
      </article>
    </Link>
  );
}
