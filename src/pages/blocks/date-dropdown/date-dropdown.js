import * as $ from 'jquery';
import './date-dropdown.scss';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

(function dropdown() {
    const dropdownDateSplit = $('.date-dropdown_split');
    let dropdownDateSplitId = [];
    const dropdownDateFilter = $('.date-dropdown_filter');
    let dropdownDateFilterId = [];

    $(dropdownDateSplit).each((i, item) => {
        dropdownDateSplitId.push(item.id);
    });
    $(dropdownDateFilter).each((i, item) => {
        dropdownDateFilterId.push(item.id);
    });

    let airDatepickerSplit = [];
    let airDatepickerFilter = [];

    $(dropdownDateSplit).each((i, item) => {
        airDatepickerSplit.push(new AirDatepicker(`#${dropdownDateSplitId[i]} .date-dropdown__calendar-input`, {
                inline: true,
                minDate: new Date(),
                navTitles: {
                    days: 'MMMM yyyy',
                },
                prevHtml: '<div class="date-dropdown__prev-arrow">' +
                                '<div class="date-dropdown__prev-arrow-line"></div>' +
                                '<div class="date-dropdown__prev-arrow-line"></div>' +
                            '</div>',
                nextHtml: '<div class="date-dropdown__next-arrow">' +
                                '<div class="date-dropdown__next-arrow-line"></div>' +
                                '<div class="date-dropdown__next-arrow-line"></div>' +
                            '</div>',
                range: true,
                onSelect () {
                    renderResetButton(item);
                }
            })
        )
    });

    $(dropdownDateFilter).each((i, item) => {
        airDatepickerFilter.push(new AirDatepicker(`#${dropdownDateFilterId[i]} .date-dropdown__calendar-input`, {
                inline: true,
                minDate: new Date(),
                locale: {
                    monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
                },
                navTitles: {
                    days: 'MMMM yyyy',
                },
                dateFormat: 'd MMM',
                multipleDatesSeparator: ' - ',
                prevHtml: '<div class="date-dropdown__prev-arrow">' +
                                '<div class="date-dropdown__prev-arrow-line"></div>' +
                                '<div class="date-dropdown__prev-arrow-line"></div>' +
                            '</div>',
                nextHtml: '<div class="date-dropdown__next-arrow">' +
                                '<div class="date-dropdown__next-arrow-line"></div>' +
                                '<div class="date-dropdown__next-arrow-line"></div>' +
                            '</div>',
                range: true,
                onSelect () {
                    renderResetButton(item);
                }
            })
        )
    });

    function renderResetButton(elem) {
        const inputVal = $(elem).find('.date-dropdown__calendar-input').val();
        const comma = inputVal.indexOf(',');

        if ($(elem).hasClass('date-dropdown_split')) {
            if (comma == -1) {
                $(elem).find('[data-date="from"]').val(inputVal);
                $(elem).find('[data-date="to"]').val('');
            } else {
                $(elem).find('[data-date="from"]').val(inputVal.slice(0, comma));
                $(elem).find('[data-date="to"]').val(inputVal.slice(comma + 2));
            }
        }

        if ($(elem).find('input').val()) {
            $(elem).find('.date-dropdown__btns-reset button').html('очистить');
        } else {
            $(elem).find('.date-dropdown__btns-reset button').html('');
        }
    }

    function dropdownDateInit(elem, datePicker, id) {
        $(elem).find('.date-dropdown__arrow').on('click', () => {
            $(elem).find('.date-dropdown__list').slideToggle();
        });

        $(elem).find('.date-dropdown__btns-apply button').on('click', () => {
            $(elem).find('.date-dropdown__list').slideUp();
        });

        $(elem).find('.air-datepicker').appendTo(`#${id} .date-dropdown__calendar`);
        $(elem).find('.air-datepicker-nav--title').addClass('text-h2');
        $(elem).find('.air-datepicker-body--day-name').addClass('text-h3');
        $(elem).find('.air-datepicker-cell').addClass('text-h3_50');
        $(elem).find('.air-datepicker-cell -other-month-').addClass('text-h3_25');

        $(elem).find('input').on('input', () => renderResetButton(elem));

        $(elem).find('.date-dropdown__btns-reset button').on('click', () => {
            $(elem).find('.date-dropdown__calendar-input').val('');
            renderResetButton(elem);
            datePicker.clear();
        });
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
})();