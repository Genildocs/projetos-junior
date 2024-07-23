const productList = document.getElementsByClassName("imgProd");
const btnCart = document.getElementsByClassName("btnCart");
const productAdd = document.getElementsByClassName("productAdd");
const containerBtn = document.getElementsByClassName("container-btn");
const orderImage = document.getElementsByClassName("order-img");
const containerOrders = document.getElementsByClassName("container-orders");

function controlDisplay(index) {
  productList[index].classList.add("b-product");
  btnCart[index].classList.add("hidden");
  productAdd[index].classList.remove("hidden");
  containerBtn[index].classList.add("!bg-red-600");
  orderImage[0].classList.add("hidden");
  containerOrders[0].classList.remove("hidden");
}

function removeElement(index) {
  if (index !== undefined) {
    btnCart[index].classList.remove("hidden");
    productAdd[index].classList.add("hidden");
    containerBtn[index].classList.remove("!bg-red-600");
    productList[index].classList.remove("b-product");
  }

  if (totalItemsCart.textContent === "0") {
    orderImage[0].classList.remove("hidden");
    containerOrders[0].classList.add("hidden");
  }
}

export { controlDisplay, removeElement };
