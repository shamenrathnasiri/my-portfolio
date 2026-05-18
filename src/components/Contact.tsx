/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Facebook,
  Github,
  Mail,
  MessageCircle,
  Linkedin,
  PhoneCall,
} from "lucide-react";
import { cvDownloadUrl } from "../lib/cv";
import { SiBehance } from "react-icons/si";

const whatsappNumber = "94759715913";
const whatsappHref = `https://wa.me/${whatsappNumber}`;
const gmailHref = "mailto:shamenrathnasiri@gmail.com";

const nextIdeaWords = ["next", "idea"];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/bhanuka-shamen-859183288/",
    description: "Professional updates, collaborations, and career context.",
    icon: Linkedin,
    accent: "from-sky-200/40 via-card/40 to-transparent",
  },
  {
    title: "GitHub",
    href: "https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31",
    description: "Code samples, repositories, and technical work.",
    icon: Github,
    accent: "from-zinc-200/40 via-card/40 to-transparent",
  },
  {
    title: "Behance",
    href: "https://www.behance.net/bhanukashamen",
    description: "Selected design and visual presentation work.",
    icon: SiBehance,
    accent: "from-amber-200/40 via-card/40 to-transparent",
  },
  {
    title: "Facebook",
    href: "https://web.facebook.com/bhanuka.shamen.5/",
    description: "Personal updates and casual social connection.",
    icon: Facebook,
    accent: "from-blue-200/40 via-card/40 to-transparent",
  },
];

const contactMethods = [
  {
    title: "WhatsApp",
    value: "075 971 5913",
    href: `${whatsappHref}?text=Hi%20Bhanuka,%20I%20would%20like%20to%20talk%20about%20a%20project.`,
    description: "Fastest for direct project questions, quotes, and quick updates.",
    icon: MessageCircle,
    accent: "bg-lime text-lime-foreground",
    eyebrow: "Quickest reply",
    action: "Open WhatsApp",
  },
  {
    title: "Gmail",
    value: "shamenrathnasiri@gmail.com",
    href: `${gmailHref}?subject=Project%20Inquiry%20for%20Bhanuka%20Shamen`,
    description: "Best for detailed briefs, attachments, and formal enquiries.",
    icon: Mail,
    accent: "bg-background text-foreground",
    eyebrow: "Best for details",
    action: "Write an email",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute left-1/2 top-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/20 blur-3xl animate-blob pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] uppercase tracking-[0.3em] text-lime sm:text-xs"
        >
          04 / Contact
        </motion.p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end sm:mt-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl font-bold leading-[0.9] tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Let&apos;s make your{' '}
              <span className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 align-baseline">
                {nextIdeaWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.18 + index * 0.12, ease: "easeOut" }}
                    className={index === 1 ? "italic text-lime" : "text-foreground"}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>{' '}
              feel alive.
            </motion.h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              If you have a product, brand, or freelance idea in mind, send it over and I&apos;ll
              respond through WhatsApp or Gmail with the clearest next step.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-4xl border border-border bg-card/40 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-5"
          >
            <div className="grid gap-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:bg-background sm:p-6"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${method.accent === "bg-lime text-lime-foreground" ? "from-lime/20 via-lime/5 to-transparent" : "from-white/8 via-card/20 to-transparent"}`}
                  />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`grid size-12 shrink-0 place-items-center rounded-2xl border border-border ${method.accent}`}
                      >
                        <method.icon className="size-5" />
                      </span>
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                          {method.eyebrow}
                        </div>
                        <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                          {method.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:text-right">
                      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {method.value}
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-semibold text-foreground transition-colors group-hover:bg-secondary">
                        {method.action}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
              <a
                id="download-cv"
                href={cvDownloadUrl}
                download="Bhanuka-SE-2026.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/70 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                Download CV
              </a>
              <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-lime px-5 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-lime-foreground">
                <PhoneCall className="size-4" />
                Available for new work
              </div>
            </div>
          </motion.div>
        </div>

       

        <div className="mt-6 sm:mt-8 rounded-4xl border border-border bg-card/30 p-4 sm:p-5 md:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime">
                Connect socially
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Find me across the platforms I actually use.
              </h3>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-right">
              These links are for creative work, code, and professional visibility, so people can
              reach you through the channel that fits best.
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-background"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${social.accent} opacity-100`}
                />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {social.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background/80 text-foreground transition-transform duration-300 group-hover:scale-105">
                      <social.icon
                        className={`size-4 ${
                          social.title === "LinkedIn"
                            ? "text-sky-500"
                            : social.title === "GitHub"
                            ? "text-zinc-800"
                            : social.title === "Behance"
                            ? "text-blue-500"
                            : social.title === "Facebook"
                            ? "text-blue-600"
                            : "text-foreground"
                        }`}
                      />
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    <span>0{index + 1}</span>
                    <span className="inline-flex items-center gap-1 text-foreground">
                      Open
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative mt-12 border-t border-border sm:mt-16 md:mt-20 lg:mt-32">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap justify-between gap-3 px-4 py-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:px-6 sm:py-8 sm:text-xs lg:px-10">
          <span>© 2026 Bhanuka Shamen — All rights reserved</span>
          <span>Built with care · bhanukashamen.me</span>
        </div>
      </footer>
    </section>
  );
}