"use client";

import Reveal from "./Reveal";
import { useApp } from "./Providers";

export default function About() {
  const { t } = useApp();
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            {t.about.kicker}
          </p>
          <h2 className="gradient-text max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {t.about.heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 text-lg text-muted md:grid-cols-2 md:text-xl">
          <Reveal delay={120}>
            <p>{t.about.p1}</p>
          </Reveal>
          <Reveal delay={240}>
            <p>{t.about.p2}</p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl sm:grid-cols-3" style={{ background: "var(--border)" }}>
            <div className="bg-background p-6">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t.about.experienceLabel}
              </p>
              <p className="mt-2 text-2xl font-semibold">{t.about.experienceValue}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t.about.educationLabel}
              </p>
              <p className="mt-2 text-base font-semibold">{t.about.educationValue}</p>
              <p className="text-sm text-muted">{t.about.educationSub}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t.about.focusLabel}
              </p>
              <p className="mt-2 text-base font-semibold">{t.about.focusValue}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
