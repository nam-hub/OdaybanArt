document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav');
  const overlay = document.getElementById('overlay');

  if (!menuToggle || !navMenu || !overlay) {
    console.error('Thiếu phần tử cần thiết:', { menuToggle, navMenu, overlay });
    return;
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});