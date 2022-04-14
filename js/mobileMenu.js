const body = document.querySelector('body');
const openMenu = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('#mobile-nav');
const closeMenu = document.querySelector('.close-mobile-nav');

const openNavMenu = () => {
  body.classList.add('overflow-hidden');
  mobileMenu.classList.add('flex');
  mobileMenu.classList.remove('hidden');
};

const closeNavMenu = () => {
  body.classList.remove('overflow-hidden');
  mobileMenu.classList.remove('flex');
  mobileMenu.classList.add('hidden');
};

openMenu.addEventListener('click', openNavMenu);

closeMenu.addEventListener('click', closeNavMenu);
