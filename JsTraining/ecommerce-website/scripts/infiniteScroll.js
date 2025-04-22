import { fetchPaginatedProducts } from "./fetchProducts.js";
import { updateProductList } from "../components/productList.js";
import { setPageObserver } from "./pageObserver.js";
import { updateCurrentPage } from "../scripts/home.js";

function updatePaginationDisplay(page) {
  const display = document.getElementById("pageNumbers");
  const newSpan = document.createElement("span");
  newSpan.id = `page-${page}`;
  newSpan.textContent = page;
  display.appendChild(newSpan);

  newSpan.addEventListener("click", () => {
    updateCurrentPage(page);
    const card = document.getElementById(`data-page-${page}`);
    if (card) card.scrollIntoView({ behavior: "smooth" });
  });

  if (page > 1) {
    document.getElementById(`page-${page - 1}`).classList.remove("active");
  }
  document.getElementById(`page-${page}`).classList.add("active");
}

export function setInfinityScroll(currentPage, currentLimit, url) {
  let productContainer = document.getElementById("product-list");
  let sentinel = document.getElementById("scroll-sentinel");

  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "200px",
  };

  const sectionObserver = new IntersectionObserver(async function (
    entries,
    sectionObserver
  ) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      sectionObserver.unobserve(entry.target);
      currentPage++;
      const newProducts = await fetchPaginatedProducts(
        currentPage,
        currentLimit,
        url
      );
      console.log(
        `section is visible and divs are added with page ${currentPage} and limit ${currentLimit} with url ${url}`
      );
      if (newProducts.length > 0) {
        updatePaginationDisplay(currentPage);
        updateProductList(newProducts, productContainer);
        productContainer.appendChild(sentinel);

        const allCards = document.querySelectorAll(".product-card");
        let len = allCards.length;
        const card = allCards[(len / currentLimit - 1) * currentLimit];
        console.log(
          `Card to observer ${
            (len / currentLimit - 1) * currentLimit
          } with pageId ${currentPage}`
        );
        card.id = `data-page-${currentPage}`;
        setPageObserver(card, currentPage);
        sectionObserver.observe(sentinel);
      }
    }
  },
  options);

  sectionObserver.observe(sentinel);
  return sectionObserver;
}
