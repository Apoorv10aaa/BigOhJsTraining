import { isInCart } from "../scripts/cardUtils.js";
import { addToCart } from "../scripts/addToCart.js";
import { removeFromCart } from "../scripts/removeFromCart.js";

import { addToWishlist } from "../scripts/addToWishlist.js";
import { removeFromWishlist } from "../scripts/removeFromWishlist.js";
import { isInWishlist } from "../scripts/wishlistUtils.js";

export function renderProductDetail(product) {
  const container = document.getElementById("product-details");
  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);

  container.innerHTML = `
      <div class="product-detail-container">
        <div class="product-images">
          <img id="main-image" src="${product.thumbnail}" alt="${
    product.title
  }" />
          <div class="image-gallery">
            ${product.images
              .map(
                (img) =>
                  `<img src="${img}" alt="${product.title}" class="thumb"/>`
              )
              .join("")}
          </div>
        </div>
  
        <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">Price: ₹${product.price}</p>
          <p class="product-discount">Discount: ${
            product.discountPercentage
          }%</p>
          <p class="product-rating">Rating: ⭐ ${product.rating}</p>
          <p class="product-stock">Stock: ${product.stock}</p>
          <p class="product-brand">Brand: ${product.brand}</p>
          <p class="product-category">Category: ${product.category}</p>
  
          <button class="add-to-cart">
      ${inCart ? "Remove from Cart" : "Add to Cart"}
          <button class="add-to-wishlist"> ${
            inWishlist ? "❤️ Remove From Wishlist" : "❤️ Wishlist"
          }</button>
        </div>
      </div>
    `;

  const mainImage = document.getElementById("main-image");
  const images = container.querySelectorAll(".thumb");

  images.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
  });
  const addToCartBtn = container.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
    addToCartBtn.textContent = isInCart(product.id)
      ? "Remove from Cart"
      : "Add to Cart";
  });

  const wishlistButton = container.querySelector(".add-to-wishlist");
  wishlistButton.addEventListener("click", () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    wishlistButton.textContent = isInWishlist(product.id)
      ? "❤️ Remove From Wishlist"
      : "❤️ Wishlist";
  });
}
