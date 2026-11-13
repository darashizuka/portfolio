"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "../components/ProjectCard";

interface CategoryFilterProps {
  categories: { key: string; label: string }[];
  projects: Project[];
}

export function CategoryFilter({ categories, projects }: CategoryFilterProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className="rounded-full px-4 py-1.5 text-sm font-medium border transition-all duration-200"
            style={{
              borderColor: active === cat.key ? "var(--accent)" : "var(--border)",
              backgroundColor: active === cat.key ? "var(--accent)" : "transparent",
              color: active === cat.key ? "#fff" : "var(--text-muted)",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          className="text-center py-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
