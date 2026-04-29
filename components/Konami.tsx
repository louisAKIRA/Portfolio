"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Providers";

const seq = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function Konami() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let buf: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      buf.push(e.key);
      if (buf.length > seq.length) buf = buf.slice(-seq.length);
      if (buf.length === seq.length && buf.every((k, i) => k === seq[i])) {
        setOpen(true);
        buf = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;
  return (
    <div
      role="dialog"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fade-up max-w-md rounded-3xl border border-white/10 bg-surface p-8 text-center shadow-2xl"
      >
        <h3 className="text-2xl font-semibold tracking-tight">{t.egg.title}</h3>
        <p className="mt-4 text-muted">{t.egg.body}</p>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-medium text-white"
        >
          {t.egg.close}
        </button>
      </div>
    </div>
  );
}
