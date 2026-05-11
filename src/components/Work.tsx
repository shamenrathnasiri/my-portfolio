import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    year: "2026",
    title: "Lumen Analytics",
    role: "Lead Engineer",
    tags: ["TypeScript", "ClickHouse", "Edge"],
    blurb:
      "Realtime product analytics platform processing 4B events/day. Built the query engine, ingestion pipeline, and visualization SDK from scratch.",
    color: "oklch(0.88 0.22 130)",
  },
  {
    n: "02",
    year: "2025",
    title: "Northwave Design System",
    role: "Architect",
    tags: ["React", "Tokens", "A11y"],
    blurb:
      "Open-source component library used across 40+ products. Cut UI build time by 62% and earned WCAG 2.2 AA across the board.",
    color: "oklch(0.78 0.18 50)",
  },
  {
    n: "03",
    year: "2024",
    title: "Halcyon CLI",
    role: "Creator",
    tags: ["Rust", "WASM", "DX"],
    blurb:
      "A blazing-fast deploy CLI with a TUI you'd actually screenshot. 18k stars and a healthy little community of weirdos.",
    color: "oklch(0.72 0.18 280)",
  },
  {
    n: "04",
    year: "2023",
    title: "Voya Banking API",
    role: "Backend Eng",
    tags: ["Go", "Postgres", "gRPC"],
    blurb:
      "Re-architected the core ledger to handle 10Ã— transaction volume with zero downtime migration. Sleeps soundly at night.",
    color: "oklch(0.78 0.16 200)",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="01 / Selected work" title="Things I've shipped" />

        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative block py-8 md:py-10"
    >
      <div className="grid grid-cols-12 gap-6 items-baseline">
        <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">
          {project.n}
        </div>
        <div className="col-span-10 md:col-span-5">
          <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground font-mono uppercase tracking-widest">
            {project.role} Â· {project.year}
          </p>
        </div>
        <p className="col-span-12 md:col-span-4 text-muted-foreground text-balance">
          {project.blurb}
        </p>
        <div className="col-span-12 md:col-span-2 flex md:justify-end gap-2 flex-wrap">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full border border-border text-xs font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
      <motion.span
        aria-hidden
        className="absolute right-0 -top-2 md:top-4 text-7xl md:text-9xl font-display font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ color: project.color }}
        initial={false}
      >
        â†’
      </motion.span>
    </motion.a>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">{kicker}</p>
      <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-balance max-w-2xl">
        {title}
      </h2>
    </div>
  );
}
