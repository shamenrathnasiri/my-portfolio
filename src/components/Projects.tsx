import { motion } from "framer-motion";
import { SectionHeading } from "./Work";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: p1,
    title: "Lumen Analytics",
    category: "Product · Data",
    year: "2026",
    description:
      "Realtime analytics platform processing 4B events/day with sub-second query latency.",
    tags: ["TypeScript", "ClickHouse", "Edge"],
    href: "#",
  },
  {
    image: p2,
    title: "Northwave System",
    category: "Design System",
    year: "2025",
    description:
      "Open-source component library powering 40+ products. WCAG 2.2 AA across the board.",
    tags: ["React", "Tokens", "A11y"],
    href: "#",
  },
  {
    image: p3,
    title: "Halcyon CLI",
    category: "Developer Tools",
    year: "2024",
    description:
      "A blazing-fast deploy CLI with a TUI you'd actually screenshot. 18k stars and counting.",
    tags: ["Rust", "WASM", "DX"],
    href: "#",
  },
  {
    image: p4,
    title: "Voya Banking API",
    category: "Fintech · Backend",
    year: "2023",
    description:
      "Re-architected the core ledger to handle 10× transaction volume. Zero downtime migration.",
    tags: ["Go", "Postgres", "gRPC"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="02 / Projects" title="A closer look." />

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group relative block ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span className="px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-border">
                    {p.category}
                  </span>
                  <span className="text-foreground/80">{p.year}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full border border-border bg-background/60 backdrop-blur text-[10px] font-mono uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 size-10 rounded-full bg-lime text-lime-foreground grid place-items-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
