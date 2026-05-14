import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -right-32 size-125 rounded-full bg-lime/30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -left-40 size-105 rounded-full bg-foreground/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="size-1.5 sm:size-2 rounded-full bg-lime" /> Available for opportunities
        </motion.div>

        {/* Prefix Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 sm:mt-6 font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-muted-foreground"
        >
          Hello, World I'm
        </motion.p>

        <h1 className="mt-3 sm:mt-4 font-display font-bold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
          className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
        >
          {["Software Engineer", "Graphic Designer"].map((role, i) => (
            <div
              key={role}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-lime text-lime font-mono text-[9px] sm:text-xs uppercase tracking-widest"
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
          className="mt-8 sm:mt-12 max-w-3xl"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-balance">
            Computer Science undergraduate at{" "}
            <span className="text-lime">Eastern University, Sri Lanka.</span> Passionate about
            building modern digital experiences through clean design, creative thinking, and
            innovative web solutions. Focused on creating user-friendly applications that combine
            functionality with visually engaging interfaces.
          </p>
        </motion.div>

        {/* CTA and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4"
        >
          <a
            href="mailto:shamenrathnasiri@gmail.com"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-lime text-lime-foreground font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            <Mail className="size-3 sm:size-4" />
            Get in Touch
          </a>
          <a
            href="https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center size-10 sm:size-12 rounded-full border-2 border-lime text-lime hover:bg-lime/10 transition-colors"
          >
            <Github className="size-4 sm:size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhanuka-shamen-859183288/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center size-10 sm:size-12 rounded-full border-2 border-lime text-lime hover:bg-lime/10 transition-colors"
          >
            <Linkedin className="size-4 sm:size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
