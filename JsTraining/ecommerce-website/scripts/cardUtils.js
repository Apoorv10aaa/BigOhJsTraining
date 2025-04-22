export function isInCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  return cart.hasOwnProperty(productId);
}

export function getTotalCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  return Object.keys(cart).length;
}
