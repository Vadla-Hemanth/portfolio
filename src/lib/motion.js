// Shared motion tokens — single animation language.
// Fast = premium. Transform + opacity only. Respects reduced motion via hooks/components.
export const EASE_PREMIUM = [0.16, 1, 0.3, 1];
export const EASE_SNAPPY = [0.33, 1, 0.68, 1];

export const DUR = { instant: 0.15, fast: 0.25, base: 0.4, slow: 0.6, hero: 0.8 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE_PREMIUM, delay: i * 0.08 },
  }),
};

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

export const textLine = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: "0%",
    transition: { duration: DUR.hero, ease: EASE_PREMIUM, delay: 0.15 + i * 0.09 },
  }),
};

export const viewportOnce = { once: true, margin: "-80px" };
