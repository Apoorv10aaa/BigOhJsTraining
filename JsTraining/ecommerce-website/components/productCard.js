// /components/productCard.js
import { isInCart } from "../scripts/cardUtils.js";
import { addToCart } from "../scripts/addToCart.js";
import { removeFromCart } from "../scripts/removeFromCart.js";

import { addToWishlist } from "../scripts/addToWishlist.js";
import { removeFromWishlist } from "../scripts/removeFromWishlist.js";
import { isInWishlist } from "../scripts/wishlistUtils.js";

export function createProductCard(product, options = {}) {
  const card = document.createElement("div");
  card.className = "product-card";

  const inCart = isInCart(product.id); // check if in cart
  const inWishlist = isInWishlist(product.id);
  const stars = "⭐";

  card.innerHTML = `
      <a href=product.html?id=${product.id}><img src="${
    product.images[0]
  }" alt="${product.title}" />
      <h3>${product.title}</h3></a>
      <span class="wishlist-icon" style="position: top: 10px; right: 10px; font-size: 1.5rem; cursor: pointer; color: ${
        inWishlist ? "red" : "#5A5A5A"
      }">
        ♥
      </span>
      <p class="desc">${product.description.slice(0, 50) + "..."}</p>
      <p class="price">₹${product.price}</p>
      <p class="rating">Stars: ${stars}</p>
      <p class="brand">Brand: ${product.brand ? product.brand : "Generic"}</p>
       <button class="add-to-cart">
      ${inCart ? "Remove from Cart" : "Add to Cart"}
    `;

  const addToCartBtn = card.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
      if (typeof options.onCartUpdate === "function") {
        options.onCartUpdate();
      }
    } else {
      addToCart(product);
    }
    addToCartBtn.textContent = isInCart(product.id)
      ? "Remove from Cart"
      : "Add to Cart";
  });

  const wishlistIcon = card.querySelector(".wishlist-icon");
  wishlistIcon.addEventListener("click", () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      if (typeof options.onWishlistUpdate === "function") {
        options.onWishlistUpdate();
      }
    } else {
      addToWishlist(product);
    }
    wishlistIcon.style.color = isInWishlist(product.id) ? "red" : "#5A5A5A";
  });

  return card;
}
