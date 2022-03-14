function createPagination(totalPages, page) {
  const element = document.querySelector(".js-pagination ul");

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

  if (page === totalPages || page === totalPages - 1) {
    beforePage -= 1;
  }

  if (page === 1 || page === 2) {
    afterPage += 1;
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
    if (pageLength <= totalPages) {
      if (pageLength === 0) {
        pageLength += 1;
      }
      if (page === pageLength) {
        active = "pagination__item_active";
      } else {
        active = "";
      }
      liTag += `<li class="text-h3_50 pagination__item ${active}" onclick="createPagination(${totalPages}, ${pageLength})">${pageLength}</li>`;
    }
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

if (document.querySelector('.js-pagination')) {
  const totalPagesFromDataset = (document.querySelector('.js-pagination').dataset.pages);
  const initialPage = 1;

  createPagination(totalPagesFromDataset, initialPage);

  window.createPagination = createPagination;
}
