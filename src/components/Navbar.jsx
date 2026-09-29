import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Menu, X, Sun, Moon, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") || "dark";
}

export default function Navbar() {
  const active = useActiveSection();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("vh-theme", theme); } catch { /* noop */ }
  }, [theme]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vh-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? "backdrop-blur-xl border-b border-[var(--line)]" : "border-b border-transparent"
      }`}
      style={scrolled ? { background: "color-mix(in srgb, var(--bg) 82%, transparent)" } : { background: "transparent" }}
    >
      <a href="#main" className="skip-link">Skip to content</a>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-[13px] font-medium tracking-wide" aria-label="Vadla Hemanth — home">
          VH<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`link-underline text-sm font-medium transition-colors ${active === l.id ? "text-[var(--ink)]" : "text-muted hover:text-[var(--ink)]"}`}
              >
                {active === l.id && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] align-middle" aria-hidden="true" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a className="btn btn-ghost !min-h-[40px] !py-2 !px-4 text-sm" href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile Vadla-Hemanth (opens in new tab)">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a className="btn btn-primary !min-h-[40px] !py-2 !px-4 text-sm" href={portfolioData.social.resumePdf} target="_blank" rel="noopener noreferrer" aria-label="Open resume PDF on GitHub (opens in new tab)">
            <FileText size={16} aria-hidden="true" /> Resume
          </a>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            className="inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full border border-[var(--line)] px-4 text-sm font-semibold"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            Menu
          </button>
        </div>
      </nav>
      <div className="h-[2px] w-full bg-transparent" aria-hidden="true">
        <div className="h-full origin-left bg-[var(--accent)]" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--line)]"
            style={{ background: "var(--bg)" }}
          >
            <ul className="container-x flex flex-col py-4">
              {LINKS.map((l, i) => (
                <li key={l.id}>
                  <motion.a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={reduce ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    className="font-display block py-3 text-2xl"
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
              <li className="flex gap-3 py-4">
                <a className="btn btn-ghost flex-1" href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer">
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
                <a className="btn btn-primary flex-1" href={portfolioData.social.resumePdf} target="_blank" rel="noopener noreferrer">
                  <FileText size={16} aria-hidden="true" /> Resume
                </a>
              </li>
              <li className="flex gap-3 pb-4">
                <a className="btn btn-ghost flex-1" href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a className="btn btn-ghost flex-1" href={`mailto:${portfolioData.personal.email}`}>
                  Email
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
