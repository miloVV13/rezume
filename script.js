// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Language Toggle =====
const langToggle = document.getElementById('langToggle');
const body = document.body;

// Load saved language
const savedLang = localStorage.getItem('lang') || 'ru';
if (savedLang === 'en') body.classList.add('lang-en');

langToggle.addEventListener('click', () => {
  body.classList.toggle('lang-en');
  const newLang = body.classList.contains('lang-en') ? 'en' : 'ru';
  localStorage.setItem('lang', newLang);
});