import type { Metadata } from "next";
import { PROJECTS, PROJECT_CATEGORIES } from "@/src/data/projects";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { CategoryFilter } from "./CategoryFilter";

export const metadata: Metadata = {
  title: "Builds",
  description: "Projects and builds — ML, systems, web, and research work.",
};

export default function BuildsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        label="BUILDS"
        number="02"
        title="Builds"
        description="Research and engineering work in ML, NLP, computer vision, web and systems."
        showRainbow
      />

      <CategoryFilter
        categories={PROJECT_CATEGORIES as unknown as { key: string; label: string }[]}
        projects={PROJECTS}
      />
    </div>
  );
}
