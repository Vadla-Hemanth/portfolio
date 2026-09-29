# Vadla Hemanth — Portfolio

Premium personal portfolio. Verified content only — no fabricated experience, stats, or demo links.

**Live sources:**
- Resume: https://github.com/Vadla-Hemanth/Resume
- GitHub (primary): https://github.com/Vadla-Hemanth
- GitHub (secondary): https://github.com/vadlahemanth
- LinkedIn: https://www.linkedin.com/in/vadlahemanth/

## Local development

```bash
cd portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview  # verify prod locally
```

## Deploy to GitHub Pages (live)

Hosting: **GitHub Pages** via Actions (`.github/workflows/deploy.yml`).

- Every push to `main` builds (`npm ci` + `npm run build`) and deploys `dist/`.
- Live URL: **https://vadla-hemanth.github.io/portfolio/**
- First-time setup (done once): repo Settings → Pages → Source: **GitHub Actions**.
  (Or via API: `POST /repos/Vadla-Hemanth/portfolio/pages` with `{"build_type":"workflow"}`.)
- No secrets or env vars required. To use a custom domain later, add a `CNAME` file and point DNS at GitHub Pages.

## Customize

- Edit only `src/data/portfolioData.js` to update content.
- To add a resume file: drop PDF at `public/resume.pdf` and point buttons to `/resume.pdf` (currently links to GitHub PDF).
- To add a photo: save `public/images/vadla.jpg` (1:1, min 960px) and replace the Hero placeholder block.

## Content rules

- No invented titles, companies, internships, certs, metrics, stars, or testimonials.
- Live demo buttons render only when `liveUrl` is a real verified URL.
- Empty sections (`experience`, `certifications`, `achievements`) stay hidden by design.
- Tech conflict note: resume README mentions InsightFace Buffalo_L for attendance; repo code documents `face_recognition`/`facenet-pytorch` — portfolio uses repo truth.
