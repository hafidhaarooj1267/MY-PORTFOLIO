/**
 * Portfolio JavaScript - Arooj Tariq
 * High Performance, Modular, Fully Responsive & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. GLOBAL THEME MANAGER
  // ==========================================================================
  const themes = [
    {
      name: "Light",
      bgPrimary: "#f8fafc",
      bgSecondary: "#e2e8f0",
      bgGrad: "linear-gradient(135deg, #f8fafc 0%, #eef2f6 50%, #e2e8f0 100%)",
      glass: "rgba(255, 255, 255, 0.78)",
      glassHover: "rgba(255, 255, 255, 0.94)",
      border: "rgba(15, 23, 42, 0.08)",
      borderHover: "rgba(124, 58, 237, 0.35)",
      nav: "rgba(255, 255, 255, 0.88)",
      text: "#0f172a",
      text2: "#475569",
      muted: "#64748b",
      shadowSm: "0 2px 8px rgba(0, 0, 0, 0.04)",
      shadowMd: "0 10px 30px rgba(0, 0, 0, 0.08)",
      shadowLg: "0 20px 45px rgba(0, 0, 0, 0.12)",
      a1: "#2563eb", // FE
      a2: "#059669", // BI
      a3: "#7c3aed", // DS
      cursor: "rgba(124, 58, 237, 0.35)",
      particle: "rgba(124, 58, 237, 0.4)",
      btnBg: "#7c3aed",
      btnText: "#ffffff",
      heroGrad: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #059669 100%)"
    },
    {
      name: "Dark",
      bgPrimary: "#0f172a",
      bgSecondary: "#1e293b",
      bgGrad: "linear-gradient(135deg, #090e1a 0%, #0f172a 50%, #1e293b 100%)",
      glass: "rgba(30, 41, 59, 0.72)",
      glassHover: "rgba(30, 41, 59, 0.92)",
      border: "rgba(255, 255, 255, 0.1)",
      borderHover: "rgba(192, 132, 252, 0.45)",
      nav: "rgba(15, 23, 42, 0.88)",
      text: "#f8fafc",
      text2: "#cbd5e1",
      muted: "#94a3b8",
      shadowSm: "0 2px 8px rgba(0, 0, 0, 0.3)",
      shadowMd: "0 12px 35px rgba(0, 0, 0, 0.5)",
      shadowLg: "0 20px 50px rgba(0, 0, 0, 0.65)",
      a1: "#38bdf8",
      a2: "#34d399",
      a3: "#c084fc",
      cursor: "rgba(192, 132, 252, 0.4)",
      particle: "rgba(192, 132, 252, 0.45)",
      btnBg: "#c084fc",
      btnText: "#0f172a",
      heroGrad: "linear-gradient(135deg, #38bdf8 0%, #c084fc 50%, #34d399 100%)"
    },
    {
      name: "Sunset",
      bgPrimary: "#1a1a2e",
      bgSecondary: "#16213e",
      bgGrad: "linear-gradient(135deg, #16162a 0%, #1a1a2e 50%, #201a35 100%)",
      glass: "rgba(32, 26, 53, 0.72)",
      glassHover: "rgba(32, 26, 53, 0.92)",
      border: "rgba(255, 255, 255, 0.12)",
      borderHover: "rgba(255, 107, 107, 0.45)",
      nav: "rgba(26, 26, 46, 0.88)",
      text: "#fdf8f4",
      text2: "#e0d3cb",
      muted: "#b3a59b",
      shadowSm: "0 2px 8px rgba(0, 0, 0, 0.3)",
      shadowMd: "0 12px 35px rgba(0, 0, 0, 0.45)",
      shadowLg: "0 20px 50px rgba(0, 0, 0, 0.6)",
      a1: "#ff6b6b",
      a2: "#feca57",
      a3: "#ff9ff3",
      cursor: "rgba(255, 159, 243, 0.4)",
      particle: "rgba(255, 159, 243, 0.4)",
      btnBg: "#ff6b6b",
      btnText: "#ffffff",
      heroGrad: "linear-gradient(135deg, #ff6b6b 0%, #ff9ff3 50%, #feca57 100%)"
    },
    {
      name: "Ocean",
      bgPrimary: "#072b42",
      bgSecondary: "#0c3b5b",
      bgGrad: "linear-gradient(135deg, #041f30 0%, #072b42 50%, #0c3b5b 100%)",
      glass: "rgba(12, 59, 91, 0.72)",
      glassHover: "rgba(12, 59, 91, 0.92)",
      border: "rgba(255, 255, 255, 0.14)",
      borderHover: "rgba(34, 211, 238, 0.45)",
      nav: "rgba(7, 43, 66, 0.88)",
      text: "#f0f9ff",
      text2: "#bae6fd",
      muted: "#7dd3fc",
      shadowSm: "0 2px 8px rgba(0, 0, 0, 0.3)",
      shadowMd: "0 12px 35px rgba(0, 0, 0, 0.45)",
      shadowLg: "0 20px 50px rgba(0, 0, 0, 0.6)",
      a1: "#38bdf8",
      a2: "#22d3ee",
      a3: "#818cf8",
      cursor: "rgba(34, 211, 238, 0.4)",
      particle: "rgba(34, 211, 238, 0.4)",
      btnBg: "#22d3ee",
      btnText: "#072b42",
      heroGrad: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 50%, #818cf8 100%)"
    },
    {
      name: "Forest",
      bgPrimary: "#0d331f",
      bgSecondary: "#14452a",
      bgGrad: "linear-gradient(135deg, #092415 0%, #0d331f 50%, #14452a 100%)",
      glass: "rgba(20, 69, 42, 0.72)",
      glassHover: "rgba(20, 69, 42, 0.92)",
      border: "rgba(255, 255, 255, 0.14)",
      borderHover: "rgba(74, 222, 128, 0.45)",
      nav: "rgba(13, 51, 31, 0.88)",
      text: "#f0fdf4",
      text2: "#bbf7d0",
      muted: "#86efac",
      shadowSm: "0 2px 8px rgba(0, 0, 0, 0.3)",
      shadowMd: "0 12px 35px rgba(0, 0, 0, 0.45)",
      shadowLg: "0 20px 50px rgba(0, 0, 0, 0.6)",
      a1: "#4ade80",
      a2: "#a3e635",
      a3: "#facc15",
      cursor: "rgba(74, 222, 128, 0.4)",
      particle: "rgba(74, 222, 128, 0.4)",
      btnBg: "#4ade80",
      btnText: "#0d331f",
      heroGrad: "linear-gradient(135deg, #4ade80 0%, #a3e635 50%, #facc15 100%)"
    }
  ];

  let currentThemeIdx = 0;
  const root = document.documentElement;
  const themeNameLabel = document.getElementById('themeNameLabel');
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    root.style.setProperty('--bg-primary', theme.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.bgSecondary);
    root.style.setProperty('--bg-gradient', theme.bgGrad);
    root.style.setProperty('--glass-bg', theme.glass);
    root.style.setProperty('--glass-bg-hover', theme.glassHover);
    root.style.setProperty('--glass-border', theme.border);
    root.style.setProperty('--glass-border-hover', theme.borderHover);
    root.style.setProperty('--nav-bg', theme.nav);
    root.style.setProperty('--text-primary', theme.text);
    root.style.setProperty('--text-secondary', theme.text2);
    root.style.setProperty('--text-muted', theme.muted);
    root.style.setProperty('--shadow-sm', theme.shadowSm);
    root.style.setProperty('--shadow-md', theme.shadowMd);
    root.style.setProperty('--shadow-lg', theme.shadowLg);
    root.style.setProperty('--accent-fe', theme.a1);
    root.style.setProperty('--accent-bi', theme.a2);
    root.style.setProperty('--accent-ds', theme.a3);
    root.style.setProperty('--cursor-glow', theme.cursor);
    root.style.setProperty('--particle-color', theme.particle);
    root.style.setProperty('--btn-primary-bg', theme.btnBg);
    root.style.setProperty('--btn-primary-text', theme.btnText);
    root.style.setProperty('--hero-heading-gradient', theme.heroGrad);

    root.setAttribute('data-theme', theme.name.toLowerCase());
    if (themeNameLabel) themeNameLabel.textContent = theme.name;
  }

  // Load saved theme from localStorage
  const savedThemeName = localStorage.getItem('portfolio_theme_name');
  if (savedThemeName) {
    const foundIdx = themes.findIndex(t => t.name.toLowerCase() === savedThemeName.toLowerCase());
    if (foundIdx !== -1) currentThemeIdx = foundIdx;
  }
  applyTheme(themes[currentThemeIdx]);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      const nextTheme = themes[currentThemeIdx];
      applyTheme(nextTheme);
      localStorage.setItem('portfolio_theme_name', nextTheme.name);
    });
  }

  // ==========================================================================
  // 2. RESPONSIVE NAVIGATION & MOBILE HAMBURGER
  // ==========================================================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking any nav item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Throttled Navbar Shadow on Scroll
  let lastScrollY = window.pageYOffset;
  let scrollTicking = false;

  function onScroll() {
    lastScrollY = window.pageYOffset;
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (navbar) {
          if (lastScrollY > 40) navbar.classList.add('scrolled');
          else navbar.classList.remove('scrolled');
        }
        updateTimelineProgress();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Active Link Highlighting using IntersectionObserver
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('section[id]').forEach(sec => sectionObserver.observe(sec));

  // ==========================================================================
  // 3. OPTIMIZED PARTICLES CANVAS (CPU & Battery Friendly)
  // ==========================================================================
  const canvas = document.getElementById('particleCanvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId = null;
    let isCanvasActive = true;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(124,58,237,0.4)';
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function initParticles() {
      particlesArray = [];
      // Density: lower density on mobile to preserve 60fps
      const divisor = window.innerWidth < 768 ? 16000 : 9000;
      const count = Math.min(Math.floor((canvas.width * canvas.height) / divisor), 90);
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      if (!isCanvasActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    // Pause canvas when user switches browser tab
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isCanvasActive = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isCanvasActive = true;
        animateParticles();
      }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 200);
    }, { passive: true });

    initParticles();
    animateParticles();
  }

  // ==========================================================================
  // 4. MOUSE CURSOR GLOW (DESKTOP ONLY)
  // ==========================================================================
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let currentX = -100, currentY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderGlow() {
      // Smooth lerp (interpolation) for fluid follow
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;
      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      requestAnimationFrame(renderGlow);
    }
    renderGlow();
  }

  // ==========================================================================
  // 5. TYPING TEXT CYCLING ANIMATION
  // ==========================================================================
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const lines = [
      "SELECT * FROM passion WHERE data = 'true';",
      "Turning raw data into actionable insights.",
      "Building interactive, responsive web applications.",
      "Developing predictive ML models & dashboards."
    ];
    let lineIdx = 0, charIdx = 0, deleting = false;

    function typeLoop() {
      const current = lines[lineIdx];
      if (deleting) {
        typingEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          lineIdx = (lineIdx + 1) % lines.length;
          setTimeout(typeLoop, 400);
          return;
        }
      } else {
        typingEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(typeLoop, 2000); // Pause on complete string
          return;
        }
      }
      setTimeout(typeLoop, deleting ? 35 : 70);
    }
    setTimeout(typeLoop, 500);
  }

  // ==========================================================================
  // 6. SCROLL REVEAL & COUNT-UP STATS
  // ==========================================================================
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  function animateCountUp(el, target) {
    const duration = 1600;
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target + '+';
    }
    requestAnimationFrame(update);
  }

  const statsSection = document.getElementById('about');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-number').forEach(stat => {
            const targetVal = parseInt(stat.getAttribute('data-target'), 10) || 0;
            animateCountUp(stat, targetVal);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    statsObserver.observe(statsSection);
  }

  // ==========================================================================
  // 7. TIMELINE SCROLL PROGRESSION
  // ==========================================================================
  const timelineLine = document.getElementById('timelineLine');
  const experienceSection = document.getElementById('experience');

  function updateTimelineProgress() {
    if (!timelineLine || !experienceSection) return;
    const rect = experienceSection.getBoundingClientRect();
    const windowH = window.innerHeight;
    const totalH = rect.height;
    // Calculate how much of experience section has scrolled past viewport center
    const scrolledPast = (windowH * 0.6) - rect.top;
    const progress = Math.min(1, Math.max(0, scrolledPast / totalH));
    timelineLine.style.height = `${progress * 100}%`;
  }

  // ==========================================================================
  // 8. DATA COLLECTIONS (FIXED BUGS, TYPOS, ACCURATE TITLES)
  // ==========================================================================
  const certifications = [
    {
      id: 1,
      title: "Introduction to Power BI",
      issuer: "DataCamp",
      hours: "4 HRS",
      date: "Feb 28, 2026",
      logo: "images/powerbi.png",
      tag: "Business Intelligence"
    },
    {
      id: 2,
      title: "Intermediate SQL",
      issuer: "DataCamp",
      hours: "4 HRS",
      date: "May 03, 2026",
      logo: "images/sqlintermediate.png",
      tag: "Relational Database"
    },
    {
      id: 3,
      title: "Introduction to SQL",
      issuer: "DataCamp",
      hours: "2 HRS",
      date: "Apr 19, 2026",
      logo: "images/introductionsql.png",
      tag: "Querying & Data Ops"
    },
    {
      id: 4,
      title: "WordPress Development Internship",
      issuer: "Soft Wise Solutions",
      hours: "6 Weeks",
      date: "May 2025",
      logo: "images/wordpress.png",
      tag: "Web Engineering"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "LMS Performance Dashboard",
      pillar: "bi",
      tools: ["Power BI", "DAX", "Google Sheets"],
      desc: "Comprehensive analytics tracking student & teacher attendance, lesson completion, and tutor-student distribution.",
      detail: "Developed an interactive multi-dimensional Power BI report featuring DAX calculated measures, conditional formatting, and attendance KPIs. Reduced manual administrative reporting overhead by 70%.",
      github: "https://github.com/hafidhaarooj1267/Power-BI-LMS-Dashboard",
      img: "images/lmsproject.png",
      icon: "📊"
    },
    {
      id: 2,
      title: "Interactive Modern Portfolio",
      pillar: "fe",
      tools: ["HTML5", "CSS3", "JavaScript", "Canvas"],
      desc: "High-performance responsive personal portfolio featuring dynamic theme switching, fluid carousels, and particles.",
      detail: "Engineered a custom glassmorphism portfolio with 5 color themes, hardware-accelerated CSS animations, touch-swipe carousel sliders, and a full-page particle engine optimized for 60fps.",
      github: "https://github.com/hafidhaarooj1267",
      img: "images/powerbi.png", // fallback image
      icon: "🎨"
    },
    {
      id: 3,
      title: "E-Vaccination Management System",
      pillar: "fe",
      tools: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      desc: "Healthcare portal enabling parents to register infants, view immunization schedules, and hospital admins to verify records.",
      detail: "Built secure relational database architecture using MySQL and PHP. Implemented automated vaccination schedule alerts, role-based authentication, and admin reporting dashboards.",
      github: "https://github.com/hafidhaarooj1267",
      img: "images/intermediatesql.png", // fallback image
      icon: "💉"
    },
    {
      id: 4,
      title: "HR Analytics Dashboard",
      pillar: "bi",
      tools: ["Power BI", "Excel", "Data Modeling"],
      desc: "Executive KPI dashboard analyzing workforce attrition, promotion cycles, department performance, and employee retention.",
      detail: "Synthesized multi-sheet employee records into a unified star-schema data model. Designed interactive attrition slicers and demographic breakdown visual analytics.",
      github: "https://github.com/hafidhaarooj1267/Power-BI-HR-Dashboard",
      img: "images/lmsproject.png",
      icon: "👥"
    },
    {
      id: 5,
      title: "Automated Financial & Sales Reports",
      pillar: "bi",
      tools: ["Excel", "VBA", "Power Query"],
      desc: "Automated end-of-month data consolidation pipelines reducing manual spreadsheet reconciliation time by 80%.",
      detail: "Structured automated ETL pipelines using Power Query and VBA macros to parse raw CSV exports into standardized executive balance reports and interactive pivot summaries.",
      github: "https://github.com/hafidhaarooj1267",
      img: "images/powerbi.png",
      icon: "📋"
    }
  ];

  const internships = [
    {
      role: "Data Analyst Intern",
      company: "Character Education Foundation",
      duration: "Nov 2025 – Feb 2026",
      desc: "Designed and deployed operational Power BI dashboards, automated daily KPI tracking across learning centers, and cleaned educational datasets.",
      pillar: "bi"
    },
    {
      role: "WordPress Development Intern",
      company: "Soft Wise Solutions",
      duration: "Mar 2025 – May 2025",
      desc: "Built custom responsive WordPress page templates, resolved CSS layout bugs, and integrated form handling scripts for client web platforms.",
      pillar: "fe"
    },
    {
      role: "Data Science & AI Intern",
      company: "DevelopersHub Corporation",
      duration: "Apr 2026 – May 2026",
      desc: "Conducted data preprocessing, tokenization, and exploratory data analysis (EDA) for machine learning natural language processing pipelines.",
      pillar: "ds"
    }
  ];

  const workshops = [
    {
      title: "Agent Development Toolkit",
      organizer: "Google Developer Groups (GDG)",
      date: "2025",
      whatwelearnt: "Connected Python backends to Gemini multimodal models via Google AI Studio API. Built few-shot visual classification workflows and tested agent prompt engineering techniques."
    },
    {
      title: "Intro to Prompt Engineering",
      organizer: "FAST NUCES, Islamabad Campus",
      date: "2025",
      whatwelearnt: "Mastered system role crafting, structured JSON output extraction, multi-turn context management, and iterative prompt refinement for LLM reasoning accuracy."
    },
    {
      title: "DevFest 2025 Conference",
      organizer: "Google Developer Groups (GDG)",
      date: "2025",
      whatwelearnt: "Attended intensive technical tracks across modern web architecture, scalable cloud infrastructure, and integrating AI models into web software systems."
    },
    {
      title: "VERTEX AI MasterClass",
      organizer: "Google Developer Groups (GDG)",
      date: "2025",
      whatwelearnt: "Explored Google Cloud Model Garden, configured enterprise safety thresholds, and examined end-to-end MLOps pipeline deployment for trained prediction models."
    }
  ];

  // ==========================================================================
  // 9. REUSABLE CAROUSEL ENGINE (RESPONSIVE & TOUCH-ENABLED)
  // ==========================================================================
  class ResponsiveCarousel {
    constructor(config) {
      this.viewport = document.getElementById(config.viewportId);
      this.track = document.getElementById(config.trackId);
      this.prevBtn = document.getElementById(config.prevBtnId);
      this.nextBtn = document.getElementById(config.nextBtnId);
      this.dotsContainer = document.getElementById(config.dotsContainerId);
      this.currentIndex = 0;
      this.itemsCount = config.itemsCount || 0;
      this.gap = config.gap || 24;

      this.initEvents();
    }

    initEvents() {
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prev());
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.next());
      }

      // Touch / Swipe Navigation
      let touchStartX = 0;
      let touchDeltaX = 0;

      this.track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchDeltaX = 0;
      }, { passive: true });

      this.track.addEventListener('touchmove', (e) => {
        touchDeltaX = e.touches[0].clientX - touchStartX;
      }, { passive: true });

      this.track.addEventListener('touchend', () => {
        if (Math.abs(touchDeltaX) > 45) {
          if (touchDeltaX < 0) this.next();
          else this.prev();
        }
      });

      // Keyboard Arrow Navigation when viewport is focused
      this.track.setAttribute('tabindex', '0');
      this.track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.next();
        }
      });

      // Recalculate on Resize
      let resizeDebounce;
      window.addEventListener('resize', () => {
        clearTimeout(resizeDebounce);
        resizeDebounce = setTimeout(() => this.update(), 150);
      }, { passive: true });
    }

    getMaxIndex() {
      if (!this.track.firstElementChild) return 0;
      const cardW = this.track.firstElementChild.getBoundingClientRect().width;
      const viewportW = this.viewport.getBoundingClientRect().width;
      const visibleCards = Math.max(1, Math.floor((viewportW + this.gap) / (cardW + this.gap)));
      return Math.max(0, this.itemsCount - visibleCards);
    }

    update() {
      if (!this.track.firstElementChild) return;
      const cardW = this.track.firstElementChild.getBoundingClientRect().width;
      const step = cardW + this.gap;
      const maxIdx = this.getMaxIndex();

      if (this.currentIndex > maxIdx) this.currentIndex = maxIdx;
      if (this.currentIndex < 0) this.currentIndex = 0;

      const translateX = this.currentIndex * step;
      this.track.style.transform = `translate3d(-${translateX}px, 0, 0)`;

      // Update button disabled states
      if (this.prevBtn) {
        this.prevBtn.disabled = (this.currentIndex === 0);
      }
      if (this.nextBtn) {
        this.nextBtn.disabled = (this.currentIndex >= maxIdx);
      }

      // Update indicator dots
      if (this.dotsContainer) {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === this.currentIndex);
        });
      }
    }

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.update();
      }
    }

    next() {
      const maxIdx = this.getMaxIndex();
      if (this.currentIndex < maxIdx) {
        this.currentIndex++;
        this.update();
      }
    }

    buildDots() {
      if (!this.dotsContainer) return;
      this.dotsContainer.innerHTML = '';
      const maxIdx = this.getMaxIndex();
      const count = maxIdx + 1;

      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === this.currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          this.currentIndex = i;
          this.update();
        });
        this.dotsContainer.appendChild(dot);
      }
    }
  }

  // ==========================================================================
  // 10. RENDER CERTIFICATIONS CAROUSEL
  // ==========================================================================
  function renderCertifications() {
    const track = document.getElementById('certTrack');
    if (!track) return;
    track.innerHTML = '';

    certifications.forEach((cert) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.setAttribute('role', 'article');
      card.setAttribute('aria-label', cert.title);

      card.innerHTML = `
        <div class="cert-image-wrapper">
          <img src="${cert.logo}" alt="${cert.title} certificate" class="cert-zoom-img" loading="lazy" onerror="this.src='images/powerbi.png'">
        </div>
        <div class="cert-meta">
          <span class="cert-tag">${cert.tag}</span>
          <h4 class="cert-title">${cert.title}</h4>
          <span class="cert-view-hint"><i class="fa-regular fa-eye"></i> Click to view full certificate</span>
        </div>
      `;

      card.addEventListener('click', () => {
        openImageModal(cert.logo, `${cert.title} — ${cert.issuer} (${cert.date})`);
      });

      track.appendChild(card);
    });

    const certCarousel = new ResponsiveCarousel({
      viewportId: 'certCarouselViewport',
      trackId: 'certTrack',
      prevBtnId: 'certPrevBtn',
      nextBtnId: 'certNextBtn',
      dotsContainerId: 'certDots',
      itemsCount: certifications.length,
      gap: 24
    });

    certCarousel.buildDots();
    certCarousel.update();
  }

  // ==========================================================================
  // 11. RENDER FEATURED PROJECTS FLIP CAROUSEL
  // ==========================================================================
  function renderFeaturedCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    track.innerHTML = '';

    projects.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'carousel-card flip-card';
      card.setAttribute('role', 'article');
      card.setAttribute('aria-label', proj.title);

      card.innerHTML = `
        <div class="flip-inner">
          <div class="flip-front glass-card">
            <div class="flip-icon">${proj.icon}</div>
            <h4 class="flip-title">${proj.title}</h4>
            <p class="flip-desc">${proj.desc}</p>
            <div class="tool-list" style="margin-bottom: 1rem;">
              ${proj.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
            </div>
            <button class="btn btn-primary flip-trigger" aria-label="View architectural details of ${proj.title}">
              <i class="fa-solid fa-layer-group"></i> Architecture & Impact
            </button>
          </div>
          <div class="flip-back glass-card">
            <h4 style="font-size:1.15rem; font-weight:700; margin-bottom:0.75rem; color:var(--accent-ds);">Key Highlights</h4>
            <p class="flip-detail-text">${proj.detail}</p>
            <div style="display:flex; gap:8px; flex-direction:column; margin-top:auto;">
              ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:0.6rem 1rem; font-size:0.85rem;"><i class="fa-brands fa-github"></i> Repository / Live Link</a>` : ''}
              <button class="btn btn-primary flip-close" style="padding:0.6rem 1rem; font-size:0.85rem;"><i class="fa-solid fa-rotate-left"></i> Flip Back</button>
            </div>
          </div>
        </div>
      `;

      const triggerBtn = card.querySelector('.flip-trigger');
      const closeBtn = card.querySelector('.flip-close');

      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('flipped');
      });

      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('flipped');
      });

      track.appendChild(card);
    });

    const projectCarousel = new ResponsiveCarousel({
      viewportId: 'projectCarouselViewport',
      trackId: 'carouselTrack',
      prevBtnId: 'prevBtn',
      nextBtnId: 'nextBtn',
      dotsContainerId: 'projectDots',
      itemsCount: projects.length,
      gap: 24
    });

    projectCarousel.buildDots();
    projectCarousel.update();
  }

  // ==========================================================================
  // 12. RENDER FILTERABLE PROJECTS DIRECTORY
  // ==========================================================================
  function renderProjectGrid(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = (filter === 'all') 
      ? projects 
      : projects.filter(p => p.pillar === filter);

    filtered.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'glass-card project-grid-card';

      const pillarColor = (proj.pillar === 'fe') ? 'var(--accent-fe)' : (proj.pillar === 'bi' ? 'var(--accent-bi)' : 'var(--accent-ds)');
      const pillarLabel = (proj.pillar === 'fe') ? 'Front-End' : (proj.pillar === 'bi' ? 'BI & Data' : 'Data Science');

      card.innerHTML = `
        <div class="project-img-thumb" title="Click to enlarge preview">
          <img src="${proj.img}" alt="${proj.title}" loading="lazy" onerror="this.src='images/powerbi.png'">
          <span class="project-thumb-badge" style="border-left: 3px solid ${pillarColor};">
            ${proj.icon} ${pillarLabel}
          </span>
        </div>
        <div class="project-body">
          <h4>${proj.title}</h4>
          <p class="project-desc">${proj.desc}</p>
          <div class="tool-list" style="justify-content: flex-start; margin-bottom: 1rem;">
            ${proj.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                View Project <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>` : '<span style="font-size:0.8rem; color:var(--text-muted);">Confidential Enterprise Build</span>'
            }
          </div>
        </div>
      `;

      const thumb = card.querySelector('.project-img-thumb');
      thumb.addEventListener('click', () => {
        openImageModal(proj.img, `${proj.title} Preview`);
      });

      grid.appendChild(card);
    });
  }

  // Setup Category Filter Buttons
  const filterBar = document.getElementById('projectFilterBar');
  if (filterBar) {
    const filterBtns = filterBar.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        renderProjectGrid(btn.getAttribute('data-filter'));
      });
    });
  }

  // ==========================================================================
  // 13. ACCESSIBLE IMAGE LIGHTBOX MODAL
  // ==========================================================================
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openImageModal(imgSrc, caption = '') {
    if (!modal || !modalImg) return;
    modalImg.src = imgSrc;
    if (modalCaption) modalCaption.textContent = caption;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll
  }

  function closeImageModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeImageModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeImageModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeImageModal();
    }
  });

  // ==========================================================================
  // 14. RENDER INTERNSHIP TIMELINE
  // ==========================================================================
  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    const lineOverlay = document.getElementById('timelineLine');
    if (!container) return;

    container.innerHTML = '';
    if (lineOverlay) container.appendChild(lineOverlay);

    internships.forEach((intern) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';

      const dotColor = (intern.pillar === 'fe') ? 'var(--accent-fe)' : (intern.pillar === 'bi' ? 'var(--accent-bi)' : 'var(--accent-ds)');
      const pillarLabel = (intern.pillar === 'fe') ? 'Front-End Development' : (intern.pillar === 'bi' ? 'Data Analytics' : 'Data Science');

      item.innerHTML = `
        <div class="timeline-content glass-card">
          <span class="timeline-pillar-badge" style="background:${dotColor};">${pillarLabel}</span>
          <h4>${intern.role}</h4>
          <p class="timeline-company" style="color:${dotColor};">${intern.company}</p>
          <p class="timeline-date"><i class="fa-regular fa-calendar"></i> ${intern.duration}</p>
          <p class="timeline-desc">${intern.desc}</p>
        </div>
        <div class="timeline-dot" style="border-color:${dotColor};"></div>
      `;

      container.appendChild(item);
    });

    updateTimelineProgress();
  }

  // ==========================================================================
  // 15. RENDER WORKSHOPS & CONFERENCES
  // ==========================================================================
  function renderWorkshops() {
    const container = document.getElementById('workshopContainer');
    if (!container) return;
    container.innerHTML = '';

    workshops.forEach((ws) => {
      const card = document.createElement('div');
      card.className = 'glass-card workshop-card';

      card.innerHTML = `
        <span class="workshop-date-badge"><i class="fa-regular fa-calendar"></i> ${ws.date}</span>
        <h4>${ws.title}</h4>
        <p class="workshop-organizer"><i class="fa-solid fa-users"></i> ${ws.organizer}</p>
        <div class="workshop-takeaways">
          <strong style="display:block; margin-bottom:4px; color:var(--text-primary);">Key Learnings:</strong>
          ${ws.whatwelearnt}
        </div>
      `;

      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 16. DESKTOP 3D CARD TILT (LIGHTWEIGHT & JITTER-FREE)
  // ==========================================================================
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion) {
    document.querySelectorAll('.skill-card, .workshop-card, .stat-card').forEach(card => {
      let tiltFrame = null;

      card.addEventListener('mousemove', (e) => {
        if (tiltFrame) cancelAnimationFrame(tiltFrame);
        tiltFrame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5; // Subtle 5deg limit
          const rotateY = ((x - centerX) / centerX) * 5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
      });

      card.addEventListener('mouseleave', () => {
        if (tiltFrame) cancelAnimationFrame(tiltFrame);
        card.style.transform = '';
      });
    });
  }

  // ==========================================================================
  // 17. CONTACT FORM SUBMISSION FEEDBACK
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      }
    });
  }

  // ==========================================================================
  // INITIALIZE ALL COMPONENTS
  // ==========================================================================
  renderCertifications();
  renderFeaturedCarousel();
  renderProjectGrid();
  renderTimeline();
  renderWorkshops();

});
