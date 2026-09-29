import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, lede }) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
          <span className="text-accent">{index}</span> — {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mt-3">{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={2}>
          <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.7] text-muted">{lede}</p>
        </Reveal>
      )}
      <Reveal delay={2} className="mt-6 h-px w-full bg-[var(--line)]" />
    </div>
  );
}
