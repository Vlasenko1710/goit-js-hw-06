const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const elements = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = option;

  return liEl;
});
console.log(elements);
container.append(...elements);