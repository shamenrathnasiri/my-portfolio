import { motion } from "framer-motion";
import { SectionHeading } from "./Work";

const stats = [
  { k: "5+", v: "Years in web development" },
  { k: "20+", v: "Projects completed" },
  { k: "100%", v: "Dedication to quality" },
  { k: "âˆž", v: "Love for coding" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="02 / About"
          title="Engineer, generalist, occasional troublemaker."
        />

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I build full-stack applications with a focus on user experience and clean code. I
              believe in solving real problems with elegant, maintainable solutions.
            </p>
            <p>
              I'm passionate about learning new technologies and staying current with industry
              trends. My focus is on building applications that are both{" "}
              <span className="text-foreground">fast</span> and{" "}
              <span className="text-foreground">intuitive</span>.
            </p>
            <p>
              When not coding, I enjoy contributing to open-source projects, learning new
              frameworks, and collaborating with other developers in the tech community.
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
