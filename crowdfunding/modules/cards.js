const objectCards = [
  {
    title: 'Pledge with no reward',
    text:
      'Choose to support us without a reward if you simply believe in our project. As a backer, \n' +
      '  you will be signed up to receive product updates via email.',
  },
  {
    title: 'Bamboo Stand',
    value: 'Pledge $25 or more',
    text:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and \n" +
      '  you’ll be added to a special Backer member list.',
    quatity: '101',
    nameBtn: 'Select Reward ',
  },

  {
    title: 'Black Edition Stand',
    value: 'Pledge $75 or more',
    text:
      ' You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer \n' +
      '  member list. Shipping is included.',
    quatity: '64',
    nameBtn: 'Select Reward',
  },
  {
    title: 'Mahogany Special Edition',
    value: ' Pledge $200 or more',
    text:
      'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added \n' +
      '  to our Backer member list. Shipping is included.',
    quatity: '0',
    nameBtn: 'Out of Stock',
  },
];

function cardsPlan() {
  const card = document.getElementById('cards');
  const cardsPlanHtml = document.createElement('div');
  cardsPlanHtml.innerHTML = objectCards
    .map((item, index) => {
      return `
			<div id=card-${index}  class="border-2 border-solid border-gray-300 rounded-md p-5">
              <div class="sm:flex justify-between items-center sm:mb-5"> 
                   <p class="font-bold">${item.title}</p>
                   <p class="text-dark-cyan font-semibold">${item.value}</p>
              </div>				
                  <p class="text-gray-500 mb-5">${item.text}</p>
              <div class="sm:flex justify-between items-center"> 
                  <p class="font-bold text-2xl">${item.quatity} <span class="font-normal text-gray-500 text-[16px]">left</span></p>
                  <button class="bg-moderate-cyan py-3 px-8 rounded-3xl font-semibold text-white mr-3 hover:bg-dark-cyan ">${item.nameBtn}</button>
              </div>					
			</div>
		`;
    })
    .join(' ');
  card.appendChild(cardsPlanHtml);
}

function modal() {
  const modal = document.getElementById('modal');
  const btnProject = document.getElementById('btnProject');
  const cardToModal = document.createElement('div');
  cardToModal.innerHTML = objectCards
    .map((el, index) => {
      return `
        <div id="card-modal-${index}" class="cursor-pointer ">
        <div class="border-2 border-solid border-gray-300 rounded-md p-5"> 
           <div class="flex items-center mb-5 gap-5"> 
<!--              <button id="selectModal"></button>-->
                <input type="radio" id="selectModal" class="h-6 w-6 " name="radioModal"/>
              <div> 
                <p class="font-bold">${el.title}</p> 
                <p id="card-value" class="text-dark-cyan font-semibold">${el.value}</p> 
              </div>
        </div>               				
              <p class="text-gray-500 mb-5">${el.text}</p>  
              <p id="card-quantity" class="font-bold text-2xl">${el.quatity} <span class="font-normal text-gray-500 text-[16px]">left</span></p>
        </div>                     			
        </div> `;
    })
    .join(' ');

  modal.appendChild(cardToModal);
  eventModal(btnProject, modal);
}

function eventModal(openModal, modal) {
  const closeModal = document.getElementById('closeModal');

  openModal.addEventListener('click', () => {
    modal.classList.toggle('hidden');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.toggle('hidden');
  });
}

export { cardsPlan, modal };
