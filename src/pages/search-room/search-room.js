function toggleContent() {
  $('.js-search-room__result').fadeToggle();
  $('.js-search-room__filter').fadeToggle();
}

if (document.querySelector('.js-search-room__result')) {
  document.querySelector('.js-search-room__filter-symbols-reset').addEventListener('click', toggleContent);
  document.querySelector('.js-search-room__filter-symbols-apply').addEventListener('click', toggleContent);
  document.querySelector('.js-search-room__result-filter').addEventListener('click', toggleContent); 
}
