import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm mb-10 link-hover"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft size={14} />
        Back to writing
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <time
            className="text-xs tabular-nums"
            style={{ color: "var(--text-muted)" }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
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

        <h1
          className="text-4xl sm:text-5xl font-bold"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          {post.title}
        </h1>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-0.5 text-xs border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
