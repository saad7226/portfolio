import '../styles/About.css';

const certifications = [
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
              <div className="about-card-sub">Sep 2022 — Present</div>
              <div className="cgpa-badge">⭐ 3.3 CGPA (6 Semesters)</div>
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
                Building the <span className="gradient-text">Future</span><br />
                with Code & AI
              </h2>
              <p className="about-para">
                I'm a final-year <strong>Computer Science student</strong> at Air University with a passion for building
                intelligent, scalable systems. My expertise spans <strong>full-stack web development</strong>,
                <strong> machine learning</strong>, and <strong>AI-powered applications</strong>.
              </p>
              <p className="about-para">
                As the <strong>Group Leader & AI/ML Specialist</strong> for my Final Year Project — <strong>News Pulse</strong> —
                I architected a microservices-based platform that leverages <strong>BERT</strong>, <strong>LLMs</strong>,
                and <strong>FastAPI</strong> to combat misinformation and political bias in news consumption.
              </p>
              <p className="about-para">
                I thrive at the intersection of AI research and software engineering, turning complex problems
                into elegant, user-focused solutions. I'm eager to pursue a <strong>Master's degree in Computer Science</strong>
                to advance my expertise in AI.
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
                    <div className="cert-date">{cert.date}</div>
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
