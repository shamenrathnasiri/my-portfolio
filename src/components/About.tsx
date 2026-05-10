import { motion } from "framer-motion";
import { SectionHeading } from "./Work";

const stats = [
  { k: "09", v: "Years shipping production code" },
  { k: "40+", v: "Products touched" },
  { k: "18k", v: "GitHub stars across OSS" },
  { k: "∞", v: "Cups of single-origin coffee" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="02 / About" title="Engineer, generalist, occasional troublemaker." />

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I write software that other engineers actually want to use.
              That means clean abstractions, fast feedback loops, and tooling
              that doesn't fight you at 2 a.m.
            </p>
            <p>
              Lately I'm obsessed with the seam between{" "}
              <span className="text-foreground">developer experience</span> and{" "}
              <span className="text-foreground">product polish</span> — the
              last 10% that turns a good app into one people quietly love.
            </p>
            <p>
              When I'm offline you'll find me brewing pour-overs, tinkering
              with synthesizers, or losing badly at chess in a Lisbon café.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 grid grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden"
          >
            {stats.map((s) => (
              <div key={s.v} className="bg-background p-6 hover:bg-card transition-colors">
                <div className="font-display text-5xl font-bold text-lime">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
