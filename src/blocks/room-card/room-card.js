import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';

import '../rate-button/rate-button';
import './room-card.scss';

(function roomCard() {
    document.querySelectorAll('.room-card').forEach((card) => {
        $(card).find('.room-card__carousel').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
        });

        const handlePreviousClick = () => {
            $(card).find('.room-card__carousel').slick('slickPrev');
        };

        const handleNextClick = () => {
            $(card).find('.room-card__carousel').slick('slickNext');
        };

        card.querySelector('.room-card__photos-prev').addEventListener('click', handlePreviousClick);

        card.querySelector('.room-card__photos-next').addEventListener('click', handleNextClick);

        let changeSlideFlag = true;

        const handleCarouselChange = () => {
            card.querySelectorAll('.room-card__photos-dot').forEach((dot) => {
                dot.classList.remove('room-card__photos-dot_active');
            });
            card.querySelectorAll('.room-card__photos-dot')[$(card).find('.room-card__carousel').slick('slickCurrentSlide')].classList.add('room-card__photos-dot_active');
            changeSlideFlag = true;
        };

        card.querySelectorAll('.room-card__photos-dot').forEach((dot, index) => {
            const handleDotClick = () => {
                if (changeSlideFlag) {
                    $(card).find('.room-card__carousel').slick('slickGoTo', index);
                    changeSlideFlag = false;
                }
            };

            dot.addEventListener('click', handleDotClick);
        });

        $(card).find('.room-card__carousel').on('afterChange', handleCarouselChange);
    });
}());
