import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const education = [
  {
    year: "2021 - 2026",
    degree: "B.Sc. Computer Science",
    school: "Trincomalee Campus , Eastern University - Sri Lanka",
    location: "Trincomalee",
    detail: "Thesis on distributed consensus. Graduated with distinction (17/20).",
    badge: "General",
  },
  {
    year: "2020",
    degree: "G.C.E.Advanced Level",
    school: "Po/Thopawewa National School",
    location: "Polonnaruwa",
    detail: "Combined Mathematics - C , Physics - C , Chemistry - C",
    badge: "Cert.",
  },
  {
    year: "2016",
    degree: "G.C.E.Ordinary Level",
    school: "Po/Dim/Maguldamana M.V",
    location: "Maguldamana, Dimbulagala",
    detail: "3 As', 4 Bs', 2 Cs' including English and Mathematics.",
    badge: "Cert",
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
      className="relative overflow-hidden border-t border-border py-32 md:py-40"
    >
      {/* Decorative floating cap */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-6 top-20 select-none text-7xl opacity-10 md:right-20 md:text-9xl"
      >
        🎓
      </motion.div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="04 / Education" title="Where the foundations were poured." />

        <div className="mt-20 grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
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
      initial={{ opacity: 0, y: 48, scale: 0.94, rotate: tilt * 3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: tilt }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
      className={`group relative motion-safe:transition-transform ${index % 2 === 1 ? "md:mt-16" : ""}`}
    >
      {/* Stacked paper effect */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-border bg-card/50 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-border bg-card/75 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

      <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-8 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-lime/40 group-hover:shadow-[0_28px_70px_-34px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-lime/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Wax seal / badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 180 }}
          className="absolute -right-3 -top-3 grid size-16 place-items-center rounded-full bg-lime text-xs font-bold uppercase tracking-wider text-lime-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--lime)_40%,transparent)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105"
        >
          {edu.badge}
        </motion.div>

        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {edu.year}
        </div>

        <h3 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {edu.degree}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-medium">{edu.school}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{edu.location}</span>
        </div>

        {/* Animated underline */}
        <div className="my-5 h-px w-full overflow-hidden bg-border">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.12, ease: "easeOut" }}
            className="h-full w-full bg-linear-to-r from-lime via-lime/80 to-transparent"
          />
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75">
          {edu.detail}
        </p>

        {/* Corner decorative ribbon */}
        <svg
          className="absolute bottom-3 right-3 text-lime/40 transition-all duration-500 group-hover:text-lime group-hover:rotate-12 group-hover:scale-110"
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
