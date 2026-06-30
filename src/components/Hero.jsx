import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const roles = [
  'Full-Stack Developer',
  'AI/ML Engineer',
  'React Developer',
  'Python Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayText(currentRole.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">{'// Hello, World! I\'m'}</p>
          <h1 className="hero-name">Muhammad<br />Saad Zafar</h1>

          <div className="hero-title-line">
            <span className="hero-role">
              {displayText}
              <span className="hero-cursor" />
            </span>
          </div>

          <p className="hero-description">
            Dedicated <strong>Computer Science student</strong> at Air University with a strong foundation in
            <strong> full-stack development</strong>, <strong>artificial intelligence</strong>, and <strong>machine learning</strong>.
            Led the AI/ML component of <strong>News Pulse</strong> — a research-based FYP leveraging AI to
            combat misinformation. CGPA: <strong>3.3 / 4.0</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              🚀 View My Work
            </a>
            <a href="/saad_zafar_cv.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              📄 Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/saad7226" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-saad-zafar-346308288" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:saadzafar0505650@gmail.com" className="social-link" title="Email">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://wa.me/923200505650" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">19+</span>
              <span className="stat-label">GitHub Repos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.3</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Yrs Experience</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar-bg">
              <span className="hero-avatar-text">SZ</span>
            </div>

            {/* Floating tech badges */}
            <div className="tech-badge tech-badge-1">
              <span className="tech-badge-icon">🐍</span> Python
            </div>
            <div className="tech-badge tech-badge-2">
              <span className="tech-badge-icon">⚛️</span> React
            </div>
            <div className="tech-badge tech-badge-3">
              <span className="tech-badge-icon">🤖</span> AI / ML
            </div>
            <div className="tech-badge tech-badge-4">
              <span className="tech-badge-icon">🐳</span> Docker
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
