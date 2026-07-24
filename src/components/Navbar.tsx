import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook, Github, Linkedin, Menu } from "lucide-react";
import { SiBehance } from "react-icons/si";
import { cvDownloadUrl } from "../lib/cv";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About me" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Journy" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    href: "https://github.com/shamenrathnasiri?tab=overview&from=2024-10-01&to=2024-10-31",
    label: "GitHub",
    svg: <Github className="w-5 h-5" />,
  },
  {
    href: "https://www.linkedin.com/in/bhanuka-shamen-859183288/",
    label: "LinkedIn",
    svg: <Linkedin className="w-5 h-5" />,
  },
  {
    href: "https://www.behance.net/bhanukashamen",
    label: "Behance",
    svg: <SiBehance className="w-5 h-5" />,
  },
  {
    href: "https://web.facebook.com/bhanuka.shamen.5/",
    label: "Facebook",
    svg: <Facebook className="w-5 h-5" />,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-bold text-sm sm:text-base md:text-lg"
        >
          <span className="inline-block size-2 sm:size-2.5 rounded-full bg-lime animate-pulse" />
          <span className="hidden sm:inline">
            bhanuka<span className="text-lime">.</span>dev
          </span>
          <span className="sm:hidden text-xs">
            bh<span className="text-lime">.</span>dev
          </span>
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[88vw] max-w-sm px-5 py-6 sm:px-6">
            <SheetHeader className="text-left">
              <SheetTitle className="font-display text-2xl">Navigation</SheetTitle>
              <p className="text-sm text-muted-foreground">
                Quick links to the main sections of the portfolio.
              </p>
            </SheetHeader>

            <div className="mt-8 space-y-3">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-2xl border border-border bg-card/40 px-4 py-3 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {social.svg}
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <SheetClose asChild>
              <a
                href={cvDownloadUrl}
                download="Bhanuka-SE-2026.pdf"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-lime-foreground transition-transform hover:scale-[1.01]"
              >
                Download My CV
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {s.svg}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvDownloadUrl}
            download="Bhanuka-SE-2026.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-lime-foreground font-mono text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            Download My CV
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
