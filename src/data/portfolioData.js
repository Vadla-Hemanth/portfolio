// SINGLE SOURCE OF TRUTH — verified info ONLY.
// Sources: https://github.com/Vadla-Hemanth/Resume README (primary),
// https://github.com/Vadla-Hemanth, https://github.com/vadlahemanth repos,
// https://www.linkedin.com/in/vadlahemanth/ (URL only, content auth-walled).
// RULE: never invent. Unknown => omit. Empty arrays => section hidden.

export const portfolioData = {
  personal: {
    name: "Vadla Hemanth",
    location: "Hyderabad, Telangana, India",
    // Verbatim professional summary from Resume README:
    summary:
      "A motivated developer and design enthusiast currently pursuing dual degrees in Data Science and Computer Science. Skilled in web development, API integrations, and content management, with a focus on building optimized and user-friendly digital experiences.",
    tagline: "Building optimized, user-friendly digital experiences.",
    heroIntro:
      "Student developer building serverless web apps and applied-AI tools with Python, JavaScript, and Cloudflare.",
    email: "vadlahemanth123@gmail.com",
    availability: "Open to internships and collaboration",
  },
  social: {
    githubPrimary: "https://github.com/Vadla-Hemanth",
    githubSecondary: "https://github.com/vadlahemanth",
    linkedin: "https://www.linkedin.com/in/vadlahemanth/",
    resumePdf: "https://github.com/Vadla-Hemanth/Resume/blob/main/VADLA%20HEMANTH%20RESUME.pdf",
    resumeRepo: "https://github.com/Vadla-Hemanth/Resume",
  },
  about: {
    points: [
      "Dual-degree student: BS in Data Science & Applications at IIT Madras and B.Tech in Computer Science at NNRG, Hyderabad.",
      "Works across web development, API integrations, content management, and serverless delivery on Cloudflare Workers & Pages.",
      "Interested in Data Science, AI/ML, web development, cloud & serverless architecture, UI/UX, and automation.",
    ],
    interests: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "API Integration",
      "Cloud & Serverless",
      "UI/UX & Digital Design",
      "Automation",
    ],
  },
  skills: [
    {
      title: "E-commerce & Web",
      items: ["HTML", "CSS", "JavaScript", "Web Design", "Wix", "Shopify", "Cloudflare Workers", "Cloudflare Pages"],
    },
    {
      title: "Programming & APIs",
      items: ["Python", "C", "RESTful APIs", "Third-party API Integrations", "FastAPI", "Flask", "SQLite", "Alembic"],
    },
    {
      title: "AI / Applied ML (prototype scope)",
      items: ["face_recognition", "facenet-pytorch", "Hindsight (Vectorize) memory", "GSTIN/HSN validators"],
    },
    {
      title: "Design, CMS & Growth",
      items: ["Graphic Design", "Banner & Poster Creation", "UI/UX Concepts", "Content Management", "SEO Basics", "Website Performance Tuning", "Landing Page Conversion", "Rclone", "Cloudflare Tunnels"],
    },
  ],
  projects: [
    {
      id: "tuition-platform",
      index: "P.01",
      title: "Serverless Web Application Architecture",
      kind: "Development Project",
      oneLiner: "Scalable web app infrastructure on Cloudflare Workers & Pages with integrated backend APIs.",
      details: [
        "Developed scalable web application infrastructure using Cloudflare Workers and Pages.",
        "Integrated backend APIs for seamless data flow.",
        "Focused on fast load times and smooth user experience.",
        "Managed serverless storage limitations and optimized functions for high-performance delivery.",
      ],
      tech: ["Cloudflare Workers", "Cloudflare Pages", "RESTful APIs"],
      githubUrl: null,
      liveUrl: "https://tuition-platform.pages.dev/",
      liveLabel: "Live site",
      evidence: "evidence: resume README + live URL",
      featured: true,
    },
    {
      id: "attendance",
      index: "P.02",
      title: "Automatic Attendance System",
      kind: "Technical Project — Prototype",
      oneLiner: "Prototype Flask + SQLite dashboard for enrollment and attendance capture using face recognition.",
      details: [
        "Flask backend with SQLite; teacher login, enrollment, and attendance capture pages.",
        "Uses the face_recognition library for face encodings (repo README + code).",
        "Camera guidance for low-quality cameras; JPEG 0.6 capture to reduce bandwidth.",
        "Alembic migrations included; next steps per README: auth, concurrency, reporting.",
      ],
      tech: ["Python", "Flask", "SQLite", "face_recognition", "Alembic", "JavaScript"],
      githubUrl: "https://github.com/Vadla-Hemanth/Automatic-Attendance-System",
      liveUrl: null,
      evidence: "evidence: repo README + app.py / models.py / technology.txt",
      featured: true,
    },
    {
      id: "gdrive-uploader",
      index: "P.03",
      title: "Resumable Drive Photo & Video Uploader",
      kind: "Self-hosted Web App · MIT",
      oneLiner: "Self-hosted FastAPI app for large photo/video uploads with 5MB resumable chunks and batch Rclone sync.",
      details: [
        "Browser-side 5MB chunked uploads with auto-retry and resume.",
        "DOM virtualization for large queues; batch Rclone sync (--transfers 16) to Google Drive.",
        "QR + Cloudflare Quick Tunnel public URL; one-click launchers (run.bat / run.sh).",
        "Glassmorphic dark mobile-optimized UI with live queue status.",
      ],
      tech: ["FastAPI", "Vanilla JS", "Rclone", "Cloudflare Tunnels"],
      githubUrl: "https://github.com/vadlahemanth/gdrive-photo-uploader",
      liveUrl: null,
      evidence: "evidence: repo README + app.py",
      featured: true,
    },
    {
      id: "vendor-memory-agent",
      index: "P.04",
      title: "Vendor Payment Memory Agent",
      kind: "AP Agent with Hindsight Memory",
      oneLiner: "AP invoice-exception helper that retains vendor resolutions and recalls cited history.",
      details: [
        "Retain/recall with Hindsight (Vectorize); fallback JSONL store when server unreachable.",
        "8 Hyderabad vendors with GSTIN/HSN/PO validators and invoice generator.",
        "Learning curve demo: generic route → personalized auto-resolve with evidence.",
        "FastAPI demo UI with dark/light toggle, responsive to 390px.",
      ],
      tech: ["Python", "FastAPI", "Hindsight", "GST Validators"],
      githubUrl: "https://github.com/vadlahemanth/vendor-payment-memory-agent",
      liveUrl: null,
      evidence: "evidence: repo README + app/main.py",
      featured: false,
    },
    {
      id: "ume-interiors",
      index: "P.05",
      title: "Digital Design — UME Interiors",
      kind: "Freelance / Project Work (design contribution)",
      oneLiner: "Promotional visuals, banners, and landing-page content for local brand UME Interiors.",
      details: [
        "Designed promotional materials for local brands including UME Interiors.",
        "Created visual assets for web banners, landing pages, and content updates.",
        "Applied modern aesthetic principles to digital layouts. Site itself is Wix-built; role is design contribution, not ownership.",
      ],
      tech: ["Graphic Design", "Web Banners", "Landing Pages"],
      githubUrl: null,
      liveUrl: "https://www.umeinteriors.com/",
      liveLabel: "Client site",
      evidence: "evidence: resume README + live URL",
      featured: false,
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology Madras (IITM)",
      degree: "BS in Data Science and Applications",
      period: "April 2025 – Expected 2029",
    },
    {
      school: "Nalla Narasimha Reddy Education Society's Group of Institutions (NNRG)",
      degree: "B.Tech in Computer Science",
      period: "August 2025 – Expected 2029",
    },
  ],
  activities: [
    {
      role: "Event Team Leader",
      org: "NNRG",
      detail: "Organized and led technical events including CodeMania and C Hunt.",
    },
    {
      role: "Delegate",
      org: "NNRG MUN 2026",
      detail: "Represented and actively participated in the Model United Nations.",
    },
    {
      role: "Technical Presentation",
      org: "National Mathematics Day",
      detail: "Poster presentation exploring mathematics and machine intelligence.",
    },
  ],
  // Empty by design — no verified jobs, certs, or invented metrics.
  experience: [],
  certifications: [],
  achievements: [],
};
