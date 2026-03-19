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
    <Link href={`/projects/${project.slug}`} className="group flex flex-col h-full">
      <article className="flex flex-col h-full rounded-2xl overflow-hidden bg-white">

        {/* Thumbnail */}
        <div className="relative bg-[#E2F5EF] overflow-hidden aspect-[16/10]">
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

          {project.thumbnailLogo && (
            <div className="absolute bottom-4 left-4">
              <div className="h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded px-2 py-1">
                <Image
                  src={project.thumbnailLogo}
                  alt={`${project.title} logo`}
                  width={80}
                  height={24}
                  className="object-contain max-h-5"
                />
              </div>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={14} className="text-[#F7EDDA]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 pt-5 pb-6">

          {/* Tags — top */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#09332C]/75 bg-[#F7EDDA] rounded-md px-3 h-6 inline-flex items-center whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title + subtitle */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-[#F0531C] transition-colors duration-200 leading-snug mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Key outcome — prominent */}
          {project.outcomes[0] && (
            <div className="mt-6 pt-5 border-t border-border">
              <div className="border-l-2 border-[#F0531C] pl-4">
                <p className="text-sm text-foreground/80 leading-relaxed">{project.outcomes[0]}</p>
              </div>
            </div>
          )}

        </div>
      </article>
    </Link>
  );
}
