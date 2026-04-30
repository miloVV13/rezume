// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
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
const savedLang = localStorage.getItem('lang') || 'ru';

if (savedLang === 'en') body.classList.add('lang-en');

langToggle.addEventListener('click', () => {
  body.classList.toggle('lang-en');
  localStorage.setItem('lang', body.classList.contains('lang-en') ? 'en' : 'ru');
});

// ===== Easter Egg: Photo Toggle =====
const mainPhoto = document.getElementById('mainPhoto');
let isEasterEgg = false;

if (mainPhoto) {
  const originalSrc = mainPhoto.src;
  const easterEggSrc = 'assets/smile.jpg'; // Замените на имя вашего второго фото

  mainPhoto.style.cursor = 'pointer';

  mainPhoto.addEventListener('click', () => {
    if (isEasterEgg) {
      mainPhoto.src = originalSrc;
      isEasterEgg = false;
    } else {
      mainPhoto.src = easterEggSrc;
      isEasterEgg = true;
    }
  });

  // Если второе фото не найдено, показываем подсказку
  mainPhoto.addEventListener('error', function() {
    if (isEasterEgg) {
      alert('📸 Добавьте фото "photo_fun.jpg" в папку assets/ для работы пасхалки!');
      this.src = originalSrc;
      isEasterEgg = false;
    }
  });
}