import { useEffect, useState } from "react";

const IDS = ["home", "about", "skills", "projects", "education", "activities", "contact"];

// Scroll-spy via IntersectionObserver. Returns active section id.
export default function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}
