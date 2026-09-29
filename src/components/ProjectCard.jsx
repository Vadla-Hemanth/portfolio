import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { DUR, EASE_SNAPPY } from "../lib/motion";

function extProps(label) {
  return { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} (opens in new tab)` };
}

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const panelId = `proj-${project.id}-more`;

  return (
    <motion.article
      layout={false}
      className="card group flex h-full flex-col p-6 md:p-7"
      aria-labelledby={`proj-${project.id}-title`}
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        <span><span className="text-accent">{project.index}</span> · {project.kind}</span>
        <ArrowUpRight size={16} aria-hidden="true" className="text-faint transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--ink)]" />
      </div>
      <h3 id={`proj-${project.id}-title`} className="mt-4 text-[22px] font-semibold leading-snug tracking-[-0.01em]">
        {project.title}
      </h3>
      <p className="mt-2 text-[15.5px] leading-[1.7] text-muted">{project.oneLiner}</p>
      <div className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies for ${project.title}`}>
        {project.tech.slice(0, 6).map((t) => (
          <span key={t} className="chip !min-h-[28px] !text-[12px]">{t}</span>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            id={panelId}
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: DUR.fast, ease: EASE_SNAPPY }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col gap-2 border-t border-[var(--line)] pt-4">
              {project.details.map((d) => (
                <li key={d} className="text-sm leading-[1.7] text-muted">— {d}</li>
              ))}
              <li className="font-mono text-[11.5px] text-faint">{project.evidence}</li>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        <button
          className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded(!expanded)}
        >
          Details
          <ChevronDown size={15} aria-hidden="true" className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
        </button>
        {project.githubUrl && (
          <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={project.githubUrl} {...extProps(`GitHub repository for ${project.title}`)}>
            <Github size={15} aria-hidden="true" /> Code
          </a>
        )}
        {project.liveUrl && (
          <a className="btn btn-primary !min-h-[40px] !px-4 !py-2 text-sm" href={project.liveUrl} {...extProps(`${project.liveLabel || "Live demo"} — ${project.title}`)}>
            {project.liveLabel || "Live demo"} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
