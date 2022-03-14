const wideButton = document.querySelectorAll('.js-button_type_wide');
const invertButton = document.querySelectorAll('.js-button_type_invert');
const wideButtonArrow = document.querySelectorAll('.js-button__wrapper .js-button__arrow');
wideButtonArrow.forEach((arrow) => {
  const arrowTemp = arrow;
  const handleMouseOver = () => {
    arrowTemp.previousElementSibling.style.opacity = 0.5;
  };
  const handleMouseLeave = () => {
    arrowTemp.previousElementSibling.style.opacity = 1;
  };

  arrow.addEventListener('mouseover', handleMouseOver);
  arrow.addEventListener('mouseleave', handleMouseLeave);
});
wideButton.forEach((wide) => {
  const wideTemp = wide;
  const handleMouseOver = () => {
    wideTemp.style.opacity = 0.5;
  };
  const handleMouseLeave = () => {
    wideTemp.style.opacity = 1;
  };

  wide.addEventListener('mouseover', handleMouseOver);
  wide.addEventListener('mouseleave', handleMouseLeave);
});

invertButton.forEach((invert) => {
  const invertTemp = invert;
  const handleMouseOver = () => {
    invertTemp.closest('.button__wrapper-invert').classList.add('button__wrapper-invert_hover');
  };
  const handleMouseLeave = () => {
    invertTemp.closest('.button__wrapper-invert').classList.remove('button__wrapper-invert_hover');
  };
  invert.addEventListener('mouseover', handleMouseOver);

  invert.addEventListener('mouseleave', handleMouseLeave);
});
