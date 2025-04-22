import { getHeader } from "../components/header.js";
import { renderProductList } from "../components/productList.js";
import { getFooter } from "../components/footer.js";
import { renderCategories } from "./renderCategories.js";
import { searchProducts } from "./search.js";
import { setInfinityScroll } from "./infiniteScroll.js";
import { fetchPaginatedProducts } from "./fetchProducts.js";
import { updateProductList } from "../components/productList.js";

let currentPage = 0;
let currentLimit = 10;
let sectionObserver = null;
const url = "https://dummyjson.com/products";

function renderHomePage() {
  const header = getHeader();
  document.getElementById("header").appendChild(header);

  loadCategories();

  sectionObserver = setInfinityScroll(currentPage, currentLimit, url);

  const footer = getFooter();
  document.getElementById("footer").appendChild(footer);
}
renderHomePage();

// load categories.
async function loadCategories() {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    const categories = await res.json();

    if (Array.isArray(categories)) {
      renderCategories(categories);
    } else {
      console.error("Unexpected categories format:", categories);
    }
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
}

// Debounce utility function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const searchInput = document.getElementById("search-input");
if (searchInput) {
  const handleSearch = debounce((e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      searchProducts(query);
    }
  }, 500);

  searchInput.addEventListener("input", handleSearch);
}

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");

prevBtn.addEventListener("click", () => {
  currentPage--;
  let prevPage = currentPage;
  const prevSection = document.getElementById(`data-page-${prevPage}`);
  prevSection?.scrollIntoView({ behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  let nextPage = currentPage;
  const nextSection = document.getElementById(`data-page-${nextPage}`);
  nextSection?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("limitInput").addEventListener("change", async (e) => {
  let newLimit = Number(e.target.value);
  if (newLimit < 1) return;
  console.log(newLimit);
  currentLimit = newLimit;
  currentPage = 0;

  if (sectionObserver) sectionObserver.disconnect();

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  const sentinel = document.createElement("div");
  sentinel.id = "scroll-sentinel";
  productList.appendChild(sentinel);
  document.getElementById("pageNumbers").innerHTML = "";

  sectionObserver = setInfinityScroll(currentPage, currentLimit, url);
});

export function updateCurrentPage(page) {
  currentPage = page;
}

export function getCurrentLimit() {
  return currentLimit;
}
export function getSectionObserver() {
  return sectionObserver;
}

export function setSectionObserver(observer) {
  sectionObserver = observer;
}
