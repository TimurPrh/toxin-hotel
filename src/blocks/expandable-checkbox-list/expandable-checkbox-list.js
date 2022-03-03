import './expandable-checkbox-list.scss';

const dropdown = $('.js-expandable-checkbox-list');

dropdown.each((i, item) => {
  const handleArrowClick = () => {
    $(item).find('.js-expandable-checkbox-list__arrow-line').toggleClass('expandable-checkbox-list__arrow-line_active');
    $(item).find('.js-expandable-checkbox-list__list').slideToggle();
  };

  $(item).find('.js-expandable-checkbox-list__header').on('click', handleArrowClick);
});
