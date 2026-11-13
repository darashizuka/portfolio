import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-center min-h-[60vh]">
      <span
        className="text-xs uppercase tracking-[0.2em] font-medium"
        style={{ color: "var(--text-muted)" }}
      >
        404
      </span>
      <h1
        className="mt-4 text-5xl sm:text-7xl font-bold"
        style={{ letterSpacing: "-0.03em" }}
      >
        Not found
      </h1>
      <p
        className="mt-4 text-lg"
        style={{ color: "var(--text-muted)" }}
      >
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
        style={{
          borderColor: "var(--accent)",
          color: "var(--accent)",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
