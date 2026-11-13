"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { TimelineEntry } from "@/src/data/timeline";

const DEG_TO_RAD = Math.PI / 180;

export function TimelineWheel({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulated = useRef(0);
  const lastSnap = useRef(0);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 640);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      const now = Date.now();
      if (now - lastSnap.current < 180) return;
      lastSnap.current = now;
      setActive((prev) => Math.max(0, Math.min(entries.length - 1, prev + dir)));
    },
    [entries.length]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      accumulated.current += e.deltaY;
      if (Math.abs(accumulated.current) > 40) {
        navigate(accumulated.current > 0 ? 1 : -1);
        accumulated.current = 0;
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [navigate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const touchY = useRef(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      touchY.current = e.touches[0].clientY;
    }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      const dy = touchY.current - e.touches[0].clientY;
      if (Math.abs(dy) > 40) {
        navigate(dy > 0 ? 1 : -1);
        touchY.current = e.touches[0].clientY;
      }
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [navigate]);

  // Arc params for desktop
  const radius = 700;
  const cx = -350;
  const angleStep = 18;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
      style={{ height: "calc(100vh - 70px)" }}
    >
      {/* Label */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <span
          className="text-[11px] uppercase tracking-[0.15em] font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          Archive / 03
        </span>
      </div>

      {isMobile ? (
        /* ── MOBILE: vertical centered layout ── */
        <div className="flex flex-col items-center justify-center h-full px-6">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-16 bottom-16 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />

          {entries.map((entry, i) => {
            const offset = i - active;
            const absOffset = Math.abs(offset);
            const opacity = Math.max(0, 1 - absOffset * 0.4);
            const isActive = offset === 0;
            const yShift = offset * 120;

            return (
              <div
                key={i}
                className="absolute left-6 right-6 will-change-transform"
                style={{
                  top: "50%",
                  transform: `translateY(${yShift - 40}px)`,
                  opacity,
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="flex items-start gap-4 pl-4">
                  {/* Dot */}
                  <div
                    className="w-[8px] h-[8px] rounded-full shrink-0 mt-2 -ml-[4.5px] transition-colors duration-500"
                    style={{
                      backgroundColor: isActive ? "var(--text)" : "var(--text-muted)",
                    }}
                  />

                  <div>
                    {/* Date */}
                    <span
                      className="font-mono block transition-all duration-500"
                      style={{
                        fontSize: isActive ? "1.75rem" : "1.25rem",
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? "var(--text)" : "var(--text-muted)",
                        opacity: isActive ? 1 : 0.4,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {entry.date}
                    </span>

                    {/* Title + description */}
                    <div
                      className="transition-all duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateY(0)" : "translateY(8px)",
                      }}
                    >
                      <h2
                        className="mt-1 text-xl font-bold"
                        style={{
                          color: "var(--text)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {entry.title}
                      </h2>
                      <p
                        className="mt-1 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ── DESKTOP: arc wheel ── */
        <>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <circle
              cx={cx}
              cy="50%"
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
          </svg>

          {entries.map((entry, i) => {
            const offset = i - active;
            const angle = offset * angleStep * DEG_TO_RAD;
            const x = cx + radius * Math.cos(angle);
            const y = -radius * Math.sin(angle);
            const absOffset = Math.abs(offset);
            const opacity = Math.max(0, 1 - absOffset * 0.35);
            const isActive = offset === 0;

            return (
              <div
                key={i}
                className="absolute will-change-transform"
                style={{
                  left: `${x}px`,
                  top: "50%",
                  transform: `translateY(${y}px)`,
                  opacity,
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-[6px] h-[6px] rounded-full shrink-0 transition-colors duration-500"
                    style={{
                      backgroundColor: isActive ? "var(--text)" : "var(--text-muted)",
                    }}
                  />

                  <span
                    className="font-mono whitespace-nowrap transition-all duration-500"
                    style={{
                      fontSize: isActive ? "clamp(2rem, 5vw, 3.5rem)" : "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? "var(--text)" : "var(--text-muted)",
                      opacity: isActive ? 1 : 0.4,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {entry.date}
                  </span>

                  <div
                    className="ml-8 transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(20px)",
                    }}
                  >
                    <h2
                      className="text-4xl md:text-5xl font-bold whitespace-nowrap"
                      style={{
                        color: "var(--text)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      {entry.title}
                    </h2>
                    <p
                      className="mt-2 text-base max-w-md"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* Navigation hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.15em] font-mono transition-opacity duration-500"
        style={{
          color: "var(--text-muted)",
          opacity: active === 0 ? 0.6 : 0,
        }}
      >
        {isMobile ? "Swipe to navigate" : "Scroll to navigate"}
      </div>
    </div>
  );
}
