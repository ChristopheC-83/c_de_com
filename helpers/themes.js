// theme.js
const themes = ['blue', 'green', 'red', 'yellow'];

function applyRandomTheme() {
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  document.documentElement.setAttribute('data-theme', randomTheme);
}

// Appliquer un thème au hasard lors du chargement de la page
window.addEventListener('load', applyRandomTheme);

