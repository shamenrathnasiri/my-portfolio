import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const skills = [
  { name: "TypeScript", level: 96, group: "Language" },
  { name: "React / Next.js", level: 94, group: "Frontend" },
  { name: "Node.js", level: 90, group: "Backend" },
  { name: "Rust", level: 78, group: "Language" },
  { name: "Go", level: 82, group: "Backend" },
  { name: "Postgres / SQL", level: 88, group: "Data" },
  { name: "AWS / Cloudflare", level: 85, group: "Infra" },
  { name: "Kubernetes", level: 72, group: "Infra" },
  { name: "Design Systems", level: 92, group: "Craft" },
  { name: "Observability", level: 80, group: "Infra" },
];

export function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="03 / Stack" title="Skills, by the numbers." />

        <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
  inView,
}: {
  skill: { name: string; level: number; group: string };
  index: number;
  inView: boolean;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xl md:text-2xl font-semibold">{skill.name}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {skill.group}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
          className="font-mono text-sm text-lime"
        >
          <Counter value={skill.level} inView={inView} delay={index * 0.08} />%
        </motion.span>
      </div>

      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.1 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-lime/70 to-lime"
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 size-2.5 rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
        </motion.div>
      </div>
    </div>
  );
}

function Counter({ value, inView, delay }: { value: number; inView: boolean; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  if (typeof window !== "undefined" && inView && ref.current) {
    // animation handled below
  }

  return <CounterImpl value={value} inView={inView} delay={delay} />;
}

function CounterImpl({ value, inView, delay }: { value: number; inView: boolean; delay: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useAnimatedNumber(spanRef, value, inView, delay);

  return <span ref={spanRef}>0</span>;
}

function useAnimatedNumber(
  ref: React.RefObject<HTMLSpanElement | null>,
  value: number,
  inView: boolean,
  delay: number,
) {
  const started = useRef(false);
  if (!inView || started.current) return;

  if (typeof window !== "undefined" && ref.current && !started.current) {
    started.current = true;
    const start = performance.now() + delay * 1000;
    const duration = 1400;
    const tick = (t: number) => {
      if (t < start) {
        requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = Math.round(value * eased).toString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
