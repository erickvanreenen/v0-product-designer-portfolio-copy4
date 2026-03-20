"use client";

import { useState } from "react";
import { ProjectTag } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: ProjectTag[];
  activeTag: ProjectTag | null;
  onTagChange: (tag: ProjectTag | null) => void;
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  const [paused, setPaused] = useState(false);
  const allItems: ProjectTag[] = [...tags];

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-2"
        style={{
          width: "max-content",
          animation: "tag-ticker 28s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...allItems, ...allItems].map((tag, i) => (
          <button
            key={i}
            onClick={() => onTagChange(tag)}
            className={cn(
              "text-sm px-4 py-2 rounded-full border transition-all duration-200 shrink-0 cursor-pointer",
              activeTag === tag
                ? "bg-[#F0531C] text-white border-[#F0531C]"
                : "bg-white text-foreground/80 border-border hover:border-foreground/40"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
