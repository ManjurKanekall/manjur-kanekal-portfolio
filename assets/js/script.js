'use strict';

/* ============================= */
/* TOGGLE HELPER */
/* ============================= */
const elementToggleFunc = elem => elem.classList.toggle("active");

/* ============================= */
/* SIDEBAR TOGGLE */
/* ============================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

/* ============================= */
/* TESTIMONIAL MODAL (SAFE KEEP) */
/* ============================= */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer?.classList.toggle("active");
  overlay?.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
overlay?.addEventListener("click", testimonialsModalFunc);

/* ============================= */
/* PAGE NAVIGATION (✅ SINGLE SOURCE) */
/* ============================= */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.dataset.page;

    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    navigationLinks.forEach(nav => {
      nav.classList.toggle("active", nav === link);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ============================= */
/* HERO RE-ANIMATION ON ABOUT */
/* ============================= */
document.querySelectorAll('[data-nav-link]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.page === 'about') {
      document.querySelectorAll('.animate-left, .animate-right').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // force reflow
        el.style.animation = '';
      });
    }
  });
});

/* ============================= */
/* SCROLL REVEAL */
/* ============================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ============================= */
/* TIMELINE STAGGER */
/* ============================= */
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => item.classList.add("active"), index * 200);
      });
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => timelineObserver.observe(item));

/* ============================= */
/* TYPEWRITER EFFECT */
/* ============================= */
const text = "Manjur";
const speed = 120;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);
