import * as $ from 'jquery';
import 'jquery-mask-plugin';
import './text-field.scss';
$(document).ready(function(){
    $('.text-field__input-date').mask('00.00.0000');

    document.querySelector('.text-field__input_with-arrow input').addEventListener('focus', () => {
        $('.text-field__arrow').fadeIn();
    });
    document.querySelector('.text-field__input_with-arrow input').addEventListener('blur', () => {
        $('.text-field__arrow').fadeOut();
    });
});