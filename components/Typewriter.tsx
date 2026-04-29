"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((n) => (n + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return (
    <span className="inline-flex items-center gap-1 text-accent">
      <span>{text}</span>
      <span className="cursor-blink inline-block h-[1em] w-[2px] bg-accent align-middle" />
    </span>
  );
}
