import { updateCart } from './updateCart.js';


function setupCounter(
  btnDecrement,
  btnIncrement,
  counter,
  cartItems,
  description,
  cart,
  btnCart,
  containerBtn,
  productAdd,
  productList,
  orderImage,
  containerOrders
) {
  let count = 0;
  Array.from(btnIncrement).forEach((btn, idx) => {
    btn.addEventListener('click', function () {
      const count = parseInt(counter[idx].textContent) + 1;
      counter[idx].textContent = count;
      let itemName = description[idx].getElementsByTagName('p')[0].textContent;
      cartItems[itemName].quantity = count;
      updateCart(cartItems, cart, itemName);

    });
  });

  Array.from(btnDecrement).forEach((btn, idx) => {
    btn.addEventListener('click', function () {
      const count = parseInt(counter[idx].textContent) - 1;
      counter[idx].textContent = count;

      if (count > 0) {
        let itemName =
        description[idx].getElementsByTagName('p')[0].textContent;
        cartItems[itemName].quantity = count;
        updateCart(cartItems, cart, itemName);
      }


      if (count === 0) {
        let itemName =
          description[idx].getElementsByTagName('p')[0].textContent;
        if(cartItems[itemName].quantity === 1){
          totalItemsCart.textContent = 0
        }
        delete cartItems[itemName];
        updateCart(cartItems, cart, itemName);
        btnCart[idx].classList.remove('hidden');
        productAdd[idx].classList.add('hidden');
        containerBtn[idx].classList.remove('!bg-red-600');
        productList[idx].classList.remove('b-product');

      }

      if (totalItemsCart.textContent === '0') {
          orderImage[0].classList.remove('hidden');
          containerOrders[0].classList.add('hidden');
        }
    });
  });
}

export { setupCounter };
