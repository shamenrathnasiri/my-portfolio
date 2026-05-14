import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Work";

const journey = [
  {
    year: "Aug 2021 - Jan 2022",
    role: "Bank Assistant (Trainee)",
    company: "Regional Development Bank",
    location: "Manampitiya, Sri Lanka",
    employmentType: "Full-time",
    blurb:
      "Assisted in daily banking operations including customer service, account handling, and transaction processing.",
    extraDetails: [
      "Supported staff with opening new customer accounts and verifying required documentation.",
      "Handled cash deposits, withdrawals, and basic teller activities under supervision.",
      "Maintained accurate records and updated customer information in the banking system.",
      "Gained hands-on experience with core banking software and office automation tools.",
    ],
  },
  {
    year: "Aug 2025 - Feb 2026",
    role: "Intern Software Engineer",
    company: "Cybernetic Technologies Pvt. Ltd.",
    location: "Battaramulla, Sri Lanka",
    employmentType: "Full-time / Onsite",
    blurb:
      "Built scalable full-stack features using React.js, Next.js, Angular, Laravel, Node.js, and supporting backend services.",
    extraDetails: [
      "Designed and developed modular, reusable UI components with clean and maintainable code.",
      "Optimized application performance and UX by improving rendering logic and applying best practices for SEO and accessibility.",
      "Integrated RESTful APIs using Axios, Fetch API, Laravel controllers, Express routes, and Flask endpoints.",
      "Strengthened knowledge of state management (Redux, Context API) and databases (MySQL, MongoDB).",
    ],
  },
  {
    year: "2026 - Present",
    role: "Freelancer Fullstack Developer",
    company: "Self-Employed",
    location: "Remote",
    current: true,
    employmentType: "Freelance / Remote",
    blurb:
      "Building modern full-stack web applications for clients with a focus on performance, clean UI, and maintainable architecture.",
    extraDetails: [
      "Develop reusable frontend interfaces with React, Next.js, and Tailwind CSS.",
      "Create backend services and APIs using Node.js, Laravel, and RESTful architecture.",
      "Integrate third-party services, databases, and authentication flows based on project needs.",
      "Deliver responsive, accessible, and production-ready solutions end to end.",
    ],
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
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading kicker="03 / Experience" title="The route - from zero to now." />

        <div ref={ref} className="relative mt-12 sm:mt-16 md:mt-20">
          {/* The animated map path */}
          <svg
            className="absolute left-2 sm:left-4 md:left-1/2 top-0 h-full w-20 sm:w-24 md:w-[60%] md:-translate-x-1/2 pointer-events-none"
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

          <ol className="relative space-y-12 sm:space-y-16 md:space-y-28">
            {journey.map((stop, i) => (
              <Stop key={stop.year} stop={stop} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Stop({ stop, index }: { stop: (typeof journey)[number]; index: number }) {
  const left = index % 2 === 0;
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] md:grid-cols-2 gap-3 sm:gap-4 md:gap-16 items-start md:items-center ${
        left ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Pin */}
      <div
        className={`relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 size-8 sm:size-10 grid place-items-center shrink-0 mt-1`}
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
          className={`relative size-3 sm:size-4 rounded-full border-2 ${
            stop.current
              ? "bg-lime border-lime shadow-[0_0_16px_var(--lime)]"
              : "bg-background border-foreground"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`md:col-span-1 ${left ? "md:pr-20 md:text-right" : "md:pl-20 md:col-start-2"}`}
      >
        <div className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.3em] text-lime mb-2 flex items-center gap-2 md:justify-start flex-wrap">
          <span className="hidden md:inline" style={{ marginLeft: left ? "auto" : "0" }}>
            {stop.year}
          </span>
          <span className="md:hidden">{stop.year}</span>
          {stop.current && (
            <span className="px-2 py-0.5 rounded-full bg-lime text-lime-foreground text-[8px] sm:text-[9px]">
              NOW
            </span>
          )}
        </div>
        <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
          {stop.role}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium">{stop.company}</span>
          <span className="hidden sm:inline text-foreground/70">·</span>
          <span className="text-foreground/70 text-xs sm:text-sm">{stop.location}</span>
        </p>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground max-w-sm md:max-w-none">
          {stop.blurb}
        </p>
        {stop.extraDetails && (
          <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground max-w-sm md:max-w-none">
            {stop.extraDetails.map((detail) => (
              <li key={detail} className="flex gap-2 sm:gap-3">
                <span className="mt-1.5 sm:mt-2 size-1 sm:size-1.5 shrink-0 rounded-full bg-lime" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
        {stop.employmentType && (
          <p className="mt-3 sm:mt-4 text-[8px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/80">
            {stop.employmentType}
          </p>
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block" />
    </motion.li>
  );
}
