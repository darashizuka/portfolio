"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "Builds", href: "/builds" },
  { num: "03", label: "Past", href: "/past" },
  { num: "04", label: "Writing", href: "/writing" },
  { num: "05", label: "Muse now", href: "/muse" },
  { num: "06", label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Row 1: Identity + Nav label + Theme toggle */}
      <div
        className="mx-auto max-w-[1400px] px-6 flex items-center justify-between border-b"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Identity */}
        <Link href="/" className="flex items-center gap-3 py-3">
          <Image
            src="/photo.jpg"
            alt="Shizuka Dara"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <div className="leading-tight">
            <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              Shizuka Dara
            </span>
            <span
              className="block text-[11px] uppercase tracking-wider font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              USA
            
             
            </span>
          </div>
        </Link>

        {/* Center: Nav label (desktop) */}
        <span
          className="hidden md:block text-[11px] uppercase tracking-[0.15em] font-mono"
          style={{ color: "var(--text-muted)" }}
        >
         
        </span>

        {/* Right: Theme toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--text)" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Row 2: Nav items (desktop) */}
      <div
        className="hidden md:block mx-auto max-w-[1400px] px-6 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center">
          {/* Status */}
          <div className="flex items-center gap-2 pr-8 border-r" style={{ borderColor: "var(--border)" }}>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span
              className="text-[11px] uppercase tracking-wider font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              Sys.Online
            </span>
          </div>

          {/* Nav items */}
          <div className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col px-7 py-3.5 transition-colors duration-200"
                style={{
                  backgroundColor: isActive(item.href) ? "var(--nav-active-bg)" : "transparent",
                }}
              >
                <span
                  className="text-[11px] tabular-nums font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.num}
                </span>
                <span
                  className="text-[15px] font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <span
                    className="absolute bottom-0 left-0 h-[3px] w-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-b px-6 py-4 space-y-1"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200"
              style={{
                backgroundColor: isActive(item.href) ? "var(--nav-active-bg)" : "transparent",
              }}
            >
              <span
                className="text-[11px] tabular-nums w-5 font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                {item.num}
              </span>
              <span
                className="text-[15px] font-medium"
                style={{ color: "var(--text)" }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
