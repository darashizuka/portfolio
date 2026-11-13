import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/types";
import { FadeIn } from "./FadeIn";

export function WritingCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <FadeIn delay={index * 80}>
      <Link
        href={`/writing/${post.slug}`}
        className="group flex items-start gap-6 rounded-xl border p-5 sm:p-6 card-hover"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <time
              className="text-xs tabular-nums"
              style={{ color: "var(--text-muted)" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {post.readingTime}
            </span>
          </div>

          <h3
            className="mt-2 text-lg font-semibold leading-snug"
            style={{ color: "var(--text)" }}
          >
            {post.title}
          </h3>

          <p
            className="mt-2 text-sm leading-relaxed line-clamp-2"
            style={{ color: "var(--text-muted)" }}
          >
            {post.excerpt}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2.5 py-0.5 text-xs border"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{ color: "var(--text-muted)" }}
        />
      </Link>
    </FadeIn>
  );
}
