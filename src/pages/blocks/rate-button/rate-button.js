import './rate-button.scss';

document.querySelectorAll('.js-rate-button__star').forEach((starElement) => {
    const handleStarClick = (e) => {
        function setStars(elem) {
            if (!elem.classList.contains('rate-button__star_active')) {
                elem.classList.add('rate-button__star_active');
            }
        }

        let setStarsFlag = true;
        let star = e.target.closest('.js-rate-button__star');

        for (const item of star.parentElement.children) {
            if (item.classList.contains('rate-button__star_active')) {
                setStarsFlag = false;
            }
        }

        if (setStarsFlag) {
            setStars(star);
            while (star.previousElementSibling) {
                star = star.previousElementSibling;
                setStars(star);
            }
        } else {
            for (const item of star.parentElement.children) {
                item.classList.remove('rate-button__star_active');
            }
        }
    };

    starElement.addEventListener('click', handleStarClick);
});
