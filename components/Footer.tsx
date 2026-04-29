"use client";

import { useApp } from "./Providers";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t px-6 py-10 text-xs text-muted" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} Ittipon Chaiworn. {t.footer}</p>
        <p>↑↑↓↓←→←→BA · Crafted with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
