function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-theme');
    if(themeToggle) themeToggle.textContent = '☀️';
    if(themeToggleMobile) themeToggleMobile.textContent = '☀️';
  } else {
    body.classList.remove('dark-theme');
    if(themeToggle) themeToggle.textContent = '🌙';
    if(themeToggleMobile) themeToggleMobile.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = !body.classList.contains('dark-theme');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
if(themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') setTheme(true);
else setTheme(false);
