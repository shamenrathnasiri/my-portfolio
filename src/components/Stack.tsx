import { motion } from "framer-motion";
import { SectionHeading } from "./Work";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "Rust", "Go", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TanStack", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node", "Postgres", "Redis", "GraphQL", "gRPC"],
  },
  {
    title: "Infra & Cloud",
    items: ["AWS", "Cloudflare", "Kubernetes", "Terraform", "OpenTelemetry"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="03 / Stack" title="Tools I reach for first." />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:border-lime/60 transition-colors"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-lime/0 group-hover:bg-lime/10 blur-2xl transition-colors duration-500" />
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-lime">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="font-display text-xl font-medium border-b border-border/60 pb-2 last:border-0"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
