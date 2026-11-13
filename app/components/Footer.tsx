import { SOCIAL_LINKS } from "@/src/data/social";

export function Footer() {
  const externalLinks = SOCIAL_LINKS;

  return (
    <footer
      className="relative z-10 border-t px-6"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
        {/* Spacer for centering on desktop */}
        <div className="hidden sm:block w-48" />

        {/* Social links centered */}
        <div className="flex items-center gap-6">
          {externalLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("/") || s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("/") || s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-1 text-sm transition-colors duration-200 hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              {s.label}
              {!s.href.startsWith("/") && !s.href.startsWith("mailto:") && (
                <span className="text-xs">&#8599;</span>
              )}
            </a>
          ))}
        </div>

        {/* Copyright + font credit */}
        <div className="text-right leading-tight">
          <span
            className="text-[11px] uppercase tracking-wider font-mono block"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; {new Date().getFullYear()} Shizuka Dara
          </span>
          <span
            className="text-[11px] uppercase tracking-wider font-mono block"
            style={{ color: "var(--text-muted)" }}
          >
           
          </span>
        </div>
      </div>
    </footer>
  );
}
