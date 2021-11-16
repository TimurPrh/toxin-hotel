import * as $ from 'jquery';
import 'jquery-mask-plugin';
import './text-field.scss';
$(document).ready(function(){
    $('.text-field__input-date').mask('00.00.0000');

    document.querySelectorAll('.text-field__input_with-arrow input').forEach(field => {
        field.addEventListener('focus', () => {
            $('.text-field__arrow').fadeIn();
        });
    }); 
    document.querySelectorAll('.text-field__input_with-arrow input').forEach(field => {
        field.addEventListener('blur', () => {
            $('.text-field__arrow').fadeOut();
        });
    });
});