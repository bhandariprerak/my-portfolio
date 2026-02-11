const roles = [
  "Graduate Student Developer at NCSU Expertiza",
  "Software Engineer with high-scale backend experience",
  "Builder of distributed APIs and AI-enabled products"
];

const roleEl = document.getElementById("role-rotator");
let roleIdx = 0;

function rotateRole() {
  if (!roleEl) {
    return;
  }

  roleEl.style.opacity = "0";
  setTimeout(() => {
    roleIdx = (roleIdx + 1) % roles.length;
    roleEl.textContent = roles[roleIdx];
    roleEl.style.opacity = "1";
  }, 220);
}

setInterval(rotateRole, 2800);

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealEls.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
  revealObserver.observe(el);
});

const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    threshold: 0.35,
    rootMargin: "-20% 0px -55% 0px"
  }
);

sections.forEach((section) => navObserver.observe(section));

const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const countEls = document.querySelectorAll(".count");
let counted = false;

function animateCounter(el) {
  const raw = el.dataset.count || "0";
  const target = Number.parseFloat(raw);
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = target * progress;

    if (Number.isInteger(target)) {
      el.textContent = Math.floor(value).toLocaleString("en-US");
    } else {
      el.textContent = value.toFixed(1);
    }

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = Number.isInteger(target) ? target.toLocaleString("en-US") : target.toFixed(1);
    }
  }

  requestAnimationFrame(frame);
}

const impactSection = document.getElementById("impact");
if (impactSection) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          countEls.forEach((el) => animateCounter(el));
          countObserver.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  countObserver.observe(impactSection);
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
