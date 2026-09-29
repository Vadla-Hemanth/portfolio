import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { personal, about } = portfolioData;
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={<span id="about-title">Student builder, <span className="italic text-accent">dual-degree</span> focus.</span>}
          lede={personal.summary}
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-5">
            {about.points.map((p, i) => (
              <Reveal key={p} delay={i}>
                <p className="max-w-[62ch] text-[16.5px] leading-[1.75] text-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <div className="flex flex-wrap gap-2" aria-label="Areas of interest">
                {about.interests.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={1} className="card h-fit p-6">
            <dl className="grid grid-cols-1 gap-4 text-sm">
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Based</dt><dd className="mt-1 font-medium">{personal.location}</dd></div>
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Focus</dt><dd className="mt-1 font-medium">Applied AI · Backend · Serverless</dd></div>
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Now</dt><dd className="mt-1 font-medium">Prototypes with memory &amp; throughput</dd></div>
              <div className="flex flex-wrap gap-2 pt-2">
                <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer" aria-label="Primary GitHub (opens in new tab)"><Github size={15} aria-hidden="true" /> @Vadla-Hemanth</a>
                <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.githubSecondary} target="_blank" rel="noopener noreferrer" aria-label="Secondary GitHub (opens in new tab)"><Github size={15} aria-hidden="true" /> @vadlahemanth</a>
                <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={15} aria-hidden="true" /> LinkedIn</a>
                <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={`mailto:${personal.email}`} aria-label="Send email"><Mail size={15} aria-hidden="true" /> Email</a>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
