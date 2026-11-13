import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  number: string;
  title: string;
  description?: string;
  showRainbow?: boolean;
}

export function SectionHeader({
  label,
  number,
  title,
  description,
  showRainbow = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24">
      {showRainbow && (
        <div
          className="h-[2px] mb-8"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--signal), var(--acid))" }}
        />
      )}
      <FadeIn>
        <span
          className="text-xs uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {label} / {number}
        </span>
      </FadeIn>
      <FadeIn delay={100}>
        <h1
          className="mt-4 text-5xl sm:text-7xl md:text-[5.5rem] font-bold"
          style={{
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--text)",
          }}
        >
          {title}
        </h1>
      </FadeIn>
      {description && (
        <FadeIn delay={200}>
          <p
            className="mt-8 max-w-lg text-lg leading-relaxed md:ml-auto md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
