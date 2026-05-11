import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 rounded-full bg-lime/20 blur-3xl animate-blob pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-lime"
        >
          04 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display font-bold tracking-tighter leading-[0.9] text-[clamp(3rem,10vw,9rem)]"
        >
          Let's build <br /> <span className="italic text-lime">something</span> good.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@bhanukashamen.me"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-lime text-lime-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            hello@bhanukashamen.me
            <span className="transition-transform group-hover:translate-x-1">â†’</span>
          </a>
          <a
            id="download-cv"
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border font-mono text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            Download CV
          </a>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground transition-colors">
              {s} â†—
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>Â© 2026 Bhanuka Shamen â€” All rights reserved</span>
          <span>Built with care Â· bhanukashamen.me</span>
        </div>
      </footer>
    </section>
  );
}
