import './rate-button.scss';

document.querySelectorAll('.js-rate-button__star').forEach(item => {
    item.addEventListener('click', (e) => {
        let setStarsFlag = true;
        let star = e.target.closest('.js-rate-button__star');

        for (let item of star.parentElement.children) {
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
            for (let item of star.parentElement.children) {
                item.classList.remove('rate-button__star_active');
            }
        }

        function setStars(elem) {
            if (!elem.classList.contains('rate-button__star_active')) {
                elem.classList.add('rate-button__star_active');
            }
        }
    });
});