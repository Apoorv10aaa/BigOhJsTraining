import { getTotalWishlistItems } from "./wishlistUtils.js";
export function addToWishlist(product) {
  alert("Item added to wishlist");
  document.getElementById("wishItems").textContent =
    getTotalWishlistItems() + 1;
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || {};
  wishlist[product.id] = product;
  sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
}
