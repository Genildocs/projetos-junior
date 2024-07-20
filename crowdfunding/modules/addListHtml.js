import iconHamburger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close-menu.svg';
function addListHtml() {
  const listMenu = document.getElementById('list-menu');

  const listItems = ['About', 'Discover', 'Get Started'];
  const list = document.createElement('ul');
  const btnClose = document.createElement('button');
  btnClose.innerHTML = `<img src=${iconHamburger} alt="icon format hamburger" />`;
  btnClose.id = 'btn-close';
  const btnOpen = document.createElement('button');
  btnOpen.innerHTML = `<img src=${iconClose} alt="icon format close" />`;
  btnOpen.id = 'btn-open';
  btnOpen.className = 'hidden';
  list.className = 'sm:flex flex-col sm:flex-row gap-5 hidden ';
  list.id = 'menu';
  list.innerHTML = listItems
    .map((item, idx) => {
      return `<li id="item-${idx}" class="text-black sm:text-white font-semibold flex">
                <a href="#">${item}</a>  
              </li>
              <hr/>  
            `;
    })
    .join(' ');
  listMenu.appendChild(btnClose);
  listMenu.appendChild(btnOpen);
  listMenu.appendChild(btnClose);
  listMenu.appendChild(list);

  function closeMenu() {
    list.classList.toggle('!flex');
    btnClose.classList.toggle('hidden');
    btnOpen.classList.remove('hidden');
  }

  function openMenu() {
    list.classList.toggle('!flex');
    btnClose.classList.remove('hidden');
    btnOpen.classList.add('hidden');
  }

  btnClose.addEventListener('click', closeMenu);
  btnOpen.addEventListener('click', openMenu);
}

export { addListHtml };
