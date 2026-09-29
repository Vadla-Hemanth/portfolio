import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = portfolioData.personal.email;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Contact" title={<span id="contact-title">Have a role or <span className="italic text-accent">project</span> in mind?</span>} lede="Fastest via LinkedIn or GitHub. Email below — no forms, no tracking, no spam." />
        <Reveal className="card mx-auto max-w-[720px] p-8 text-center md:p-10">
          <p className="font-mono text-sm text-faint">vadlahemanth123@gmail.com</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
              <Mail size={16} aria-hidden="true" /> Email me
            </a>
            <button className="btn btn-ghost" onClick={copyEmail} aria-live="polite" aria-label="Copy email address">
              {copied ? <Check size={16} aria-hidden="true" className="text-[var(--success)]" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer" aria-label="GitHub primary (opens in new tab)">
              <Github size={15} aria-hidden="true" /> @Vadla-Hemanth <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-sm" href={portfolioData.social.resumePdf} target="_blank" rel="noopener noreferrer" aria-label="Resume PDF (opens in new tab)">
              Resume <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-faint">Hyderabad, IN · Typically replies via LinkedIn · {portfolioData.personal.availability}</p>
        </Reveal>
      </div>
    </section>
  );
}
