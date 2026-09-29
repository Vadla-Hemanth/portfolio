import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Education" title={<span id="education-title">Dual <span className="italic text-accent">degrees</span>, one direction.</span>} />
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.education.map((e, i) => (
            <Reveal key={e.school} delay={i} className="card p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]" aria-hidden="true">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{e.school}</h3>
                  <p className="mt-1 text-muted">{e.degree}</p>
                  <p className="mt-2 font-mono text-xs text-faint">{e.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
