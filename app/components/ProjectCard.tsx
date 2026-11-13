"use client";

import { useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import { FadeIn } from "./FadeIn";

const CORNER_COLORS = ["#ff6b5a", "#4f5bd5", "#c8ff00", "#00d7ad", "#b15cff", "#f9cb28"];

const CATEGORY_LABELS: Record<string, string> = {
  ml: "ML / AI",
  systems: "SYSTEMS",
  web: "WEB",
  research: "RESEARCH",
  experiments: "EXPERIMENTS",
  other: "OTHER",
};

export function ProjectCard({
  project,
  index = 0,
  large = false,
}: {
  project: Project;
  index?: number;
  large?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const hasLink = !!(project.links.github || project.links.live || project.links.paper);
  const href = project.links.github || project.links.live || project.links.paper || "#";
  const cornerColor = CORNER_COLORS[index % CORNER_COLORS.length];
  const num = String(index + 1).padStart(2, "0");
  const primaryCat = project.categories[0] || "other";
  const catLabel = CATEGORY_LABELS[primaryCat] || primaryCat.toUpperCase();

  const cardContent = (
    <div className={`flex flex-1 flex-col p-6 ${large ? "sm:p-8" : "sm:p-6"}`}>
      <div className="flex items-center justify-between mb-auto">
        <span
          className="text-[11px] uppercase tracking-[0.15em] font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          {num} / {catLabel}
        </span>
        {project.pinned && (
          <span className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Pinned
          </span>
        )}
      </div>

      <h3
        className={`mt-8 font-bold leading-[1.1] ${large ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl"}`}
        style={{ letterSpacing: "-0.03em", color: "var(--text)" }}
      >
        {project.title.split(" ").slice(0, large ? 4 : 3).join(" ")}
      </h3>

      <p
        className={`mt-4 leading-relaxed ${large ? "text-base max-w-lg" : "text-sm"}`}
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      <div className="mt-auto pt-6 flex items-end justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
        {hasLink ? (
          <div className="flex items-center gap-3">
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-mono uppercase tracking-wider transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                Publication ↗
              </a>
            )}
            <ArrowUpRight
              size={20}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        ) : (
          <Lock size={16} style={{ color: "var(--text-muted)" }} />
        )}
      </div>
    </div>
  );

  const flipBack = (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 border card-flip-back"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <Lock size={28} style={{ color: "var(--text-muted)" }} />
      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
        This project is not public.
      </p>
      <button
        onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
        className="mt-2 text-xs font-mono uppercase tracking-wider transition-opacity hover:opacity-70"
        style={{ color: "var(--text-muted)" }}
      >
        ← Back
      </button>
    </div>
  );

  if (hasLink) {
    return (
      <FadeIn delay={index * 80} className="h-full">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group flex flex-col rounded-none border h-full"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-card)",
            "--corner-color": cornerColor,
          } as React.CSSProperties}
        >
          {cardContent}
        </a>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 80} className="h-full">
      <div
        className="card-flip-container h-full"
        style={{ perspective: "1000px" }}
      >
        <div
          className={`card-flip-inner relative h-full transition-transform duration-500 ${flipped ? "card-flipped" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            onClick={() => setFlipped(true)}
            className="project-card group flex flex-col rounded-none border h-full cursor-pointer card-flip-front"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-card)",
              "--corner-color": cornerColor,
              backfaceVisibility: "hidden",
            } as React.CSSProperties}
          >
            {cardContent}
          </div>
          {flipBack}
        </div>
      </div>
    </FadeIn>
  );
}
