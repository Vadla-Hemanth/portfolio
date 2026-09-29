import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { staggerParent, fadeUp, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={<span id="skills-title">Stack, <span className="italic text-accent">grouped</span> honestly.</span>}
          lede="Only technologies documented in the resume README or repository code. No proficiency scores — inferred from shipped work."
        />
        <motion.div
          variants={reduce ? {} : staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2"
        >
          {portfolioData.skills.map((g) => (
            <motion.div key={g.title} variants={reduce ? {} : fadeUp} className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
