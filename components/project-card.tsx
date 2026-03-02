import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article>
        {/* Thumbnail */}
        <div className={`relative bg-[#09332C] overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-[#F7EDDA]/10 select-none">{project.title}</span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={14} className="text-[#F7EDDA]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-foreground/30">{tag}</span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#09332C] group-hover:text-[#F0531C] transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/50 line-clamp-2">
            {project.subtitle}
          </p>

          {featured && project.outcomes[0] && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-1">Key outcome</p>
              <p className="text-sm text-foreground/50">{project.outcomes[0]}</p>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
