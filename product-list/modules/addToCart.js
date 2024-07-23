import { updateCart } from "./updateCart.js";
const { controlDisplay } = await import("./controlDisplay.js");
function addToCart(counter, cartItems, cart, description) {
  Array.from(btnCart).forEach((item, index) => {
    item.addEventListener("click", function () {
      controlDisplay(index);
      parseInt((counter[index].textContent = 1));
      let itemName =
        description[index].getElementsByTagName("p")[0].textContent;
      let itemPrice =
        description[index].getElementsByTagName("p")[1].textContent;
      cartItems[itemName] = {
        name: itemName,
        quantity: 1,
        price: itemPrice,
        idx: index,
      };
      updateCart(cartItems, cart, itemName);
    });
  });
}

export { addToCart };
