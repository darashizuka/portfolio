"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-circle" />
    </button>
  );
}
