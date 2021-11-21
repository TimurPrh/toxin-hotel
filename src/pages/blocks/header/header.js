import '../button/button.js';
import './header.scss';

document.querySelector('.header__hamburger').addEventListener('click', (e) => {
    document.querySelector('.header__hamburger').classList.toggle('header__hamburger_active');
    if (document.querySelector('.header__wrapper').style.left == "0%") {
        document.querySelector('.header__wrapper').style.left = "-100%";
    } else {
        document.querySelector('.header__wrapper').style.left = "0%";
    }
});