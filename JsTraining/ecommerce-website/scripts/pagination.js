import { fetchPaginatedProducts } from "./fetchProducts.js";
import { renderProductList } from "../components/productList.js";

let currentPage = 1;
const limit = 10;

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageNumberDisplay = document.getElementById("pageNumber");

export async function updateProductList() {
  const products = await fetchPaginatedProducts(currentPage, limit);
  console.log("returned Products", products);
  renderProductList(products);
  pageNumberDisplay.textContent = currentPage;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateProductList();
  }
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  updateProductList();
});
