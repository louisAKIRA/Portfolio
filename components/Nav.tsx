"use client";

import { useApp } from "./Providers";
import Toggles from "./Toggles";

export default function Nav() {
  const { t } = useApp();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--border)" }}>
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6 text-[13px]">
        <a href="#" className="font-medium tracking-tight">
          Ittipon
        </a>
        <ul className="hidden gap-7 text-foreground/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/Ittipon_Chaiworn_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground/10 px-3 py-1 hover:bg-foreground/15 transition-colors sm:inline-block">
            {t.nav.resume}
          </a>
          <Toggles />
        </div>
      </nav>
    </header>
  );
}
