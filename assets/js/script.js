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
