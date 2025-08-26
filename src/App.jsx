// John's Portfolio – single-file React + Tailwind starter
// How to use locally:
// 1) Create a new Vite React app: `npm create vite@latest my-portfolio -- --template react`
// 2) `cd my-portfolio && npm install`
// 3) Add Tailwind (optional but recommended). This starter uses Tailwind utility classes.
//    If you skip Tailwind for now, it will still render, just with minimal styling.
// 4) Replace App.jsx contents with this file's default export (or copy the component into App.jsx).
// 5) Put a PDF resume at /public/resume.pdf (or update the link below).
// 6) Deploy to GitHub Pages, Netlify, or Vercel.

import { useMemo, useState } from "react";

// Simple icon components (inline SVG to avoid external deps)
const IconLink = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-5 h-5"}>
    <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L12 3" />
    <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07L12 21" />
  </svg>
);

const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.37 1.09 2.95.83.09-.66.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.78 1.03a9.6 9.6 0 0 1 5.06 0c1.93-1.3 2.78-1.03 2.78-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" clipRule="evenodd" />
  </svg>
);

const IconExternal = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-5 h-5"}>
    <path d="M18 3h3v3" />
    <path d="M21 3l-7 7" />
    <path d="M16 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7" />
  </svg>
);

const data = {
  name: "John Fulton",
  role: "Full‑Stack Developer",
  blurb:
    "CS grad (2025) focused on clean, practical software. I build small, fast web apps and data tools. Interested in backend performance, clean UIs, and health/fitness tech.",
  location: "Northern Virginia, USA",
  links: {
    github: "https://github.com/jfulton4",
    linkedin: "https://www.linkedin.com/in/johnfulton8",
    email: "mailto:johnfulton8@gmail.com",
    resume: "/resume.pdf",
  },
  skills: [
    "Java", "Spring Boot", "REST", "PostgreSQL", "Docker", "CI/CD",
    "JavaScript", "TypeScript", "React", "Vite", "Tailwind", "Node.js",
    "Python", "FastAPI", "Pandas", "Data Viz"
  ],
  projects: [
    {
      title: "HIT Workout Logger",
      description:
        "Single‑set‑to‑failure tracker with tempo, RIR, and progression graphs. Exports CSV, calculates progressive overload targets.",
      tags: ["React", "Node", "PostgreSQL", "Recharts"],
      repo: "https://github.com/your-username/hit-logger",
      demo: "https://hit-logger-demo.example.com",
      highlights: [
        "Custom hook for micro‑cycle planning",
        "Server‑side cron computes next‑session targets",
        "Accessible UI with keyboard shortcuts"
      ]
    },
    {
      title: "Sleep & Biomarker Dashboard",
      description:
        "Aggregates wearable sleep metrics and lab biomarkers into a single timeline. Trend analysis and alert thresholds.",
      tags: ["React", "FastAPI", "SQLite", "D3"],
      repo: "https://github.com/your-username/sleep-biomarkers",
      demo: "https://sleep-biomarkers.example.com",
      highlights: [
        "CSV/JSON import with schema validation",
        "Signal smoothing (EMA) and anomaly flags",
        "Shareable read‑only views"
      ]
    },
    {
      title: "Job Application Manager",
      description:
        "Track applications, notes, and follow‑ups. Generates tailored cover letters from role keywords.",
      tags: ["Spring Boot", "React", "Postgres"],
      repo: "https://github.com/your-username/job-manager",
      demo: "https://job-manager.example.com",
      highlights: [
        "Keyword extraction → bullet suggestions",
        "Kanban board + reminders",
        "Role‑specific resume export"
      ]
    }
  ],
  experience: [
    {
      place: "Wegmans",
      role: "In‑Store Shopper (Part‑time)",
      time: "2020–",
      bullets: [
        "Fulfilled and optimized online customer orders via Instacart for 250+ customers",
        "Provided consistent, high-quality customer service under time constraints",
	"Supported management with performance insights and team communication"
      ]
    },
    {
     place: "George Mason University",
     role: "Undergraduate Teaching Assistant",
     time: "2024-2024",
     bullets: [
       "Led weekly recitation sessions for 30+ students in computer science fundamentals",
       "Coordinated with faculty to streamline grading and student support"
      ]
    },
    {
      place: "GMU Projects",
      role: "Course & Independent Projects",
      time: "2023–2025",
      bullets: [
        "CS capstones in web dev and data",
        "Built multiple small production‑style apps"
      ]
    }
  ]
};

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
      {children}
    </span>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Navbar() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-white/70">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">{data.name}</a>
        <nav className="hidden sm:flex gap-4">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm hover:underline underline-offset-4">
              {it.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={data.links.github} className="p-2 rounded hover:bg-black/5" aria-label="GitHub">
            <IconGithub />
          </a>
          <a 
 	    href={data.links.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm border rounded px-3 py-1 hover:bg-black/5"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <p className="text-sm tracking-widest uppercase text-black/70">{data.role}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Hi, I’m {data.name}.</h1>
          <p className="mt-4 text-black/80 leading-relaxed">{data.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl px-4 py-2 text-sm font-medium border hover:bg-black/5">View Projects</a>
            <a href={data.links.resume} className="rounded-xl px-4 py-2 text-sm font-medium border hover:bg-black/5">Download Resume</a>
            <a href={data.links.linkedin} className="rounded-xl px-4 py-2 text-sm font-medium border hover:bg-black/5">LinkedIn</a>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl border shadow-sm overflow-hidden">
            <img
              src="/headshot.webp"
              alt="John Fulton"
              className="block w-full h-full object-cover"
            >
            </img>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {data.skills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.projects.filter(
      (p) => p.title.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Section id="projects" title="Projects">
      <div className="mb-4 flex items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title or tag…"
          className="w-full sm:w-80 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <article key={p.title} className="rounded-2xl border p-4 shadow-sm bg-white">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <div className="flex gap-2">
                {p.repo && (
                  <a href={p.repo} className="p-2 rounded hover:bg-black/5" aria-label="Repo">
                    <IconGithub />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} className="p-2 rounded hover:bg-black/5" aria-label="Live Demo">
                    <IconExternal />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-black/80">{p.description}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-black/80 space-y-1">
              {p.highlights?.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-s">
        {data.experience.map((e) => (
          <li key={e.place} className="ms-4 mb-6">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white" />
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold tracking-tight">{e.role} · {e.place}</h3>
              <span className="text-xs text-black/60">{e.time}</span>
            </div>
            <ul className="mt-2 text-sm text-black/80 list-disc list-inside space-y-1">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-4 shadow-sm">
          <h4 className="font-semibold">Get in touch</h4>
          <p className="text-sm text-black/80 mt-1">Prefer email? Click below to open your mail client with a prefilled subject.</p>
          <a
            href={`${data.links.email}?subject=${encodeURIComponent("Hello from your portfolio site")}`}
            className="inline-flex items-center gap-2 mt-3 border rounded-xl px-3 py-2 text-sm hover:bg-black/5"
          >
            <IconLink /> Email me
          </a>
        </div>
        <div className="rounded-2xl border p-4 shadow-sm">
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href={data.links.github} className="underline underline-offset-4">GitHub</a></li>
            <li><a href={data.links.linkedin} className="underline underline-offset-4">LinkedIn</a></li>
            <li><a href={data.links.resume} className="underline underline-offset-4">Resume PDF</a></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto px-4 md:px-6 pb-16 space-y-12">
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-xs text-black/60">
        © {new Date().getFullYear()} {data.name}. Built with React.
      </footer>
    </div>
  );
}

