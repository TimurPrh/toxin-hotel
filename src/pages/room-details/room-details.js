import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';

(function roomDetails() {
  const $carousel = $('.js-room-details__photos');

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
  };

  function toggleSlider() {
    if (document.documentElement.clientWidth <= 768 && !$carousel.hasClass('slick-initialized')) {
      $carousel.slick(sliderSettings);
    }
    if (document.documentElement.clientWidth > 768 && $carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }
  }

  const handleResizeWindow = () => {
    toggleSlider();
  };

  toggleSlider();

  $(window).on('resize', handleResizeWindow);
}());
