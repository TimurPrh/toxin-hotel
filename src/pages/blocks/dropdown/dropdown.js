import * as $ from 'jquery';
import './dropdown.scss';

(function dropdown() {
    const counter = $('.dropdown__item-count');
    const dropdown = $('.dropdown');
    const dropdowGuests = $('.dropdown_guests');
    const dropdowRoom = $('.dropdown_room');

    dropdown.each((i, item) => {
        $(item).find('.dropdown__arrow').on('click', () => {
            $(item).find('.dropdown__list').slideToggle();
        });
    });

    function sumListItems() {
        dropdowGuests.each((i, item) => {
            let sum = 0;
            $(item).find('.dropdown__item-count').each((j, count) => {
                sum += parseInt($(count).html());
            });
            if (sum == 0) {
                $(item).find('.dropdown__input input').val('Сколько гостей');
            } else if (sum == 1) {
                $(item).find('.dropdown__input input').val(`${sum} гость`);
            } else if (sum < 5) {
                $(item).find('.dropdown__input input').val(`${sum} гостя`);
            } else if (sum >= 5) {
                $(item).find('.dropdown__input input').val(`${sum} гостей`);
            }

            if (sum > 0) {
                $(item).find('.dropdown__btns-reset button').html('очистить');
            } else {
                $(item).find('.dropdown__btns-reset button').html('');
            }
            $(item).find('.dropdown__btns-reset button').on('click', () => {
                $(item).find('.dropdown__item-count').each((j, count) => {
                    $(count).html('0');
                    $(count).prev().removeClass('dropdown__item-minus_active');
                    sumListItems();
                });
            });
        });
        dropdowRoom.each((i, item) => {
            let bedrooms = parseInt($(item).find('.dropdown__item-count').eq(0).html());
            let beds = parseInt($(item).find('.dropdown__item-count').eq(1).html());
            let bathrooms = parseInt($(item).find('.dropdown__item-count').eq(2).html());
            let inputString = '';
            let inputArray = [];

            let sum = 0;
            $(item).find('.dropdown__item-count').each((j, count) => {
                sum += parseInt($(count).html());
            });
            if (sum == 0) {
                $(item).find('.dropdown__input input').val('Сколько спален');
            } else {
                if (bedrooms == 1) {
                    inputArray.push(`${bedrooms} спальня`);
                } else if (bedrooms > 1 && bedrooms < 5) {
                    inputArray.push(`${bedrooms} спальни`);
                } else if (bedrooms >= 5) {
                    inputArray.push(`${bedrooms} спален`);
                }
    
                if (beds == 1) {
                    inputArray.push(`${beds} кровать`);
                } else if (beds > 1 && beds < 5) {
                    inputArray.push(`${beds} кровати`);
                } else if (beds >= 5) {
                    inputArray.push(`${beds} кроватей`);
                }
    
                if (bathrooms == 1) {
                    inputArray.push(`${bathrooms} ванная`);
                } else if (bathrooms > 1 && bathrooms < 5) {
                    inputArray.push(`${bathrooms} ванные`);
                } else if (bathrooms >= 5) {
                    inputArray.push(`${bathrooms} ванных`);
                }
                
                $(item).find('.dropdown__input input').val(inputArray.join(', ').concat('...'));
            }

            if (sum > 0) {
                $(item).find('.dropdown__btns-reset button').html('очистить');
            } else {
                $(item).find('.dropdown__btns-reset button').html('');
            }
            $(item).find('.dropdown__btns-reset button').on('click', () => {
                $(item).find('.dropdown__item-count').each((j, count) => {
                    $(count).html('0');
                    $(count).prev().removeClass('dropdown__item-minus_active');
                    sumListItems();
                });
            });
        });
    };
    sumListItems();

    $('.dropdown__item-plus').addClass('dropdown__item-plus_active');
    counter.each(i => {
        if (counter.eq(i).html() > 0) {
            $('.dropdown__item-minus').eq(i).addClass('dropdown__item-minus_active');
        }
    });

    $('.dropdown__item-plus').each((i, item) => {
        $(item).on('click', ()=> {
            $(item).prev().html(parseInt( $(item).prev().html() ) + 1);
            $(item).prev().prev().addClass('dropdown__item-minus_active');
            sumListItems();
        });
    });

    $('.dropdown__item-minus').each((i, item) => {
        $(item).on('click', ()=> {
            if ($(item).next().html() > 0) {
                $(item).next().html(parseInt( $(item).next().html() ) - 1);
            } 
            if ($(item).next().html() == 0) {
                $(item).removeClass('dropdown__item-minus_active');
            }
            sumListItems();
        });
    });
})();