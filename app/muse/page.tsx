import type { Metadata } from "next";
import { MUSE } from "@/src/data/muse";
import { FadeIn } from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Muse now",
  description:
    "What I'm learning, reading, and thinking about right now.",
};

export default function MusePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16">
      {/* Header */}
      <FadeIn>
        <div className="mb-6">
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Garden / 05
          </span>
        </div>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            style={{ letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text)" }}
          >
            Muse now
          </h1>
          <p
            className="text-sm md:text-base leading-relaxed max-w-md"
            style={{ color: "var(--text-muted)" }}
          >
            A loosely tended page of what I&apos;m learning, reading, and thinking
            about right now. Updated when the season changes.
          </p>
        </div>
      </FadeIn>

      {/* Separator + Last tended date */}
      <FadeIn delay={100}>
        <div
          className="mt-10 mb-16 border-t pt-3 flex justify-end"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Last tended / {MUSE.lastTended}
          </span>
        </div>
      </FadeIn>

      {/* 01 / CONSIDERING — full width */}
      <FadeIn delay={150}>
        <section className="mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            01 / Considering
          </span>

          <h2
            className="mt-8 text-3xl sm:text-4xl md:text-[2.75rem] font-bold max-w-2xl"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.15, color: "var(--text)" }}
          >
            {MUSE.considering.question}
          </h2>

          <p
            className="mt-6 text-sm md:text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {MUSE.considering.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {MUSE.considering.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border font-mono"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Separator */}
      <div className="h-px mb-0" style={{ backgroundColor: "var(--border)" }} />

      {/* Two-column: READING (left, tall) + LEARNING & AWAY FROM KEYS (right) */}
      <div className="grid md:grid-cols-2 gap-0">
        {/* LEFT: READING — extends full height */}
        <FadeIn delay={200}>
          <div
            className="border-r-0 md:border-r pr-0 md:pr-8"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="pt-6 pb-4">
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                02 / Reading/Listening
              </span>
            </div>

            <div>
              {MUSE.reading.map((book, i) => (
                <div
                  key={book.title}
                  className="py-5 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h3
                    className="text-[15px] font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {book.title}
                  </h3>
                  <p
                    className="mt-1 text-[12px] uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* RIGHT: LEARNING + AWAY FROM KEYS */}
        <div className="pl-0 md:pl-8">
          {/* LEARNING — dark card */}
          <FadeIn delay={250}>
            <div className="pt-6 pb-4">
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                03 / Learning
              </span>
            </div>
            <div
              className="p-8 rounded-none"
              style={{ backgroundColor: "var(--bg-learning)", color: "var(--text-learning)" }}
            >
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}
              >
                {MUSE.learning.title}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed opacity-70"
              >
                {MUSE.learning.description}
              </p>
              {/* Progress bar */}
              <div className="mt-6">
                <div
                  className="h-[6px] w-full rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${MUSE.learning.progress}%`,
                      background: "var(--rainbow)",
                    }}
                  />
                </div>
                <span className="mt-2 inline-block text-[12px] font-mono opacity-60">
                  {MUSE.learning.progress}%
                </span>
              </div>
            </div>
          </FadeIn>

          {/* AWAY FROM KEYS */}
          <FadeIn delay={300}>
            <div className="pt-10 pb-4">
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                04 / Away from keys
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold leading-snug"
              style={{ letterSpacing: "-0.02em", color: "var(--text)" }}
            >
              {MUSE.awayFromKeys}
            </h3>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
