import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    title: "Hallucination Detection",
    slug: "hallucination-gnn",
    categories: ["ml", "research"],
    description:
      "Graph Neural Network that detects hallucinations in multi-turn LLM conversations by modeling dialogue turns as graph nodes with NLI-scored consistency edges via DeBERTa.",
    tags: ["PyTorch Geometric", "GCN", "DeBERTa", "NLI"],
    links: { github: "https://github.com/darashizuka/Hallucination_GNN" },
    pinned: true,
    year: 2025,
  },
  {
    title: "Composed Image Retrieval for Fashion",
    slug: "fashion-cir",
    categories: ["ml"],
    description:
      "Multimodal retrieval system fusing reference images with natural language modifications to find matching items from a 338K-item fashion catalog using CLIP and contrastive learning.",
    tags: ["PyTorch", "CLIP ViT-B/32", "Contrastive Learning"],
    links: { github: "https://github.com/darashizuka/FashionCIR" },
    pinned: true,
    year: 2025,
  },
  {
    title: "Multilingual Text-to-Motion Generation",
    slug: "text-to-motion",
    categories: ["ml"],
    description:
      "Generates human motion sequences from English and Chinese text prompts by replacing CLIP with multilingual encoders (mT5, mBERT) in a T2M-GPT + VQ-VAE pipeline.",
    tags: ["PyTorch", "mBERT", "mT5", "GPT-2", "VQ-VAE"],
    links: { github: "https://github.com/darashizuka/Text-to-motion_EN_and_Chinese" },
    pinned: true,
    year: 2025,
  },
  {
    title: "Bridge: Knowledge Gap Finder",
    slug: "bridge",
    categories: ["ml", "web"],
    description:
      "Identifies knowledge gaps in learning material and suggests targeted resources to bridge them.",
    tags: ["NLP", "React", "Python"],
    links: { github: "https://github.com/darashizuka/bridge" },
    pinned: false,
    year: 2026,
  },
  {
    title: "PM Copilot",
    slug: "pm-copilot",
    categories: ["ml"],
    description:
      "AI-powered product management assistant for prioritization, spec writing, and decision support.",
    tags: ["LLM", "React", "Python"],
    links: { github: "https://github.com/darashizuka/pm-copilot" },
    pinned: false,
    year: 2026,
  },
  {
    title: "Multimodal AI Coding Interviewer",
    slug: "coding-interviewer",
    categories: ["web", "ml"],
    description:
      "Real-time AI mock interview platform combining voice interaction, webcam-based distraction detection via a custom ResNet-18 classifier, and in-browser Python execution via Pyodide.",
    tags: ["React", "Socket.IO", "Groq API", "PyTorch", "Pyodide"],
    links: { github: "https://github.com/xqsong-angie/Realtime-Coding-Interviewer" },
    pinned: false,
    year: 2025,
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    categories: ["web"],
    description:
      "This website. Data-driven, editorial-style portfolio built with Next.js, Tailwind, and MDX.",
    tags: ["Next.js", "React", "Tailwind", "MDX"],
    links: {},
    pinned: false,
    year: 2026,
  },
  {
    title: "LLM Inference Profiler",
    slug: "llm-profiler",
    categories: ["experiments", "ml"],
    description:
      "Benchmarking and optimization toolkit for ML inference pipelines — profiling latency, throughput, and resource utilization across model architectures.",
    tags: ["PyTorch", "Profiling", "CUDA"],
    links: { github: "https://github.com/darashizuka/ML-Inference-Optimization" },
    pinned: false,
    year: 2026,
  },
  {
    title: "MyDB in C++",
    slug: "mydb",
    categories: ["systems"],
    description:
      "A relational database engine built from scratch: query parsing, B+ tree indexing, buffer management, and transaction support.",
    tags: ["Java", "B+ Tree", "SQL", "DBMS"],
    links: { github: "https://github.com/darashizuka/MyDB-Relational-Database-Engine" },
    pinned: false,
    year: 2026,
  },
  {
    title: "Time Series: Wildfire",
    slug: "wildfire-prediction",
    categories: ["ml"],
    description:
      "Two-stage pipeline forecasting Fire Risk Index using ARMAX/GARCH models, then classifying fire occurrence with XGBoost and neural networks.",
    tags: ["ARMAX", "GARCH", "XGBoost", "TensorFlow"],
    links: { github: "https://github.com/darashizuka/Wildfire-Prediction-Using-Time-Series-Data" },
    pinned: false,
    year: 2024,
  },
  {
    title: "EM Learnware",
    slug: "em-learnware",
    categories: ["research","web"],
    description:
      "Interactive educational hardware and software simulations for electromagnetic concepts, published as a book chapter.",
    tags: ["Arduino", "TF Luna", "Education"],
    links: {
      github: "https://github.com/darashizuka/EM-learnware",
      paper: "https://books.google.com/books?hl=en&lr=&id=50uREQAAQBAJ&oi=fnd&pg=PA189&dq=shizuka+dara&ots=RZ2OlLlb3O&sig=UN5foXybQCzDhIeNOd0hfy9TtuQ",
    },
    pinned: false,
    year: 2024,
  },
  {
    title: "Chaining Embodied Learning",
    slug: "chaining-embodied-learning",
    categories: ["research","web"],
    description:
      "Research on chained embodied learning approaches, published at ICCE conference proceedings.",
    tags: ["Education", "Embodied Learning"],
    links: {
      paper: "https://library.apsce.net/index.php/ICCE/article/view/6042",
    },
    pinned: false,
    year: 2023,
  },
  {
    title: "Pore-Forming Protein Classification",
    slug: "protein-classification",
    categories: ["research", "ml"],
    description:
      "ML pipeline benchmarking SVM, Random Forest, XGBoost, and neural networks across 7 protein feature representations including ESM and ProtBERT embeddings.",
    tags: ["PyTorch", "ESM", "ProtBERT", "XGBoost"],
    links: { github: "https://github.com/darashizuka/Pore-forming-proteins" },
    pinned: false,
    year: 2024,
  },
  {
    title: "GloVe for Biometric Data",
    slug: "glove-biometric",
    categories: ["ml", "research"],
    description:
      "Applying GloVe word embeddings to biometric and academic performance data for pattern discovery.",
    tags: ["GloVe", "NLP", "Python"],
    links: { github: "https://github.com/darashizuka/biometric_cgpa" },
    pinned: false,
    year: 2023,
  },
  {
    title: "Chess DBMS",
    slug: "chess-dbms",
    categories: ["systems"],
    description:
      "Database management system for chess game records: storage, querying, and analysis of game data.",
    tags: ["SQL", "DBMS", "Python"],
    links: { github: "https://github.com/darashizuka/chess_dbms" },
    pinned: false,
    year: 2023,
  },
  {
    title: "MealMate App",
    slug: "mealmate",
    categories: ["web"],
    description:
      "Full-stack React and Firebase web app connecting users for social dining experiences",
    tags: ["React", "Node.js", "MongoDB"],
    links: { github: "https://github.com/darashizuka/mealmate-app" },
    pinned: false,
    year: 2024,
  },
  {
    title: "Gruve: GPU Orchestration",
    slug: "gruve",
    categories: ["systems", "ml"],
    description:
      "Kubernetes-based GPU Job-as-a-Service platform for scalable ML workload orchestration.",
    tags: ["Kubernetes", "Go", "GPU"],
    links: {},
    pinned: false,
    year: 2026,
  },
  {
    title: "AI Conversational Engine",
    slug: "ai-conversational-engine",
    categories: ["ml", "web"],
    description:
      "RAG-powered conversational engine for product discovery, built at Rice Office of Information Technology.",
    tags: ["RAG", "LLM", "Python"],
    links: {},
    pinned: false,
    year: 2026,
  },
  {
    title: "Bandi Satellite Research",
    slug: "bandi-research",
    categories: ["research"],
    description:
      "Computed precise satellite receiver positions using geodetic algorithms at Bandi Research Group.",
    tags: ["GNSS", "Python", "Geodesy"],
    links: {},
    pinned: false,
    year: 2023,
  },
];

export const PINNED_PROJECTS = PROJECTS.filter((p) => p.pinned);

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML / AI" },
  { key: "systems", label: "Systems" },
  { key: "web", label: "Web" },
  { key: "research", label: "Research" },
  { key: "experiments", label: "Experiments" },
] as const;
