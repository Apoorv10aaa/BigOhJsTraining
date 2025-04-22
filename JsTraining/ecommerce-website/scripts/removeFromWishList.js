import { getTotalWishlistItems } from "./wishlistUtils.js";
export function removeFromWishlist(productId) {
  alert("Item removed from wishlist");
  document.getElementById("wishItems").textContent =
    getTotalWishlistItems() - 1;
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || {};
  delete wishlist[productId];
  sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
}
