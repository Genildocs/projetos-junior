import iconClose from '../assets/images/icon-remove-item.svg';

function updateCart(cartItems, cart, itemName) {
  const totalItemsCart = document.getElementById('totalItemsCart');
  const totalCart = document.getElementById('totalCart');
  const modalValues = document.getElementById('modal-values');
  console.log(modalValues, totalCart);

  cart[0].innerHTML = '';
  modalValues.innerHTML = '';
  let sum = 0;
  let acc = 0;
  for (let [itemName, item] of Object.entries(cartItems)) {
    sum += item.quantity;
    totalItemsCart.textContent = sum || 0;

    const valueCart =
      parseFloat(item.price.replace('$', '')) * parseFloat(item.quantity);
    let total = (acc += valueCart);
    if (total) {
      totalCart.textContent = `$${total.toFixed(2)}`;
    }

    const itemId = `item-${itemName}`;
    cart[0].innerHTML += `
     <div class="flex justify-between items-center mb-5" id=${itemId}>
       <div>
           <div>
             <p class="font-semibold">${itemName}</p>
           </div>
         <div class="flex justify-between gap-2">
             <p class="text-red-500 font-semibold">${item.quantity}x</p>
             <p>@${item.price}</p>
             <p>$${valueCart}</p>
         </div>
       </div>
       <div >
             <button class="self-start bg-red-600 p-2 rounded-full btnRemove" data-item="${itemName}" >
                 <img src=${iconClose} alt="icon close">
             </button>
       </div>
     </div>         
 `;
    console.log(cartItems);
    modalValues.innerHTML += `
    <div>
      <p class="font-semibold">${itemName}</p>
    </div>
      
    `;
  }

  const btnRemove = document.getElementsByClassName('btnRemove');
  function removeItem(itemNameId, cartItems, cart, itemName) {
    removeElement(cartItems[itemNameId].idx);
    delete cartItems[itemNameId];
    totalItemsCart.textContent = 0;
    updateCart(cartItems, cart, itemName);
    atualizeItemsCart();
  }

  function atualizeItemsCart() {
    const containerOrders = document.getElementsByClassName('container-orders');
    const orderImage = document.getElementsByClassName('order-img');
    if (totalItemsCart.textContent === '0') {
      containerOrders[0].classList.add('hidden');
      orderImage[0].classList.remove('hidden');
    }
  }

  Array.from(btnRemove).forEach((item, index) => {
    btnRemove[index].addEventListener('click', function () {
      const itemNameId = this.getAttribute('data-item');
      removeItem(itemNameId, cartItems, cart, itemName);
    });
  });
}

function removeElement(index) {
  const btnCart = document.getElementsByClassName('btnCart');
  const productAdd = document.getElementsByClassName('productAdd');
  const containerBtn = document.getElementsByClassName('container-btn');
  const productList = document.getElementsByClassName('imgProd');

  btnCart[index].classList.remove('hidden');
  productAdd[index].classList.add('hidden');
  containerBtn[index].classList.remove('!bg-red-600');
  productList[index].classList.remove('b-product');
}

export { updateCart };
