import $ from 'jquery';
import './date-dropdown.scss';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

(function dropdown() {
    const dropdownDateSplit = $('.js-date-dropdown_split');
    const dropdownDateSplitId = [];
    const dropdownDateFilter = $('.js-date-dropdown_filter');
    const dropdownDateFilterId = [];

    $(dropdownDateSplit).each((i, item) => {
        dropdownDateSplitId.push(item.id);
    });
    $(dropdownDateFilter).each((i, item) => {
        dropdownDateFilterId.push(item.id);
    });

    const airDatepickerSplit = [];
    const airDatepickerFilter = [];

    function renderResetButton(elem) {
        const inputVal = $(elem).find('.js-date-dropdown__calendar-input').val();
        const comma = inputVal.indexOf(',');

        if ($(elem).hasClass('js-date-dropdown_split')) {
            if (comma === -1) {
                $(elem).find('[data-date="from"]').val(inputVal);
                $(elem).find('[data-date="to"]').val('');
            } else {
                $(elem).find('[data-date="from"]').val(inputVal.slice(0, comma));
                $(elem).find('[data-date="to"]').val(inputVal.slice(comma + 2));
            }
        }

        if ($(elem).find('input').val()) {
            $(elem).find('.js-date-dropdown__btns-reset button').html('очистить');
        } else {
            $(elem).find('.js-date-dropdown__btns-reset button').html('');
        }
    }

    $(dropdownDateSplit).each((i, item) => {
        airDatepickerSplit.push(new AirDatepicker(`#${dropdownDateSplitId[i]} .js-date-dropdown__calendar-input`, {
            inline: true,
            minDate: new Date(),
            navTitles: {
                days: 'MMMM yyyy',
            },
            prevHtml: '<div class="date-dropdown__prev-arrow">'
                                + '<div class="date-dropdown__prev-arrow-line"></div>'
                                + '<div class="date-dropdown__prev-arrow-line"></div>'
                            + '</div>',
            nextHtml: '<div class="date-dropdown__next-arrow">'
                                + '<div class="date-dropdown__next-arrow-line"></div>'
                                + '<div class="date-dropdown__next-arrow-line"></div>'
                            + '</div>',
            range: true,
            onSelect() {
                renderResetButton(item);
            },
        }));
    });

    $(dropdownDateFilter).each((i, item) => {
        airDatepickerFilter.push(new AirDatepicker(`#${dropdownDateFilterId[i]} .date-dropdown__calendar-input`, {
            inline: true,
            minDate: new Date(),
            locale: {
                monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            },
            navTitles: {
                days: 'MMMM yyyy',
            },
            dateFormat: 'd MMM',
            multipleDatesSeparator: ' - ',
            prevHtml: '<div class="date-dropdown__prev-arrow">'
                                + '<div class="date-dropdown__prev-arrow-line"></div>'
                                + '<div class="date-dropdown__prev-arrow-line"></div>'
                            + '</div>',
            nextHtml: '<div class="date-dropdown__next-arrow">'
                                + '<div class="date-dropdown__next-arrow-line"></div>'
                                + '<div class="date-dropdown__next-arrow-line"></div>'
                            + '</div>',
            range: true,
            onSelect() {
                renderResetButton(item);
            },
        }));
    });

    function dropdownDateInit(elem, datePicker, id) {
        const $elem = $(elem);
        const handleArrowClick = () => {
            $elem.find('.js-date-dropdown__list').slideToggle();
        };
        const handleApplyClick = () => {
            $elem.find('.js-date-dropdown__list').slideUp();
        };
        const handleResetClick = () => {
            $elem.find('.js-date-dropdown__calendar-input').val('');
            renderResetButton(elem);
            datePicker.clear();
        };

        $elem.find('.js-date-dropdown__arrow').on('click', handleArrowClick);

        $elem.find('.js-date-dropdown__btns-apply button').on('click', handleApplyClick);

        $elem.find('.air-datepicker').appendTo(`#${id} .js-date-dropdown__calendar`);
        $elem.find('.air-datepicker-nav--title').addClass('text-h2');
        $elem.find('.air-datepicker-body--day-name').addClass('text-h3');
        $elem.find('.air-datepicker-cell').addClass('text-h3_50');
        $elem.find('.air-datepicker-cell -other-month-').addClass('text-h3_25');

        $elem.find('input').on('input', renderResetButton.bind(elem));

        $elem.find('.js-date-dropdown__btns-reset button').on('click', handleResetClick);
    }

    if (dropdownDateSplit) {
        $(dropdownDateSplit).each((i, item) => {
            dropdownDateInit($(item), airDatepickerSplit[i], dropdownDateSplitId[i]);
        });
    }
    if (dropdownDateFilter) {
        $(dropdownDateFilter).each((i, item) => {
            dropdownDateInit($(item), airDatepickerFilter[i], dropdownDateFilterId[i]);
        });
    }
}());
