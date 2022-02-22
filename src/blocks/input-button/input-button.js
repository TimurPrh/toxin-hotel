import './input-button.scss';

document.querySelectorAll('.js-input-button_like').forEach((item) => {
    const handleLikeClick = (e) => {
        const like = e.target;
        if (!like.classList.contains('input-button_like_active')) {
            like.classList.add('input-button_like_active');
            like.value = parseInt(like.value, 10) + 1;
        } else {
            like.classList.remove('input-button_like_active');
            like.value = parseInt(like.value, 10) - 1;
        }
    };

    item.addEventListener('click', handleLikeClick);
});
