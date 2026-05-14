import { motion } from "framer-motion";
import { cvDownloadUrl } from "../lib/cv";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 rounded-full bg-lime/20 blur-3xl animate-blob pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.3em] text-lime"
        >
          04 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 sm:mt-6 font-display font-bold tracking-tighter leading-[0.9] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Let's build <br /> <span className="italic text-lime">something</span> good.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="mailto:shamenrathnasiri@gmail.com"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-lime text-lime-foreground font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            shamenrathnasiri@gmail.com
            <span className="transition-transform group-hover:translate-x-1">â†’</span>
          </a>
          <a
            id="download-cv"
            href={cvDownloadUrl}
            download="Bhanuka-SE-2026.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-border font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            Download CV
          </a>
        </motion.div>

        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground transition-colors">
              {s} â†—
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row flex-wrap justify-between gap-3 sm:gap-4 font-mono text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground">
          <span>Â© 2026 Bhanuka Shamen â€” All rights reserved</span>
          <span>Built with care Â· bhanukashamen.me</span>
        </div>
      </footer>
    </section>
  );
}
