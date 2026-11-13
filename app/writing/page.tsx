import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { SectionHeader } from "../components/SectionHeader";
import { WritingCard } from "../components/WritingCard";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, notes, and technical writing.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        label="WRITING"
        number="04"
        title="Writing"
        description="Essays, notes, and things I've been thinking about."
        showRainbow
      />

      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <WritingCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <p
          className="text-center py-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          No posts yet. Drop an .mdx file in content/writings/ to get started.
        </p>
      )}
    </div>
  );
}
