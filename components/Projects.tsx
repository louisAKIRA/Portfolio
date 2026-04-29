import Reveal from "./Reveal";

const experience = [
  {
    role: "Frontend Developer",
    company: "Absolute Management Solutions",
    period: "Nov 2024 – Present",
    accent: "from-blue-500/20 to-purple-500/20",
    bullets: [
      "Develop web applications using React.js / Next.js according to client requirements and within the specified timeframe.",
      "Improve website performance and responsiveness to support all devices.",
      "Use GitHub to collaborate with the team.",
      "Manage SEO for the website.",
      "Develop and modify ERP systems using Angular Framework.",
      "Developed a high-performance travel marketplace using Next.js (App Router) and Redux Toolkit, implementing dynamic SEO strategies and complex state management to deliver a seamless discovery and booking experience for thousands of local travel services.",
    ],
    tech: ["Next.js", "React", "Redux Toolkit", "Angular", "TypeScript"],
  },
  {
    role: "Junior Programmer (Internship)",
    company: "The Rabbittch",
    period: "Nov 2022 – Feb 2023",
    accent: "from-emerald-500/20 to-cyan-500/20",
    bullets: [
      "Develop and maintain the company's website using Angular + Tailwind CSS, ensuring it is responsive and compatible with both mobile and desktop devices.",
      "Designing promotional materials for the company.",
    ],
    tech: ["Angular", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Work Experience
          </p>
          <h2 className="gradient-text max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 140} as="article">
              <div className="tilt-card group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 hover:border-white/20">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${e.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <p className="text-xs uppercase tracking-widest text-muted">
                  {e.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {e.role}
                </h3>
                <p className="mt-1 text-accent">{e.company}</p>
                <ul className="mt-6 space-y-3 text-muted">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
