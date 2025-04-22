import { updateCurrentPage } from "../scripts/home.js";
function higlightActivePage(page) {
  updateCurrentPage(page);
  document.getElementById(`page-${page}`).classList.add("active");
  document.getElementById(`page-${page + 1}`)?.classList?.remove("active");
  document.getElementById(`page-${page - 1}`)?.classList?.remove("active");
}

function removeActive(page) {
  document.getElementById(`page-${page}`).classList.remove("active");
}

export function setPageObserver(card, page) {
  const options = {
    threshold: 0.5,
  };
  const pageObserver = new IntersectionObserver(function (
    entries,
    pageObserver
  ) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      higlightActivePage(page);
    }
  },
  options);
  pageObserver.observe(card);
}
