import '../styles/Skills.css';

const skillCategories = [
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    subtitle: 'Server-Side Engineering',
    skills: [
      { name: 'PHP', icon: '🐘', level: 5 },
      { name: 'Laravel', icon: '🚀', level: 4 },
      { name: 'REST APIs', icon: '🔗', level: 5 },
      { name: 'MVC Architecture', icon: '🏗️', level: 5 },
      { name: 'FastAPI', icon: '⚡', level: 5 },
      { name: 'ASP.NET Core', icon: '🔷', level: 4 },
      { name: 'JWT / OAuth', icon: '🔐', level: 4 },
    ],
  },
  {
    icon: '🌐',
    title: 'Frontend Development',
    subtitle: 'Web Interfaces',
    skills: [
      { name: 'HTML5', icon: '🏗️', level: 5 },
      { name: 'CSS3', icon: '🎨', level: 5 },
      { name: 'JavaScript', icon: '🟨', level: 5 },
      { name: 'React.js', icon: '⚛️', level: 5 },
      { name: 'Angular', icon: '🅰️', level: 4 },
      { name: 'TypeScript', icon: '📘', level: 3 },
      { name: 'Vite', icon: '⚡', level: 4 },
    ],
  },
  {
    icon: '🐳',
    title: 'Databases & DevOps',
    subtitle: 'Storage & Infrastructure',
    skills: [
      { name: 'MySQL', icon: '🐬', level: 5 },
      { name: 'Git / GitHub', icon: '🐙', level: 5 },
      { name: 'Docker', icon: '🐳', level: 4 },
      { name: 'Redis', icon: '🟥', level: 4 },
      { name: 'SQLite', icon: '📁', level: 4 },
      { name: 'SQL Server', icon: '🛢️', level: 4 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Systems',
    skills: [
      { name: 'Python', icon: '🐍', level: 5 },
      { name: 'Scikit-Learn', icon: '📊', level: 5 },
      { name: 'TensorFlow', icon: '🧠', level: 4 },
      { name: 'HuggingFace', icon: '🤗', level: 4 },
      { name: 'BERT / LLMs', icon: '💬', level: 4 },
      { name: 'Pandas', icon: '🐼', level: 5 },
    ],
  },
  {
    icon: '📱',
    title: 'Mobile & Other',
    subtitle: 'Cross-Platform',
    skills: [
      { name: 'Kotlin', icon: '🟪', level: 4 },
      { name: 'Android Studio', icon: '📱', level: 4 },
      { name: 'C#', icon: '🔵', level: 4 },
      { name: 'Java', icon: '☕', level: 4 },
      { name: 'JavaFX', icon: '🖥️', level: 3 },
      { name: 'Unity 3D', icon: '🎮', level: 3 },
      { name: 'C++', icon: '⚙️', level: 3 },
    ],
  },
];

function SkillLevel({ level }) {
  return (
    <div className="skill-level">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div key={dot} className={`skill-dot ${dot <= level ? 'active' : ''}`} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">⚡ Technical Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit built across full-stack development, AI/ML engineering,
            and cloud infrastructure.
          </p>
          <div className="section-divider" />
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, ci) => (
            <div key={ci} className="skill-category" style={{ animationDelay: `${ci * 0.1}s` }}>
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <div>
                  <div className="skill-category-title">{category.title}</div>
                  <div className="skill-category-subtitle">{category.subtitle}</div>
                </div>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, si) => (
                  <div key={si} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="lang-section">
          <div className="lang-card">
            <span className="lang-flag">🇵🇰</span>
            <div className="lang-info">
              <h4>Urdu</h4>
              <p>Native / Mother Tongue</p>
            </div>
          </div>
          <div className="lang-card">
            <span className="lang-flag">🇬🇧</span>
            <div className="lang-info">
              <h4>English</h4>
              <p>Proficient — All academic coursework in English</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
