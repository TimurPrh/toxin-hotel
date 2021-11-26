import '../dropdown/dropdown.js';
import '../date-dropdown/date-dropdown.js';
import '../button/button.js';
import './booking-room-card.scss';

window.addEventListener("load", function(event) {
    (function bookingRoomCard() {
        const prices = document.querySelectorAll('.booking-room-card__item-price');
        const descriptions = document.querySelectorAll('.booking-room-card__item-desc');
        const sumText = document.querySelector('.booking-room-card__sum-text');
        const sumNumber = document.querySelector('.booking-room-card__sum-number');
        const sumLine = document.querySelector('.booking-room-card__sum-line');
    
        let sum = 0,
            discount = 0,
            sumHigh,
            sumLow;
    
        prices.forEach(price => {
            sum += parseInt(price.innerHTML.replace(/&nbsp;/g, ''));
        });
    
        descriptions.forEach(desc => {
            const discountIndex = desc.innerHTML.indexOf('скидка');
            if (discountIndex != -1) {
                const discountIndexEnd = desc.innerHTML.indexOf('₽', discountIndex);
                discount += parseInt(desc.innerHTML.slice(discountIndex + 7, discountIndexEnd).replace(/&nbsp;/g, ''));
            }  
        });
    
        if (discount < sum) {
            sum = sum - discount;
        }
    
        if (Math.trunc(sum/1000) == 0) {
            sumHigh = '';
        } else {
            sumHigh = `${Math.trunc(sum/1000)} `;
        }
    
        if (sum >= 1000) {
            sumLow = sum%1000;
        } else {
            sumLow = sum;
        }
    
        if (sumHigh && sumLow == 0) {
            sumLow = '000';
        } else if (sumHigh && sumLow < 10) {
            sumLow = `00${sumLow}`;
        } else if (sumHigh && sumLow < 100) {
            sumLow = `0${sumLow}`;
        }
    
        sumNumber.innerHTML = `${sumHigh} ${sumLow}₽`;
    
        setLineWidth();
        function setLineWidth() {
            sumLine.style.width = `${(sumNumber.offsetLeft + sumNumber.clientLeft - sumText.offsetLeft - sumText.clientLeft - sumText.offsetWidth)}px`;
        }
        window.addEventListener("resize", () => setLineWidth());
        window.addEventListener("orientationchange", () => setLineWidth());
    })();
});

