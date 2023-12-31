let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('main-navigation--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header__toggle--closed')) {
    navToggle.classList.remove('header__toggle--closed');
    navToggle.classList.add('header__toggle--opened');
  } else {
    navToggle.classList.add('header__toggle--closed');
    navToggle.classList.remove('header__toggle--opened');
  }
});
