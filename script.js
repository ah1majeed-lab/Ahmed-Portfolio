/* ================================================================
   AHMED ABDULMAJEED — PORTFOLIO  |  script.js
   Light mode only. No theme toggle.
   ================================================================
   1.  Content data (EN / AR)
   2.  Language management
   3.  Navbar: sticky + active highlight + hamburger
   4.  Hero role animation (typewriter)
   5.  Scroll reveal (IntersectionObserver)
   6.  How I Work — draggable process cards
   7.  Init
   ================================================================ */


/* ================================================================
   1. CONTENT DATA
   ================================================================ */

const content = {
  en: {
    /* Navbar */
    "nav.home":     "Home",
    "nav.about":    "About",
    "nav.projects": "Projects",
    "nav.howIWork": "How I Work",
    "nav.whyHire":  "Why Hire Me",
    "nav.contact":  "Contact",
    "nav.cv":       "Download CV",

    /* Hero */
    "hero.eyebrow":   "UX/UI Designer · MIS Graduate",
    "hero.title":     "Ahmed Abdulmajeed",
    "hero.rolePrefix":"I am a",
    "hero.statement": "I design bilingual digital experiences that turn complex systems into clear, human-centered interfaces.",
    "hero.sub":       "With a background in Management Information Systems and hands-on UX/UI projects, I connect analytical thinking with visual design to build experiences that are usable, structured, and meaningful.",
    "hero.cta1":      "View My Work",
    "hero.cta2":      "Download CV",
    "hero.cta3":      "Contact Me",

    /* About */
    "about.label": "About Me",
    "about.title": "About Me",
    "about.body":  "I'm a UX/UI Designer with a Management Information Systems background. My strength is connecting business logic, systems thinking, and human-centered design. I enjoy turning messy problems into clear flows, structured interfaces, and experiences that feel simple for users.",
    "about.cta":   "Let's Connect",

    /* About floating chips */
    "about.chips.mis":            "MIS",
    "about.chips.sysAnalysis":    "System Analysis",
    "about.chips.uxResearch":     "UX Research",
    "about.chips.uiDesign":       "UI Design",
    "about.chips.designSystems":  "Design Systems",
    "about.chips.productThinking":"Product Thinking",

    /* Projects */
    "projects.label": "Selected Work",
    "projects.title": "Selected Work",
    "projects.desc":  "A collection of projects where I explored UX thinking, interface design, branding, design systems, and bilingual digital experiences.",
    "projects.cta":   "View Case Study →",

    "projects.hover.problem":  "Problem",
    "projects.hover.system":   "System",
    "projects.hover.solution": "Solution",

    "projects.fikr.category": "UX/UI Case Study",
    "projects.fikr.title":    "Fikr",
    "projects.fikr.desc":     "A platform concept that helps students track university admissions in one clear place instead of getting lost between multiple websites and deadlines.",

    "projects.syarah.category": "UX Case Study",
    "projects.syarah.title":    "Behind the Wheel of Trust — Syarah App",
    "projects.syarah.desc":     "A UX case study focused on improving trust in the used-car buying journey through car history, comparison, onboarding, and test-drive scheduling.",

    /* Rafiq — corrected spelling */
    "projects.rafiq.cta":      "Coming Soon",
    "projects.rafiq.category": "Brand & UI Design",
    "projects.rafiq.title":    "Rafiq",
    "projects.rafiq.desc":     "A friendly pet care brand and app concept designed around trust, warmth, and simple access to pet care services.",

    "projects.tokens.category": "Design System",
    "projects.tokens.title":    "Design Tokens System",
    "projects.tokens.desc":     "A design system exploration focused on variables, semantic tokens, typography, spacing, components, and multi-theme consistency.",

    /* How I Work */
    "ds.label":   "How I Work",
    "ds.title":   "How I Work",
    "ds.desc":    "I don't start with screens. I start by understanding the problem, the user, and the system behind the experience. Then I move from structure to interface, making sure the final design is clear, scalable, and easy to use.",
    "ds.hint":    "↕ Drag the cards into the right order",
    "ds.success": "This is how I turn ideas into clear digital experiences.",

    /* Why Hire Me */
    "why.label":     "Why Hire Me?",
    "why.title":     "Why Hire Me?",
    "why.statement": "Because I don't only design screens. I think through the system behind the screen.",

    "why.cards.systems.title": "Systems Thinking",
    "why.cards.systems.desc":  "I connect business goals, user needs, and product structure before designing the interface.",
    "why.cards.ux.title":      "UX/UI Execution",
    "why.cards.ux.desc":       "I move from research and flows to clean, usable, and polished interfaces.",
    "why.cards.visual.title":  "Clear Visual Thinking",
    "why.cards.visual.desc":   "I turn complex ideas into simple layouts, clear hierarchy, and smooth user experiences.",
    "why.cards.ds.title":      "Design System Awareness",
    "why.cards.ds.desc":       "I care about consistency, scalability, tokens, components, and documentation.",

    /* Skills */
    "skills.label": "What I Work With",
    "skills.title": "What I Work With",

    /* Contact */
    "contact.label":       "Get In Touch",
    "contact.title":       "Let's Build Thoughtful Digital Experiences",
    "contact.body":        "Whether it's a product, portfolio, design system, or digital platform, I'm interested in creating experiences that are clear, usable, and meaningful.",
    "contact.info":        "Open to UX/UI opportunities, freelance projects, collaborations, and meaningful digital product ideas.",
    "contact.btn.email":   "Email Me",
    "contact.btn.linkedin":"LinkedIn",
    "contact.btn.behance": "Behance",
    "contact.btn.cv":      "Download CV",

    /* Footer */
    "footer.copy": "Designed and developed by Ahmed Abdulmajeed. UX/UI Designer · MIS Graduate · Design Systems Explorer",
  },

  ar: {
    /* Navbar */
    "nav.home":     "الرئيسية",
    "nav.about":    "عنّي",
    "nav.projects": "الأعمال",
    "nav.howIWork": "طريقة عملي",
    "nav.whyHire":  "ليش تشتغل معي؟",
    "nav.contact":  "تواصل",
    "nav.cv":       "تحميل السيرة الذاتية",

    /* Hero */
    "hero.eyebrow":   "مصمم UX/UI · خريج نظم معلومات إدارية",
    "hero.title":     "أحمد عبدالمجيد",
    "hero.rolePrefix":"أنا",
    "hero.statement": "أصمم تجارب رقمية ثنائية اللغة تحوّل الأنظمة المعقدة إلى واجهات واضحة، بسيطة، ومتمحورة حول الإنسان.",
    "hero.sub":       "بخلفية في نظم المعلومات الإدارية وتجارب عملية في تصميم تجربة وواجهة المستخدم، أربط بين التفكير التحليلي والتصميم البصري لبناء تجارب منظمة، سهلة الاستخدام، وذات معنى.",
    "hero.cta1":      "عرض الأعمال",
    "hero.cta2":      "تحميل السيرة الذاتية",
    "hero.cta3":      "تواصل معي",

    /* About */
    "about.label": "عنّي",
    "about.title": "عنّي",
    "about.body":  "أنا مصمم تجربة وواجهة مستخدم بخلفية في نظم المعلومات الإدارية. قوتي تكمن في الربط بين منطق الأعمال، التفكير النظامي، والتصميم المتمحور حول الإنسان. أستمتع بتحويل المشاكل المعقدة إلى تدفقات واضحة، واجهات منظمة، وتجارب تبدو بسيطة للمستخدم.",
    "about.cta":   "تواصل معي",

    /* About floating chips */
    "about.chips.mis":            "نظم المعلومات",
    "about.chips.sysAnalysis":    "تحليل الأنظمة",
    "about.chips.uxResearch":     "بحث المستخدم",
    "about.chips.uiDesign":       "تصميم الواجهات",
    "about.chips.designSystems":  "أنظمة التصميم",
    "about.chips.productThinking":"التفكير بالمنتج",

    /* Projects */
    "projects.label": "أعمال مختارة",
    "projects.title": "أعمال مختارة",
    "projects.desc":  "مجموعة من المشاريع التي استكشفت فيها التفكير في تجربة المستخدم، تصميم الواجهات، الهوية البصرية، أنظمة التصميم، والتجارب الرقمية ثنائية اللغة.",
    "projects.cta":   "عرض الدراسة →",

    "projects.hover.problem":  "المشكلة",
    "projects.hover.system":   "النظام",
    "projects.hover.solution": "الحل",

    "projects.fikr.category": "دراسة حالة UX/UI",
    "projects.fikr.title":    "فكر",
    "projects.fikr.desc":     "منصة تساعد الطلاب على متابعة مواعيد القبول الجامعي في مكان واحد واضح بدل التشتت بين مواقع كثيرة ومواعيد غير واضحة.",

    "projects.syarah.category": "دراسة حالة UX",
    "projects.syarah.title":    "خلف عجلة القيادة — تطبيق سيارة",
    "projects.syarah.desc":     "دراسة تجربة مستخدم تركز على تحسين الثقة في رحلة شراء السيارات المستعملة من خلال تاريخ السيارة، المقارنة، التوجيه، وجدولة تجربة القيادة.",

    "projects.rafiq.cta":      "قريباً",
    "projects.rafiq.category": "هوية بصرية وتصميم واجهة",
    "projects.rafiq.title":    "رفيق",
    "projects.rafiq.desc":     "هوية وتطبيق لخدمات العناية بالحيوانات الأليفة، مبني حول الثقة، اللطف، وسهولة الوصول للخدمة.",

    "projects.tokens.category": "نظام تصميم",
    "projects.tokens.title":    "نظام التوكنز",
    "projects.tokens.desc":     "استكشاف لنظام تصميم يركز على المتغيرات، التوكنز الدلالية، التايبوغرافي، المسافات، المكونات، ودعم الثيمات المتعددة.",

    /* How I Work */
    "ds.label":   "طريقة عملي",
    "ds.title":   "طريقة عملي",
    "ds.desc":    "ما أبدأ من الشاشات مباشرة. أبدأ بفهم المشكلة، المستخدم، والنظام خلف التجربة. بعدها أنتقل من الهيكلة إلى الواجهة، بحيث يكون التصميم النهائي واضح، قابل للتوسع، وسهل الاستخدام.",
    "ds.hint":    "↕ رتّب البطاقات بالترتيب الصحيح",
    "ds.success": "كذا أحوّل الأفكار إلى تجارب رقمية واضحة.",

    /* Why Hire Me */
    "why.label":     "ليش تشتغل معي؟",
    "why.title":     "ليش تشتغل معي؟",
    "why.statement": "لأني ما أصمم شاشات فقط، أفكر في النظام الكامل خلف الشاشة.",

    "why.cards.systems.title": "التفكير النظامي",
    "why.cards.systems.desc":  "أربط بين أهداف العمل، احتياج المستخدم، وهيكلة المنتج قبل تصميم الواجهة.",
    "why.cards.ux.title":      "تنفيذ UX/UI",
    "why.cards.ux.desc":       "أنتقل من البحث والتدفقات إلى واجهات واضحة، قابلة للاستخدام، ومصقولة بصريًا.",
    "why.cards.visual.title":  "التفكير البصري الواضح",
    "why.cards.visual.desc":   "أحوّل الأفكار المعقدة إلى تخطيطات بسيطة، هرمية واضحة، وتجارب سلسة.",
    "why.cards.ds.title":      "الوعي بأنظمة التصميم",
    "why.cards.ds.desc":       "أهتم بالاتساق، القابلية للتوسع، التوكنز، المكونات، والتوثيق.",

    /* Skills */
    "skills.label": "الأدوات والمهارات",
    "skills.title": "الأدوات والمهارات",

    /* Contact */
    "contact.label":       "تواصل معي",
    "contact.title":       "خلّنا نبني تجارب رقمية أوضح وأذكى",
    "contact.body":        "سواء كان المنتج منصة، بورتفوليو، نظام تصميم، أو تجربة رقمية كاملة، يهمني بناء تجارب واضحة، قابلة للاستخدام، وذات معنى.",
    "contact.info":        "مهتم بفرص UX/UI، المشاريع الحرة، التعاون، والأفكار الرقمية اللي تصنع تجربة أوضح وأفضل.",
    "contact.btn.email":   "أرسل لي إيميل",
    "contact.btn.linkedin":"لينكدإن",
    "contact.btn.behance": "بيهانس",
    "contact.btn.cv":      "تحميل السيرة الذاتية",

    /* Footer */
    "footer.copy": "صُمم وطُوّر بواسطة أحمد عبدالمجيد. مصمم UX/UI · خريج نظم معلومات إدارية · مهتم بأنظمة التصميم",
  }
};

/* Hero role strings per language */
const roles = {
  en: ["UX/UI Designer", "MIS Graduate", "Design Systems Explorer", "Bilingual Experience Designer"],
  ar: ["مصمم UX/UI", "خريج نظم معلومات إدارية", "مهتم بأنظمة التصميم", "مصمم تجارب عربية وإنجليزية"]
};

/* How I Work — correct order + icons */
const processSteps = {
  en: [
    { key: "research",   label: "Research",   icon: "🔍" },
    { key: "structure",  label: "Structure",  icon: "🏗️" },
    { key: "design",     label: "Design",     icon: "🎨" },
    { key: "system",     label: "System",     icon: "⚙️" },
    { key: "experience", label: "Experience", icon: "✨" },
  ],
  ar: [
    { key: "research",   label: "البحث",    icon: "🔍" },
    { key: "structure",  label: "الهيكلة",  icon: "🏗️" },
    { key: "design",     label: "التصميم",  icon: "🎨" },
    { key: "system",     label: "النظام",   icon: "⚙️" },
    { key: "experience", label: "التجربة",  icon: "✨" },
  ]
};


/* ================================================================
   2. LANGUAGE MANAGEMENT
   ================================================================ */

const LANG_KEY = "ahmed-portfolio-lang";
let currentLang = "en";

function getStoredLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  /* Update all translated text nodes */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key  = el.getAttribute("data-i18n");
    const text = content[lang]?.[key];
    if (text !== undefined) el.textContent = text;
  });

  /* Language toggle active state */
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.val === lang);
  });

  /* Restart role animation */
  if (roleAnimator) roleAnimator.restart(lang);

  /* Re-render How I Work cards in correct language */
  buildProcessCards(lang);
}

function toggleLanguage() {
  applyLanguage(currentLang === "en" ? "ar" : "en");
}


/* ================================================================
   3. NAVBAR
   ================================================================ */

function initNavbar() {
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu= document.getElementById("mobileMenu");
  const navLinks  = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
    highlightActiveSection();
  }, { passive: true });

  /* Hamburger */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open", open);
      mobileMenu.setAttribute("aria-hidden", String(!open));
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll(".nav-link, .btn").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Section highlight */
  function highlightActiveSection() {
    let current = "";
    document.querySelectorAll("section[id]").forEach(sec => {
      if (sec.getBoundingClientRect().top <= 100) current = sec.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("active", href === current);
    });
  }

  /* Smooth scroll with navbar offset */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 70;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    });
  });
}


/* ================================================================
   4. HERO ROLE ANIMATION
   ================================================================ */

const roleAnimator = (() => {
  const el = document.getElementById("roleAnimated");
  if (!el) return { restart: () => {} };

  let timer = null, roleIdx = 0, charIdx = 0, deleting = false, lang = "en";

  const TYPE   = 60, DELETE = 35, HOLD = 2000, NEXT = 400;

  function tick() {
    const word = (roles[lang] || roles.en)[roleIdx % (roles[lang]?.length || 1)];
    if (!deleting) {
      el.textContent = word.substring(0, ++charIdx);
      if (charIdx === word.length) { deleting = true; timer = setTimeout(tick, HOLD); return; }
    } else {
      el.textContent = word.substring(0, --charIdx);
      if (charIdx === 0) { deleting = false; roleIdx++; timer = setTimeout(tick, NEXT); return; }
    }
    timer = setTimeout(tick, deleting ? DELETE : TYPE);
  }

  function restart(newLang) {
    clearTimeout(timer); lang = newLang;
    roleIdx = 0; charIdx = 0; deleting = false;
    el.textContent = "";
    timer = setTimeout(tick, 600);
  }

  return { restart };
})();


/* ================================================================
   5. SCROLL REVEAL
   ================================================================ */

function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal, .reveal--left, .reveal--right, .reveal-stagger")
      .forEach(el => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .reveal--left, .reveal--right, .reveal-stagger")
    .forEach(el => obs.observe(el));
}


/* ================================================================
   6. HOW I WORK — Draggable process cards
   ================================================================ */

let dragSrcIdx = null; /* index of card being dragged */

function buildProcessCards(lang) {
  const area    = document.getElementById("processDragArea");
  const success = document.getElementById("processSuccess");
  if (!area) return;

  /* Shuffle for initial display (but keep it deterministic — rotate by 2) */
  const steps = [...processSteps[lang]];
  const shuffled = [...steps.slice(2), ...steps.slice(0, 2)];

  area.innerHTML = "";
  success.hidden = true;

  shuffled.forEach((step, idx) => {
    const card = document.createElement("div");
    card.className = "process-card";
    card.draggable = true;
    card.dataset.key = step.key;
    card.innerHTML = `
      <div class="process-card-icon">${step.icon}</div>
      <div>${step.label}</div>
    `;

    /* Desktop drag events */
    card.addEventListener("dragstart", e => {
      dragSrcIdx = idx;
      card.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      document.querySelectorAll(".process-card").forEach(c => c.classList.remove("drag-target"));
    });
    card.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      card.classList.add("drag-target");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drag-target"));
    card.addEventListener("drop", e => {
      e.preventDefault();
      card.classList.remove("drag-target");
      if (dragSrcIdx === null || dragSrcIdx === idx) return;
      const cards = [...area.querySelectorAll(".process-card")];
      const srcCard = cards[dragSrcIdx];
      const tgtCard = cards[idx];
      /* Swap DOM positions */
      const afterTgt = tgtCard.nextSibling;
      if (afterTgt) {
        area.insertBefore(srcCard, afterTgt);
      } else {
        area.appendChild(srcCard);
      }
      area.insertBefore(tgtCard, area.querySelectorAll(".process-card")[dragSrcIdx] || null);
      dragSrcIdx = null;
      checkOrder(lang);
    });

    /* Touch drag — simple touch reorder */
    let touchStartY = 0;
    card.addEventListener("touchstart", e => { touchStartY = e.touches[0].clientY; }, { passive: true });
    card.addEventListener("touchend", e => {
      const dy = e.changedTouches[0].clientY - touchStartY;
      const cards = [...area.querySelectorAll(".process-card")];
      const myIdx = cards.indexOf(card);
      const targetIdx = dy > 0 ? myIdx + 1 : myIdx - 1;
      if (targetIdx >= 0 && targetIdx < cards.length) {
        const sibling = cards[targetIdx];
        if (dy > 0) area.insertBefore(sibling, card);
        else area.insertBefore(card, sibling);
        checkOrder(lang);
      }
    }, { passive: true });

    area.appendChild(card);
  });
}

function checkOrder(lang) {
  const area    = document.getElementById("processDragArea");
  const success = document.getElementById("processSuccess");
  const correct = processSteps[lang].map(s => s.key);
  const current = [...area.querySelectorAll(".process-card")].map(c => c.dataset.key);
  const isCorrect = correct.every((k, i) => k === current[i]);

  if (isCorrect) {
    area.querySelectorAll(".process-card").forEach(c => c.classList.add("solved"));
    success.hidden = false;
    /* Update success message text for current language */
    const successP = success.querySelector("p");
    if (successP) successP.textContent = content[lang]?.["ds.success"] || "";
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}


/* ================================================================
   7. INIT
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* Language */
  const initialLang = getStoredLang();
  applyLanguage(initialLang); /* also starts role animation + builds process cards */

  document.getElementById("langToggle")?.addEventListener("click", toggleLanguage);

  /* Navbar */
  initNavbar();

  /* Scroll reveal */
  initScrollReveal();

  /* Footer year */
  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
