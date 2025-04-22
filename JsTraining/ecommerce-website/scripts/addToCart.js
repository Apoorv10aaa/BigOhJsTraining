import { getTotalCartItems } from "./cardUtils.js";

export function addToCart(product) {
  alert("Item added to Cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  document.getElementById("cartItems").textContent = getTotalCartItems() + 1;
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = {
      ...product,
      quantity: 1,
    };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
