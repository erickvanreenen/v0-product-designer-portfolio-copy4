"use client";

import { ProjectTag } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: ProjectTag[];
  activeTag: ProjectTag | null;
  onTagChange: (tag: ProjectTag | null) => void;
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={cn(
          "text-sm px-4 py-2 rounded-full border transition-all duration-200",
          activeTag === null
            ? "bg-[#09332C] text-[#F7EDDA] border-[#09332C]"
            : "bg-transparent text-foreground/60 border-border"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={cn(
            "text-sm px-4 py-2 rounded-full border transition-all duration-200",
            activeTag === tag
              ? "bg-[#F0531C] text-white border-[#F0531C]"
              : "bg-transparent text-foreground/60 border-border"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
