import { motion } from "framer-motion";
import { useState } from "react";
import { Github } from "lucide-react";
import { SectionHeading } from "./Work";
import p1 from "../assets/autopart website.png";
import p2 from "../assets/cabana haven booking.png";

const websitesProjects = [
  {
    image: p1,
    title: "Auto Parts Showcase",
    category: "Website",
    year: "2026",
    description:
      "Vehicle spare-parts company showcase built with React + TypeScript and Tailwind CSS. Includes responsive layouts, product galleries, and marketing pages.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://auto-parts-showcase.vercel.app/",
    repo: "https://github.com/shamenrathnasiri/auto-parts-showcase",
  },
  {
    image: p2,
    title: "Cabana Haven",
    category: "Full Stack Resort Platform",
    year: "2025",
    description:
      "A modern full-stack resort booking platform built with React, TypeScript, and Laravel 12, featuring a responsive user interface, secure REST API, room reservation management, admin dashboard, authentication system, booking analytics, and optimized performance. The platform includes real-time booking workflows, accessible UI components, data validation, and scalable backend architecture using Laravel Sanctum, MySQL, and modern frontend technologies such as Tailwind CSS, TanStack Query, and shadcn/ui.",
    tags: ["React", "TypeScript", "Laravel 12", "Sanctum", "TanStack Query"],
    href: "https://cabana-haven-design.vercel.app/",
    repo: "https://github.com/shamenrathnasiri/cabana-haven-design",
    backendRepo: "https://github.com/shamenrathnasiri/cabana-haven-backend",
  },
];

type Project = {
  image?: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  backendRepo?: string;
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading kicker="02 / Projects" title="A closer look." />

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {websitesProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.a
      href={p.href || "#"}
      target={p.href ? "_blank" : undefined}
      rel={p.href ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      className={`group relative block ${i % 2 === 1 ? "md:mt-8 lg:mt-16" : ""}`}
    >
      <div className="relative aspect-video sm:aspect-4/3 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-border bg-card">
        <div className={`h-full w-full ${showDetails ? "filter blur-sm" : ""}`}>
          <motion.img
            src={p.image}
            alt={p.title}
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/35 to-transparent opacity-100 group-hover:opacity-85 transition-opacity duration-500" />

        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-foreground">
          <span className="px-2 sm:px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-border text-[9px] sm:text-xs">
            {p.category}
          </span>
          <span className="text-foreground text-[9px] sm:text-[10px]">{p.year}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="max-w-xl rounded-2xl border border-white/10 bg-background/35 p-3 sm:p-4 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
            <h3 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-y-1">
              {p.title}
            </h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-foreground/90 max-w-md leading-relaxed">
              {p.description}
            </p>
            <div className="mt-2 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {p.tags.map((t: string) => (
                <span
                  key={t}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-border bg-background/75 backdrop-blur text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-3 flex gap-3">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime text-lime-foreground text-xs font-semibold shadow-sm shadow-black/20"
                >
                  Live site
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-border bg-background/70 text-foreground hover:text-lime transition-colors"
                  aria-label="View frontend repository"
                >
                  <Github className="size-4" />
                </a>
              )}
              {p.backendRepo && (
                <a
                  href={p.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-border bg-background/70 text-foreground hover:text-lime transition-colors"
                  aria-label="View backend repository"
                >
                  <Github className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="absolute inset-0 z-30 flex items-center justify-center p-6">
            <div className="max-w-xl w-full rounded-2xl bg-background/90 border border-border p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full border border-border text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-lime text-lime-foreground text-xs font-semibold"
                      >
                        Live
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center size-8 rounded-full border border-border text-foreground hover:text-lime transition-colors"
                        aria-label="View frontend repository"
                      >
                        <Github className="size-3.5" />
                      </a>
                    )}
                    {p.backendRepo && (
                      <a
                        href={p.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center size-8 rounded-full border border-border text-foreground hover:text-lime transition-colors"
                        aria-label="View backend repository"
                      >
                        <Github className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setShowDetails(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.a>
  );
}
