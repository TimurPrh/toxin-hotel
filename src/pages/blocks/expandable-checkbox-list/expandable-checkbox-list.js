import * as $ from 'jquery';
import './expandable-checkbox-list.scss';

const dropdown = $('.expandable-checkbox-list');

dropdown.each((i, item) => {
    $(item).find('.expandable-checkbox-list__arrow').on('click', () => {
        $(item).find('.expandable-checkbox-list__arrow-line').toggleClass('expandable-checkbox-list__arrow-line_active');
        $(item).find('.expandable-checkbox-list__list').slideToggle();
    });
});