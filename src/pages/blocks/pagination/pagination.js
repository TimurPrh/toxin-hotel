import './pagination.scss';
const totalPages = (document.querySelector('.pagination').dataset.pages);
const element = document.querySelector(".pagination ul");
let page = 1;


createPagination(totalPages, page);

function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
        liTag += `<li class="pagination__item pagination__item_prev" onclick="createPagination(${totalPages}, ${page - 1})"></li>`;
    }
    if (page > 2) {
        liTag += `<li class="text-h3_50 pagination__item" onclick="createPagination(${totalPages}, 1)">1</li>`;
        if (page > 3) {
            liTag += `<li class="text-h3_50 pagination__item pagination__item_dots">...</li>`;
        }
    }

    if (page == totalPages || page == totalPages - 1) {
        beforePage = beforePage - 1;
    }

    if (page == 1 || page == 2) {
        afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) {
            continue;
        }
        if (plength == 0) {
            plength = plength + 1;
        }
        if (page == plength) {
            active = "pagination__item_active";
        } else {
            active = "";
        }
        liTag += `<li class="text-h3_50 pagination__item ${active}" onclick="createPagination(${totalPages}, ${plength})">${plength}</li>`;
    }

    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liTag += `<li class="text-h3_50 pagination__item pagination__item_dots">...</li>`;
        }
        liTag += `<li class="text-h3_50 pagination__item" onclick="createPagination(${totalPages}, ${totalPages})">${totalPages}</li>`;
    }
    if (page < totalPages) {
        liTag += `<li class="pagination__item pagination__item_next" onclick="createPagination(${totalPages}, ${page + 1})"></li>`;
    }
    element.innerHTML = liTag;
    return liTag;
}

window.createPagination = createPagination;