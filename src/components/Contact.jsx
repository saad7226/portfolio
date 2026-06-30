import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// ─── EmailJS Config ────────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com/
// 2. Create an Email Service (Gmail) → copy Service ID below
// 3. Create an Email Template → copy Template ID below
// 4. Go to Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEF123456'
// ──────────────────────────────────────────────────────────────────────────────

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">📬 Let's Talk</div>
            <h2 className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind, want to collaborate, or just say hi?
              I'd love to hear from you!
            </p>
            <div className="section-divider" />
          </div>

          <div className="contact-wrapper">
            {/* Left — Info */}
            <div className="contact-info">
              <div>
                <h3 className="contact-heading">
                  Let's Build Something <span className="gradient-text">Amazing</span>
                </h3>
                <p className="contact-desc">
                  I'm currently open to internship opportunities, freelance projects, and
                  full-time positions. Whether you have a question or just want to say hello,
                  my inbox is always open.
                </p>
              </div>

              <a href="mailto:saadzafar0505650@gmail.com" className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-info">
                  <h4>Email</h4>
                  <p>saadzafar0505650@gmail.com</p>
                </div>
              </a>

              <a href="tel:+923200505650" className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div className="contact-item-info">
                  <h4>Phone / WhatsApp</h4>
                  <p>+92 320 0505650</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-saad-zafar-346308288"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">💼</div>
                <div className="contact-item-info">
                  <h4>LinkedIn</h4>
                  <p>muhammad-saad-zafar-346308288</p>
                </div>
              </a>

              <a
                href="https://github.com/saad7226"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">🐙</div>
                <div className="contact-item-info">
                  <h4>GitHub</h4>
                  <p>github.com/saad7226</p>
                </div>
              </a>

              <div className="contact-socials">
                <a href="https://github.com/saad7226" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/muhammad-saad-zafar-346308288" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="/saad_zafar_cv.pdf" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                  📄 Resume
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      className="form-input"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === STATUS.SENDING}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      className="form-input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === STATUS.SENDING}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    className="form-input"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={status === STATUS.SENDING}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === STATUS.SENDING}
                  />
                </div>

                {status === STATUS.SUCCESS && (
                  <div className="form-feedback form-feedback--success">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === STATUS.ERROR && (
                  <div className="form-feedback form-feedback--error">
                    ❌ Something went wrong. Please email me directly at saadzafar0505650@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  className={`form-submit${status === STATUS.SENDING ? ' form-submit--loading' : ''}`}
                  disabled={status === STATUS.SENDING || status === STATUS.SUCCESS}
                >
                  {status === STATUS.SENDING ? (
                    <><span className="btn-spinner" /> Sending...</>
                  ) : status === STATUS.SUCCESS ? (
                    <>✅ Sent!</>
                  ) : (
                    <>🚀 Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Designed &amp; Built with <span>❤️</span> by{' '}
            <a href="https://github.com/saad7226" target="_blank" rel="noopener noreferrer">
              Muhammad Saad Zafar
            </a>{' '}
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
