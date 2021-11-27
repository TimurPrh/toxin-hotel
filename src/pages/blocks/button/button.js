import './button.scss';
const wideButton = document.querySelectorAll('.js-button_type_wide');
const invertButton = document.querySelectorAll('.js-button_type_invert');
const wideButtonArrow = document.querySelectorAll('.js-button__wrapper .js-button__arrow');
wideButtonArrow.forEach(arrow => {
    arrow.addEventListener('mouseover', (e) => {
        arrow.previousElementSibling.style.opacity = 0.5;
    });
});
wideButtonArrow.forEach(arrow => {
    arrow.addEventListener('mouseleave', (e) => {
        arrow.previousElementSibling.style.opacity = 1;
    });
});
wideButton.forEach(wide => {
    wide.addEventListener('mouseover', () => {
        wide.style.opacity = 0.5;
    });
});
wideButton.forEach(wide => {
    wide.addEventListener('mouseleave', () => {
        wide.style.opacity = 1;
    });
});

invertButton.forEach(invert => {
    invert.addEventListener('mouseover', () => {
        invert.closest('.button__wrapper-invert').classList.add('button__wrapper-invert_hover');
    });
});
invertButton.forEach(invert => {
    invert.addEventListener('mouseleave', () => {
        invert.closest('.button__wrapper-invert').classList.remove('button__wrapper-invert_hover');
    });
});