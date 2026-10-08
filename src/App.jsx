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

const IconLinkedIn = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
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
        "Recent GMU computer science graduate focused on cloud engineering, building hands-on projects and pursuing AWS certifications. Also interested in AI/ML, quantum algorithms, and health and fitness technology.",
    location: "Northern Virginia, USA",
    links: {
        github: "https://github.com/jfulton4",
        linkedin: "https://www.linkedin.com/in/johnfulton8",
        email: "mailto:johnfulton8@gmail.com",
        resume: "/resume.pdf",
    },
    skills: [
        "Java", "CI/CD",
        "JavaScript", "React", "Vite", "Tailwind",
        "Python", "C", "SQL", "NoSQL", "Netlify",
        "AWS Lambda", "DynamoDB", "CloudFront",
        "API Gateway", "S3",
    ],
    projects: [
        {
            title: "Serverless URL Shortener",
            description:
                "Built and deployed a globally accessible URL shortener using CloudFront, S3, API Gateway, Lambda, and DynamoDB.",
            tags: ["AWS Lambda", "DynamoDB", "CloudFront", "S3", "API Gateway"],
            demo: "https://cutit.app",
            highlights: [
                "Custom short codes",
                "Configurable link expiration",
                "Low-latency redirects"
            ]
        },
        {
            title: "Personal Portfolio Website",
            description:
                "Built a responsive single-page portfolio with React, Tailwind CSS, and Vite, then deployed it on Netlify with a custom domain and HTTPS.",
            tags: ["React", "Tailwind CSS", "Vite", "Netlify"],
            links: {
                demo: "https://johnfulton.dev",
                github: "https://github.com/jfulton4/my-portfolio"
            },
            highlights: [
                "Responsive single-page design",
                "WebP image optimization",
                "Custom favicon and Apple touch icon"
            ]
        }
    ],
    experience: [
        {
            place: "EagleForce Associates",
            role: "Software Developer",
            time: "August 2026 -",
            bullets: [
                "Building a RESTful API with Ruby On Rails to detect Maximizer and Accumulator claims for pharmaceutical manufacturers.",
                "Utilizing MySQL to store patient data securely on AWS RDS",
                "Performing data analytics on historial patient claims data to extract patterns and insights that can be used to inform business rules/logic"
            ]
        },
        {
            place: "Wegmans Food Markets",
            role: "In‑Store Shopper",
            time: "October 2020 – August 2026",
            bullets: [
                "Fulfilled and optimized online customer orders via Instacart for 500+ customers", 
                "Analyzed order trends to optimize shopping efficiency and customer satisfaction", 
                "Collaborated with management to improve digital order fulfillment processes", 
                "Recipient of the Wegmans Scholarship from 2022–2025"
            ]
        },
        {
            place: "George Mason University",
            role: "Undergraduate Teaching Assistant",
            time: "January 2024 - May 2024",
            bullets: [ 
                "Led 15+ weekly recitation sessions for 30+ students to reinforce computer science fundamentals, including data structures, algorithms, and memory management", 
                "Provided targeted support to 10–15 students per week, helping debug C and Python assignments and improve code efficiency", 
                "Collaborated with faculty to analyze grading data, streamline workflows, and address common student misconceptions" 
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
                    <a href={data.links.linkedin} className="p-2 rounded hover:bg-black/5" aria-label="LinkedIn">
                        <IconLinkedIn />
                    </a>
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
                    <p className="text-sm text-black/80 mt-1">Prefer email? Click below.</p>
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

