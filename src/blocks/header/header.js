const handleHamburgerClick = () => {
  document.querySelector('.js-header__hamburger').classList.toggle('header__hamburger_active');
  if (document.querySelector('.js-header__wrapper').style.left === "0%") {
    document.querySelector('.js-header__wrapper').style.left = "-100%";
  } else {
    document.querySelector('.js-header__wrapper').style.left = "0%";
  }
};

if (document.querySelector('.js-header__hamburger')) {
  document.querySelector('.js-header__hamburger').addEventListener('click', handleHamburgerClick);
}
