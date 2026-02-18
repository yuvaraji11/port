import { useState } from "react";

const education = [
  {
    school: "Coimbatore Institute of Technology, Coimbatore",
    detail: "B.E. Computer Science (2022 – 2026)",
    extra: "CGPA: 7.17*",
  },
  {
    school: "Kalaimagal Kalalaya Matric. Hr. Sec. School",
    detail: "Higher Secondary · June 2022",
    extra: "Score: 90.33%",
  },
  {
    school: "Greenland Matriculation School",
    detail: "SSLC · March 2020",
    extra: "Score: 99%",
  },
];

const technologyStacks = [
  { label: "Languages", values: ["Java", "C", "MySQL"] },
  { label: "Web", values: ["HTML", "CSS", "React.js"] },
  { label: "Tools", values: ["VS Code", "Figma"] },
  {
    label: "Soft Skills",
    values: ["Team Collaboration", "Adaptability", "Problem Solving"],
  },
];

const experiences = [
  {
    timeline: "Jun 2024 – Jul 2024 · Remote",
    role: "Data Analytics Intern",
    org: "Project Development Cell, CIT",
    bullets: [
      "Gained hands-on experience in data preprocessing, visualization, and delivering insights to mentors.",
    ],
  },
  {
    timeline: "Dec 2024 – Jan 2025 · Remote",
    role: "Full Stack Intern",
    org: "Project Development Cell, CIT",
    bullets: [
      "Explored how front-end, back-end, and databases connect while building end-to-end features.",
    ],
  },
];

const projects = [
  {
    title: "Music Streaming Web App",
    period: "Jan 2025 – May 2025",
    stack: "HTML · CSS · React.js · API",
    link: "https://github.com/yuvaraji11/Music-streaming-Web-App",
    bullets: [
      "Responsive single-page app with custom player controls (play, pause, next, previous).",
      "Integrated Spotify API for dynamic track data.",
    ],
  },
  {
    title: "File Sharing System",
    period: "May 2025 – Jun 2025",
    stack: "Java · Sockets · Multithreading · AWT",
    link: "https://github.com/yuvaraji11/File-sharing-app",
    bullets: [
      "Built a TCP client–server app with buffered I/O and progress tracking for large files.",
      "Designed an AWT interface for file selection and transfer status.",
    ],
  },
];

const certifications = [
  { name: "Web Development Workshop", meta: "NIT Trichy · March 2024" },
  { name: "Data Analytics Course", meta: "NoviTech R&D Private Limited · Sep 2024" },
  { name: "CRYPTERA 2K25", meta: "Event Coordinator · Carrom Tournament" },
  { name: "LeetCode", meta: "300+ problems solved" },
];

const interests = [
  "UI/UX Design",
  "Cricket",
  "Badminton",
  "Video Gaming",
  "Listening to Music",
];

const fallbackAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <circle cx="200" cy="160" r="80" fill="#1f2937"/>
  <rect x="110" y="260" width="180" height="160" rx="40" fill="#1f2937"/>
  <text x="200" y="460" font-size="26" text-anchor="middle" fill="#6fffbe" font-family="Arial">
    Upload photo
  </text>
</svg>
`)}`;

const profileImage = "/profile.jpg"; // Place your portrait in /public/profile.jpg

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">Yuvaraji V</div>
          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "experience", "projects", "certifications", "contact"].map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={closeMenu}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Player 01 · Full Stack Explorer</p>
            <h1>Mission: Build Engaging Digital Experiences</h1>
            <p className="lede">
              Hi, I'm Yuvaraji. I love building clean, responsive web experiences and solving
              analytical problems with data. Currently pursuing B.E. Computer Science at Coimbatore
              Institute of Technology.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Start Game
              </a>
              <a className="btn ghost" href="mailto:yuvarajiv2004@gmail.com">
                Save Game
              </a>
            </div>
            <div className="hud-panel">
              <div className="hud-row">
                <div className="hud-stat">
                  <p className="label">Level</p>
                  <p className="value">03</p>
                </div>
                <div className="hud-stat">
                  <p className="label">XP</p>
                  <p className="value">275+</p>
                </div>
                <div className="hud-stat">
                  <p className="label">Primary Skills</p>
                  <p className="value">Java · React · MySQL</p>
                </div>
              </div>
              <p className="hud-status">
                Status: Ready for co-op missions · Accepting freelance and internship quests.
              </p>
            </div>
            <ul className="contact-list">
              <li>
                <span>Location</span>Coimbatore, Tamil Nadu
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:yuvarajiv2004@gmail.com">yuvarajiv2004@gmail.com</a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+919344967074">+91 93449 67074</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href="https://linkedin.com/in/yuvaraji-v-776381258" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <span>LeetCode</span>
                <a href="https://leetcode.com/u/yuvaraji11/" target="_blank" rel="noreferrer">
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <img
                src={profileImage}
                alt="Portrait of Yuvaraji standing near a lake"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackAvatar;
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Who I am</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>Education</h3>
              <ul>
                {education.map((item) => (
                  <li key={item.school}>
                    <strong>{item.school}</strong>
                    <span>{item.detail}</span>
                    <span>{item.extra}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Technologies &amp; Skills</h3>
              <div className="chip-grid">
                {technologyStacks.map((stack) =>
                  stack.values.map((value) => (
                    <span key={`${stack.label}-${value}`} className="chip">
                      {value}
                    </span>
                  ))
                )}
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Professional Experience</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={exp.role}>
                <div className="timeline-header">
                  <span className="timeline-date">{exp.timeline}</span>
                  <h3>{exp.role}</h3>
                  <p className="timeline-org">{exp.org}</p>
                </div>
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Featured Work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div>
                  <p className="project-date">{project.period}</p>
                  <h3>{project.title}</h3>
                  <p className="project-stack">{project.stack}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section certifications">
          <div className="section-heading">
            <p className="eyebrow">Learning</p>
            <h2>Certifications &amp; Achievements</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name}>
                <h3>{cert.name}</h3>
                <p className="cert-meta">{cert.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section interests">
          <div className="section-heading">
            <p className="eyebrow">Life outside code</p>
            <h2>Interests</h2>
          </div>
          <div className="interest-tags">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>Built with ♥ using React &amp; Vite by Yuvaraji V</p>
        <div className="footer-links">
          <a href="mailto:yuvarajiv2004@gmail.com">Email</a>
          <a href="https://linkedin.com/in/yuvaraji-v-776381258" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/yuvaraji11/" target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>
        <a className="back-to-top" href="#top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;

