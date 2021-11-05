import './rate-button.scss';

document.querySelectorAll('.rate-button__star').forEach(item => {
    item.addEventListener('click', (e) => {
        let star = e.target.closest('.rate-button__star');

        for (let item of star.parentElement.children) {
            item.classList.remove('rate-button__star_active');
        }

        checkStars(star);
        while (star.previousElementSibling) {
            star = star.previousElementSibling;
            checkStars(star);
        }

        function checkStars(elem) {
            if (!elem.classList.contains('rate-button__star_active')) {
                elem.classList.add('rate-button__star_active');
            } else {
                elem.classList.remove('rate-button__star_active');
            }
        }
    });
});