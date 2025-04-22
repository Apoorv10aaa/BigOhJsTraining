export function renderCartBill(cartItems) {
  const billContainer = document.getElementById("cart-bill");
  if (!billContainer) return;

  let totalItems = 0;
  let totalPrice = 0;

  totalPrice = cartItems.reduce((acc, item) => {
    totalItems += 1;
    return acc + item.price;
  }, 0);

  billContainer.innerHTML = `
      <h3>Bill Summary</h3>
      <p id="total-items">Total Items: ${totalItems}</p>
      <p id="total-price">Total Price: ₹${totalPrice}</p>
      <button>Proceed to Checkout</button>
    `;
}
