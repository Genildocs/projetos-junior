import { updateCart } from "./updateCart.js";
const { removeElement } = await import("./controlDisplay.js");
function setupCounter(
  btnDecrement,
  btnIncrement,
  counter,
  cartItems,
  description,
  cart
) {
  Array.from(btnIncrement).forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      const count = parseInt(counter[idx].textContent) + 1;
      counter[idx].textContent = count;
      let itemName = description[idx].getElementsByTagName("p")[0].textContent;
      cartItems[itemName].quantity = count;
      updateCart(cartItems, cart, itemName);
    });
  });

  Array.from(btnDecrement).forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      const count = parseInt(counter[idx].textContent) - 1;
      counter[idx].textContent = count;
      let itemName = description[idx].getElementsByTagName("p")[0].textContent;

      if (count > 0) {
        cartItems[itemName].quantity = count;
        updateCart(cartItems, cart, itemName);
      }

      if (count === 0) {
        if (cartItems[itemName].quantity === 1) {
          totalItemsCart.textContent = 0;
        }
        delete cartItems[itemName];
        updateCart(cartItems, cart, itemName);
        removeElement(idx);
      }
    });
  });
}

export { setupCounter };
