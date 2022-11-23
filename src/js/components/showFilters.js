// * ==== Show Filters
export default function showFilters() {
  const filtersBtn = document.querySelector(".news__filters-btn");
  const filters = document.querySelector(".filters-news");
  const filtersCloseBtn = document.querySelector(".filters-news__close");
  const body = document.querySelector("body");

  if (filtersBtn) {
    filtersBtn.addEventListener("click", (e) => {
      filters.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });

    filtersCloseBtn.addEventListener("click", (e) => {
      filters.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }
}
