"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { TimelineEntry } from "@/src/data/timeline";

export function Trajectory({ entries }: { entries: TimelineEntry[] }) {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const first = entries[0];
  const second = entries[1];

  function advance() {
    if (step === 0) {
      setStep(1);
    } else {
      router.push("/past");
    }
  }

  return (
    <div className="relative">
      <div className="flex items-start gap-0">
        {/* Dot 1 + content */}
        <div className="flex flex-col items-center">
          <div
            className="w-3 h-3 rounded-full border-2"
            style={{
              borderColor: "var(--text)",
              backgroundColor: "var(--bg)",
            }}
          />
          <div className="mt-4 text-center min-w-[120px] sm:min-w-[140px]">
            <span
              className="block text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
            >
              {first.date.split(" ")[1]}
            </span>
            <span
              className="block text-[11px] uppercase tracking-[0.15em] font-mono mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {first.date.split(" ")[0]}
            </span>
            <p
              className="mt-2 text-sm max-w-[160px] mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              {first.title}
            </p>
          </div>
        </div>

        {/* Connecting line with arrow button in the middle */}
        <div className="flex items-center mt-[5px] shrink-0">
          <div
            className="h-[2px] w-[20px] sm:w-[30px] transition-all duration-500"
            style={{ backgroundColor: step >= 1 ? "var(--text)" : "var(--border)" }}
          />
          <button
            onClick={advance}
            className="group shrink-0 transition-all duration-200 hover:opacity-70"
            aria-label={step === 0 ? "Show next" : "View full timeline"}
          >
            <ChevronRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ color: "var(--text)" }}
            />
          </button>
          <div
            className="h-[2px] w-[20px] sm:w-[30px] transition-all duration-500"
            style={{ backgroundColor: step >= 1 ? "var(--text)" : "var(--border)" }}
          />
        </div>

        {/* Dot 2 + content */}
        <div
          className="flex flex-col items-center transition-all duration-500"
          style={{ opacity: step >= 1 ? 1 : 0.25 }}
        >
          <div
            className="w-3 h-3 rounded-full border-2 transition-colors duration-500"
            style={{
              borderColor: step >= 1 ? "var(--text)" : "var(--border)",
              backgroundColor: "var(--bg)",
            }}
          />
          <div
            className="mt-4 text-center min-w-[120px] sm:min-w-[140px] transition-all duration-500"
            style={{
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 1 ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <span
              className="block text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
            >
              {second.date.split(" ")[1]}
            </span>
            <span
              className="block text-[11px] uppercase tracking-[0.15em] font-mono mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {second.date.split(" ")[0]}
            </span>
            <p
              className="mt-2 text-sm max-w-[160px] mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              {second.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
