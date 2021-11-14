import * as $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';
import './room-card.scss';

(function roomCard() {
    document.querySelectorAll('.room-card').forEach((card, index) => {
        $(card).find('.room-card__carousel').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        card.querySelector('.room-card__photos-prev').addEventListener('click', () => {
            $(card).find('.room-card__carousel').slick('slickPrev');;
        });
        
        card.querySelector('.room-card__photos-next').addEventListener('click', () => {
            $(card).find('.room-card__carousel').slick('slickNext');
        });
        
        let changeSlideFlag = true;
        card.querySelectorAll('.room-card__photos-dot').forEach((item, index) => {
            item.addEventListener('click', () => {
                if (changeSlideFlag) {
                    $(card).find('.room-card__carousel').slick('slickGoTo', index);
                    changeSlideFlag = false;
                }
            });
        });
        
        $(card).find('.room-card__carousel').on('afterChange', () => {
            card.querySelectorAll('.room-card__photos-dot').forEach(dot => {
                dot.classList.remove('room-card__photos-dot_active');
            });
            card.querySelectorAll('.room-card__photos-dot')[$(card).find('.room-card__carousel').slick('slickCurrentSlide')].classList.add('room-card__photos-dot_active');
            changeSlideFlag = true;
        });
    });
})();