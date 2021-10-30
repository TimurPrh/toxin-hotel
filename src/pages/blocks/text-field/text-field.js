import * as $ from 'jquery';
import mask from 'jquery-mask-plugin';
import './text-field.scss';
$(document).ready(function(){
    

    $('.text-field__input-date').mask('00.00.0000');


    // $('.text-field__input_with-arrow input').focus( () => {
    //     $('.text-field__arrow').fadeIn();
    // });
    // $('.text-field__input_with-arrow input').blur( () => {
    //     $('.text-field__arrow').fadeOut();
    // });

    document.querySelector('.text-field__input_with-arrow input').addEventListener('focus', () => {
        $('.text-field__arrow').fadeIn();
    });
    document.querySelector('.text-field__input_with-arrow input').addEventListener('blur', () => {
        $('.text-field__arrow').fadeOut();
    });
});