import { getHeader } from "../components/header.js";
import { getFooter } from "../components/footer.js";
import { renderProductList } from "../components/productList.js";
import { renderCartBill } from "./calculateBill.js";

document.getElementById("header-container").appendChild(getHeader());
document.getElementById("footer-container").appendChild(getFooter());

// Fetch cart from localStorage
function getCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  return Object.values(cart);
}

// Display cart items
function displayCartItems() {
  const cartItems = getCartItems();
  const container = document.getElementById("cart-products");
  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("total-price").textContent = 0;
    document.getElementById("total-items").textContent = 0;
    return;
  }
  renderProductList(cartItems, container, {
    onCartUpdate: renderCartPage,
  });
}

function renderCartPage() {
  console.log("cart page rendered");
  displayCartItems();
  renderCartBill(getCartItems());
}
renderCartPage();
