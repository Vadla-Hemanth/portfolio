import { ArrowUp, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="font-mono text-xs text-faint">© {year} Vadla Hemanth — Hyderabad · Built with restraint: type, spacing, motion.</p>
        <div className="flex items-center gap-4">
          <a href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className="text-muted hover:text-[var(--ink)]"><Github size={17} aria-hidden="true" /></a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="text-muted hover:text-[var(--ink)]"><Linkedin size={17} aria-hidden="true" /></a>
          <a href="#home" aria-label="Back to top" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-muted hover:text-[var(--ink)]"><ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
