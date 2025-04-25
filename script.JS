function toggleMenu() {
  const menu = document.querySelector('nav.menu');
  menu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.animation-box');
  box.style.opacity = '1';
});