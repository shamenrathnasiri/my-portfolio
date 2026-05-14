import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const skills = [
  { name: "TypeScript , java Script", level: 96, group: "Language" },
  { name: "Next Js", level: 94, group: "Framework" },
  { name: "Laravel/PHP", level: 78, group: "Framework" },
  { name: "React", level: 96, group: "Libraries" },
  { name: "Tailwind CSS", level: 94, group: "Libraries" },
  { name: "Node Js", level: 90, group: "Backend" },
  { name: "Python Flask", level: 90, group: "Backend" },
  { name: "Postgres / SQL / MongoDB", level: 88, group: "Data" },
  { name: "Cloudflare", level: 85, group: "Infra" },
  { name: "Docker and Kubernetes", level: 60, group: "Infra" },
  { name: "Tools(Adobe Photoshop / Adobe Illustrator/ Canva / Figma)", level: 95, group: "Design" },
];

export function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stack"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="03 / Stack" title="Skills, by the numbers." />

        <div
          ref={ref}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-16 md:gap-y-8"
        >
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
      <div className="flex items-baseline justify-between gap-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0">
          <span className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-semibold truncate">
            {skill.name}
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground shrink-0">
            {skill.group}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
          className="font-mono text-sm sm:text-base text-lime"
        >
          <Counter value={skill.level} inView={inView} delay={index * 0.08} />%
        </motion.span>
      </div>

      <div
        className="relative h-2 sm:h-2 md:h-1.5 w-full overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
        aria-label={`${skill.name} skill level`}
      >
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
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
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
