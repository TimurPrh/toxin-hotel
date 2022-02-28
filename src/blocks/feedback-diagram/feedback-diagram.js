import './feedback-diagram.scss';

(function feedbackDiagram() {
  const disappointedSegment = document.querySelector('.js-feedback-diagram__segment-disappointed');
  const acceptableSegment = document.querySelector('.js-feedback-diagram__segment-acceptable');
  const goodSegment = document.querySelector('.js-feedback-diagram__segment-good');
  const amazingSegment = document.querySelector('.js-feedback-diagram__segment-amazing');

  const feedbackTotalNumberField = document.querySelector('.js-feedback-diagram__text-number');
  const feedbackTotalNumberText = document.querySelector('.js-feedback-diagram__text-label');

  const feedbackCount = JSON.parse(document.querySelector('.feedback-diagram').dataset.feedback);
  let feedbackTotalNumber = 0;
  let notZeroFeedbackCount = 0;

  Object.values(feedbackCount).forEach((count) => {
    if (parseInt(count, 10)) {
      notZeroFeedbackCount++;
    }
    feedbackTotalNumber += parseInt(count, 10);
  });

  let rate1DashArray = 0;
  let rate2DashArray = 0;
  let rate3DashArray = 0;
  let rate4DashArray = 0;

  const rate1DashOffset = 24.75;
  let rate2DashOffset;
  let rate3DashOffset;
  let rate4DashOffset;

  if (feedbackCount.disappointed > 0) {
    rate1DashArray = (100 * feedbackCount.disappointed) / feedbackTotalNumber - 0.5;
    disappointedSegment.setAttribute("stroke-width", "1");
    if (notZeroFeedbackCount === 1) {
      disappointedSegment.setAttribute("stroke-dasharray", `100 0`);
    } else {
      disappointedSegment.setAttribute("stroke-dasharray", `${rate1DashArray} ${100 - rate1DashArray}`);
    }

    disappointedSegment.setAttribute("stroke-dashoffset", `${rate1DashOffset}`);
    rate1DashArray += 0.5;
  }

  rate2DashOffset = rate1DashOffset - rate1DashArray;
  if (rate2DashOffset < 0) {
    rate2DashOffset = 100 + rate2DashOffset;
  }
  if (feedbackCount.acceptable > 0) {
    rate2DashArray = (100 * feedbackCount.acceptable) / feedbackTotalNumber - 0.5;
    acceptableSegment.setAttribute("stroke-width", "1");
    if (notZeroFeedbackCount === 1) {
      acceptableSegment.setAttribute("stroke-dasharray", `100 0`);
    } else {
      acceptableSegment.setAttribute("stroke-dasharray", `${rate2DashArray} ${100 - rate2DashArray}`);
    }

    acceptableSegment.setAttribute("stroke-dashoffset", `${rate2DashOffset}`);
    rate2DashArray += 0.5;
  }

  rate3DashOffset = rate2DashOffset - rate2DashArray;
  if (rate3DashOffset < 0) {
    rate3DashOffset = 100 + rate3DashOffset;
  }
  if (feedbackCount.good > 0) {
    rate3DashArray = (100 * feedbackCount.good) / feedbackTotalNumber - 0.5;
    goodSegment.setAttribute("stroke-width", "1");
    if (notZeroFeedbackCount === 1) {
      goodSegment.setAttribute("stroke-dasharray", `100 0`);
    } else {
      goodSegment.setAttribute("stroke-dasharray", `${rate3DashArray} ${100 - rate3DashArray}`);
    }

    goodSegment.setAttribute("stroke-dashoffset", `${rate3DashOffset}`);
    rate3DashArray += 0.5;
  }

  rate4DashOffset = rate3DashOffset - rate3DashArray;
  if (rate4DashOffset < 0) {
    rate4DashOffset = 100 + rate4DashOffset;
  }
  if (feedbackCount.amazing > 0) {
    rate4DashArray = (100 * feedbackCount.amazing) / feedbackTotalNumber - 0.5;
    amazingSegment.setAttribute("stroke-width", "1");
    if (notZeroFeedbackCount === 1) {
      amazingSegment.setAttribute("stroke-dasharray", `100 0`);
    } else {
      amazingSegment.setAttribute("stroke-dasharray", `${rate4DashArray} ${100 - rate4DashArray}`);
    }

    amazingSegment.setAttribute("stroke-dashoffset", `${rate4DashOffset}`);
    rate4DashArray += 0.5;
  }

  feedbackTotalNumberField.innerHTML = feedbackTotalNumber;

  function isUnitNumber() {
    return (feedbackTotalNumber === 1 || (feedbackTotalNumber > 20 && feedbackTotalNumber % 10 === 1));
  }

  function isMultipleNumber() {
    return (feedbackTotalNumber >= 2 && feedbackTotalNumber <= 4) || (feedbackTotalNumber > 20 && (feedbackTotalNumber % 10 >= 2 && feedbackTotalNumber % 10 <= 4));
  }

  if (isUnitNumber()) {
    feedbackTotalNumberText.innerHTML = "голос";
  } else if (isMultipleNumber()) {
    feedbackTotalNumberText.innerHTML = "голоса";
  } else if (feedbackTotalNumber > 4) {
    feedbackTotalNumberText.innerHTML = "голосов";
  }
}());
