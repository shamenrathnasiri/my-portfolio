import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const education = [
  {
    year: "2013 â€” 2017",
    degree: "B.Sc. Computer Science",
    school: "University of Porto",
    location: "Porto, Portugal",
    detail: "Thesis on distributed consensus. Graduated with distinction (17/20).",
    badge: "Honors",
  },
  {
    year: "2018",
    degree: "Advanced Algorithms",
    school: "Stanford Online",
    location: "Remote",
    detail: "Specialization in graph algorithms, NP-completeness, and approximation.",
    badge: "Cert.",
  },
  {
    year: "2020",
    degree: "M.Sc. Software Systems",
    school: "TU Delft",
    location: "Delft, Netherlands",
    detail: "Focus on distributed systems and reliability engineering.",
    badge: "Magna",
  },
  {
    year: "2022",
    degree: "AWS Solutions Architect â€” Pro",
    school: "Amazon Web Services",
    location: "Remote",
    detail: "Designing resilient, cost-optimized systems at scale.",
    badge: "Pro",
  },
];

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="education"
      className="relative py-32 md:py-40 border-t border-border overflow-hidden"
    >
      {/* Decorative floating cap */}
      <motion.div
        style={{ y }}
        className="absolute right-6 md:right-20 top-20 text-7xl md:text-9xl opacity-10 pointer-events-none select-none"
      >
        ðŸŽ“
      </motion.div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="04 / Education" title="Where the foundations were poured." />

        <div className="mt-20 grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-20">
          {education.map((e, i) => (
            <DiplomaCard key={e.degree} edu={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiplomaCard({ edu, index }: { edu: (typeof education)[number]; index: number }) {
  const tilt = index % 2 === 0 ? -2 : 2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: tilt * 4, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.02, y: -6 }}
      className={`group relative ${index % 2 === 1 ? "md:mt-16" : ""}`}
    >
      {/* Stacked paper effect */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-card/60 border border-border" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-card/80 border border-border" />

      <article className="relative rounded-2xl border border-border bg-card p-7 md:p-8 overflow-hidden">
        {/* Wax seal / badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 180 }}
          className="absolute -top-3 -right-3 size-16 rounded-full bg-lime text-lime-foreground grid place-items-center font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_24px_color-mix(in_oklab,var(--lime)_40%,transparent)]"
        >
          {edu.badge}
        </motion.div>

        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {edu.year}
        </div>

        <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight text-balance">
          {edu.degree}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-medium">{edu.school}</span>
          <span className="text-muted-foreground">Â·</span>
          <span className="text-muted-foreground">{edu.location}</span>
        </div>

        {/* Animated underline */}
        <div className="my-5 h-px w-full bg-border overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.12, ease: "easeOut" }}
            className="h-full w-full bg-lime"
          />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>

        {/* Corner decorative ribbon */}
        <svg
          className="absolute bottom-3 right-3 text-lime/40 group-hover:text-lime transition-colors duration-500"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </article>
    </motion.div>
  );
}
