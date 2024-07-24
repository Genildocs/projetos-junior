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
  list.className = 'opacity-0 invisible ';
  list.id = 'menu';
  list.innerHTML = listItems
    .map((item, idx) => {
      return `<li id="item-${idx}" class="text-black sm:text-white font-semibold flex ">
                <a href="#">${item}</a>  
              </li>
              <hr/>  
            `;
    })
    .join(' ');
  listMenu.appendChild(btnClose);
  listMenu.appendChild(btnOpen);
  listMenu.appendChild(list);

  function eventToogle() {
    document.body.classList.toggle('overflow-hidden');
    btnClose.classList.toggle('hidden');
    btnOpen.classList.toggle('hidden');
    document.getElementById('overlay').classList.toggle('!w-full');
    list.classList.toggle('opacity-0');
    list.classList.toggle('invisible');
  }

  btnClose.addEventListener('click', eventToogle);
  btnOpen.addEventListener('click', eventToogle);
}

export { addListHtml };
