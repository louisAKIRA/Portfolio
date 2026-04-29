"use client";

import Image from "next/image";
import Typewriter from "./Typewriter";
import Magnetic from "./Magnetic";
import { useApp } from "./Providers";

export default function Hero() {
  const { t } = useApp();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="hero-glow absolute inset-0 -z-10" />

      <div
        aria-hidden
        className="float-a absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden
        className="float-b absolute -right-24 bottom-24 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.2fr_1fr]">
        <div className="fade-up text-center md:text-left">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent">{t.hero.hello}</p>
          <h1 className="gradient-text text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
            Ittipon A
            <br />
            Chaiworn.
          </h1>
          <p className="mt-6 text-2xl font-medium md:text-3xl">
            <Typewriter phrases={t.hero.typed as unknown as string[]} />
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:mx-0 md:text-xl">{t.hero.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Magnetic>
              <a
                href="#experience"
                className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.05]">
                {t.hero.viewExp}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Ittipon_Chaiworn_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-block rounded-full border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                style={{ borderColor: "var(--border-strong)" }}>
                ⬇ {t.hero.downloadCV}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-block rounded-full border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                style={{ borderColor: "var(--border-strong)" }}>
                {t.hero.contact}
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="relative mx-auto flex items-center justify-center fade-up">
          <div className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]">
            <div className="ring-conic spin-slow absolute inset-0 rounded-full blur-[2px] opacity-90" />
            <div className="absolute inset-[6px] rounded-full bg-background" />
            <div className="pulse-glow absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
            <div
              className="absolute inset-[14px] overflow-hidden rounded-full border"
              style={{ borderColor: "var(--border)" }}>
              <Image
                src="/profile.jpg"
                alt="Ittipon Chaiworn"
                fill
                priority
                sizes="(min-width: 768px) 360px, 280px"
                className="object-cover object-[center_60%]"
              />
            </div>
            <div
              className="gas-rise absolute -left-6 top-10 rounded-2xl border bg-surface/80 px-3 py-2 text-xs shadow-lg shadow-accent/10 backdrop-blur"
              style={{ borderColor: "var(--border)" }}>
              {t.hero.badge1}
            </div>
            <div
              className="gas-rise-alt absolute -right-2 bottom-12 rounded-2xl border bg-surface/80 px-3 py-2 text-xs shadow-lg shadow-fuchsia-500/10 backdrop-blur"
              style={{ borderColor: "var(--border)" }}>
              {t.hero.badge2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
