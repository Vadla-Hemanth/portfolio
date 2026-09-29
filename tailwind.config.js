/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentInk: "var(--accent-ink)",
        success: "var(--success)",
      },
      fontFamily: {
        display: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { container: "1120px" },
    },
  },
  plugins: [],
};
