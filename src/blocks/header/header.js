import '../button/button';
import './header.scss';

const handleHamburgerClick = () => {
    document.querySelector('.js-header__hamburger').classList.toggle('header__hamburger_active');
    if (document.querySelector('.js-header__wrapper').style.left === "0%") {
        document.querySelector('.js-header__wrapper').style.left = "-100%";
    } else {
        document.querySelector('.js-header__wrapper').style.left = "0%";
    }
};

document.querySelector('.js-header__hamburger').addEventListener('click', handleHamburgerClick);
