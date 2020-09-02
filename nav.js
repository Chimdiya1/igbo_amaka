const hamburger = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const menunav = document.querySelector('.menu-nav');
const nav = document.querySelector('.nav');
const navitem = document.querySelectorAll('.menu-nav__item');

hamburger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  menunav.classList.toggle('open');
  navitem.forEach((item) => item.classList.toggle('open'));
});
