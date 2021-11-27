import '../button/button.js';
import './header.scss';

document.querySelector('.js-header__hamburger').addEventListener('click', (e) => {
    document.querySelector('.js-header__hamburger').classList.toggle('header__hamburger_active');
    if (document.querySelector('.js-header__wrapper').style.left == "0%") {
        document.querySelector('.js-header__wrapper').style.left = "-100%";
    } else {
        document.querySelector('.js-header__wrapper').style.left = "0%";
    }
});