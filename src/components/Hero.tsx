import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -right-32 size-125 rounded-full bg-lime/30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -left-40 size-105 rounded-full bg-foreground/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-lime" /> Available for opportunities
        </motion.div>

        {/* Prefix Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 font-mono text-sm md:text-base uppercase tracking-widest text-muted-foreground"
        >
          Hello, World — I'm
        </motion.p>

        <h1 className="mt-4 font-display font-bold leading-tight tracking-tighter text-[clamp(2.5rem,10vw,5.5rem)]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Bhanuka Shamen
          </motion.span>
        </h1>

        {/* Role Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {["Software Engineer", "UI/UX Designer", "Graphic Designer"].map((role, i) => (
            <div
              key={role}
              className="px-4 py-2 rounded-full border border-lime text-lime font-mono text-xs uppercase tracking-widest"
            >
              • {role}
            </div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Software Engineer Intern and Computer Science undergraduate at{" "}
            <span className="text-lime">Eastern University, Sri Lanka</span> — passionate about
            Full-Stack Development and UI/UX Design. Skilled in{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Angular</span>,{" "}
            <span className="text-foreground">Express.js</span>, and{" "}
            <span className="text-foreground">Figma</span>, building scalable apps with clean code
            and creative design.
          </p>
        </motion.div>

        {/* CTA and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:hello@bhanukashamen.me"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime text-lime-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            <Mail className="size-4" />
            Get in Touch
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center size-12 rounded-full border-2 border-lime text-lime hover:bg-lime/10 transition-colors"
          >
            <Github className="size-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center size-12 rounded-full border-2 border-lime text-lime hover:bg-lime/10 transition-colors"
          >
            <Linkedin className="size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

