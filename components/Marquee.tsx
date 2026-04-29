const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "NestJS",
  "Node.js",
  "Prisma",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Tailwind",
  "Redux Toolkit",
  "Docker",
  "Java",
  "Python",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-background py-8">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
      <div className="marquee flex w-max gap-12 whitespace-nowrap text-2xl font-medium text-muted">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="transition-colors hover:text-foreground">{t}</span>
            <span className="text-accent/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
