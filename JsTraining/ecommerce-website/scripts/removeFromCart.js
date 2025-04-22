import { getTotalCartItems } from "./cardUtils.js";
export function removeFromCart(productId) {
  alert("Item removed from cart");
  document.getElementById("cartItems").textContent = getTotalCartItems() - 1;
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  delete cart[productId];
  localStorage.setItem("cart", JSON.stringify(cart));
}
