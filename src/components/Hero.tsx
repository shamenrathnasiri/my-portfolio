import { motion } from "framer-motion";

const word = "Engineer.";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-lime/30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -left-40 size-[420px] rounded-full bg-foreground/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-lime" /> Available for Q3 · 2026
        </motion.div>

        <h1 className="mt-8 font-display font-bold leading-[0.85] tracking-tighter text-[clamp(3.5rem,12vw,11rem)]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Ari Solène
          </motion.span>
          <span className="block">
            {word.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${c === "." ? "text-lime" : ""}`}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="md:col-span-6 text-lg md:text-xl text-muted-foreground text-balance max-w-xl"
          >
            Senior software engineer crafting fast, accessible products at the
            intersection of <span className="text-foreground">design systems</span>,{" "}
            <span className="text-foreground">distributed backends</span>, and the
            occasional <span className="text-foreground">absurd side project</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="md:col-span-6 md:col-start-8 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest"
          >
            <div className="flex justify-between border-t border-border pt-3">
              <span className="text-muted-foreground">Currently</span>
              <span>Staff Eng @ Northwave</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <span className="text-muted-foreground">Based in</span>
              <span>Lisbon · Remote</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <span className="text-muted-foreground">Years shipping</span>
              <span>09</span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

