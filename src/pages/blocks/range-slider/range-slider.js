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
    
    let beginHigh,
        beginLow,
        endHigh,
        endLow;
    
    if (Math.trunc(begin/1000) == 0) {
        beginHigh = '';
    } else {
        beginHigh = `${Math.trunc(begin/1000)} `;
    }
    if (begin%1000 == 0) {
        beginLow = '000';
    } else {
        beginLow = begin%1000;
    }

    if (Math.trunc(end/1000) == 0) {
        endHigh = '';
    } else {
        endHigh = `${Math.trunc(end/1000)} `;
    }
    if (end%1000 == 0) {
        endLow = '000';
    } else {
        endLow = end%1000;
    }

    result.innerHTML = `${beginHigh}${beginLow}₽ - ${endHigh}${endLow}₽`;
}

renderRangeBg();