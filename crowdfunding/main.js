import './style.css';
import Logo from '/assets/images/logo.svg'
import {map} from 'lodash'
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = `
  <header class="flex items-center justify-between h-[10vh] px-3">
    <img src=${Logo} alt="Logotipo" />
    <div id="list-menu" ></div>
  </header>
`;


const listMenu = document.getElementById('list-menu')
function addListHtml(){
  const listItems = ['About','Discover', 'GetStarted']
  let list = document.createElement('ul')
  let iconOpen = document.createElement('img')
  iconOpen.src = '/assets/images/icon-hamburger.svg'
  iconOpen.alt = 'icon format hamburger'
  list.className = 'flex flex-col sm:flex-row gap-5'
  list.id = 'menu'
  list.innerHTML = listItems.map((item, idx)=>{
      return `<li class="text-white flex">
                <a href="#">${item}</a>  
              </li>`
    }).join(' ')
  listMenu.appendChild(iconOpen)
  listMenu.appendChild(list)
}

addListHtml()
});
