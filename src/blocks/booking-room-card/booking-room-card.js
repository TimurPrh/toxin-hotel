function bookingRoomCard() {
  const prices = document.querySelectorAll('.js-booking-room-card__item-price');
  const descriptions = document.querySelectorAll('.js-booking-room-card__item-description');
  const sumText = document.querySelector('.js-booking-room-card__sum-text');
  const sumNumber = document.querySelector('.js-booking-room-card__sum-number');
  const sumLine = document.querySelector('.js-booking-room-card__sum-line');

  let sum = 0;
  let discount = 0;
  let sumHigh;
  let sumLow;

  prices.forEach((price) => {
    sum += parseInt(price.innerHTML.replace(/&nbsp;/g, ''), 10);
  });

  descriptions.forEach((description) => {
    const discountIndex = description.innerHTML.indexOf('скидка');
    if (discountIndex !== -1) {
      const discountIndexEnd = description.innerHTML.indexOf('₽', discountIndex);
      discount += parseInt(description.innerHTML.slice(discountIndex + 7, discountIndexEnd).replace(/&nbsp;/g, ''), 10);
    }
  });

  if (discount < sum) {
    sum -= discount;
  }

  if (Math.trunc(sum / 1000) === 0) {
    sumHigh = '';
  } else {
    sumHigh = `${Math.trunc(sum / 1000)} `;
  }

  if (sum >= 1000) {
    sumLow = sum % 1000;
  } else {
    sumLow = sum;
  }

  if (sumHigh && sumLow === 0) {
    sumLow = '000';
  } else if (sumHigh && sumLow < 10) {
    sumLow = `00${sumLow}`;
  } else if (sumHigh && sumLow < 100) {
    sumLow = `0${sumLow}`;
  }

  sumNumber.innerHTML = `${sumHigh} ${sumLow}₽`;

  function setLineWidth() {
    sumLine.style.width = `${(sumNumber.offsetLeft + sumNumber.clientLeft - sumText.offsetLeft - sumText.clientLeft - sumText.offsetWidth)}px`;
  }

  setLineWidth();
  window.addEventListener("resize", setLineWidth);
  window.addEventListener("orientationchange", setLineWidth);
}

if (document.querySelector('.js-booking-room-card__item-price')) {
  window.addEventListener("load", bookingRoomCard);
}
