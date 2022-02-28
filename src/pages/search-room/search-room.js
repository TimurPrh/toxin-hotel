import '../../blocks/header/header';
import '../../blocks/footer/footer';
import '../../blocks/dropdown/dropdown';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/slider/slider';
import '../../blocks/input-button/input-button';
import '../../blocks/rich-checkbox-buttons/rich-checkbox-buttons';
import '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import '../../blocks/room-card/room-card';
import '../../blocks/pagination/pagination';
import './search-room.scss';

function toggleContent() {
  $('.js-search-room__result').fadeToggle();
  $('.js-search-room__filter').fadeToggle();
}

document.querySelector('.js-search-room__filter-symbols-reset').addEventListener('click', toggleContent);
document.querySelector('.js-search-room__filter-symbols-apply').addEventListener('click', toggleContent);
document.querySelector('.js-search-room__result-filter').addEventListener('click', toggleContent);
