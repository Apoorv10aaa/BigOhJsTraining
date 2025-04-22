import { renderProductList } from "../components/productList.js";
export async function searchProducts(query) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    const mainList = document.getElementById("mainList");
    mainList.innerHTML = "";
    document.getElementById("pageNumbers").innerHTML = "";
    const display = document.getElementById("pageNumbers");
    const newSpan = document.createElement("span");
    newSpan.id = `page-${1}`;
    newSpan.className = "active";
    newSpan.textContent = 1;
    display.appendChild(newSpan);
    const firstSection = document.createElement("section");
    firstSection.id = `page-section-1`;
    firstSection.className = "product-grid";
    mainList.appendChild(firstSection);
    renderProductList(data.products, firstSection);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}
