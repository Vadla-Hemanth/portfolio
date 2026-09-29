import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeUp, staggerParent, viewportOnce } from "../lib/motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const reduce = useReducedMotion();
  const featured = portfolioData.projects.filter((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title={<span id="projects-title">Selected work, <span className="italic text-accent">evidence</span> first.</span>}
          lede="Every project below traces to a public README, repository, or live URL. Live demo buttons appear only when a real URL exists."
        />
        <motion.div variants={reduce ? {} : staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-5 lg:grid-cols-3">
          {featured.map((p) => (
            <motion.div key={p.id} variants={reduce ? {} : fadeUp} className="h-full">
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={reduce ? {} : staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <motion.div key={p.id} variants={reduce ? {} : fadeUp} className="h-full">
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 font-mono text-xs text-faint">
          More / WIP: <a className="underline hover:text-[var(--ink)]" href="https://github.com/vadlahemanth/proofa" target="_blank" rel="noopener noreferrer" aria-label="proofa repository (opens in new tab)">proofa</a> (TypeScript scaffold, README pending) · fork <a className="underline hover:text-[var(--ink)]" href="https://github.com/vadlahemanth/rocketride-server" target="_blank" rel="noopener noreferrer" aria-label="rocketride-server fork (opens in new tab)">rocketride-server</a> excluded as upstream work.
        </p>
      </div>
    </section>
  );
}
