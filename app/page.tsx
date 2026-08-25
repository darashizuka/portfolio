"use client";

import { ArrowUpRight, Mail, FileText } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/darashizuka", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/shizuka-dara-458348220", icon: LinkedinIcon },
  { label: "Email", href: "mailto:darashizuka2002@gmail.com", icon: Mail },
  { label: "Resume", href: "/resume.pdf", icon: FileText },
];

const PROJECTS = [
  {
    title: "Hallucination Detection in LLM Dialogues",
    description:
      "Graph Neural Network that detects hallucinations in multi-turn LLM conversations by modeling dialogue turns as graph nodes with NLI-scored consistency edges via DeBERTa.",
    tags: ["PyTorch Geometric", "GCN", "DeBERTa", "NLI"],
    metrics: [
      { label: "F1 Score", value: "0.818" },
      { label: "vs Baseline", value: "+19%" },
      { label: "Dialogues", value: "1,592" },
    ],
    github: "https://github.com/darashizuka/Hallucination_GNN",
    color: "#8b5cf6",
  },
  {
    title: "Composed Image Retrieval for Fashion",
    description:
      "Multimodal retrieval system fusing reference images with natural language modifications to find matching items from a 338K-item fashion catalog using CLIP and contrastive learning.",
    tags: ["PyTorch", "CLIP ViT-B/32", "Contrastive Learning"],
    metrics: [
      { label: "R@1 Lift", value: "4.6x" },
      { label: "R@10", value: "73.3%" },
      { label: "Samples", value: "338K" },
    ],
    github: "https://github.com/darashizuka/FashionCIR",
    color: "#ec4899",
  },
  {
    title: "Multilingual Text-to-Motion Generation",
    description:
      "Generates human motion sequences from English and Chinese text prompts by replacing CLIP with multilingual encoders (mT5, mBERT) in a T2M-GPT + VQ-VAE pipeline.",
    tags: ["PyTorch", "mBERT", "mT5", "GPT-2", "VQ-VAE"],
    metrics: [
      { label: "FID", value: "0.073" },
      { label: "R@1", value: "0.507" },
      { label: "Dataset", value: "HumanML3D" },
    ],
    github: "https://github.com/darashizuka/Text-to-motion_EN_and_Chinese",
    color: "#f59e0b",
  },
  {
    title: "Wildfire Prediction from Time Series",
    description:
      "Two-stage pipeline forecasting Fire Risk Index using ARMAX/GARCH models, then classifying fire occurrence with XGBoost and neural networks.",
    tags: ["ARMAX", "GARCH", "XGBoost", "TensorFlow"],
    metrics: [
      { label: "TS Models", value: "6+" },
      { label: "Classifiers", value: "5" },
      { label: "Eval", value: "ROC-AUC" },
    ],
    github: "https://github.com/darashizuka/Wildfire-Prediction-Using-Time-Series-Data",
    color: "#ef4444",
  },
  {
    title: "Pore-Forming Protein Classification",
    description:
      "ML pipeline benchmarking SVM, Random Forest, XGBoost, and neural networks across 7 protein feature representations including ESM and ProtBERT embeddings.",
    tags: ["PyTorch", "ESM", "ProtBERT", "XGBoost", "scikit-learn"],
    metrics: [
      { label: "Combos", value: "28+" },
      { label: "Features", value: "7 types" },
      { label: "Arch", value: "Adaptive" },
    ],
    github: "https://github.com/darashizuka/Pore-forming-proteins",
    color: "#10b981",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Gruve AI",
    period: "Jun — Aug 2026",
    points: [
      "Built a GPU Job-as-a-Service platform for submitting ML training jobs to Kubernetes — reduced job setup time by 95%",
      "Built a gRPC control plane for deploying AI inference engines (vLLM, Triton) via KServe — cut deployment from 15 min to 30 sec",
      "Developed a FastAPI gateway with API-key auth and per-request token metering across PostgreSQL tables",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "TTI @ Rice University",
    period: "Jan — May 2026",
    points: [
      "Built an AI interview agent automating the product discovery pipeline — reduced cycle time from 3 weeks to ~6 hours",
      "Developed a conversational engine on Vertex AI with RAG-enriched context and multi-format document ingestion",
      "Processed audio, video, PDFs, and presentations via Cloud Speech-to-Text V2 into a unified RAG corpus",
    ],
  },
  {
    role: "Research Intern",
    company: "Tata Institute of Fundamental Research (TIFR)",
    period: "May — Aug 2024",
    points: [
      "Built an interactive 3D electromagnetic induction simulator using Three.js, visualizing Faraday's and Lenz's laws with precomputed magnetic field streamlines",
      "Developed a Python pipeline to compute magnetic field streamline data and export as JSON for real-time 3D rendering in the browser",
      "Deployed as a zero-install web application on GitHub Pages for physics education and research visualization",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "R", "Bash/Shell"],
  },
  {
    label: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Django", "Flask", "Node.js", "React", "Next.js", "LangChain", "LangGraph", "Hadoop", "pytest"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Neo4j", "Pinecone", "FAISS", "ChromaDB"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS, ELB)", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Git"],
  },
];

export default function Home() {
  return (
    <>
      {/* Sticky Nav */}
      <nav
        className="fixed top-0 z-50 w-full border-b border-[var(--border)]"
        style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">
            Shizuka Dara
          </a>
          <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
            {["Projects", "Experience", "Skills"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {s}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="rounded-full border border-[var(--accent)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <header
          className="flex min-h-[85vh] flex-col justify-center pt-16"
          style={{
            background: `linear-gradient(180deg, var(--hero-gradient-from) 0%, var(--hero-gradient-to) 100%)`,
          }}
        >
          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
            <div className="flex-1">
              <div className="animate-fade-up">
                <div className="mb-4 inline-block rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted)]">
                  MS Computer Science @ Rice University &middot; 3.96 GPA
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Hi, I&apos;m{" "}
                  <span style={{ color: "var(--accent)" }}>Shizuka</span>
                </h1>
              </div>
              <p className="animate-fade-up-delay-1 mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                I gravitate toward problems where the model is only half the challenge. Where the real work is in how you move data, orchestrate compute, and build something that holds up under real constraints. I care as much about the system around the model as the model itself.
              </p>
            </div>
            <div className="animate-fade-up shrink-0">
              <img
                src="/photo.jpg"
                alt="Shizuka Dara"
                className="h-36 w-36 rounded-full border-2 border-[var(--border)] object-cover shadow-lg sm:h-44 sm:w-44"
              />
            </div>
          </div>
          <div className="animate-fade-up-delay-2 mt-8 flex gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("/") ? undefined : "_blank"}
                rel={s.href.startsWith("/") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <div className="animate-fade-up-delay-3 mt-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              See my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </header>

        {/* Projects */}
        <section id="projects" className="py-20">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Research and engineering work in ML, NLP, computer vision, and systems.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "var(--shadow-card)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                {/* Color accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: p.color }}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-snug">{p.title}</h3>
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--muted)] opacity-0 transition-all group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {p.description}
                  </p>
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--tag-bg)] px-2.5 py-0.5 text-xs text-[var(--tag-text)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-sm font-semibold" style={{ color: p.color }}>
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <p className="mt-2 text-[var(--muted)]">
              Internships in ML infrastructure and AI engineering.
            </p>
          </div>
          <div className="relative space-y-12 pl-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[var(--timeline-line)]">
            {EXPERIENCE.map((e) => (
              <div key={e.role + e.company} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]"
                />
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-semibold">
                      {e.role}
                    </h3>
                    <span className="shrink-0 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">{e.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-4 text-sm leading-relaxed text-[var(--muted)] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)]"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Technologies I work with regularly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_GROUPS.map((g) => (
              <div
                key={g.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {g.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--tag-bg)] px-3 py-1 text-sm text-[var(--tag-text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] py-10 text-sm text-[var(--muted)]">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <span>&copy; 2026 Shizuka Dara</span>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("/") ? undefined : "_blank"}
                  rel={s.href.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
