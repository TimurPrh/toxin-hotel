import 'jquery-mask-plugin';

$(document).ready(() => {
  $('.js-text-field__input-date').mask('00.00.0000');

  document.querySelectorAll('.js-text-field__input_with-arrow input').forEach((field) => {
    const handleFieldFocus = () => {
      $('.js-text-field__arrow').fadeIn();
    };
    const handleFieldBlur = () => {
      $('.js-text-field__arrow').fadeOut();
    };

    field.addEventListener('focus', handleFieldFocus);
    field.addEventListener('blur', handleFieldBlur);
  });
});
