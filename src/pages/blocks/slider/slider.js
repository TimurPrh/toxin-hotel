import '../../../libs/range-slider-plugin/range-slider';
import '../../../libs/range-slider-plugin/range-slider.css';
import './slider.scss';

const $sliderWrapper = $('.js-slider__plugin');
const slider = document.querySelector('.slider');
const sliderResult = document.querySelector('.slider__result');
const {
    min, max, step, from, to,
} = JSON.parse(slider.dataset.sliderValues);
const currentValues = [];

$sliderWrapper.slider({
    range: true,
    vertical: false,
    scale: false,
    tip: false,
    bar: true,
    min,
    max,
    step,
    from,
    to,
});

const settings = $sliderWrapper.slider('getSettings');
currentValues[0] = settings.from;
currentValues[1] = settings.to;

function separateThousand(x) {
    if (x >= 1000) {
        if (x % 1000 === 0) {
            return `${Math.floor(x / 1000)} 000`;
        }
        return `${Math.floor(x / 1000)} ${x % 1000}`;
    }
    return `${x}`;
}

function updateResult() {
    sliderResult.innerHTML = `${separateThousand(currentValues[0])} - ${separateThousand(currentValues[1])} ₽`;
}

updateResult(currentValues[0], currentValues[1]);

function fromAndToValuesHandler(event, { inputVal, id }) {
    const dataset = JSON.parse(slider.dataset.sliderValues);
    if (id === 0) {
        dataset.from = inputVal;
        currentValues[0] = inputVal;
    } else if (id === 1) {
        dataset.to = inputVal;
        currentValues[1] = inputVal;
    }
    slider.dataset.sliderValues = JSON.stringify(dataset);

    updateResult();
}
$sliderWrapper.on('moveThumbEvent', fromAndToValuesHandler.bind(this));
