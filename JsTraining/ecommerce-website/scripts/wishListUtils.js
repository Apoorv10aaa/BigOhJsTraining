export function isInWishlist(productId) {
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || {};
  return wishlist.hasOwnProperty(productId);
}

export function getTotalWishlistItems() {
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || {};
  return Object.keys(wishlist).length;
}
