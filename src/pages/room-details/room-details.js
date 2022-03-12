import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';

// import '../../blocks/header/header';
// import '../../blocks/footer/footer';
// import '../../blocks/bullet-list/bullet-list';
// import '../../blocks/feedback/feedback';
// import '../../blocks/room-details-list/room-details-list';
// import '../../blocks/booking-room-card/booking-room-card';
// import '../../blocks/feedback-diagram/feedback-diagram';
import './room-details.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../../blocks/', true, /\.js$|\.scss$/));

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
