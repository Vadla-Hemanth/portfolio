import { Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Activities() {
  return (
    <section id="activities" aria-labelledby="activities-title" className="section">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Activities" title={<span id="activities-title">Beyond the <span className="italic text-accent">code</span>.</span>} lede="Leadership and technical activities documented in the resume README." />
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioData.activities.map((a, i) => (
            <Reveal key={a.role + a.org} delay={i} className="card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]" aria-hidden="true">
                <Award size={18} />
              </span>
              <h3 className="mt-4 font-semibold">{a.role}</h3>
              <p className="font-mono text-xs text-accent">{a.org}</p>
              <p className="mt-2 text-sm leading-[1.7] text-muted">{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
