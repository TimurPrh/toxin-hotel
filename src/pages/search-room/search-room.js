import * as $ from 'jquery';
import '../blocks/header/header.js';
import '../blocks/footer/footer.js';
import '../blocks/dropdown/dropdown.js';
import '../blocks/date-dropdown/date-dropdown.js';
import '../blocks/range-slider/range-slider.js';
import '../blocks/input-button/input-button.js';
import '../blocks/rich-checkbox-buttons/rich-checkbox-buttons.js';
import '../blocks/expandable-checkbox-list/expandable-checkbox-list.js';
import '../blocks/room-card/room-card.js';
import '../blocks/pagination/pagination.js';
import './search-room.scss';


document.querySelector('.js-search-room__filter-symbols-reset').addEventListener('click', toggleContent);
document.querySelector('.js-search-room__filter-symbols-apply').addEventListener('click', toggleContent);
document.querySelector('.js-search-room__result-filter').addEventListener('click', toggleContent);

function toggleContent() {
    $('.js-search-room__result').fadeToggle();
    $('.js-search-room__filter').fadeToggle();
}