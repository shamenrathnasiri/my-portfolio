import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Facebook } from "lucide-react";

// Custom Behance icon component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M6.938 4.503c.527 0 .955-.425.955-.952 0-.538-.428-.957-.955-.957-.537 0-.957.419-.957.957.001.527.42.952.957.952M6.94 7.197h-2.35v10.716h2.35V7.197M9.168 16.994h3.77c.028-1.184.515-2.08 1.442-2.586.586-.35 1.435-.524 2.446-.524 1.08 0 2.03.181 2.853.534.824.354 1.39.866 1.699 1.538.309.67.463 1.618.463 2.841 0 .3-.013.606-.037.923H13.76v1.454h7.352c-.092 1.666-.744 2.924-1.952 3.772-1.21.85-2.926 1.274-5.152 1.274-2.765 0-4.85-.887-6.252-2.66-1.04-1.303-1.562-2.955-1.562-4.957 0-2.002.52-3.654 1.562-4.957 1.403-1.773 3.487-2.66 6.252-2.66 1.787 0 3.378.406 4.778 1.217.52.298.986.662 1.39 1.094l-1.95 1.65c-.828-.842-1.97-1.264-3.428-1.264-1.537 0-2.72.535-3.548 1.606-.53.677-.886 1.538-1.067 2.584M5.562 4.503c.527 0 .955-.425.955-.952 0-.538-.428-.957-.955-.957-.537 0-.957.419-.957.957.001.527.42.952.957.952" />
  </svg>
);

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
    svg: <BehanceIcon className="w-5 h-5" />,
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
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-block size-2.5 rounded-full bg-lime animate-pulse" />
          bhanuka<span className="text-lime">.</span>dev
        </a>
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
          <ul className="hidden md:flex items-center gap-2">
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
            href="#download-cv"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-lime-foreground font-mono text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
          >
            Download CV â†’
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
