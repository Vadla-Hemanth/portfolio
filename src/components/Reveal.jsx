import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={`${className} reveal-fallback`}>{children}</div>;
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      custom={delay}
    >
      {children}
    </Tag>
  );
}
