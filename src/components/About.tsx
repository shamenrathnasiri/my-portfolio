import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownToLine,
  Cake,
  Code2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Palette,
  ServerCog,
} from "lucide-react";
import profileImage from "../assets/My.png";
import { SectionHeading } from "./Work";

const personalDetails = [
  { label: "Name", value: "Bhanuka Shamen", icon: Code2 },
  { label: "Role", value: "Software Engineer", icon: ServerCog },
  { label: "Location", value: "Polonnaruwa, Sri Lanka", icon: MapPin },
  { label: "University", value: "Eastern University, Sri Lanka", icon: GraduationCap },
  { label: "Email", value: "shamenrathnasiri@gmail.com", icon: Mail },
  { label: "DOB", value: "2000-07-20", icon: Cake },
  { label: "Availability", value: "Full-time / Freelance", icon: Handshake },
];

const highlights = [
  {
    title: "Development",
    description: "Building scalable web applications with modern frameworks.",
    icon: Code2,
    accent: "from-lime/20 via-lime/10 to-transparent",
  },
  {
    title: "Design",
    description: "Creating bold visual identities and polished brand experiences.",
    icon: Palette,
    accent: "from-amber-200/25 via-card/20 to-transparent",
  },
  {
    title: "Backend",
    description: "Developing robust APIs and server-side logic.",
    icon: ServerCog,
    accent: "from-emerald-200/20 via-card/20 to-transparent",
  },
  {
    title: "Consulting",
    description: "Helping businesses with digital solutions.",
    icon: Handshake,
    accent: "from-sky-200/20 via-card/20 to-transparent",
  },
];

const stats = [
  { value: 3, suffix: "+", label: "Years in web development" },
  { value: 30, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "%", label: "Dedication to quality" },
  { value: "∞", label: "Love for coding" },
];

function CountUp({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frameId = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [reduceMotion, start, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function About() {
  const [countStats, setCountStats] = useState(false);

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading kicker="02 / About" title="Crafting Digital Experiences" />

        <div className="mt-8 sm:mt-12 md:mt-16 rounded-4xl border border-border bg-card/30 overflow-hidden shadow-2xl shadow-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:col-span-4 min-h-72 sm:min-h-88 lg:min-h-full"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(165,164,0,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative h-full p-5 sm:p-6 lg:p-8 flex items-center justify-center">
                <div className="w-full max-w-sm rounded-3xl border border-border bg-background/65 p-4 sm:p-5 backdrop-blur-sm shadow-2xl shadow-black/10">
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
                    <img
                      src={profileImage}
                      alt="Portrait of Bhanuka Shamen"
                      className="h-72 sm:h-80 w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                      Software Engineer
                    </span>
                    <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                      Graphic Design
                    </span>
                    <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                      Sri Lanka
                    </span>
                  </div>
                  <div className="mt-4 rounded-2xl border border-border bg-card/40 px-4 py-3">
                    <div className="text-sm font-semibold text-foreground">Bhanuka Shamen</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Software Engineer at Eastern University, Sri Lanka, focused on clean systems
                      and visual identity.
                    </p>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-3xl border border-border bg-background/45 backdrop-blur-sm">
                    {personalDetails.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 border-b border-border/70 px-3 py-2.5 last:border-b-0"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-lime/10 text-lime">
                          <item.icon className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-mono text-[8px] uppercase tracking-[0.32em] text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="truncate text-xs font-medium text-foreground">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lg:col-span-8 p-5 sm:p-6 lg:p-8 xl:p-10 space-y-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/15 text-lime">
                  ⚡
                </span>
                SOFTWARE ENGINEER
              </div>

              <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
                <p>
                  I&apos;m Bhanuka Shamen, a Software Engineer from Polonnaruwa, Sri Lanka. I&apos;m currently
                  studying at Eastern University in Sri Lanka, and I&apos;m passionate about turning ideas
                  into clean, useful, and visually refined digital products that feel good to use.
                </p>
                <p>
                  My work sits at the intersection of development and design. I enjoy building
                  interfaces that are simple to understand, fast to interact with, and strong in
                  visual identity. Whether I&apos;m shaping a landing page, refining a user flow, or
                  helping a project feel more polished, I focus on details that improve both the
                  experience and the final result.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:shamenrathnasiri@gmail.com?subject=Resume%20Request"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-lime-foreground transition-transform hover:scale-[1.02]"
                >
                  <ArrowDownToLine className="size-4" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
                >
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-card/35 p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-card"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-100`}
                    />
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background/80 text-lime shadow-lg shadow-black/5 transition-transform duration-300 group-hover:scale-105">
                          <item.icon className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-lg font-semibold text-foreground">{item.title}</div>
                          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            onViewportEnter={() => setCountStats(true)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px border-t border-border bg-border"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background px-4 py-5 sm:px-6 sm:py-7 hover:bg-card transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-lime">
                  {typeof s.value === "number" ? (
                    <CountUp value={s.value} suffix={s.suffix} start={countStats} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
