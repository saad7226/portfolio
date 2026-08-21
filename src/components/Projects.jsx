import ImageSlider from './ImageSlider';
import '../styles/Projects.css';

// =============================================
// VERIFIED IMAGE MAPPING (from visual analysis):
// image.png    = Tic Tac Toe console (C++ menu)
// image2.png   = Tic Tac Toe gameplay board
// image3-5     = Tic Tac Toe more states
// image6.png   = FitMate Desktop - Sign Up screen
// image7-8     = FitMate Desktop - more screens
// image9.png   = FitMate Desktop - Dashboard
// imagea-f     = FitMate Desktop - exercise screens
// image10.png  = FitMate Desktop - Calories
// image11.png  = AI Insurance web - landing page
// image12-1b   = AI Insurance web - more screens
// image1c.png  = Product Catalog / E-Commerce app
// image1d-24   = E-commerce more screens
// image2b.png  = Ludo Game console output
// image2c.png  = FitMate Mobile - Splash/Start screen
// image2d-2e   = FitMate Mobile - more screens
// image2f.png  = FitMate Mobile / another screen
// image30-34   = Various project screens
// image35.png  = FitMate Mobile - Back Workout list
// image36-39   = FitMate Mobile - more workouts
// image3a.png  = FitMate Mobile - another workout
// image3b.png  = FitMate Mobile - Cardio Workout
// image3c-3f   = FitMate Mobile screens
// image40.png  = FitMate Mobile - Water Tracking
// image41.png  = FitMate Mobile - Healthy Eating
// =============================================

const fypMedia = [
  { type: 'video', src: '/newspulse-demo.mp4' },
];

const fypTechs = [
  'Python', 'React.js', 'FastAPI', 'Docker', 'Redis', 'SQLite',
  'HuggingFace', 'BERT', 'LLMs', 'Nginx', 'DigitalOcean',
  'JWT', 'Google OAuth 2.0', 'Grafana', 'Prometheus',
];

const projects = [
  {
    id: 'fitmate-mobile',
    name: 'FitMate — Mobile Fitness Companion',
    description:
      'Comprehensive Android app built with Kotlin featuring personalized workout routines (Back, Chest, Shoulders, Cardio), diet plans, water intake tracking, video-guided exercises, and health calculators (BMI, BMR).',
    media: [
      { type: 'image', src: '/image2c.png', alt: 'FitMate Splash Screen' },
      { type: 'image', src: '/image2d.png', alt: 'FitMate Login' },
      { type: 'image', src: '/image2e.png', alt: 'FitMate Home' },
      { type: 'image', src: '/image35.png', alt: 'FitMate Back Workout' },
      { type: 'image', src: '/image3b.png', alt: 'FitMate Cardio Workout' },
      { type: 'image', src: '/image40.png', alt: 'FitMate Water Tracking' },
      { type: 'image', src: '/image41.png', alt: 'FitMate Healthy Eating' },
      { type: 'image', src: '/image3c.png', alt: 'FitMate Workouts' },
      { type: 'image', src: '/image3d.png', alt: 'FitMate Progress' },
      { type: 'image', src: '/image3e.png', alt: 'FitMate Exercise Detail' },
      { type: 'image', src: '/image3f.png', alt: 'FitMate Nutrition' },
    ],
    tags: ['Kotlin', 'Android Studio', 'MVVM', 'Firebase'],
    github: 'https://github.com/saad7226/FitMate',
    langClass: 'kt',
  },
  {
    id: 'fitmate-desktop',
    name: 'FitMate — Desktop Dashboard',
    description:
      'Desktop fitness dashboard featuring activity tracking, workout progress charts, sleep monitoring, weather integration, goal tracking, and heart rate metrics. Built with a modern, data-driven interface.',
    media: [
      { type: 'image', src: '/image6.png', alt: 'FitMate Desktop Sign Up' },
      { type: 'image', src: '/image7.png', alt: 'FitMate Desktop Sign In' },
      { type: 'image', src: '/image8.png', alt: 'FitMate Desktop Onboarding' },
      { type: 'image', src: '/image9.png', alt: 'FitMate Desktop Dashboard' },
      { type: 'image', src: '/imagea.png', alt: 'FitMate Water Intake' },
      { type: 'image', src: '/imageb.png', alt: 'FitMate Exercise Log' },
      { type: 'image', src: '/imagec.png', alt: 'FitMate Back Workout' },
      { type: 'image', src: '/imaged.png', alt: 'FitMate Chest Workout' },
      { type: 'image', src: '/imagee.png', alt: 'FitMate Shoulder Workout' },
      { type: 'image', src: '/imagef.png', alt: 'FitMate Cardio Workout' },
      { type: 'image', src: '/image10.png', alt: 'FitMate Calories' },
    ],
    tags: ['Python', 'Tkinter', 'Charts', 'SQLite'],
    github: 'https://github.com/saad7226/FitMate',
    langClass: 'py',
  },
  {
    id: 'ai-insurance',
    name: 'AI Insurance Claim Predictor',
    description:
      'ML model predicting insurance claim risks using Porto Seguro dataset deployed as a Flask web app. Achieved 96.32% accuracy with Random Forest and 96.12% with ANN, with ROC-AUC of 0.97.',
    media: [
      { type: 'video', src: '/ai-demo.mp4' },
      { type: 'image', src: '/image11.png', alt: 'AI Insurance Landing Page' },
      { type: 'image', src: '/image12.png', alt: 'AI Insurance Prediction Form' },
      { type: 'image', src: '/image13.png', alt: 'Class Distribution Chart' },
      { type: 'image', src: '/image14.png', alt: 'Missing Values Heatmap' },
      { type: 'image', src: '/image15.png', alt: 'Correlation Matrix' },
    ],
    tags: ['Python', 'Scikit-Learn', 'Flask', 'RandomForest', 'ANN', 'Pandas'],
    github: 'https://github.com/saad7226/AI-Insurance-Claim-Predictor',
    langClass: 'py',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Product Catalog',
    description:
      'Full-featured e-commerce product catalog with category filtering (Smartphones, Sports, Laptops), product grid display, search functionality, and shopping cart management.',
    media: [
      { type: 'image', src: '/image1c.png', alt: 'Product Catalog Main' },
      { type: 'image', src: '/image1d.png', alt: 'Shopping Cart' },
      { type: 'image', src: '/image1e.png', alt: 'Checkout & Bill' },
    ],
    tags: ['JavaScript', 'CSS', 'HTML5', 'LocalStorage'],
    github: 'https://github.com/saad7226/E-commerce',
    langClass: 'js',
  },
  {
    id: 'data-science',
    name: 'Suicide Rate Data Analysis',
    description:
      'End-to-end data science project analyzing global suicide rates (1985-2016) with comprehensive EDA, statistical hypothesis testing, correlation analysis, and interactive visualizations using Python.',
    media: [
      { type: 'video', src: '/suicide-rate-demo.mp4' },
      { type: 'video', src: '/datascience-demo.mp4' },
    ],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'EDA'],
    github: 'https://github.com/saad7226/sucide-rate-analyzer',
    langClass: 'py',
  },
  {
    id: 'crud-netsol',
    name: 'Financial Data Management System',
    description:
      'Full-stack CRUD application built during NetSol Technologies internship. Features Angular frontend with ASP.NET Core API, optimized pagination/filtration improving data retrieval by 35%, and pie chart visualizations.',
    media: [],
    tags: ['C#', 'ASP.NET Core', 'Angular', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/saad7226/CRUDOperation-With-Asp.net-and-Angular',
    langClass: 'cs',
  },
  {
    id: 'ludo',
    name: 'Ludo — Multithreaded Console Game',
    description:
      'Console-based Ludo game implementing OS multithreading concepts in Java. Features thread synchronization, mutex locks, and concurrent game state management for multiple players.',
    media: [
      { type: 'image', src: '/image24.png', alt: 'Ludo Console Output 1' },
      { type: 'image', src: '/image25.png', alt: 'Ludo Console Output 2' },
      { type: 'image', src: '/image26.png', alt: 'Ludo Board State' },
      { type: 'image', src: '/image27.png', alt: 'Ludo Player Tokens' },
      { type: 'image', src: '/image28.png', alt: 'Ludo Game Flow' },
      { type: 'image', src: '/image29.png', alt: 'Ludo Thread State' },
      { type: 'image', src: '/image2a.png', alt: 'Ludo Win State' },
      { type: 'image', src: '/image2b.png', alt: 'Ludo Final Output' },
    ],
    tags: ['Java', 'Multithreading', 'OS Concepts', 'Console', 'Mutex'],
    github: 'https://github.com/saad7226',
    langClass: 'java',
  },
  {
    id: 'tictactoe',
    name: 'Tic Tac Toe — Console Game',
    description:
      'Classic Tic Tac Toe console game featuring 2-player mode, move validation, win/draw detection, and a clean ASCII board interface. Built as a foundational C++ programming exercise.',
    media: [
      { type: 'image', src: '/image.png', alt: 'Tic Tac Toe Main Menu' },
      { type: 'image', src: '/image2.png', alt: 'Tic Tac Toe Gameplay' },
      { type: 'image', src: '/image3.png', alt: 'Tic Tac Toe Board' },
      { type: 'image', src: '/image4.png', alt: 'Tic Tac Toe Win State' },
      { type: 'image', src: '/image5.png', alt: 'Tic Tac Toe Results' },
    ],
    tags: ['C++', 'Console', 'Game Logic', 'OOP'],
    github: 'https://github.com/saad7226',
    langClass: 'cs',
  },
  {
    id: 'school-mgmt',
    name: 'School Management System',
    description:
      'JavaFX and Spring Boot application for comprehensive student record management with MySQL backend. Features student profiles, grade tracking, teacher management, and course assignments.',
    media: [],
    tags: ['Java', 'JavaFX', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/saad7226',
    langClass: 'java',
  },
  {
    id: 'securesteg',
    name: 'SecureSteg — Image Steganography',
    description:
      'Jupyter Notebook-based steganography application for hiding secret images inside host images using LSB (Least Significant Bit) technique with visual bounding-box feedback and preprocessing pipeline.',
    media: [
      { type: 'video', src: '/securesteg-demo.mp4' },
      { type: 'image', src: '/securesteg-preview.png', alt: 'SecureSteg Preview' },
    ],
    tags: ['Python', 'Jupyter', 'OpenCV', 'LSB Steganography', 'PIL'],
    github: 'https://github.com/saad7226/SecureSteg',
    langClass: 'py',
  },
  {
    id: 'barcode',
    name: 'Barcode Detection & Decoding',
    description:
      'Tkinter app detecting and decoding barcodes from images using preprocessing, contour detection, and Pyzbar library. Features visual bounding-box feedback and supports multiple barcode formats.',
    media: [
      { type: 'image', src: '/barcode_slide11_image7.png', alt: 'Barcode Detection Output 1' },
      { type: 'image', src: '/barcode_slide12_image8.png', alt: 'Barcode Detection Output 2' },
      { type: 'image', src: '/barcode_slide13_image9.png', alt: 'Barcode Detection Output 3' },
      { type: 'image', src: '/barcode_slide14_image10.png', alt: 'Barcode Detection Output 4' },
    ],
    tags: ['Python', 'OpenCV', 'Pyzbar', 'Tkinter', 'Computer Vision'],
    github: 'https://github.com/saad7226',
    langClass: 'py',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">🚀 Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            11+ projects spanning AI/ML systems, full-stack web apps, mobile development,
            and computer science fundamentals — each built with real-world intent.
          </p>
          <div className="section-divider" />
        </div>

        {/* ========== FEATURED: Final Year Project ========== */}
        <div className="fyp-featured">
          <div className="fyp-card">
            <div className="fyp-inner">
              {/* Content */}
              <div className="fyp-content">
                <div className="fyp-badge-row">
                  <span className="fyp-badge-main fyp-badge-star">⭐ Main Project</span>
                  <span className="fyp-badge-main">🎓 Final Year Project</span>
                  <span className="fyp-badge-main">🔬 Research-Based</span>
                </div>

                <h2 className="fyp-title">News Pulse</h2>
                <div className="fyp-subtitle">
                  AI-Powered News Aggregation & Analysis Platform
                </div>

                <div className="fyp-role-badge">
                  👑 Group Leader & AI/ML Specialist
                </div>

                <p className="fyp-description">
                  Led a team to develop a scalable <strong>microservices-based</strong> news platform that aggregates articles,
                  generates <strong>LLM-powered summaries</strong>, detects <strong>fake news using BERT</strong>,
                  analyzes <strong>political bias</strong>, and produces balanced counter-arguments.
                  Built containerized services with <strong>FastAPI & Docker</strong>, deployed on
                  <strong> DigitalOcean</strong> with Nginx, secured via JWT + Google OAuth 2.0, and
                  monitored with <strong>Grafana & Prometheus</strong>.
                </p>

                <div className="fyp-tech-grid">
                  {fypTechs.map((tech) => (
                    <span key={tech} className="fyp-tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="fyp-actions">
                  <a
                    href="https://github.com/saad7226/NewsPulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  <a
                    href="/saad_zafar_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    📄 View CV / Report
                  </a>
                </div>
              </div>

              {/* Media Slider */}
              <div className="fyp-media">
                <div className="fyp-media-inner">
                  <ImageSlider media={fypMedia} interval={5000} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== OTHER PROJECTS GRID ========== */}
        <div className="projects-grid-title">
          <h3>More Projects</h3>
          <div className="divider-line" />
          <span style={{ color: 'var(--text-muted)', fontSize: '14px', whiteSpace: 'nowrap' }}>
            {projects.length} projects
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <ImageSlider media={project.media} interval={3500} name={project.name} />

              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="GitHub"
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`project-tag ${project.langClass || ''}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
