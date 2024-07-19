import "./style.css";
import { data } from "./data.js";
import iconClose from "./assets/images/icon-remove-item.svg";
import iconCarbon from "./assets/images/icon-carbon-neutral.svg";
import iconCart from "./assets/images/icon-add-to-cart.svg";
import cokieImage from "./assets/images/illustration-empty-cart.svg";
import decrement from "./assets/images/icon-decrement-quantity.svg";
import increment from "./assets/images/icon-increment-quantity.svg";
import { addToCart, setupCounter } from "./modules/index.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").innerHTML = `
    <div class="md:px-12 md:py-10">    
    <div class="md:flex md:gap-5 ">
    <div id="container-products" class="z-10 relative">
    <div id="title">
        <h1 class="text-3xl font-bold pb-4 md:pb-10">Desserts</h1> 
    </div>    
    <div class="gridSytem " id="main">    
         ${data
           .map((item, index) => {
             return `
              <div class="relative" id='container-${index}'>
                <div class="mb-3 imgProd ">
                <div class=" sm:hidden">
                    <img src=${item.image.mobile} class="rounded-md cursor-pointer" /> 
                </div> 
                <div class="hidden sm:block cursor-pointer">
                    <img src=${item.image.desktop} class="rounded-md" /> 
                </div>                    
                </div>  
                <div  class="container-btn flex justify-center bg-white border-amber-200 border-solid border-2 p-2 px-4 mx-16 rounded-3xl absolute bottom-[25%]">
                    <button class="flex items-center gap-2 font-semibold btnCart hover:text-red-600" id="btnCart">
                        <img src=${iconCart} alt="cart">
                        Add to Cart
                    </button>
                    <div class="flex items-center gap-[2.5rem] font-semibold  hidden bg-red-600 productAdd ">
                        <button class="btnDecrement">
                            <img src=${decrement} alt="symbol meno">
                        </button>                        
                        <span class="counter text-white">0</span>
                        <button class="btnIncrement ">
                            <img src=${increment} alt="syboml sum">
                        </button>                        
                    </div>
                </div>
                <div class="description">       
                    <p class="category">${item.category}</p>
                    <h2 class="font-bold">${item.name}</h2>
                    <p class="text-red-600 font-semibold">$${item.price}</p>
                </div> 
             </div>
             `;
           })
           .join(" ")}
    </div>  
    </div>
    <div class="p-7 mt-5 md:mt-0 rounded-md md:w-[500px] bg-white md:self-start mb-5">
        <h1 class="text-3xl text-red-600 font-bold">Your cart(<span id="totalItemsCart">0</span>)</h1>
        <div class="order-img" >       
            <div class="flex justify-center py-5">
                <img src=${cokieImage} alt="cokie image" />
            </div>
            <p class="text-center">Your added items will appear here</p>
        </div>  
          <div class="mt-5 hidden container-orders">
            <div class="orderValues" >           
                <div class="cart ">                                    
                  <div class="flex justify-between">
                  <div>
                      <div>
                        <p>Items</p>
                      </div>      
                    <div class="flex justify-between gap-2">
                        <p class="text-red-500">0x</p>
                        <p>@$0.00</p>
                        <p>$0.00</p>                        
                    </div>   
                  </div>
                  <div >
                        <button class="self-start bg-red-600 p-2 rounded-full btnRemove">               
                            <img src=${iconClose} alt="icon close">
                        </button>
                  </div>
                </div>
                </div>            
            </div>
            <div class="flex items-center justify-between my-5">
                <p>Order Total</p>
                <span class="font-bold text-2xl" id="totalCart">$0.00</span>
            </div>
            <div class="flex gap-2">
                <img src=${iconCarbon} alt="icon carbon">
                <p class="my-5">This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button class="bg-red-600 p-3 rounded-3xl w-full font-semibold text-white"  id="btnConfirm">Confirm Order</button>
        </div>        
    </div> 
    </div>  
  </div>
    `;

  const btnCart = document.getElementsByClassName("btnCart");
  const productList = document.getElementsByClassName("imgProd");
  const btnDecrement = document.getElementsByClassName("btnDecrement");
  const btnIncrement = document.getElementsByClassName("btnIncrement");
  const counter = document.getElementsByClassName("counter");
  const containerBtn = document.getElementsByClassName("container-btn");
  const productAdd = document.getElementsByClassName("productAdd");
  const cart = document.getElementsByClassName("cart");
  const totalItemsCart = document.getElementById("totalItemsCart");
  const description = document.querySelectorAll(".description");
  const orderImage = document.getElementsByClassName("order-img");
  const containerOrders = document.getElementsByClassName("container-orders");
  const cartItems = {};

  const containerItems = document.querySelectorAll('#container-2');

  //functions
  addToCart(
    btnCart,
    productList,
    productAdd,
    containerBtn,
    counter,
    cartItems,
    cart,
    description,
    orderImage,
    containerOrders,
    totalItemsCart
  );
  setupCounter(
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
  );
});
