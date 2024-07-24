const objectCards = [
  {
    title: 'Bamboo Stand',
    value: 'Piedge $25 or more',
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
				<p class="font-bold">${item.title}</p>
				<p>${item.value}</p>
				<p class="text-gray-500">${item.text}</p>
				<p class="font-bold text-2xl">${item.quatity} <span class="font-normal text-gray-500 text-[16px]">left</span></p>
				<button class="bg-moderate-cyan py-3 px-8 rounded-3xl font-semibold text-white mr-3 hover:bg-dark-cyan ">${item.nameBtn}</button>
			</div>
		`;
    })
    .join(' ');
  card.appendChild(cardsPlanHtml);
}

export { cardsPlan };
