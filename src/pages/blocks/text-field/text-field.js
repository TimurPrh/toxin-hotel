import * as $ from 'jquery';
import 'jquery-mask-plugin';
import './text-field.scss';
$(document).ready(function(){
    $('.js-text-field__input-date').mask('00.00.0000');

    document.querySelectorAll('.js-text-field__input_with-arrow input').forEach(field => {
        field.addEventListener('focus', () => {
            $('.js-text-field__arrow').fadeIn();
        });
    }); 
    document.querySelectorAll('.js-text-field__input_with-arrow input').forEach(field => {
        field.addEventListener('blur', () => {
            $('.js-text-field__arrow').fadeOut();
        });
    });
});