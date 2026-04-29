"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { useApp } from "./Providers";

export default function Contact() {
  const { t } = useApp();
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            {t.contact.kicker}
          </p>
          <h2 className="gradient-text text-5xl font-semibold tracking-tight md:text-7xl">
            {t.contact.heading1}
            <br />
            {t.contact.heading2}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted">{t.contact.sub}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=louis.saga5@gmail.com&su=Job%20Opportunity%20%E2%80%94%20Ittipon%20Chaiworn&body=Hi%20Ittipon%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.%0A%0ACompany%3A%20%0ARole%3A%20%0ADetails%3A%20%0A%0AThanks%21"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                <span className="inline-flex items-center gap-2">
                  ✉️ louis.saga5@gmail.com
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="tel:+66964744230"
                className="inline-block rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-foreground/5"
                style={{ borderColor: "var(--border-strong)" }}
              >
                📞 096-474-4230
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://line.me/ti/p/~louis_gg"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-foreground/5"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <span className="inline-flex items-center gap-2">
                  💬 LINE: louis_gg
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
