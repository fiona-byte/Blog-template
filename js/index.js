const hamburgerIcon = document.querySelector('.navigation__hamburger');
const closeIcon = document.querySelector('.navigation__close');
const navigationItem = document.querySelector('.navigation__container');

hamburgerIcon.addEventListener('click', () => {
  navigationItem.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  navigationItem.classList.remove('open');
});
