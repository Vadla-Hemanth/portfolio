import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { DUR, EASE_PREMIUM } from "../lib/motion";

function MaskLine({ children, index }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="mask-line">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: DUR.hero, ease: EASE_PREMIUM, delay: 0.15 + index * 0.09 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: DUR.slow, ease: EASE_PREMIUM, delay },
        };

  return (
    <section id="home" ref={ref} aria-labelledby="hero-name" className="relative overflow-hidden">
      <motion.div aria-hidden="true" style={reduce ? {} : { y: bgY, opacity: bgOpacity }} className="hero-grid-bg absolute inset-0" />
      <div aria-hidden="true" className="grain absolute inset-0" />
      <div className="container-x relative grid min-h-[92vh] items-center gap-10 pb-16 pt-28 md:pt-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p {...fade(0.05)} className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
            Hyderabad, IN — Student Developer
          </motion.p>
          <h1 id="hero-name" className="font-display mt-4 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] tracking-[-0.02em]">
            <MaskLine index={0}>Vadla Hemanth</MaskLine>
            <MaskLine index={1}>
              <span className="italic">builds <span className="text-accent not-italic font-display italic">systems</span></span>
            </MaskLine>
            <MaskLine index={2}>that remember.</MaskLine>
          </h1>
          <motion.p {...fade(0.45)} className="mt-6 max-w-[60ch] text-lg leading-[1.65] text-muted">
            {portfolioData.personal.heroIntro} Dual degrees in Data Science &amp; Computer Science.
            Focused on optimized, user-friendly digital experiences.
          </motion.p>
          <motion.div {...fade(0.6)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={portfolioData.social.resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="Open resume PDF (opens in new tab)">
              <FileText size={16} aria-hidden="true" /> Resume
            </a>
            <a href={portfolioData.social.githubPrimary} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="GitHub Vadla-Hemanth (opens in new tab)">
              <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div {...fade(0.75)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-faint">
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} aria-hidden="true" /> Hyderabad, India</span>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[var(--ink)]" aria-label="LinkedIn profile (opens in new tab)">
              <Linkedin size={13} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="inline-flex items-center gap-1 hover:text-[var(--ink)]" aria-label={`Email ${portfolioData.personal.email}`}>
              <Mail size={13} aria-hidden="true" /> {portfolioData.personal.email}
            </a>
            <span className="inline-flex items-center gap-1.5" aria-label="Availability">
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" aria-hidden="true" /> {portfolioData.personal.availability}
            </span>
          </motion.div>
        </div>
        <motion.aside
          {...(reduce ? {} : { initial: { opacity: 0, scale: 1.04 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, ease: EASE_PREMIUM, delay: 0.5 } })}
          aria-label="Portrait of Vadla Hemanth"
          className="card group/img relative mx-auto w-full max-w-[420px] overflow-hidden p-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-2)]">
            <div className="absolute inset-0 flex items-center justify-center font-display text-6xl" aria-hidden="true">VH</div>
            <img
              src={`${import.meta.env.BASE_URL}images/vadla.jpg`}
              alt="Portrait of Vadla Hemanth"
              width={413}
              height={500}
              loading="eager"
              fetchPriority="high"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
              className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover/img:scale-[1.04]"
            />
            <div className="hero-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          </div>
          <div className="border-t border-[var(--line)] px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">fig. 01 — portrait · hyderabad</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "FastAPI", "Cloudflare"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
