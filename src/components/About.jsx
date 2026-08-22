import '../styles/About.css';

const certifications = [
  {
    issuer: 'National Skill Competency Test (NSCT)',
    name: 'Score: 67/100 (95.3 Percentile)',
    date: 'Apr 2026',
    link: null,
    description: 'Strong competencies in core CS domains: Data Structures & Algorithms (8/10), Databases (8/10), Web Development Basics (8/10), and Problem Solving/Analytics (14/20).'
  },
  {
    issuer: 'Stanford / Coursera',
    name: 'Supervised Machine Learning: Regression & Classification',
    date: 'Sep 2023',
    link: 'https://coursera.org/share/4b7e1ecb2e167c68a136428d8205909d',
  },
  {
    issuer: 'Stanford / Coursera',
    name: 'Advanced Learning Algorithms',
    date: 'Oct 2023',
    link: 'https://coursera.org/share/cd36054f41143b500a5c22e17afb1444',
  },
  {
    issuer: 'Alabtaal',
    name: 'Java Programming (J2SE)',
    date: 'May 2024',
    link: null,
  },
  {
    issuer: "Duke of Edinburgh's",
    name: 'Bronze Standard International Award',
    date: 'Jan 2019',
    link: null,
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Info cards */}
          <div className="about-info-stack">
            <div className="about-card">
              <span className="about-card-icon">🎓</span>
              <div className="about-card-title">Education</div>
              <div className="about-card-value">BSCS — Air University</div>
              <div className="about-card-sub">Aerospace & Aviation Campus, Kamra</div>
              <div className="about-card-sub">Sep 2022 — Jun 2026</div>
              <div className="cgpa-badge">⭐ 3.3 CGPA (8 Semesters)</div>
            </div>

            <div className="about-card">
              <span className="about-card-icon">💼</span>
              <div className="about-card-title">Experience</div>
              <div className="about-card-value">Full-Stack Intern</div>
              <div className="about-card-sub">NetSol Technologies, Lahore</div>
              <div className="about-card-sub">Jul 2024 — Sep 2024</div>
            </div>

            <div className="about-card">
              <span className="about-card-icon">📍</span>
              <div className="about-card-title">Location</div>
              <div className="about-card-value">Kamra, Attock</div>
              <div className="about-card-sub">Punjab, Pakistan</div>
            </div>

            <div className="about-card">
              <span className="about-card-icon">📧</span>
              <div className="about-card-title">Contact</div>
              <div className="about-card-value" style={{ fontSize: '14px' }}>saadzafar0505650@gmail.com</div>
              <div className="about-card-sub">+92 3200505650</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <div className="about-text-block">
              <h2 className="about-heading">
                Building Robust <span className="gradient-text">Systems</span><br />
                for the Web
              </h2>
              <p className="about-para">
                I'm a final-year <strong>Computer Science student</strong> at Air University with a passion for building
                scalable, high-performance web applications. My expertise spans <strong>full-stack web development</strong>,
                <strong> MVC architecture</strong>, and <strong>backend engineering</strong>.
              </p>
              <p className="about-para">
                I specialize in robust backend frameworks like <strong>Laravel (PHP)</strong> and ASP.NET Core, alongside modern frontend technologies. From developing real-time inventory management dashboards to integrating third-party APIs and managing relational databases (MySQL, SQL Server), I focus on writing clean, maintainable code.
              </p>
              <p className="about-para">
                I thrive in dynamic environments where I can solve complex problems and deliver elegant, user-focused solutions. I am actively seeking a challenging role as a <strong>Backend/PHP Developer</strong> where I can contribute to real-world projects and grow alongside a talented team.
              </p>
            </div>

            {/* NetSol Experience */}
            <div className="experience-card">
              <div className="experience-dot">🏢</div>
              <div className="experience-info">
                <h4>Full-Stack Development Intern — NetSol Financial Suite (NFS)</h4>
                <p>NetSol Technologies, Lahore, Pakistan</p>
                <span className="exp-period">July 2024 — September 2024</span>
                <div className="experience-achievements">
                  <div className="exp-achievement">
                    Built a Financial Data Management System using <strong>ASP.NET Core</strong> & <strong>Angular</strong>,
                    improving data retrieval efficiency by <strong>35%</strong> via optimized pagination/filtration.
                  </div>
                  <div className="exp-achievement">
                    Integrated data visualization (pie charts) & reduced API response time by <strong>25%</strong> through
                    SQL query optimization.
                  </div>
                  <div className="exp-achievement">
                    Gained skills in RESTful APIs, Entity Framework Core, Angular CLI, and Agile teamwork.
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
                🏆 Certifications
              </h3>
              <div className="certs-grid">
                {certifications.map((cert, i) => (
                  <a
                    key={i}
                    href={cert.link || undefined}
                    target={cert.link ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="cert-card"
                    style={{ textDecoration: 'none', cursor: cert.link ? 'pointer' : 'default' }}
                  >
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-name">{cert.name}</div>
                    {cert.description && <div className="cert-desc" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.5' }}>{cert.description}</div>}
                    <div className="cert-date" style={{ marginTop: cert.description ? '12px' : '4px' }}>{cert.date}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
