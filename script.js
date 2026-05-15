
    // ========== THEME SWITCHER ==========
    const themes = [
      { name: "Light", bg1: "#f8fafc", bg2: "#e2e8f0", glass: "rgba(255,255,255,0.7)", border: "rgba(0,0,0,0.05)", shadow: "0 15px 35px rgba(0,0,0,0.08)", text: "#1e293b", text2: "#475569", a1: "#2563eb", a2: "#059669", a3: "#7c3aed", nav: "rgba(255,255,255,0.8)", particle: "rgba(124,58,237,0.4)", cursor: "#7c3aed", btnBg: "#7c3aed", btnText: "white", heroGrad: "linear-gradient(135deg, #2563eb, #7c3aed)" },
      { name: "Dark", bg1: "#0f172a", bg2: "#1e293b", glass: "rgba(15,23,42,0.7)", border: "rgba(255,255,255,0.1)", shadow: "0 15px 35px rgba(0,0,0,0.5)", text: "#f1f5f9", text2: "#94a3b8", a1: "#38bdf8", a2: "#34d399", a3: "#c084fc", nav: "rgba(15,23,42,0.8)", particle: "rgba(192,132,252,0.4)", cursor: "#c084fc", btnBg: "#c084fc", btnText: "#0f172a", heroGrad: "linear-gradient(135deg, #38bdf8, #c084fc)" },
      { name: "Sunset", bg1: "#1a1a2e", bg2: "#16213e", glass: "rgba(26,26,46,0.7)", border: "rgba(255,255,255,0.1)", shadow: "0 15px 35px rgba(0,0,0,0.5)", text: "#f0e6d3", text2: "#c5b3a6", a1: "#ff6b6b", a2: "#feca57", a3: "#ff9ff3", nav: "rgba(26,26,46,0.8)", particle: "rgba(255,159,243,0.4)", cursor: "#ff9ff3", btnBg: "#ff6b6b", btnText: "white", heroGrad: "linear-gradient(135deg, #ff6b6b, #ff9ff3)" },
      { name: "Ocean", bg1: "#0c4a6e", bg2: "#075985", glass: "rgba(12,74,110,0.7)", border: "rgba(255,255,255,0.15)", shadow: "0 15px 35px rgba(0,0,0,0.5)", text: "#e0f2fe", text2: "#7dd3fc", a1: "#fb923c", a2: "#22d3ee", a3: "#818cf8", nav: "rgba(12,74,110,0.8)", particle: "rgba(129,140,248,0.4)", cursor: "#818cf8", btnBg: "#22d3ee", btnText: "#0c4a6e", heroGrad: "linear-gradient(135deg, #fb923c, #818cf8)" },
      { name: "Forest", bg1: "#14532d", bg2: "#166534", glass: "rgba(20,83,45,0.7)", border: "rgba(255,255,255,0.15)", shadow: "0 15px 35px rgba(0,0,0,0.5)", text: "#dcfce7", text2: "#86efac", a1: "#facc15", a2: "#4ade80", a3: "#c084fc", nav: "rgba(20,83,45,0.8)", particle: "rgba(192,132,252,0.4)", cursor: "#c084fc", btnBg: "#4ade80", btnText: "#14532d", heroGrad: "linear-gradient(135deg, #facc15, #c084fc)" }
    ];

    let currentThemeIndex = 0;
    const root = document.documentElement;

    function applyTheme(theme) {
      root.style.setProperty('--bg1', theme.bg1);
      root.style.setProperty('--bg2', theme.bg2);
      root.style.setProperty('--bg-gradient', `linear-gradient(135deg, ${theme.bg1} 0%, ${theme.bg2} 100%)`);
      root.style.setProperty('--glass-bg', theme.glass);
      root.style.setProperty('--glass-border', theme.border);
      root.style.setProperty('--shadow', theme.shadow);
      root.style.setProperty('--text-primary', theme.text);
      root.style.setProperty('--text-secondary', theme.text2);
      root.style.setProperty('--accent1', theme.a1);
      root.style.setProperty('--accent2', theme.a2);
      root.style.setProperty('--accent3', theme.a3);
      root.style.setProperty('--nav-bg', theme.nav);
      root.style.setProperty('--particle-color', theme.particle);
      root.style.setProperty('--cursor-glow', theme.cursor);
      root.style.setProperty('--btn-primary-bg', theme.btnBg);
      root.style.setProperty('--btn-primary-text', theme.btnText);
      root.style.setProperty('--hero-heading-gradient', theme.heroGrad);
    }

    document.getElementById('themeToggle').addEventListener('click', () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      applyTheme(themes[currentThemeIndex]);
    });

    applyTheme(themes[0]); // default light

    // ========== FULL-PAGE PARTICLES ==========
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim()}`;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function initParticles() {
      particlesArray = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000); // density
      for (let i = 0; i < count; i++) particlesArray.push(new Particle());
    }
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    initParticles();
    animateParticles();

    // ========== MOUSE TRAIL ==========
    const cursorGlow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = (e.clientX - 15) + 'px';
      cursorGlow.style.top = (e.clientY - 15) + 'px';
    });

    // ========== TYPING LOOP ==========
    const typingEl = document.getElementById('typing-text');
    const lines = [
      "SELECT * FROM passion WHERE data = 'true';",
      "Turning raw data into actionable insights.",
      "Building interactive front-end experiences.",
      "Ready to dive deep into Data Science."
    ];
    let lineIdx = 0, charIdx = 0, deleting = false;
    function typeLoop() {
      const current = lines[lineIdx];
      if (deleting) {
        typingEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) { deleting = false; lineIdx = (lineIdx + 1) % lines.length; }
      } else {
        typingEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) deleting = true;
      }
      setTimeout(typeLoop, deleting ? 40 : 80);
    }
    window.addEventListener('load', () => setTimeout(typeLoop, 600));

    // ========== SCROLL REVEAL ==========
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    reveals.forEach(el => revealObserver.observe(el));

    // ========== NAV ACTIVE LINK ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 100) current = section.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
      });
    });

    // ========== COUNT-UP STATS ==========
    function animateCountUp(el, target) {
      const duration = 2000, startTime = performance.now();
      function update(now) {
        const elapsed = now - startTime, progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + '+';
        if (progress < 1) requestAnimationFrame(update); else el.textContent = target + '+';
      }
      requestAnimationFrame(update);
    }
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-number').forEach(stat => {
            if (stat.textContent === '0') animateCountUp(stat, parseInt(stat.getAttribute('data-target')));
          });
        }
      });
    }, { threshold: 0.5 });
    const aboutSec = document.querySelector('#about');
    if (aboutSec) statsObserver.observe(aboutSec);

    // ========== TIMELINE DRAW ==========
    const timelineLine = document.getElementById('timelineLine');
    function updateTimeline() {
      const section = document.getElementById('experience');
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (rect.height + windowH)));
      timelineLine.style.height = (progress * 100) + '%';
    }
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);

    // ========== DATA ARRAYS ==========
    const certifications = [
      { id:1, title:"Microsoft Certified: Power BI Data Analyst", issuer:"Microsoft", date:"2024", pillar:"bi", logo:"📊" },
      { id:2, title:"Google Data Analytics Certificate", issuer:"Google", date:"2023", pillar:"bi", logo:"🔍" },
      { id:3, title:"AWS ML Specialty", issuer:"AWS", date:"2024", pillar:"ds", logo:"☁️" },
      { id:4, title:"Meta Front-End Developer", issuer:"Meta", date:"2023", pillar:"fe", logo:"💻" },
      { id:5, title:"Python for Data Science", issuer:"Coursera", date:"2022", pillar:"ds", logo:"🐍" },
      { id:6, title:"Responsive Web Design", issuer:"freeCodeCamp", date:"2022", pillar:"fe", logo:"🎨" }
    ];

    const projects = [
      { id:1, title:"Sales Dashboard", pillar:"bi", tools:["Power BI","SQL"], desc:"Interactive KPI dashboard.", detail:"Built multi-page Power BI report with drill-through. Reduced manual reporting by 70%.", img:"📈" },
      { id:2, title:"Portfolio Website", pillar:"fe", tools:["HTML","CSS","JS"], desc:"Carousel, particles, flip cards.", detail:"Custom interactive portfolio with theme switcher and full-page animations.", img:"🎨" },
      { id:3, title:"Churn Predictor", pillar:"ds", tools:["Python","Scikit-learn"], desc:"89% accuracy ML model.", detail:"EDA, feature engineering, gradient boosting, deployed via Streamlit.", img:"🤖" },
      { id:4, title:"Excel Automated Reports", pillar:"bi", tools:["Excel","VBA"], desc:"Macros & Power Query.", detail:"Automated monthly reporting, reduced manual work by 80%.", img:"📋", comingSoon:true }
    ];

    const internships = [
      { role:"Data Analyst Intern", company:"DataSphere Analytics", duration:"Jun-Sep 2024", desc:"Created Power BI dashboards and SQL reports.", pillar:"bi" },
      { role:"Front-End Dev Intern", company:"WebCraft Studio", duration:"Jan-May 2024", desc:"Developed responsive UI components.", pillar:"fe" },
      { role:"ML Research Assistant", company:"University AI Lab", duration:"Summer 2023", desc:"Data preprocessing for NLP project.", pillar:"ds" }
    ];

    const workshops = [
      { title:"Advanced SQL for Data Analysts", organizer:"DataCamp Live", date:"2024", skills:"SQL, Window Functions" },
      { title:"Intro to Machine Learning", organizer:"Local Python Meetup", date:"2023", skills:"Python, Scikit-learn" },
      { title:"Building Dashboards with Power BI", organizer:"Microsoft Virtual Event", date:"2023", skills:"Power BI, DAX" }
    ];

    // ========== RENDER CERTIFICATIONS ==========
    function renderCerts(filter = 'all') {
      const container = document.getElementById('certContainer');
      container.innerHTML = '';
      const filtered = filter === 'all' ? certifications : certifications.filter(c => c.pillar === filter);
      filtered.forEach(cert => {
        const div = document.createElement('div');
        div.className = 'glass-card';
        div.innerHTML = `
          <div style="font-size:2rem;">${cert.logo}</div>
          <div style="font-weight:600; text-transform:uppercase; font-size:0.8rem; color:var(--text-secondary);">${cert.issuer}</div>
          <div style="font-weight:600; margin:0.4rem 0;">${cert.title}</div>
          <div style="font-size:0.9rem; color:var(--text-secondary);">${cert.date}</div>
          <span style="display:inline-block; font-size:0.7rem; padding:0.15rem 0.6rem; border-radius:12px; margin-top:0.5rem; background:var(--accent3); color:white;">${cert.pillar}</span>
        `;
        container.appendChild(div);
      });
    }

    // ========== CAROUSEL ==========
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let carouselIdx = 0;

    function buildCarousel() {
      track.innerHTML = '';
      projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'carousel-card flip-card';
        card.innerHTML = `
          <div class="flip-inner">
            <div class="flip-front glass-card" style="text-align:center;">
              <div style="font-size:3rem;">${proj.img}</div>
              <h4>${proj.title}</h4>
              <p style="color:var(--text-secondary);">${proj.desc}</p>
              <button class="flip-trigger btn btn-primary" style="margin-top:1rem;">Details</button>
            </div>
            <div class="flip-back glass-card" style="text-align:center;">
              <p>${proj.detail}</p>
              <button class="flip-close btn btn-outline" style="margin-top:1rem;">Back</button>
            </div>
          </div>
        `;
        card.querySelector('.flip-trigger').addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.add('flipped');
        });
        card.querySelector('.flip-close').addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.remove('flipped');
        });
        track.appendChild(card);
      });
      updateCarousel();
    }

    function updateCarousel() {
      const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 32 : 332;
      track.style.transform = `translateX(-${carouselIdx * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => { if (carouselIdx > 0) { carouselIdx--; updateCarousel(); } });
    nextBtn.addEventListener('click', () => { if (carouselIdx < projects.length - 1) { carouselIdx++; updateCarousel(); } });

    // swipe support
    let touchStart = 0;
    track.addEventListener('touchstart', (e) => { touchStart = e.touches[0].clientX; });
    track.addEventListener('touchend', (e) => {
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && carouselIdx < projects.length - 1) carouselIdx++;
        else if (diff < 0 && carouselIdx > 0) carouselIdx--;
        updateCarousel();
      }
    });

    buildCarousel();

    // ========== PROJECT GRID ==========
    function renderProjectGrid(filter = 'all') {
      const grid = document.getElementById('projectsGrid');
      grid.innerHTML = '';
      const filtered = filter === 'all' ? projects : projects.filter(p => p.pillar === filter);
      filtered.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `
          <div style="font-size:3rem; text-align:center;">${proj.img}</div>
          <h4>${proj.title} ${proj.comingSoon ? '<small>(Soon)</small>' : ''}</h4>
          <p style="color:var(--text-secondary);">${proj.desc}</p>
          <div class="tool-list" style="justify-content:flex-start;">${proj.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}</div>
        `;
        grid.appendChild(card);
      });
    }

    // ========== RENDER INTERNSHIPS ==========
    function renderInternships() {
      const container = document.getElementById('timelineContainer');
      const lineDiv = document.getElementById('timelineLine');
      container.innerHTML = '';
      container.appendChild(lineDiv);
      internships.forEach(intern => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        const dotColor = intern.pillar === 'fe' ? 'var(--accent1)' : (intern.pillar === 'bi' ? 'var(--accent2)' : 'var(--accent3)');
        item.innerHTML = `
          <div class="timeline-content glass-card">
            <span style="display:inline-block; font-size:0.7rem; padding:0.15rem 0.6rem; border-radius:12px; margin-bottom:0.5rem; background:${dotColor}; color:white;">${intern.pillar.toUpperCase()}</span>
            <h4>${intern.role}</h4>
            <p style="color:${dotColor}; font-weight:600;">${intern.company}</p>
            <p style="font-size:0.9rem; color:var(--text-secondary);">${intern.duration}</p>
            <p>${intern.desc}</p>
          </div>
          <div class="timeline-dot" style="border-color:${dotColor};"></div>
        `;
        container.appendChild(item);
      });
    }

    // ========== RENDER WORKSHOPS ==========
    function renderWorkshops() {
      const container = document.getElementById('workshopContainer');
      container.innerHTML = '';
      workshops.forEach(ws => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `
          <h4>${ws.title}</h4>
          <p style="font-weight:600; color:var(--accent2);">${ws.organizer}</p>
          <p style="font-size:0.9rem; color:var(--text-secondary);">${ws.date}</p>
          <p><strong>Skills:</strong> ${ws.skills}</p>
        `;
        container.appendChild(card);
      });
    }

    // ========== FILTER SETUP ==========
    function setupFilter(barId, renderFunc) {
      document.querySelectorAll(`#${barId} .filter-btn`).forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll(`#${barId} .filter-btn`).forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          renderFunc(this.getAttribute('data-filter'));
        });
      });
    }

    renderCerts();
    setupFilter('certFilterBar', renderCerts);
    renderProjectGrid();
    setupFilter('projectFilterBar', renderProjectGrid);
    renderInternships();
    renderWorkshops();

    // ========== CARD TILT ==========
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const centerX = rect.width / 2, centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15, rotateY = (centerX - x) / 15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // smooth scroll nav
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
 