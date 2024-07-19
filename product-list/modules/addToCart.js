import {updateCart} from "./updateCart.js";
import pkg from 'lodash';
import {forEach} from "lodash";

function addToCart(btnCart, productList, productAdd, containerBtn, counter, cartItems, cart, description, orderImage, containerOrders){

    Array.from(btnCart).forEach((item, index)=>{
        let itemCart = Array.from(document.querySelectorAll("#container-" + index));

        forEach(itemCart, (item)=>{
            console.log(item[container] )
        })
        item.addEventListener('click', function (){
            productList[index].classList.add('b-product')
            btnCart[index].classList.add('hidden')
            productAdd[index].classList.remove('hidden')
            containerBtn[index].classList.add('!bg-red-600')
            orderImage[0].classList.add('hidden')
            containerOrders[0].classList.remove('hidden')
            parseInt(counter[index].textContent = 1)
            let itemName = description[index].getElementsByTagName('p')[0].textContent
            let itemPrice = description[index].getElementsByTagName('p')[1].textContent
            cartItems[itemName]={
                name: itemName,
                quantity: 1,
                price : itemPrice,
                idx: index
            }



            updateCart(cartItems, cart, itemName)


        })

    })
}






export {addToCart}