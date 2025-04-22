// /scripts/productList.js
import { createProductCard } from "./productCard.js";

export function renderProductList(products, container, options = {}) {
  container.className = "product-grid";
  container.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    const card = createProductCard(product, options);
    container.appendChild(card);
  });
}

export function updateProductList(products, container, options = {}) {
  console.log(container);
  products.forEach((product) => {
    const card = createProductCard(product, options);
    container.appendChild(card);
  });
  return container;
}
