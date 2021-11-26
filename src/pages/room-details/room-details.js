import * as $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';
import '../blocks/header/header.js';
import '../blocks/footer/footer.js';
import '../blocks/bullet-list/bullet-list.js';
import '../blocks/feedback/feedback.js';
import '../blocks/room-details-list/room-details-list.js';
import '../blocks/booking-room-card/booking-room-card.js';
import '../blocks/feedback-diagram/feedback-diagram.js';

import './room-details.scss';

(function roomDetails() {
    const $carousel = $('.room-details__photos');

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1
    };

    toggleSlider();

    $(window).on('resize', function() {
        toggleSlider();
    });

    function toggleSlider() {
        if (document.documentElement.clientWidth <= 768 && !$carousel.hasClass('slick-initialized')) {
            $carousel.slick(sliderSettings);
        }
        if (document.documentElement.clientWidth > 768 && $carousel.hasClass('slick-initialized')) {
            $carousel.slick('unslick');
        }
    }
})();