"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5dc7ac9d-367d-4f85-9644-4df510541394",
          name: name || "Anonymous",
          email: email || "not provided",
          message,
          subject: `Portfolio: message from ${name || "someone"}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Check size={24} style={{ color: "var(--bg)" }} />
        </div>
        <p className="text-lg font-medium" style={{ color: "var(--text)" }}>
          Message sent
        </p>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="border-t pt-6"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-baseline gap-8 py-4">
          <label
            className="text-sm shrink-0 w-36"
            style={{ color: "var(--text-muted)" }}
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="flex-1 bg-transparent border-none outline-none text-base placeholder:opacity-40"
            style={{ color: "var(--text)", caretColor: "var(--accent)" }}
          />
        </div>

        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        />

        <div className="flex items-baseline gap-8 py-4">
          <label
            className="text-sm shrink-0 w-36"
            style={{ color: "var(--text-muted)" }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.com"
            className="flex-1 bg-transparent border-none outline-none text-base placeholder:opacity-40"
            style={{ color: "var(--text)", caretColor: "var(--accent)" }}
          />
        </div>

        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        />

        <div className="flex items-start gap-8 py-4">
          <label
            className="text-sm shrink-0 w-36 pt-1"
            style={{ color: "var(--text-muted)" }}
          >
            What&apos;s on your mind?
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A little context goes a long way."
            rows={3}
            className="flex-1 bg-transparent border-none outline-none text-base resize-none placeholder:opacity-40"
            style={{ color: "var(--text)", caretColor: "var(--accent)" }}
          />
        </div>

        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm" style={{ color: "#e53e3e" }}>
          Something went wrong. Try again or email me directly.
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={status === "sending" || !message.trim()}
          className="inline-flex items-center gap-4 px-8 py-4 text-sm font-medium transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
          style={{
            backgroundColor: "var(--text)",
            color: "var(--bg)",
          }}
        >
          {status === "sending" ? "Sending..." : "Send message"}
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
