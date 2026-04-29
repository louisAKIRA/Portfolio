"use client";

import { useApp } from "./Providers";

export default function Toggles() {
  const { theme, toggleTheme, lang, toggleLang } = useApp();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleLang}
        aria-label="Toggle language"
        className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider transition-colors hover:bg-white/5"
        style={{ borderColor: "var(--border)" }}
      >
        {lang === "en" ? "TH" : "EN"}
      </button>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex h-7 w-7 items-center justify-center rounded-full border transition-colors hover:bg-white/5"
        style={{ borderColor: "var(--border)" }}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
