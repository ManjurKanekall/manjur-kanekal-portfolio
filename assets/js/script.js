'use strict';

/* PAGE NAV */
const links = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.page;
    pages.forEach(p => p.classList.toggle('active', p.dataset.page === target));
    links.forEach(l => l.classList.toggle('active', l === link));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* TYPEWRITER */
const text = "Manjur";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text[i++];
    setTimeout(typeWriter, 120);
  }
}
window.onload = typeWriter;

/* REVEAL */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('active'));
});
reveals.forEach(r => revealObs.observe(r));

/* SKILLS */
document.querySelectorAll('.skill-progress-fill').forEach(bar => {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      bar.style.width = bar.dataset.skill + '%';
    }
  }).observe(bar);
});

/* CURSOR */
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', e => {
  dot.style.left = ring.style.left = e.clientX + 'px';
  dot.style.top = ring.style.top = e.clientY + 'px';
});

/* DARK MODE */
const toggle = document.querySelector('.theme-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('light');
  localStorage.theme = document.body.classList.contains('light') ? 'light' : 'dark';
};

if (localStorage.theme === 'light') document.body.classList.add('light');
/* ============================= */
/* NEON CURSOR FOLLOW */
/* ============================= */

const neonCursor = document.querySelector(".neon-cursor");

window.addEventListener("mousemove", e => {
  neonCursor.style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;
});
/* ============================= */
/* PARTICLE BACKGROUND */
/* ============================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];
const PARTICLE_COUNT = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 2 + 1;
    this.dx = Math.random() * 0.5;
    this.dy = Math.random() * 0.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,215,0,0.5)";
    ctx.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > canvas.width) this.x = 0;
    if (this.y > canvas.height) this.y = 0;
    this.draw();
  }
}

particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animateParticles);
}
animateParticles();
