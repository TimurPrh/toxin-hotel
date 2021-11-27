import * as $ from 'jquery';
import './input-button.scss';

document.querySelectorAll('.js-input-button_like').forEach(item => {
    item.addEventListener('click', (e) => {
        const like = e.target;
        if (!like.classList.contains('input-button_like_active')) {
            like.classList.add('input-button_like_active');
            like.value = parseInt(like.value) + 1;
        } else {
            like.classList.remove('input-button_like_active');
            like.value = parseInt(like.value) - 1;
        }
    });
});