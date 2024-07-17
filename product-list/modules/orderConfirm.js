import {updateCart} from "./updateCart.js";

function orderConfirm() {
  const orderContainer = document.getElementById('container-products')
  const OrderConfirm = document.createElement('div');
  OrderConfirm.className = 'order-confirm bg-white p-5  rounded-md absolute  z-50 ';
  orderContainer.prepend(OrderConfirm);
  elementsText(OrderConfirm);
  iconConfirmed(OrderConfirm);
  OrderConfirm.append(btnNewOrder())
}


function iconConfirmed(OrderConfirm){
  const divConfirmed = document.createElement('div');
  const imgConfirmed = document.createElement('img');
  divConfirmed.className = 'mb-5';
  imgConfirmed.className = 'w-[35px] h-[35px]';
  imgConfirmed.src = './assets/images/icon-order-confirmed.svg';
  divConfirmed.appendChild(imgConfirmed)
  OrderConfirm.prepend(divConfirmed)
}

function elementsText(OrderConfirm) {
  const orderText = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  title.innerHTML = 'Order Confirmed';
  title.className = 'text-4xl font-bold mb-2';
  text.innerHTML = 'We hope you enjoy your food';
  orderText.appendChild(title)
  orderText.appendChild(text)
  OrderConfirm.prepend(orderText);

}

function elementsCart(cart) {


}


function btnNewOrder(){
  const divBtn = document.createElement('div');
  const btn = document.createElement('button');
  divBtn.className = ' mt-8';
  btn.className = 'bg-red-600 p-2 w-full rounded-3xl text-white font-semibold';
  btn.id = 'btnNewOrder'
  btn.innerHTML = 'Start New Order'
  divBtn.appendChild(btn)
  return divBtn
}

function confirmOrder(btnConfirm) {
  btnConfirm.addEventListener('click', ()=>{
    document.getElementsByClassName('order-confirm')[0].classList.toggle('hidden')
    document.getElementById('main').classList.add('hidden')
    document.body.style.overflow = 'hidden';

  })

}


export { orderConfirm, confirmOrder,elementsCart };
