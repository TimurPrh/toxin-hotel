import './range-slider.scss';

let oldBegin;
let oldEnd;

document.querySelector('.range-slider').addEventListener('input', () => renderRangeBg());

function renderRangeBg() {
    const begin = document.querySelector('#a').value;
    const end = document.querySelector('#b').value;
    const result = document.querySelector('.range-slider__result');
    const rangeBg = document.querySelector('.range-slider__range-bg');
    const dif = end - begin;

    rangeBg.style.marginLeft = `${begin / 160 - 6.25}%`;
    rangeBg.style.width = `${dif / 160 + 6.25}%`;

    result.innerHTML = `${begin}₽ - ${end}₽`;
}

renderRangeBg();