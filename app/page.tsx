import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/src/data/site";
import { PINNED_PROJECTS } from "@/src/data/projects";
import { TIMELINE } from "@/src/data/timeline";
import { getRecentPosts } from "@/lib/mdx";
import { FadeIn } from "./components/FadeIn";
import { ProjectCard } from "./components/ProjectCard";
import { Trajectory } from "./components/Trajectory";

export default function Home() {
  const recentPosts = getRecentPosts(3);

  return (
    <div>
      {/* Status bar */}
      <div
        className="border-b px-6"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-[1400px] flex items-center gap-2 py-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Open for full time roles
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 min-h-[30vh] flex items-end pb-16 pt-12">
        <div className="animate-fade-up">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug max-w-2xl text-[var(--text)] text-pretty">
  {SITE.bio}
</h1>
        </div>
      </section>


      {/* Selected Work */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <FadeIn>
          <div className="flex items-start justify-between mb-12">
            <div>
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                01 / Selected Work
              </span>
              <h2
                className="mt-3 text-4xl sm:text-5xl font-bold"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                A few things I&apos;ve built.
              </h2>
            </div>
            <Link
              href="/builds"
              className="hidden sm:flex items-center gap-2 text-sm mt-4 link-hover"
              style={{ color: "var(--text-muted)" }}
            >
              View all builds
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        {/* 3-card grid: 1 tall left, 2 stacked right */}
        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:grid-rows-[1fr_1fr]">
          {PINNED_PROJECTS[0] && (
            <div className="md:row-span-2 h-full">
              <ProjectCard project={PINNED_PROJECTS[0]} index={0} large />
            </div>
          )}
          {PINNED_PROJECTS[1] && (
            <ProjectCard project={PINNED_PROJECTS[1]} index={1} />
          )}
          {PINNED_PROJECTS[2] && (
            <ProjectCard project={PINNED_PROJECTS[2]} index={2} />
          )}
        </div>

        <Link
          href="/builds"
          className="sm:hidden mt-8 flex items-center gap-2 text-sm link-hover"
          style={{ color: "var(--text-muted)" }}
        >
          View all builds
          <ArrowRight size={14} />
        </Link>
      </section>

      {/* Trajectory */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <FadeIn>
          <div className="mb-12">
            <span
              className="text-[11px] uppercase tracking-[0.15em] font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              02 / Trajectory
            </span>
            <h2
              className="mt-3 text-4xl sm:text-5xl font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Where I&apos;ve been.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <Trajectory entries={TIMELINE} />
        </FadeIn>

        <FadeIn delay={200}>
          <Link
            href="/past"
            className="mt-8 inline-flex items-center gap-2 text-sm link-hover"
            style={{ color: "var(--text-muted)" }}
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>

      {/* Workbench / Recent Activity */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <FadeIn>
          <div className="mb-10">
            <span
              className="text-[11px] uppercase tracking-[0.15em] font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              03 / Recent Activity
            </span>
            <h2
              className="mt-3 text-4xl sm:text-5xl font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Notes from the workbench.
            </h2>
          </div>
        </FadeIn>

        {/* Accent top line */}
        <div
          className="h-[2px]"
          style={{ backgroundColor: "var(--accent)" }}
        />

        {/* Separator line */}
        <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

        {/* Activity rows */}
        {recentPosts.length > 0 ? (
          recentPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 80}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-center py-5 transition-colors duration-200 hover:opacity-70"
              >
                <span
                  className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-mono w-28 shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  Writing
                </span>
                <span
                  className="flex-1 text-[15px] font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {post.title}
                </span>
                <span
                  className="hidden sm:inline text-[11px] uppercase tracking-wider font-mono mr-4 shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                  }).toUpperCase()}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0"
                  style={{ color: "var(--text-muted)" }}
                />
              </Link>
              <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
            </FadeIn>
          ))
        ) : (
          /* Placeholder rows when no posts exist yet */
          PINNED_PROJECTS.slice(0, 3).map((p, i) => (
            <FadeIn key={p.slug} delay={i * 80}>
              <a
                href={p.links.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center py-5 transition-colors duration-200 hover:opacity-70"
              >
                <span
                  className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-mono w-28 shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {i === 0 ? "Research" : i === 1 ? "Shipped" : "Build"}
                </span>
                <span
                  className="flex-1 text-[15px] font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </span>
                <span
                  className="hidden sm:inline text-[11px] uppercase tracking-wider font-mono mr-4 shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.year}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0"
                  style={{ color: "var(--text-muted)" }}
                />
              </a>
              <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
            </FadeIn>
          ))
        )}

        {/* View all link */}
        <FadeIn delay={300}>
          <Link
            href="/writing"
            className="mt-6 inline-flex items-center gap-2 text-sm link-hover"
            style={{ color: "var(--text-muted)" }}
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <FadeIn>
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Have something interesting in mind?
          </span>
          <Link
            href="/contact"
            className="group mt-4 flex items-center gap-6"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold link-hover"
              style={{
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
              }}
            >
              Let&apos;s talk.
            </h2>
            <ArrowRight
              size={40}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
              style={{ color: "var(--text)" }}
            />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
