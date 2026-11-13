import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/src/data/site";
import { FadeIn } from "../components/FadeIn";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16">
      {/* Header */}
      <FadeIn>
        <div className="mb-6">
          <span
            className="text-[11px] uppercase tracking-[0.15em] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Signal / 06
          </span>
        </div>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold"
          style={{ letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text)" }}
        >
          Let&apos;s talk.
        </h1>
      </FadeIn>

      <FadeIn delay={100}>
        <p
          className="mt-10 max-w-xl text-base md:text-lg leading-relaxed md:ml-auto"
          style={{ color: "var(--text-muted)" }}
        >
          I&apos;m always glad to hear about thoughtful products, strange technical
          problems, and people doing careful work.
        </p>
      </FadeIn>

      {/* Separator */}
      <FadeIn delay={150}>
        <div
          className="mt-12 mb-16 border-t"
          style={{ borderColor: "var(--border)" }}
        />
      </FadeIn>

      {/* Two-column: info left, form right */}
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-16">
        {/* Left: contact info */}
        <FadeIn delay={200}>
          <div className="space-y-10">
            {/* Email */}
            <div>
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                Email
              </span>
              <div className="mt-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1 text-base link-hover"
                  style={{ color: "var(--text)" }}
                >
                  {SITE.email}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Elsewhere */}
            <div>
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                Elsewhere
              </span>
              <div className="mt-3 space-y-2">
                <a
                  href="https://github.com/darashizuka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-base link-hover w-fit"
                  style={{ color: "var(--text)" }}
                >
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/shizuka-dara-458348220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-base link-hover w-fit"
                  style={{ color: "var(--text)" }}
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-base link-hover w-fit"
                  style={{ color: "var(--text)" }}
                >
                  Resume
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Response */}
            <div>
              <span
                className="text-[11px] uppercase tracking-[0.15em] font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                Response
              </span>
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Usually within two working days.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Right: contact form */}
        <FadeIn delay={250}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
