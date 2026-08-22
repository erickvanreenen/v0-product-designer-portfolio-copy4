"use client";

import { ProjectTag } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: ProjectTag[];
  activeTag: ProjectTag | null;
  onTagChange: (tag: ProjectTag | null) => void;
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  const base =
    "t-label px-3 py-2 border transition-colors duration-200";

  return (
    <div role="group" aria-label="Filter projects by discipline" className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        aria-pressed={activeTag === null}
        className={cn(
          base,
          activeTag === null
            ? "bg-ink text-paper border-ink"
            : "bg-transparent text-ink/50 border-line hover:border-ink/40 hover:text-ink"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(activeTag === tag ? null : tag)}
          aria-pressed={activeTag === tag}
          className={cn(
            base,
            activeTag === tag
              ? "bg-ember text-white border-ember"
              : "bg-transparent text-ink/50 border-line hover:border-ink/40 hover:text-ink"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
