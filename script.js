// script.js — Toggle tema
const root = document.documentElement;
const themeBtn = document.getElementById('btnToggle'); // botão no HTML

// Inicializa conforme localStorage ou preferência do sistema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark');
} else {
  root.classList.remove('dark');
}
updateThemeIcon();

function updateThemeIcon() {
  if (!themeBtn) return;
  themeBtn.textContent = root.classList.contains('dark') ? '🌙' : '☀️';
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcon();
  });
}
```