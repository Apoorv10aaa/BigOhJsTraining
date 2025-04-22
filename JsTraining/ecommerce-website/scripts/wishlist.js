import { getHeader } from "../components/header.js";
import { getFooter } from "../components/footer.js";
import { renderProductList } from "../components/productList.js";

document.getElementById("header-container").appendChild(getHeader());
document.getElementById("footer-container").appendChild(getFooter());

function getWishlistItems() {
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || {};
  return Object.values(wishlist);
}

function displayWishlistItems() {
  const wishlistItems = getWishlistItems();
  const container = document.getElementById("wishlist-products");
  if (wishlistItems.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  renderProductList(wishlistItems, container, {
    onWishlistUpdate: renderWishlistPage,
  });
}

function renderWishlistPage() {
  displayWishlistItems();
}
renderWishlistPage();
