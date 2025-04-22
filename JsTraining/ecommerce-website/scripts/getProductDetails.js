import { renderProductDetail } from "./renderProductDetails.js";
export async function getProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    console.error("Product ID not found in URL.");
    return;
  }

  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await res.json();
    renderProductDetail(product);
    return product;
  } catch (err) {
    console.error("Failed to fetch product:", err);
  }
}
