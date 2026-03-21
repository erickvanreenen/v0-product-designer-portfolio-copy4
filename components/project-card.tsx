import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { CardVisual } from "@/components/card-visual";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article>

        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-[#F7EDDA]">
          <div className="absolute inset-0 group-hover:scale-[1.018] transition-transform duration-500 ease-out">
            <CardVisual slug={project.slug} />
          </div>
          {/* Hover overlay with arrow */}
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-[#F0531C] text-white w-8 h-8 flex items-center justify-center translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-foreground/35 font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-[#F0531C] transition-colors duration-200 leading-snug mb-1.5">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-foreground/55 leading-relaxed mb-5">
          {project.subtitle}
        </p>

        {/* Key outcome */}
        {project.outcomes[0] && (
          <p className="text-xs text-foreground/40 border-t border-border/70 pt-4 leading-relaxed">
            {project.outcomes[0]}
          </p>
        )}

      </article>
    </Link>
  );
}
