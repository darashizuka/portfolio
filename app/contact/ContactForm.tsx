"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(name ? `Message from ${name}` : "Hello");
  const body = encodeURIComponent(
    [name && `From: ${name}`, email && `Email: ${email}`, "", message]
      .filter(Boolean)
      .join("\n")
  );
  const mailtoHref = `mailto:darashizuka2002@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div>
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

      <div className="mt-8 flex justify-end">
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-4 px-8 py-4 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: "var(--text)",
            color: "var(--bg)",
          }}
        >
          Send message
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
