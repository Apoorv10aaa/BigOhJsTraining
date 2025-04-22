// /components/header.js
import { getTotalCartItems } from "../scripts/cardUtils.js";
import { getTotalWishlistItems } from "../scripts/wishlistUtils.js";

export function getHeader() {
  const path = window.location.pathname;
  let searchBar = path.includes("index") || path.includes("home");
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
      <div class="header-content">
        <div class="logo"><a href="./index.html">E-Shop</a></div>
        <div class="search-bar">
          ${
            searchBar
              ? '<input id="search-input" type="text" placeholder="Search products..." />'
              : ""
          }
        </div>
        <div class="icons">
          <a href="./wishlist.html"><span id="wishlist" class="icon">❤️<span id="wishItems">${getTotalWishlistItems()}</span></span></a>
          <span id="cart" class="icon">🛒<span id="cartItems">${getTotalCartItems()}</span></span>
        </div>
      </div>
    `;
  header.querySelector("#cart").addEventListener("click", () => {
    window.location.href = "./cart.html";
  });
  return header;
}
