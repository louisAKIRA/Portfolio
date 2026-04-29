"use client";

import Reveal from "./Reveal";
import { useApp } from "./Providers";

export default function Skills() {
  const { t } = useApp();
  const groups = [
    { label: t.skills.languages, items: ["Java", "JavaScript", "TypeScript", "Python"] },
    { label: t.skills.frontend, items: ["React.js", "Next.js", "Angular", "HTML", "CSS", "SCSS"] },
    { label: t.skills.backend, items: ["Node.js", "NestJS", "Prisma", "Docker"] },
    { label: t.skills.database, items: ["MySQL", "MongoDB", "Firebase"] },
    { label: t.skills.tools, items: ["Git", "Claude Code", "Gemini", "Antigravity"] },
  ];
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            {t.skills.kicker}
          </p>
          <h2 className="gradient-text max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {t.skills.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--border)" }}>
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 100}>
              <div className="h-full bg-background p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                  {g.label}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-foreground/5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
