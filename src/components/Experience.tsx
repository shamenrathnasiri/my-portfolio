import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const journey = [
  {
    year: "2017",
    role: "Junior Developer",
    company: "Pixelboat Studio",
    location: "Porto, PT",
    blurb: "First commit to production. Learned to ship, learned to debug at 2am.",
  },
  {
    year: "2019",
    role: "Frontend Engineer",
    company: "Mosaic Labs",
    location: "Berlin, DE",
    blurb: "Owned the rebuild of a 2M-user dashboard. Discovered design systems.",
  },
  {
    year: "2021",
    role: "Senior Engineer",
    company: "Voya Banking",
    location: "Amsterdam, NL",
    blurb: "Re-architected the core ledger. Mentored 6 engineers across 2 squads.",
  },
  {
    year: "2024",
    role: "Tech Lead",
    company: "Lumen Analytics",
    location: "Remote",
    blurb: "Built a realtime query engine from scratch. Hired the founding team.",
  },
  {
    year: "2026",
    role: "Staff Engineer",
    company: "Northwave",
    location: "Lisbon, PT",
    current: true,
    blurb: "Leading platform & DX. Currently obsessed with the last 10%.",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative py-32 md:py-40 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="03 / Experience"
          title="The route — from zero to now."
        />

        <div ref={ref} className="relative mt-20">
          {/* The animated map path */}
          <svg
            className="absolute left-4 md:left-1/2 top-0 h-full w-24 md:w-[60%] md:-translate-x-1/2 pointer-events-none"
            viewBox="0 0 600 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Ghost path */}
            <path
              d="M 50 20 C 50 150, 550 150, 550 280 S 50 410, 50 540 S 550 670, 550 800 S 50 930, 50 980"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              className="text-border"
            />
            {/* Animated path */}
            <motion.path
              d="M 50 20 C 50 150, 550 150, 550 280 S 50 410, 50 540 S 550 670, 550 800 S 50 930, 50 980"
              stroke="var(--lime)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
              filter="drop-shadow(0 0 6px var(--lime))"
            />
          </svg>

          <ol className="relative space-y-16 md:space-y-28">
            {journey.map((stop, i) => (
              <Stop key={stop.year} stop={stop} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Stop({
  stop,
  index,
}: {
  stop: (typeof journey)[number];
  index: number;
}) {
  const left = index % 2 === 0;
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative grid grid-cols-[40px_1fr] md:grid-cols-2 gap-4 md:gap-16 items-center ${
        left ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Pin */}
      <div
        className={`relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 size-10 grid place-items-center`}
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className={`absolute inset-0 rounded-full ${
            stop.current ? "bg-lime/30 animate-ping" : "bg-foreground/10"
          }`}
        />
        <span
          className={`relative size-4 rounded-full border-2 ${
            stop.current
              ? "bg-lime border-lime shadow-[0_0_16px_var(--lime)]"
              : "bg-background border-foreground"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`md:col-span-1 ${
          left ? "md:pr-20 md:text-right" : "md:pl-20 md:col-start-2"
        }`}
      >
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-lime mb-2 flex items-center gap-2 md:justify-start">
          {left && <span className="hidden md:inline ml-auto">{stop.year}</span>}
          {!left && <span>{stop.year}</span>}
          {stop.current && (
            <span className="px-2 py-0.5 rounded-full bg-lime text-lime-foreground text-[9px]">
              NOW
            </span>
          )}
          {left && <span className="md:hidden">{stop.year}</span>}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          {stop.role}
        </h3>
        <p className="mt-1 text-muted-foreground">
          {stop.company} · <span className="text-foreground/70">{stop.location}</span>
        </p>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm md:max-w-none md:inline-block">
          {stop.blurb}
        </p>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block" />
    </motion.li>
  );
}
